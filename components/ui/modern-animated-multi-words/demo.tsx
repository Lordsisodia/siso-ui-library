"use client"

import { ContainerTextFlip } from "./modern-animated-multi-words"

const WORDS = ["revolutionary", "extraordinary", "phenomenal", "incredible"]

export function ModernAnimatedMultiWordsDemo() {
  return (
    <div className="flex min-h-[260px] items-center justify-center bg-muted/20 p-6">
      <ContainerTextFlip words={WORDS} variant="gradient" />
    </div>
  )
}

export default ModernAnimatedMultiWordsDemo
