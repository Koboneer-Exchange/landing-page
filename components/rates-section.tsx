import { TrendingUp, TrendingDown } from "lucide-react"

const RATES = [
  {
    asset: "USDT",
    label: "Tether",
    rate: "1,540",
    type: "Crypto",
  },
  {
    asset: "USDC",
    label: "USD Coin",
    rate: "1,538",
    type: "Crypto",
  },
  {
    asset: "BTC",
    label: "Bitcoin",
    rate: "1,535",
    type: "Crypto",
  },
  {
    asset: "iTunes",
    label: "Gift Card",
    rate: "1,200",
    type: "Gift Card",
  },
  {
    asset: "Amazon",
    label: "Gift Card",
    rate: "1,180",
    type: "Gift Card",
  },
  {
    asset: "PayPal",
    label: "E-Currency",
    rate: "1,450",
    type: "E-Currency",
  },
]

export function RatesSection() {
  return (
    <section id="rates" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Live Rates
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Today&apos;s exchange rates
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Transparent pricing updated in real-time. What you see is what you get.
          </p>
        </div>

        <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-3 px-6 py-4 border-b border-border/50 bg-secondary/30">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Asset
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Type
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground text-right">
              Rate (NGN/$)
            </span>
          </div>

          {/* Table rows */}
          {RATES.map((rate, index) => (
            <div
              key={rate.asset}
              className={`grid grid-cols-3 px-6 py-4 items-center hover:bg-secondary/20 transition-colors ${
                index < RATES.length - 1 ? "border-b border-border/30" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-card-foreground">
                  {rate.asset}
                </span>
                <span className="text-xs text-muted-foreground">{rate.label}</span>
              </div>
              <span className="text-xs text-muted-foreground font-medium px-2 py-1 rounded-md bg-secondary/50 w-fit">
                {rate.type}
              </span>
              <span className="text-sm font-mono font-semibold text-card-foreground text-right">
                {rate.rate}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Rates are indicative and subject to change. Final rate confirmed at transaction time.
        </p>
      </div>
    </section>
  )
}
