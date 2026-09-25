"use client"

import { VHSBackground } from "@/components/vhs-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BroadcastTicker } from "@/components/broadcast-ticker"
import { CardCarousel } from "@/components/card-carousel"
import { Shield, Heart, Eye, Users, Flame, Crown, Target, Compass } from "lucide-react"

const coreValues = [
  {
    id: 1,
    title: "Loyalty",
    description: "The foundation of everything we build. Loyalty to the Union, to each other, and to the culture we've created together.",
    icon: <Shield className="w-8 h-8" />,
    tag: "PILLAR-01",
  },
  {
    id: 2,
    title: "Identity",
    description: "Your presence matters. Your voice counts. In F.F.F. UNION, you're not just a username—you're a valued member of our collective.",
    icon: <Eye className="w-8 h-8" />,
    tag: "PILLAR-02",
  },
  {
    id: 3,
    title: "Culture",
    description: "We've built something unique. A digital culture that transcends borders, time zones, and the superficial connections of the modern internet.",
    icon: <Flame className="w-8 h-8" />,
    tag: "PILLAR-03",
  },
  {
    id: 4,
    title: "Presence",
    description: "Being here means being present. Active participation, genuine engagement, and real connections define our community.",
    icon: <Heart className="w-8 h-8" />,
    tag: "PILLAR-04",
  },
  {
    id: 5,
    title: "Unity",
    description: "Together we are stronger. The Union stands as one, supporting each member through every challenge and celebration.",
    icon: <Users className="w-8 h-8" />,
    tag: "PILLAR-05",
  },
]

const timeline = [
  {
    year: "2023",
    title: "The First Signal",
    description: "F.F.F. UNION began as a small group of like-minded individuals seeking genuine connection in a disconnected digital world.",
  },
  {
    year: "2023",
    title: "Network Expansion",
    description: "Word spread through trusted channels. The Union grew, but never at the cost of our core values. Quality over quantity.",
  },
  {
    year: "2024",
    title: "The Broadcast Begins",
    description: "We launched our public presence—not to invite everyone, but to signal to those who understand what we're building.",
  },
  {
    year: "2024",
    title: "Community Milestones",
    description: "Thousands of verified members. Countless meaningful connections. A culture that speaks for itself.",
  },
  {
    year: "NOW",
    title: "The Signal Continues",
    description: "We're still growing, still evolving, still broadcasting. The channel is open for those ready to tune in.",
  },
]

export default function AboutPage() {
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
                <Crown className="w-4 h-4 text-[#8b0000]" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">IDENTITY FILE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 vhs-text-glow">
                Who We Are
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                F.F.F. UNION is not just another Discord server. It&apos;s not a gaming clan, a startup, 
                or a social media presence. It&apos;s a <span className="text-[#8b0000]">digital collective</span>—a 
                hidden network of individuals united by shared values, genuine connection, and unwavering loyalty.
              </p>

              <div className="h-[1px] w-32 bg-gradient-to-r from-[#8b0000] to-transparent" />
            </div>
          </div>
        </section>

        <BroadcastTicker />

        {/* The Brand Story */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1 h-8 bg-[#8b0000]" />
                  <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">The Brand</h2>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Imagine tuning into a hidden frequency—a signal that most people can&apos;t even detect. 
                    That&apos;s F.F.F. UNION. We&apos;re the broadcast that plays for those who know where to look, 
                    the channel that connects those who understand its value.
                  </p>
                  <p>Free From Fear Since 2023.</p>
                  <p>
                    The Union exists because we believe in something different. We believe that online 
                    communities can be meaningful. We believe that loyalty and identity still matter. 
                    We believe that the best connections are made when people come together around 
                    shared values, not just shared interests.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-[10px] font-mono text-[#8b0000] mb-4 tracking-widest">MANIFESTO</div>
                <blockquote className="text-xl lg:text-2xl font-bold leading-relaxed vhs-text-glow">
                  &ldquo;We don&apos;t broadcast to everyone. We broadcast to the ones who are meant to hear 
                  it. F.F.F. UNION is not found—it finds you.&rdquo;
                </blockquote>
                <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-[#8b0000] via-[#8b0000]/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Carousel */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CardCarousel cards={coreValues} title="Core Pillars" />
          </div>
        </section>

        {/* The Culture */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">The Culture</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-panel p-6">
                <Target className="w-8 h-8 text-[#8b0000] mb-4" />
                <h3 className="font-bold text-lg mb-2">Purpose-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Every member has a reason for being here. We&apos;re not collecting followers—we&apos;re 
                  building a community of people who add value and receive it in return.
                </p>
              </div>

              <div className="glass-panel p-6">
                <Compass className="w-8 h-8 text-[#8b0000] mb-4" />
                <h3 className="font-bold text-lg mb-2">Self-Governed</h3>
                <p className="text-sm text-muted-foreground">
                  The Union operates on trust and mutual respect. Our members don&apos;t need strict rules 
                  because they understand the unwritten code of our culture.
                </p>
              </div>

              <div className="glass-panel p-6">
                <Shield className="w-8 h-8 text-[#8b0000] mb-4" />
                <h3 className="font-bold text-lg mb-2">Protected Space</h3>
                <p className="text-sm text-muted-foreground">
                  This is a safe harbor in the chaotic sea of the internet. Drama, toxicity, and 
                  bad faith actors have no place within our signal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Signal Timeline</h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-[#8b0000]/20" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative flex flex-col lg:flex-row gap-6 lg:gap-12 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-[#8b0000] -translate-x-1/2 mt-2 z-10 animate-signal-pulse" />

                    {/* Content */}
                    <div className={`lg:w-1/2 pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                      <div className={`glass-panel p-6 ${index % 2 === 0 ? 'lg:ml-auto' : ''} max-w-lg`}>
                        <div className="text-[#8b0000] font-mono text-sm mb-2">{item.year}</div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Different */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1 h-8 bg-[#8b0000]" />
                <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Why We&apos;re Different</h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Most online communities are transactional. You join, you consume content, you leave. 
                  There&apos;s no investment, no depth, no real connection. F.F.F. UNION operates differently.
                </p>
                <p>
                  Here, membership means something. Your presence is noted. Your contributions are valued. 
                  Your loyalty is remembered. We&apos;ve built a system where giving to the community naturally 
                  returns to you—not through artificial reward systems, but through genuine reciprocity.
                </p>
                <p>
                  We&apos;re not for everyone, and that&apos;s by design. The Union is selective not out of 
                  elitism, but out of commitment to maintaining the culture we&apos;ve built. Every new member 
                  should enhance the signal, not dilute it.
                </p>
                <p className="text-foreground font-semibold">
                  If you&apos;ve read this far, you might be the kind of person who belongs here.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
