import { skillGroups } from "@/data/skills";
import { Reveal, sideFor } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="bg-muted/60 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Tech stack"
          title="Technical Skills"
          description="Languages, frameworks and tools I use to design, build and ship software."
        />
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} from={sideFor(i)} delay={(i % 3) * 0.08}>
              <article className="glass h-full rounded-3xl border border-border p-4 shadow-soft transition-transform hover:-translate-y-1 sm:p-6">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-highlight text-highlight-foreground sm:h-11 sm:w-11">
                    <g.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <h3 className="text-lg text-foreground sm:text-2xl">{g.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground sm:px-3 sm:py-1.5 sm:text-sm"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
