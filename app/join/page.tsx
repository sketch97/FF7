"use client"

import { VHSBackground } from "@/components/vhs-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BroadcastTicker } from "@/components/broadcast-ticker"
import { CardCarousel } from "@/components/card-carousel"
import { Button } from "@/components/ui/button"
import { 
  Lock, ArrowRight, Check, Shield, Users, 
  Zap, Crown, Radio, MessageSquare, Eye,
  Star, Heart, Award
} from "lucide-react"

const joinSteps = [
  {
    id: 1,
    title: "Join the Discord",
    description: "Click the join button to access our Discord server. This is your entry point to F.F.F. UNION.",
    icon: <MessageSquare className="w-8 h-8" />,
    tag: "STEP 01",
  },
  {
    id: 2,
    title: "Complete Verification",
    description: "Answer a few questions to verify your identity and intentions. We value quality over quantity.",
    icon: <Shield className="w-8 h-8" />,
    tag: "STEP 02",
  },
  {
    id: 3,
    title: "Receive Your Role",
    description: "Once verified, you'll receive your Initiate role and gain access to community channels.",
    icon: <Crown className="w-8 h-8" />,
    tag: "STEP 03",
  },
  {
    id: 4,
    title: "Engage & Grow",
    description: "Participate, contribute, and become part of the Union. Your journey begins here.",
    icon: <Zap className="w-8 h-8" />,
    tag: "STEP 04",
  },
]

const memberBenefits = [
  {
    id: 1,
    title: "Exclusive Access",
    description: "Private channels, member-only content, and conversations that matter.",
    icon: <Lock className="w-8 h-8" />,
    tag: "BENEFIT",
  },
  {
    id: 2,
    title: "Real Community",
    description: "Connect with like-minded individuals who value loyalty and genuine interaction.",
    icon: <Users className="w-8 h-8" />,
    tag: "BENEFIT",
  },
  {
    id: 3,
    title: "Events & Activities",
    description: "Weekly gatherings, game nights, watch parties, and community events.",
    icon: <Star className="w-8 h-8" />,
    tag: "BENEFIT",
  },
  {
    id: 4,
    title: "Growth Opportunities",
    description: "Mentorship, leadership roles, and paths to becoming a core member.",
    icon: <Award className="w-8 h-8" />,
    tag: "BENEFIT",
  },
  {
    id: 5,
    title: "Protected Space",
    description: "A moderated, drama-free environment where respect is the baseline.",
    icon: <Shield className="w-8 h-8" />,
    tag: "BENEFIT",
  },
  {
    id: 6,
    title: "Your Voice Matters",
    description: "Participate in decisions, share your ideas, and shape the future of the Union.",
    icon: <Heart className="w-8 h-8" />,
    tag: "BENEFIT",
  },
]

const requirements = [
  "Respect for all members and the Union culture",
  "Active participation in community discussions",
  "Commitment to the values of loyalty and identity",
  "Willingness to complete the verification process",
  "No tolerance for drama, toxicity, or bad faith behavior",
]

export default function JoinPage() {
  return (
    <div className="min-h-screen relative">
      <VHSBackground />
      <Navigation />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel mb-6">
                  <Lock className="w-4 h-4 text-[#8b0000]" />
                  <span className="text-xs font-mono tracking-wider text-muted-foreground">ACCESS PORTAL</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 vhs-text-glow">
                  Join the Signal
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  The channel is open. The frequency is clear. Your place in F.F.F. UNION awaits. 
                  Take the first step toward becoming part of something meaningful.
                </p>

                <Button 
                  asChild
                  size="lg"
                  className="bg-[#8b0000] hover:bg-[#a00000] text-white border-0 font-semibold tracking-wide text-lg px-8 animate-pulse-glow"
                >
                  <a href="https://discord.gg/fBUJbNQSqJ" target="_blank" rel="noopener noreferrer">
                    Enter the Union
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>

              <div className="glass-panel p-8 lg:p-12">
                <div className="text-[10px] font-mono text-[#8b0000] mb-4 tracking-widest">TRANSMISSION READY</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/20">
                    <Radio className="w-6 h-6 text-[#8b0000] animate-signal-pulse" />
                    <div>
                      <div className="font-semibold">Signal Status</div>
                      <div className="text-sm text-[#8b0000]">ACTIVE - ACCEPTING NEW MEMBERS</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/20">
                    <Users className="w-6 h-6 text-[#8b0000]" />
                    <div>
                      <div className="font-semibold">Current Members</div>
                      <div className="text-sm text-muted-foreground">2,647 verified</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/20">
                    <Eye className="w-6 h-6 text-[#8b0000]" />
                    <div>
                      <div className="font-semibold">Verification</div>
                      <div className="text-sm text-muted-foreground">Required for full access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BroadcastTicker />

        {/* Join Steps Carousel */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CardCarousel cards={joinSteps} title="How to Join" />
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1 h-8 bg-[#8b0000]" />
                  <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Requirements</h2>
                </div>

                <p className="text-muted-foreground mb-8">
                  F.F.F. UNION is selective by design. We&apos;re not looking for numbers—we&apos;re looking 
                  for the right people. Here&apos;s what we expect from every member:
                </p>

                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#8b0000] mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-[10px] font-mono text-[#8b0000] mb-4 tracking-widest">IMPORTANT NOTICE</div>
                <h3 className="text-xl font-bold mb-4">Not for Everyone</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that F.F.F. UNION isn&apos;t for everyone, and that&apos;s intentional. 
                  If you&apos;re looking for a casual server to lurk in, this isn&apos;t the place. 
                  But if you&apos;re looking for a real community where your presence matters, 
                  where loyalty is valued, and where genuine connections are made—you might 
                  have found your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Carousel */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CardCarousel cards={memberBenefits} title="Member Benefits" />
          </div>
        </section>

        {/* Verification Info */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1 h-8 bg-[#8b0000]" />
                <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">The Verification Process</h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  When you join our Discord, you&apos;ll start in a verification channel. This process 
                  is simple but essential—it helps us maintain the quality of our community.
                </p>
                <p>
                  You&apos;ll be asked a few questions about yourself, why you want to join, and what 
                  you&apos;re looking for in a community. There are no wrong answers—we&apos;re just looking 
                  for genuine people who align with our values.
                </p>
                <p>
                  Once verified, you&apos;ll receive your Initiate role and gain access to community 
                  channels. From there, engagement and contribution will unlock more opportunities 
                  within the Union.
                </p>
                <div className="p-4 bg-[#8b0000]/10 border border-[#8b0000]/20">
                  <div className="flex items-center gap-2 text-[#8b0000] font-semibold">
                    <Radio className="w-4 h-4 animate-signal-pulse" />
                    Average verification time: 1-2 minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-[#8b0000]/10 border-y border-[#8b0000]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 vhs-text-glow">
              Ready to Tune In?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              The signal is broadcasting. The community is waiting. Your journey with F.F.F. UNION 
              starts with a single click.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-[#8b0000] hover:bg-[#a00000] text-white border-0 font-semibold tracking-wide text-lg px-12 animate-pulse-glow"
            >
              <a href="https://discord.gg/fBUJbNQSqJ" target="_blank" rel="noopener noreferrer">
                <Zap className="mr-2 w-5 h-5" />
                Join the Union Now
              </a>
            </Button>
            <p className="mt-6 text-sm font-mono text-muted-foreground">
              CHANNEL OPEN | VERIFICATION REQUIRED | SIGNAL LIVE
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
