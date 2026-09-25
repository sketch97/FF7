"use client"

import { useState } from "react"
import { Play, ExternalLink, Image as ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MediaItem {
  id: number
  title: string
  type: "image" | "video"
  thumbnail?: string
  date?: string
}

interface MediaGridProps {
  items: MediaItem[]
  columns?: number
}

export function MediaGrid({ items, columns = 3 }: MediaGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div 
      className={cn(
        "grid gap-4",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group aspect-video glass-panel overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Placeholder background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-[#8b0000]/20" />
          </div>

          {item.thumbnail && (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          {/* Scanline overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
              backgroundSize: '100% 4px',
            }}
          />

          {/* Hover overlay */}
          <div 
            className={cn(
              "absolute inset-0 bg-[#8b0000]/80 flex flex-col items-center justify-center transition-all duration-300",
              hoveredId === item.id ? "opacity-100" : "opacity-0"
            )}
          >
            {item.type === "video" ? (
              <Play className="w-12 h-12 text-white mb-2" />
            ) : (
              <ExternalLink className="w-8 h-8 text-white mb-2" />
            )}
            <span className="text-white font-semibold text-center px-4">{item.title}</span>
          </div>

          {/* Corner label */}
          <div className="absolute top-2 left-2 px-2 py-1 bg-[#0a0a0a]/80 text-[10px] font-mono text-[#8b0000]">
            {item.title}
          </div>

          {/* Date */}
          {item.date && (
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-[#0a0a0a]/80 text-[10px] font-mono text-muted-foreground">
              {item.date}
            </div>
          )}

          {/* Border glow on hover */}
          <div 
            className={cn(
              "absolute inset-0 border-2 transition-colors duration-300 pointer-events-none",
              hoveredId === item.id ? "border-[#8b0000]" : "border-transparent"
            )}
          />
        </div>
      ))}
    </div>
  )
}
