# Avatars (17 available)

## Cherry-Picked Components from 21st.dev

<!-- Add your selected avatar components here -->

You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
avatar-picker.tsx
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface Avatar {
    id: number;
    svg: React.ReactNode;
    alt: string;
}

const avatars: Avatar[] = [
    {
        id: 1,
        svg: (
            <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                aria-label="Avatar 1"
            >
                <mask
                    id=":r111:"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                >
                    <rect width="36" height="36" rx="72" fill="#FFFFFF" />
                </mask>
                <g mask="url(#:r111:)">
                    <rect width="36" height="36" fill="#ff005b" />
                    <rect
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                        transform="translate(9 -5) rotate(219 18 18) scale(1)"
                        fill="#ffb238"
                        rx="6"
                    />
                    <g transform="translate(4.5 -4) rotate(9 18 18)">
                        <path
                            d="M15 19c2 1 4 1 6 0"
                            stroke="#000000"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <rect
                            x="10"
                            y="14"
                            width="1.5"
                            height="2"
                            rx="1"
                            stroke="none"
                            fill="#000000"
                        />
                        <rect
                            x="24"
                            y="14"
                            width="1.5"
                            height="2"
                            rx="1"
                            stroke="none"
                            fill="#000000"
                        />
                    </g>
                </g>
            </svg>
        ),
        alt: "Avatar 1",
    },
    {
        id: 2,
        svg: (
            <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
            >
                <mask
                    id=":R4mrttb:"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                >
                    <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:R4mrttb:)">
                    <rect width="36" height="36" fill="#ff7d10"></rect>
                    <rect
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                        transform="translate(5 -1) rotate(55 18 18) scale(1.1)"
                        fill="#0a0310"
                        rx="6"
                    />
                    <g transform="translate(7 -6) rotate(-5 18 18)">
                        <path
                            d="M15 20c2 1 4 1 6 0"
                            stroke="#FFFFFF"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <rect
                            x="14"
                            y="14"
                            width="1.5"
                            height="2"
                            rx="1"
                            stroke="none"
                            fill="#FFFFFF"
                        />
                        <rect
                            x="20"
                            y="14"
                            width="1.5"
                            height="2"
                            rx="1"
                            stroke="none"
                            fill="#FFFFFF"
                        />
                    </g>
                </g>
            </svg>
        ),
        alt: "Avatar 4",
    },
    {
        id: 3,
        svg: (
            <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
            >
                <mask
                    id=":r11c:"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                >
                    <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r11c:)">
                    <rect width="36" height="36" fill="#0a0310" />
                    <rect
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                        transform="translate(-3 7) rotate(227 18 18) scale(1.2)"
                        fill="#ff005b"
                        rx="36"
                    />
                    <g transform="translate(-3 3.5) rotate(7 18 18)">
                        <path d="M13,21 a1,0.75 0 0,0 10,0" fill="#FFFFFF" />
                        <rect
                            x="12"
                            y="14"
                            width="1.5"
                            height="2"
                            rx="1"
                            stroke="none"
                            fill="#FFFFFF"
                        />
                        <rect
                            x="22"
                            y="14"
                            width="1.5"
                            height="2"
                            rx="1"
                            stroke="none"
                            fill="#FFFFFF"
                        />
                    </g>
                </g>
            </svg>
        ),
        alt: "Avatar 2",
    },
    {
        id: 4,
        svg: (
            <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
            >
                <mask
                    id=":r1gg:"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                >
                    <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r1gg:)">
                    <rect width="36" height="36" fill="#d8fcb3"></rect>
                    <rect
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                        transform="translate(9 -5) rotate(219 18 18) scale(1)"
                        fill="#89fcb3"
                        rx="6"
                    ></rect>
                    <g transform="translate(4.5 -4) rotate(9 18 18)">
                        <path
                            d="M15 19c2 1 4 1 6 0"
                            stroke="#000000"
                            fill="none"
                            strokeLinecap="round"
                        ></path>
                        <rect
                            x="10"
                            y="14"
                            width="1.5"
                            height="2"
                            rx="1"
                            stroke="none"
                            fill="#000000"
                        ></rect>
                        <rect
                            x="24"
                            y="14"
                            width="1.5"
                            height="2"
                            rx="1"
                            stroke="none"
                            fill="#000000"
                        ></rect>
                    </g>
                </g>
            </svg>
        ),
        alt: "Avatar 3",
    },
];

// Add these animation variants at the top level
const mainAvatarVariants = {
    initial: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
        },
    },
    exit: {
        y: -20,
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

const pickerVariants = {
    container: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    },
    item: {
        initial: {
            y: 20,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
    },
};

const selectedVariants = {
    initial: {
        opacity: 0,
        rotate: -180,
    },
    animate: {
        opacity: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
        },
    },
    exit: {
        opacity: 0,
        rotate: 180,
        transition: {
            duration: 0.2,
        },
    },
};

