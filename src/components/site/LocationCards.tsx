import { Building2, Factory, FileText } from "lucide-react";
import { company, mapsLink } from "@/lib/site";
import { Reveal } from "./Reveal";

export function LocationCards({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";

  const cards = [
    { icon: Building2, ...company.registeredOffice },
    { icon: Factory, ...company.factory },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {cards.map((card, i) => (
        <Reveal
          key={card.label}
          delay={i * 0.08}
          className={
            dark
              ? "rounded-2xl border border-primary-foreground/12 bg-ink-deep p-8"
              : "rounded-2xl border border-border bg-card p-8 shadow-soft"
          }
        >
          <card.icon
            className={dark ? "size-6 text-brand-teal" : "size-6 text-brand-teal"}
            aria-hidden="true"
          />
          <h3
            className={
              dark
                ? "mt-6 text-xs font-semibold tracking-[0.2em] text-primary-foreground/60 uppercase"
                : "mt-6 text-xs font-semibold tracking-[0.2em] text-ink-muted uppercase"
            }
          >
            {card.label}
          </h3>
          <address
            className={
              dark
                ? "mt-3 text-base leading-relaxed text-primary-foreground/85 not-italic"
                : "mt-3 text-base leading-relaxed text-ink not-italic"
            }
          >
            {card.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={mapsLink(card.mapQuery)}
            target="_blank"
            rel="noopener noreferrer"
            className={
              dark
                ? "mt-5 inline-block text-sm font-semibold text-brand-teal hover:opacity-80"
                : "mt-5 inline-block text-sm font-semibold text-ink hover:text-ink-muted"
            }
          >
            Open in Google Maps
          </a>
        </Reveal>
      ))}

      <Reveal
        delay={0.16}
        className={
          dark
            ? "rounded-2xl border border-primary-foreground/12 bg-ink-deep p-8"
            : "rounded-2xl border border-border bg-card p-8 shadow-soft"
        }
      >
        <FileText
          className={dark ? "size-6 text-brand-teal" : "size-6 text-brand-teal"}
          aria-hidden="true"
        />
        <h3
          className={
            dark
              ? "mt-6 text-xs font-semibold tracking-[0.2em] text-primary-foreground/60 uppercase"
              : "mt-6 text-xs font-semibold tracking-[0.2em] text-ink-muted uppercase"
          }
        >
          Corporate Identity
        </h3>
        <p
          className={
            dark
              ? "mt-3 text-base leading-relaxed text-primary-foreground/85"
              : "mt-3 text-base leading-relaxed text-ink"
          }
        >
          CIN: {company.cin}
        </p>
        <p
          className={
            dark
              ? "mt-2 text-base leading-relaxed text-primary-foreground/85"
              : "mt-2 text-base leading-relaxed text-ink"
          }
        >
          Founded {company.foundedYear} · +91 {company.phone}
        </p>
        <p
          className={
            dark
              ? "mt-3 text-sm text-primary-foreground/55"
              : "mt-3 text-sm text-muted-foreground"
          }
        >
          {company.name}
        </p>
      </Reveal>
    </div>
  );
}
