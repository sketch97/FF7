"use client"

import { VHSBackground } from "@/components/vhs-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BroadcastTicker } from "@/components/broadcast-ticker"
import { Button } from "@/components/ui/button"
import { 
  Link as LinkIcon, ExternalLink, MessageSquare, 
  Twitter, Youtube, Send, Mail, Radio,
  Globe, Shield, HelpCircle, ChevronRight
} from "lucide-react"

const socialLinks = [
  {
    name: "Discord",
    description: "Our primary hub. Join the community.",
    icon: <MessageSquare className="w-6 h-6" />,
    href: "https://discord.gg/fBUJbNQSqJ",
    primary: true,
  },
  {
    name: "Twitter / X",
    description: "Official announcements and updates.",
    icon: <Twitter className="w-6 h-6" />,
    href: "https://x.com/FFFCOUSA",
    primary: false,
  },
  {
    name: "YouTube",
    description: "Broadcasts, highlights, and content.",
    icon: <Youtube className="w-6 h-6" />,
    href: "https://www.youtube.com/@FFFCOUSA",
    primary: false,
  },
  {
    name: "Telegram",
    description: "Direct updates and community messages.",
    icon: <Send className="w-6 h-6" />,
    href: "https://t.me/fffunion",
    primary: false,
  },
]

const faqs = [
  {
    question: "How do I join F.F.F. UNION?",
    answer: "Click the Discord link, complete our verification process, and you'll be granted access to the community. Verification typically takes 1-2 minutes.",
  },
  {
    question: "Is there a cost to join?",
    answer: "No, F.F.F. UNION is completely free to join. We believe community shouldn't have a price tag.",
  },
  {
    question: "What makes this community different?",
    answer: "We prioritize quality over quantity. Our selective verification process ensures every member adds value to the community.",
  },
  {
    question: "Can I invite friends?",
    answer: "Yes, but all members must go through our verification process. We trust our members to invite people who align with our values.",
  },
  {
    question: "What are the rules?",
    answer: "Respect, loyalty, and genuine engagement are our core principles. Full community guidelines are available in our Discord.",
  },
  {
    question: "How can I become a Core Member?",
    answer: "Active participation, meaningful contributions, and demonstrating alignment with our values over time. There's no shortcut—it's earned.",
  },
]

export default function ContactPage() {
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
                <LinkIcon className="w-4 h-4 text-[#8b0000]" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">SIGNAL DIRECTORY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 vhs-text-glow">
                Connect With Us
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                All the channels, links, and information you need to connect with F.F.F. UNION. 
                Find us across the digital landscape.
              </p>
            </div>
          </div>
        </section>

        <BroadcastTicker />

        {/* Social Links */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Official Channels</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-panel p-6 group hover:border-[#8b0000]/40 transition-all duration-300 ${
                    link.primary ? 'sm:col-span-2 bg-[#8b0000]/5' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${link.primary ? 'bg-[#8b0000]' : 'bg-[#8b0000]/20'} text-white group-hover:scale-110 transition-transform`}>
                        {link.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-[#8b0000] transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                        {link.primary && (
                          <div className="mt-3 flex items-center gap-2 text-sm text-[#8b0000] font-semibold">
                            <Radio className="w-4 h-4 animate-signal-pulse" />
                            PRIMARY CHANNEL
                          </div>
                        )}
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Quick Links</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="/about" className="glass-panel p-4 flex items-center justify-between group hover:border-[#8b0000]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#8b0000]" />
                  <span className="font-medium">About F.F.F. UNION</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
              </a>
              <a href="/community" className="glass-panel p-4 flex items-center justify-between group hover:border-[#8b0000]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-[#8b0000]" />
                  <span className="font-medium">Community Hub</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
              </a>
              <a href="/media" className="glass-panel p-4 flex items-center justify-between group hover:border-[#8b0000]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Radio className="w-5 h-5 text-[#8b0000]" />
                  <span className="font-medium">Media Archive</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
              </a>
              <a href="/join" className="glass-panel p-4 flex items-center justify-between group hover:border-[#8b0000]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#8b0000]" />
                  <span className="font-medium">Join Process</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
              </a>
              <a href="mailto:fffunionusa@gmail.com" className="glass-panel p-4 flex items-center justify-between group hover:border-[#8b0000]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#8b0000]" />
                  <span className="font-medium">Email Contact</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
              </a>
              <a href="#faq" className="glass-panel p-4 flex items-center justify-between group hover:border-[#8b0000]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#8b0000]" />
                  <span className="font-medium">FAQ</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#8b0000] transition-colors" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-[#8b0000]" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-panel p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                    <span className="text-[#8b0000] font-mono text-sm">Q{String(index + 1).padStart(2, '0')}</span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-10">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel p-8 lg:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8b0000]/10 border border-[#8b0000]/20 mb-6">
                <Mail className="w-4 h-4 text-[#8b0000]" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">DIRECT CONTACT</span>
              </div>

              <h3 className="text-2xl font-bold mb-4">Need to Reach Us Directly?</h3>
              
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                For business inquiries, partnerships, or matters that can&apos;t be handled through Discord, 
                you can reach our team via email.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#8b0000]/50 text-foreground hover:bg-[#8b0000]/10 hover:border-[#8b0000] font-semibold tracking-wide"
                >
                  <a href="mailto:fffunionusa@gmail.com">
                    <Mail className="mr-2 w-5 h-5" />
                    fffunionusa@gmail.com
                  </a>
                </Button>
              </div>

              <p className="mt-6 text-xs font-mono text-muted-foreground">
                RESPONSE TIME: 24-72 HOURS | BUSINESS INQUIRIES ONLY
              </p>
            </div>
          </div>
        </section>

        {/* Signal Status */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-6">
                <Radio className="w-5 h-5 text-[#8b0000] animate-signal-pulse" />
                <span className="text-sm font-mono tracking-wider">NETWORK STATUS</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10 text-center">
                  <div className="text-[10px] font-mono text-muted-foreground mb-1">DISCORD</div>
                  <div className="text-[#8b0000] font-bold">ONLINE</div>
                </div>
                <div className="p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10 text-center">
                  <div className="text-[10px] font-mono text-muted-foreground mb-1">WEBSITE</div>
                  <div className="text-[#8b0000] font-bold">LIVE</div>
                </div>
                <div className="p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10 text-center">
                  <div className="text-[10px] font-mono text-muted-foreground mb-1">VERIFICATION</div>
                  <div className="text-[#8b0000] font-bold">ACTIVE</div>
                </div>
                <div className="p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10 text-center">
                  <div className="text-[10px] font-mono text-muted-foreground mb-1">BROADCAST</div>
                  <div className="text-[#8b0000] font-bold">TRANSMITTING</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
