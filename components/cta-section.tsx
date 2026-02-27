import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl border border-primary/20 bg-card overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--primary)_0%,transparent_60%)] opacity-5" />

          <div className="relative flex flex-col items-center text-center px-8 py-16 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-card-foreground text-balance">
              Ready to cash out?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Join thousands of digital earners across Africa who trust Koboneer
              for fast, secure, and transparent conversions.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base font-medium gap-2"
              asChild
            >
              <a
                href="https://wa.me/2349136566608?text=Hi%2C%20I%20want%20to%20trade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                Chat with Koboneer
              </a>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              Free to start. No app download required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
