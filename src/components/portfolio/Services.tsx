import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import devlogicLogo from "@/assets/devlogic-logo.png";
import {
  agencyServicesIntro,
  serviceCategories,
  services,
  type ServiceCategory,
  type Service,
} from "@/data/services";
import { agencyWhatsappLink } from "@/data/personal";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WhatsappIcon } from "./icons";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

function getCategoryLabel(category: string): string {
  switch (category) {
    case "apps":
      return "Web & Mobile App";
    case "systems":
      return "Business System";
    case "websites":
      return "Website & Store";
    case "design-support":
      return "UI/UX & Support";
    default:
      return "Digital Solution";
  }
}

/* ─────────────────────────────────────────────
   Service chip — icon + title + Details button
───────────────────────────────────────────── */
function ServiceChip({
  service,
  onOpen,
}: {
  service: Service;
  onOpen: () => void;
}) {
  const Icon = service.icon;

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      onClick={onOpen}
      className={cn(
        "group relative flex cursor-pointer items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 transition-all duration-200 select-none",
        "border-border/80 bg-card hover:border-primary/60 hover:bg-primary/5 hover:shadow-soft hover:-translate-y-0.5",
        "outline-none focus-visible:ring-2 focus-visible:ring-primary",
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        {/* Icon */}
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 shadow-xs">
          <Icon className="h-4 w-4" />
        </span>

        {/* Title & category badge */}
        <div className="min-w-0">
          <span className="block text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-1">
            {service.title}
          </span>
          <span className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground/80">
            {getCategoryLabel(service.category)}
          </span>
        </div>
      </div>

      {/* Details action button */}
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border/80 bg-muted/40 px-2.5 py-1 text-[0.68rem] font-bold text-muted-foreground transition-all duration-200 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground shadow-xs">
        <span>Details</span>
        <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Services section
───────────────────────────────────────────── */
export function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filtered =
    activeCategory === "all" ? services : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="What I do"
        title={
          <>
            Services by <span className="normal-case font-black text-primary">DevLogic Labs</span>
          </>
        }
        description="All custom digital solutions and client projects are professionally engineered and delivered through my agency, DevLogic Labs."
      />

      {/* ── Agency banner ── */}
      <Reveal from="up" className="mb-8 sm:mb-10">
        <div className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-accent/40 p-5 shadow-soft transition-all duration-300 hover:border-primary/60 hover:shadow-glow sm:p-7">
          <div aria-hidden className="grid-lines absolute inset-0 opacity-15 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
            <div className="flex items-center gap-4 max-w-2xl">
              <img
                src={devlogicLogo}
                alt="DevLogic Labs logo"
                className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl border border-primary/30 object-cover shadow-sm bg-card p-1 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/30 px-3 py-1 font-sans text-xs font-extrabold text-primary normal-case transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Sparkles className="h-3.5 w-3.5" /> DevLogic Labs
                  </span>
                  <span className="text-[0.68rem] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {agencyServicesIntro.category}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl sm:text-2xl uppercase leading-tight text-foreground">
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
                Consult <span className="normal-case font-extrabold">DevLogic Labs</span> <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Category Tabs ── */}
      <Reveal from="up" delay={0.06} className="mb-6 sm:mb-8">
        <div
          role="tablist"
          aria-label="Filter services by category"
          className="-mx-1 flex gap-2 overflow-x-auto p-1 pb-2.5 sm:gap-2.5"
        >
          {serviceCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all" ? services.length : services.filter((s) => s.category === cat.id).length;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "relative shrink-0 rounded-full px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-wider transition-colors duration-200 sm:px-4 sm:py-2 sm:text-xs outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground border border-border/80 hover:border-border hover:bg-card/70",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-services-category"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat.label}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[0.6rem] font-extrabold leading-none",
                      isActive ? "bg-white/25 text-primary-foreground" : "bg-muted text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* ── Service chips grid with smooth dual-sided scroll reveal ── */}
      <motion.div layout className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((s, i) => {
            const col = i % 3;
            const from = col === 0 ? "left" : col === 2 ? "right" : "up";
            return (
              <motion.div
                layout
                key={s.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <Reveal from={from} delay={(i % 3) * 0.09} className="h-full">
                  <ServiceChip service={s} onOpen={() => setSelectedService(s)} />
                </Reveal>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ── Service Details Modal Dialog (Portaled to body - zero background text overlapping) ── */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="w-[92vw] max-w-lg rounded-3xl border border-primary/30 bg-card p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          {selectedService && (
            <div>
              <DialogHeader className="text-left">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                      <selectedService.icon className="h-7 w-7" />
                    </span>
                    <div>
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-[0.68rem] font-extrabold uppercase tracking-wider text-primary border border-primary/25">
                        {getCategoryLabel(selectedService.category)}
                      </span>
                      <p className="text-[0.72rem] font-mono text-muted-foreground mt-1">
                        Service #{String(services.findIndex((s) => s.id === selectedService.id) + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                </div>

                <DialogTitle className="text-xl sm:text-2xl font-display uppercase tracking-tight text-foreground leading-tight">
                  {selectedService.title}
                </DialogTitle>

                <DialogDescription className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>

              {/* DevLogic Labs standard card */}
              <div className="mt-6 rounded-2xl border border-border/80 bg-muted/40 p-4">
                <p className="text-xs font-bold text-foreground mb-1 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" /> DevLogic Labs Production Standard
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every solution is custom-architected with responsive design, secure APIs, production-ready code, and dedicated maintenance support.
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={agencyWhatsappLink(`Hi DevLogic Labs, I'd like to consult on: ${selectedService.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-102"
                >
                  <WhatsappIcon className="h-4 w-4" /> Inquire on WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/60 hover:text-primary"
                >
                  Discuss Project <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
