import { ArrowUp, Mail } from "lucide-react";
import { agency, navLinks, personal, whatsappLink } from "@/data/personal";

export function Footer() {
  return (
    <footer className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="overflow-hidden rounded-[2rem] bg-hero px-5 py-12 sm:px-8 sm:py-16 text-panel-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
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

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]">Quick links</p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-panel-muted">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="hover:text-highlight">
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
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-highlight">WhatsApp</a></li>
              <li><a href={`mailto:${personal.email}`} className="hover:text-highlight">Email</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]">Agency &amp; Contact</p>
            <p className="text-sm font-bold text-highlight">{agency.name}</p>
            <p className="text-[0.7rem] text-panel-muted italic">{agency.tagline}</p>
            <p className="mt-2 text-sm text-panel-muted">{personal.location}</p>
            <p className="mt-1 text-sm text-panel-muted">{personal.phoneDisplay}</p>
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
