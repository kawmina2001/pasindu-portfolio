import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Code2,
  MessagesSquare,
  PenTool,
  Rocket,
  CheckCircle2,
  Terminal,
  Layers,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { process } from "@/data/personal";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

const icons: LucideIcon[] = [MessagesSquare, PenTool, Code2, Rocket];

// Step badges and micro-deliverables for each phase
const stepMeta = [
  {
    tag: "Phase 01: Discovery",
    badge: "24h Project Blueprint",
    accent: "from-blue-500/20 via-primary/20 to-transparent",
    deliverables: ["Requirement Mapping", "Tech Stack Selection", "Milestone Roadmap"],
  },
  {
    tag: "Phase 02: Architecture",
    badge: "Figma & System Design",
    accent: "from-purple-500/20 via-primary/20 to-transparent",
    deliverables: ["Wireframes & Prototypes", "Responsive UI Tokens", "Database Schema"],
  },
  {
    tag: "Phase 03: Engineering",
    badge: "Production Build",
    accent: "from-emerald-500/20 via-primary/20 to-transparent",
    deliverables: ["Full-Stack Development", "Unit & E2E Testing", "Zero-Vulnerability Audit"],
  },
  {
    tag: "Phase 04: Launch & Scale",
    badge: "Edge Global CDN",
    accent: "from-amber-500/20 via-primary/20 to-transparent",
    deliverables: ["Live Edge Deployment", "99.99% Uptime Guarantee", "24/7 Security & Support"],
  },
];

/**
 * Unique Animated Micro-Simulators for each phase:
 * Phase 1: Dynamic Requirements Soundwave & Radar Scanner
 * Phase 2: Interactive Wireframe Blueprint & Responsive Layout Grid
 * Phase 3: Live Code Matrix & Test Suite Terminal Execution
 * Phase 4: Production Radar Beacon & Edge Launch Monitor
 */
