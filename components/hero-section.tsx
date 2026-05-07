"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export function HeroSection() {
  const rotatingTexts = ["Giftcard", "Crypto"]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size[4rem_4rem] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_70%)] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 lg:py-44">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance mt-8">
            Cash out <span className="text-primary">&nbsp;{rotatingTexts[currentIndex]}&nbsp;</span>
            <br />
            to naira on WhatsApp
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
            Transparent rates. Fast settlements to your bank account.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium gap-2"
              asChild
            >
              <a
                href="https://wa.me/2349136566608?text=Hi%2C%20I%20want%20to%20trade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                Start on WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-20 pt-10 border-t border-border/50 w-full max-w-2xl">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                20K
              </span>
              <span className="text-xs md:text-sm text-muted-foreground mt-1">
                Verified Users
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                20+
              </span>
              <span className="text-xs md:text-sm text-muted-foreground mt-1">
                Assets Support
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                10M+
              </span>
              <span className="text-xs md:text-sm text-muted-foreground mt-1">
                Trades Executed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
