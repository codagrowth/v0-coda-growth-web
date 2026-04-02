"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, TrendingUp, Bot } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden bg-[#132A4A] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#BFE2DC 1px, transparent 1px), linear-gradient(90deg, #BFE2DC 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#04C3B3]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#04C3B3]/30 bg-[#04C3B3]/10 px-4 py-1.5">
              <Bot className="h-3.5 w-3.5 text-[#04C3B3]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#04C3B3]">
                AI-Powered Growth System
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl font-black leading-[1.1] tracking-tight text-balance text-[#F5F7FA] md:text-5xl lg:text-6xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Scale Your SaaS with{" "}
              <span className="text-[#00D1C1]">AI &amp; Automation.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg leading-relaxed text-[#BFE2DC] max-w-lg" style={{ fontFamily: "Roboto, sans-serif" }}>
              Stop leaving revenue on the table. We install done-for-you AI systems that generate leads, nurture prospects, and close deals while you sleep.
            </p>

            {/* Social proof micro-stats */}
            <div className="flex flex-wrap gap-6 text-sm text-[#BFE2DC]">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-[#2DFF8F]" />
                <span><strong className="text-[#F5F7FA]">3x</strong> avg. pipeline growth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#2DFF8F]" />
                <span><strong className="text-[#F5F7FA]">120+</strong> SaaS companies scaled</span>
              </div>
            </div>
          </div>

          {/* Right: Lead capture card */}
          <div id="guide" className="relative">
            <div className="rounded-2xl border border-[#1e3f62] bg-[#1a3559] p-8 shadow-2xl shadow-black/40">
              {/* Card badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#00D1C1]/15 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2DFF8F] animate-pulse" />
                <span className="text-xs font-semibold text-[#2DFF8F]">FREE - Limited Time</span>
              </div>

              <h2
                className="mb-2 text-2xl font-bold text-[#F5F7FA] leading-snug"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                The Free AI Marketing Guide
              </h2>
              <p className="mb-6 text-sm text-[#BFE2DC] leading-relaxed">
                The exact AI stack top B2B SaaS companies use to generate 3x more pipeline in 90 days.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-[#1e3f62] bg-[#0e2239] px-4 py-3 text-sm text-[#F5F7FA] placeholder:text-[#BFE2DC]/50 focus:outline-none focus:border-[#00D1C1] focus:ring-1 focus:ring-[#00D1C1] transition-colors"
                  />
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#00D1C1] px-6 py-3.5 text-sm font-bold text-[#132A4A] hover:bg-[#04C3B3] active:scale-[0.98] transition-all duration-150"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Get the Free AI Marketing Guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-[#BFE2DC]/60">
                    No spam. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center gap-3 py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2DFF8F]/15">
                    <CheckCircle2 className="h-6 w-6 text-[#2DFF8F]" />
                  </div>
                  <p className="text-center text-base font-semibold text-[#2DFF8F]">
                    You&apos;re in! Check your inbox.
                  </p>
                  <p className="text-center text-sm text-[#BFE2DC]">
                    Your free guide is on its way to <strong className="text-[#F5F7FA]">{email}</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full border border-[#00D1C1]/20 bg-[#00D1C1]/5 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
