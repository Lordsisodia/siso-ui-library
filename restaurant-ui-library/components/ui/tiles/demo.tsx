"use client"

import { Tiles } from "./tiles"

export function TilesDemo() {
  return (
    <div className="h-[500px] w-full">
      <Tiles rows={50} cols={8} tileSize="md" />
    </div>
  )
}
