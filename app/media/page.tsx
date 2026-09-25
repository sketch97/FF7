"use client"

import { VHSBackground } from "@/components/vhs-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BroadcastTicker } from "@/components/broadcast-ticker"
import { HeroSlider } from "@/components/hero-slider"
import { MediaGrid } from "@/components/media-grid"
import { CardCarousel } from "@/components/card-carousel"
import { 
  Radio, Play, Image as ImageIcon, Film, Music, 
  Download, Eye, Clock, TrendingUp, Archive
} from "lucide-react"

const featuredMedia = [
  {
    id: 1,
    title: "Union Broadcast #047: The Signal Strengthens",
    subtitle: "FEATURED BROADCAST",
    description: "Our latest official broadcast covering community updates, upcoming events, and the future direction of F.F.F. UNION. Essential viewing for all members.",
  },
  {
    id: 2,
    title: "Community Highlight Reel 2024",
    subtitle: "FEATURED MEDIA",
    description: "A compilation of the best moments from our community this year. Events, conversations, and the memories we've built together.",
  },
  {
    id: 3,
    title: "Behind the Signal: Documentary",
    subtitle: "EXCLUSIVE CONTENT",
    description: "An inside look at how F.F.F. UNION operates. Meet the team, understand the vision, and see what makes this community unique.",
  },
]

const latestDrops = [
  {
    id: 1,
    title: "F.F.F. UNION DISCORD IMAGES!!!",
    type: "image" as const,
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0298-2dh1c8PYExxsLy10hKzlRKGQSjB0ny.jpg",
    date: "F.F.F. UNION DISCORD IMAGES!!!",
  },
  {
    id: 2,
    title: "F.F.F. UNION DISCORD IMAGES!!!",
    type: "image" as const,
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Honda%20civic-IZX68q1UlYJLGyGRQnnVMaflBVPKrA.jpg",
    date: "F.F.F. UNION DISCORD IMAGES!!!",
  },
  {
    id: 3,
    title: "F.F.F. UNION DISCORD IMAGES!!!",
    type: "image" as const,
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nissan%20s13-7WRc2j98JsHkspl1zGuEVbKmNV69H4.jpg",
    date: "F.F.F. UNION DISCORD IMAGES!!!",
  },
  {
    id: 4,
    title: "F.F.F. UNION DISCORD IMAGES!!!",
    type: "image" as const,
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shoe%20collection-Qot54MnFzM5cnuMwsLYmWiYyd3LciP.jpg",
    date: "F.F.F. UNION DISCORD IMAGES!!!",
  },
  {
    id: 5,
    title: "F.F.F. UNION DISCORD IMAGES!!!",
    type: "image" as const,
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purple-8JEvDrGYpEsuatXFBVrkMEu7DDwP8t.jpg",
    date: "F.F.F. UNION DISCORD IMAGES!!!",
  },
  {
    id: 6,
    title: "F.F.F. UNION DISCORD IMAGES!!!",
    type: "image" as const,
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gatto-iifBV2qVLTDyuhzaIwycUqiOhSM4YO.jpg",
    date: "F.F.F. UNION DISCORD IMAGES!!!",
  },
]

const archiveCategories = [
  {
    id: 1,
    title: "Official Broadcasts",
    description: "All official Union broadcasts, announcements, and communications archived for members.",
    icon: <Radio className="w-8 h-8" />,
    tag: "47 ITEMS",
  },
  {
    id: 2,
    title: "Event Recordings",
    description: "Recordings from Signal Nights, Town Halls, and special community events.",
    icon: <Film className="w-8 h-8" />,
    tag: "124 ITEMS",
  },
  {
    id: 3,
    title: "Visual Archive",
    description: "Community artwork, graphics, screenshots, and visual content from members.",
    icon: <ImageIcon className="w-8 h-8" />,
    tag: "892 ITEMS",
  },
  {
    id: 4,
    title: "Audio Library",
    description: "Music, podcasts, and audio content created by and for the Union.",
    icon: <Music className="w-8 h-8" />,
    tag: "56 ITEMS",
  },
]

const tickerUpdates = [
  "NEW BROADCAST AVAILABLE",
  "SIGNAL NIGHT RECAP UPLOADED",
  "COMMUNITY ART SHOWCASE LIVE",
  "ARCHIVE UPDATED",
  "FEATURED CONTENT REFRESHED",
]

