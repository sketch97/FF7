"use client"

import Link from "next/link"
import { Radio, Signal, Wifi } from "lucide-react"

const footerLinks = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Identity", href: "/about" },
      { label: "Community", href: "/community" },
    ]
  },
  {
    title: "Access",
    links: [
      { label: "Broadcast", href: "/media" },
      { label: "Join", href: "/join" },
      { label: "Links", href: "/contact" },
    ]
  },
  {
    title: "Connect",
    links: [
      { label: "Discord", href: "https://discord.gg/fBUJbNQSqJ" },
      { label: "Twitter", href: "https://x.com/FFFCOUSA" },
      { label: "YouTube", href: "https://www.youtube.com/@FFFCOUSA" },
      { label: "Telegram", href: "https://t.me/fffunion" },
    ]
  }
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#8b0000]/20 bg-[#0a0a0a]/80 backdrop-blur-sm">
      {/* Top divider with glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8b0000]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-12 overflow-hidden bg-[#0a0a0a]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Last%20road-w5szzlz1bHE2GaEThlZiwSFMvqgnPX.png"
                  alt="FFF emblem"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-wider vhs-text">F.F.F. UNION</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              A hidden digital union. An underground broadcast network. A private online collective built on loyalty, identity, culture, and presence.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
              <div className="flex items-center gap-1">
                <Radio className="w-3 h-3 text-[#8b0000] animate-signal-pulse" />
                <span>SIGNAL ACTIVE</span>
              </div>
              <div className="flex items-center gap-1">
                <Signal className="w-3 h-3 text-[#8b0000]" />
                <span>98.7%</span>
              </div>
              <div className="flex items-center gap-1">
                <Wifi className="w-3 h-3 text-[#8b0000]" />
                <span>CONNECTED</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm tracking-wider text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#8b0000]" />
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-[#8b0000] transition-colors"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#8b0000]/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
              <span>TRANSMISSION ID: FFF-2024-001</span>
              <span className="hidden sm:inline">|</span>
              <span>FREQUENCY: 108.7 MHz</span>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} F.F.F. UNION. All transmissions monitored.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#8b0000]/30 to-transparent" />
    </footer>
  )
}
