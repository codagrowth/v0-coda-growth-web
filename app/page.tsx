import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VideoDemo } from "@/components/video-demo"
import { TrustBar } from "@/components/trust-bar"
import { MachineBreakdown } from "@/components/machine-breakdown"
import { LeadCapture } from "@/components/lead-capture"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#132A4A]">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <VideoDemo />
      <MachineBreakdown />
      <LeadCapture />
      <Footer />
    </main>
  )
}
