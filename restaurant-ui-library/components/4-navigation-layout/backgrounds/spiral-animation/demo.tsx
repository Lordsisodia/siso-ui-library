"use client"

import { useEffect, useState } from "react"

import { SpiralAnimation } from "./spiral-animation"

export function SpiralDemo() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 h-full w-full overflow-hidden bg-black">
      <SpiralAnimation />
      <div
        className={`pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${visible ? "opacity-100" : "translate-y-4 opacity-0"}`}
      >
        <button
          onClick={() => window.open("https://xubh.top/", "_blank")}
          className="animate-pulse text-2xl font-extralight uppercase tracking-[0.2em] text-white transition-all hover:tracking-[0.3em]"
        >
          Enter
        </button>
      </div>
    </div>
  )
}
