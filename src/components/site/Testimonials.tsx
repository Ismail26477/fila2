import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Their team answered every technical question on the intermediate we were evaluating, with documentation shared the same week.",
    name: "Procurement Lead",
    role: "Formulation company, Gujarat",
  },
  {
    quote:
      "Consistent specifications batch after batch. The CAS-level clarity in their catalogue made our sourcing review straightforward.",
    name: "Quality Manager",
    role: "Veterinary products manufacturer",
  },
  {
    quote:
      "Clear communication on timelines and packaging. It is refreshing to work with a supplier that only commits to what it can deliver.",
    name: "Supply Chain Head",
    role: "Contract manufacturer, Maharashtra",
  },
  {
    quote:
      "Chemistry-led discussion rather than a sales pitch — that is what made us shortlist Filament Lifesciences.",
    name: "R&D Chemist",
    role: "Animal health research group",
  },
];

export function Testimonials() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
            Testimonials
          </p>
          <h2 className="mt-5 text-2xl leading-tight font-extrabold text-ink sm:text-4xl">
            What our customers say
          </h2>
        </Reveal>

        <ul className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] lg:mt-14 lg:grid lg:grid-cols-3 lg:overflow-visible xl:grid-cols-4">
          {testimonials.map((item, i) => (
            <Reveal
              as="li"
              key={item.quote}
              delay={i * 0.06}
              className="min-w-full snap-center rounded-2xl border border-border bg-card p-7 shadow-soft sm:min-w-[22rem] lg:min-w-0"
            >
              <Quote className="size-7 text-brand-teal" aria-hidden="true" />
              <div className="mt-4 flex gap-0.5" aria-label="5 out of 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">{item.quote}</p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-display text-sm font-bold text-ink">{item.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
