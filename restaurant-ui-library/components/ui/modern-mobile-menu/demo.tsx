"use client"

import { Briefcase, Calendar, Home, Settings, Shield } from "lucide-react"

import { InteractiveMenu, type InteractiveMenuItem } from "./modern-mobile-menu"

const DEMO_ITEMS: InteractiveMenuItem[] = [
  { label: "home", icon: Home },
  { label: "strategy", icon: Briefcase },
  { label: "period", icon: Calendar },
  { label: "security", icon: Shield },
  { label: "settings", icon: Settings },
]

const CUSTOM_ACCENT = "hsl(280 70% 55%)"

export function ModernMobileMenuDefaultDemo() {
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-muted/30 p-6">
      <InteractiveMenu />
    </div>
  )
}

export function ModernMobileMenuCustomizedDemo() {
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-muted/30 p-6">
      <InteractiveMenu items={DEMO_ITEMS} accentColor={CUSTOM_ACCENT} />
    </div>
  )
}

export default ModernMobileMenuCustomizedDemo
