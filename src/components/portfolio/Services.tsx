import { ArrowUpRight, Sparkles } from "lucide-react";
import devlogicLogo from "@/assets/devlogic-logo.png";
import { agencyServicesIntro, services } from "@/data/services";
import { agencyWhatsappLink } from "@/data/personal";
import { Reveal, sideFor } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="What I do"
        title="Services by DevLogic Labs"
        description="All custom digital solutions and client projects are professionally engineered and delivered through my agency, DevLogic Labs."
      />

      <Reveal from="up" className="mb-8 sm:mb-10">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-accent/40 p-5 shadow-soft sm:p-7">
          <div aria-hidden className="grid-lines absolute inset-0 opacity-15 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
            <div className="flex items-center gap-4 max-w-2xl">
              <img
                src={devlogicLogo}
                alt="DevLogic Labs logo"
                className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl border border-primary/30 object-cover shadow-sm bg-card p-1"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/25 px-2.5 py-0.5 font-display text-xs text-primary uppercase tracking-wider">
                    <Sparkles className="h-3 w-3" /> {agencyServicesIntro.agencyName}
                  </span>
                  <span className="text-[0.68rem] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {agencyServicesIntro.category}
                  </span>
                </div>
                <h3 className="mt-1.5 font-display text-xl sm:text-2xl uppercase leading-tight text-foreground">
                  {agencyServicesIntro.tagline}
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {agencyServicesIntro.description}
                </p>
              </div>
            </div>
            <div className="shrink-0 flex flex-wrap gap-3">
              <a
                href={agencyWhatsappLink("Hi DevLogic Labs, I'd like to discuss a project with your agency.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105"
              >
                Consult DevLogic Labs <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} from={sideFor(i)} delay={(i % 3) * 0.08} className={i % 3 === 1 ? "lg:translate-y-8" : ""}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-elegant sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 sm:h-14 sm:w-14">
                  <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <span className="font-display text-2xl text-muted-foreground/30 sm:text-3xl">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-lg leading-tight text-foreground sm:mt-6 sm:text-2xl">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">{s.description}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 rounded-full bg-highlight px-3 py-1.5 text-xs font-bold uppercase text-highlight-foreground transition-opacity group-hover:opacity-100 focus:opacity-100 sm:mt-6 sm:opacity-0"
              >
                Discuss <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
