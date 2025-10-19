"use client"

import InteractiveBentoGallery from "./interactive-bento-gallery"

const MEDIA_ITEMS = [
  {
    id: 1,
    type: "image" as const,
    title: "Anurag Mishra",
    desc: "Driven, innovative, visionary",
    url: "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcbP3rYTiXwH7Y106CepJOsoAgQjyFi3MUfDkh",
    span: "sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-3",
  },
  {
    id: 2,
    type: "video" as const,
    title: "Dog Puppy",
    desc: "Adorable loyal companion.",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
    span: "col-span-1 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    id: 3,
    type: "image" as const,
    title: "Forest Path",
    desc: "Mystical forest trail",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    span: "sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-3",
  },
  {
    id: 4,
    type: "image" as const,
    title: "Falling Leaves",
    desc: "Autumn scenery",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    span: "sm:col-span-1 sm:row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    id: 5,
    type: "video" as const,
    title: "Bird Parrot",
    desc: "Vibrant feathered charm",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-3",
  },
  {
    id: 6,
    type: "image" as const,
    title: "Beach Paradise",
    desc: "Sunny tropical coastline",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    span: "sm:col-span-1 sm:row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    id: 7,
    type: "video" as const,
    title: "Shiva Temple",
    desc: "Peaceful Shiva sanctuary.",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-3",
  },
]

export function BentoGridGalleryDemo() {
  return (
    <div className="min-h-screen overflow-y-auto bg-muted/30 py-10">
      <InteractiveBentoGallery
        mediaItems={MEDIA_ITEMS}
        title="Gallery Shots Collection"
        description="Drag and explore our curated collection of shots"
      />
    </div>
  )
}

export default BentoGridGalleryDemo