export default function MediaPage() {
  return (
    <div className="min-h-screen relative">
      <VHSBackground />
      <Navigation />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel mb-6">
                <Film className="w-4 h-4 text-[#8b0000]" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">MEDIA CENTER</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 vhs-text-glow">
                The Broadcast Archive
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Every signal leaves a trace. Explore our media archive—broadcasts, visuals, recordings, 
                and content that captures the essence of F.F.F. UNION.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Archive className="w-4 h-4 text-[#8b0000]" />
                  <span><span className="text-[#8b0000]">1,119</span> ITEMS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#8b0000]" />
                  <span><span className="text-[#8b0000]">47K</span> VIEWS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#8b0000]" />
                  <span>UPDATED DAILY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Update Ticker */}
        <div className="relative overflow-hidden bg-[#8b0000]/10 border-y border-[#8b0000]/20 py-2">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...tickerUpdates, ...tickerUpdates].map((update, index) => (
              <div key={index} className="flex items-center mx-8">
                <TrendingUp className="w-3 h-3 text-[#8b0000] mr-2" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">
                  {update}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Media Slider */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Featured Content</h2>
              <span className="text-xs font-mono text-muted-foreground ml-auto">NOW PLAYING</span>
            </div>
            <HeroSlider slides={featuredMedia} interval={8000} />
          </div>
        </section>

        {/* Latest Drops Grid */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Latest Images</h2>
            </div>
            <MediaGrid items={latestDrops} columns={3} />
          </div>
        </section>

        {/* Archive Categories */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CardCarousel cards={archiveCategories} title="Archive Categories" />
          </div>
        </section>

        {/* Broadcast Schedule */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Broadcast Schedule</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { day: "MONDAY", content: "No Scheduled Broadcast", status: "OFF-AIR" },
                { day: "WEDNESDAY", content: "Mid-Week Update", status: "LIVE 7PM EST" },
                { day: "SATURDAY", content: "Signal Night", status: "LIVE 8PM EST" },
                { day: "MONTHLY", content: "Town Hall", status: "FIRST FRIDAY" },
              ].map((schedule, index) => (
                <div key={index} className="glass-panel p-4">
                  <div className="text-[10px] font-mono text-[#8b0000] mb-2">{schedule.day}</div>
                  <h4 className="font-semibold mb-1">{schedule.content}</h4>
                  <div className="flex items-center gap-2">
                    <Radio className={`w-3 h-3 ${schedule.status === "OFF-AIR" ? "text-muted-foreground" : "text-[#8b0000] animate-signal-pulse"}`} />
                    <span className="text-xs font-mono text-muted-foreground">{schedule.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Stats */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-8">
                <Radio className="w-5 h-5 text-[#8b0000] animate-signal-pulse" />
                <span className="text-sm font-mono tracking-wider">BROADCAST ANALYTICS</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10">
                  <div className="text-3xl lg:text-4xl font-bold text-[#8b0000] mb-2">47</div>
                  <div className="text-xs font-mono text-muted-foreground">TOTAL BROADCASTS</div>
                </div>
                <div className="text-center p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10">
                  <div className="text-3xl lg:text-4xl font-bold text-[#8b0000] mb-2">892</div>
                  <div className="text-xs font-mono text-muted-foreground">VISUAL ASSETS</div>
                </div>
                <div className="text-center p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10">
                  <div className="text-3xl lg:text-4xl font-bold text-[#8b0000] mb-2">124</div>
                  <div className="text-xs font-mono text-muted-foreground">EVENT RECORDINGS</div>
                </div>
                <div className="text-center p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10">
                  <div className="text-3xl lg:text-4xl font-bold text-[#8b0000] mb-2">47K</div>
                  <div className="text-xs font-mono text-muted-foreground">TOTAL VIEWS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-[#8b0000]/10 border-y border-[#8b0000]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 vhs-text-glow">
              Access the Full Archive
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join F.F.F. UNION to unlock the complete media library. Exclusive broadcasts, 
              member-only content, and the full history of our signal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://discord.gg/fBUJbNQSqJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#8b0000] hover:bg-[#a00000] text-white font-semibold tracking-wide transition-colors animate-pulse-glow"
              >
                <Play className="w-5 h-5" />
                Join for Full Access
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-8 py-3 border border-[#8b0000]/50 text-foreground hover:bg-[#8b0000]/10 hover:border-[#8b0000] font-semibold tracking-wide transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Samples
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
