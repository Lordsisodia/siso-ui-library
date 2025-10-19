"use client"

import { Bookmark, Home, PlusCircle, Settings, User } from "lucide-react"

import { LimelightNav, type NavItem } from "./limelight-nav"

const CUSTOM_ITEMS: NavItem[] = [
  { id: "home", icon: <Home />, label: "Home", onClick: () => console.log("Home") },
  { id: "bookmark", icon: <Bookmark />, label: "Bookmarks", onClick: () => console.log("Bookmarks") },
  { id: "add", icon: <PlusCircle />, label: "Add", onClick: () => console.log("Add") },
  { id: "profile", icon: <User />, label: "Profile", onClick: () => console.log("Profile") },
  { id: "settings", icon: <Settings />, label: "Settings", onClick: () => console.log("Settings") },
]

export function LimelightNavDefaultDemo() {
  return <LimelightNav />
}

export function LimelightNavCustomizedDemo() {
  return (
    <LimelightNav
      className="rounded-xl border-accent/50 bg-secondary/60 backdrop-blur dark:bg-card/50"
      items={CUSTOM_ITEMS}
    />
  )
}

export default LimelightNavCustomizedDemo
