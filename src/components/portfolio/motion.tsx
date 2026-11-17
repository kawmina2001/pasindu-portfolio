import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "left" | "right" | "up" | "down" | "none";

// Shared single IntersectionObserver across the entire portfolio.
// Directly mutates DOM classList to eliminate all React component re-renders during scroll.
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
  if (typeof window === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
          } else {
            el.classList.remove("is-visible");
          }
        }
      },
      { rootMargin: "40px 0px 40px 0px", threshold: 0.05 },
    );
  }
  return sharedObserver;
}

export type RevealProps = {
  children: ReactNode;
  /** Side the element enters from while scrolling into view. */
  from?: Direction;
  delay?: number;
  distance?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

/**
 * Ultra-fast compositor-driven scroll reveal:
 * Uses a single native IntersectionObserver mutating CSS classes directly on the DOM node.
 * 0 React re-renders. 0 JS animation timers. 100% native compositor speed.
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
  style,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    const observer = getSharedObserver();
    if (!observer) return;

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [reduce]);

  if (reduce) {
    return (
      <div ref={ref} className={className} style={style} {...rest}>
        {children}
      </div>
    );
  }

  const dirClass = `reveal-${from}`;

  return (
    <div
      ref={ref}
      className={cn("reveal-init", dirClass, className)}
      style={{
        transitionDelay: delay ? `${delay * 1000}ms` : "0ms",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Alternate entry side by index — even items from the left, odd from the right. */
export const sideFor = (index: number): Direction => (index % 2 === 0 ? "left" : "right");
