export function TrustBar() {
  const logos = [
    {
      name: "ActiveCampaign",
      svg: (
        <svg viewBox="0 0 190 32" className="h-6 w-auto fill-current" aria-label="ActiveCampaign">
          <text x="0" y="24" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.2">
            ActiveCampaign
          </text>
        </svg>
      ),
    },
    {
      name: "GitHub",
      svg: (
        <svg viewBox="0 0 100 32" className="h-6 w-auto fill-current" aria-label="GitHub">
          <text x="0" y="24" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
            GitHub
          </text>
        </svg>
      ),
    },
    {
      name: "HubSpot",
      svg: (
        <svg viewBox="0 0 120 32" className="h-6 w-auto fill-current" aria-label="HubSpot">
          <text x="0" y="24" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
            HubSpot
          </text>
        </svg>
      ),
    },
    {
      name: "Make",
      svg: (
        <svg viewBox="0 0 70 32" className="h-6 w-auto fill-current" aria-label="Make">
          <text x="0" y="24" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
            Make
          </text>
        </svg>
      ),
    },
    {
      name: "AdCreative",
      svg: (
        <svg viewBox="0 0 140 32" className="h-6 w-auto fill-current" aria-label="AdCreative">
          <text x="0" y="24" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.3">
            AdCreative
          </text>
        </svg>
      ),
    },
    {
      name: "Zapier",
      svg: (
        <svg viewBox="0 0 90 32" className="h-6 w-auto fill-current" aria-label="Zapier">
          <text x="0" y="24" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
            Zapier
          </text>
        </svg>
      ),
    },
    {
      name: "Gamma",
      svg: (
        <svg viewBox="0 0 100 32" className="h-6 w-auto fill-current" aria-label="Gamma">
          <text x="0" y="24" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
            Gamma
          </text>
        </svg>
      ),
    },
    {
      name: "BeeHiiv",
      svg: (
        <svg viewBox="0 0 100 32" className="h-6 w-auto fill-current" aria-label="BeeHiiv">
          <text x="0" y="24" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
            BeeHiiv
          </text>
        </svg>
      ),
    },
    {
      name: "Kit",
      svg: (
        <svg viewBox="0 0 50 32" className="h-6 w-auto fill-current" aria-label="Kit">
          <text x="0" y="24" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
            Kit
          </text>
        </svg>
      ),
    },
    {
      name: "GoHighLevel",
      svg: (
        <svg viewBox="0 0 160 32" className="h-6 w-auto fill-current" aria-label="GoHighLevel">
          <text x="0" y="24" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.2">
            GoHighLevel
          </text>
        </svg>
      ),
    },
  ]


  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos]

  return (
    <section className="border-y border-[#1e3f62] bg-[#0e2239] py-10">
      <div className="mb-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#429E93]">
          Integrated With The Tools You Already Use
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, #0e2239, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, #0e2239, transparent)" }} />

        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="mx-10 flex items-center text-[#429E93]/70 hover:text-[#32CEC0] transition-colors"
              aria-label={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
