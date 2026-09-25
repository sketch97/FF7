"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselCard {
  id: number
  title: string
  description: string
  icon?: React.ReactNode
  tag?: string
}

interface CardCarouselProps {
  cards: CarouselCard[]
  title?: string
}

export function CardCarousel({ cards, title }: CardCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return
    const scrollAmount = 320
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(
          containerRef.current.scrollWidth - containerRef.current.clientWidth,
          scrollPosition + scrollAmount
        )
    containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
    setScrollPosition(newPosition)
  }

  return (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold tracking-wide flex items-center gap-3">
            <span className="w-1 h-6 bg-[#8b0000]" />
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 glass-panel hover:bg-[#8b0000]/20 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 glass-panel hover:bg-[#8b0000]/20 transition-colors group"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
            </button>
          </div>
        </div>
      )}

      <div 
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-[280px] lg:w-[320px] glass-panel p-6 group hover:border-[#8b0000]/40 transition-all duration-300 snap-start"
          >
            {card.tag && (
              <div className="text-[10px] font-mono text-[#8b0000] mb-3 tracking-widest">
                {card.tag}
              </div>
            )}
            {card.icon && (
              <div className="mb-4 text-[#8b0000] group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
            )}
            <h4 className="font-bold text-lg mb-2 group-hover:text-[#8b0000] transition-colors">
              {card.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {card.description}
            </p>
            <div className="mt-4 h-[2px] w-0 bg-[#8b0000] group-hover:w-full transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}
