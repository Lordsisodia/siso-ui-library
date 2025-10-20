"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

export interface ContainerTextFlipProps {
  words?: string[]
  interval?: number
  className?: string
  textClassName?: string
  animationDuration?: number
  variant?: "primary" | "gradient" | "neon" | "glass"
}

const variantStyles: Record<NonNullable<ContainerTextFlipProps["variant"]>, { container: string; glow: string }> = {
  primary: {
    container: "bg-blue-600 border border-blue-400/50 text-white shadow-2xl shadow-blue-500/30",
    glow: "before:bg-blue-500/20",
  },
  gradient: {
    container:
      "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white border border-white/20 shadow-2xl shadow-purple-500/40",
    glow: "before:bg-gradient-to-r before:from-purple-600/30 before:via-pink-600/30 before:to-orange-500/30",
  },
  neon: {
    container: "bg-gray-900 border border-cyan-400/60 text-cyan-400 shadow-2xl shadow-cyan-500/40",
    glow: "before:bg-cyan-400/30",
  },
  glass: {
    container: "bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-black/15",
    glow: "before:bg-white/10",
  },
}

export function ContainerTextFlip({
  words = ["revolutionary", "extraordinary", "phenomenal", "incredible"],
  interval = 3500,
  className,
  textClassName,
  animationDuration = 800,
  variant = "gradient",
}: ContainerTextFlipProps) {
  const id = React.useId()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIsAnimating(true)
      window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, animationDuration / 2)
    }, interval)

    return () => window.clearInterval(intervalId)
  }, [words.length, interval, animationDuration])

  const durationSeconds = animationDuration / 1000
  const classes = variantStyles[variant]

  return (
    <div className={cn("relative inline-flex flex-col items-center justify-center", className)}>
      <motion.div
        animate={{
          scale: isAnimating ? [1, 1.05, 1] : 1,
          opacity: isAnimating ? [0.75, 1, 0.75] : 0.85,
        }}
        transition={{ duration: durationSeconds, ease: "easeInOut" }}
        className={cn(
          "relative inline-flex items-center justify-center rounded-2xl px-8 py-4",
          "before:absolute before:inset-0 before:-z-10 before:blur-3xl before:transition-opacity",
          classes.glow,
          classes.container,
        )}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`${id}-${words[currentIndex]}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: durationSeconds / 1.6, ease: "easeInOut" }}
            className={cn("text-2xl font-semibold tracking-wide md:text-3xl", textClassName)}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ContainerTextFlip
