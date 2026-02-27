import {
  Gift,
  Music,
  ShoppingBag,
  Gamepad2,
  CreditCard,
  Tv,
  ShoppingCart,
  Headphones,
  Shirt,
  Fuel,
  Coffee,
  Utensils,
  BookOpen,
  Home,
  Plane,
  Dumbbell,
  Baby,
  Footprints,
  Dog,
  Sparkles,
} from "lucide-react"

const GIFT_CARDS = [
  { name: "Amazon", icon: ShoppingCart },
  { name: "iTunes", icon: Music },
  { name: "Steam", icon: Gamepad2 },
  { name: "Walmart", icon: ShoppingBag },
  { name: "Google Play", icon: Tv },
  { name: "eBay", icon: CreditCard },
  { name: "Nike", icon: Footprints },
  { name: "Sephora", icon: Sparkles },
  { name: "Target", icon: Gift },
  { name: "Nordstrom", icon: Shirt },
  { name: "Best Buy", icon: Headphones },
  { name: "Starbucks", icon: Coffee },
  { name: "Uber", icon: Fuel },
  { name: "DoorDash", icon: Utensils },
  { name: "Barnes & Noble", icon: BookOpen },
  { name: "Airbnb", icon: Home },
  { name: "Delta", icon: Plane },
  { name: "Macy's", icon: ShoppingBag },
  { name: "Gymshark", icon: Dumbbell },
  { name: "Carters", icon: Baby },
]

export function GiftCardsSection() {
  return (
    <section id="gift-cards" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Gift Cards
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            20+ gift cards accepted
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We accept a wide range of gift cards from top global brands.
            Convert them to local currency instantly.
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {GIFT_CARDS.map((card) => (
            <div
              key={card.name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card p-4 md:p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <card.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <span className="text-xs md:text-sm font-medium text-card-foreground text-center leading-tight">
                {card.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Don&apos;t see your card? Message us on WhatsApp -- we likely support it.
        </p>
      </div>
    </section>
  )
}
