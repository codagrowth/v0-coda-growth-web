import { SOPCard } from "@/components/sop-card"

const sopData = [
  {
    letter: "A",
    tool: "AdCreative",
    title: "The High-Velocity Ad Ops SOP",
    audience: "Performance Marketers & Agency Owners",
    pdfPath: "/pdfs/adcreative-guide.pdf",
  },
  {
    letter: "B",
    tool: "GoHighLevel",
    title: "The CRM & Funnel Consolidation SOP",
    audience: "B2B Founders & Agency Operators",
    pdfPath: "/pdfs/gohighlevel-guide.pdf",
  },
  {
    letter: "C",
    tool: "Beehiiv",
    title: "The High-Ticket Newsletter Infrastructure",
    audience: "B2B Content Operators & Consultants",
    pdfPath: "/pdfs/beehiiv-guide.pdf",
  },
  {
    letter: "D",
    tool: "Kit",
    title: "Creator-to-Consultant Automation",
    audience: "Independent Consultants & Course Creators",
    pdfPath: "/pdfs/kit-guide.pdf",
  },
  {
    letter: "E",
    tool: "Gamma",
    title: "AI-Powered Pitch Deck & Sales Asset SOP",
    audience: "Senior PMs, Consultants & Agency Principals",
    pdfPath: "/pdfs/gamma-guide.pdf",
  },
  {
    letter: "F",
    tool: "Reply.io",
    title: "The Cold Outreach Autopilot SOP",
    audience: "B2B Sales Teams & Outbound Operators",
    pdfPath: "/pdfs/replyio-guide.pdf",
  },
]

export default function SOPLibraryPage() {
  return (
    <main className="min-h-screen bg-[#132A4A]">
      <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-20">
        {/* Hero Section */}
        <header className="mb-12 text-center md:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <img
              src="/coda-growth-logo.png"
              alt="CODA GROWTH"
              className="h-auto w-[120px] md:w-[160px]"
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5734A]">
            CODA GROWTH - Revenue Ops Library
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.025em] text-[#F5F7FA] md:text-[52px] md:leading-[1.08]" style={{ fontFamily: "Inter, sans-serif" }}>
            The 2026 SOP Stack
          </h1>
          <p className="mx-auto mt-5 max-w-[60ch] text-sm leading-relaxed text-[#BFE2DC] md:text-base" style={{ fontFamily: "Roboto, sans-serif" }}>
            Six tool-specific Standard Operating Procedures that operationalize
            the Autonomous Revenue Engine. Each document is a standalone,
            print-ready deliverable.
          </p>
        </header>

        {/* SOP Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {sopData.map((sop) => (
            <SOPCard key={sop.letter} {...sop} />
          ))}
        </div>
      </div>
    </main>
  )
}