export function AvatarPicker() {
    const [selectedAvatar, setSelectedAvatar] = useState<Avatar>(avatars[0]);
    const [rotationCount, setRotationCount] = useState(0);

    const handleAvatarSelect = (avatar: Avatar) => {
        setRotationCount((prev) => prev + 1080); // Add 3 rotations each time
        setSelectedAvatar(avatar);
    };

    return (
        <motion.div initial="initial" animate="animate" className="w-full">
            <Card className="w-full max-w-md mx-auto overflow-hidden bg-gradient-to-b from-background to-muted/30">
                <CardContent className="p-0">
                    {/* Background header */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: "8rem",
                            transition: {
                                height: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                },
                            },
                        }}
                        className="bg-gradient-to-r from-primary/20 to-primary/10 w-full"
                    />

                    <div className="px-8 pb-8 -mt-16">
                        {/* Main avatar display */}
                        <motion.div
                            className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 bg-background flex items-center justify-center"
                            variants={mainAvatarVariants}
                            layoutId="selectedAvatar"
                        >
                            <motion.div
                                className="w-full h-full flex items-center justify-center scale-[3]"
                                animate={{
                                    rotate: rotationCount,
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.4, 0, 0.2, 1], // Custom easing for a nice acceleration and deceleration
                                }}
                            >
                                {selectedAvatar.svg}
                            </motion.div>
                        </motion.div>

                        {/* Username display */}
                        <motion.div
                            className="text-center mt-4"
                            variants={pickerVariants.item}
                        >
                            <motion.h2
                                className="text-2xl font-bold"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Me
                            </motion.h2>
                            <motion.p
                                className="text-muted-foreground text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Select your avatar
                            </motion.p>
                        </motion.div>

                        {/* Avatar selection */}
                        <motion.div
                            className="mt-6"
                            variants={pickerVariants.container}
                        >
                            <motion.div
                                className="flex justify-center gap-4"
                                variants={pickerVariants.container}
                            >
                                {avatars.map((avatar) => (
                                    <motion.button
                                        key={avatar.id}
                                        onClick={() =>
                                            handleAvatarSelect(avatar)
                                        }
                                        className={cn(
                                            "relative w-12 h-12 rounded-full overflow-hidden border-2",
                                            "transition-all duration-300"
                                        )}
                                        variants={pickerVariants.item}
                                        whileHover={{
                                            y: -2,
                                            transition: { duration: 0.2 },
                                        }}
                                        whileTap={{
                                            y: 0,
                                            transition: { duration: 0.2 },
                                        }}
                                        aria-label={`Select ${avatar.alt}`}
                                        aria-pressed={
                                            selectedAvatar.id === avatar.id
                                        }
                                    >
                                        <div className="w-full h-full flex items-center justify-center">
                                            {avatar.svg}
                                        </div>
                                        {selectedAvatar.id === avatar.id && (
                                            <motion.div
                                                className="absolute inset-0 bg-primary/20 ring-2 ring-primary ring-offset-2 ring-offset-background rounded-full"
                                                variants={selectedVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                                layoutId="selectedIndicator"
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}


demo.tsx
import { AvatarPicker } from "@/components/ui/avatar-picker"


export function DemoAvatarPicker() {
    return <AvatarPicker />
}
```

Copy-paste these files for dependencies:
```tsx
shadcn/card
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

Install NPM dependencies:
```bash
motion
```


You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
animated-tooltip.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-foreground z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-background relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-background relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

demo.tsx
"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export { AnimatedTooltipPreview };

```

Install NPM dependencies:
```bash
framer-motion
```


You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
animated-tooltip.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-foreground z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-background relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-background relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

demo.tsx
"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export { AnimatedTooltipPreview };

```

Install NPM dependencies:
```bash
framer-motion
```


You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
ruixen-contributors-table.tsx
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Eye } from "lucide-react";

type Contributor = {
  name: string;
  email: string;
  avatar: string;
  role: string;
};

type Project = {
  id: string;
  title: string;
  repo: string;
  status: "Active" | "Inactive" | "In Progress";
  team: string;
  tech: string;
  createdAt: string;
  contributors: Contributor[];
};

const data: Project[] = [
    {
      id: "1",
      title: "ShadCN Clone",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "UI Guild",
      tech: "Next.js",
      createdAt: "2024-06-01",
      contributors: [
        {
          name: "Srinath G",
          email: "srinath@example.com",
          avatar: "https://github.com/srinath.png",
          role: "UI Lead",
        },
        {
          name: "Kavya M",
          email: "kavya@example.com",
          avatar: "https://github.com/kavya.png",
          role: "Designer",
        },
      ],
    },
    {
      id: "2",
      title: "RUIXEN Components",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "In Progress",
      team: "Component Devs",
      tech: "React",
      createdAt: "2024-05-22",
      contributors: [
        {
          name: "Arjun R",
          email: "arjun@example.com",
          avatar: "https://github.com/arjun.png",
          role: "Developer",
        },
        {
          name: "Divya S",
          email: "divya@example.com",
          avatar: "https://github.com/divya.png",
          role: "QA",
        },
        {
          name: "Nikhil V",
          email: "nikhil@example.com",
          avatar: "https://github.com/nikhil.png",
          role: "UX",
        },
      ],
    },
    {
      id: "3",
      title: "CV Jobs Platform",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "CV Core",
      tech: "Spring Boot",
      createdAt: "2024-06-05",
      contributors: [
        {
          name: "Manoj T",
          email: "manoj@example.com",
          avatar: "https://github.com/manoj.png",
          role: "Backend Lead",
        },
      ],
    },
    {
      id: "4",
      title: "Ruixen UI Docs",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Tech Writers",
      tech: "Markdown + Docusaurus",
      createdAt: "2024-04-19",
      contributors: [
        {
          name: "Sneha R",
          email: "sneha@example.com",
          avatar: "https://github.com/sneha.png",
          role: "Documentation",
        },
        {
          name: "Vinay K",
          email: "vinay@example.com",
          avatar: "https://github.com/vinay.png",
          role: "Maintainer",
        },
      ],
    },
    {
      id: "5",
      title: "Job Portal Analytics",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Data Squad",
      tech: "Python",
      createdAt: "2024-03-30",
      contributors: [
        {
          name: "Aarav N",
          email: "aarav@example.com",
          avatar: "https://github.com/aarav.png",
          role: "Data Engineer",
        },
      ],
    },
    {
      id: "6",
      title: "Real-time Chat",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Infra",
      tech: "Socket.io",
      createdAt: "2024-06-03",
      contributors: [
        {
          name: "Neha L",
          email: "neha@example.com",
          avatar: "https://github.com/neha.png",
          role: "DevOps",
        },
        {
          name: "Raghav I",
          email: "raghav@example.com",
          avatar: "https://github.com/raghav.png",
          role: "NodeJS Engineer",
        },
      ],
    },
    {
      id: "7",
      title: "RUX Theme Builder",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Design Systems",
      tech: "Tailwind CSS",
      createdAt: "2024-05-10",
      contributors: [
        {
          name: "Ishita D",
          email: "ishita@example.com",
          avatar: "https://github.com/ishita.png",
          role: "Design Engineer",
        },
      ],
    },
    {
      id: "8",
      title: "Admin Dashboard",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Dashboard Core",
      tech: "Remix",
      createdAt: "2024-05-28",
      contributors: [
        {
          name: "Rahul B",
          email: "rahul@example.com",
          avatar: "https://github.com/rahul.png",
          role: "Fullstack",
        },
      ],
    },
    {
      id: "9",
      title: "OpenCV Blog Engine",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Platform",
      tech: "Node.js",
      createdAt: "2024-01-18",
      contributors: [
        {
          name: "Sanya A",
          email: "sanya@example.com",
          avatar: "https://github.com/sanya.png",
          role: "API Developer",
        },
        {
          name: "Harshit V",
          email: "harshit@example.com",
          avatar: "https://github.com/harshit.png",
          role: "Platform Architect",
        },
      ],
    },
    {
      id: "10",
      title: "Dark Mode Toggle Package",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Component Devs",
      tech: "TypeScript",
      createdAt: "2024-06-02",
      contributors: [
        {
          name: "Meera C",
          email: "meera@example.com",
          avatar: "https://github.com/meera.png",
          role: "Package Maintainer",
        },
      ],
    },
  ];
  

const allColumns = [
  "Project",
  "Repository",
  "Team",
  "Tech",
  "Created At",
  "Contributors",
  "Status",
] as const;

function ContributorsTable() {
  const [visibleColumns, setVisibleColumns] = useState<string[]>([...allColumns]);
  const [statusFilter, setStatusFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");

  const filteredData = data.filter((project) => {
    return (
      (!statusFilter || project.status === statusFilter) &&
      (!techFilter || project.tech.toLowerCase().includes(techFilter.toLowerCase()))
    );
  });

  const toggleColumn = (col: string) => {
    setVisibleColumns((prev) =>
      prev.includes(col)
        ? prev.filter((c) => c !== col)
        : [...prev, col]
    );
  };

  return (
        <div className="container my-10 space-y-4 p-4 border border-border rounded-lg bg-background shadow-sm overflow-x-auto">
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex gap-2 flex-wrap">
          <Input
            placeholder="Filter by technology..."
            value={techFilter}
            onChange={(e) => setTechFilter(e.target.value)}
            className="w-48"
          />
          <Input
            placeholder="Filter by status..."
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-48"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            {allColumns.map((col) => (
              <DropdownMenuCheckboxItem
                key={col}
                checked={visibleColumns.includes(col)}
                onCheckedChange={() => toggleColumn(col)}
              >
                {col}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {visibleColumns.includes("Project") && <TableHead className="w-[180px]">Project</TableHead>}
            {visibleColumns.includes("Repository") && <TableHead className="w-[220px]">Repository</TableHead>}
            {visibleColumns.includes("Team") && <TableHead className="w-[150px]">Team</TableHead>}
            {visibleColumns.includes("Tech") && <TableHead className="w-[150px]">Tech</TableHead>}
            {visibleColumns.includes("Created At") && <TableHead className="w-[120px]">Created At</TableHead>}
            {visibleColumns.includes("Contributors") && <TableHead className="w-[150px]">Contributors</TableHead>}
            {visibleColumns.includes("Status") && <TableHead className="w-[100px]">Status</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.length ? (
            filteredData.map((project) => (
              <TableRow key={project.id}>
                {visibleColumns.includes("Project") && (
                  <TableCell className="font-medium whitespace-nowrap">{project.title}</TableCell>
                )}
                {visibleColumns.includes("Repository") && (
                  <TableCell className="whitespace-nowrap">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {project.repo.replace("https://", "")}
                    </a>
                  </TableCell>
                )}
                {visibleColumns.includes("Team") && <TableCell className="whitespace-nowrap">{project.team}</TableCell>}
                {visibleColumns.includes("Tech") && <TableCell className="whitespace-nowrap">{project.tech}</TableCell>}
                {visibleColumns.includes("Created At") && <TableCell className="whitespace-nowrap">{project.createdAt}</TableCell>}
                {visibleColumns.includes("Contributors") && (
                  <TableCell className="min-w-[120px]">
                    <div className="flex -space-x-2">
                      <TooltipProvider>
                        {project.contributors.map((contributor, idx) => (
                          <Tooltip key={idx}>
                            <TooltipTrigger asChild>
                              <Avatar className="h-8 w-8 ring-2 ring-white hover:z-10">
                                <AvatarImage src={contributor.avatar} alt={contributor.name} />
                                <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                              </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="text-sm">
                              <p className="font-semibold">{contributor.name}</p>
                              <p className="text-xs text-muted-foreground">{contributor.email}</p>
                              <p className="text-xs italic">{contributor.role}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </TooltipProvider>
                    </div>
                  </TableCell>
                )}
                {visibleColumns.includes("Status") && (
                  <TableCell className="whitespace-nowrap">
                    <Badge
                      className={cn(
                        "whitespace-nowrap",
                        project.status === "Active" && "bg-green-500 text-white",
                        project.status === "Inactive" && "bg-gray-400 text-white",
                        project.status === "In Progress" && "bg-yellow-500 text-white",
                      )}
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={visibleColumns.length} className="text-center py-6">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ContributorsTable;

demo.tsx
import ContributorsTable from "@/components/ui/ruixen-contributors-table";

const DemoOne = () => {
  return <ContributorsTable />;
};

export { DemoOne };

```

Copy-paste these files for dependencies:
```tsx
originui/table
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => <thead ref={ref} className={cn(className)} {...props} />);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t border-border bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:w-px [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
));
TableCaption.displayName = "TableCaption";

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };

```
```tsx
originui/tooltip
"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    showArrow?: boolean;
  }
>(({ className, sideOffset = 4, showArrow = false, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "relative z-50 max-w-[280px] rounded-lg border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    >
      {props.children}
      {showArrow && (
        <TooltipPrimitive.Arrow className="-my-px fill-popover drop-shadow-[0_1px_0_hsl(var(--border))]" />
      )}
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };

```
```tsx
originui/avatar
"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-[inherit] bg-secondary text-xs",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };

```
```tsx
originui/badge
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

```
```tsx
chetanverma16/dropdown-menu
"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownMenuProps = {
  options: {
    label: string;
    onClick: () => void;
    Icon?: React.ReactNode;
  }[];
  children: React.ReactNode;
};

const DropdownMenu = ({ options, children }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-[#11111198] hover:bg-[#111111d1] shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none rounded-xl backdrop-blur-sm"
      >
        {children ?? "Menu"}
        <>
          <motion.span
            className="ml-2"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", type: "spring" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -5, scale: 0.95, filter: "blur(10px)" }}
            animate={{ y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ y: -5, scale: 0.95, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "circInOut", type: "spring" }}
            className="absolute z-10 w-48 mt-2 p-1 bg-[#11111198] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm flex flex-col gap-2"
          >
            {options && options.length > 0 ? (
              options.map((option, index) => (
                <motion.button
                  initial={{
                    opacity: 0,
                    x: 10,
                    scale: 0.95,
                    filter: "blur(10px)",
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{
                    opacity: 0,
                    x: 10,
                    scale: 0.95,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeInOut",
                    type: "spring",
                  }}
                  whileHover={{
                    backgroundColor: "#11111140",
                    transition: {
                      duration: 0.4,
                      ease: "easeInOut",
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  }}
                  key={option.label}
                  onClick={option.onClick}
                  className="px-2 py-3 cursor-pointer text-white text-sm rounded-lg w-full text-left flex items-center gap-x-2"
                >
                  {option.Icon}
                  {option.label}
                </motion.button>
              ))
            ) : (
              <div className="px-4 py-2 text-white text-xs">No options</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { DropdownMenu };

```
```tsx
shadcn/button
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

```
```tsx
kokonutd/button-colorful
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            className={cn(
                "relative h-10 px-4 overflow-hidden",
                "bg-zinc-900 dark:bg-zinc-100",
                "transition-all duration-200",
                "group",
                className
            )}
            {...props}
        >
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                    "opacity-40 group-hover:opacity-80",
                    "blur transition-opacity duration-500"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white dark:text-zinc-900">{label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
            </div>
        </Button>
    );
}

export { ButtonColorful }
```

Install NPM dependencies:
```bash
lucide-react, @radix-ui/react-tooltip, @radix-ui/react-avatar, class-variance-authority, framer-motion, @radix-ui/react-slot
```


You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
comments.tsx
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDownIcon, ChevronUpIcon, TrashIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import {cn} from '@/lib/utils';

export type User = {
	id: string;
	name: string;
	image: string;
};

export type ReplyType = {
	id: string;
	content: string;
	commentId: string;
	createdAt: Date;
	user: User;
};

export type CommentType = {
	id: string;
	content: string;
	createdAt: Date;
	user: User;
	repliesCount: number;
};

type CardLayoutProps = React.ComponentProps<'div'> & {
	data: CommentType | ReplyType;
	onDelete: (id: string) => void;
	currentUser: User;
};

function CardLayout({
	onDelete,
	data,
	currentUser,
	className,
	children,
	...props
}: CardLayoutProps) {
	const { id, user, createdAt } = data;

	return (
		<div
			className={cn('flex gap-2 rounded-md border px-4 py-2', className)}
			{...props}
		>
			<Avatar>
				<AvatarImage src={user.image || ''} alt={user.name || ''} />
				<AvatarFallback>{getInitialChar(user.name || '')}</AvatarFallback>
			</Avatar>
			<div className="w-full pt-2.5">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2 text-sm">
						<p className="font-medium">{user.name}</p>
						<div className="bg-muted h-1 w-1 rounded-full" />
						<p className="text-muted-foreground">{getTimeAgo(createdAt)}</p>
					</div>
					{currentUser?.id === user.id && (
						<Button
							variant="ghost"
							className="h-7 w-7 text-muted-foreground"
							type="button"
							onClick={() => onDelete(id)}
						>
							<span className="sr-only">Delete It</span>
							<TrashIcon className='h-4 w-4' />
						</Button>
					)}
				</div>
				{children}
			</div>
		</div>
	);
}

type CommentCardProps = CardLayoutProps & {
	data: CommentType;
};

export function CommentCard({ data, ...props }: CommentCardProps) {
	const { id, content } = data;

	let take = 5;
	const [showReplies, setShowReplies] = React.useState(false);
	const [replies, setReplies] = React.useState<ReplyType[]>([]);
	const [repliesCount, setRepliesCount] = React.useState<number>(0);

	React.useEffect(() => {
		setRepliesCount(data.repliesCount);
	}, [data]);

	const setData = (data: ReplyType) => {
		setReplies([data, ...replies]);
		setRepliesCount(repliesCount + 1);
		take = take + 1;
		setShowReplies(true);
	};

	const handleDeleteReply = (replyId: string) => {
		const filteredReplies = replies.filter((reply) => reply.id !== replyId);
		setReplies(filteredReplies);
		setRepliesCount(repliesCount - 1);
	};

	const fetchReplies = async () => {
		await delay(1000);
		setReplies(repliesData.filter((reply) => reply.commentId === id));
	};

	const handleShowReplies = () => {
		if (!showReplies) {
			setShowReplies(true);
			if (replies.length === 0 && repliesCount > 0) {
				fetchReplies();
			}
		} else {
			setShowReplies(false);
		}
	};

	return (
		<CardLayout data={data} {...props}>
			<div className="text-muted-foreground px-1 py-3 text-sm">
				<p>{content}</p>
			</div>
			<button
				className="text-muted-foreground hover:text-foreground my-2 flex items-center gap-1 text-xs duration-200 hover:cursor-pointer [&_svg]:h-3.5 [&_svg]:w-4.5"
				onClick={handleShowReplies}
			>
				{showReplies ? <ChevronUpIcon /> : <ChevronDownIcon />}
				{repliesCount > 0
					? `${repliesCount === 1 ? 'reply' : 'replies'} (${repliesCount})`
					: 'Reply'}
			</button>
			{showReplies && (
				<div className="w-full space-y-4 rounded-tl-md border-t border-l pl-5">
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className="mt-2 w-full"
					>
						<CommentForm
							setData={setData}
							commentId={id}
							currentUser={props.currentUser}
						/>
					</motion.div>

					{replies.length === 0 && repliesCount > 0
						? Array.from({
								length: repliesCount > take ? take : repliesCount,
							}).map((_, index) => <SkeletonCard isReply key={index} />)
						: replies.map((reply, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
								>
									<ReplyCard
										onDelete={handleDeleteReply}
										data={reply}
										currentUser={props.currentUser}
									/>
								</motion.div>
							))}
				</div>
			)}
		</CardLayout>
	);
}

type ReplyCardProps = {
	data: ReplyType;
	onDelete: (id: string) => void;
	currentUser: User;
};

export function ReplyCard({ data, ...props }: ReplyCardProps) {
	const { content } = data;

	return (
		<CardLayout data={data} {...props}>
			<div className="text-muted-foreground px-1 py-3 text-sm">
				<p>{content}</p>
			</div>
		</CardLayout>
	);
}

interface CommentFormProps {
	currentUser: User;
	commentId?: string;
	setData: (data: any) => void;
}

export function CommentForm({
	currentUser,
	commentId,
	setData,
}: CommentFormProps) {
	const [value, setValue] = React.useState<string>('');

	const handleSubmit = async () => {
		try {
			if (value.trim() === '') return;
			const id = crypto.randomUUID();

			if (commentId) {
				setData({
					id,
					content: value,
					createdAt: new Date(),
					commentId,
					user: currentUser,
				} as ReplyType);
			} else {
				setData({
					id,
					repliesCount: 0,
					content: value,
					createdAt: new Date(),
					replies: [],
					user: currentUser,
				} as CommentType);
			}

			setValue('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="my-5 w-full space-y-2">
			<div className="flex w-full gap-x-2">
				<Avatar>
					<AvatarImage src={currentUser.image} />
					<AvatarFallback>{getInitialChar(currentUser.name)}</AvatarFallback>
				</Avatar>
				<Textarea
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder={commentId ? 'Leave a Reply' : 'Enter Your Comment'}
				/>
			</div>

			<Button
				disabled={value.trim() === ''}
				type="submit"
				className="w-full"
				onClick={handleSubmit}
			>
				{commentId ? 'Post Reply' : 'Post Comment'}
			</Button>
		</div>
	);
}

export function SkeletonCard({
	className,
	isReply,
	...props
}: React.ComponentProps<'div'> & {
	isReply?: boolean;
}) {
	return (
		<div
			className={cn('flex gap-2 rounded-md border px-4 py-2', className)}
			{...props}
		>
			<div>
				<Skeleton className="h-10 w-10 rounded-full" />
			</div>
			<div className="w-full pt-2.5">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2 text-sm">
						<Skeleton className="h-4 w-24" />
						<div className="bg-muted h-1 w-1 rounded-full" />
						<Skeleton className="h-4 w-12" />
					</div>
				</div>
				<div className="px-1 py-3">
					<Skeleton className="h-3.5 w-2/3" />
				</div>
				{!isReply && (
					<div className="py-2">
						<Skeleton className="h-3.5 w-16" />
					</div>
				)}
			</div>
		</div>
	);
}



export const getInitialChar = (value: string) => {
	return value
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase())
		.slice(0, 2)
		.join('');
};

export function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getTimeAgo = (timestamp: number | Date): string => {
	const date = new Date(timestamp);
	const now = new Date();
	const timeDifference = now.getTime() - date.getTime();

	const seconds = Math.floor(timeDifference / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (seconds < 60) {
		return `Just Now`;
	} else if (minutes < 60) {
		return `${minutes} min. ago`;
	} else if (hours < 24) {
		return `${hours} hr. ago`;
	} else if (days < 30) {
		return `${days} day${days === 1 ? '' : 's'} ago`;
	} else if (months < 12) {
		return `${months}mo ago`;
	} else {
		return `${years} yr. ago`;
	}
};


export const repliesData: ReplyType[] = [
	{
		id: '101',
		content: 'Totally agree with you!',
		user: {
			id: '3',
			name: 'Usman',
			image: 'https://avatar.vercel.sh/usman',
		},
		createdAt: new Date('2025-07-19T10:15:00Z'),
		commentId: '1',
	},
	{
		id: '102',
		content: 'Yup, same here!',
		user: {
			id: '4',
			name: 'Hira',
			image: 'https://avatar.vercel.sh/hira',
		},
		createdAt: new Date('2025-07-19T11:00:00Z'),
		commentId: '1',
	},
	{
		id: '201',
		content: 'Good catch! I’ll fix that.',
		user: {
			id: '1',
			name: 'Shaban',
			image: 'https://avatar.vercel.sh/shaban',
		},
		createdAt: new Date('2025-07-18T16:30:00Z'),
		commentId: '2',
	},
	{
		id: '301',
		content: 'Thanks for pointing this out!',
		user: {
			id: '2',
			name: 'Ayesha',
			image: 'https://avatar.vercel.sh/ayesha',
		},
		createdAt: new Date('2025-07-17T11:00:00Z'),
		commentId: '3',
	},
	{
		id: '302',
		content: 'Really useful!',
		user: {
			id: '5',
			name: 'Ali',
			image: 'https://avatar.vercel.sh/ali',
		},
		createdAt: new Date('2025-07-17T11:40:00Z'),
		commentId: '3',
	},
	{
		id: '303',
		content: 'Recursion is tricky but worth it.',
		user: {
			id: '3',
			name: 'Usman',
			image: 'https://avatar.vercel.sh/usman',
		},
		createdAt: new Date('2025-07-17T12:10:00Z'),
		commentId: '3',
	},
	{
		id: '501',
		content: 'Can’t agree more!',
		user: {
			id: '6',
			name: 'Zara',
			image: 'https://avatar.vercel.sh/zara',
		},
		createdAt: new Date('2025-07-21T08:20:00Z'),
		commentId: '5',
	},
	{
		id: '502',
		content: 'Amazing content indeed.',
		user: {
			id: '7',
			name: 'Fahad',
			image: 'https://avatar.vercel.sh/fahad',
		},
		createdAt: new Date('2025-07-21T09:00:00Z'),
		commentId: '5',
	},
	{
		id: '601',
		content: 'You’re right — context matters.',
		user: {
			id: '8',
			name: 'Nimra',
			image: 'https://avatar.vercel.sh/nimra',
		},
		createdAt: new Date('2025-07-22T12:45:00Z'),
		commentId: '6',
	},
];


demo.tsx
'use client';

import React, { useEffect } from 'react';
import {
	type User,
	type CommentType,
	CommentCard,
	SkeletonCard,
	CommentForm,
	delay,
} from '@/components/ui/comments';
import { AnimatePresence, motion } from 'framer-motion';

export const currentUser: User = {
	id: '1',
	name: 'Shaban Haider',
	image: 'https://avatar.vercel.sh/shaban',
};

export const commentsData: CommentType[] = [
	{
		id: '1',
		content: 'What a helpful post! Really made my day.',
		user: {
			id: '2',
			name: 'Ayesha',
			image: 'https://avatar.vercel.sh/ayesha',
		},
		repliesCount: 2,
		createdAt: new Date('2025-07-19T08:30:00Z'),
	},
	{
		id: '2',
		content: 'I think there’s a bug in the logic.',
		user: {
			id: '5',
			name: 'Ali',
			image: 'https://avatar.vercel.sh/ali',
		},
		repliesCount: 1,
		createdAt: new Date('2025-07-18T14:45:00Z'),
	},
	{
		id: '3',
		content: 'Awesome explanation. Helped me understand recursion.',
		user: {
			id: '6',
			name: 'Zara',
			image: 'https://avatar.vercel.sh/zara',
		},
		repliesCount: 3,
		createdAt: new Date('2025-07-17T09:20:00Z'),
	},
	{
		id: '4',
		content: 'Could you add more examples in the doc?',
		user: {
			id: '7',
			name: 'Fahad',
			image: 'https://avatar.vercel.sh/fahad',
		},
		repliesCount: 0,
		createdAt: new Date('2025-07-20T16:10:00Z'),
	},
	{
		id: '5',
		content: 'Brilliant work as always!',
		user: {
			id: '8',
			name: 'Nimra',
			image: 'https://avatar.vercel.sh/nimra',
		},
		repliesCount: 2,
		createdAt: new Date('2025-07-21T07:50:00Z'),
	},
	{
		id: '6',
		content: 'Not sure this applies in all cases.',
		user: {
			id: '9',
			name: 'Bilal',
			image: 'https://avatar.vercel.sh/bilal',
		},
		repliesCount: 1,
		createdAt: new Date('2025-07-22T12:15:00Z'),
	},
];

export default function Demo() {
	const [comments, setComments] = React.useState<CommentType[]>([]);
	const [commentsCount, setCommentsCount] = React.useState(commentsData.length);

	const setData = (data: CommentType) => {
		setComments([data, ...comments]);
		setCommentsCount(commentsCount + 1);
	};

	const fetchComments = async () => {
		await delay(1000);
		setComments(commentsData);
	};

	useEffect(() => {
		fetchComments();
	}, []);

	const handleDeleteComment = (id: string) => {
		const filteredComments = comments.filter((comment) => comment.id !== id);
		setComments(filteredComments);
		setCommentsCount(commentsCount - 1);
	};

	return (
		<div className="py-10 px-4 flex w-full items-start justify-center">
			<div className="w-full max-w-xl">
				<h2 className="mb-4 text-2xl font-bold">Comments Section</h2>
				<div className="bg-border h-px w-full" />
				<div className="space-y-2">
					<CommentForm setData={setData} currentUser={currentUser} />
					<AnimatePresence initial={false}>
						{comments.length === 0 && commentsCount > 0
							? Array.from({
									length: 10,
								}).map((_, index) => <SkeletonCard key={index} />)
							: comments.map((comment, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3 }}
										className="w-full"
									>
										<CommentCard
											onDelete={handleDeleteComment}
											currentUser={currentUser}
											data={comment}
										/>
									</motion.div>
								))}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

```

Copy-paste these files for dependencies:
```tsx
originui/button
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm shadow-black/5 hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

```
```tsx
shadcn/avatar
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

```
```tsx
shadcn/skeleton
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }

```
```tsx
shadcn/textarea
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

```

Install NPM dependencies:
```bash
lucide-react, framer-motion, @radix-ui/react-slot, class-variance-authority, @radix-ui/react-avatar
```


You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
orbiting-avatars.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

// Helper component to inject the required CSS animations into the document head
const Styles = () => {
  const css = `
    @keyframes orbit {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes counter-orbit {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }
    .animate-orbit {
      animation: orbit var(--orbit-duration) linear infinite;
    }
    .animate-counter-orbit {
      animation: counter-orbit var(--orbit-duration) linear infinite;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `;
  return <style>{css}</style>;
};


// Interface for individual avatar properties
interface Avatar {
  src: string;
  alt: string;
}

// Interface for the main component props
export interface OrbitingAvatarsCTAProps {
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
  buttonProps?: ButtonProps;
  avatars: Avatar[];
  className?: string;
  orbitRadius?: number; // Radius in rem
  orbitDuration?: number; // Duration in seconds
}

export const OrbitingAvatarsCTA = ({
  title,
  description,
  buttonText,
  buttonProps,
  avatars,
  className,
  orbitRadius = 20, // Default radius: 20rem (320px)
  orbitDuration = 40, // Default duration: 40s
}: OrbitingAvatarsCTAProps) => {
  // We assume a base font size of 16px for rem conversion
  const radiusInPx = orbitRadius * 16;

  return (
    <>
      {/* Inject styles into the DOM */}
      <Styles />
      <section className={cn('relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-background', className)}>
        {/* Background concentric circles */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/40" />
          <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/40" />
        </div>

        {/* Central Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="max-w-md text-muted-foreground">
            {description}
          </p>
          <Button size="lg" {...buttonProps}>
            {buttonText}
          </Button>
        </div>

        {/* Single rotating container for all avatars */}
        <div
          className="absolute inset-0 z-0 animate-orbit"
          style={{ '--orbit-duration': `${orbitDuration}s` } as React.CSSProperties}
        >
          {avatars.map((avatar, i) => {
            // Calculate position on the circle using trigonometry
            const angle = (i / avatars.length) * 2 * Math.PI; // Angle in radians
            const x = Math.cos(angle) * radiusInPx;
            const y = Math.sin(angle) * radiusInPx;

            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2" // Position relative to center
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <div
                  className="relative h-14 w-14 animate-float"
                  style={{ animationDelay: `-${i * 0.8}s` }}
                >
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    className="h-full w-full animate-counter-orbit rounded-full object-cover shadow-md"
                    // Pass duration to counter-orbit animation to keep avatar upright
                    style={{ '--orbit-duration': `${orbitDuration}s` } as React.CSSProperties}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

demo.tsx
import { OrbitingAvatarsCTA } from '@/components/ui/orbiting-avatars';

const Demo = () => {
  const avatars = [
    { src: 'https://i.pravatar.cc/150?img=11', alt: 'User 1' },
    { src: 'https://i.pravatar.cc/150?img=12', alt: 'User 2' },
    { src: 'https://i.pravatar.cc/150?img=13', alt: 'User 3' },
    { src: 'https://i.pravatar.cc/150?img=14', alt: 'User 4' },
    { src: 'https://i.pravatar.cc/150?img=15', alt: 'User 5' },
    { src: 'https://i.pravatar.cc/150?img=16', alt: 'User 6' },
  ];

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <OrbitingAvatarsCTA
        title="Contribute to Our Community"
        description="Our platform is built by a community of creators who want to share — from amateurs to professionals and everyone in between."
        buttonText="Submit Your Work"
        buttonProps={{ onClick: () => alert('Button Clicked!') }}
        avatars={avatars}
        orbitRadius={22}
        orbitDuration={50}
      />
    </div>
  );
};

export default Demo;
```

Copy-paste these files for dependencies:
```tsx
shadcn/button
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

Install NPM dependencies:
```bash
@radix-ui/react-slot, class-variance-authority
```



