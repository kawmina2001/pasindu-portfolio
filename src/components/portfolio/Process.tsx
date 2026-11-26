import { useState, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight, Code2, MessagesSquare, PenTool, Rocket, type LucideIcon } from "lucide-react";
import { process } from "@/data/personal";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const icons: LucideIcon[] = [MessagesSquare, PenTool, Code2, Rocket];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const numberVariants = {
  hidden: { opacity: 0.25, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 0.45,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.12 },
  }),
};

const iconVariants = {
  hidden: { scale: 0.7, rotate: -15 },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, delay: i * 0.12 + 0.1, type: "spring" as const, stiffness: 260 },
  }),
};

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const lastScrollY = useRef(0);

  // Scroll tracking across the 4-step process section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 45%"],
  });

  // Track scroll direction & active step as user scrolls
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine active step based on scroll position (0 to 3)
    const stepIndex = Math.min(Math.floor(latest * process.length), process.length - 1);
    setActiveStep(Math.max(0, stepIndex));

    if (latest < lastScrollY.current - 0.003) {
      setIsScrollingBack(true);
    } else if (latest > lastScrollY.current + 0.003) {
      setIsScrollingBack(false);
    }
    lastScrollY.current = latest;
  });

  // Smooth physics spring response for up & down scrolling
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  // Rocket emoji position traveling from Step 1 (12.5%) to Step 4 (87.5%)
  const rocketX = useTransform(scaleX, (v) => `${12.5 + Math.min(Math.max(v * 75, 0), 75)}%`);

  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="How I work"
        title="My Work Process"
        description="A clear, four-step approach from first conversation to launch."
      />

      <div ref={containerRef} className="relative mt-8 sm:mt-12">
        {/* ── Scroll-Driven Connecting Flow Beam with Traveling Rocket 🚀 ── */}
        <div aria-hidden className="relative mb-8 block">
          {/* Static background guide track */}
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 -translate-y-1/2 h-1 bg-border/60 rounded-full" />

          {/* Dynamic scroll-driven glowing energy line */}
          {!reduce && (
            <div className="absolute left-[12.5%] right-[12.5%] top-1/2 -translate-y-1/2 h-1 overflow-visible">
              <motion.div
                style={{ scaleX, originX: 0 }}
                className="h-full w-full rounded-full bg-gradient-to-r from-primary via-highlight to-primary shadow-[0_0_16px_rgba(255,107,0,0.85)]"
              />
            </div>
          )}

          {/* ── Traveling Horizontal Rocket Icon along the neon beam ── */}
          {!reduce && (
            <motion.div
              style={{ left: rocketX }}
              className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center"
            >
              <div
                className={cn(
                  "relative flex items-center justify-center rounded-full bg-card border-2 border-primary/70 p-2 shadow-[0_0_16px_rgba(255,107,0,0.85)] transition-transform duration-200",
                  isScrollingBack ? "-scale-x-100" : "scale-x-100",
                )}
              >
                {/* Glowing neon rocket thruster exhaust flame */}
                <span className="absolute -left-3.5 top-1/2 -translate-y-1/2 h-2.5 w-4 rounded-l-full bg-gradient-to-l from-highlight via-primary to-transparent blur-[1px] animate-pulse" />
                <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 h-1 w-2 rounded-l-full bg-white blur-[0.5px]" />

                {/* 100% Perfectly Horizontal Rocket Icon (nose points straight forward along beam) */}
                <Rocket className="h-4 w-4 text-primary rotate-45 transform-gpu" />
              </div>
            </motion.div>
          )}

          {/* 4 Step Milestone Node Markers with downward light beam */}
          <div className="relative h-6 flex justify-between px-[12.5%]">
            {process.map((p, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <div key={`dot-${p.step}`} className="relative flex flex-col items-center">
                  <div
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-full border-2 bg-card shadow-xs transition-all duration-300",
                      isCurrent
                        ? "border-primary scale-125 shadow-[0_0_12px_var(--color-primary)]"
                        : "border-background hover:scale-110",
                    )}
                  >
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-colors duration-300",
                        isCurrent ? "bg-highlight" : "bg-primary",
                      )}
                    />
                  </div>
                  {/* Subtle drop light beam pointing down towards the card */}
                  {isCurrent && (
                    <div className="absolute top-5 h-4 w-px bg-gradient-to-b from-primary via-primary/60 to-transparent shadow-[0_0_8px_var(--color-primary)] animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 4 Process Cards (Animates dynamically as user scrolls down & up) ── */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {process.map((p, i) => {
            const Icon = icons[i] ?? Rocket;

            return (
              <motion.div
                key={p.step}
                custom={i}
                initial={reduce ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants}
                className={cn("h-full", i % 2 === 1 ? "lg:mt-10" : "")}
              >
                <article
                  className={cn(
                    "group relative h-full overflow-hidden rounded-3xl border bg-card p-5 transition-all duration-300 sm:p-6",
                    activeStep === i
                      ? "border-primary/80 shadow-[0_20px_40px_-10px_rgba(255,107,0,0.32)] -translate-y-2 ring-1 ring-primary/25"
                      : "border-border shadow-soft hover:-translate-y-2 hover:border-primary hover:shadow-[0_14px_32px_-10px_rgba(255,107,0,0.22)]",
                  )}
                >
                  {/* Top glowing ambient shadow falling from above into the card while scrolling */}
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/25 via-primary/5 to-transparent transition-opacity duration-300",
                      activeStep === i ? "opacity-100" : "opacity-30 group-hover:opacity-75",
                    )}
                  />

                  {/* Top glowing beam line that casts downward shadow */}
                  {!reduce && (
                    <motion.div
                      aria-hidden
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.65, delay: i * 0.12 + 0.15, ease: "easeOut" }}
                      className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_4px_16px_rgba(255,107,0,0.9)]"
                    />
                  )}

                  {/* Corner ambient radial glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-125"
                  />

                  {/* Top Header: Step Number & Animated Icon Badge */}
                  <div className="flex items-center justify-between">
                    <motion.span
                      custom={i}
                      initial={reduce ? "visible" : "hidden"}
                      whileInView="visible"
                      viewport={{ once: false }}
                      variants={numberVariants}
                      className="font-display text-4xl font-extrabold text-primary transition-all duration-300 group-hover:text-primary group-hover:opacity-100 sm:text-6xl"
                    >
                      {p.step}
                    </motion.span>
                    <motion.span
                      custom={i}
                      initial={reduce ? "visible" : "hidden"}
                      whileInView="visible"
                      viewport={{ once: false }}
                      variants={iconVariants}
                      className="grid h-10 w-10 place-items-center rounded-2xl bg-highlight text-highlight-foreground shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_var(--color-primary)] sm:h-12 sm:w-12"
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.span>
                  </div>

                  {/* Step Title & Text */}
                  <h3 className="mt-4 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:mt-6 sm:text-2xl lg:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90 sm:text-sm">
                    {p.text}
                  </p>

                  {/* Step Flow Arrow Indicator on desktop */}
                  {i < 3 && (
                    <div
                      aria-hidden
                      className="hidden lg:flex absolute top-6 -right-3 z-20 h-6 w-6 items-center justify-center rounded-full border border-border bg-card shadow-xs text-primary/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  )}
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
