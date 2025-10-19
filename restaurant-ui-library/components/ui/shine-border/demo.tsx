"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { ShineBorder, Timeline } from "./shine-border";

const tiles = [
  "/images/blogs/port/portfolio-01.jpg",
  "/images/blogs/port/portfolio-02.jpg",
  "/images/blogs/port/portfolio-03.jpg",
  "/images/blogs/port/portfolio-04.jpg",
  "/images/blogs/port/portfolio-05.jpg",
  "/images/blogs/port/portfolio-06.jpg",
];

const shuffleArray = (array: string[]) => {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
};

function Card({ src }: { src: string }) {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className="relative h-full w-full cursor-pointer rounded-md border p-1 md:rounded-2xl md:p-2"
    >
      <Image
        src={src}
        alt="Portfolio"
        width={350}
        height={350}
        className="h-[120px] w-[200px] rounded-sm object-cover md:h-full md:w-full md:rounded-sm"
      />
    </motion.div>
  );
}

export default function ShineBorderDemo() {
  const [randomTiles, setRandomTiles] = useState<string[]>([]);

  useEffect(() => {
    setRandomTiles(shuffleArray(tiles));
  }, []);

  return (
    <section id="cta" className="relative p-6">
      <ShineBorder
        borderWidth={3}
        className="border bg-white/5 shadow-2xl backdrop-blur-md dark:bg-black/5"
        color={["#FF007F", "#39FF14", "#00FFFF"]}
      >
        <h1 className="my-8 text-2xl md:text-4xl">How it Works?</h1>
        <div className="grid gap-6 p-6">
          <Timeline />
        </div>
        <div className="z-10 mt-6 flex flex-col items-center text-center text-primary">
          <h2 className="text-lg font-semibold md:text-3xl">Design anything you need</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            No credit card required.
          </p>
          <div className="mb-8 mt-4 grid gap-2 md:flex">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "group rounded-[2rem] px-6",
              )}
            >
              Get Started
              <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
            <Link
              target="_blank"
              href="https://cal.com/aliimam/designali"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "group rounded-[2rem] px-6",
              )}
            >
              Book a call
              <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 rounded-full bg-background opacity-40 blur-xl" />
      </ShineBorder>

      <div className="mt-12 space-y-4">
        <Marquee className="[--duration:70s]">
          <div className="flex gap-2">
            {randomTiles.map((tile, idx) => (
              <Card key={`marquee-top-${idx}`} src={tile} />
            ))}
          </div>
        </Marquee>
        <Marquee direction="right" className="[--duration:70s]">
          <div className="flex gap-2">
            {randomTiles.map((tile, idx) => (
              <Card key={`marquee-bottom-${idx}`} src={tile} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
