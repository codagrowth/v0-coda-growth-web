import { Bot, BarChart3, Layers, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    tagline: "Put your growth on autopilot.",
    description:
      "We architect and deploy end-to-end AI workflows that handle prospecting, qualification, nurturing, and follow-up — so your team focuses only on closing.",
    features: [
      "AI-powered outbound sequences",
      "Lead scoring & enrichment",
      "Automated nurture workflows",
      "CRM sync & reporting",
    ],
    accent: "#32CEC0",
  },
  {
    icon: BarChart3,
    title: "CRO Optimization",
    tagline: "Turn traffic into revenue.",
    description:
      "Data-driven conversion rate optimization for your entire funnel. We audit, hypothesize, test, and iterate until your site works as hard as your team.",
    features: [
      "Landing page teardowns",
      "A/B & multivariate testing",
      "Funnel analytics setup",
      "Copy & UX optimization",
    ],
    accent: "#04C3B3",
    featured: true,
  },
  {
    icon: Layers,
    title: "Curated Tech Stacks",
    tagline: "The right tools. No fluff.",
    description:
      "Stop wasting budget on overlapping SaaS tools. We audit your stack and replace complexity with a lean, integrated system built for scale.",
    features: [
      "Tech stack audit & roadmap",
      "Integration architecture",
      "Migration & onboarding",
      "Ongoing stack governance",
    ],
    accent: "#00D1C1",
  },
]

export function MachineBreakdown() {
  return (
    <section id="machine" className="bg-[#132A4A] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#04C3B3]">
            The Growth Machine
          </span>
          <h2
            className="text-3xl font-black text-[#F5F7FA] text-balance md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Three Systems. One Revenue Machine.
          </h2>
          <p className="max-w-2xl text-base text-[#BFE2DC] leading-relaxed">
            Every CODA GROWTH engagement is built on this proven trifecta. Combine all three and watch your CAC drop while LTV climbs.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  service.featured
                    ? "border-[#04C3B3]/50 bg-[#1a3d6e] shadow-lg shadow-[#04C3B3]/10"
                    : "border-[#1e3f62] bg-[#1a3559] hover:border-[#32CEC0]/40"
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#04C3B3] px-3 py-0.5 text-xs font-bold text-[#132A4A]">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${service.accent}18` }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: service.accent }}
                    strokeWidth={1.75}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-1 text-xl font-bold text-[#F5F7FA]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="mb-3 text-sm font-medium" style={{ color: service.accent }}>
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="mb-6 text-sm text-[#BFE2DC] leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="flex flex-col gap-2.5">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-[#BFE2DC]">
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: service.accent }}
                        strokeWidth={2}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
