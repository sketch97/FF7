"use client"

import { VHSBackground } from "@/components/vhs-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BroadcastTicker } from "@/components/broadcast-ticker"
import { HeroSlider } from "@/components/hero-slider"
import { CardCarousel } from "@/components/card-carousel"
import { SignalStatus } from "@/components/signal-status"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Radio, Users, Shield, Zap, MessageSquare, Eye, Lock } from "lucide-react"

const featuredSlides = [
  {
    id: 1,
    title: "The Signal Has Been Received",
    subtitle: "BROADCAST #001",
    description: "A new era of digital presence begins. F.F.F. UNION is more than a community—it's a movement, a frequency only the chosen can tune into.",
  },
  {
    id: 2,
    title: "Loyalty Beyond Boundaries",
    subtitle: "BROADCAST #002",
    description: "In a world of fleeting connections, we stand united. Our network spans across borders, time zones, and digital realms.",
  },
  {
    id: 3,
    title: "Identity Verified. Access Granted.",
    subtitle: "BROADCAST #003",
    description: "Your presence here is not an accident. The signal found you. Now it's time to find your place within the Union.",
  },
]

const communityHighlights = [
  {
    id: 1,
    title: "Live Discussions",
    description: "Real-time conversations with Union members across the globe. Every voice matters.",
    icon: <MessageSquare className="w-8 h-8" />,
    tag: "CHANNEL-01",
  },
  {
    id: 2,
    title: "Exclusive Events",
    description: "Private broadcasts, member-only meetups, and digital gatherings that define our culture.",
    icon: <Radio className="w-8 h-8" />,
    tag: "CHANNEL-02",
  },
  {
    id: 3,
    title: "Inner Circle",
    description: "The core of F.F.F. UNION. Where decisions are made and loyalty is rewarded.",
    icon: <Shield className="w-8 h-8" />,
    tag: "CHANNEL-03",
  },
  {
    id: 4,
    title: "Digital Identity",
    description: "Establish your presence. Build your reputation. Become part of something greater.",
    icon: <Eye className="w-8 h-8" />,
    tag: "CHANNEL-04",
  },
  {
    id: 5,
    title: "Secure Network",
    description: "Protected channels, encrypted communications, and verified members only.",
    icon: <Lock className="w-8 h-8" />,
    tag: "CHANNEL-05",
  },
]

const testimonials = [
  {
    id: 1,
    quote: "Finding F.F.F. UNION changed everything. It's not just a server—it's a home for people who understand the value of real connection.",
    author: "SIGNAL_GHOST",
    role: "Member since 2023",
  },
  {
    id: 2,
    quote: "The loyalty here is unmatched. When you're part of the Union, you're never alone in the digital wilderness.",
    author: "NEON_STATIC",
    role: "Core Member",
  },
  {
    id: 3,
    quote: "They say you can't build real relationships online. F.F.F. UNION proves them wrong every single day.",
    author: "VOID_WALKER",
    role: "Network Admin",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <VHSBackground />
      <Navigation />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="text-center mb-16 animate-tape-drift">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel mb-8">
                <Radio className="w-4 h-4 text-[#8b0000] animate-signal-pulse" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">TRANSMISSION ACTIVE</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 vhs-text-glow">
                F.F.F. UNION
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl text-[#8b0000] font-semibold mb-6 tracking-wide">
                Broadcasting Loyalty.
              </p>

              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-10">
                A hidden digital union. An underground broadcast network. A private online collective 
                built on loyalty, identity, culture, and presence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-[#8b0000] hover:bg-[#a00000] text-white border-0 font-semibold tracking-wide text-lg px-8 animate-pulse-glow"
                >
                  <a href="https://discord.gg/fBUJbNQSqJ" target="_blank" rel="noopener noreferrer">
                    Join Discord
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#8b0000]/50 text-foreground hover:bg-[#8b0000]/10 hover:border-[#8b0000] font-semibold tracking-wide text-lg px-8"
                >
                  <Link href="/about">
                    Tune In
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="glass-panel p-4 text-center">
                <div className="text-3xl font-bold text-[#8b0000]">2,847</div>
                <div className="text-xs font-mono text-muted-foreground">ACTIVE MEMBERS</div>
              </div>
              <div className="glass-panel p-4 text-center">
                <div className="text-3xl font-bold text-[#8b0000]">47</div>
                <div className="text-xs font-mono text-muted-foreground">ACTIVE NODES</div>
              </div>
              <div className="glass-panel p-4 text-center">
                <div className="text-3xl font-bold text-[#8b0000]">24/7</div>
                <div className="text-xs font-mono text-muted-foreground">BROADCAST LIVE</div>
              </div>
              <div className="glass-panel p-4 text-center">
                <div className="text-3xl font-bold text-[#8b0000]">100%</div>
                <div className="text-xs font-mono text-muted-foreground">SIGNAL STRENGTH</div>
              </div>
            </div>
          </div>
        </section>

        {/* Broadcast Ticker */}
        <BroadcastTicker />

        {/* Featured Broadcast Slider */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Featured Broadcasts</h2>
              <span className="text-xs font-mono text-muted-foreground ml-auto">LIVE FEED</span>
            </div>
            <HeroSlider slides={featuredSlides} />
          </div>
        </section>

        {/* Signal Status Dashboard */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Network Status</h2>
            </div>
            <SignalStatus />
          </div>
        </section>

        {/* Community Highlights Carousel */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CardCarousel cards={communityHighlights} title="Community Channels" />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Member Transmissions</h2>
            </div>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>

        {/* Page Previews */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Explore the Signal</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/about" className="group">
                <div className="glass-panel p-6 h-full hover:border-[#8b0000]/40 transition-all duration-300">
                  <div className="text-[10px] font-mono text-[#8b0000] mb-2">PAGE-01</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#8b0000] transition-colors">Identity</h3>
                  <p className="text-sm text-muted-foreground">Discover who we are, what we stand for, and the culture that defines F.F.F. UNION.</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#8b0000] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Enter</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/community" className="group">
                <div className="glass-panel p-6 h-full hover:border-[#8b0000]/40 transition-all duration-300">
                  <div className="text-[10px] font-mono text-[#8b0000] mb-2">PAGE-02</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#8b0000] transition-colors">Community</h3>
                  <p className="text-sm text-muted-foreground">Join the conversation. Connect with members. Become part of something greater.</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#8b0000] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Enter</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/media" className="group">
                <div className="glass-panel p-6 h-full hover:border-[#8b0000]/40 transition-all duration-300">
                  <div className="text-[10px] font-mono text-[#8b0000] mb-2">PAGE-03</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#8b0000] transition-colors">Broadcast</h3>
                  <p className="text-sm text-muted-foreground">Access the media archive. Watch broadcasts. Experience the signal.</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#8b0000] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Enter</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#8b0000]/10 border-y border-[#8b0000]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 vhs-text-glow">
              Ready to Join the Signal?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              The transmission is live. The channel is open. Your place in F.F.F. UNION awaits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-[#8b0000] hover:bg-[#a00000] text-white border-0 font-semibold tracking-wide text-lg px-8 animate-pulse-glow"
              >
                <a href="https://discord.gg/fBUJbNQSqJ" target="_blank" rel="noopener noreferrer">
                  <Users className="mr-2 w-5 h-5" />
                  Join Discord
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-[#8b0000]/50 text-foreground hover:bg-[#8b0000]/10 hover:border-[#8b0000] font-semibold tracking-wide text-lg px-8"
              >
                <Link href="/join">
                  <Zap className="mr-2 w-5 h-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
