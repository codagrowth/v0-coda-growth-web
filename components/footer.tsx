const footerLinks = [
  { label: "Contact Us", href: "#contact" },
  { label: "Customer Service", href: "#support" },
  { label: "Affiliate Disclosure", href: "#affiliate" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
]

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top row: Logo + links */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/coda-growth-logo-footer.png"
              alt="CODA GROWTH"
              className="h-8 w-auto"
            />
          </a>

          {/* Footer nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-200" />

        {/* Compliance note */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
            &copy; 2026 CODA GROWTH. All rights reserved. This site is{" "}
            <strong className="text-slate-500">NOT endorsed by Google or Meta</strong>.
            Results mentioned are not typical and may vary based on your individual effort,
            experience, and market conditions.
          </p>
          <p className="text-xs italic text-slate-400 max-w-2xl leading-relaxed">
            <strong>Affiliate Disclosure:</strong> Some links on this site are affiliate links,
            meaning CODA GROWTH may earn a commission at no additional cost to you if you
            click through and make a purchase. We only recommend tools and services we genuinely
            use and trust.
          </p>
        </div>
      </div>
    </footer>
  )
}
