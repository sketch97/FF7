"use client"

import { useEffect, useState } from "react"

export function VHSBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#050505]" />

      {/* Static grain texture avoids repaint-heavy full-screen transforms. */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* Scanlines */}
      <div 
        className="absolute inset-0 opacity-[0.08] animate-scanlines"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Horizontal scan line that moves */}
      <div 
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b0000]/20 to-transparent animate-distortion-band"
        style={{ top: '0%' }}
      />

      {/* Red flicker overlay */}
      <div className="absolute inset-0 bg-[#8b0000] opacity-0 animate-red-flicker" />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* CRT curve effect (subtle) */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Horizontal distortion bands */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute left-0 right-0 h-[30px] opacity-[0.02]"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(139,0,0,0.1), transparent)',
            animation: 'distortion-band 12s linear infinite',
            animationDelay: '-4s',
          }}
        />
        <div 
          className="absolute left-0 right-0 h-[50px] opacity-[0.015]"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)',
            animation: 'distortion-band 18s linear infinite',
            animationDelay: '-8s',
          }}
        />
      </div>

      {/* Subtle red ambient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(ellipse at center, #8b0000 0%, transparent 70%)',
        }}
      />

      {/* Bottom red glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[300px] opacity-[0.05]"
        style={{
          background: 'linear-gradient(to top, #8b0000, transparent)',
        }}
      />
    </div>
  )
}
