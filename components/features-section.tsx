import {
  Shield,
  Zap,
  Smartphone,
  Repeat,
  Eye,
  Users,
} from "lucide-react"

const FEATURES = [
  {
    icon: Smartphone,
    title: "WhatsApp-First",
    description:
      "No app downloads. No complex onboarding. Transact on the platform you already use daily.",
  },
  {
    icon: Repeat,
    title: "Multi-Asset Support",
    description:
      "Convert crypto, gift cards, and e-currencies all in one place. USDT, BTC, iTunes, PayPal, and more.",
  },
  {
    icon: Zap,
    title: "Fast Settlements",
    description:
      "Crypto in under 10 minutes. Gift cards in under 30. Receive naira directly to your bank account.",
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description:
      "See exactly what you will receive before you confirm. No hidden fees, no surprise deductions.",
  },
  {
    icon: Shield,
    title: "PIN-Secured",
    description:
      "Every transaction requires your personal PIN. Hashed storage, attempt limits, and full audit logging.",
  },
  {
    icon: Users,
    title: "Built for Africa",
    description:
      "Designed for the realities of the African digital economy. Multi-country expansion on the roadmap.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Features
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Everything you need to cash out
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            One platform. Multiple asset types. The fastest path from digital value to local currency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/50 bg-card p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
