"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    question: "How does Koboneer work?",
    answer:
      "Simply message us on WhatsApp, tell us what you want to convert (crypto or gift cards), and we will give you a live rate. Once you confirm and send your asset, we process the payment directly to your bank account.",
  },
  {
    question: "What assets can I convert?",
    answer:
      "We support major cryptocurrencies (USDT, USDC, BTC, ETH), popular gift cards (Amazon, iTunes, Steam, Google Play, and 20+ others), and e-currencies like PayPal and Skrill.",
  },
  {
    question: "How fast are payouts?",
    answer:
      "Crypto conversions are completed in under 10 minutes. Gift card conversions typically take under 30 minutes, depending on verification. Payouts go directly to your Nigerian bank account.",
  },
  {
    question: "Do I need to download an app?",
    answer:
      "No. Koboneer operates entirely through WhatsApp. There is no app to download, no account to create on a website. Just open WhatsApp and start chatting with us.",
  },
  {
    question: "Is Koboneer safe to use?",
    answer:
      "Absolutely. Every transaction is secured with a personal PIN that is hashed and stored securely. We have attempt limits, full audit logging, and planned two-factor authentication for additional security.",
  },
  {
    question: "What are the fees?",
    answer:
      "We believe in full transparency. The rate you see is the rate you get -- there are no hidden fees, no surprise deductions, and no service charges. Our margin is built into the exchange rate shown upfront.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "We currently serve users in Nigeria with naira (NGN) payouts. Expansion to Ghana (GHS), Kenya (KES), and other African markets is on our roadmap.",
  },
  {
    question: "What if my gift card is not listed?",
    answer:
      "We support over 20 gift card brands and are always adding more. If you do not see your card listed, send us a message on WhatsApp -- there is a good chance we can still process it.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Everything you need to know about using Koboneer.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left gap-4 cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm md:text-base font-medium text-card-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
