import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { agency, agencyWhatsappLink } from "@/data/personal";
import { WhatsappIcon } from "./icons";

const bobbingVariants = {
  bobbing: {
    y: [0, -6, 0],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  still: {
    y: 0,
  },
};

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const reduce = useReducedMotion();

  // Scroll dynamics: move up when scrolling up, move down when scrolling down
  const [scrollDeltaY, setScrollDeltaY] = useState(0);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduce) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (Math.abs(diff) > 2) {
        if (diff > 0) {
          // Scrolling DOWN -> shift downwards (+14px)
          setScrollDeltaY(14);
        } else {
          // Scrolling UP -> shift upwards (-14px)
          setScrollDeltaY(-14);
        }

        // Return smoothly to 0 after scrolling pauses
        if (timeoutRef.current !== null) {
          window.clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(() => {
          setScrollDeltaY(0);
        }, 320);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [reduce]);

  const href = agencyWhatsappLink(
    "Hi DevLogic Labs, I'm visiting your website and would like to discuss a project.",
  );

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-24 right-4 z-40 sm:bottom-8 sm:right-8"
    >
      {/* ── Scroll Dynamic Container: responds to scroll direction ── */}
      <motion.div
        animate={{ y: scrollDeltaY }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          mass: 0.8,
        }}
        className="relative flex flex-col items-end"
      >
        {/* ── Gentle Floating Bobbing Container (walakulaka pawi pawi innawa) ── */}
        <motion.div
          variants={bobbingVariants}
          animate={reduce ? "still" : "bobbing"}
          className="relative flex flex-col items-end"
        >
        {/* ── Interactive Speech Bubble Tooltip ── */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 5 }}
              transition={{ duration: 0.25 }}
              className="relative mb-2 flex items-center gap-2 rounded-2xl border border-border/80 bg-card/95 px-3 py-1.5 shadow-elegant backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-[0.68rem] font-bold text-foreground">
                  Chat with DevLogic Labs
                </span>
                <span className="text-[0.6rem] text-muted-foreground">
                  Online • Direct WhatsApp
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="ml-1 rounded-full p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
                aria-label="Close tooltip"
              >
                <X className="h-3 w-3" />
              </button>
              {/* Tooltip downward caret */}
              <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-border/80 bg-card/95" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Cloud Base + WhatsApp Floating Action Button ── */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${agency.name} on WhatsApp`}
          className="group relative flex items-center justify-center p-1 transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Glowing Ambient Light Halo */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl transition-all duration-300 group-hover:bg-emerald-500/35 group-hover:scale-125"
          />

          {/* ☁️ Cloud Base Vector (Walakula) */}
          <div aria-hidden className="absolute -bottom-2.5 inset-x-[-12px] flex justify-center pointer-events-none">
            <svg
              viewBox="0 0 100 44"
              className="h-10 w-24 filter drop-shadow-[0_8px_16px_rgba(37,211,102,0.22)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="cloudGrad" x1="50" y1="0" x2="50" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--color-card, #ffffff)" stopOpacity="0.95" />
                  <stop offset="0.5" stopColor="var(--color-background, #f1f5f9)" stopOpacity="0.9" />
                  <stop offset="1" stopColor="var(--color-primary, #FF6B00)" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              {/* Cloud body with soft billowy puffs */}
              <path
                d="M 22 38 C 12 38 4 31 4 23 C 4 16 9 10 16 9 C 18 4 25 1 34 1 C 44 1 52 7 55 14 C 59 11 65 10 70 12 C 77 14 82 20 82 27 C 88 27 94 32 94 38 Z"
                fill="url(#cloudGrad)"
                className="stroke-border/70"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* 🟢 WhatsApp Badge sitting comfortably on the Cloud */}
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.45)] transition-all duration-300 group-hover:shadow-[0_10px_26px_rgba(37,211,102,0.65)]">
            <WhatsappIcon className="h-7 w-7 fill-current" />

            {/* Live Online Ping Beacon */}
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-[#25D366] bg-emerald-300" />
            </span>
          </div>
        </a>
        </motion.div>
      </motion.div>
    </aside>
  );
}
