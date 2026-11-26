import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Code2, MessagesSquare, PenTool, Rocket, type LucideIcon } from "lucide-react";
import { process } from "@/data/personal";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

const icons: LucideIcon[] = [MessagesSquare, PenTool, Code2, Rocket];

// Step milestone positions across a 4-column desktop layout (column centers)
const desktopMilestonePositions = ["12.5%", "37.5%", "62.5%", "87.5%"];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Scroll tracking across the work process section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  // Smooth physics-based spring response for up & down scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  // Horizontal tracer head travels from node 1 (12.5%) to node 4 (87.5%)
  const tracerX = useTransform(smoothProgress, (v) => `${12.5 + Math.min(Math.max(v * 75, 0), 75)}%`);

  // Vertical tracer head for mobile layout (0% to 100%)
  const tracerY = useTransform(smoothProgress, (v) => `${Math.min(Math.max(v * 100, 0), 100)}%`);

  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="How I work"
        title="My Work Process"
        description="A clear, four-step engineering approach from first conversation to launch."
      />

      <div ref={containerRef} className="relative mt-8 sm:mt-12">
        {/* ── Desktop Dynamic Glowing Gradient Beam Pipeline (lg only) ── */}
        <div aria-hidden className="relative mb-8 hidden lg:block">
          {/* Static background guide rail */}
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 -translate-y-1/2 h-1 bg-border/60 rounded-full overflow-hidden" />

          {/* Dynamic scroll-driven glowing energy beam */}
          {!reduce && (
            <div className="absolute left-[12.5%] right-[12.5%] top-1/2 -translate-y-1/2 h-1 overflow-visible">
              <motion.div
                style={{ scaleX: smoothProgress, originX: 0 }}
                className="h-full w-full rounded-full bg-gradient-to-r from-primary via-highlight to-primary shadow-[0_0_18px_rgba(255,107,0,0.85)]"
              />
            </div>
          )}

          {/* Traveling glowing pulse beacon head */}
          {!reduce && (
            <motion.div
              style={{ left: tracerX }}
              className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute -inset-1.5 h-7 w-7 rounded-full bg-primary/40 animate-ping" />
                <span className="relative block h-4 w-4 rounded-full bg-highlight border-2 border-primary shadow-[0_0_14px_var(--color-primary)]" />
              </div>
            </motion.div>
          )}

          {/* 4 Milestone Step Nodes along the pipeline */}
          <div className="relative h-10">
            {desktopMilestonePositions.map((pos, idx) => (
              <div
                key={`milestone-${idx}`}
                style={{ left: pos }}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
              >
                <div className="group relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-card shadow-soft transition-all duration-300 hover:scale-125 hover:border-primary">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                </div>
                {/* Vertical connector down towards the card */}
                <div className="h-4 w-px bg-gradient-to-b from-primary/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile/Tablet Vertical Beam Track (< lg only) ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-4 bottom-6 left-4 sm:left-6 -translate-x-1/2 w-4 z-0 lg:hidden"
        >
          {/* Static background guide rail */}
          <div className="h-full w-0.5 mx-auto bg-border/60 rounded-full" />

          {/* Dynamic scroll-driven glowing energy beam */}
          {!reduce && (
            <motion.div
              style={{ scaleY: smoothProgress, originY: 0 }}
              className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-primary via-highlight to-primary shadow-[0_0_14px_rgba(255,107,0,0.8)]"
            />
          )}

          {/* Traveling glowing pulse beacon head */}
          {!reduce && (
            <motion.div
              style={{ top: tracerY }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute -inset-1 h-5 w-5 rounded-full bg-primary/40 animate-ping" />
                <span className="relative block h-3 w-3 rounded-full bg-highlight border-2 border-primary shadow-[0_0_10px_var(--color-primary)]" />
              </div>
            </motion.div>
          )}
        </div>

        {/* ── Process Steps Grid ── */}
        <div className="grid gap-4 pl-8 sm:grid-cols-2 sm:gap-5 sm:pl-10 lg:grid-cols-4 lg:pl-0">
          {process.map((p, i) => {
            const Icon = icons[i] ?? Rocket;
            return (
              <Reveal
                key={p.step}
                from={i < 2 ? "left" : "right"}
                delay={(i % 2) * 0.1}
                className="h-full"
              >
                <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_12px_32px_-10px_rgba(255,107,0,0.22)] sm:p-6">
                  {/* Ambient top glowing beam line */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:h-[3px] group-hover:shadow-[0_0_12px_var(--color-primary)]"
                  />
                  {/* Corner ambient radial glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-125"
                  />

                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl text-primary/30 transition-colors duration-300 group-hover:text-primary sm:text-6xl">
                      {p.step}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-highlight text-highlight-foreground shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_var(--color-primary)] sm:h-12 sm:w-12">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:mt-6 sm:text-2xl lg:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {p.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
