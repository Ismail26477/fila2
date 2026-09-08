import { createFileRoute } from "@tanstack/react-router";
import bannerServices from "@/assets/banner-services.jpg";
import ctaServices from "@/assets/cta-services.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import { ButtonLink } from "@/components/site/Button";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Faq } from "@/components/site/Faq";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Filament Lifesciences Pvt Ltd" },
      {
        name: "description",
        content:
          "Services from Filament Lifesciences Pvt Ltd: API and intermediate supply, product and application support, quality-focused operations and scientific technical support.",
      },
      { property: "og:title", content: "Services | Filament Lifesciences Pvt Ltd" },
      {
        property: "og:description",
        content:
          "How Filament Lifesciences supports customers evaluating APIs and intermediates — supply, documentation and technical dialogue.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    no: "01",
    title: "API & Intermediate Solutions",
    image: service1,
    alt: "Stainless steel reactors in a pharmaceutical manufacturing plant",
    text: "Supply of active pharmaceutical ingredients and intermediates from our published portfolio, with product identification by CAS number and application.",
    points: [
      "Products listed with name, CAS number and application",
      "Enquiry-based commercial discussion",
      "Portfolio expanded as new products are released",
    ],
  },
  {
    no: "02",
    title: "Product & Application Support",
    image: service2,
    alt: "Laboratory glassware and sample vials",
    text: "Support for evaluation teams that need clarity on a product before commercial discussions begin — identification, intended application and handling considerations.",
    points: [
      "Product and application clarification",
      "Documentation shared on request",
      "Single point of contact for enquiries",
    ],
  },
  {
    no: "03",
    title: "Quality-Focused Operations",
    image: service3,
    alt: "Technician recording batch details beside process equipment",
    text: "Our operating approach places process discipline and record-keeping at the centre of manufacturing, so output remains consistent from batch to batch.",
    points: [
      "Defined process parameters",
      "Documented manufacturing practice",
      "Further quality information published as it is formalised",
    ],
  },
  {
    no: "04",
    title: "Scientific & Technical Support",
    image: service4,
    alt: "Scientist examining a sample in a quality control laboratory",
    text: "Direct access to our technical team for chemistry-led discussion around the products we supply and how they fit into your process.",
    points: [
      "Chemistry and handling discussion",
      "Technical response to written enquiries",
      "Collaborative, data-led communication",
    ],
  },
];

function Services() {
  return (
    <>
      <PageBanner
        image={bannerServices}
        alt="Filament Lifesciences technicians in branded lab coats working in a quality control laboratory"
        eyebrow="Capabilities"
        title="Services"
        intro="Four areas of support, described only in terms of what we actually do today."
      />

      <div className="bg-background">
        {services.map((service, i) => (
          <section
            key={service.no}
            className={`section-y relative ${i % 2 === 1 ? "bg-surface" : "bg-background"}`}
          >
            <div className="container-x">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      width={1408}
                      height={1008}
                      className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="font-display text-5xl font-extrabold text-mint sm:text-6xl">
                    {service.no}
                  </p>
                  <h2 className="mt-5 text-2xl leading-tight font-extrabold text-ink sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-ink-muted">{service.text}</p>
                  <ul className="mt-8 space-y-3 border-t border-border pt-7">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-ink-muted">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-teal"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-surface pb-20 md:pb-28">
        <div className="container-x rounded-3xl border border-border bg-card p-9 shadow-soft md:p-12">
          <Reveal className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="min-w-0">
              <h2 className="font-display text-2xl font-bold text-ink">
                Need something not listed here?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
                Service information is being expanded. Send us your requirement and we will tell you
                honestly what we can support today.
              </p>
            </div>
            <ButtonLink to="/contact">Request an Enquiry</ButtonLink>
          </Reveal>
        </div>
      </section>

      <Faq />

      <CtaBanner
        image={ctaServices}
        alt="Analytical instruments lined up in a bright quality control laboratory"
      />
    </>
  );
}
