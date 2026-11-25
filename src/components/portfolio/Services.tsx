import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";
import devlogicLogo from "@/assets/devlogic-logo.png";
import { agencyServicesIntro, serviceCategories, services, type ServiceCategory } from "@/data/services";
import { agencyWhatsappLink } from "@/data/personal";
import { cn } from "@/lib/utils";
import { Reveal, sideFor } from "./motion";
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
      return "Service";
  }
}

export function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const reduce = useReducedMotion();

  const filteredServices =
    activeCategory === "all" ? services : services.filter((s) => s.category === activeCategory);

  const handleQuickPillClick = (serviceId: string, category: ServiceCategory) => {
    setActiveCategory(category);
    // Smoothly scroll to the target card after filter settles
    setTimeout(() => {
      const el = document.getElementById(`service-${serviceId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

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

      {/* DevLogic Labs Agency Intro Banner */}
      <Reveal from="up" className="mb-6 sm:mb-8">
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

      {/* Quick Services Directory — All 18 Services at a glance (No long scrolling required) */}
      <Reveal from="up" delay={0.05} className="mb-8">
        <div className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md p-5 sm:p-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/15 text-primary">
                <Zap className="h-4 w-4" />
              </span>
              <div>
                <h4 className="font-display text-sm uppercase tracking-wide text-foreground sm:text-base">
                  Quick Services Directory
                </h4>
                <p className="text-[0.72rem] text-muted-foreground sm:text-xs">
                  All 18 custom solutions at a glance — click any service to view details immediately
                </p>
              </div>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-primary border border-primary/25">
              18 Solutions Available
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {services.map((s, idx) => {
              const Icon = s.icon;
              const isSelected = activeCategory === "all" || activeCategory === s.category;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleQuickPillClick(s.id, s.category)}
                  className={cn(
                    "group inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isSelected
                      ? "border-border/90 bg-card text-foreground hover:border-primary/60 hover:bg-primary/5 hover:shadow-xs"
                      : "border-transparent bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                  title={`View details for ${s.title}`}
                >
                  <span className="text-[0.65rem] font-bold text-muted-foreground/60 font-mono">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-3.5 w-3.5 shrink-0 text-primary transition-transform group-hover:scale-115" />
                  <span className="text-[0.75rem] font-semibold">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Category Tabs with Animated Sliding Pill */}
      <Reveal from="up" delay={0.08} className="mb-6 sm:mb-8">
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
                    className="absolute inset-0 rounded-full bg-primary shadow-glow"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat.label}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.2 text-[0.62rem] font-extrabold",
                      isActive
                        ? "bg-primary-foreground/25 text-primary-foreground"
                        : "bg-muted text-muted-foreground",
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

      {/* Filtered Detailed Services Grid */}
      <motion.div layout className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((s, i) => {
            const Icon = s.icon;
            const overallNumber = services.findIndex((item) => item.id === s.id) + 1;
            return (
              <motion.div
                layout
                key={s.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                id={`service-${s.id}`}
                className="flex flex-col h-full scroll-mt-28"
              >
                <Reveal
                  key={s.id}
                  from={sideFor(i)}
                  delay={(i % 3) * 0.06}
                  distance={48}
                  className="flex flex-col h-full"
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-elegant sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 sm:h-14 sm:w-14">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </span>
                      <div className="flex flex-col items-end gap-1">
                        <span className="font-display text-2xl text-muted-foreground/30 sm:text-3xl">
                          {String(overallNumber).padStart(2, "0")}
                        </span>
                        <span className="rounded-full bg-muted/60 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground">
                          {getCategoryLabel(s.category)}
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-4 text-lg leading-tight text-foreground sm:mt-5 sm:text-2xl">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:mt-2.5 sm:text-sm">
                      {s.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-5 sm:pt-6 border-t border-border/50">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 rounded-full bg-highlight px-3.5 py-1.5 text-xs font-bold uppercase text-highlight-foreground transition-all hover:scale-105 hover:bg-highlight/90 shadow-xs"
                      >
                        Discuss <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={agencyWhatsappLink(`Hi DevLogic Labs, I'd like to consult on ${s.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[0.72rem] font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        Inquire on WhatsApp →
                      </a>
                    </div>
                  </article>
                </Reveal>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
