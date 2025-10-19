"use client";

import { DottedSurface } from "./dotted-surface";
import { cn } from "@/lib/utils";

export default function DottedSurfaceDemo() {
  return (
    <div className="relative h-[500px] w-full">
      <DottedSurface className="size-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute -top-10 left-1/2 h-full w-full -translate-x-1/2 rounded-full",
              "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
              "blur-[30px]",
            )}
          />
          <h1 className="font-mono text-3xl font-semibold text-foreground">
            Dotted Surface
          </h1>
        </div>
      </DottedSurface>
    </div>
  );
}
