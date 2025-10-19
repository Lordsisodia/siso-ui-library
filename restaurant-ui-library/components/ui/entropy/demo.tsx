"use client"

import { Entropy } from "./entropy"

export function EntropyDemo() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black p-8 text-white">
      <div className="flex flex-col items-center gap-6">
        <Entropy className="rounded-lg" />
        <div className="space-y-4 text-center font-mono text-sm leading-relaxed text-gray-400">
          <p className="italic">
            &ldquo;Order and chaos dance &mdash; digital poetry in motion.&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}
