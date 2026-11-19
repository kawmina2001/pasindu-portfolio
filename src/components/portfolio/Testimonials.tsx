import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock, Quote, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import devlogicLogo from "@/assets/devlogic-logo.png";
import { agency, agencyWhatsappLink, testimonials } from "@/data/personal";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Reveal } from "./motion";

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Filter out any invalid or placeholder entries to guarantee 100% genuine feedback
  const realTestimonials = testimonials.filter((t) => !t.placeholder && t.name && t.name !== "Client Name");

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 pb-12 sm:px-8 sm:pb-28">
      {realTestimonials.length > 0 ? (
        <>
          <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:mb-10">
            <Reveal from="left" className="min-w-0">
              <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-primary sm:mb-3 sm:text-xs sm:tracking-[0.3em]">
                Kind words
              </p>
              <h2 className="text-3xl leading-[1] text-foreground sm:text-6xl lg:text-7xl sm:leading-[0.95]">
                Client Testimonials
              </h2>
            </Reveal>
            <Reveal from="right" className="flex gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Previous testimonial"
                className="grid h-12 w-12 place-items-center rounded-full bg-highlight text-highlight-foreground transition-opacity disabled:opacity-40"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={!canNext}
                aria-label="Next testimonial"
                className="grid h-12 w-12 place-items-center rounded-full bg-highlight text-highlight-foreground transition-opacity disabled:opacity-40"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </Reveal>
          </div>

          <Reveal from="up">
            <Carousel setApi={setApi} opts={{ align: "start" }}>
              <CarouselContent>
                {realTestimonials.map((t, i) => (
                  <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft">
                      <div className="flex items-center justify-between">
                        <Quote className="h-8 w-8 text-primary" />
                      </div>
                      <blockquote className="mt-5 flex-1 text-sm uppercase leading-relaxed tracking-wide text-foreground">
                        “{t.quote}”
                      </blockquote>
                      <figcaption className="mt-8 flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
                          {t.name.slice(0, 2).toUpperCase()}
                        </span>
                        <div>
                          <span className="block text-sm font-bold text-foreground">{t.name}</span>
                          <span className="block text-xs text-muted-foreground">{t.role}</span>
                        </div>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </Reveal>
        </>
      ) : (
        /* Authentic DevLogic Labs Client Trust & Quality Assurance */
        <Reveal from="up">
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/50 sm:p-10">
            <div aria-hidden className="grid-lines absolute inset-0 opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={devlogicLogo}
                    alt="DevLogic Labs logo"
                    className="h-12 w-12 shrink-0 rounded-2xl border border-primary/30 bg-card p-1 object-cover shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                  />
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary normal-case">
                      <Sparkles className="h-3.5 w-3.5" /> <span className="font-black">DevLogic Labs</span> Quality &amp; Delivery Standards
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl uppercase leading-tight text-foreground mt-0.5">
                      Authentic Engineering • NDA Protected
                    </h3>
                  </div>
                </div>
                <a
                  href={agencyWhatsappLink("Hi DevLogic Labs, I'd like to request project references and discuss a custom software solution.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:scale-105"
                >
                  Request Client References <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
                <div className="rounded-2xl border border-border/80 bg-background/50 p-5">
                  <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                  <h4 className="font-display text-base uppercase text-foreground">Strict NDA &amp; Privacy</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Client proprietary systems, database schemas, and business logic remain 100% confidential under non-disclosure agreements.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/80 bg-background/50 p-5">
                  <Lock className="h-6 w-6 text-primary mb-3" />
                  <h4 className="font-display text-base uppercase text-foreground">Complete Code Ownership</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Full intellectual property and clean repository handovers with no vendor lock-in or recurring developer royalties.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/80 bg-background/50 p-5">
                  <UserRound className="h-6 w-6 text-primary mb-3" />
                  <h4 className="font-display text-base uppercase text-foreground">Live Demos on Request</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Architecture walkthroughs and verifiable project demos (POS, ERP, web apps) are provided during 1-on-1 consultations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}
