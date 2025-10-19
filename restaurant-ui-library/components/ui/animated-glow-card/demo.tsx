"use client"

import { Card, CardCanvas } from "./animated-glow-card"
import { XCard } from "@/components/ui/x-gradient-card"

const XCardDummyData = {
  authorName: "EaseMise",
  authorHandle: "easemize",
  authorImage: "https://pbs.twimg.com/profile_images/1854916060807675904/KtBJsyWr_400x400.jpg",
  content: [
    "The outer container with border and dots is the actual card",
    "Wrap it around anything to have a cool card like this",
  ],
  isVerified: true,
  timestamp: "Today",
  reply: {
    authorName: "GoodGuy",
    authorHandle: "gdguy",
    authorImage: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
    content: "It’s easy to use and great to customize",
    isVerified: true,
    timestamp: "10 minutes ago",
  },
}

const DemoOne = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black px-4">
      <CardCanvas>
        <Card className="w-full max-w-xl p-6">
          <div className="dark">
            <XCard {...XCardDummyData} />
          </div>
        </Card>
      </CardCanvas>
    </div>
  )
}

export { DemoOne }
