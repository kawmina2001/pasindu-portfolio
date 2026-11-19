import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  tone?: "default" | "panel";
  className?: string;
  align?: "left" | "split";
};

export function SectionHeading({ eyebrow, title, description, tone = "default", className, align = "split" }: Props) {
  const panel = tone === "panel";
  return (
    <div
      className={cn(
        "mb-8 sm:mb-12 grid gap-4 sm:gap-6",
        align === "split" && "md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:items-end",
        className,
      )}
    >
      <Reveal from="left">
        {eyebrow && (
          <p
            className={cn(
              "mb-2 text-[0.7rem] font-bold uppercase tracking-[0.25em] sm:mb-3 sm:text-xs sm:tracking-[0.3em]",
              panel ? "text-highlight" : "text-primary",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            "text-3xl leading-[1] sm:text-6xl lg:text-7xl sm:leading-[0.95]",
            panel ? "text-panel-foreground" : "text-foreground",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal from="right">
          <p className={cn("text-xs leading-relaxed uppercase tracking-wide sm:text-sm", panel ? "text-panel-muted" : "text-muted-foreground")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
