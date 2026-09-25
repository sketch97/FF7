"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  quote: string
  author: string
  role?: string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  interval?: number
}

export function TestimonialSlider({ testimonials, autoPlay = true, interval = 6000 }: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length)
  }, [current, testimonials.length, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length)
  }, [current, testimonials.length, goTo])

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, next])

  return (
    <div className="relative glass-panel p-8 lg:p-12">
      <Quote className="absolute top-6 left-6 w-8 h-8 text-[#8b0000]/30" />
      
      <div className="relative min-h-[200px] flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500",
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}
          >
            <p className="text-lg lg:text-xl text-foreground leading-relaxed max-w-2xl mb-6 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div>
              <p className="font-bold text-[#8b0000]">{testimonial.author}</p>
              {testimonial.role && (
                <p className="text-sm text-muted-foreground font-mono">{testimonial.role}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="p-2 hover:bg-[#8b0000]/20 transition-colors group border border-[#8b0000]/20"
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
        </button>
        
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={cn(
                "w-2 h-2 transition-all duration-300",
                index === current ? "bg-[#8b0000] scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 hover:bg-[#8b0000]/20 transition-colors group border border-[#8b0000]/20"
          disabled={isTransitioning}
        >
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
        </button>
      </div>

      <div className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground">
        TRANSMISSION #{String(current + 1).padStart(3, '0')}
      </div>
    </div>
  )
}
