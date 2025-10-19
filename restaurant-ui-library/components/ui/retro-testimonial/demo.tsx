"use client"

import * as React from "react"

import { Carousel, TestimonialCard, type Testimonial } from "./retro-testimonial"

const testimonialData: Testimonial[] = [
  {
    name: "Sarah Chen",
    designation: "Senior Frontend Developer",
    description:
      "The component library has revolutionized our workflow. The pre-built pieces are beautiful, highly customizable, and have saved us countless hours of development time.",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Michael Rodriguez",
    designation: "Founder, TechStart",
    description:
      "As a startup founder, I needed a quick way to launch a professional product. The documentation is clear and the components ship production ready.",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "David Kim",
    designation: "UI/UX Lead",
    description:
      "Every detail feels intentional. Accessibility, responsiveness, polish—it is all there. This library has become essential to our stack.",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Emily Thompson",
    designation: "Product Designer",
    description:
      "Our design and engineering teams collaborate faster because we are working from the same components. It keeps quality high and iteration fast.",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "James Wilson",
    designation: "Performance Engineer",
    description:
      "Performance is top-notch. We saw measurable improvements in load times immediately after adopting these components.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Sophia Martinez",
    designation: "Full Stack Developer",
    description:
      "Continuous updates and community support give us confidence. It is clear the maintainers care deeply about quality.",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
]

const cards = testimonialData.map((testimonial, index) => (
  <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
))

export function RetroTestimonialDemo() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4">
        <Carousel items={cards} />
      </div>
    </div>
  )
}
