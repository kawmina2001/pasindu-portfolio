import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { personal, whatsappLink } from "@/data/personal";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import { Reveal } from "./motion";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  projectType: z.string().min(1, "Please choose a project type"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});

export type ContactValues = z.infer<typeof contactSchema>;

/**
 * Builds a pre-filled email for the visitor's own mail app. No backend is connected yet,
 * so the message is only sent when the visitor presses Send there.
 */
export const buildMailto = (v: ContactValues) =>
  `mailto:${personal.email}?subject=${encodeURIComponent(`[${v.projectType}] Enquiry from ${v.name}`)}&body=${encodeURIComponent(
    `${v.message}\n\n— ${v.name} (${v.email})`,
  )}`;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), defaultValues: { projectType: "" } });

  const onSubmit = (values: ContactValues) => {
    window.location.href = buildMailto(values);
    toast.success("Your message is ready", {
      description: "We've opened it in your email app — press Send there to deliver it.",
    });
    reset();
  };

  const info = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone / WhatsApp", value: personal.phoneDisplay, href: `tel:+${personal.phoneE164}` },
    { icon: MapPin, label: "Location", value: personal.location },
  ];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-28">
      <div className="relative mb-10 sm:mb-16">
        <Reveal from="left">
          <h2 className="text-4xl leading-[0.95] text-foreground sm:text-8xl lg:text-9xl">Have a project?</h2>
        </Reveal>
        <div className="mt-6 grid items-center gap-6 md:grid-cols-[auto_minmax(0,1fr)_auto]">
          <Reveal from="left" delay={0.1}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-24 w-24 place-items-center rounded-full bg-highlight text-center font-display text-base uppercase leading-tight text-highlight-foreground shadow-glow transition-transform hover:rotate-12 hover:scale-105 sm:h-28 sm:w-28 sm:text-lg"
            >
              <span>
                Hire me
                <ArrowUpRight className="mx-auto mt-1 h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </a>
          </Reveal>
          <Reveal from="up" delay={0.15}>
            <p className="max-w-xs text-xs uppercase leading-relaxed tracking-wide text-muted-foreground">
              Whether you need a website, a business system or a custom web application — I'm here to help.
            </p>
          </Reveal>
          <Reveal from="right">
            <p className="font-display text-4xl uppercase leading-[0.9] text-primary sm:text-8xl lg:text-9xl md:text-right">Let's talk</p>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
        <Reveal from="left" className="lg:col-span-5">
          <div className="h-full rounded-3xl bg-hero p-5 text-panel-foreground shadow-elegant sm:p-8">
            <h3 className="text-2xl sm:text-3xl">{personal.fullName}</h3>
            <p className="mt-1 text-xs text-panel-muted sm:text-sm">{personal.title}</p>
            <ul className="mt-8 space-y-4">
              {info.map((i) => (
                <li key={i.label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-panel-card">
                    <i.icon className="h-5 w-5 text-highlight" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-panel-muted">{i.label}</p>
                    {i.href ? (
                      <a href={i.href} className="break-all font-semibold hover:text-highlight">
                        {i.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{i.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              <Button asChild variant="hero" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon /> Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="panel" size="icon" className="h-12 w-12">
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
              </Button>
              <Button asChild variant="panel" size="icon" className="h-12 w-12">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal from="right" className="lg:col-span-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-8"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" autoComplete="name" placeholder="Your name" className="h-11 rounded-xl" aria-invalid={!!errors.name} {...register("name")} />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" className="h-11 rounded-xl" aria-invalid={!!errors.email} {...register("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="projectType">Project type</Label>
              <select
                id="projectType"
                className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-invalid={!!errors.projectType}
                {...register("projectType")}
              >
                <option value="">Select a project type…</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Internship / Job Opportunity">Internship / Job Opportunity</option>
                <option value="Other">Other</option>
              </select>
              {errors.projectType && <p className="text-xs text-destructive">{errors.projectType.message}</p>}
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={6} placeholder="Tell me about your project…" className="rounded-xl" aria-invalid={!!errors.message} {...register("message")} />
              {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 sm:col-span-2">
              <p className="text-xs text-muted-foreground">Opens your email app with the message ready to send.</p>
              <Button type="submit" variant="brand" size="xl" disabled={isSubmitting}>
                <Send /> Send message
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