function ProcessVisualGraphic({ stepIndex }: { stepIndex: number }) {
  const reduce = useReducedMotion();

  if (stepIndex === 0) {
    // Phase 1: Requirements Radar & Audio/Signal Wave
    return (
      <div className="relative mt-4 flex h-20 sm:h-24 w-full items-center justify-between overflow-hidden rounded-2xl border border-primary/20 bg-background/80 px-3 sm:px-4 py-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[0.7rem] font-bold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Requirement Analysis
          </div>
          <span className="text-[0.65rem] text-muted-foreground">Mapping scope & timeline</span>
        </div>
        {/* Animated Audio/Frequency Bars */}
        <div className="flex items-end gap-1 h-8 sm:h-10">
          {[40, 75, 55, 90, 60, 85, 45, 100, 65, 80].map((h, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full bg-gradient-to-t from-primary/40 to-primary"
              animate={
                reduce
                  ? false
                  : {
                      height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`],
                    }
              }
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (stepIndex === 1) {
    // Phase 2: Interactive Figma/Blueprint Wireframe Grid
    return (
      <div className="relative mt-4 flex h-20 sm:h-24 w-full flex-col justify-between overflow-hidden rounded-2xl border border-primary/20 bg-background/80 p-2 sm:p-2.5">
        <div className="flex items-center justify-between text-[0.65rem] font-medium text-muted-foreground">
          <span className="flex items-center gap-1 text-primary">
            <Layers className="h-3 w-3" /> UI Architecture
          </span>
          <span className="rounded bg-muted px-1.5 py-0.5 text-[0.6rem] font-mono">1440px Grid</span>
        </div>
        {/* Mini Wireframe Blueprint Blocks */}
        <div className="grid grid-cols-3 gap-1.5">
          <div className="col-span-2 h-4 sm:h-5 rounded-md border border-dashed border-primary/40 bg-primary/10 flex items-center px-1.5">
            <div className="h-1.5 w-12 rounded bg-primary/40" />
          </div>
          <div className="h-4 sm:h-5 rounded-md border border-dashed border-border bg-card flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-highlight" />
          </div>
          <div className="h-4 sm:h-5 rounded-md border border-dashed border-border bg-card" />
          <div className="h-4 sm:h-5 rounded-md border border-dashed border-border bg-card" />
          <div className="h-4 sm:h-5 rounded-md border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-2.5 w-2.5 text-primary" />
          </div>
        </div>
      </div>
    );
  }

  if (stepIndex === 2) {
    // Phase 3: Live Code Compiler & Test Suite Terminal
    return (
      <div className="relative mt-4 flex h-20 sm:h-24 w-full flex-col justify-between overflow-hidden rounded-2xl border border-primary/20 bg-background/90 p-2 font-mono text-[0.65rem]">
        <div className="flex items-center justify-between border-b border-border/60 pb-1 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Terminal className="h-3 w-3 text-primary" />
            <span className="text-[0.6rem] text-foreground">engine.build</span>
          </div>
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-destructive/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
          </div>
        </div>
        <div className="space-y-0.5 text-[0.6rem]">
          <div className="flex items-center gap-1 text-emerald-500">
            <CheckCircle2 className="h-2.5 w-2.5" />
            <span>vitest: 10/10 tests passed</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground">
            <span>audit: 0 vulnerabilities</span>
            <span className="text-primary font-bold">100% clean</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[0.6rem] text-primary">
          <span>&gt; deployed to edge</span>
          <motion.span
            animate={reduce ? false : { opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block h-2.5 w-1 bg-primary"
          />
        </div>
      </div>
    );
  }

  // Phase 4: Production Radar & 24/7 Global Uptime
  return (
    <div className="relative mt-4 flex h-20 sm:h-24 w-full items-center justify-between overflow-hidden rounded-2xl border border-primary/20 bg-background/80 px-3 py-2">
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1 text-[0.7rem] font-bold text-emerald-500">
          <ShieldCheck className="h-3.5 w-3.5" /> 99.99% Uptime
        </span>
        <span className="text-[0.65rem] text-muted-foreground">Vercel Anycast Edge</span>
        <span className="rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 text-[0.6rem] font-semibold w-fit">
          24/7 Active Shield
        </span>
      </div>
      {/* Animated Radar Pulse Rings */}
      <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center">
        {!reduce && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/40"
              animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border border-primary/60"
              animate={{ scale: [1, 1.6], opacity: [0.9, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
            />
          </>
        )}
        <div className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
          <Rocket className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
      </div>
    </div>
  );
}

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Scroll tracking: updates active step dynamically as user scrolls up or down through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress (0 to 1) into 4 step slices
    const stepIndex = Math.min(Math.floor(latest * process.length), process.length - 1);
    const clampedStep = Math.max(0, stepIndex);
    setActiveStep(clampedStep);
  });

  return (
    <section id="process" ref={sectionRef} className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="How I work"
        title="My Work Process"
        description="A transparent, four-phase engineering approach built for speed, clean architecture, and zero downtime."
      />

      {/* ── Scroll-Driven Milestone Progress Tracker ── */}
      <Reveal from="up" className="mt-4 flex flex-col items-center gap-1.5">
        <div className="h-1.5 w-48 sm:w-64 rounded-full bg-border/60 overflow-hidden">
          <motion.div
            style={{ scaleX: scrollYProgress, originX: 0 }}
            className="h-full bg-gradient-to-r from-primary via-highlight to-primary shadow-[0_0_10px_var(--color-primary)]"
          />
        </div>
        <span className="text-[0.65rem] font-mono text-muted-foreground uppercase tracking-widest">
          Scroll-Driven: Phase {activeStep + 1} of {process.length} ({process[activeStep]?.title})
        </span>
      </Reveal>

      {/* ── Interactive Stage Switcher Bar ── */}
      <Reveal from="up" className="mt-6 sm:mt-8 flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-2xl border border-border/80 bg-card p-1 sm:p-1.5 shadow-soft sm:rounded-full">
          {process.map((p, idx) => (
            <button
              key={`tab-${p.step}`}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={cn(
                "relative flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all duration-300 sm:rounded-full sm:px-4 sm:py-2 sm:text-sm cursor-pointer",
                activeStep === idx
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <span className="font-mono text-[0.65rem] sm:text-[0.7rem] opacity-75">{p.step}</span>
              <span className="text-[0.75rem] sm:text-sm">{p.title}</span>
              {activeStep === idx && (
                <motion.span
                  layoutId="active-process-indicator"
                  className="absolute inset-0 -z-10 rounded-xl bg-primary sm:rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </Reveal>

      {/* ── Mobile/Tablet: Single Compact Stage Viewer with Carousel Controls (lg:hidden) ── */}
      <div className="mt-6 lg:hidden">
        <AnimatePresence mode="wait">
          {(() => {
            const p = process[activeStep] ?? process[0]!;
            const Icon = icons[activeStep] ?? Rocket;
            const meta = stepMeta[activeStep] ?? stepMeta[0]!;

            return (
              <motion.div
                key={`mobile-step-${activeStep}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/60 bg-card p-4 sm:p-6 shadow-soft ring-2 ring-primary/20">
                  {/* Dynamic Ambient Glow Gradient */}
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 -top-px h-[3px] bg-gradient-to-r opacity-100",
                      meta.accent,
                    )}
                  />

                  <div>
                    {/* Top Header: Step Number, Badge & Icon */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
                          {p.step}
                        </span>
                        <div className="mt-0.5">
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                            {meta.tag}
                          </span>
                        </div>
                      </div>
                      <span className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-glow">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-3 text-lg sm:text-xl font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {p.text}
                    </p>

                    {/* Deliverables Checklist (Compact on mobile) */}
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1 border-t border-border/50 pt-2.5 text-[0.72rem] text-muted-foreground sm:text-xs">
                      {meta.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3 w-3 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ── Unique Interactive Animated Graphic for this Phase ── */}
                  <ProcessVisualGraphic stepIndex={activeStep} />

                  {/* Bottom Carousel Navigation Controls */}
                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
                    <button
                      type="button"
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : process.length - 1))}
                      className="flex items-center gap-1 rounded-xl border border-border bg-muted/60 px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted active:scale-95 cursor-pointer"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" /> Prev
                    </button>

                    <div className="flex items-center gap-1.5">
                      {process.map((_, dotIdx) => (
                        <button
                          key={`dot-${dotIdx}`}
                          type="button"
                          onClick={() => setActiveStep(dotIdx)}
                          className={cn(
                            "h-2 rounded-full transition-all cursor-pointer",
                            activeStep === dotIdx
                              ? "w-5 bg-primary"
                              : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60",
                          )}
                          aria-label={`Go to step ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveStep((prev) => (prev + 1) % process.length)}
                      className="flex items-center gap-1 rounded-xl border border-border bg-muted/60 px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted active:scale-95 cursor-pointer"
                    >
                      Next <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>

      {/* ── Desktop: Full 4-Column Grid (hidden on mobile, visible on lg) ── */}
      <div className="mt-8 hidden lg:grid lg:grid-cols-4 lg:gap-6">
        {process.map((p, i) => {
          const Icon = icons[i] ?? Rocket;
          const meta = stepMeta[i] ?? stepMeta[0]!;
          const isActive = activeStep === i;

          return (
            <Reveal
              key={p.step}
              from={i < 2 ? "left" : "right"}
              delay={(i % 2) * 0.1}
              className="h-full"
            >
              <article
                onClick={() => setActiveStep(i)}
                className={cn(
                  "group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border bg-card p-5 shadow-soft transition-all duration-300 sm:p-6",
                  isActive
                    ? "border-primary/80 ring-2 ring-primary/20 shadow-[0_14px_36px_-10px_rgba(255,107,0,0.25)] -translate-y-1"
                    : "border-border hover:-translate-y-1 hover:border-primary/50",
                )}
              >
                {/* Dynamic Ambient Glow Gradient per Card */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-x-0 -top-px h-[3px] bg-gradient-to-r transition-opacity duration-300",
                    meta.accent,
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70",
                  )}
                />

                <div>
                  {/* Top Header: Step Number, Badge & Icon */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-display text-4xl font-extrabold text-primary/30 transition-colors group-hover:text-primary sm:text-5xl">
                        {p.step}
                      </span>
                      <div className="mt-0.5">
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                          {meta.tag}
                        </span>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "grid h-11 w-11 place-items-center rounded-2xl transition-all duration-300 sm:h-12 sm:w-12",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-glow scale-110"
                          : "bg-highlight text-highlight-foreground group-hover:scale-105",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 text-xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {p.text}
                  </p>

                  {/* Deliverables Checklist */}
                  <ul className="mt-4 space-y-1.5 border-t border-border/50 pt-3 text-[0.72rem] text-muted-foreground sm:text-xs">
                    {meta.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Unique Interactive Animated Graphic for this Phase ── */}
                <ProcessVisualGraphic stepIndex={i} />
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
