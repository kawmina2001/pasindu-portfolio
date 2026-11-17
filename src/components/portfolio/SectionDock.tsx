import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  GraduationCap,
  Home,
  Layers,
  Mail,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { navLinks } from "@/data/personal";
import { useActiveSection, useScrolledPast } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  home: Home,
  about: UserRound,
  services: Layers,
  skills: Code2,
  projects: FolderKanban,
  experience: BriefcaseBusiness,
  education: GraduationCap,
  contact: Mail,
};

const ids = navLinks.map((l) => l.id);

/** Always-reachable section shortcuts: a numbered side rail on desktop, an icon bar on phones. */
export function SectionDock() {
  const active = useActiveSection(ids);
  const visible = useScrolledPast(480);
  const activeLabel = navLinks.find((l) => l.id === active)?.label ?? "";

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Desktop: vertical numbered rail */}
          <motion.nav
            key="rail"
            aria-label="Jump to section"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
          >
            <ul className="flex flex-col gap-1 border border-border bg-background/85 p-1.5 shadow-elegant backdrop-blur-xl">
              {navLinks.map((l, i) => {
                const Icon = icons[l.id] ?? Home;
                const isActive = active === l.id;
                return (
                  <li key={l.id} className="group relative">
                    <a
                      href={`#${l.id}`}
                      aria-label={l.label}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "relative grid h-9 w-9 place-items-center transition-colors",
                        isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="dock-active"
                          className="absolute inset-0 bg-primary"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      )}
                      <Icon className="relative h-4 w-4" />
                    </a>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-full top-1/2 mr-3 flex -translate-y-1/2 translate-x-2 items-center gap-2 whitespace-nowrap border border-border bg-popover px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-popover-foreground opacity-0 shadow-elegant transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100"
                    >
                      <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
                      {l.label}
                    </span>
                  </li>
                );
              })}
              <li className="mt-1 border-t border-border pt-1">
                <a
                  href="#home"
                  aria-label="Back to top"
                  className="grid h-9 w-9 place-items-center text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <ArrowUp className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.nav>

          {/* Phones & tablets: bottom icon bar */}
          <motion.nav
            key="bar"
            aria-label="Jump to section"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
          >
            <div className="mx-auto max-w-md">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeLabel}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="mx-auto mb-1.5 w-fit bg-foreground px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-background"
                  aria-hidden
                >
                  {activeLabel}
                </motion.p>
              </AnimatePresence>
              <ul className="grid grid-cols-8 border border-border bg-background/90 p-1 shadow-elegant backdrop-blur-xl">
                {navLinks.map((l) => {
                  const Icon = icons[l.id] ?? Home;
                  const isActive = active === l.id;
                  return (
                    <li key={l.id}>
                      <a
                        href={`#${l.id}`}
                        aria-label={l.label}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "relative grid h-10 w-full place-items-center transition-colors",
                          isActive ? "text-primary-foreground" : "text-muted-foreground",
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="bar-active"
                            className="absolute inset-0.5 bg-primary"
                            transition={{ type: "spring", stiffness: 420, damping: 34 }}
                          />
                        )}
                        <Icon className="relative h-4 w-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
