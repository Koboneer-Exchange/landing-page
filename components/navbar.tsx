"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTheme } from "next-themes"

const NAV_LINKS = [
  { label: "About", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Rates", href: "#rates" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2" aria-label="Koboneer Home">
          <div className="relative h-8">
            <Image
              src={mounted && resolvedTheme === "dark" ? "/logo-green.png" : "/logo-black.png"}
              alt="Koboneer Logo"
              width={120}
              height={32}
              className="object-contain"
            />
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a
              href="https://wa.me/2349136566608?text=Hi%2C%20I%20want%20to%20trade"
              target="_blank"
              rel="noopener noreferrer"
            >Get Started</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a
                  href="https://wa.me/2349136566608?text=Hi%2C%20I%20want%20to%20trade"
                  target="_blank"
                  rel="noopener noreferrer"
                >Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
