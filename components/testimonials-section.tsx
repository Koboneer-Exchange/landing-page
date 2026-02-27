import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Adebayo O.",
    role: "Crypto Trader",
    location: "Lagos, Nigeria",
    text: "Koboneer is my go-to for converting USDT. The rates are always competitive and I get my naira in less than 10 minutes. No other platform comes close.",
    rating: 5,
  },
  {
    name: "Chioma N.",
    role: "Freelancer",
    location: "Abuja, Nigeria",
    text: "I receive payments in gift cards from my international clients. Koboneer makes it so easy to convert them to naira right from WhatsApp. Game changer.",
    rating: 5,
  },
  {
    name: "Emeka A.",
    role: "E-commerce Seller",
    location: "Port Harcourt, Nigeria",
    text: "I was skeptical at first, but after my first transaction I was hooked. Transparent rates, fast payouts, and the WhatsApp experience is incredibly smooth.",
    rating: 5,
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Trusted by thousands across Africa
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Real users. Real transactions. See why people choose Koboneer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-xl border border-border/50 bg-card p-7 hover:border-primary/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-card-foreground leading-relaxed flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} &middot; {testimonial.location}
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
