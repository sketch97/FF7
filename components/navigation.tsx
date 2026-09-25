"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Radio } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Identity" },
  { href: "/community", label: "Community" },
  { href: "/media", label: "Broadcast" },
  { href: "/join", label: "Access" },
  { href: "/contact", label: "Links" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [signalActive, setSignalActive] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalActive(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#8b0000]/20" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Last%20road-EIkJdIQ9dumg9qj2OHCXtDwuhYOzFF.png"
                  alt="F.F.F. UNION emblem"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg tracking-wider text-foreground vhs-text">F.F.F. UNION</span>
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                  <Radio className={cn("w-3 h-3", signalActive ? "text-[#8b0000]" : "text-muted-foreground")} />
                  <span className={cn(signalActive ? "text-[#8b0000]" : "text-muted-foreground")}>
                    SIGNAL {signalActive ? "LIVE" : "SYNC"}
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 relative group",
                    pathname === item.href
                      ? "text-[#8b0000]"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#8b0000] transition-all duration-200",
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <span className="text-[10px] font-mono text-muted-foreground opacity-60">
                CH-001
              </span>
              <Button 
                asChild
                className="bg-[#8b0000] hover:bg-[#a00000] text-white border-0 font-semibold tracking-wide animate-pulse-glow"
              >
                <a href="https://discord.gg/fBUJbNQSqJ" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-[#8b0000] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/98 backdrop-blur-md border-b border-[#8b0000]/20 transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium tracking-wide transition-colors border-l-2",
                  pathname === item.href
                    ? "text-[#8b0000] border-[#8b0000] bg-[#8b0000]/10"
                    : "text-muted-foreground hover:text-foreground border-transparent hover:border-[#8b0000]/50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button 
                asChild
                className="w-full bg-[#8b0000] hover:bg-[#a00000] text-white border-0 font-semibold tracking-wide"
              >
                <a href="https://discord.gg/fBUJbNQSqJ" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
