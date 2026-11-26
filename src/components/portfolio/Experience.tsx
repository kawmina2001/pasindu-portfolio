import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import devlogicLogo from "@/assets/devlogic-logo.png";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const containerRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();

  // Scroll tracking across the career timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 65%"],
  });

  // Smooth physics-based spring response for up & down scrolling
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  // Glowing beacon position that travels dynamically with scroll
  const tracerY = useTransform(scaleY, (v) => `${Math.min(Math.max(v * 100, 0), 100)}%`);

  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="Career"
        title="My Work Experience"
        description="Industry internships and freelance work that shape how I build software."
      />

      <div className="relative">
        <ol ref={containerRef} className="relative space-y-8 sm:space-y-10">
          {/* Timeline Track & Animated Glowing Scroll Beam */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-6 bottom-8 left-5 -translate-x-1/2 w-4 md:left-1/2 z-0"
          >
            {/* Background static guide rail */}
            <div className="h-full w-0.5 mx-auto bg-border/60 rounded-full" />

            {/* Dynamic scroll-driven glowing energy beam */}
            {!reduce && (
              <motion.div
                style={{ scaleY, originY: 0 }}
                className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-primary via-highlight to-primary shadow-[0_0_14px_rgba(255,107,0,0.75)]"
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

          {experiences.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <li key={exp.position + exp.company} className="relative grid md:grid-cols-2 md:gap-16">
                <span
                  aria-hidden
                  className="absolute left-5 top-6 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground sm:h-10 sm:w-10 md:left-1/2 shadow-soft transition-transform duration-300 hover:scale-110"
                >
                  <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <Reveal
                  from={left ? "left" : "right"}
                  className={cn("pl-12 sm:pl-14 md:pl-0", left ? "md:col-start-1" : "md:col-start-2")}
                >
                  <article className="rounded-3xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-[0.7rem] font-bold uppercase sm:px-3 sm:py-1 sm:text-xs",
                          exp.current ? "bg-highlight text-highlight-foreground" : "bg-muted text-muted-foreground",
                        )}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl leading-tight text-foreground sm:mt-4 sm:text-3xl">{exp.position}</h3>
                    {exp.company === "DevLogic Labs" ? (
                      <div className="mt-1">
                        <span className="group inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-2.5 py-1 text-sm font-extrabold normal-case text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:border-primary/60 cursor-pointer">
                          <img
                            src={devlogicLogo}
                            alt="DevLogic Labs logo"
                            className="h-4 w-4 rounded-md object-cover transition-transform duration-300 group-hover:rotate-6 group-hover:scale-115"
                          />
                          DevLogic Labs
                        </span>
                      </div>
                    ) : (
                      <p className="mt-0.5 text-sm font-semibold text-primary sm:mt-1 sm:text-base">{exp.company}</p>
                    )}
                    {exp.location && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
                        <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> {exp.location}
                      </p>
                    )}
                    {exp.responsibilities.length > 0 ? (
                      <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:space-y-2 sm:text-sm">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {r}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-xs italic text-muted-foreground sm:text-sm">Responsibilities to be added.</p>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
