"use client"

import { TrendingUp, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-6 md:pt-40 lg:pt-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left column: Headline and Subheadline and CTA and Social proof */}
          <div>
            {/* Headline */}
            <h1
              className="text-4xl font-black leading-[1.1] tracking-tight text-balance text-[#F5F7FA] md:text-5xl lg:text-6xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Scale Your Revenue Systems with{" "}
              <span className="text-[#00D1C1]">AI and Automation.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg leading-relaxed text-[#BFE2DC] max-w-lg" style={{ fontFamily: "Roboto, sans-serif" }}>
              Stop leaving revenue on the table. We install done-for-you AI systems that generate leads, nurture prospects, and close deals &ndash; while you sleep.
            </p>

            {/* Social proof micro stats */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#BFE2DC]">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-[#2DFF8F]" />
                <span>3x Revenue Growth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-[#2DFF8F]" />
                <span>40% Time Savings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-[#2DFF8F]" />
                <span>200+ Companies</span>
              </div>
            </div>
          </div>

          {/* Right column: Lead capture card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-sm rounded-2xl border border-[#04C3B3]/40 bg-gradient-to-br from-[#1a3559] to-[#0f1f2e] p-8 shadow-2xl"
              style={{
                boxShadow: "0 20px 60px rgba(0, 209, 193, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#00D1C1]/15 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2DFF8F] animate-pulse" />
                <span className="text-xs font-semibold text-[#2DFF8F]">FREE - Limited Time</span>
              </div>

              {/* Card headline */}
              <h2
                className="text-2xl font-black text-[#F5F7FA] mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Get Your Free AI Marketing Guide
              </h2>

              {/* Card description */}
              <p className="text-sm text-[#BFE2DC] mb-6" style={{ fontFamily: "Roboto, sans-serif" }}>
                Learn the exact frameworks and systems that top SaaS companies use to scale revenue on autopilot.
              </p>

              {/* Email form */}
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-[#1e3f62] bg-[#0f1f2e] px-4 py-3 text-sm text-[#F5F7FA] placeholder-[#429E93] focus:border-[#00D1C1] focus:outline-none focus:ring-1 focus:ring-[#00D1C1]/50"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#00D1C1] px-6 py-3 font-bold text-[#132A4A] hover:bg-[#04C3B3] transition-colors"
                >
                  Send Me the Guide
                </button>
              </form>

              {/* Trust note */}
              <p className="mt-4 text-xs text-[#BFE2DC] text-center opacity-80">
                Join 5000+ founders getting weekly growth insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
