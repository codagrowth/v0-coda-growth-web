import { FileText } from "lucide-react"

interface SOPCardProps {
  letter: string
  tool: string
  title: string
  audience: string
  pdfPath: string
}

export function SOPCard({ letter, tool, title, audience, pdfPath }: SOPCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-[rgba(245,115,74,0.15)] bg-[#1E3F62] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(245,115,74,0.4)] hover:shadow-[0_4px_24px_rgba(245,115,74,0.12)]">
      {/* Hover glow effect */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(245,115,74,0.2),transparent_70%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      
      <div>
        {/* SOP Letter */}
        <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5734A]">
          SOP - {letter}
        </div>
        
        {/* Tool Name */}
        <h2 className="mt-2 text-[32px] font-black leading-tight tracking-tight text-[#F5F7FA]" style={{ fontFamily: "Inter, sans-serif" }}>
          {tool}
        </h2>
        
        {/* Title */}
        <p className="mt-1.5 text-base font-medium leading-snug text-[#BFE2DC]">
          {title}
        </p>
      </div>
      
      {/* Bottom Row: Audience + Actions */}
      <div className="mt-5 flex flex-col gap-4 border-t border-dashed border-[rgba(255,255,255,0.1)] pt-5">
        <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#429E93]" style={{ fontFamily: "Roboto, sans-serif" }}>
          {audience}
        </div>
        
        <div className="flex gap-2">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[rgba(245,115,74,0.35)] bg-[rgba(245,115,74,0.1)] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F5734A] transition-all hover:border-[rgba(245,115,74,0.6)] hover:bg-[rgba(245,115,74,0.18)]"
          >
            <FileText className="h-3.5 w-3.5" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}
