import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Sparkles, XCircle, Zap } from "lucide-react";
import devlogicLogo from "@/assets/devlogic-logo.png";
import {
  businessComparison,
  businessValueIntro,
  valuePillars,
} from "@/data/businessValue";
import { agencyWhatsappLink } from "@/data/personal";
import { cn } from "@/lib/utils";
import { WhatsappIcon } from "./icons";
import { Reveal, sideFor } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function BusinessValue() {
  const [activeTab, setActiveTab] = useState<"pillars" | "comparison">("pillars");

  return (
    <section id="why-website" className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow={businessValueIntro.eyebrow}
        title={businessValueIntro.title}
        description={businessValueIntro.description}
      />

      {/* ── Top Highlight Banner: Business Impact Summary ── */}
      <Reveal from="up" className="mb-8 sm:mb-10">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-accent/40 p-6 shadow-soft sm:p-8">
          <div aria-hidden className="grid-lines absolute inset-0 opacity-15 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/30 px-3 py-1 font-sans text-xs font-extrabold text-primary normal-case">
                  <Sparkles className="h-3.5 w-3.5" /> High-Impact ROI
                </span>
                <span className="text-[0.68rem] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  The Power of a Custom Web Presence
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-3xl uppercase leading-tight text-foreground">
                {businessValueIntro.tagline}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Businesses with modern websites generate up to 300% more customer inquiries, establish instant market credibility, and operate with automated booking and sales pipelines 24 hours a day.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap gap-3">
              <a
                href={agencyWhatsappLink("Hi DevLogic Labs, I'd like to consult on building a website to scale my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105"
              >
                <WhatsappIcon className="h-4 w-4" /> Consult DevLogic Labs <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── View Toggle: 6 Growth Pillars vs Direct Comparison ── */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-full border border-border/80 bg-card p-1 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab("pillars")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer",
              activeTab === "pillars"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            6 Core Growth Pillars
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("comparison")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer",
              activeTab === "comparison"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            With vs Without Website
          </button>
        </div>
      </div>

      {/* ── Tab Content 1: 6 Value Pillars Grid ── */}
      {activeTab === "pillars" && (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {valuePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                key={pillar.id}
                from={sideFor(i)}
                delay={(i % 3) * 0.08}
                className="flex flex-col h-full"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-elegant">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 sm:h-14 sm:w-14 shadow-xs">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <div className="flex flex-col items-end gap-1">
                      <span className="font-display text-2xl text-muted-foreground/30 sm:text-3xl">
                        {pillar.number}
                      </span>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-primary border border-primary/20">
                        {pillar.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-tight text-foreground sm:mt-5 sm:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {pillar.description}
                  </p>

                  {/* Impact Stat Badge */}
                  <div className="mt-auto pt-5 border-t border-border/50">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl sm:text-3xl text-primary font-black tracking-tight">
                        {pillar.stat}
                      </span>
                      <span className="text-[0.7rem] font-semibold text-muted-foreground leading-tight">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      )}

      {/* ── Tab Content 2: Before vs After Comparison ── */}
      {activeTab === "comparison" && (
        <Reveal from="up">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              {/* Without Website Column */}
              <div className="p-6 sm:p-8 bg-muted/20">
                <div className="flex items-center gap-2 mb-6 text-destructive font-bold uppercase tracking-wider text-xs">
                  <XCircle className="h-4 w-4" /> Business Without a Website
                </div>
                <ul className="space-y-5">
                  {businessComparison.map((item) => (
                    <li key={item.aspect} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                      <span className="mt-1 h-2 w-2 rounded-full bg-destructive/60 shrink-0" />
                      <div>
                        <strong className="block text-foreground font-semibold mb-0.5">{item.aspect}</strong>
                        {item.withoutWebsite}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With Website Column (DevLogic Labs Powered) */}
              <div className="p-6 sm:p-8 bg-primary/5">
                <div className="flex items-center gap-2 mb-6 text-primary font-bold uppercase tracking-wider text-xs">
                  <CheckCircle2 className="h-4 w-4" /> With a DevLogic Labs Custom Website
                </div>
                <ul className="space-y-5">
                  {businessComparison.map((item) => (
                    <li key={item.aspect} className="flex items-start gap-3 text-xs sm:text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                      <div>
                        <strong className="block text-primary font-bold mb-0.5">{item.aspect}</strong>
                        <span className="text-foreground/90">{item.withWebsite}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* ── Bottom Call To Action ── */}
      <Reveal from="up" delay={0.1} className="mt-10 sm:mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <img
              src={devlogicLogo}
              alt="DevLogic Labs logo"
              className="h-12 w-12 rounded-xl border border-primary/30 object-cover shadow-xs shrink-0 hidden sm:block"
            />
            <div>
              <h4 className="font-display text-lg uppercase text-foreground sm:text-xl">
                Ready to accelerate your business with a custom website?
              </h4>
              <p className="text-xs text-muted-foreground mt-1 max-w-xl">
                Let DevLogic Labs design and engineer a responsive, high-converting digital platform tailored specifically for your target audience.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex flex-wrap gap-2.5 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105"
            >
              Start Your Project <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={agencyWhatsappLink("Hi DevLogic Labs, I'd like to discuss building a website for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/60 hover:text-primary"
            >
              WhatsApp Free Consultation
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
