"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import { WavePath } from "./wave-path"

export function WavePathDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
          "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
          "blur-[30px]",
        )}
      />

      <div className="flex w-[70vw] flex-col items-end">
        <WavePath className="mb-10" />
        <div className="flex w-full flex-col items-end">
          <div className="flex justify-end">
            <p className="mt-2 text-sm text-muted-foreground">World of Art</p>
            <p className="ml-8 w-3/4 text-2xl text-foreground/80 md:text-4xl">
              Experience the emotions of artists through their works. Let the beauty of art inspire you and fill your soul.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
