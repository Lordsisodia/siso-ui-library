"use client"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FeatureItem {
  id: number
  title: string
  image: string
  description: string
}

export interface FeatureSectionProps {
  features?: FeatureItem[]
}

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Ready-to-Use UI Blocks",
    image: "/images/block/placeholder-1.svg",
    description:
      "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
  },
  {
    id: 2,
    title: "Tailwind CSS & TypeScript",
    image: "/images/block/placeholder-2.svg",
    description:
      "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
  },
  {
    id: 3,
    title: "Dark Mode & Customization",
    image: "/images/block/placeholder-3.svg",
    description:
      "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration. The shadcn/ui theming system makes it easy to maintain consistency across your site.",
  },
]

export function AccordionFeatureSection({ features = DEFAULT_FEATURES }: FeatureSectionProps) {
  const [activeFeature, setActiveFeature] = React.useState(features[0] ?? DEFAULT_FEATURES[0])

  const handleValueChange = (value: string) => {
    const match = features.find((feature) => `feature-${feature.id}` === value)
    if (match) {
      setActiveFeature(match)
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="flex items-center justify-center rounded-3xl bg-muted/40 p-6">
          <div className="space-y-6 text-center">
            <div className="relative mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-2xl bg-background shadow">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight">{activeFeature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{activeFeature.description}</p>
            </div>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue={`feature-${activeFeature.id}`}
          onValueChange={handleValueChange}
          className="space-y-3"
        >
          {features.map((feature) => (
            <AccordionItem key={feature.id} value={`feature-${feature.id}`} className="rounded-2xl border bg-card px-4">
              <AccordionTrigger className="text-left text-lg font-semibold">
                {feature.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {feature.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default AccordionFeatureSection
