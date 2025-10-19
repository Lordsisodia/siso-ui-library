"use client"

import { TestimonialsColumnsShowcase, type ColumnTestimonial } from "./testimonials-columns-1"

const TESTIMONIALS: ColumnTestimonial[] = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementation was smooth and quick. The customizable interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team guided us through setup and continues to ensure our success.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "Seamless integrations enhanced our operations and improved efficiency across every team.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Robust features paired with responsive support transformed our workflow overnight.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The launch exceeded expectations and streamlined processes for the entire business.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Customers love the experience and our teams enjoy the intuitive tooling.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that truly aligned with our needs and elevated operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Our conversions climbed after migrating to this stack—highly recommended.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
]

export function TestimonialsColumnsDemo() {
  return <TestimonialsColumnsShowcase testimonials={TESTIMONIALS} />
}
