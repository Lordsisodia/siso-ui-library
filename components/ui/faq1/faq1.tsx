"use client"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

export interface Faq1Props {
  heading?: string
  items?: FaqItem[]
}

const DEFAULT_ITEMS: FaqItem[] = [
  {
    question: "What is shadcn/ui?",
    answer:
      "shadcn/ui is a collection of reusable components built using Radix UI and Tailwind CSS.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply install the components you need and start building your next project with beautiful, accessible components.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, shadcn/ui is completely free and open-source. You can use it in your personal and commercial projects.",
  },
  {
    question: "Can I customize the components?",
    answer:
      "Absolutely! All components are built with customization in mind. You can modify colors, styles, and behavior to match your needs.",
  },
]

export function Faq1({ heading = "Frequently asked questions", items = DEFAULT_ITEMS }: Faq1Props) {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">{heading}</h1>
        {items.map((item, index) => (
          <Accordion key={item.question} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  )
}

export default Faq1
