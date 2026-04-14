import { affiliateLinks, categories } from "@/lib/affiliate-links"
import { AffiliateDashboard } from "./affiliate-dashboard"

export const metadata = {
  title: "Affiliate Links Dashboard | CODA GROWTH",
  description: "Manage and monitor your affiliate partner links",
}

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen bg-background">
      <AffiliateDashboard links={affiliateLinks} categories={categories} />
    </main>
  )
}
