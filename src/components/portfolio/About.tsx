import { Briefcase, Building2, GraduationCap, MapPin, Target } from "lucide-react";
import { agency, education, personal } from "@/data/personal";
import { experiences } from "@/data/experience";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const current = experiences.find((e) => e.current);
  const facts = [
    {
      icon: Building2,
      label: "Agency Founder",
      value: agency.name,
      sub: agency.category,
      badge: "Founder & Lead",
    },
    {
      icon: Briefcase,
      label: "Industry Experience",
      value: current ? `${current.position} — ${current.company}` : "Software Engineer Intern",
      sub: current?.location,
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: education.degree,
      sub: `${education.university} · ${education.period}`,
    },
    {
      icon: MapPin,
      label: "Based in",
      value: personal.location,
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="About me"
        title="Who I Am"
        description="Fourth-year ICT undergraduate & Founder of DevLogic Labs — bridging academic research with modern software engineering to build high-performance web systems and AI solutions."
      />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal from="left" className="lg:col-span-7">
          <p className="font-display text-2xl uppercase leading-tight text-foreground sm:text-3xl lg:text-4xl">
            Hello! I'm {personal.firstName} — Founder of{" "}
            <span className="text-highlight">DevLogic Labs</span> &amp; full-stack engineer on a path toward{" "}
            <span className="text-primary">AI &amp; Machine Learning</span>.
          </p>
          <div className="mt-6 space-y-3.5 text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:space-y-4 sm:text-base">
            {personal.bio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-3.5 sm:space-y-4 lg:col-span-5">
          {facts.map((f, i) => (
            <Reveal key={f.label} from="right" delay={i * 0.08}>
              <div className="flex gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-soft transition-transform hover:-translate-y-0.5 sm:gap-4 sm:p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground sm:h-11 sm:w-11">
                  <f.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">{f.label}</p>
                    {"badge" in f && f.badge && (
                      <span className="rounded-full bg-highlight/15 px-2 py-0.5 text-[0.6rem] font-extrabold uppercase text-highlight">
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-semibold text-foreground sm:mt-1 sm:text-base">{f.value}</p>
                  {f.sub && <p className="text-xs text-muted-foreground sm:text-sm">{f.sub}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal from="up" className="mt-8 sm:mt-12">
        <div className="rounded-3xl bg-panel p-5 text-panel-foreground sm:p-10">
          <div className="mb-4 flex items-center gap-2.5 sm:mb-6 sm:gap-3">
            <Target className="h-5 w-5 text-highlight sm:h-6 sm:w-6" />
            <h3 className="text-xl sm:text-3xl">Professional interests</h3>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {personal.interests.map((it) => (
              <li key={it} className="rounded-2xl border border-panel-border bg-panel-card p-4 text-sm font-medium">
                {it}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
