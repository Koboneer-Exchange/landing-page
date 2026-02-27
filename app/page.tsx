import { MarqueeTicker } from "@/components/marquee-ticker"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { GiftCardsSection } from "@/components/gift-cards-section"
import { RatesSection } from "@/components/rates-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarqueeTicker />
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <GiftCardsSection />
        <RatesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
