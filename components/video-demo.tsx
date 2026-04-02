export function VideoDemo() {
  return (
    <section id="demo" className="bg-[#132A4A] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#04C3B3]">
            See It In Action
          </span>
          <h2
            className="text-3xl font-black text-[#F5F7FA] text-balance md:text-4xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Watch How the Growth Machine Works
          </h2>
          <p className="max-w-xl text-base text-[#BFE2DC] leading-relaxed">
            A 7-minute walkthrough of the exact AI automation stack we deploy for B2B SaaS companies generating $1M–$10M ARR.
          </p>
        </div>

        {/* Video container — framed with foundation teal */}
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            boxShadow:
              "0 0 0 3px #429E93, 0 25px 60px rgba(4, 195, 179, 0.18), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          {/* Aspect-ratio wrapper */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&color=white"
              title="CODA GROWTH – AI Automation Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              style={{ border: "none" }}
            />
          </div>
        </div>

        {/* Below video social proof */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#BFE2DC]">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2DFF8F]" />
            Used by 120+ B2B SaaS teams
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2DFF8F]" />
            Average 3x pipeline in 90 days
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2DFF8F]" />
            No code required
          </span>
        </div>
      </div>
    </section>
  )
}
