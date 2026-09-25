"use client"

import { VHSBackground } from "@/components/vhs-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BroadcastTicker } from "@/components/broadcast-ticker"
import { CardCarousel } from "@/components/card-carousel"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"
import { 
  Users, MessageSquare, Calendar, Bell, Globe, 
  Mic, Video, Image, Hash, ArrowRight, Radio,
  Star, Award, Zap, HeartHandshake
} from "lucide-react"

const communityChannels = [
  {
    id: 1,
    title: "General Discussion",
    description: "The main broadcast channel. Where conversations flow and connections are made daily.",
    icon: <Hash className="w-8 h-8" />,
    tag: "ACTIVE NOW",
  },
  {
    id: 2,
    title: "Voice Lounges",
    description: "Real-time voice chat with Union members. Drop in, hang out, connect.",
    icon: <Mic className="w-8 h-8" />,
    tag: "24/7 OPEN",
  },
  {
    id: 3,
    title: "Media Sharing",
    description: "Share and discover content. Art, music, videos—creativity without limits.",
    icon: <Image className="w-8 h-8" />,
    tag: "FEATURED",
  },
  {
    id: 4,
    title: "Events Hub",
    description: "Community events, game nights, watch parties, and exclusive gatherings.",
    icon: <Calendar className="w-8 h-8" />,
    tag: "WEEKLY",
  },
  {
    id: 5,
    title: "Announcements",
    description: "Official Union broadcasts. Stay informed on the latest developments.",
    icon: <Bell className="w-8 h-8" />,
    tag: "OFFICIAL",
  },
  {
    id: 6,
    title: "Global Network",
    description: "Connect with members worldwide. Time zones don't stop the signal.",
    icon: <Globe className="w-8 h-8" />,
    tag: "WORLDWIDE",
  },
]

const announcements = [
  {
    id: 1,
    title: "New Member Verification System",
    subtitle: "ANNOUNCEMENT #047",
    description: "We've upgraded our verification process to ensure quality over quantity. All new applicants will go through our enhanced screening.",
  },
  {
    id: 2,
    title: "Community Event: Signal Night",
    subtitle: "ANNOUNCEMENT #048",
    description: "Join us this Saturday for our monthly Signal Night. Voice chat, games, and community bonding. All members welcome.",
  },
  {
    id: 3,
    title: "Infrastructure Upgrade Complete",
    subtitle: "ANNOUNCEMENT #049",
    description: "Our servers have been upgraded for better performance. Expect faster load times and improved voice quality.",
  },
]

const memberQuotes = [
  {
    id: 1,
    quote: "The discussions here are different. People actually listen, engage, and contribute meaningfully. It's rare.",
    author: "CIPHER_WAVE",
    role: "Active Member",
  },
  {
    id: 2,
    quote: "I've been part of countless Discord servers. F.F.F. UNION is the only one that feels like a real community.",
    author: "DARK_FREQUENCY",
    role: "Verified Member",
  },
  {
    id: 3,
    quote: "The events are incredible. It's not just about hanging out—it's about building something together.",
    author: "STATIC_BLOOM",
    role: "Event Coordinator",
  },
  {
    id: 4,
    quote: "What sets this apart is the culture. Everyone here understands the value of loyalty and respect.",
    author: "ECHO_DRIFT",
    role: "Long-time Member",
  },
]

const memberRoles = [
  {
    title: "Initiates",
    description: "New members experiencing their first broadcasts. Learning the frequency.",
    count: "847",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Verified",
    description: "Members who have proven their commitment to the Union.",
    count: "1,243",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Core Members",
    description: "The backbone of F.F.F. UNION. Active contributors and trusted voices.",
    count: "512",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Inner Circle",
    description: "Leadership and key decision-makers. The signal's strongest broadcast.",
    count: "45",
    icon: <Zap className="w-6 h-6" />,
  },
]

