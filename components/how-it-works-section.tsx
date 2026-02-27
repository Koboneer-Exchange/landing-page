import { MessageCircle, ArrowDownToLine, Banknote } from "lucide-react"

const STEPS = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Open WhatsApp",
    description:
      "Send a message to Koboneer on WhatsApp. Complete onboarding in under 2 minutes with just a PIN setup.",
  },
  {
    step: "02",
    icon: ArrowDownToLine,
    title: "Deposit Your Asset",
    description:
      "Upload gift card details, deposit crypto to a generated wallet, or send e-currency to the provided account.",
  },
  {
    step: "03",
    icon: Banknote,
    title: "Receive Local Cash",
    description:
      "Confirm the transparent rate, enter your PIN, and receive naira directly to your bank account.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Three steps to cash out
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            No forms. No KYC delays. No app downloads. Just WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <div key={step.step} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border/50" />
              )}

              <div className="relative mb-6">
                <div className="h-24 w-24 rounded-2xl bg-card border border-border/50 flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
