import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { navLinks, personal, agency, agencyWhatsappLink, whatsappLink } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveSection, useScrolledPast } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

const ids = navLinks.map((l) => l.id);

export function Navbar() {
  const active = useActiveSection(ids);
  const scrolled = useScrolledPast(16);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.3 });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id === "home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* High-performance GPU-accelerated frosted glass backdrop */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 border-b border-border/50 bg-background/85 backdrop-blur-md transition-opacity duration-300 ease-out",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />

      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 z-20 h-0.5 origin-left bg-primary"
      />
      <nav
        aria-label="Main"
        className={cn(
          "relative z-10 mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 transition-all duration-500 ease-out sm:px-8",
          scrolled ? "h-16 pt-0" : "h-20 sm:h-22 pt-2 sm:pt-3",
        )}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex min-w-0 shrink-0 items-center gap-2"
          aria-label={`${personal.fullName} — home`}
        >
          <span
            className={cn(
              "grid h-8 w-8 shrink-0 place-items-center border font-display text-xs",
              scrolled
                ? "border-primary bg-primary text-primary-foreground"
                : "border-panel-border bg-panel-card text-panel-foreground",
            )}
          >
            {personal.initials}
          </span>
          <div className="flex items-center gap-1.5">
            <span className={cn("truncate text-lg font-extrabold tracking-[-0.04em]", scrolled ? "text-foreground" : "text-panel-foreground")}>
              {personal.firstName}<sup className="ml-0.5 text-[0.55em]">®</sup>
            </span>
            <span className={cn("hidden text-[0.7rem] font-bold uppercase tracking-wider sm:inline-block", scrolled ? "text-primary" : "text-highlight")}>
              | {agency.name}
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => handleNavClick(e, l.id)}
                aria-current={active === l.id ? "location" : undefined}
                className={cn(
                  "relative block px-2 py-2 text-[0.68rem] font-bold uppercase tracking-wider transition-colors xl:px-2.5",
                  scrolled
                    ? active === l.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                    : active === l.id
                      ? "text-panel-foreground"
                      : "text-panel-muted hover:text-panel-foreground",
                )}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    aria-hidden
                    className={cn("absolute inset-x-2 bottom-0 h-0.5 xl:inset-x-2.5", scrolled ? "bg-primary" : "bg-panel-foreground")}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle
            className={cn(
              !scrolled && "border-panel-border bg-panel-card text-panel-foreground hover:border-panel-foreground hover:text-panel-foreground",
            )}
          />
          <Button asChild variant={scrolled ? "brand" : "hero"} size="sm" className="hidden h-9 px-3.5 sm:inline-flex text-xs font-bold uppercase tracking-wider">
            <a href={agencyWhatsappLink("Hi DevLogic Labs, I'd like to discuss a project with your agency.")} target="_blank" rel="noopener noreferrer">
              Agency WhatsApp
            </a>
          </Button>
          <Button asChild variant="panel" size="sm" className="hidden h-9 px-3 text-xs md:inline-flex border-panel-border/70">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Direct Chat
            </a>
          </Button>
          <button
            type="button"
            className={cn(
              "grid h-10 w-10 place-items-center border lg:hidden",
              scrolled
                ? "border-border bg-card text-foreground"
                : "border-panel-border bg-panel-card text-panel-foreground",
            )}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 * i }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block border-l-2 px-4 py-3 font-display text-2xl uppercase transition-colors",
                      active === l.id ? "border-primary bg-accent text-accent-foreground" : "border-transparent text-foreground hover:bg-muted",
                    )}
                  >
                    <span className="mr-3 align-middle font-sans text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2 space-y-2">
                <Button asChild variant="brand" size="xl" className="w-full">
                  <a href={agencyWhatsappLink()} target="_blank" rel="noopener noreferrer">
                    DevLogic Labs WhatsApp (+94 72 327 0863)
                  </a>
                </Button>
                <Button asChild variant="outline" size="xl" className="w-full border-border">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    Direct WhatsApp with Pasindu (+94 77 282 0226)
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
