import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, UserRound } from "lucide-react";
import { testimonials } from "@/data/personal";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Reveal } from "./motion";

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

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
      <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:mb-10">
        <Reveal from="left" className="min-w-0">
          <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-primary sm:mb-3 sm:text-xs sm:tracking-[0.3em]">Kind words</p>
          <h2 className="text-3xl leading-[1] text-foreground sm:text-6xl lg:text-7xl sm:leading-[0.95]">Testimonials</h2>
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
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col rounded-3xl border border-dashed border-border bg-muted/60 p-6">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary" />
                    {t.placeholder && (
                      <span className="rounded-full bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Placeholder
                      </span>
                    )}
                  </div>
                  <blockquote className="mt-5 flex-1 text-sm uppercase leading-relaxed tracking-wide text-foreground">“{t.quote}”</blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-card text-muted-foreground">
                      <UserRound className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-foreground">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Reveal>
    </section>
  );
}
