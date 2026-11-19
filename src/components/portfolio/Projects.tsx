import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Check, ExternalLink, Info, ShieldAlert, Sparkles } from "lucide-react";
import { filterProjects, projectFilters, projects, type Project, type ProjectCategory } from "@/data/projects";
import { personal } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  if (project.confidential || project.categories.includes("client")) {
    return (
      <div className={cn("relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-panel-contrast p-6 text-center text-panel-contrast-foreground", className)}>
        <div aria-hidden className="grid-lines absolute inset-0 opacity-20" />
        <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-panel-border bg-panel-card text-highlight shadow-soft sm:h-14 sm:w-14">
          <ShieldAlert className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
        <span className="relative mt-3 font-display text-xs uppercase tracking-wider text-highlight sm:text-sm">
          Client Confidential
        </span>
        <p className="relative mt-1 max-w-[14rem] text-[0.68rem] leading-tight text-panel-muted sm:text-xs">
          Screenshots omitted per client privacy &amp; NDA agreements
        </p>
        <span className="relative mt-2.5 rounded-full border border-panel-border bg-panel-card px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-panel-muted sm:text-[0.68rem]">
          Production Business System
        </span>
      </div>
    );
  }
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        decoding="async"
        width={1200}
        height={912}
        className={cn("h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", className)}
      />
    );
  }
  return (
    <div className={cn("relative grid h-full w-full place-items-center overflow-hidden bg-accent", className)}>
      <div aria-hidden className="grid-lines absolute inset-0 opacity-40" />
      <span className="relative font-display text-8xl text-primary/30">{project.number}</span>
      <span className="absolute bottom-3 left-3 rounded-full bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
        {project.placeholder ? "Details coming soon" : "Preview coming soon"}
      </span>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const from = index % 2 === 0 ? "left" : "right";
  return (
    <Reveal from={from} delay={(index % 3) * 0.06} className={cn("flex flex-col", index % 3 === 1 && "lg:mt-10")}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-panel-border bg-panel-card text-panel-foreground shadow-soft transition-shadow duration-300 hover:shadow-elegant">
        <button type="button" onClick={onOpen} className="relative aspect-[4/3] overflow-hidden" aria-label={`View details of ${project.title}`}>
          <ProjectVisual project={project} />
          <span className="absolute left-3 top-3 rounded-full bg-highlight px-3 py-1 font-display text-sm text-highlight-foreground">
            {project.number}
          </span>
        </button>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="text-xl leading-tight sm:text-2xl">{project.title}</h3>
          {project.subtitle && <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wide text-highlight sm:text-xs">{project.subtitle}</p>}
          <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-panel-muted sm:mt-3 sm:text-sm">{project.description}</p>
          {project.tech.length > 0 && (
            <ul className="mt-3.5 flex flex-wrap gap-1.5 sm:mt-4">
              {project.tech.slice(0, 5).map((t) => (
                <li key={t} className="rounded-full border border-panel-border px-2 py-0.5 text-[0.7rem] sm:px-2.5 sm:text-xs">
                  {t}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-auto flex flex-wrap gap-2 pt-4 sm:pt-5">
            <Button variant="hero" size="sm" className="px-3.5 sm:px-4" onClick={onOpen}>
              View details <ArrowUpRight />
            </Button>
            {project.liveUrl && (
              <Button asChild variant="panel" size="sm" className="px-3.5 sm:px-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink /> Live demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="panel" size="sm" className="px-3.5 sm:px-4">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon /> GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const list = filterProjects(projects, filter);

  return (
    <section id="projects" className="px-2.5 py-6 sm:px-4 sm:py-10">
      <div className="overflow-hidden rounded-[2rem] bg-hero px-4 py-10 text-panel-foreground sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tone="panel"
            eyebrow="Portfolio"
            title="My Recent Works"
            description="A selection of client, personal, academic and research projects. Source codes are available on GitHub."
          />

          <div role="tablist" aria-label="Filter projects" className="-mx-1 mb-8 flex gap-1.5 overflow-x-auto px-1 pb-2 sm:mb-10 sm:gap-2">
            {projectFilters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider transition-colors sm:px-4 sm:py-2 sm:text-xs",
                  filter === f.id
                    ? "border-highlight bg-highlight text-highlight-foreground"
                    : "border-panel-border text-panel-foreground hover:bg-panel-card",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} onOpen={() => setSelected(p)} />
              ))}
            </AnimatePresence>
          </motion.div>
          {list.length === 0 && <p className="text-center text-panel-muted">No projects in this category yet.</p>}

          {/* GitHub Repositories Callout */}
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-panel-border bg-panel-card p-5 text-center sm:mt-12 sm:flex-row sm:p-7 sm:text-left">
            <div className="space-y-1">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-highlight sm:text-xs">
                Source Code &amp; Repositories
              </span>
              <h4 className="font-display text-lg uppercase text-panel-foreground sm:text-2xl">
                Explore All Project Repositories on GitHub
              </h4>
              <p className="max-w-2xl text-xs leading-relaxed text-panel-muted sm:text-sm">
                Source code repositories, architecture details, and active development history for these projects are available directly on my GitHub profile.
              </p>
            </div>
            <Button asChild variant="hero" size="lg" className="shrink-0 font-bold uppercase tracking-wider">
              <a href={personal.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" /> View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[92vh] w-[95vw] max-w-5xl overflow-y-auto md:overflow-hidden rounded-3xl border border-border/70 bg-card p-0 shadow-2xl">
          {selected && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Left Column: Larger Visual & Direct Action Buttons */}
              <div className="md:col-span-5 flex flex-col justify-between bg-muted/20 p-6 sm:p-7 md:p-8 border-b md:border-b-0 md:border-r border-border/60">
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl border border-border/50 shadow-sm bg-muted/40">
                    <ProjectVisual project={selected} />
                  </div>
                  {selected.confidential && (
                    <div className="flex items-start gap-2.5 rounded-2xl border border-border/70 bg-background/80 p-3.5 text-xs text-muted-foreground shadow-xs">
                      <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="font-bold text-foreground">Confidential Project</p>
                        <p className="text-[0.72rem] leading-tight mt-0.5">Proprietary UI screens omitted per client privacy &amp; NDA agreements.</p>
                      </div>
                    </div>
                  )}
                  {selected.note && !selected.confidential && (
                    <p className="flex items-center gap-2 rounded-xl border border-border/50 bg-background/60 p-3 text-xs text-muted-foreground">
                      <Info className="h-4 w-4 shrink-0 text-primary" /> {selected.note}
                    </p>
                  )}
                </div>

                {/* Direct Action Buttons Under Preview */}
                <div className="mt-6 flex flex-col gap-2.5">
                  {selected.liveUrl && (
                    <Button asChild variant="brand" size="default" className="w-full font-bold uppercase tracking-wider h-10 shadow-sm">
                      <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                  <Button asChild variant="soft" size="default" className="w-full font-bold uppercase tracking-wider h-10">
                    <a href={selected.githubUrl || personal.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" /> {selected.githubUrl ? "View Repository" : "View on GitHub"}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Spacious Overview & Highlights */}
              <div className="md:col-span-7 flex flex-col justify-between p-6 sm:p-8 md:p-9 gap-5">
                <DialogHeader className="flex flex-col gap-2.5 text-left">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                      Project {selected.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      • {selected.categories.join(" / ")}
                    </span>
                  </div>
                  <DialogTitle className="font-display text-2xl sm:text-3xl uppercase leading-snug tracking-tight text-foreground">
                    {selected.title}
                  </DialogTitle>
                  {selected.subtitle && (
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
                      {selected.subtitle}
                    </p>
                  )}
                  <DialogDescription className="pt-1 text-xs sm:text-sm md:text-[0.92rem] leading-relaxed text-muted-foreground line-clamp-4 md:line-clamp-5">
                    {selected.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Key Highlights (Concise List) */}
                {selected.features && selected.features.length > 0 && (
                  <div className="flex flex-col gap-2.5 rounded-2xl border border-border/60 bg-muted/30 p-4 sm:p-5">
                    <h4 className="flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-foreground">
                      <Sparkles className="h-3.5 w-3.5 text-primary" /> Key Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-foreground/90">
                      {selected.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                {selected.tech.length > 0 && (
                  <div>
                    <h4 className="mb-2.5 font-display text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Technologies &amp; Tools
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {selected.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-border/60 bg-secondary/60 px-3.5 py-1 text-xs font-semibold text-secondary-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
