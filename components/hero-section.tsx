"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { TrendingUp, Users, Zap } from "lucide-react"

// Make webhook URL for lead capture
const WEBHOOK_URL = "https://hook.us2.make.com/a6bcovllmy02zwl7vsdzhwc4lqm52fpk"

export function HeroSection() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("[v0] Form submit triggered")
    setError("")
    setIsSubmitting(true)

    // Get honeypot value (spam prevention)
    const formDataCheck = new FormData(e.currentTarget)
    const honeypot = formDataCheck.get("website") as string

    // If honeypot is filled, silently reject (bot detected)
    if (honeypot) {
      console.log("[v0] Honeypot filled, rejecting")
      setIsSubmitting(false)
      return
    }

    console.log("[v0] Submitting to Make:", { name, email, source: "codagrowth.ai" })

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("website", honeypot || "")
      formData.append("source", "codagrowth.ai")

      console.log("[v0] Sending fetch to:", WEBHOOK_URL)
      
      await fetch(WEBHOOK_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })

      console.log("[v0] Fetch completed, redirecting...")
      
      // Show success state then redirect
      setSuccess(true)
      setTimeout(() => {
        router.push("/thank-you")
      }, 1500)
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setError("Something went wrong. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-6 md:pt-40 lg:pt-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left column: Lead capture card */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="relative w-full max-w-sm rounded-2xl border border-[#04C3B3]/40 bg-gradient-to-br from-[#1a3559] to-[#0f1f2e] p-8 shadow-2xl"
              style={{
                boxShadow: "0 20px 60px rgba(0, 209, 193, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#00D1C1]/15 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2DFF8F] animate-pulse" />
                <span className="text-xs font-semibold text-[#2DFF8F]">Get instant access</span>
              </div>

              {/* Card headline */}
              <h2
                className="text-2xl font-black text-[#F5F7FA] mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Get Your Free AI Automation SOP
              </h2>

              {/* Card description */}
              <p className="text-sm text-[#BFE2DC] mb-6" style={{ fontFamily: "Roboto, sans-serif" }}>
                Learn the exact frameworks and systems that top SaaS companies use to scale revenue on autopilot.
              </p>

              {/* Lead capture form */}
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* Honeypot field for spam prevention - hidden from users */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 pointer-events-none h-0 w-0"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-[#1e3f62] bg-[#0f1f2e] px-4 py-3 text-sm text-[#F5F7FA] placeholder-[#429E93] focus:border-[#00D1C1] focus:outline-none focus:ring-1 focus:ring-[#00D1C1]/50"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-[#1e3f62] bg-[#0f1f2e] px-4 py-3 text-sm text-[#F5F7FA] placeholder-[#429E93] focus:border-[#00D1C1] focus:outline-none focus:ring-1 focus:ring-[#00D1C1]/50"
                  required
                  disabled={isSubmitting}
                />
                {error && (
                  <p className="text-xs text-red-400 text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting || success}
                  className="relative z-10 w-full rounded-lg bg-[#00D1C1] px-6 py-3.5 font-bold text-[#132A4A] hover:bg-[#04C3B3] transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {success ? "Success, redirecting..." : isSubmitting ? "Sending..." : "Get the Free Guide"}
                </button>
              </form>

              {/* Trust note */}
              <p className="mt-4 text-xs text-[#BFE2DC] text-center opacity-80">
                No spam. Just the guide + actionable insights.
              </p>
            </div>
          </div>

          {/* Right column: Headline, Subheadline, and Social proof */}
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
              Eliminate operational bottlenecks with AI-driven infrastructure and automated revenue systems.
              We install done-for-you AI systems that generate leads, nurture prospects, and close deals while you sleep.
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
        </div>
      </div>
    </section>
  )
}
