import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Clock,
  Globe,
  Lock,
  Moon,
  PhoneMissed,
  Sparkles,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import devlogicLogo from "@/assets/devlogic-logo.png";
import {
  businessValueIntro,
  simulationComparison,
  simulationEvents,
  visualMetrics,
  type SimulationEvent,
} from "@/data/businessValue";
import { agencyWhatsappLink } from "@/data/personal";
import { cn } from "@/lib/utils";
import { WhatsappIcon } from "./icons";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function BusinessValue() {
  const [mode, setMode] = useState<"with" | "without">("with");
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  // Auto-cycle through simulated live inquiries every 3.5s in "with" mode
  useEffect(() => {
    if (mode !== "with") return;
    const timer = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % simulationEvents.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [mode]);

  const activeEvent: SimulationEvent = simulationEvents[activeEventIndex] ?? (simulationEvents[0] as SimulationEvent);

  return (
    <section id="why-website" className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow={businessValueIntro.eyebrow}
        title={businessValueIntro.title}
        description={businessValueIntro.description}
      />

      {/* ── Interactive Simulator Mode Switcher ── */}
      <Reveal from="up" className="mb-8 flex justify-center">
        <div className="inline-flex rounded-full border border-border/80 bg-card p-1 shadow-soft">
          <button
            type="button"
            onClick={() => setMode("with")}
            className={cn(
              "relative rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2",
              mode === "with"
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {mode === "with" && (
              <motion.span
                layoutId="sim-mode"
                className="absolute inset-0 rounded-full bg-primary shadow-glow"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5 text-[0.72rem] sm:text-xs">
              <Zap className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden sm:inline">With Website (Growth Engine)</span>
              <span className="sm:hidden">With Website</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMode("without")}
            className={cn(
              "relative rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2",
              mode === "without"
                ? "text-destructive-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {mode === "without" && (
              <motion.span
                layoutId="sim-mode"
                className="absolute inset-0 rounded-full bg-destructive shadow-soft"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5 text-[0.72rem] sm:text-xs">
              <XCircle className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden sm:inline">Without Website (Traditional)</span>
              <span className="sm:hidden">Without Website</span>
            </span>
          </button>
        </div>
      </Reveal>

      {/* ── Visual Simulation Stage ── */}
      <Reveal from="up" delay={0.06} className="mb-10 sm:mb-14">
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-elegant">
          {/* Simulated Browser / Terminal Chrome Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-muted/40 px-5 py-3.5 sm:px-7">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-amber-500/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
              <div className="ml-2 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[0.72rem] text-muted-foreground font-mono">
                <Lock className="h-3 w-3 text-primary" />
                <span>https://your-business.com</span>
              </div>
            </div>

            {/* Live Operational Status Beacon */}
            <div className="flex items-center gap-2">
              {mode === "with" ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-emerald-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live 24/7 Automation Active
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 border border-destructive/30 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-destructive">
                  <span className="h-2 w-2 rounded-full bg-destructive" />
                  Closed After 8:00 PM — Inquiries Missed
                </span>
              )}
            </div>
          </div>

          {/* Interactive Screen Display */}
          <div className="p-6 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              {mode === "with" ? (
                <motion.div
                  key="with-website"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  {/* Left Visual: Live Automated Funnel & Notification Feed */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" /> Simulated Live Customer Activity
                      </span>
                      <span className="text-[0.7rem] text-muted-foreground font-mono">
                        Updating live • {activeEventIndex + 1}/{simulationEvents.length}
                      </span>
                    </div>

                    {/* Animated Live Notification Card */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeEvent.id}
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: -10 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-card via-card to-primary/10 p-5 shadow-soft"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                              <Bell className="h-4 w-4 animate-bounce" />
                            </span>
                            <div>
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary border border-primary/25">
                                  {activeEvent.badge}
                                </span>
                                <span className="text-[0.7rem] font-mono text-muted-foreground">
                                  {activeEvent.time}
                                </span>
                              </div>
                              <h4 className="text-base font-bold text-foreground sm:text-lg">
                                {activeEvent.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                {activeEvent.subtext}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Visual progress bar for current event */}
                        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-muted/60">
                          <motion.div
                            key={activeEvent.id}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3.5, ease: "linear" }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Quick Interactive Event Selectors */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {simulationEvents.map((evt, idx) => (
                        <button
                          key={evt.id}
                          type="button"
                          onClick={() => setActiveEventIndex(idx)}
                          className={cn(
                            "rounded-xl border p-2 text-left transition-all cursor-pointer",
                            activeEventIndex === idx
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border/60 bg-muted/20 text-muted-foreground hover:bg-muted/40",
                          )}
                        >
                          <span className="block text-[0.62rem] font-mono">{evt.time}</span>
                          <span className="block text-[0.7rem] font-bold truncate">{evt.badge}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Visual: Live Business Metrics Counter */}
                  <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-muted/20 p-5 sm:p-6 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                      Live Business Impact Overview
                    </span>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-3">
                      <div className="rounded-xl border border-border/70 bg-card p-2.5 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5 sm:gap-2.5">
                          <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                          <span className="text-[0.7rem] sm:text-xs font-semibold text-foreground">Operational</span>
                        </div>
                        <span className="text-[0.72rem] sm:text-xs font-bold text-emerald-500 font-mono">24/7/365</span>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-card p-2.5 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5 sm:gap-2.5">
                          <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                          <span className="text-[0.7rem] sm:text-xs font-semibold text-foreground">Lead Volume</span>
                        </div>
                        <span className="text-[0.72rem] sm:text-xs font-bold text-primary font-mono">+300%</span>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-card p-2.5 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5 sm:gap-2.5">
                          <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                          <span className="text-[0.7rem] sm:text-xs font-semibold text-foreground">Reach</span>
                        </div>
                        <span className="text-[0.72rem] sm:text-xs font-bold text-highlight font-mono">Island-Wide</span>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-card p-2.5 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5 sm:gap-2.5">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                          <span className="text-[0.7rem] sm:text-xs font-semibold text-foreground">Delivery</span>
                        </div>
                        <span className="text-[0.72rem] sm:text-xs font-bold text-emerald-500 font-mono">WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="without-website"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                >
                  {simulationComparison.withoutWebsite.indicators.map((item, idx) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 shadow-xs"
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-destructive/15 text-destructive">
                          {idx === 0 && <Moon className="h-4 w-4" />}
                          {idx === 1 && <PhoneMissed className="h-4 w-4" />}
                          {idx === 2 && <XCircle className="h-4 w-4" />}
                          {idx === 3 && <XCircle className="h-4 w-4" />}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>

      {/* ── 4 Quick Visual Impact Cards (Minimal Text, Big Visual Punch) ── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-10 sm:mb-12">
        {visualMetrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <Reveal key={m.id} from={i % 2 === 0 ? "left" : "right"} delay={(i % 4) * 0.06}>
              <div className="group rounded-2xl sm:rounded-3xl border border-border bg-card p-3 sm:p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-elegant h-full flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <span className="grid h-8 w-8 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="rounded-full bg-muted/60 px-2 py-0.5 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground truncate max-w-[85px] sm:max-w-none">
                    {m.label}
                  </span>
                </div>
                <div>
                  <span className="font-display text-xl sm:text-3xl text-primary font-black tracking-tight block">
                    {m.stat}
                  </span>
                  <p className="text-[0.7rem] sm:text-xs text-muted-foreground mt-1 sm:mt-1.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {m.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ── Bottom Call To Action ── */}
      <Reveal from="up" delay={0.08}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <img
              src={devlogicLogo}
              alt="DevLogic Labs logo"
              className="h-12 w-12 rounded-xl border border-primary/30 object-cover shadow-xs shrink-0 hidden sm:block"
            />
            <div>
              <h4 className="font-display text-lg uppercase text-foreground sm:text-xl">
                Ready to turn your business into a 24/7 digital growth engine?
              </h4>
              <p className="text-xs text-muted-foreground mt-1 max-w-xl">
                Let DevLogic Labs design and engineer a custom digital platform that captures leads, automates operations, and scales your sales.
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
              href={agencyWhatsappLink("Hi DevLogic Labs, I saw your digital growth engine simulation and would like to build a website for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/60 hover:text-primary"
            >
              <WhatsappIcon className="h-4 w-4" /> Free WhatsApp Consultation
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
