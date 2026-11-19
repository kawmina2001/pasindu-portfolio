import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { ArrowDownRight, ArrowUpRight, Asterisk, Download, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import profile from "@/assets/pasindu-profile.jpg";
import profileCutout from "@/assets/pasindu-profile-cutout.png";
import devlogicLogo from "@/assets/devlogic-logo.png";
import { agency, agencyWhatsappLink, personal, whatsappLink } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import { useTypewriter } from "./useTypewriter";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  { label: "LinkedIn", Icon: LinkedinIcon },
  { label: "GitHub", Icon: GithubIcon },
  { label: "WhatsApp", Icon: WhatsappIcon },
  { label: "Email", Icon: Mail },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const role = useTypewriter(personal.roles);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleX = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const cardX = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 65]);
  const bgX = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);

  // Subtle pointer parallax for the portrait (desktop pointers only).
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const photoPX = useSpring(px, { stiffness: 90, damping: 20 });
  const photoPY = useSpring(py, { stiffness: 90, damping: 20 });
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);

  const onPointerEnter = (e: PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    if (rafRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const target = e.currentTarget;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!rectRef.current && target) {
        rectRef.current = target.getBoundingClientRect();
      }
      const r = rectRef.current;
      if (!r) return;
      px.set(((clientX - r.left) / r.width - 0.5) * 24);
      py.set(((clientY - r.top) / r.height - 0.5) * 14);
    });
  };
  const onPointerLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    rectRef.current = null;
    px.set(0);
    py.set(0);
  };

  const socialHref = (label: string) => {
    if (label === "LinkedIn") return personal.linkedin;
    if (label === "GitHub") return personal.github;
    if (label === "WhatsApp") return whatsappLink();
    return `mailto:${personal.email}`;
  };

  const onDownloadCv = () => {
    if (!personal.cvUrl) {
      toast("CV coming soon", {
        description: "The downloadable CV hasn't been added yet. Please reach out by email or WhatsApp.",
      });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="hero-rays relative flex h-svh min-h-[480px] max-h-[920px] flex-col overflow-hidden bg-hero-surround p-2 sm:p-3 lg:p-4"
    >
      <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col justify-end overflow-hidden border border-panel-border bg-hero text-panel-foreground shadow-elegant">
        <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
        <span aria-hidden className="pointer-events-none absolute left-[4%] top-20 text-xs text-panel-border sm:text-sm">+</span>
        <span aria-hidden className="pointer-events-none absolute right-[4%] top-20 text-xs text-panel-border sm:text-sm">+</span>
        <span aria-hidden className="pointer-events-none absolute bottom-5 left-[4%] text-xs text-panel-border sm:text-sm">+</span>
        <span aria-hidden className="pointer-events-none absolute bottom-5 right-[4%] text-xs text-panel-border sm:text-sm">+</span>

        <motion.div
          aria-hidden
          style={{ x: bgX }}
          initial={{ opacity: 0, letterSpacing: "0.04em" }}
          animate={{ opacity: 1, letterSpacing: "-0.06em" }}
          transition={{ duration: 1.4, ease }}
          className="pointer-events-none absolute inset-x-2 top-16 select-none whitespace-nowrap text-center font-display text-[clamp(4rem,min(16vw,24vh),13.5rem)] leading-none tracking-[-0.06em] text-panel-foreground/10 sm:top-20"
        >
          KAWMINA
        </motion.div>

        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
          className="pointer-events-none absolute bottom-0 left-1/2 z-10 w-[95%] max-w-none -translate-x-1/2 sm:w-[82%] lg:w-[58%] xl:w-[54%]"
        >
          <motion.img
            style={{ x: photoPX, y: photoPY }}
            src={profileCutout}
            alt="Pasindu Kawmina Wickramarathna in a navy suit"
            width={1264}
            height={1264}
            fetchPriority="high"
            className="h-auto w-full select-none object-contain object-bottom max-h-[calc(100svh-4.5rem)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="absolute left-[4.5%] top-14 z-30 w-[90%] max-w-[18.5rem] sm:top-[20%] sm:w-[28%] lg:top-[22%] lg:w-[24%]"
        >
          {/* DevLogic Labs Agency Badge with Active Status Beacon */}
          <a
            href="#services"
            className="group mb-2.5 inline-flex items-center gap-2 rounded-full border border-panel-border bg-panel-card/90 px-3 py-1.5 backdrop-blur-md shadow-xs transition-all duration-300 hover:border-highlight/60 hover:bg-panel-card cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <img
              src={devlogicLogo}
              alt="DevLogic Labs logo"
              className="h-4 w-4 rounded-full object-cover"
            />
            <span className="font-sans text-[0.76rem] font-black normal-case tracking-tight text-panel-foreground group-hover:text-highlight transition-colors">
              DevLogic Labs
            </span>
            <span className="text-[0.62rem] font-bold uppercase tracking-wider text-panel-muted">• Agency</span>
          </a>

          <p className="mb-2 min-h-4 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-panel-muted sm:mb-2.5 sm:text-xs" aria-live="polite">
            I'm a <span className="text-panel-foreground">{role}</span>
            <span className="caret-blink ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.12em] bg-panel-foreground" aria-hidden />
          </p>
          <p className="text-xs font-bold uppercase leading-[1.6] tracking-wide sm:text-sm">
            Founder of <span className="normal-case font-black text-panel-foreground">DevLogic Labs</span>. We build custom web applications, POS/ERP systems &amp; AI-driven solutions.
          </p>
          <div className="mt-3.5 flex flex-wrap gap-2 sm:mt-5">
            <Button asChild variant="hero" size="sm" className="px-3 sm:h-9 sm:px-3.5 text-xs">
              <a
                href={agencyWhatsappLink("Hi DevLogic Labs, I'm visiting your website and would like to discuss a custom digital project.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="mr-1.5 h-3.5 w-3.5" /> <span className="normal-case font-bold">DevLogic Labs</span> WhatsApp
              </a>
            </Button>
            <Button asChild variant="panel" size="sm" className="px-3 sm:h-9 sm:px-3 text-xs">
              <a href="#services">
                Services <ArrowDownRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
            {personal.cvUrl ? (
              <Button asChild variant="panel" size="sm" className="px-2.5 sm:h-9 sm:px-3 text-xs">
                <a href={personal.cvUrl} download="Pasindu_Kawmina_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-3.5 w-3.5" /> CV
                </a>
              </Button>
            ) : (
              <Button variant="panel" size="sm" className="px-2.5 sm:h-9 sm:px-3 text-xs" onClick={onDownloadCv}>
                <Download className="h-3.5 w-3.5" /> CV
              </Button>
            )}
          </div>
          <div className="mt-3.5 flex gap-2">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href={socialHref(label)}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="grid h-8 w-8 place-items-center border border-panel-border bg-panel-card transition-colors hover:bg-panel-foreground hover:text-panel sm:h-8.5 sm:w-8.5"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Floating Card: DevLogic Labs Agency Spotlight with Dedicated Action Button */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="absolute right-[4%] top-[18%] sm:top-[20%] lg:top-[22%] z-30 hidden w-68 md:block"
        >
          <a
            href={agencyWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group block animate-float border border-panel-border bg-panel-card p-4 sm:p-5 backdrop-blur-sm shadow-soft transition-all duration-300 hover:border-highlight/60 hover:shadow-glow cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img
                src={devlogicLogo}
                alt="DevLogic Labs logo"
                className="h-11 w-11 shrink-0 rounded-xl border border-panel-border bg-card p-1 object-cover shadow-xs"
              />
              <div className="min-w-0 flex-1">
                <p className="font-sans text-base font-black normal-case leading-tight text-panel-foreground group-hover:text-highlight transition-colors">
                  DevLogic Labs
                </p>
                <span className="inline-block rounded-full bg-highlight/15 px-2 py-0.5 font-sans text-[0.62rem] font-bold uppercase tracking-wider text-highlight mt-0.5">
                  Digital Agency
                </span>
              </div>
            </div>
            <p className="mt-3 font-display text-sm uppercase leading-snug text-panel-foreground">
              {agency.tagline}
            </p>
            <p className="mt-1.5 text-xs text-panel-muted leading-relaxed">
              Custom Digital Solutions • Web &amp; Mobile • Enterprise Systems
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-panel-border pt-3 text-xs">
              <span className="flex items-center gap-1 text-panel-muted text-[0.72rem]">
                <MapPin className="h-3 w-3 shrink-0 text-highlight" /> {agency.location}
              </span>
              <div className="inline-flex items-center gap-2">
                <span className="text-[0.72rem] font-bold uppercase tracking-wider text-panel-muted group-hover:text-highlight transition-colors">
                  Inquire
                </span>
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-panel-border/80 text-panel-foreground transition-all duration-300 group-hover:bg-highlight group-hover:text-highlight-foreground group-hover:scale-110">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </a>
        </motion.div>

        <div className="absolute bottom-[calc(clamp(2.75rem,min(11vw,16vh),8.5rem)+1.25rem)] left-[3.5%] z-30 pointer-events-none select-none">
          <span className="rounded border border-panel-border/70 bg-panel-card/70 px-2.5 py-1 font-sans text-[0.7rem] sm:text-xs font-bold tracking-wider text-panel-foreground backdrop-blur-sm shadow-sm">
            ©2026
          </span>
        </div>

        <motion.h1
          style={{ x: titleX }}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } } }}
          className="pointer-events-none absolute bottom-2 left-[3.5%] z-20 select-none whitespace-nowrap font-display text-[clamp(2.75rem,min(11vw,16vh),8.5rem)] leading-none tracking-[-0.065em] text-panel-foreground sm:bottom-3 lg:bottom-4"
        >
          <span aria-hidden className="inline-flex overflow-hidden pb-1 sm:pb-2">
            {"PASINDU".split("").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { y: "105%", rotate: 8, opacity: 0 },
                  show: { y: "0%", rotate: 0, opacity: 1, transition: { duration: 0.8, ease } },
                }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
          <span className="sr-only">PASINDU</span><span className="sr-only"> Kawmina Wickramarathna — Full-Stack Web Developer</span>
        </motion.h1>

        <motion.a
          href="#contact"
          style={{ x: cardX }}
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          className="group absolute bottom-2.5 right-2.5 z-30 flex w-[15.5rem] items-center gap-2.5 border border-panel-border bg-panel-contrast p-2 text-panel-contrast-foreground shadow-elegant sm:bottom-4 sm:right-4 sm:w-[19rem] sm:gap-3 sm:p-2.5 lg:bottom-5 lg:right-6 lg:w-[20.5rem] lg:p-3"
        >
          <img src={profile} alt="" aria-hidden width={72} height={72} className="h-12 w-12 shrink-0 object-cover object-top sm:h-14 sm:w-14" />
          <div className="min-w-0 flex-1">
            <p className="text-[0.65rem] uppercase tracking-widest opacity-70">Let's talk</p>
            <p className="mt-0.5 truncate text-sm font-bold">{personal.firstName}</p>
            <p className="truncate text-xs text-highlight font-bold">Founder @ DevLogic Labs</p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-highlight text-highlight-foreground transition-transform duration-300 group-hover:rotate-45 sm:h-10 sm:w-10">
            <ArrowUpRight className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
