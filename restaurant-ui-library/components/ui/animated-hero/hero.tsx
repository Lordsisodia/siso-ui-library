"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"

import { Button } from "@/components/ui/button"

function Hero() {
  const titles = useMemo(() => ["amazing", "new", "wonderful", "beautiful", "smart"], [])
  const [titleNumber, setTitleNumber] = useState(0)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setTitleNumber((current) => (current === titles.length - 1 ? 0 : current + 1))
    }, 2000)

    return () => window.clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <Button variant="secondary" size="sm" className="gap-4">
            Read our launch article <MoveRight className="h-4 w-4" />
          </Button>

          <div className="flex flex-col gap-4 text-center">
            <h1 className="max-w-2xl text-5xl tracking-tighter md:text-7xl">
              <span className="text-spektr-cyan-50">This is something</span>
              <span className="relative flex w-full justify-center overflow-hidden pb-1 pt-1 text-center md:pb-4">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={title}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
              Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods.
              Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>

          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="h-4 w-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
