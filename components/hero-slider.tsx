"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
}

interface HeroSliderProps {
  slides: Slide[]
  autoPlay?: boolean
  interval?: number
}

export function HeroSlider({ slides, autoPlay = true, interval = 5000 }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, slides.length, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }, [currentSlide, slides.length, goToSlide])

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(nextSlide, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, nextSlide])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides Container */}
      <div className="relative min-h-[300px] lg:min-h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-all duration-500 ease-out",
              index === currentSlide 
                ? "opacity-100 translate-x-0" 
                : index < currentSlide 
                  ? "opacity-0 -translate-x-full" 
                  : "opacity-0 translate-x-full"
            )}
          >
            <div className="glass-panel p-8 lg:p-12 h-full flex flex-col justify-center">
              <div className="text-[10px] font-mono text-[#8b0000] mb-2 tracking-widest">
                {slide.subtitle}
              </div>
              <h3 className="text-2xl lg:text-4xl font-bold mb-4 vhs-text-glow text-balance">
                {slide.title}
              </h3>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 glass-panel hover:bg-[#8b0000]/20 transition-colors group"
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 glass-panel hover:bg-[#8b0000]/20 transition-colors group"
        disabled={isTransitioning}
      >
        <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-1 transition-all duration-300",
              index === currentSlide 
                ? "w-8 bg-[#8b0000]" 
                : "w-4 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground">
        <span className="text-[#8b0000]">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span> / {String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  )
}
