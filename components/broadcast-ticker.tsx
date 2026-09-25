"use client"

import { Radio } from "lucide-react"

const tickerMessages = [
  "SIGNAL RECEIVED BY THE CHOSEN",
  "BROADCASTING LOYALTY SINCE 2024",
  "CHANNEL ACTIVE",
  "NETWORK SYNCHRONIZED",
  "TRANSMISSION SECURE",
  "MEMBERS ONLINE: 2,847",
  "FREQUENCY: 108.7 MHz",
  "UNION STRENGTH: MAXIMUM",
  "NEW BROADCAST INCOMING",
  "IDENTITY VERIFIED",
]

export function BroadcastTicker() {
  const duplicatedMessages = [...tickerMessages, ...tickerMessages]

  return (
    <div className="relative overflow-hidden bg-[#8b0000]/10 border-y border-[#8b0000]/20 py-2">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedMessages.map((message, index) => (
          <div key={index} className="flex items-center mx-8">
            <Radio className="w-3 h-3 text-[#8b0000] mr-2 animate-signal-pulse" />
            <span className="text-xs font-mono tracking-wider text-muted-foreground">
              {message}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
