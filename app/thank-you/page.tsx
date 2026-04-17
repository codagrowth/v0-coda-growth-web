import Link from "next/link"
import { CheckCircle2, Mail, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Thank You | CODA GROWTH",
  description: "Your guide is on the way. Check your inbox for the AI Automation SOP.",
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#132A4A] flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-lg text-center">
        {/* Success icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#2DFF8F]/15">
          <CheckCircle2 className="h-10 w-10 text-[#2DFF8F]" />
        </div>

        {/* Headline */}
        <h1
          className="text-3xl font-black text-[#F5F7FA] mb-4 md:text-4xl"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Thanks! Your guide is on the way.
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg text-[#BFE2DC] mb-8 leading-relaxed"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Check your inbox (and your spam/promotions folder, just in case) for your free AI Automation SOP and bonus bundle.
        </p>

        {/* Email reminder card */}
        <div className="mb-8 rounded-xl border border-[#1e3f62] bg-[#0e2239] p-6">
          <div className="flex items-center justify-center gap-3 text-[#BFE2DC]">
            <Mail className="h-5 w-5 text-[#00D1C1]" />
            <span className="text-sm">
              Keep an eye out for an email from <strong className="text-[#F5F7FA]">CODA GROWTH</strong>
            </span>
          </div>
        </div>

        {/* Back to home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-[#00D1C1]/40 bg-transparent px-6 py-3 text-sm font-semibold text-[#00D1C1] hover:bg-[#00D1C1]/10 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  )
}
