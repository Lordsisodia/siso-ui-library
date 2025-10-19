"use client"

import { DicedHeroSection } from "./diced-hero-section"

const sharedSlides = [
  {
    title: "Purple Cauliflower",
    image:
      "https://images.unsplash.com/photo-1620053927547-cf64d4829ff4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Strawberry",
    image:
      "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Feijoa",
    image:
      "https://images.unsplash.com/photo-1541857754-557a44522bec?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Market Bounty",
    image:
      "https://images.unsplash.com/photo-1646340691161-521e588e9964?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export function DicedHeroSectionDemoLTR() {
  return (
    <DicedHeroSection
      topText="Discover"
      mainText="Freshness"
      subMainText="Explore a vibrant harvest of organic, seasonal fruits and vegetables, bursting with flavors. Unveil a paramount selection of naturally delicious and nutritious premium produce sourced directly from local farms!"
      buttonText="Shop Now"
      slides={sharedSlides}
      onMainButtonClick={() => console.log("Main button clicked for LTR")}
      onGridImageHover={(index) => console.log(`Grid image ${index} hovered for LTR`)}
      onGridImageClick={(index) => console.log(`Grid image ${index} clicked for LTR`)}
      topTextStyle={{ color: "var(--diced-hero-section-top-text)", fontSize: "1.125rem" }}
      mainTextStyle={{
        fontSize: "4.5rem",
        gradient:
          "linear-gradient(45deg, var(--diced-hero-section-main-gradient-from), var(--diced-hero-section-main-gradient-to))",
      }}
      subMainTextStyle={{ color: "var(--diced-hero-section-sub-text)" }}
      buttonStyle={{
        backgroundColor: "var(--diced-hero-section-button-bg)",
        color: "var(--diced-hero-section-button-fg)",
        borderRadius: "2rem",
        hoverColor: "var(--diced-hero-section-button-hover-bg)",
        hoverForeground: "var(--diced-hero-section-button-hover-fg)",
      }}
      separatorColor="var(--diced-hero-section-separator)"
      mobileBreakpoint={1000}
      fontFamily="Arial, sans-serif"
    />
  )
}

export function DicedHeroSectionDemoRTL() {
  return (
    <DicedHeroSection
      topText="גלה"
      mainText="טריות"
      subMainText="חקור יבול עשיר של פירות וירקות אורגניים עונתיים, מלאי טעמים. גלה מבחר מעולה של תוצרת איכותית, טעימה וטבעית, מזינה ומגיעה ישירות מחוות מקומיות!"
      buttonText="קנה עכשיו"
      slides={sharedSlides}
      onMainButtonClick={() => console.log("Main button clicked for RTL")}
      onGridImageHover={(index) => console.log(`Grid image ${index} hovered for RTL`)}
      onGridImageClick={(index) => console.log(`Grid image ${index} clicked for RTL`)}
      topTextStyle={{ color: "var(--diced-hero-section-top-text)", fontSize: "1.125rem" }}
      mainTextStyle={{
        fontSize: "5rem",
        gradient:
          "linear-gradient(45deg, var(--diced-hero-section-main-gradient-from), var(--diced-hero-section-main-gradient-to))",
      }}
      subMainTextStyle={{ color: "var(--diced-hero-section-sub-text)" }}
      buttonStyle={{
        backgroundColor: "var(--diced-hero-section-button-bg)",
        color: "var(--diced-hero-section-button-fg)",
        borderRadius: "7px",
        hoverColor: "var(--diced-hero-section-button-hover-bg)",
        hoverForeground: "var(--diced-hero-section-button-hover-fg)",
      }}
      separatorColor="var(--diced-hero-section-separator)"
      maxContentWidth="1190px"
      mobileBreakpoint={910}
      fontFamily="Arial, sans-serif"
      isRTL
    />
  )
}
