"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#191818] bg-[#1a1a1a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/coda-growth-logo.png"
            alt="CODA GROWTH"
            className="h-[3.6rem] w-auto"
          />
        </a>

        {/* Desktop CTA */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#machine"
            className="text-sm font-medium text-[#BFE2DC] hover:text-[#00D1C1] transition-colors"
          >
            Services
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-[#BFE2DC] hover:text-[#00D1C1] transition-colors"
          >
            Demo
          </a>
          <a
            href="#guide"
            className="inline-flex items-center justify-center rounded-lg bg-[#1a3d6e] px-5 py-2.5 text-sm font-semibold text-[#00D1C1] border border-[#00D1C1]/40 hover:bg-[#00D1C1] hover:text-[#132A4A] transition-all duration-200"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get the Free Guide
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#F5F7FA] hover:text-[#00D1C1] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#191818] bg-[#1a1a1a] px-6 py-4 flex flex-col gap-4">
          <a
            href="#machine"
            className="text-sm font-medium text-[#BFE2DC] hover:text-[#00D1C1] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-[#BFE2DC] hover:text-[#00D1C1] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Demo
          </a>
          <a
            href="#guide"
            className="inline-flex items-center justify-center rounded-lg bg-[#00D1C1] px-5 py-2.5 text-sm font-semibold text-[#132A4A] hover:opacity-90 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            Get the Free Guide
          </a>
        </div>
      )}
    </header>
  )
}
