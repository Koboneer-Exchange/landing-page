"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

const FOOTER_LINKS = {
  Product: ["Features", "Rates", "How It Works", "Security"],
  Company: ["About", "FAQ", "Contact"],
  Legal: ["Terms of Service", "Privacy Policy", "AML Policy"],
}

export function SiteFooter() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={mounted && resolvedTheme === "dark" ? "/logo-green.png" : "/logo-black.png"}
                alt="Koboneer Logo"
                width={120}
                height={32}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The trusted bridge between Africa&apos;s digital economy and local financial systems.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Koboneer. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for Africa&apos;s digital economy.
          </p>
        </div>
      </div>
    </footer>
  )
}
