"use client"

import { useEffect, useState } from "react"

interface MarketItem {
  symbol: string
  name: string
  price: string
}

const MARKET_DATA: MarketItem[] = [
  { symbol: "BTC", name: "Bitcoin", price: "$97,245.30"},
  { symbol: "ETH", name: "Ethereum", price: "$2,734.18"},
  { symbol: "USDT", name: "Tether", price: "$1.00"},
  { symbol: "USDC", name: "USD Coin", price: "$1.00"},
  { symbol: "BNB", name: "BNB", price: "$654.92"},
  { symbol: "SOL", name: "Solana", price: "$192.67"},
  { symbol: "XRP", name: "Ripple", price: "$2.58"},
  { symbol: "ADA", name: "Cardano", price: "$0.78"},
  { symbol: "NGN/USD", name: "Naira", price: "1,545.00"},
  { symbol: "AVAX", name: "Avalanche", price: "$38.15"},
]

export function MarqueeTicker() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="bg-marquee py-2.5 overflow-hidden">
        <div className="h-5" />
      </div>
    )
  }

  // Duplicate content multiple times to ensure seamless loop
  const items = [...MARKET_DATA, ...MARKET_DATA]

  return (
    <div className="bg-marquee py-2.5 overflow-hidden" role="marquee" aria-label="Live market prices">
      <div className="flex">
        <div className="flex animate-marquee">
          {items.map((item, index) => (
            <div
              key={`${item.symbol}-${index}`}
              className="flex items-center gap-2 px-6 shrink-0"
            >
              <span className="text-xs font-mono font-semibold text-neutral-100">
                {item.symbol}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {item.price}
              </span>

              <span className="text-neutral-600 ml-4">|</span>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          {items.map((item, index) => (
            <div
              key={`${item.symbol}-${index}-duplicate`}
              className="flex items-center gap-2 px-6 shrink-0"
            >
              <span className="text-xs font-mono font-semibold text-neutral-100">
                {item.symbol}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {item.price}
              </span>

              <span className="text-neutral-600 ml-4">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
