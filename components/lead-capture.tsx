"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Gift, Zap, BarChart2, Users, CheckCircle2 } from "lucide-react"

// Make webhook URL for lead capture
const WEBHOOK_URL = "https://hook.us2.make.com/8am4f1ocd1wfijhlr668dvphvae2rvv"

const bonuses = [
  {
    icon: Zap,
    title: "The AI Outbound Playbook",
    value: "$297 value",
    description: "Step-by-step sequences used to book 50+ demos/month.",
  },
  {
    icon: BarChart2,
    title: "The SaaS CRO Checklist",
    value: "$197 value",
    description: "87-point audit that reveals hidden revenue leaks.",
  },
  {
    icon: Users,
    title: "Tech Stack Comparison Sheet",
    value: "$97 value",
    description: "The definitive breakdown of which tools actually scale.",
  },
]

export function LeadCapture() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Get honeypot value (spam prevention)
    const formData = new FormData(e.currentTarget)
    const honeypot = formData.get("website") as string

    // If honeypot is filled, silently reject (bot detected)
    if (honeypot) {
      setIsSubmitting(false)
      return
    }

    const payload = {
      name,
      email,
      website: honeypot,
      source: "codagrowth.ai",
    }

    console.log("[v0] Submitting to Make", payload)

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      console.log("[v0] Form submitted successfully")

      // Show success state briefly then redirect
      setSubmitted(true)
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
    <section className="relative overflow-hidden bg-[#0e2239] py-20 md:py-28">
      {/* Orange glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#FF6B35]/8 blur-[100px]" />
      {/* Teal glow top */}
      <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[400px] rounded-full bg-[#04C3B3]/6 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left: Bonus stack */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-4 py-1.5">
              <Gift className="h-3.5 w-3.5 text-[#FF6B35]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B35]">
                <strong>FREE</strong> Bonus Bundle - $591 Value
              </span>
            </div>

            <h2
              className="text-3xl font-black text-[#F5F7FA] text-balance leading-tight md:text-4xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get the Guide &amp;{" "}
              <span className="text-[#FF6B35]">3 Free Bonuses</span>{" "}
              When You Sign Up Today
            </h2>

            <p className="text-base text-[#BFE2DC] leading-relaxed">
              Every subscriber gets instant access to the AI Marketing Guide <em>plus</em> this exclusive bonus bundle, free for a limited time.
            </p>

            {/* Bonus cards */}
            <div className="flex flex-col gap-4">
              {bonuses.map((bonus) => {
                const Icon = bonus.icon
                return (
                  <div
                    key={bonus.title}
                    className="flex items-start gap-4 rounded-xl border border-[#1e3f62] bg-[#132A4A] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6B35]/15">
                      <Icon className="h-5 w-5 text-[#FF6B35]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-bold text-[#F5F7FA]">{bonus.title}</p>
                        <span className="rounded-full bg-[#FF6B35]/20 px-2 py-0.5 text-xs font-semibold text-[#FF6B35]">
                          {bonus.value}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-[#BFE2DC]">{bonus.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Form card */}
          <div className="relative">
            <div
              className="rounded-2xl p-1"
              style={{ background: "linear-gradient(135deg, #FF6B35 0%, #04C3B3 100%)" }}
            >
              <div className="rounded-xl bg-[#0e2239] p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#FF6B35]">
                  Claim Your Free Bundle
                </p>
                <h3
                  className="mb-4 text-2xl font-bold text-[#F5F7FA] leading-snug"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Ready to Scale with AI?
                </h3>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Honeypot field for spam prevention - hidden from users */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="absolute opacity-0 pointer-events-none h-0 w-0"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-[#BFE2DC]" htmlFor="lc-name">
                        First Name
                      </label>
                      <input
                        id="lc-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your first name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full rounded-lg border border-[#1e3f62] bg-[#132A4A] px-4 py-3 text-sm text-[#F5F7FA] placeholder:text-[#BFE2DC]/40 focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-colors disabled:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-[#BFE2DC]" htmlFor="lc-email">
                        Work Email
                      </label>
                      <input
                        id="lc-email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full rounded-lg border border-[#1e3f62] bg-[#132A4A] px-4 py-3 text-sm text-[#F5F7FA] placeholder:text-[#BFE2DC]/40 focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-colors disabled:opacity-60"
                      />
                    </div>
                    {error && (
                      <p className="text-xs text-red-400 text-center">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B35] px-6 py-4 text-sm font-bold text-white hover:bg-[#e55a27] active:scale-[0.98] transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {isSubmitting ? "Sending..." : "Claim Free Guide + Bonuses"}
                      {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                    </button>
                    <p className="text-center text-xs text-[#BFE2DC]/50">
                      No spam. Just the guide + actionable insights.
                    </p>
                  </form>
                ) : (
                  <div className="flex flex-col items-center gap-3 py-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2DFF8F]/15">
                      <CheckCircle2 className="h-7 w-7 text-[#2DFF8F]" />
                    </div>
                    <p className="text-center text-base font-bold text-[#2DFF8F]">
                      Awesome! You&apos;re all set.
                    </p>
                    <p className="text-center text-sm text-[#BFE2DC]">
                      Check <strong className="text-[#F5F7FA]">{email}</strong> - your guide and bonuses are on the way.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
