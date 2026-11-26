import { Code2, MessagesSquare, PenTool, Rocket, type LucideIcon } from "lucide-react";
import { process } from "@/data/personal";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

const icons: LucideIcon[] = [MessagesSquare, PenTool, Code2, Rocket];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="How I work"
        title="My Work Process"
        description="A clear, four-step approach from first conversation to launch."
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {process.map((p, i) => {
          const Icon = icons[i] ?? Rocket;
          return (
            <Reveal key={p.step} from={i < 2 ? "left" : "right"} delay={(i % 2) * 0.1} className={i % 2 === 1 ? "lg:mt-12" : ""}>
              <article className="group h-full rounded-3xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-1 hover:border-primary sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-primary/25 transition-colors group-hover:text-primary sm:text-6xl">{p.step}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-highlight text-highlight-foreground sm:h-12 sm:w-12">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                </div>
                <h3 className="mt-4 text-xl text-foreground sm:mt-6 sm:text-3xl">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{p.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