export default function CommunityPage() {
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
                <Users className="w-4 h-4 text-[#8b0000]" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">COMMUNITY HUB</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 vhs-text-glow">
                The Collective
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Step into a community that feels alive. Active discussions, meaningful connections, 
                and a culture that values every member. This is where the signal comes to life.
              </p>

              <Button 
                asChild
                size="lg"
                className="bg-[#8b0000] hover:bg-[#a00000] text-white border-0 font-semibold tracking-wide animate-pulse-glow"
              >
                <a href="https://discord.gg/fBUJbNQSqJ" target="_blank" rel="noopener noreferrer">
                  Join the Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <BroadcastTicker />

        {/* Live Status */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Radio className="w-5 h-5 text-[#8b0000] animate-signal-pulse" />
                  <span className="text-sm font-mono">COMMUNITY STATUS:</span>
                  <span className="text-sm font-bold text-[#8b0000]">ACTIVE</span>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-muted-foreground">
                  <span><span className="text-[#8b0000]">247</span> ONLINE NOW</span>
                  <span><span className="text-[#8b0000]">12</span> IN VOICE</span>
                  <span><span className="text-[#8b0000]">89</span> MESSAGES TODAY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Channels Carousel */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CardCarousel cards={communityChannels} title="Community Channels" />
          </div>
        </section>

        {/* Announcements Slider */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Latest Broadcasts</h2>
              <span className="text-xs font-mono text-muted-foreground ml-auto">OFFICIAL FEED</span>
            </div>
            <HeroSlider slides={announcements} interval={7000} />
          </div>
        </section>

        {/* Member Tiers */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Member Network</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {memberRoles.map((role, index) => (
                <div key={index} className="glass-panel p-6 group hover:border-[#8b0000]/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[#8b0000] group-hover:scale-110 transition-transform">
                      {role.icon}
                    </div>
                    <span className="text-2xl font-bold text-[#8b0000]">{role.count}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground font-mono">
                TOTAL NETWORK STRENGTH: <span className="text-[#8b0000] font-bold">2,647 MEMBERS</span>
              </p>
            </div>
          </div>
        </section>

        {/* Member Testimonials */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Community Voices</h2>
            </div>
            <TestimonialSlider testimonials={memberQuotes} />
          </div>
        </section>

        {/* Events & Activities */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Events & Activities</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-panel p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-6 h-6 text-[#8b0000]" />
                  <div className="text-[10px] font-mono text-muted-foreground">WEEKLY</div>
                </div>
                <h3 className="font-bold text-lg mb-2">Signal Nights</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Every Saturday, the Union gathers. Voice chat, games, movies, and genuine connection.
                </p>
                <div className="text-xs font-mono text-[#8b0000]">NEXT: SAT 8PM EST</div>
              </div>

              <div className="glass-panel p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-[#8b0000]" />
                  <div className="text-[10px] font-mono text-muted-foreground">MONTHLY</div>
                </div>
                <h3 className="font-bold text-lg mb-2">Town Halls</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Community meetings where every voice matters. Discuss the future of the Union.
                </p>
                <div className="text-xs font-mono text-[#8b0000]">NEXT: FIRST FRIDAY</div>
              </div>

              <div className="glass-panel p-6">
                <div className="flex items-center gap-3 mb-4">
                  <HeartHandshake className="w-6 h-6 text-[#8b0000]" />
                  <div className="text-[10px] font-mono text-muted-foreground">ONGOING</div>
                </div>
                <h3 className="font-bold text-lg mb-2">Mentorship Program</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Experienced members guiding newcomers. Building the next generation of the Union.
                </p>
                <div className="text-xs font-mono text-[#8b0000]">ALWAYS ACTIVE</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#8b0000]/10 border-y border-[#8b0000]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 vhs-text-glow">
              Become Part of the Signal
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              The community is waiting. The channels are open. Your voice belongs in this broadcast.
            </p>
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
