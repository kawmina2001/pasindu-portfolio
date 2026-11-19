import { Award, GraduationCap, Users } from "lucide-react";
import { certifications, education, extracurricular } from "@/data/personal";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="bg-muted/60 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Learning"
          title="Education & Certifications"
          description="Academic background, certifications and activities beyond the classroom."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal from="left" className="lg:col-span-7">
            <article className="relative h-full overflow-hidden rounded-3xl bg-hero p-6 text-panel-foreground shadow-elegant sm:p-10">
              <div aria-hidden className="grid-lines absolute inset-0 opacity-40" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-highlight text-highlight-foreground sm:h-14 sm:w-14">
                  <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-highlight sm:mt-6 sm:text-xs sm:tracking-[0.3em]">{education.period}</p>
                <h3 className="mt-2 text-2xl leading-tight sm:text-4xl lg:text-5xl">{education.degree}</h3>
                <p className="mt-2 text-base font-semibold text-panel-muted sm:mt-3 sm:text-lg">{education.university}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-panel-muted">
                  <span className="rounded-full border border-panel-border bg-panel-card px-3.5 py-1.5 text-panel-foreground">
                    Final Year Undergraduate
                  </span>
                  <span className="rounded-full border border-panel-border bg-panel-card px-3.5 py-1.5 text-panel-foreground">
                    Software Development &amp; AI
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-3.5 sm:gap-5 lg:col-span-5">
            {certifications.map((c) => (
              <Reveal key={c.title} from="right">
                <article id="certifications" className="flex gap-3.5 rounded-3xl border border-border bg-card p-4 shadow-soft sm:gap-4 sm:p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground sm:h-12 sm:w-12">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">Certification</p>
                    <h3 className="mt-1 text-lg leading-tight text-foreground sm:text-2xl">{c.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{c.issuer}</p>
                  </div>
                </article>
              </Reveal>
            ))}
            {extracurricular.map((x) => (
              <Reveal key={x.title} from="right" delay={0.1}>
                <article className="flex gap-3.5 rounded-3xl border border-border bg-card p-4 shadow-soft sm:gap-4 sm:p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-highlight text-highlight-foreground sm:h-12 sm:w-12">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">Extra-curricular</p>
                    <h3 className="mt-1 text-lg font-bold leading-tight text-foreground sm:text-2xl">{x.title}</h3>
                    {"companies" in x && x.companies && (
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-highlight sm:text-[0.8rem]">
                        {x.companies}
                      </p>
                    )}
                    <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{x.role}</p>
                    {"description" in x && x.description && (
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground/90 sm:text-sm">
                        {x.description}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
