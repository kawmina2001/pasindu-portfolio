import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Asterisk } from "lucide-react";
import { personal } from "@/data/personal";

/** Two rows of role words that glide in opposite directions as you scroll. */
export function RoleMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const fromLeft = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-30%", "0%"]);
  const fromRight = useTransform(scrollYProgress, [0, 1], reduce ? ["-20%", "-20%"] : ["0%", "-30%"]);
  const words = [...personal.roles, ...personal.roles];

  const Row = ({ outline }: { outline?: boolean }) => (
    <div className="flex shrink-0 items-center gap-6 whitespace-nowrap pr-6">
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-6">
          <span className={outline ? "font-display text-5xl uppercase text-muted-foreground/40 sm:text-7xl" : "font-display text-5xl uppercase text-foreground sm:text-7xl"}>
            {w}
          </span>
          <Asterisk className="h-8 w-8 shrink-0 text-primary" aria-hidden />
        </span>
      ))}
    </div>
  );

  return (
    <div ref={ref} aria-hidden className="overflow-hidden py-14 sm:py-20">
      <motion.div style={{ x: fromLeft }} className="flex">
        <Row />
      </motion.div>
      <motion.div style={{ x: fromRight }} className="mt-4 flex">
        <Row outline />
      </motion.div>
    </div>
  );
}
