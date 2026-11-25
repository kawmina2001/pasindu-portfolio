import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Info, ChevronDown, ChevronUp } from "lucide-react";
import devlogicLogo from "@/assets/devlogic-logo.png";
import { agencyServicesIntro, serviceCategories, services, type ServiceCategory, type Service } from "@/data/services";
import { agencyWhatsappLink } from "@/data/personal";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

/* ─────────────────────────────────────────────
   Service chip — icon + title + hover popup
───────────────────────────────────────────── */
function ServiceChip({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  // Close popup on outside click
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        chipRef.current &&
        !chipRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="relative">
      {/* ── The chip itself ── */}
      <div
        ref={chipRef}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-haspopup="dialog"
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen((v) => !v)}
        className={cn(
          "group flex cursor-pointer items-center gap-2.5 rounded-2xl border px-4 py-3 transition-all duration-200 select-none",
          "outline-none focus-visible:ring-2 focus-visible:ring-primary",
          open
            ? "border-primary/70 bg-primary/8 shadow-sm"
            : "border-border/80 bg-card hover:border-primary/50 hover:bg-primary/5 hover:shadow-xs",
        )}
        onClick={() => setOpen((v) => !v)}
      >
        {/* Icon */}
        <span
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-all duration-200",
            open
              ? "bg-primary text-primary-foreground scale-105"
              : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105",
          )}
        >
          <Icon className="h-4 w-4" />
        </span>

        {/* Title */}
        <span
          className={cn(
            "flex-1 text-sm font-semibold leading-snug transition-colors",
            open ? "text-foreground" : "text-foreground/90 group-hover:text-foreground",
          )}
        >
          {service.title}
        </span>

        {/* Info toggle indicator */}
        <span
          className={cn(
            "shrink-0 rounded-full p-1 transition-all duration-200",
            open
              ? "bg-primary text-primary-foreground rotate-0"
              : "bg-muted text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary",
          )}
        >
          {open ? <ChevronUp className="h-3.5 w-3.5" /> : <Info className="h-3.5 w-3.5" />}
        </span>
      </div>

      {/* ── Popup description ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={popupRef}
            role="dialog"
            aria-label={`Details for ${service.title}`}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 z-50 mt-1.5 overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-elegant"
            style={{ top: "100%" }}
          >
            <div className="p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                    {service.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border/50 pt-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
                >
                  Discuss this service <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={agencyWhatsappLink(`Hi DevLogic Labs, I'm interested in: ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-xs font-bold text-foreground transition-all hover:border-primary/60 hover:text-primary hover:bg-primary/5"
                >
                  WhatsApp DevLogic Labs →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Services section
───────────────────────────────────────────── */
export function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");

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

      {/* ── Service chips grid ── */}
      <motion.div layout className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((s, i) => {
            // Alternate: left → right → left across the 3-column grid
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
                <Reveal
                  from={from}
                  distance={40}
                  delay={(i % 3) * 0.07}
                  className="h-full"
                >
                  <ServiceChip service={s} index={i} />
                </Reveal>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ── Footer CTA ── */}
      <Reveal from="up" delay={0.1} className="mt-10 sm:mt-14">
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-primary/20 bg-primary/5 py-8 px-5 text-center sm:py-10">
          <p className="text-[0.72rem] font-bold uppercase tracking-widest text-primary sm:text-xs">
            Not sure which service fits your project?
          </p>
          <h4 className="font-display text-2xl uppercase leading-tight text-foreground sm:text-3xl">
            Let's find the right solution together
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105"
            >
              Start a Conversation <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={agencyWhatsappLink("Hi DevLogic Labs, I need help choosing the right service for my project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary/10 hover:border-primary/70"
            >
              WhatsApp DevLogic Labs
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
