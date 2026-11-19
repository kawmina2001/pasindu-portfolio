import { ArrowUp, Mail } from "lucide-react";
import devlogicLogo from "@/assets/devlogic-logo.png";
import { agency, agencyWhatsappLink, navLinks, personal, whatsappLink } from "@/data/personal";

export function Footer() {
  return (
    <footer className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="overflow-hidden rounded-[2rem] bg-hero px-5 py-12 sm:px-8 sm:py-16 text-panel-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-panel-muted">Get in touch</p>
            <a
              href={`mailto:${personal.email}`}
              className="group mt-3 inline-flex items-center gap-3 rounded-2xl border border-panel-border bg-panel-card/70 px-4 py-3 text-sm sm:text-base font-semibold text-panel-foreground backdrop-blur-sm transition-all hover:border-highlight hover:text-highlight shadow-sm"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-highlight text-highlight-foreground shadow-xs transition-transform group-hover:scale-105">
                <Mail className="h-4 w-4" />
              </span>
              <span className="break-all font-sans">{personal.email}</span>
            </a>
            <p className="mt-6 font-display text-xl sm:text-2xl uppercase tracking-tight">{personal.fullName}</p>
            <p className="mt-1 text-xs sm:text-sm text-panel-muted">{personal.title}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]">Quick links</p>
            <ul className="space-y-2 text-sm text-panel-muted">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="hover:text-highlight transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]">Follow</p>
            <ul className="space-y-2 text-sm text-panel-muted">
              <li><a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-highlight">LinkedIn</a></li>
              <li><a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-highlight">GitHub</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-highlight">Personal WhatsApp</a></li>
              <li><a href={agencyWhatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-highlight">DevLogic WhatsApp</a></li>
              <li><a href={`mailto:${agency.email}`} className="hover:text-highlight">DevLogic Email</a></li>
              <li><a href={`mailto:${personal.email}`} className="hover:text-highlight">Personal Email</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.3em] text-highlight">
              Agency &amp; Contact
            </p>

            {/* DevLogic Labs Interactive Brand Card with Feedback Animation */}
            <a
              href={agencyWhatsappLink("Hi DevLogic Labs, I'd like to consult on a custom digital project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-panel-border bg-panel-card/85 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-highlight hover:bg-panel-card hover:shadow-glow hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={devlogicLogo}
                  alt="DevLogic Labs logo"
                  className="h-11 w-11 shrink-0 rounded-xl border border-panel-border bg-card p-1 object-cover shadow-xs transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-base font-extrabold normal-case text-highlight tracking-tight group-hover:underline">
                      DevLogic Labs
                    </span>
                    <span className="rounded-full bg-highlight/20 px-2 py-0.5 text-[0.62rem] font-bold uppercase text-highlight">
                      Agency
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-panel-muted italic truncate leading-normal">
                    {agency.tagline}
                  </p>
                </div>
              </div>
            </a>

            {/* Generously spaced contact channels for clear identification */}
            <div className="mt-3.5 space-y-2.5">
              <div className="flex items-center gap-3 rounded-xl border border-panel-border/60 bg-panel-card/40 px-3.5 py-2.5 transition-colors hover:border-panel-border hover:bg-panel-card/70">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-highlight/15 text-xs">
                  ✉️
                </span>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="text-[0.68rem] font-bold uppercase tracking-wider text-panel-muted">
                    DevLogic Labs Agency Email
                  </p>
                  <a
                    href={`mailto:${agency.email}`}
                    className="font-sans text-sm font-bold text-panel-foreground hover:text-highlight transition-colors mt-0.5 inline-block break-all"
                  >
                    {agency.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-panel-border/60 bg-panel-card/40 px-3.5 py-2.5 transition-colors hover:border-panel-border hover:bg-panel-card/70">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-highlight/15 text-xs">
                  🏢
                </span>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="text-[0.68rem] font-bold uppercase tracking-wider text-panel-muted">
                    DevLogic Labs Business WhatsApp
                  </p>
                  <a
                    href={agencyWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-bold text-panel-foreground hover:text-highlight transition-colors mt-0.5 inline-block"
                  >
                    {agency.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-panel-border/60 bg-panel-card/40 px-3.5 py-2.5 transition-colors hover:border-panel-border hover:bg-panel-card/70">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-highlight/15 text-xs">
                  👤
                </span>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="text-[0.68rem] font-bold uppercase tracking-wider text-panel-muted">
                    Pasindu Personal Phone / Direct Chat
                  </p>
                  <a
                    href={`tel:+${personal.phoneE164}`}
                    className="font-sans text-sm font-bold text-panel-foreground hover:text-highlight transition-colors mt-0.5 inline-block"
                  >
                    {personal.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-1 pt-0.5 text-xs text-panel-muted leading-relaxed">
                <span>📍</span>
                <span>{personal.location} • Custom Digital Solutions &amp; Technology Agency</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 sm:mt-12 flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 border-t border-panel-border/60 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-panel-muted text-center sm:text-left">
            © 2026 Pasindu Kawmina Wickramarathna. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-panel-border bg-panel-card px-4 py-2 text-xs font-bold uppercase tracking-wider text-panel-foreground transition-all hover:bg-highlight hover:text-highlight-foreground hover:border-highlight shadow-sm"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
