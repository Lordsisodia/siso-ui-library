# Badges (25 available)

## Cherry-Picked Components from 21st.dev

<!-- Add your selected badge components here -->

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
badge.tsx
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


demo.tsx
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

function Component() {
  return (
    <Badge className="gap-1">
      <Zap className="-ms-0.5 opacity-60" size={12} strokeWidth={2} aria-hidden="true" />
      Badge
    </Badge>
  );
}

export { Component };


```

Install NPM dependencies:
```bash
class-variance-authority
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
badge-delta.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import {
  RiArrowDownLine,
  RiArrowDownSFill,
  RiArrowRightLine,
  RiArrowRightSFill,
  RiArrowUpLine,
  RiArrowUpSFill,
} from "@remixicon/react"

const badgeDeltaVariants = cva(
  "inline-flex items-center text-tremor-label font-semibold",
  {
    variants: {
      variant: {
        outline:
          "gap-x-1 rounded-tremor-small px-2 py-1 ring-1 ring-inset ring-border",
        solid: "gap-x-1 rounded-tremor-small px-2 py-1",
        solidOutline:
          "gap-x-1 rounded-tremor-small px-2 py-1 ring-1 ring-inset",
        complex:
          "space-x-2.5 rounded-tremor-default bg-tremor-background py-1 pl-2.5 pr-1 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 dark:bg-dark-tremor-background",
      },
      deltaType: {
        increase: "",
        decrease: "",
        neutral: "",
      },
      iconStyle: {
        filled: "",
        line: "",
      },
    },
    compoundVariants: [
      {
        deltaType: "increase",
        variant: "outline",
        className: "text-emerald-700 dark:text-emerald-500",
      },
      {
        deltaType: "decrease",
        variant: "outline",
        className: "text-red-700 dark:text-red-500",
      },
      {
        deltaType: "neutral",
        variant: "outline",
        className: "text-gray-700 dark:text-gray-400",
      },
      // Solid variants
      {
        deltaType: "increase",
        variant: "solid",
        className:
          "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-500",
      },
      {
        deltaType: "decrease",
        variant: "solid",
        className:
          "bg-red-100 text-red-800 dark:bg-red-400/20 dark:text-red-500",
      },
      {
        deltaType: "neutral",
        variant: "solid",
        className:
          "bg-gray-200/50 text-gray-700 dark:bg-gray-500/30 dark:text-gray-300",
      },
      // Solid outline variants
      {
        deltaType: "increase",
        variant: "solidOutline",
        className:
          "bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/20 dark:text-emerald-500 dark:ring-emerald-400/20",
      },
      {
        deltaType: "decrease",
        variant: "solidOutline",
        className:
          "bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/20 dark:text-red-500 dark:ring-red-400/20",
      },
      {
        deltaType: "neutral",
        variant: "solidOutline",
        className:
          "bg-gray-100 text-gray-700 ring-gray-600/10 dark:bg-gray-500/30 dark:text-gray-300 dark:ring-gray-400/20",
      },
    ],
  },
)

interface BadgeDeltaProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeDeltaVariants> {
  value: string | number
}

const DeltaIcon = ({
  deltaType,
  iconStyle,
}: {
  deltaType: "increase" | "decrease" | "neutral"
  iconStyle: "filled" | "line"
}) => {
  const icons = {
    increase: {
      filled: RiArrowUpSFill,
      line: RiArrowUpLine,
    },
    decrease: {
      filled: RiArrowDownSFill,
      line: RiArrowDownLine,
    },
    neutral: {
      filled: RiArrowRightSFill,
      line: RiArrowRightLine,
    },
  }

  const Icon = icons[deltaType][iconStyle]
  return <Icon className="-ml-0.5 size-4" aria-hidden={true} />
}

export function BadgeDelta({
  className,
  variant = "outline",
  deltaType = "neutral",
  iconStyle = "filled",
  value,
  ...props
}: BadgeDeltaProps) {
  if (variant === "complex") {
    return (
      <span
        className={cn(badgeDeltaVariants({ variant, className }))}
        {...props}
      >
        <span
          className={cn(
            "text-tremor-label font-semibold",
            deltaType === "increase" &&
              "text-emerald-700 dark:text-emerald-500",
            deltaType === "decrease" && "text-red-700 dark:text-red-500",
            deltaType === "neutral" &&
              "text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis",
          )}
        >
          {value}
        </span>
        <span
          className={cn(
            "rounded-tremor-small px-2 py-1 text-tremor-label font-medium",
            deltaType === "increase" && "bg-emerald-100 dark:bg-emerald-400/10",
            deltaType === "decrease" && "bg-red-100 dark:bg-red-400/10",
            deltaType === "neutral" &&
              "bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle",
          )}
        >
          <DeltaIcon deltaType={deltaType} iconStyle="line" />
        </span>
      </span>
    )
  }

  return (
    <span
      className={cn(badgeDeltaVariants({ variant, deltaType, className }))}
      {...props}
    >
      <DeltaIcon deltaType={deltaType} iconStyle={iconStyle} />
      {value}
    </span>
  )
}


demo.tsx
import { BadgeDelta } from "@/components/ui/badge-delta"

export function BadgeDeltaDefault() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <BadgeDelta 
        variant="outline"
        deltaType="increase"
        iconStyle="filled"
        value="9.3%"
      />
      <BadgeDelta 
        variant="outline"
        deltaType="decrease"
        iconStyle="filled"
        value="1.9%"
      />
      <BadgeDelta 
        variant="outline"
        deltaType="neutral"
        iconStyle="filled"
        value="0.6%"
      />
    </div>
  )
}
```

Install NPM dependencies:
```bash
@remixicon/react, class-variance-authority
```

Extend existing tailwind.config.js with this code:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
      },
      fontSize: {
        'tremor-label': ['0.75rem'],
      },
      colors: {
        tremor: {
          background: {
            subtle: '#f3f4f6',
          },
          'content-emphasis': '#374151',
        },
        'dark-tremor': {
          background: {
            subtle: '#1f2937',
          },
          'content-emphasis': '#d1d5db',
        },
      },
    }
  }
}
```

Extend existing globals.css with this code:
```css
@layer base {
  :root {
    --tremor-ring: 229 231 235;
    --dark-tremor-ring: 31 41 55;
  }

  .dark {
    
    --tremor-ring: 31 41 55;
    --dark-tremor-ring: 229 231 235;
  }
}
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
filter-badge.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { RiCloseFill } from '@remixicon/react'

const filterBadgeVariants = cva(
  "inline-flex items-center bg-background text-tremor-label text-muted-foreground border",
  {
    variants: {
      variant: {
        default: "rounded-tremor-small gap-x-2.5 py-1 pl-2.5 pr-1",
        pill: "rounded-tremor-full gap-x-2.5 py-1 pl-2.5 pr-1",
        avatar: "rounded-tremor-full gap-2 px-1 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface FilterBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof filterBadgeVariants> {
  label?: string
  value?: string
  avatar?: string
  children?: React.ReactNode
  onRemove?: () => void
}

export function FilterBadge({
  className,
  variant,
  label,
  value,
  avatar,
  children,
  onRemove,
  ...props
}: FilterBadgeProps) {
  if (variant === "avatar") {
    return (
      <span className={cn(filterBadgeVariants({ variant }), className)} {...props}>
        {avatar && (
          <img
            className="inline-block size-5 rounded-tremor-full"
            src={avatar}
            alt=""
          />
        )}
        {children}
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="flex size-5 items-center justify-center rounded-tremor-full text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label="Remove"
          >
            <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
          </button>
        )}
      </span>
    )
  }

  return (
    <span className={cn(filterBadgeVariants({ variant }), className)} {...props}>
      {label}
      <span className="h-4 w-px bg-border" />
      <span className="font-medium text-foreground">
        {value}
      </span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className={cn(
            "-ml-1.5 flex size-5 items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground",
            variant === "pill" ? "rounded-tremor-full" : "rounded"
          )}
          aria-label="Remove"
        >
          <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
        </button>
      )}
    </span>
  )
}

demo.tsx
import { FilterBadge } from "@/components/ui/filter-badge"

export function FilterBadgeDefault() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <FilterBadge 
        label="Department"
        value="Sales"
        onRemove={() => {}}
      />
      <FilterBadge 
        label="Location"
        value="Zurich"
        onRemove={() => {}}
      />
      <FilterBadge 
        label="Sales volume"
        value="$100K-5M"
        onRemove={() => {}}
      />
      <FilterBadge 
        label="Status"
        value="Closed"
        onRemove={() => {}}
      />
    </div>
  )
}
```

Install NPM dependencies:
```bash
@remixicon/react, class-variance-authority
```

Extend existing tailwind.config.js with this code:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-full': '9999px',
      },
      fontSize: {
        'tremor-label': ['0.75rem'],
      },
    }
  }
}
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
status-badge.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { IconType } from "@remixicon/react"

const statusBadgeVariants = cva(
  "inline-flex items-center gap-x-2.5 rounded-tremor-full bg-background px-2.5 py-1.5 text-tremor-label border",
  {
    variants: {
      status: {
        success: "",
        error: "",
        default: "",
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
)

interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  leftIcon?: IconType
  rightIcon?: IconType
  leftLabel: string
  rightLabel: string
}

export function StatusBadge({
  className,
  status,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftLabel,
  rightLabel,
  ...props
}: StatusBadgeProps) {
  return (
    <span className={cn(statusBadgeVariants({ status }), className)} {...props}>
      <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
        {LeftIcon && (
          <LeftIcon 
            className={cn(
              "-ml-0.5 size-4 shrink-0",
              status === "success" && "text-emerald-600 dark:text-emerald-500",
              status === "error" && "text-red-600 dark:text-red-500"
            )} 
            aria-hidden={true}
          />
        )}
        {leftLabel}
      </span>
      <span className="h-4 w-px bg-border" />
      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
        {RightIcon && (
          <RightIcon 
            className="-ml-0.5 size-4 shrink-0" 
            aria-hidden={true}
          />
        )}
        {rightLabel}
      </span>
    </span>
  )
}

demo.tsx
import { StatusBadge } from "@/components/ui/status-badge"
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiCloseCircleLine,
  RiShieldCheckLine,
} from '@remixicon/react'

export function StatusBadgeDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <StatusBadge 
        leftIcon={RiShieldCheckLine}
        rightIcon={RiCloseCircleLine}
        leftLabel="Protection"
        rightLabel="SSO login"
        status="success"
      />
      <StatusBadge 
        leftIcon={RiCheckboxCircleFill}
        rightIcon={RiCloseCircleLine}
        leftLabel="Live"
        rightLabel="Audit trails"
        status="success"
      />
      <StatusBadge 
        leftIcon={RiCloseCircleFill}
        rightIcon={RiShieldCheckLine}
        leftLabel="Safety checks"
        rightLabel="Production"
        status="error"
      />
    </div>
  )
}
```

Install NPM dependencies:
```bash
@remixicon/react, class-variance-authority
```

Extend existing tailwind.config.js with this code:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'tremor-default': '0.5rem',
        'tremor-small': '0.375rem',
        'tremor-full': '9999px',
      },
      fontSize: {
        'tremor-label': ['0.75rem'],
      },
    }
  }
}
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
alert-badge.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { IconType } from "@remixicon/react"

const alertBadgeVariants = cva(
  "inline-flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-tremor-label font-medium text-white",
  {
    variants: {
      variant: {
        error: "bg-red-500",
        success: "bg-emerald-500",
        info: "bg-blue-500",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
)

interface AlertBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof alertBadgeVariants> {
  icon?: IconType
  label: string
  action?: {
    label: string
    href: string
    icon?: IconType
  }
}

export function AlertBadge({
  className,
  variant,
  icon: Icon,
  label,
  action,
  ...props
}: AlertBadgeProps) {
  return (
    <span className={cn(alertBadgeVariants({ variant }), className)} {...props}>
      <span className="inline-flex items-center gap-1.5">
        {Icon && <Icon className="size-4" aria-hidden={true} />}
        {label}
      </span>
      {action && (
        <>
          <span
            className={cn(
              "h-5 w-px",
              variant === "error" && "bg-red-400",
              variant === "success" && "bg-emerald-400",
              variant === "info" && "bg-blue-400",
            )}
          />
          <a href={action.href} className="inline-flex items-center gap-1.5">
            {action.label}
            {action.icon && (
              <action.icon className="size-4" aria-hidden={true} />
            )}
          </a>
        </>
      )}
    </span>
  )
}


demo.tsx
import { AlertBadge } from "@/components/ui/alert-badge"
import {
  RiArrowRightUpLine,
  RiNotificationFill,
  RiWifiLine,
} from '@remixicon/react'

export function AlertBadgeDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <AlertBadge 
        variant="error"
        label="Major incident"
        action={{
          label: "Updates",
          href: "#",
          icon: RiArrowRightUpLine
        }}
      />
      <AlertBadge 
        variant="success"
        icon={RiWifiLine}
        label="Connected"
        action={{
          label: "Edit",
          href: "#"
        }}
      />
      <AlertBadge 
        variant="info"
        icon={RiNotificationFill}
        label="1 Notification"
        action={{
          label: "Read",
          href: "#",
          icon: RiArrowRightUpLine
        }}
      />
    </div>
  )
}
```

Install NPM dependencies:
```bash
@remixicon/react, class-variance-authority
```

Extend existing tailwind.config.js with this code:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'tremor-full': '9999px',
      },
      fontSize: {
        'tremor-label': ['0.75rem'],
      },
    }
  }
}
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
award-badge.tsx
import React, { MouseEvent, useEffect, useRef, useState } from "react";

type AwardBadgeType = "golden-kitty" | "product-of-the-day" | "product-of-the-month" | "product-of-the-week";

interface AwardBadgeProps {
  type: AwardBadgeType;
  place?: number;
  link?: string;
}

const identityMatrix =
  "1, 0, 0, 0, " +
  "0, 1, 0, 0, " +
  "0, 0, 1, 0, " +
  "0, 0, 0, 1";

const maxRotate = 0.25;
const minRotate = -0.25;
const maxScale = 1;
const minScale = 0.97;

const backgroundColor = ["#f3e3ac", "#ddd", "#f1cfa6"];

const title = {
  "golden-kitty": "Golden Kitty Awards",
  "product-of-the-day": "Product of the Day",
  "product-of-the-month": "Product of the Month",
  "product-of-the-week": "Product of the Week",
};

export const AwardBadge = ({ type, place, link }: AwardBadgeProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [firstOverlayPosition, setFirstOverlayPosition] = useState<number>(0);
  const [matrix, setMatrix] = useState<string>(identityMatrix);
  const [currentMatrix, setCurrentMatrix] = useState<string>(identityMatrix);
  const [disableInOutOverlayAnimation, setDisableInOutOverlayAnimation] = useState<boolean>(true);
  const [disableOverlayAnimation, setDisableOverlayAnimation] = useState<boolean>(false);
  const [isTimeoutFinished, setIsTimeoutFinished] = useState<boolean>(false);
  const enterTimeout = useRef<NodeJS.Timeout>(null);
  const leaveTimeout1 = useRef<NodeJS.Timeout>(null);
  const leaveTimeout2 = useRef<NodeJS.Timeout>(null);
  const leaveTimeout3 = useRef<NodeJS.Timeout>(null);

  const getDimensions = () => {
    const left = ref?.current?.getBoundingClientRect()?.left || 0;
    const right = ref?.current?.getBoundingClientRect()?.right || 0;
    const top = ref?.current?.getBoundingClientRect()?.top || 0;
    const bottom = ref?.current?.getBoundingClientRect()?.bottom || 0;

    return { left, right, top, bottom };
  };

  const getMatrix = (clientX: number, clientY: number) => {
    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    const scale = [
      maxScale - (maxScale - minScale) * Math.abs(xCenter - clientX) / (xCenter - left),
      maxScale - (maxScale - minScale) * Math.abs(yCenter - clientY) / (yCenter - top),
      maxScale - (maxScale - minScale) * (Math.abs(xCenter - clientX) + Math.abs(yCenter - clientY)) / (xCenter - left + yCenter - top)
    ];

    const rotate = {
      x1: 0.25 * ((yCenter - clientY) / yCenter - (xCenter - clientX) / xCenter),
      x2: maxRotate - (maxRotate - minRotate) * Math.abs(right - clientX) / (right - left),
      x3: 0,
      y0: 0,
      y2: maxRotate - (maxRotate - minRotate) * (top - clientY) / (top - bottom),
      y3: 0,
      z0: -(maxRotate - (maxRotate - minRotate) * Math.abs(right - clientX) / (right - left)),
      z1: (0.2 - (0.2 + 0.6) * (top - clientY) / (top - bottom)),
      z3: 0
    };
    return `${scale[0]}, ${rotate.y0}, ${rotate.z0}, 0, ` +
      `${rotate.x1}, ${scale[1]}, ${rotate.z1}, 0, ` +
      `${rotate.x2}, ${rotate.y2}, ${scale[2]}, 0, ` +
      `${rotate.x3}, ${rotate.y3}, ${rotate.z3}, 1`;
  };

  const getOppositeMatrix = (_matrix: string, clientY: number, onMouseEnter?: boolean) => {
    const { top, bottom } = getDimensions();
    const oppositeY = bottom - clientY + top;
    const weakening = onMouseEnter ? 0.7 : 4;
    const multiplier = onMouseEnter ? -1 : 1;

    return _matrix.split(", ").map((item, index) => {
      if (index === 2 || index === 4 || index === 8) {
        return -parseFloat(item) * multiplier / weakening;
      } else if (index === 0 || index === 5 || index === 10) {
        return "1";
      } else if (index === 6) {
        return multiplier * (maxRotate - (maxRotate - minRotate) * (top - oppositeY) / (top - bottom)) / weakening;
      } else if (index === 9) {
        return (maxRotate - (maxRotate - minRotate) * (top - oppositeY) / (top - bottom)) / weakening;
      }
      return item;
    }).join(", ");
  };

  const onMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    if (leaveTimeout1.current) {
      clearTimeout(leaveTimeout1.current);
    }
    if (leaveTimeout2.current) {
      clearTimeout(leaveTimeout2.current);
    }
    if (leaveTimeout3.current) {
      clearTimeout(leaveTimeout3.current);
    }
    setDisableOverlayAnimation(true);

    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    setDisableInOutOverlayAnimation(false);
    enterTimeout.current = setTimeout(() => setDisableInOutOverlayAnimation(true), 350);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFirstOverlayPosition((Math.abs(xCenter - e.clientX) + Math.abs(yCenter - e.clientY)) / 1.5);
      });
    });

    const matrix = getMatrix(e.clientX, e.clientY);
    const oppositeMatrix = getOppositeMatrix(matrix, e.clientY, true);

    setMatrix(oppositeMatrix);
    setIsTimeoutFinished(false);
    setTimeout(() => {
      setIsTimeoutFinished(true)
    }, 200);
  };

  const onMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    setTimeout(() => setFirstOverlayPosition((Math.abs(xCenter - e.clientX) + Math.abs(yCenter - e.clientY)) / 1.5), 150);

    if (isTimeoutFinished) {
      setCurrentMatrix(getMatrix(e.clientX, e.clientY));
    }
  };

  const onMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    const oppositeMatrix = getOppositeMatrix(matrix, e.clientY);

    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
    }

    setCurrentMatrix(oppositeMatrix);
    setTimeout(() => setCurrentMatrix(identityMatrix), 200);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setDisableInOutOverlayAnimation(false);
        leaveTimeout1.current = setTimeout(() => setFirstOverlayPosition(-firstOverlayPosition / 4), 150);
        leaveTimeout2.current = setTimeout(() => setFirstOverlayPosition(0), 300);
        leaveTimeout3.current = setTimeout(() => {
          setDisableOverlayAnimation(false);
          setDisableInOutOverlayAnimation(true);
        }, 500);
      });
    });
  };

  useEffect(() => {
    if (isTimeoutFinished) {
      setMatrix(currentMatrix);
    }
  }, [currentMatrix, isTimeoutFinished]);

  const overlayAnimations = [...Array(10).keys()].map((e) => (
    `
    @keyframes overlayAnimation${e + 1} {
      0% {
        transform: rotate(${e * 10}deg);
      }
      50% {
        transform: rotate(${(e + 1) * 10}deg);
      }
      100% {
        transform: rotate(${e * 10}deg);
      }
    }
    `
  )).join(" ");

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      className="block w-[180px] sm:w-[260px] h-auto cursor-pointer"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <style>
        {overlayAnimations}
      </style>
      <div
        style={{
          transform: `perspective(700px) matrix3d(${matrix})`,
          transformOrigin: "center center",
          transition: "transform 200ms ease-out"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 54" className="w-180px sm:w-260px h-auto">
          <defs>
            <filter id="blur1">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
            <mask id="badgeMask">
              <rect width="260" height="54" fill="white" rx="10" />
            </mask>
          </defs>
          <rect width="260" height="54" rx="10" fill={backgroundColor[(place || 2) - 1] || backgroundColor[1]} />
          <rect x="4" y="4" width="252" height="46" rx="8" fill="transparent" stroke="#bbb" strokeWidth="1" />
          <text fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#666" x="53" y="20">
            PRODUCT HUNT
          </text>
          <text fontFamily="Helvetica-Bold, Helvetica" fontSize="16" fontWeight="bold" fill="#666" x="52" y="40">
            {title[type]}{place && ` #${place}`}
          </text>
          <g transform="translate(8, 9)">
            <path fill="#666"
                  d="M14.963 9.075c.787-3-.188-5.887-.188-5.887S12.488 5.175 11.7 8.175c-.787 3 .188 5.887.188 5.887s2.25-1.987 3.075-4.987m-4.5 1.987c.787 3-.188 5.888-.188 5.888S7.988 14.962 7.2 11.962c-.787-3 .188-5.887.188-5.887s2.287 1.987 3.075 4.987m.862 10.388s-.6-2.962-2.775-5.175C6.337 14.1 3.375 13.5 3.375 13.5s.6 2.962 2.775 5.175c2.213 2.175 5.175 2.775 5.175 2.775m3.3 3.413s-1.988-2.288-4.988-3.075-5.887.187-5.887.187 1.987 2.287 4.988 3.075c3 .787 5.887-.188 5.887-.188Zm6.75 0s1.988-2.288 4.988-3.075c3-.826 5.887.187 5.887.187s-1.988 2.287-4.988 3.075c-3 .787-5.887-.188-5.887-.188ZM32.625 13.5s-2.963.6-5.175 2.775c-2.213 2.213-2.775 5.175-2.775 5.175s2.962-.6 5.175-2.775c2.175-2.213 2.775-5.175 2.775-5.175M28.65 6.075s.975 2.887.188 5.887c-.826 3-3.076 4.988-3.076 4.988s-.974-2.888-.187-5.888c.788-3 3.075-4.987 3.075-4.987m-4.5 7.987s.975-2.887.188-5.887c-.788-3-3.076-4.988-3.076-4.988s-.974 2.888-.187 5.888c.788 3 3.075 4.988 3.075 4.988ZM18 26.1c.975-.225 3.113-.6 5.325 0 3 .788 5.063 3.038 5.063 3.038s-2.888.975-5.888.187a13 13 0 0 1-1.425-.525c.563.788 1.125 1.425 2.288 1.913l-.863 2.062c-2.063-.862-2.925-2.137-3.675-3.262-.262-.375-.525-.713-.787-1.05-.26.293-.465.586-.686.903l-.102.147-.048.068c-.775 1.108-1.643 2.35-3.627 3.194l-.862-2.062c1.162-.488 1.725-1.125 2.287-1.913-.45.225-.938.375-1.425.525-3 .788-5.887-.187-5.887-.187s1.987-2.288 4.987-3.075c2.212-.563 4.35-.188 5.325.037" />
          </g>
          <g style={{ mixBlendMode: "overlay" }} mask="url(#badgeMask)">
            <g style={{
              transform: `rotate(${firstOverlayPosition}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 200ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "overlayAnimation1 5s infinite",
              willChange: "transform"
            }}>
              <polygon points="0,0 260,54 260,0 0,54" fill="hsl(358, 100%, 62%)" filter="url(#blur1)" opacity="0.5" />
            </g>
            <g style={{
              transform: `rotate(${firstOverlayPosition + 10}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 200ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "overlayAnimation2 5s infinite",
              willChange: "transform"
            }}>
              <polygon points="0,0 260,54 260,0 0,54" fill="hsl(30, 100%, 50%)" filter="url(#blur1)" opacity="0.5" />
            </g>
            <g style={{
              transform: `rotate(${firstOverlayPosition + 20}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 200ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "overlayAnimation3 5s infinite",
              willChange: "transform"
            }}>
              <polygon points="0,0 260,54 260,0 0,54" fill="hsl(60, 100%, 50%)" filter="url(#blur1)" opacity="0.5" />
            </g>
            <g style={{
              transform: `rotate(${firstOverlayPosition + 30}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 200ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "overlayAnimation4 5s infinite",
              willChange: "transform"
            }}>
              <polygon points="0,0 260,54 260,0 0,54" fill="hsl(96, 100%, 50%)" filter="url(#blur1)" opacity="0.5" />
            </g>
            <g style={{
              transform: `rotate(${firstOverlayPosition + 40}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 200ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "overlayAnimation5 5s infinite",
              willChange: "transform"
            }}>
              <polygon points="0,0 260,54 260,0 0,54" fill="hsl(233, 85%, 47%)" filter="url(#blur1)" opacity="0.5" />
            </g>
            <g style={{
              transform: `rotate(${firstOverlayPosition + 50}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 200ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "overlayAnimation6 5s infinite",
              willChange: "transform"
            }}>
              <polygon points="0,0 260,54 260,0 0,54" fill="hsl(271, 85%, 47%)" filter="url(#blur1)" opacity="0.5" />
            </g>
            <g style={{
              transform: `rotate(${firstOverlayPosition + 60}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 200ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "overlayAnimation7 5s infinite",
              willChange: "transform"
            }}>
              <polygon points="0,0 260,54 260,0 0,54" fill="hsl(300, 20%, 35%)" filter="url(#blur1)" opacity="0.5" />
            </g>
            <g style={{
              transform: `rotate(${firstOverlayPosition + 70}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 200ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "overlayAnimation8 5s infinite",
              willChange: "transform"
            }}>
              <polygon points="0,0 260,54 260,0 0,54" fill="transparent" filter="url(#blur1)" opacity="0.5" />
            </g>
            <g style={{
              transform: `rotate(${firstOverlayPosition + 80}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 200ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "overlayAnimation9 5s infinite",
              willChange: "transform"
            }}>
              <polygon points="0,0 260,54 260,0 0,54" fill="transparent" filter="url(#blur1)" opacity="0.5" />
            </g>
            <g style={{
              transform: `rotate(${firstOverlayPosition + 90}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 200ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "overlayAnimation10 5s infinite",
              willChange: "transform"
            }}>
              <polygon points="0,0 260,54 260,0 0,54" fill="white" filter="url(#blur1)" opacity="0.5" />
            </g>
          </g>
        </svg>
      </div>
    </a>
  );
};

demo.tsx
import React from "react";
import { AwardBadge } from "@/components/ui/award-badge";

const demoLink = "https://www.producthunt.com/golden-kitty-awards/hall-of-fame?year=2024#bootstrapped-small-teams-2";

export const GoldenKitty = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AwardBadge type="golden-kitty" link={demoLink} />
    </div>
  );
};

export const ProductOfTheDay = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AwardBadge type="product-of-the-day" place={1} link={demoLink} />
    </div>
  );
};

export const ProductOfTheMonth = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AwardBadge type="product-of-the-month" place={2} link={demoLink} />
    </div>
  );
};

export const ProductOfTheWeek = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AwardBadge type="product-of-the-week" place={3} link={demoLink} />
    </div>
  );
};
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
pill.tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge, type BadgeProps } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, ChevronUpIcon, MinusIcon } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';

export type PillProps = BadgeProps & {
  themed?: boolean;
};

export const Pill = ({
  variant = 'secondary',
  themed = false,
  className,
  ...props
}: PillProps) => (
  <Badge
    variant={variant}
    className={cn('gap-2 rounded-full px-3 py-1.5 font-normal', className)}
    {...props}
  />
);

export type PillAvatarProps = ComponentProps<typeof AvatarImage> & {
  fallback?: string;
};

export const PillAvatar = ({
  fallback,
  className,
  ...props
}: PillAvatarProps) => (
  <Avatar className={cn('-ml-1 h-4 w-4', className)}>
    <AvatarImage {...props} />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
);

export type PillButtonProps = ComponentProps<typeof Button>;

export const PillButton = ({ className, ...props }: PillButtonProps) => (
  <Button
    variant="ghost"
    size="icon"
    className={cn(
      '-my-2 -mr-2 size-6 rounded-full p-0.5 hover:bg-foreground/5',
      className
    )}
    {...props}
  />
);

export type PillStatusProps = {
  children: ReactNode;
  className?: string;
};

export const PillStatus = ({
  children,
  className,
  ...props
}: PillStatusProps) => (
  <div
    className={cn(
      'flex items-center gap-2 border-r pr-2 font-medium',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export type PillIndicatorProps = {
  variant?: 'success' | 'error' | 'warning' | 'info';
  pulse?: boolean;
};

export const PillIndicator = ({
  variant = 'success',
  pulse = false,
}: PillIndicatorProps) => (
  <span className="relative flex size-2">
    {pulse && (
      <span
        className={cn(
          'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
          variant === 'success' && 'bg-emerald-400',
          variant === 'error' && 'bg-rose-400',
          variant === 'warning' && 'bg-amber-400',
          variant === 'info' && 'bg-sky-400'
        )}
      />
    )}
    <span
      className={cn(
        'relative inline-flex size-2 rounded-full',
        variant === 'success' && 'bg-emerald-500',
        variant === 'error' && 'bg-rose-500',
        variant === 'warning' && 'bg-amber-500',
        variant === 'info' && 'bg-sky-500'
      )}
    />
  </span>
);

export type PillDeltaProps = {
  children: ReactNode;
  className?: string;
  delta: number;
};

export const PillDelta = ({ className, delta }: PillDeltaProps) => {
  if (!delta) {
    return (
      <MinusIcon className={cn('size-3 text-muted-foreground', className)} />
    );
  }

  if (delta > 0) {
    return (
      <ChevronUpIcon className={cn('size-3 text-emerald-500', className)} />
    );
  }

  return <ChevronDownIcon className={cn('size-3 text-rose-500', className)} />;
};

export type PillIconProps = {
  icon: typeof ChevronUpIcon;
  className?: string;
};

export const PillIcon = ({
  icon: Icon,
  className,
  ...props
}: PillIconProps) => (
  <Icon
    size={12}
    className={cn('size-3 text-muted-foreground', className)}
    {...props}
  />
);

export type PillAvatarGroupProps = {
  children: ReactNode;
  className?: string;
};

export const PillAvatarGroup = ({
  children,
  className,
  ...props
}: PillAvatarGroupProps) => (
  <div
    className={cn(
      '-space-x-1 flex items-center',
      '[&>*:not(:first-of-type)]:[mask-image:radial-gradient(circle_9px_at_-4px_50%,transparent_99%,white_100%)]',
      className
    )}
    {...props}
  >
    {children}
  </div>
);


demo.tsx
import {
  Pill,
  PillAvatar,
  PillButton,
  PillStatus,
  PillIndicator,
  PillDelta,
  PillIcon,
  PillAvatarGroup,
} from '@/components/ui/pill';
import { ArrowUpRightIcon, XIcon, CheckCircleIcon, UsersIcon } from 'lucide-react';

const Demo = () => (
  <div className="flex flex-wrap gap-2 items-center justify-center">
    <Pill>
      <PillAvatar src="https://pbs.twimg.com/profile_images/1748718473595789312/PbqJh9hk_400x400.jpg" fallback="HB" />
      @haydenbleasel
    </Pill>
    <Pill>
      <PillStatus>
        <CheckCircleIcon size={12} className="text-emerald-500" />
        Passed
      </PillStatus>
      Approval Status
    </Pill>
    <Pill>
      #kibo-ui
      <PillButton variant="ghost" size="icon">
        <XIcon size={12} />
      </PillButton>
    </Pill>
    <Pill>
      <PillIndicator variant="success" pulse />
      Active
    </Pill>
    <Pill>
      <PillIndicator variant="error" />
      Error
    </Pill>
    <Pill>
      <PillDelta delta={10} />
      Up 10%
    </Pill>
    <Pill>
      <PillDelta delta={-5} />
      Down 5%
    </Pill>
    <Pill>
      <PillDelta delta={0} />
      No change
    </Pill>
    <Pill>
      <PillIcon icon={UsersIcon} />
      17 users
    </Pill>
    <Pill>
      <PillAvatarGroup>
        <PillAvatar src="https://pbs.twimg.com/profile_images/1748718473595789312/PbqJh9hk_400x400.jpg" fallback="HB" />
        <PillAvatar src="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg" fallback="SC" />
        <PillAvatar src="https://pbs.twimg.com/profile_images/1862717563311968256/xfgt1L9l_400x400.jpg" fallback="LR" />
      </PillAvatarGroup>
      Loved by millions
    </Pill>
  </div>
);
  
export default { Demo }
```

Copy-paste these files for dependencies:
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
shadcn/badge
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

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

Install NPM dependencies:
```bash
@radix-ui/react-avatar, class-variance-authority, @radix-ui/react-slot
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
quick-tooltip-actions.tsx
"use client";

import Link from "next/link";
import { MessageCircle, PersonStanding, User, Users } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TickerOptions = [
  {
    icon: <MessageCircle className="h-4 w-4" />,
    tooltip: "Chat",
    href: (ticker: string) => `/${ticker}?activeTab=Chat`,
  },
  {
    icon: <PersonStanding className="h-4 w-4" />,
    tooltip: "Persona",
    href: (ticker: string) => `/${ticker}?activeTab=Persona`,
  },
  {
    icon: <Users className="h-4 w-4" />,
    tooltip: "Competitors",
    href: (ticker: string) => `/${ticker}?activeTab=Competitors`,
  },
];

export function QuickTickerOptions({ ticker }: { ticker: string }) {
  return (
    <div className="flex gap-2 justify-center items-center text-foreground border bg-background rounded-xl px-2 py-1.5">
      {TickerOptions.map((option) => (
        <TickerOptionPil
          key={option.tooltip}
          icon={option.icon}
          tooltip={option.tooltip}
          href={option.href}
          ticker={ticker}
        />
      ))}
    </div>
  );
}

function TickerOptionPil({
  icon,
  tooltip,
  href,
  ticker,
}: {
  icon: React.ReactNode;
  tooltip: string;
  href: (ticker: string) => string;
  ticker: string;
}) {
  return (
    <Link
      href={href(ticker)}
      className="p-1 group hover:bg-muted-foreground/10 rounded-full cursor-pointer flex flex-col items-center justify-center"
    >
      {icon}
      <p className="text-xs absolute -top-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-popover px-1 py-0.5 rounded-md text-center border">
        {tooltip}
      </p>
    </Link>
  );
}

export const Component = ()=> {
  const [ticker, setTicker] = useState("AAPL");
  return (
    <div className="flex w-full justify-center items-center h-[400px]">
      <TooltipProvider>
        <Tooltip key={ticker} delayDuration={0.2}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="rounded-full" size={"icon"}>
              <User className={"size-4"} />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={0}
            align="center"
            className="p-0 bg-popover rounded-xl ml-1"
          >
            <QuickTickerOptions ticker={ticker} />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}


demo.tsx
import { Component } from "@/components/ui/quick-tooltip-actions";

const DemoOne = () => {
  return <Component />;
};

export { DemoOne };

```

Copy-paste these files for dependencies:
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

Install NPM dependencies:
```bash
next, lucide-react, @radix-ui/react-tooltip, @radix-ui/react-slot, class-variance-authority
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
docks.tsx
import { Sun, Moon, Settings } from 'lucide-react';

export const Component = () => {

  return (
    <div
      className="
        inline-flex rounded-lg overflow-hidden relative
        bg-white/20 dark:bg-black/40
        backdrop-blur-md
        shadow-lg shadow-black/20
        border border-gray-300 dark:border-black/60
        transition-colors duration-500
      "
    >
      <button
        className="
          px-4 py-2 rounded-l-lg
          flex items-center gap-2
          text-black dark:text-white
          bg-transparent
          hover:bg-black/10 dark:hover:bg-white/10
          transition-colors duration-300
          focus:outline-none focus:ring-0
          border-r border-gray-300 dark:border-black/60
          group
        "
        aria-label="Toggle Light Mode"
      >
        <Sun
          className="
            w-5 h-5
            text-current
            transition-transform duration-300
            group-hover:scale-110
          "
          aria-hidden="true"
        />
        <span className="select-none">Light</span>
      </button>

      <button
        className="
          px-4 py-2
          flex items-center gap-2
          text-black dark:text-white
          bg-transparent
          hover:bg-black/10 dark:hover:bg-white/10
          transition-colors duration-300
          focus:outline-none focus:ring-0
          border-r border-gray-300 dark:border-black/60
          group
        "
        aria-label="Toggle Dark Mode"
      >
        <Moon
          className="
            w-5 h-5
            text-current
            transition-transform duration-300
            group-hover:scale-110
          "
          aria-hidden="true"
        />
        <span className="select-none">Dark</span>
      </button>

      <button
        className="
          px-4 py-2 rounded-r-lg
          flex items-center gap-2
          text-black dark:text-white
          bg-transparent
          hover:bg-black/10 dark:hover:bg-white/10
          transition-colors duration-300
          focus:outline-none focus:ring-0
          group
        "
        aria-label="Open Settings"
      >
        <Settings
          className="
            w-5 h-5
            text-current
            transition-transform duration-300
            group-hover:scale-110
          "
          aria-hidden="true"
        />
        <span className="select-none">Settings</span>
      </button>
    </div>
  );
};


demo.tsx
import { Component } from "@/components/ui/docks";

const DemoOne = () => {
  return <Component />;
};

export { DemoOne };

```

Install NPM dependencies:
```bash
lucide-react
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
award.tsx
"use client"

import type React from "react"
 
import { Award, Star } from "lucide-react"

import { cn } from "@/lib/utils"

export interface AwardsComponentProps {
  variant?: "stamp" | "award" | "certificate" | "badge" | "sticker" | "id-card"
  title: string
  subtitle?: string
  description?: string
  date?: string
  recipient?: string
  level?: "bronze" | "silver" | "gold" | "platinum"
  className?: string
  showIcon?: boolean
  customIcon?: React.ReactNode
}

const levelColors = {
  bronze: "from-amber-600 to-amber-800",
  silver: "from-gray-400 to-gray-600",
  gold: "from-yellow-400 to-yellow-600",
  platinum: "from-slate-300 to-slate-500",
}

export function Awards({
  variant = "badge",
  title,
  subtitle,
  description,
  date,
  recipient,
  level = "gold",
  className,
  showIcon = true,
}: AwardsComponentProps) {
  // Stamp Variant
  if (variant === "stamp") {
    const createSerratedPath = () => {
      const radius = 96 // Half of 192px (w-48)
      const teeth = 40
      const innerRadius = radius - 8
      const outerRadius = radius

      let path = ""
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * 2 * Math.PI
        const r = i % 2 === 0 ? outerRadius : innerRadius
        const x = Math.cos(angle) * r + radius
        const y = Math.sin(angle) * r + radius

        if (i === 0) {
          path += `M ${x} ${y}`
        } else {
          path += ` L ${x} ${y}`
        }
      }
      path += " Z"
      return path
    }

    // Create curved text path
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createTextPath = (radius: number, id: string) => {
      const centerX = 96
      const centerY = 96
      return `M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`
    }
    return (
      <div
        className={cn(
          "relative mx-auto flex h-48 w-48 items-center justify-center",
          className
        )}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Define paths for curved text */}
            <path
              id="top-curve"
              d={createTextPath(55, "top-curve")}
              fill="none"
            />
            <path
              id="bottom-curve"
              d={createTextPath(60, "bottom-curve")}
              fill="none"
              transform="rotate(180 96 96)"
            />
          </defs>

          {/* Serrated border */}
          <path
            d={createSerratedPath()}
            strokeWidth="0.2"
            className="fill-white stroke-black dark:fill-black dark:stroke-white"
          />

          {/* Inner circle */}
          <circle
            cx="96"
            cy="96"
            r="78"
            className="fill-white stroke-black dark:fill-black dark:stroke-white"
            strokeWidth="0.2"
          />

          {/* Curved text - top */}
          <text className="fill-white text-xl font-bold">
            <textPath
              href="#top-curve"
              startOffset="50%"
              textAnchor="middle"
              className="fill-black dark:fill-white"
            >
              {title}
            </textPath>
          </text>

          {/* Curved text - bottom */}
          <text className="text-[10px] tracking-wider">
            <textPath
              href="#bottom-curve"
              startOffset="50%"
              textAnchor="middle"
              className="fill-black dark:fill-white"
            >
              {subtitle}
            </textPath>
          </text>
        </svg>

        <div className="relative z-10 text-center">
          {showIcon && (
            <div className="mb-1 flex justify-center text-center text-2xl">
              {<Star className="text-primary fill-primary" />}
            </div>
          )}
          {recipient && (
            <div className="text-primary mt-2 text-[14px]">{recipient}</div>
          )}

          {date && <div className="text-[10px] italic">{date}</div>}
        </div>
      </div>
    )
  }

  // Award Variant
  if (variant === "award") {
    const LaurelWreath = () => (
      <svg
        className={cn(
          "fill-primary absolute top-1/2 h-full w-full -translate-y-1/2"
        )}
        width="892.77"
        height="688.08"
        viewBox="0 0 892.77 688.08"
      >
        <path d="M892.6,358.7c-2.45,21.69-26.03,75.09-50.59,78.41-2.61.35-8.8-.53-10.21.3-.39.23-4.32,6.79-4.75,7.74-6.88,15.27-11.04,42.49-17.43,60.57-2.66,7.51-9.87,21.35-11.03,27.98-.1.58-.26,1.65.51,1.5,6.6-6.88,8.6-17.3,13.33-25.67,13.94-24.66,43.3-43.5,72.17-42.32-2.33,14.6-10.5,29.43-19.18,41.31-12.47,17.06-30.45,32.62-53.23,29.6-7.56-1-6.85-5.3-14.59,1.58-6.35,5.64-9.71,15.53-14.19,22.81-9.91,16.12-20.19,32.01-32.8,46.2,4.66.89,8.76-7.66,11.97-11.03,11.14-11.72,21.81-19.57,38.02-22.98,15.67-3.3,37.45-3.14,52.02,4.03-12.24,25.25-57.46,51.32-84.7,41.67-7.61-2.7-12.94-10.13-22.06-6.43-18.34,18.87-38.7,35.14-61.25,48.75,4.97,1.57,9.28-3.53,13.32-5.68,20.73-11.01,32.74-14.63,56.5-9.15,13.85,3.19,26.55,9.91,38.17,17.82-19.09,21.89-75.53,31.43-97.49,11.5-3.79-3.44-5.4-10.28-10.95-11.04-9.07-1.24-22.07,6.8-31.04,10.07-3.69,1.34-27.01,9.51-28.52,7.99.06-2.6-.8-5.29,1.57-6.93,1.5-1.04,17.65-4.87,21.68-6.32,8.48-3.06,22.88-8.38,30.46-12.54,9.12-5.01,2.78-21.66,2.3-29.72-1.18-19.76,7.83-43.47,20.48-58.5,1.79-2.13,19.39-19.37,21.51-16.98-2.82,28.58.11,60.88-19.03,84.46-2.69,3.03-6.49,6.06-10.06,7.94-4.12,2.16-9.31.65-8.9,7.59,1.27,1.23,11.02-5.38,12.91-6.58,10.31-6.56,22.01-15.72,31.1-23.9,2.59-2.34,19.93-19.11,20.44-20.46.23-.63-.39-11.92-.68-13.33-1.18-5.83-6.95-13.96-8.5-21.5-3.96-19.28-2.28-43.2,4.96-61.49,3.45-8.71,9.01-17.74,15.27-24.73,2.9,17.5,8.39,36.08,10.37,53.62,1.87,16.52.69,35.79-10.9,48.86-4.62,5.21-9.96,5.2-7.97,14.52,13.17-15.31,24.53-32.58,34.16-50.33,1.99-3.66,9.61-17.17,9.7-20.13.33-10.18-12.65-21.57-17.05-30.87-11.72-24.78-14.73-58.69-5.28-84.63.71-1.96,1.42-5.12,3.44-6.04,12.22,32.23,38.76,63.84,24.79,100.27-2.31,6.03-7.68,8.74-4.76,15.73,1.54-.25,1.89-1.87,2.47-3.02,7.87-15.49,14.88-42.87,18.84-60.16,1.87-8.16,6.12-21.11,2.85-28.5-4.29-9.69-11.33-11.15-18.64-17.35-24.62-20.88-33.84-58.75-31.52-89.97,1.97-.51,1.93.81,2.81,1.68,20.75,20.47,53.85,55.45,49.12,86.75-.44,2.9-3.52,7.02-3.71,9.23s2.82,4.83,2.79,7.33c1.42,1.39,1.82-.07,1.99-1.48.8-6.86,1.5-14.15,1.99-21.03,1.05-14.96,1.76-33.12,1.05-48.03-.45-9.51-.5-18.45-7.5-25.5-4.23-4.26-9.74-3.95-14.91-6.09-28.89-12.01-48.06-49.12-49.88-79.13-.07-1.11-2.03-1.97.73-1.73,23.64,16.34,59.89,35.61,63.41,67.59.81,7.39-3.03,17.42,5.1,20.39-.84-15.5-4.12-31.76-7.48-47.01-1.91-8.66-8.25-37.76-12.65-43.35-6.39-8.12-14.14-3.87-22.25-4.75-21.82-2.37-43.12-23.21-53.78-41.22-3.02-5.1-7.72-13-7.34-18.66,29.71,10.05,66.39,12.92,75.07,48.93,1.39,5.76-1.51,11.75,7.44,11.05-9.45-25.34-21.53-49.48-34.15-73.34-9.49-11.1-18.29-1.46-29.31-.62-24.24,1.85-49.97-15.79-62.53-35.54,12.16-1.78,27.18-2.45,39.53-1.53,14.47,1.07,29.13,6.2,36.65,19.35,3.12,5.45,2.93,14.34,10.8,11.68-7.94-13.11-17.24-26.37-27.04-38.45-2.54-3.14-13.54-16.92-15.98-18.02-7.78-3.53-11.89,2.2-17.3,4.66-22.22,10.12-48.27,3.4-65.69-12.67-1.12-1.03-7.02-6.35-5.98-7.51,17.62-2.11,36.48-11.68,54.24-7.75,8.57,1.89,16.8,6.91,22.19,13.81,2.88,3.69.83,6.42,7.06,6.94,1.49.12,2.92.63,2.49-1.49-8.92-8.7-17.38-18.05-26.98-26.03-3.66-3.04-13.47-11.25-17.29-12.71-4.55-1.73-10.25-.33-15.11-.89-27.28-3.12-48.71-29.1-57.58-53.4,1.55-2.18,1.45-.91,2.6-.65,29.66,6.66,68.48,16.71,70.87,53.16,21.14,14.84,39.62,33.01,57,52,.62-8.81-9.38-14.38-14.48-20.52-19.56-23.59-25.5-58.58-24.02-88.47.68-.79,10.44,7.02,11.52,7.97,20.16,17.57,37.02,49.29,34.52,76.57-1,10.9-9.52,15.89-4.29,28.21,1.81,4.26,14.83,18.08,18.66,23.34,9.6,13.17,19.55,27.31,26.6,41.91,1.62.09,2.24.49,1.98-1.47-.48-3.57-9.92-18.62-12.17-23.85-11.51-26.81-14.45-60.89-2.88-88.23.37-.88.81-2.87,2.06-1.96,9.94,12.98,16.87,28.86,21.49,44.52,5.8,19.65,9.83,40.98.04,60.03-1.45,2.82-4.93,5.59-5.48,8.51-2.09,11.08,6.07,21.31,10.12,30.78,7.21,16.81,14.1,33.95,18.83,51.67,1.58-.05,1.97-4.44,1.92-5.42-.27-5.28-7.25-19.63-8.64-27.37-4.67-26.05-2.53-50.65,10.53-73.88,1.45-2.57,4.8-8.51,6.73-10.28,1.69-1.54,1.69-.41,2.66,1.23,12.28,20.79,17.41,81.23,2.78,101.21-2.35,3.21-9.25,7.51-10.45,9.55-.39.66-3.05,12.36-3.11,13.43-.35,5.98,7.73,33.4,9.25,42.34,2.02,11.93,3.48,24.11,4.32,36.18,2.19-.58,1.95-2.71,2.05-4.46.4-6.52-1.93-15.33-2.11-22-.88-33.13,13.53-64.28,38.54-85.52,1.65-.03,3.41,14.23,3.55,16.43,1.54,24.35-4.14,74.1-26.52,88.57-6.99,4.52-12.38,3.46-14.29,13.71-2.29,12.31,3.05,32.46.81,45.81l-4.03,40.46c4.58-3.93,3.21-12.03,4.24-17.25,6.58-33.49,28.21-64.47,60.75-76.75-.37,4.65.51,9.94,0,14.5Z" />
        <path d="M122.6,347.7c-1.7,17.7-14.14,47.55-26.48,60.52-5.79,6.09-14.83,9.27-20.05,15.95-7.2,9.23-5.11,14.49-3.18,25.23,4.49,25.1,12.63,50.47,22.72,73.79,1.68-.31,2.16-5.36,2.02-6.44-.24-1.76-4.97-6.9-6.22-9.86-8.94-21.17-.97-44.77,8.01-64.37l18.18-35.83c12.17,28.27,10.36,66.34-4.83,93.18-4.82,8.52-16.69,18.39-14.52,29.1.83,4.09,6.01,13.72,8.18,17.9,9.33,17.95,21.89,36.15,35.16,51.33,1.78-8.72-2.17-7.86-6.5-12.99-25.68-30.41-7.81-69.51-2-104.01,20.14,23.8,27.35,62.58,18.27,92.26-3.14,10.27-9.76,17.88-6.25,29.71,18.74,19.75,39.22,38.23,63.47,51.02.89-8.43-5.47-6.33-10.34-9.15-4.61-2.67-12.11-11.32-15.06-15.94-13.97-21.88-9.34-50.93-13.57-75.43,4.11-.29,10.26,4.82,13.45,7.55,18.34,15.69,31.07,45.29,29.51,69.46-.49,7.59-5.43,18.51-.47,25.5,1.35,1.9,21.37,10.31,25.22,11.78,9.94,3.8,20.08,6.73,30.28,9.72l.98,7.51c-7.54-2.18-15.1-4.36-22.51-6.98-7.88-2.79-24.11-11.27-30.95-12.04-11.89-1.35-11.52,5.99-19.05,12-20.85,16.65-61.75,9.86-83.5-2.46-2.07-1.18-13.19-7.73-11.54-10.53,21.13-14.47,48.69-24.76,74.34-17.26,10.95,3.2,20.18,11.91,29.19,14.81,1.02.33,5.04,1.53,5.02-.51-11.82-6.39-24.42-14.2-34.91-22.59-6.02-4.82-23.27-23.82-27.5-25.5-9.8-3.9-9.91.63-16.9,4.26-26.89,13.94-71.69-11.42-87.08-34.28-1.05-1.55-3.6-3.96-2.17-5.96,3.81-5.34,36.79-5.58,43.94-4.81,18.64,1.99,33.72,11.44,46.14,24.86,3.15,3.4,6.26,11.64,11.48,10.52-10.1-11.12-19.65-23.71-27.41-36.58-5-8.3-11.58-25.16-17.59-31.41-7.79-8.1-10.21-3.34-18.5-2.52-24.7,2.44-44.75-17.93-56.91-37.07-6.3-9.93-12.8-22.08-13.59-33.92,33.98-.41,60.36,19.86,75.52,48.98,3.34,6.42,4.42,14.83,10.47,19.02-6.28-16.37-13.32-32.34-18.26-49.23s-6.28-33.8-14.89-48.61c-33.08,1.59-49.47-37.67-57.35-64.16-2.91-9.81-5.26-18.73-3.5-28.99,26.83,9.2,52.19,40.65,58.53,67.96,1.93,8.33.98,19.55,6.46,26.03-5.71-27.36-4-55.47-3.25-83.24-.33-2.46-2.64-10.16-4.27-11.73-1.84-1.78-8.46-3.44-11.41-5.59-21.82-15.94-28.32-68.11-24.94-92.82.26-1.88,2.02-11.61,3.38-11.6,24.77,21.31,40.05,54.58,38.49,87.47-.37,7.9-3.74,17.25-1.49,24.51,1.87-1.18,1.21-2.88,1.51-4.49,2.56-13.9,3.69-28.54,6.31-42.69,1.26-6.78,7.5-26.71,7.24-31.33-.05-.87-2.77-11.88-3.12-12.42-.93-1.43-6.38-5.09-8.41-7.59-17.02-20.94-12.69-82.05.77-104.18.86-1.41,1.09-3.01,2.65-1.25,3.37,3.78,8.96,15.02,11.03,19.97,8.44,20.2,10.18,39.73,6.24,61.21-1.57,8.58-8.23,23.74-8.7,30.39-.09,1.31.19,5.98,1.96,6.38,2.2-9.93,5.59-20.68,9.26-30.24,4.82-12.57,15.43-28.92,18.49-40.51.76-2.89,1.78-9.95,1.23-12.72-.47-2.38-6.17-8.59-7.75-12.24-9.36-21.65.56-56.02,9.6-76.95.98-2.26,12.81-26.07,15.16-24.32,12.15,28.6,10.64,62.39-1.81,90.67-2.46,5.58-10.57,17.48-11.2,21.81-.14.96-.63,3.81,1.01,3.51,4.3-10.16,10.59-19.63,16.79-28.71,6.7-9.82,24.02-28.29,27.92-37.08,5.11-11.53.33-12.38-2.74-21.66-7.05-21.37,8.26-54.53,22.07-71.01,3.38-4.04,17.33-17.9,21.49-19.52,1.73-.68,1.35.43,1.49,1.47,3.89,29.17-8.37,67.53-27.03,89.99-4.6,5.54-11.32,8.61-11.97,16.52,1.97.46,2.37-1.01,3.41-2.08,16.97-17.57,33.36-36.17,54.38-49.11-.07-35.38,43.89-46.99,71.78-53.74,1.38-.33,1.84.04,1.42,1.42-5.53,18.05-25.93,42.44-43.72,49.28-12.29,4.72-24.31,2.03-34.57,8.43-14.24,8.89-27.32,24.04-38.69,36.31,6.82,2.69,8.09-6.05,11.95-10.05,18.99-19.63,50.96-6.74,73.53-2.45,1.16.29.47,1.31.03,2.01-2.75,4.35-16.7,13.95-21.64,16.36-13.41,6.54-31.14,9.11-45.24,3.5-7.37-2.94-11.36-9.47-20.93-6.66-4.55,1.34-25.58,28.93-29.52,34.48-3.29,4.64-12.58,17.34-14.17,21.83-1,2.82,5.58-.56,6-1,.9-.94,3.53-9.1,5.75-12.25,5.76-8.16,20.75-17.27,30.73-17.27h43l1.06,2.03c-13.36,19.94-41.02,38.11-65.81,34.71-10.24-1.41-16.8-10.17-26.17,1.35-8.68,10.66-28.7,55.97-32.13,69.87-.26,1.06-1.13,3.41.04,4.04,6.8-3.28,4.54-9.25,5.94-15.06,7.5-31,50.07-37.7,75.55-45.94-6.63,24.9-36.5,58.71-63.45,60.04-7.64.37-14.17-2.72-20.55,4.45-2.66,2.99-6.55,17.32-7.91,22.09-3.07,10.75-5.58,22.38-7.6,33.4-2.1,11.43-4.64,23.48-3.98,35.02,6.42-4.26,3.24-5.92,3.5-10.5,2.2-39.31,32.77-57.91,63.47-76.54.76-.46,1.75-1.99,2.53-.47-3.3,29.92-22.05,68.78-51.31,80.69-4.12,1.68-8.25,1.66-12.01,3.99-1.75,1.09-6.98,6.87-7.46,8.54-1.18,4.12-2.01,16.84-2.25,21.75-1.13,22.55,1.18,45.14,3.05,67.54,1.37,1.8,4.44-5.33,4.55-5.94.14-.79-4.39-11.57-4.45-15.45-.46-30.71,29.69-61.31,49.92-82.09.96-.98,1.3-1.88,2.98-1.52-.55,7.91.75,16.71,0,24.5Z" />
      </svg>
    )
    return (
      <div
        className={cn(
          "relative z-0",
          "flex flex-col items-center justify-center p-6",
          "overflow-hidden",
          className
        )}
      >
        <LaurelWreath />
        <div className="z-10 px-8 text-center">
          <div
            className={cn(
              "mt-6 mb-2 inline-block rounded-md px-4 py-1 tracking-wider text-white",
              `bg-gradient-to-r ${levelColors[level]}`
            )}
          >
            {level.toUpperCase()}
          </div>

          {/* Main Title */}
          <h1 className={cn("text-4xl font-black tracking-tight")}>{title}</h1>

          {/* Decorative Line */}
          <div className="bg-primary mx-auto my-3 h-[1px] w-40"></div>

          {/* Subtitle */}
          <h2 className={cn("mb-4 w-60 text-xl font-light")}>{subtitle}</h2>

          {/* Recipient */}
          {recipient && (
            <p className={cn("text-primary/60 italic")}>{recipient}</p>
          )}

          {/* Date */}
          <div className={cn("text-xl font-bold")}>{date}</div>
        </div>
      </div>
    )
  }

  if (variant === "certificate") {
    const Badge = () => (
      <svg
        className={cn("fill-primary -mt-12 h-18 w-full overflow-hidden")}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    )
    return (
      <div
        className={cn(
          "relative z-0",
          "flex flex-col items-center justify-center rounded-xl border-2 border-dotted p-2",
          "overflow-hidden",
          className
        )}
      >
        <div className="bg-card z-10 rounded-sm border p-6 px-8 text-center">
          <Badge />
          <h1
            className={cn(
              "mt-4 grid text-3xl leading-7 font-bold tracking-tighter uppercase"
            )}
          >
            Certificate
            <span className="text-sm font-light tracking-tight">
              {" "}
              of {title}
            </span>
          </h1>

          <p className="text-muted-foreground mt-4 mb-1 text-xs">
            This is to certify that
          </p>
          <h1
            className={cn(
              "text-primary mb-2 border-b text-xl font-semibold tracking-tight"
            )}
          >
            {recipient}
          </h1>

          <p className="text-muted-foreground mb-1 text-xs">{subtitle}</p>
          <div className="mt-6 flex justify-center">
            <Award strokeWidth={1} className="h-4 w-4" />
          </div>
          <div className={cn("mt-2 text-xs")}>Awarded on: {date}</div>
        </div>
      </div>
    )
  }

  if (variant === "badge") {
    const Badge = () => (
      <svg
        className={cn("fill-primary h-full w-18 overflow-hidden")}
        width="500.15"
        height="620.78"
        viewBox="0 0 500.15 620.78"
      >
        <path d="M453.85,385.1c16.99-26.81,1.62-58.47,18.76-87.24,12.03-20.19,29.82-36.18,27.29-62.46-2.84-29.52-33.04-48.63-35.87-75.13-2.33-21.77,2.23-43.54-9.49-63.51-17.52-29.86-57.27-24.53-79.03-47.97-14.71-15.84-24.1-37.76-46.27-45.73-31.05-11.17-56.45,12.73-85.44,9.44-22.25-2.52-42.24-16.43-65.98-11.43-26.93,5.68-36.44,28.9-52.83,47.17-18.28,20.39-48.97,19.08-69.44,36.56-23.39,19.97-16.36,46.88-19.55,73.45-3.37,28.13-28.95,43.88-34.69,70.31-8.97,41.31,30.51,58.13,34.69,93.72,2.55,21.68-2.27,42.21,9.85,62.15,13.67,22.49,41.07,24.3,62.09,35.93l-65.92,141.39,90.99-30,33.5,89,71.4-151.37c7.8-2.36,16.43-2.29,24.22-.03l69.89,151.41,35-89.01,90.98,30-65.92-141.4c20.6-11.4,47.98-13.54,61.74-35.28ZM431.43,373.69c-11.35,14.21-47.72,18.54-65.33,32.67-14.18,11.38-31.96,45.62-48.03,48.97-17.04,3.56-45.93-12.02-65.51-12.59-22.09-.65-52.83,16.31-70.6,12.59-14.66-3.06-30.11-30.64-40.43-41.57-19.15-20.28-38.59-19.72-60.89-31.11-25.19-12.87-17.89-36.67-19.64-60.36-2.27-30.87-18.47-40.83-31.16-64.84-16.91-32.01,19.44-52.21,27.88-81.45,5.54-19.2-.16-53.87,9.85-68.15,10.07-14.38,49.06-19.97,66.35-33.65,14.41-11.4,32.04-46.32,48.82-49.18,17.2-2.93,45.07,12.06,64.72,12.8,22.27.84,51.14-15.97,69.81-12.8,16.61,2.82,34.57,37.73,48.82,49.18,17.13,13.76,56.34,19.33,66.35,33.65,9.88,14.14,4.2,50.54,10.53,70.47,6.78,21.37,34.53,44.15,31.92,65.86-2.24,18.62-27.45,39.98-33.17,61.83-4.94,18.87.75,53.84-10.31,67.69Z" />
        <path d="M238.82,68.07C104.43,76.3,30.99,231.31,110.21,341.1c68.96,95.57,211.43,95.17,280.04-.59,84.76-118.31-7.09-281.26-151.43-272.43ZM374.44,319.7c-57.48,90.24-188.7,90.73-247.83,2-61.13-91.74-.65-219.62,109.21-228.61,122.55-10.03,205.2,122.08,138.62,226.62Z" />
        <path d="M259.84,157.96c8.2,18.06,16.68,44.63,40.38,45.97,0,0,27.28,3.19,27.28,3.19,9.06,1.06,12.7,12.26,5.99,18.45-14.64,13.38-37.29,29.66-31.24,52.61,0,0,5.39,26.93,5.39,26.93,1.79,8.94-7.74,15.87-15.69,11.4-17.24-9.79-39.73-26.3-59.69-13.45,0,0-23.94,13.45-23.94,13.45-7.95,4.47-17.48-2.46-15.69-11.4,3.98-19.43,12.74-45.91-5.65-60.92,0,0-20.19-18.61-20.19-18.61-6.71-6.18-3.07-17.39,5.99-18.45,19.71-2.21,47.6-2.07,56.19-24.2,0,0,11.46-24.96,11.46-24.96,3.81-8.29,15.59-8.29,19.39,0Z" />
      </svg>
    )
    return (
      <div className={cn("", className)}>
        <div
          className={cn("rounded-md border-4 p-4", "flex justify-start gap-3")}
        >
          <Badge />
          <div className={cn("border-l px-3")}>
            <h1
              className={cn("text-primary text-4xl font-bold tracking-tight")}
            >
              {title}
            </h1>
            <h2 className={cn("text-muted-foreground text-md font-light")}>
              {subtitle}
            </h2>

            <div className="mt-1 flex items-center gap-4 text-xs">
              {recipient && <p className={cn("italic")}>by {recipient}</p>}•
              <div className={cn("")}>{date}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Sticker Variant
  if (variant === "sticker") {
    return (
      <div
        className={cn(
          "relative inline-flex -rotate-5 transform items-center justify-center",
          className
        )}
      >
        <div className="relative text-center">
          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              transform: "translate(10px, 10px)",
              WebkitTextStroke: "10px white",
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              transform: "translate(10px, 10px)",
              WebkitTextStroke: "10px black",
            }}
          >
            {title}
          </span>

          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              transform: "translate(8px, 8px)",
              WebkitTextStroke: "10px white",
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              transform: "translate(8px, 8px)",
              WebkitTextStroke: "10px black",
            }}
          >
            {title}
          </span>

          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              transform: "translate(6px, 6px)",
              WebkitTextStroke: "10px white",
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              transform: "translate(6px, 6px)",
              WebkitTextStroke: "10px black",
            }}
          >
            {title}
          </span>

          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              transform: "translate(4px, 4px)",
              WebkitTextStroke: "10px white",
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              transform: "translate(4px, 4px)",
              WebkitTextStroke: "10px black",
            }}
          >
            {title}
          </span>

          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              transform: "translate(2px, 2px)",
              WebkitTextStroke: "10px white",
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              transform: "translate(2px, 2px)",
              WebkitTextStroke: "10px black",
            }}
          >
            {title}
          </span>

          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              WebkitTextStroke: "10px white",
              textShadow: `
                -1px -1px 0 white,
                1px -1px 0 white,
                -1px 1px 0 white,
                1px 1px 0 white,
                -1px 0 0 white,
                1px 0 0 white,
                0 -1px 0 white,
                0 1px 0 white
              `,
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              WebkitTextStroke: "10px black",
              textShadow: `
                -1px -1px 0 black,
                1px -1px 0 black,
                -1px 1px 0 black,
                1px 1px 0 black,
                -1px 0 0 black,
                1px 0 0 black,
                0 -1px 0 black,
                0 1px 0 black
              `,
            }}
          >
            {title}
          </span>

          <span
            className="text-primary absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              WebkitTextStroke: "0px black",
              textShadow: `
                -2px -2px 0 white,
                2px -2px 0 white,
                -2px 2px 0 white,
                2px 2px 0 white,
                -2px 0 0 white,
                2px 0 0 white,
                0 -2px 0 white,
                0 2px 0 white
              `,
            }}
          >
            {title}
          </span>

          <span
            className="text-primary absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              WebkitTextStroke: "0px white",
              textShadow: `
                -2px -2px 0 white,
                2px -2px 0 white,
                -2px 2px 0 white,
                2px 2px 0 white,
                -2px 0 0 white,
                2px 0 0 white,
                0 -2px 0 white,
                0 2px 0 white
              `,
            }}
          >
            {title}
          </span>

          <span
            className="text-primary relative text-7xl font-black tracking-tighter"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </span>
        </div>
      </div>
    )
  }

  if (variant === "id-card") {
    return (
      <div className={cn("flex bg-card items-center rounded-md border shadow-lg p-1 justify-center", className)}>
        <div className="relative h-100 w-72 rounded-sm overflow-hidden border-4">
          
          <span className="absolute top-8 right-8 flex h-4 w-4  items-center  justify-center">
            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-primary relative inline-flex h-3 w-3 rounded-full"></span>
          </span>

          <div className="mt-24 px-6">
            <div
              className={cn(
                "bg-secondary mb-4 w-fit rounded-md border px-4 py-2 text-xs"
              )}
            >
              {date}
            </div>
            <h1 className="text-5xl leading-tight font-bold">{title}</h1> 
            <p className="text-muted-foreground -mt-2 text-md font-light tracking-wider">
              {subtitle}
            </p>
          </div>
          <div className="absolute bottom-6 w-full border-t">
            <div className="mt-6 flex justify-between px-6">
              <div>
                <div className="text-xs">VIRTUAL</div>
                <div className="text-primary text-lg font-semibold">
                  {description}
                </div>
              </div>
              <div className="p-3"> 
                <svg
                width="24"
                height="24"
                viewBox="0 0 392.02 324.6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg" >
                 <path
                                fill="#fff200"
                                d="M268.08,0c-27.4,0-51.41,4.43-72.07,13.26C175.36,4.43,151.35,0,123.95,0H0v324.6h123.95c27.37,0,51.38-4.58,72.07-13.7,20.69,9.12,44.7,13.7,72.07,13.7h123.95V0h-123.95ZM324.09,268.36h-47.91c-20.25,0-37.3-4.05-51.18-12.15-12.28-7.17-21.94-17.41-28.99-30.7h0s0,0,0,0c0,0,0,0,0,0h0c-7.05,13.29-16.71,23.53-28.99,30.7-13.87,8.1-30.93,12.15-51.18,12.15h-47.91V56.24h47.91c19.8,0,36.67,4.01,50.61,12.04,12.51,7.2,22.35,17.47,29.55,30.77h0s0,0,0,0c0,0,0,0,0,0h0c7.2-13.3,17.04-23.57,29.55-30.77,13.95-8.02,30.82-12.04,50.61-12.04h47.91v212.13Z"
                            />
            </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default fallback
  return null
}


demo.tsx
import { Awards } from "@/components/ui/award";

export default function DemoOne() {
  return (
    <Awards
      variant="award"
      title="WINNER"
      subtitle="A Design Award & Competetion"
      recipient="Ali Imam"
      date="June 2025" 
      level="gold" 
    />
  )
}
```

Install NPM dependencies:
```bash
lucide-react
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
award.tsx
"use client"

import type React from "react"
 
import { Award, Star } from "lucide-react"

import { cn } from "@/lib/utils"

export interface AwardsComponentProps {
  variant?: "stamp" | "award" | "certificate" | "badge" | "sticker" | "id-card"
  title: string
  subtitle?: string
  description?: string
  date?: string
  recipient?: string
  level?: "bronze" | "silver" | "gold" | "platinum"
  className?: string
  showIcon?: boolean
  customIcon?: React.ReactNode
}

const levelColors = {
  bronze: "from-amber-600 to-amber-800",
  silver: "from-gray-400 to-gray-600",
  gold: "from-yellow-400 to-yellow-600",
  platinum: "from-slate-300 to-slate-500",
}

export function Awards({
  variant = "badge",
  title,
  subtitle,
  description,
  date,
  recipient,
  level = "gold",
  className,
  showIcon = true,
}: AwardsComponentProps) {
  // Stamp Variant
  if (variant === "stamp") {
    const createSerratedPath = () => {
      const radius = 96 // Half of 192px (w-48)
      const teeth = 40
      const innerRadius = radius - 8
      const outerRadius = radius

      let path = ""
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * 2 * Math.PI
        const r = i % 2 === 0 ? outerRadius : innerRadius
        const x = Math.cos(angle) * r + radius
        const y = Math.sin(angle) * r + radius

        if (i === 0) {
          path += `M ${x} ${y}`
        } else {
          path += ` L ${x} ${y}`
        }
      }
      path += " Z"
      return path
    }

    // Create curved text path
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createTextPath = (radius: number, id: string) => {
      const centerX = 96
      const centerY = 96
      return `M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`
    }
    return (
      <div
        className={cn(
          "relative mx-auto flex h-48 w-48 items-center justify-center",
          className
        )}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Define paths for curved text */}
            <path
              id="top-curve"
              d={createTextPath(55, "top-curve")}
              fill="none"
            />
            <path
              id="bottom-curve"
              d={createTextPath(60, "bottom-curve")}
              fill="none"
              transform="rotate(180 96 96)"
            />
          </defs>

          {/* Serrated border */}
          <path
            d={createSerratedPath()}
            strokeWidth="0.2"
            className="fill-white stroke-black dark:fill-black dark:stroke-white"
          />

          {/* Inner circle */}
          <circle
            cx="96"
            cy="96"
            r="78"
            className="fill-white stroke-black dark:fill-black dark:stroke-white"
            strokeWidth="0.2"
          />

          {/* Curved text - top */}
          <text className="fill-white text-xl font-bold">
            <textPath
              href="#top-curve"
              startOffset="50%"
              textAnchor="middle"
              className="fill-black dark:fill-white"
            >
              {title}
            </textPath>
          </text>

          {/* Curved text - bottom */}
          <text className="text-[10px] tracking-wider">
            <textPath
              href="#bottom-curve"
              startOffset="50%"
              textAnchor="middle"
              className="fill-black dark:fill-white"
            >
              {subtitle}
            </textPath>
          </text>
        </svg>

        <div className="relative z-10 text-center">
          {showIcon && (
            <div className="mb-1 flex justify-center text-center text-2xl">
              {<Star className="text-primary fill-primary" />}
            </div>
          )}
          {recipient && (
            <div className="text-primary mt-2 text-[14px]">{recipient}</div>
          )}

          {date && <div className="text-[10px] italic">{date}</div>}
        </div>
      </div>
    )
  }

  // Award Variant
  if (variant === "award") {
    const LaurelWreath = () => (
      <svg
        className={cn(
          "fill-primary absolute top-1/2 h-full w-full -translate-y-1/2"
        )}
        width="892.77"
        height="688.08"
        viewBox="0 0 892.77 688.08"
      >
        <path d="M892.6,358.7c-2.45,21.69-26.03,75.09-50.59,78.41-2.61.35-8.8-.53-10.21.3-.39.23-4.32,6.79-4.75,7.74-6.88,15.27-11.04,42.49-17.43,60.57-2.66,7.51-9.87,21.35-11.03,27.98-.1.58-.26,1.65.51,1.5,6.6-6.88,8.6-17.3,13.33-25.67,13.94-24.66,43.3-43.5,72.17-42.32-2.33,14.6-10.5,29.43-19.18,41.31-12.47,17.06-30.45,32.62-53.23,29.6-7.56-1-6.85-5.3-14.59,1.58-6.35,5.64-9.71,15.53-14.19,22.81-9.91,16.12-20.19,32.01-32.8,46.2,4.66.89,8.76-7.66,11.97-11.03,11.14-11.72,21.81-19.57,38.02-22.98,15.67-3.3,37.45-3.14,52.02,4.03-12.24,25.25-57.46,51.32-84.7,41.67-7.61-2.7-12.94-10.13-22.06-6.43-18.34,18.87-38.7,35.14-61.25,48.75,4.97,1.57,9.28-3.53,13.32-5.68,20.73-11.01,32.74-14.63,56.5-9.15,13.85,3.19,26.55,9.91,38.17,17.82-19.09,21.89-75.53,31.43-97.49,11.5-3.79-3.44-5.4-10.28-10.95-11.04-9.07-1.24-22.07,6.8-31.04,10.07-3.69,1.34-27.01,9.51-28.52,7.99.06-2.6-.8-5.29,1.57-6.93,1.5-1.04,17.65-4.87,21.68-6.32,8.48-3.06,22.88-8.38,30.46-12.54,9.12-5.01,2.78-21.66,2.3-29.72-1.18-19.76,7.83-43.47,20.48-58.5,1.79-2.13,19.39-19.37,21.51-16.98-2.82,28.58.11,60.88-19.03,84.46-2.69,3.03-6.49,6.06-10.06,7.94-4.12,2.16-9.31.65-8.9,7.59,1.27,1.23,11.02-5.38,12.91-6.58,10.31-6.56,22.01-15.72,31.1-23.9,2.59-2.34,19.93-19.11,20.44-20.46.23-.63-.39-11.92-.68-13.33-1.18-5.83-6.95-13.96-8.5-21.5-3.96-19.28-2.28-43.2,4.96-61.49,3.45-8.71,9.01-17.74,15.27-24.73,2.9,17.5,8.39,36.08,10.37,53.62,1.87,16.52.69,35.79-10.9,48.86-4.62,5.21-9.96,5.2-7.97,14.52,13.17-15.31,24.53-32.58,34.16-50.33,1.99-3.66,9.61-17.17,9.7-20.13.33-10.18-12.65-21.57-17.05-30.87-11.72-24.78-14.73-58.69-5.28-84.63.71-1.96,1.42-5.12,3.44-6.04,12.22,32.23,38.76,63.84,24.79,100.27-2.31,6.03-7.68,8.74-4.76,15.73,1.54-.25,1.89-1.87,2.47-3.02,7.87-15.49,14.88-42.87,18.84-60.16,1.87-8.16,6.12-21.11,2.85-28.5-4.29-9.69-11.33-11.15-18.64-17.35-24.62-20.88-33.84-58.75-31.52-89.97,1.97-.51,1.93.81,2.81,1.68,20.75,20.47,53.85,55.45,49.12,86.75-.44,2.9-3.52,7.02-3.71,9.23s2.82,4.83,2.79,7.33c1.42,1.39,1.82-.07,1.99-1.48.8-6.86,1.5-14.15,1.99-21.03,1.05-14.96,1.76-33.12,1.05-48.03-.45-9.51-.5-18.45-7.5-25.5-4.23-4.26-9.74-3.95-14.91-6.09-28.89-12.01-48.06-49.12-49.88-79.13-.07-1.11-2.03-1.97.73-1.73,23.64,16.34,59.89,35.61,63.41,67.59.81,7.39-3.03,17.42,5.1,20.39-.84-15.5-4.12-31.76-7.48-47.01-1.91-8.66-8.25-37.76-12.65-43.35-6.39-8.12-14.14-3.87-22.25-4.75-21.82-2.37-43.12-23.21-53.78-41.22-3.02-5.1-7.72-13-7.34-18.66,29.71,10.05,66.39,12.92,75.07,48.93,1.39,5.76-1.51,11.75,7.44,11.05-9.45-25.34-21.53-49.48-34.15-73.34-9.49-11.1-18.29-1.46-29.31-.62-24.24,1.85-49.97-15.79-62.53-35.54,12.16-1.78,27.18-2.45,39.53-1.53,14.47,1.07,29.13,6.2,36.65,19.35,3.12,5.45,2.93,14.34,10.8,11.68-7.94-13.11-17.24-26.37-27.04-38.45-2.54-3.14-13.54-16.92-15.98-18.02-7.78-3.53-11.89,2.2-17.3,4.66-22.22,10.12-48.27,3.4-65.69-12.67-1.12-1.03-7.02-6.35-5.98-7.51,17.62-2.11,36.48-11.68,54.24-7.75,8.57,1.89,16.8,6.91,22.19,13.81,2.88,3.69.83,6.42,7.06,6.94,1.49.12,2.92.63,2.49-1.49-8.92-8.7-17.38-18.05-26.98-26.03-3.66-3.04-13.47-11.25-17.29-12.71-4.55-1.73-10.25-.33-15.11-.89-27.28-3.12-48.71-29.1-57.58-53.4,1.55-2.18,1.45-.91,2.6-.65,29.66,6.66,68.48,16.71,70.87,53.16,21.14,14.84,39.62,33.01,57,52,.62-8.81-9.38-14.38-14.48-20.52-19.56-23.59-25.5-58.58-24.02-88.47.68-.79,10.44,7.02,11.52,7.97,20.16,17.57,37.02,49.29,34.52,76.57-1,10.9-9.52,15.89-4.29,28.21,1.81,4.26,14.83,18.08,18.66,23.34,9.6,13.17,19.55,27.31,26.6,41.91,1.62.09,2.24.49,1.98-1.47-.48-3.57-9.92-18.62-12.17-23.85-11.51-26.81-14.45-60.89-2.88-88.23.37-.88.81-2.87,2.06-1.96,9.94,12.98,16.87,28.86,21.49,44.52,5.8,19.65,9.83,40.98.04,60.03-1.45,2.82-4.93,5.59-5.48,8.51-2.09,11.08,6.07,21.31,10.12,30.78,7.21,16.81,14.1,33.95,18.83,51.67,1.58-.05,1.97-4.44,1.92-5.42-.27-5.28-7.25-19.63-8.64-27.37-4.67-26.05-2.53-50.65,10.53-73.88,1.45-2.57,4.8-8.51,6.73-10.28,1.69-1.54,1.69-.41,2.66,1.23,12.28,20.79,17.41,81.23,2.78,101.21-2.35,3.21-9.25,7.51-10.45,9.55-.39.66-3.05,12.36-3.11,13.43-.35,5.98,7.73,33.4,9.25,42.34,2.02,11.93,3.48,24.11,4.32,36.18,2.19-.58,1.95-2.71,2.05-4.46.4-6.52-1.93-15.33-2.11-22-.88-33.13,13.53-64.28,38.54-85.52,1.65-.03,3.41,14.23,3.55,16.43,1.54,24.35-4.14,74.1-26.52,88.57-6.99,4.52-12.38,3.46-14.29,13.71-2.29,12.31,3.05,32.46.81,45.81l-4.03,40.46c4.58-3.93,3.21-12.03,4.24-17.25,6.58-33.49,28.21-64.47,60.75-76.75-.37,4.65.51,9.94,0,14.5Z" />
        <path d="M122.6,347.7c-1.7,17.7-14.14,47.55-26.48,60.52-5.79,6.09-14.83,9.27-20.05,15.95-7.2,9.23-5.11,14.49-3.18,25.23,4.49,25.1,12.63,50.47,22.72,73.79,1.68-.31,2.16-5.36,2.02-6.44-.24-1.76-4.97-6.9-6.22-9.86-8.94-21.17-.97-44.77,8.01-64.37l18.18-35.83c12.17,28.27,10.36,66.34-4.83,93.18-4.82,8.52-16.69,18.39-14.52,29.1.83,4.09,6.01,13.72,8.18,17.9,9.33,17.95,21.89,36.15,35.16,51.33,1.78-8.72-2.17-7.86-6.5-12.99-25.68-30.41-7.81-69.51-2-104.01,20.14,23.8,27.35,62.58,18.27,92.26-3.14,10.27-9.76,17.88-6.25,29.71,18.74,19.75,39.22,38.23,63.47,51.02.89-8.43-5.47-6.33-10.34-9.15-4.61-2.67-12.11-11.32-15.06-15.94-13.97-21.88-9.34-50.93-13.57-75.43,4.11-.29,10.26,4.82,13.45,7.55,18.34,15.69,31.07,45.29,29.51,69.46-.49,7.59-5.43,18.51-.47,25.5,1.35,1.9,21.37,10.31,25.22,11.78,9.94,3.8,20.08,6.73,30.28,9.72l.98,7.51c-7.54-2.18-15.1-4.36-22.51-6.98-7.88-2.79-24.11-11.27-30.95-12.04-11.89-1.35-11.52,5.99-19.05,12-20.85,16.65-61.75,9.86-83.5-2.46-2.07-1.18-13.19-7.73-11.54-10.53,21.13-14.47,48.69-24.76,74.34-17.26,10.95,3.2,20.18,11.91,29.19,14.81,1.02.33,5.04,1.53,5.02-.51-11.82-6.39-24.42-14.2-34.91-22.59-6.02-4.82-23.27-23.82-27.5-25.5-9.8-3.9-9.91.63-16.9,4.26-26.89,13.94-71.69-11.42-87.08-34.28-1.05-1.55-3.6-3.96-2.17-5.96,3.81-5.34,36.79-5.58,43.94-4.81,18.64,1.99,33.72,11.44,46.14,24.86,3.15,3.4,6.26,11.64,11.48,10.52-10.1-11.12-19.65-23.71-27.41-36.58-5-8.3-11.58-25.16-17.59-31.41-7.79-8.1-10.21-3.34-18.5-2.52-24.7,2.44-44.75-17.93-56.91-37.07-6.3-9.93-12.8-22.08-13.59-33.92,33.98-.41,60.36,19.86,75.52,48.98,3.34,6.42,4.42,14.83,10.47,19.02-6.28-16.37-13.32-32.34-18.26-49.23s-6.28-33.8-14.89-48.61c-33.08,1.59-49.47-37.67-57.35-64.16-2.91-9.81-5.26-18.73-3.5-28.99,26.83,9.2,52.19,40.65,58.53,67.96,1.93,8.33.98,19.55,6.46,26.03-5.71-27.36-4-55.47-3.25-83.24-.33-2.46-2.64-10.16-4.27-11.73-1.84-1.78-8.46-3.44-11.41-5.59-21.82-15.94-28.32-68.11-24.94-92.82.26-1.88,2.02-11.61,3.38-11.6,24.77,21.31,40.05,54.58,38.49,87.47-.37,7.9-3.74,17.25-1.49,24.51,1.87-1.18,1.21-2.88,1.51-4.49,2.56-13.9,3.69-28.54,6.31-42.69,1.26-6.78,7.5-26.71,7.24-31.33-.05-.87-2.77-11.88-3.12-12.42-.93-1.43-6.38-5.09-8.41-7.59-17.02-20.94-12.69-82.05.77-104.18.86-1.41,1.09-3.01,2.65-1.25,3.37,3.78,8.96,15.02,11.03,19.97,8.44,20.2,10.18,39.73,6.24,61.21-1.57,8.58-8.23,23.74-8.7,30.39-.09,1.31.19,5.98,1.96,6.38,2.2-9.93,5.59-20.68,9.26-30.24,4.82-12.57,15.43-28.92,18.49-40.51.76-2.89,1.78-9.95,1.23-12.72-.47-2.38-6.17-8.59-7.75-12.24-9.36-21.65.56-56.02,9.6-76.95.98-2.26,12.81-26.07,15.16-24.32,12.15,28.6,10.64,62.39-1.81,90.67-2.46,5.58-10.57,17.48-11.2,21.81-.14.96-.63,3.81,1.01,3.51,4.3-10.16,10.59-19.63,16.79-28.71,6.7-9.82,24.02-28.29,27.92-37.08,5.11-11.53.33-12.38-2.74-21.66-7.05-21.37,8.26-54.53,22.07-71.01,3.38-4.04,17.33-17.9,21.49-19.52,1.73-.68,1.35.43,1.49,1.47,3.89,29.17-8.37,67.53-27.03,89.99-4.6,5.54-11.32,8.61-11.97,16.52,1.97.46,2.37-1.01,3.41-2.08,16.97-17.57,33.36-36.17,54.38-49.11-.07-35.38,43.89-46.99,71.78-53.74,1.38-.33,1.84.04,1.42,1.42-5.53,18.05-25.93,42.44-43.72,49.28-12.29,4.72-24.31,2.03-34.57,8.43-14.24,8.89-27.32,24.04-38.69,36.31,6.82,2.69,8.09-6.05,11.95-10.05,18.99-19.63,50.96-6.74,73.53-2.45,1.16.29.47,1.31.03,2.01-2.75,4.35-16.7,13.95-21.64,16.36-13.41,6.54-31.14,9.11-45.24,3.5-7.37-2.94-11.36-9.47-20.93-6.66-4.55,1.34-25.58,28.93-29.52,34.48-3.29,4.64-12.58,17.34-14.17,21.83-1,2.82,5.58-.56,6-1,.9-.94,3.53-9.1,5.75-12.25,5.76-8.16,20.75-17.27,30.73-17.27h43l1.06,2.03c-13.36,19.94-41.02,38.11-65.81,34.71-10.24-1.41-16.8-10.17-26.17,1.35-8.68,10.66-28.7,55.97-32.13,69.87-.26,1.06-1.13,3.41.04,4.04,6.8-3.28,4.54-9.25,5.94-15.06,7.5-31,50.07-37.7,75.55-45.94-6.63,24.9-36.5,58.71-63.45,60.04-7.64.37-14.17-2.72-20.55,4.45-2.66,2.99-6.55,17.32-7.91,22.09-3.07,10.75-5.58,22.38-7.6,33.4-2.1,11.43-4.64,23.48-3.98,35.02,6.42-4.26,3.24-5.92,3.5-10.5,2.2-39.31,32.77-57.91,63.47-76.54.76-.46,1.75-1.99,2.53-.47-3.3,29.92-22.05,68.78-51.31,80.69-4.12,1.68-8.25,1.66-12.01,3.99-1.75,1.09-6.98,6.87-7.46,8.54-1.18,4.12-2.01,16.84-2.25,21.75-1.13,22.55,1.18,45.14,3.05,67.54,1.37,1.8,4.44-5.33,4.55-5.94.14-.79-4.39-11.57-4.45-15.45-.46-30.71,29.69-61.31,49.92-82.09.96-.98,1.3-1.88,2.98-1.52-.55,7.91.75,16.71,0,24.5Z" />
      </svg>
    )
    return (
      <div
        className={cn(
          "relative z-0",
          "flex flex-col items-center justify-center p-6",
          "overflow-hidden",
          className
        )}
      >
        <LaurelWreath />
        <div className="z-10 px-8 text-center">
          <div
            className={cn(
              "mt-6 mb-2 inline-block rounded-md px-4 py-1 tracking-wider text-white",
              `bg-gradient-to-r ${levelColors[level]}`
            )}
          >
            {level.toUpperCase()}
          </div>

          {/* Main Title */}
          <h1 className={cn("text-4xl font-black tracking-tight")}>{title}</h1>

          {/* Decorative Line */}
          <div className="bg-primary mx-auto my-3 h-[1px] w-40"></div>

          {/* Subtitle */}
          <h2 className={cn("mb-4 w-60 text-xl font-light")}>{subtitle}</h2>

          {/* Recipient */}
          {recipient && (
            <p className={cn("text-primary/60 italic")}>{recipient}</p>
          )}

          {/* Date */}
          <div className={cn("text-xl font-bold")}>{date}</div>
        </div>
      </div>
    )
  }

  if (variant === "certificate") {
    const Badge = () => (
      <svg
        className={cn("fill-primary -mt-12 h-18 w-full overflow-hidden")}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    )
    return (
      <div
        className={cn(
          "relative z-0",
          "flex flex-col items-center justify-center rounded-xl border-2 border-dotted p-2",
          "overflow-hidden",
          className
        )}
      >
        <div className="bg-card z-10 rounded-sm border p-6 px-8 text-center">
          <Badge />
          <h1
            className={cn(
              "mt-4 grid text-3xl leading-7 font-bold tracking-tighter uppercase"
            )}
          >
            Certificate
            <span className="text-sm font-light tracking-tight">
              {" "}
              of {title}
            </span>
          </h1>

          <p className="text-muted-foreground mt-4 mb-1 text-xs">
            This is to certify that
          </p>
          <h1
            className={cn(
              "text-primary mb-2 border-b text-xl font-semibold tracking-tight"
            )}
          >
            {recipient}
          </h1>

          <p className="text-muted-foreground mb-1 text-xs">{subtitle}</p>
          <div className="mt-6 flex justify-center">
            <Award strokeWidth={1} className="h-4 w-4" />
          </div>
          <div className={cn("mt-2 text-xs")}>Awarded on: {date}</div>
        </div>
      </div>
    )
  }

  if (variant === "badge") {
    const Badge = () => (
      <svg
        className={cn("fill-primary h-full w-18 overflow-hidden")}
        width="500.15"
        height="620.78"
        viewBox="0 0 500.15 620.78"
      >
        <path d="M453.85,385.1c16.99-26.81,1.62-58.47,18.76-87.24,12.03-20.19,29.82-36.18,27.29-62.46-2.84-29.52-33.04-48.63-35.87-75.13-2.33-21.77,2.23-43.54-9.49-63.51-17.52-29.86-57.27-24.53-79.03-47.97-14.71-15.84-24.1-37.76-46.27-45.73-31.05-11.17-56.45,12.73-85.44,9.44-22.25-2.52-42.24-16.43-65.98-11.43-26.93,5.68-36.44,28.9-52.83,47.17-18.28,20.39-48.97,19.08-69.44,36.56-23.39,19.97-16.36,46.88-19.55,73.45-3.37,28.13-28.95,43.88-34.69,70.31-8.97,41.31,30.51,58.13,34.69,93.72,2.55,21.68-2.27,42.21,9.85,62.15,13.67,22.49,41.07,24.3,62.09,35.93l-65.92,141.39,90.99-30,33.5,89,71.4-151.37c7.8-2.36,16.43-2.29,24.22-.03l69.89,151.41,35-89.01,90.98,30-65.92-141.4c20.6-11.4,47.98-13.54,61.74-35.28ZM431.43,373.69c-11.35,14.21-47.72,18.54-65.33,32.67-14.18,11.38-31.96,45.62-48.03,48.97-17.04,3.56-45.93-12.02-65.51-12.59-22.09-.65-52.83,16.31-70.6,12.59-14.66-3.06-30.11-30.64-40.43-41.57-19.15-20.28-38.59-19.72-60.89-31.11-25.19-12.87-17.89-36.67-19.64-60.36-2.27-30.87-18.47-40.83-31.16-64.84-16.91-32.01,19.44-52.21,27.88-81.45,5.54-19.2-.16-53.87,9.85-68.15,10.07-14.38,49.06-19.97,66.35-33.65,14.41-11.4,32.04-46.32,48.82-49.18,17.2-2.93,45.07,12.06,64.72,12.8,22.27.84,51.14-15.97,69.81-12.8,16.61,2.82,34.57,37.73,48.82,49.18,17.13,13.76,56.34,19.33,66.35,33.65,9.88,14.14,4.2,50.54,10.53,70.47,6.78,21.37,34.53,44.15,31.92,65.86-2.24,18.62-27.45,39.98-33.17,61.83-4.94,18.87.75,53.84-10.31,67.69Z" />
        <path d="M238.82,68.07C104.43,76.3,30.99,231.31,110.21,341.1c68.96,95.57,211.43,95.17,280.04-.59,84.76-118.31-7.09-281.26-151.43-272.43ZM374.44,319.7c-57.48,90.24-188.7,90.73-247.83,2-61.13-91.74-.65-219.62,109.21-228.61,122.55-10.03,205.2,122.08,138.62,226.62Z" />
        <path d="M259.84,157.96c8.2,18.06,16.68,44.63,40.38,45.97,0,0,27.28,3.19,27.28,3.19,9.06,1.06,12.7,12.26,5.99,18.45-14.64,13.38-37.29,29.66-31.24,52.61,0,0,5.39,26.93,5.39,26.93,1.79,8.94-7.74,15.87-15.69,11.4-17.24-9.79-39.73-26.3-59.69-13.45,0,0-23.94,13.45-23.94,13.45-7.95,4.47-17.48-2.46-15.69-11.4,3.98-19.43,12.74-45.91-5.65-60.92,0,0-20.19-18.61-20.19-18.61-6.71-6.18-3.07-17.39,5.99-18.45,19.71-2.21,47.6-2.07,56.19-24.2,0,0,11.46-24.96,11.46-24.96,3.81-8.29,15.59-8.29,19.39,0Z" />
      </svg>
    )
    return (
      <div className={cn("", className)}>
        <div
          className={cn("rounded-md border-4 p-4", "flex justify-start gap-3")}
        >
          <Badge />
          <div className={cn("border-l px-3")}>
            <h1
              className={cn("text-primary text-4xl font-bold tracking-tight")}
            >
              {title}
            </h1>
            <h2 className={cn("text-muted-foreground text-md font-light")}>
              {subtitle}
            </h2>

            <div className="mt-1 flex items-center gap-4 text-xs">
              {recipient && <p className={cn("italic")}>by {recipient}</p>}•
              <div className={cn("")}>{date}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Sticker Variant
  if (variant === "sticker") {
    return (
      <div
        className={cn(
          "relative inline-flex -rotate-5 transform items-center justify-center",
          className
        )}
      >
        <div className="relative text-center">
          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              transform: "translate(10px, 10px)",
              WebkitTextStroke: "10px white",
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              transform: "translate(10px, 10px)",
              WebkitTextStroke: "10px black",
            }}
          >
            {title}
          </span>

          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              transform: "translate(8px, 8px)",
              WebkitTextStroke: "10px white",
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              transform: "translate(8px, 8px)",
              WebkitTextStroke: "10px black",
            }}
          >
            {title}
          </span>

          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              transform: "translate(6px, 6px)",
              WebkitTextStroke: "10px white",
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              transform: "translate(6px, 6px)",
              WebkitTextStroke: "10px black",
            }}
          >
            {title}
          </span>

          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              transform: "translate(4px, 4px)",
              WebkitTextStroke: "10px white",
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              transform: "translate(4px, 4px)",
              WebkitTextStroke: "10px black",
            }}
          >
            {title}
          </span>

          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              transform: "translate(2px, 2px)",
              WebkitTextStroke: "10px white",
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              transform: "translate(2px, 2px)",
              WebkitTextStroke: "10px black",
            }}
          >
            {title}
          </span>

          <span
            className="absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              WebkitTextStroke: "10px white",
              textShadow: `
                -1px -1px 0 white,
                1px -1px 0 white,
                -1px 1px 0 white,
                1px 1px 0 white,
                -1px 0 0 white,
                1px 0 0 white,
                0 -1px 0 white,
                0 1px 0 white
              `,
            }}
          >
            {title}
          </span>

          <span
            className="absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              WebkitTextStroke: "10px black",
              textShadow: `
                -1px -1px 0 black,
                1px -1px 0 black,
                -1px 1px 0 black,
                1px 1px 0 black,
                -1px 0 0 black,
                1px 0 0 black,
                0 -1px 0 black,
                0 1px 0 black
              `,
            }}
          >
            {title}
          </span>

          <span
            className="text-primary absolute hidden text-7xl font-black tracking-tighter dark:block"
            style={{
              WebkitTextStroke: "0px black",
              textShadow: `
                -2px -2px 0 white,
                2px -2px 0 white,
                -2px 2px 0 white,
                2px 2px 0 white,
                -2px 0 0 white,
                2px 0 0 white,
                0 -2px 0 white,
                0 2px 0 white
              `,
            }}
          >
            {title}
          </span>

          <span
            className="text-primary absolute block text-7xl font-black tracking-tighter dark:hidden"
            style={{
              WebkitTextStroke: "0px white",
              textShadow: `
                -2px -2px 0 white,
                2px -2px 0 white,
                -2px 2px 0 white,
                2px 2px 0 white,
                -2px 0 0 white,
                2px 0 0 white,
                0 -2px 0 white,
                0 2px 0 white
              `,
            }}
          >
            {title}
          </span>

          <span
            className="text-primary relative text-7xl font-black tracking-tighter"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </span>
        </div>
      </div>
    )
  }

  if (variant === "id-card") {
    return (
      <div className={cn("flex bg-card items-center rounded-md border shadow-lg p-1 justify-center", className)}>
        <div className="relative h-100 w-72 rounded-sm overflow-hidden border-4">
          
          <span className="absolute top-8 right-8 flex h-4 w-4  items-center  justify-center">
            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-primary relative inline-flex h-3 w-3 rounded-full"></span>
          </span>

          <div className="mt-24 px-6">
            <div
              className={cn(
                "bg-secondary mb-4 w-fit rounded-md border px-4 py-2 text-xs"
              )}
            >
              {date}
            </div>
            <h1 className="text-5xl leading-tight font-bold">{title}</h1> 
            <p className="text-muted-foreground -mt-2 text-md font-light tracking-wider">
              {subtitle}
            </p>
          </div>
          <div className="absolute bottom-6 w-full border-t">
            <div className="mt-6 flex justify-between px-6">
              <div>
                <div className="text-xs">VIRTUAL</div>
                <div className="text-primary text-lg font-semibold">
                  {description}
                </div>
              </div>
              <div className="p-3"> 
                <svg
                width="24"
                height="24"
                viewBox="0 0 392.02 324.6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg" >
                 <path
                                fill="#fff200"
                                d="M268.08,0c-27.4,0-51.41,4.43-72.07,13.26C175.36,4.43,151.35,0,123.95,0H0v324.6h123.95c27.37,0,51.38-4.58,72.07-13.7,20.69,9.12,44.7,13.7,72.07,13.7h123.95V0h-123.95ZM324.09,268.36h-47.91c-20.25,0-37.3-4.05-51.18-12.15-12.28-7.17-21.94-17.41-28.99-30.7h0s0,0,0,0c0,0,0,0,0,0h0c-7.05,13.29-16.71,23.53-28.99,30.7-13.87,8.1-30.93,12.15-51.18,12.15h-47.91V56.24h47.91c19.8,0,36.67,4.01,50.61,12.04,12.51,7.2,22.35,17.47,29.55,30.77h0s0,0,0,0c0,0,0,0,0,0h0c7.2-13.3,17.04-23.57,29.55-30.77,13.95-8.02,30.82-12.04,50.61-12.04h47.91v212.13Z"
                            />
            </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default fallback
  return null
}


demo.tsx
import { Awards } from "@/components/ui/award";

export default function DemoOne() {
  return (
    <Awards
      variant="award"
      title="WINNER"
      subtitle="A Design Award & Competetion"
      recipient="Ali Imam"
      date="June 2025" 
      level="gold" 
    />
  )
}
```

Install NPM dependencies:
```bash
lucide-react
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
voice-input.tsx
"use client"

import React from "react"
import { Mic } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

interface VoiceInputProps {
  onStart?: () => void
  onStop?: () => void
}

export function VoiceInput({
  className,
  onStart,
  onStop,
}: React.ComponentProps<"div"> & VoiceInputProps) {
  const [_listening, _setListening] = React.useState<boolean>(false)
  const [_time, _setTime] = React.useState<number>(0)

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (_listening) {
      onStart?.()
      intervalId = setInterval(() => {
        _setTime((t) => t + 1)
      }, 1000)
    } else {
      onStop?.()
      _setTime(0)
    }

    return () => clearInterval(intervalId)
  }, [_listening])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const onClickHandler = () => {
    _setListening(!_listening)
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <motion.div
        className="flex p-2 border items-center justify-center rounded-full cursor-pointer"
        layout
        transition={{
          layout: {
            duration: 0.4,
          },
        }}
        onClick={onClickHandler}
      >
        <div className="h-6 w-6 items-center justify-center flex ">
          {_listening ? (
            <motion.div
              className="w-4 h-4 bg-primary rounded-sm"
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ) : (
            <Mic />
          )}
        </div>
        <AnimatePresence mode="wait">
          {_listening && (
            <motion.div
              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
              animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
              exit={{ opacity: 0, width: 0, marginLeft: 0 }}
              transition={{
                duration: 0.4,
              }}
              className="overflow-hidden flex gap-2 items-center justify-center"
            >
              {/* Frequency Animation */}
              <div className="flex gap-0.5 items-center justify-center">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-primary rounded-full"
                    initial={{ height: 2 }}
                    animate={{
                      height: _listening
                        ? [2, 3 + Math.random() * 10, 3 + Math.random() * 5, 2]
                        : 2,
                    }}
                    transition={{
                      duration: _listening ? 1 : 0.3,
                      repeat: _listening ? Infinity : 0,
                      delay: _listening ? i * 0.05 : 0,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              {/* Timer */}
              <div className="text-xs text-muted-foreground w-10 text-center">
                {formatTime(_time)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}


demo.tsx
import { VoiceInput } from "@/components/ui/voice-input";

export default function DemoOne() {
  return <VoiceInput />;
}

```

Install NPM dependencies:
```bash
motion, lucide-react
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
voice-input.tsx
"use client"

import React from "react"
import { Mic } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

interface VoiceInputProps {
  onStart?: () => void
  onStop?: () => void
}

export function VoiceInput({
  className,
  onStart,
  onStop,
}: React.ComponentProps<"div"> & VoiceInputProps) {
  const [_listening, _setListening] = React.useState<boolean>(false)
  const [_time, _setTime] = React.useState<number>(0)

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (_listening) {
      onStart?.()
      intervalId = setInterval(() => {
        _setTime((t) => t + 1)
      }, 1000)
    } else {
      onStop?.()
      _setTime(0)
    }

    return () => clearInterval(intervalId)
  }, [_listening])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const onClickHandler = () => {
    _setListening(!_listening)
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <motion.div
        className="flex p-2 border items-center justify-center rounded-full cursor-pointer"
        layout
        transition={{
          layout: {
            duration: 0.4,
          },
        }}
        onClick={onClickHandler}
      >
        <div className="h-6 w-6 items-center justify-center flex ">
          {_listening ? (
            <motion.div
              className="w-4 h-4 bg-primary rounded-sm"
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ) : (
            <Mic />
          )}
        </div>
        <AnimatePresence mode="wait">
          {_listening && (
            <motion.div
              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
              animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
              exit={{ opacity: 0, width: 0, marginLeft: 0 }}
              transition={{
                duration: 0.4,
              }}
              className="overflow-hidden flex gap-2 items-center justify-center"
            >
              {/* Frequency Animation */}
              <div className="flex gap-0.5 items-center justify-center">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-primary rounded-full"
                    initial={{ height: 2 }}
                    animate={{
                      height: _listening
                        ? [2, 3 + Math.random() * 10, 3 + Math.random() * 5, 2]
                        : 2,
                    }}
                    transition={{
                      duration: _listening ? 1 : 0.3,
                      repeat: _listening ? Infinity : 0,
                      delay: _listening ? i * 0.05 : 0,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              {/* Timer */}
              <div className="text-xs text-muted-foreground w-10 text-center">
                {formatTime(_time)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}


demo.tsx
import { VoiceInput } from "@/components/ui/voice-input";

export default function DemoOne() {
  return <VoiceInput />;
}

```

Install NPM dependencies:
```bash
motion, lucide-react
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
product-card-1.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  ShoppingCart,
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
  Loader2,
} from "lucide-react";

export interface ProductCardProps {
  name?: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  images?: string[];
  colors?: string[];
  sizes?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  discount?: number;
  freeShipping?: boolean;
}

export function ProductCard({
  name = "Premium Wool Sweater",
  price = 89.99,
  originalPrice = 129.99,
  rating = 4.8,
  reviewCount = 142,
  images = ["/logo.svg", "/logo.svg", "/logo.svg"],
  colors = ["#1e293b", "#a855f7", "#0ea5e9", "#84cc16"],
  sizes = ["XS", "S", "M", "L", "XL"],
  isNew = true,
  isBestSeller = true,
  discount = 30,
  freeShipping = true,
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    if (isAddedToCart) return;
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 2000);
    }, 800);
  };

  return (
    <Card className="  w-full max-w-sm overflow-hidden group bg-backgrou text-foreground shadow-xl hover:shadow-lg transition-all duration-300 rounded-md">
      {/* Image carousel */}
      <div className="relative aspect-[3/4] overflow-hidden ">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`${name} - View ${currentImageIndex + 1}`}
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentImageIndex ? "bg-primary w-4" : "bg-primary/30"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-blue-500 hover:bg-blue-500/90">New</Badge>
          )}
          {isBestSeller && (
            <Badge className="bg-amber-500 hover:bg-amber-500/90">
              Best Seller
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-rose-500 hover:bg-rose-500/90">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <Button
          variant="secondary"
          size="icon"
          className={`absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm ${
            isWishlisted ? "text-rose-500" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
        >
          <Heart
            className={`h-4 w-4 ${isWishlisted ? "fill-rose-500" : ""}`}
          />
        </Button>
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-medium line-clamp-1">{name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                <span className="ml-1 text-sm font-medium">{rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                ({reviewCount} reviews)
              </span>
              {freeShipping && (
                <span className="text-xs text-emerald-600 ml-auto">
                  Free shipping
                </span>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold">${price.toFixed(2)}</span>
            {originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Colors & Sizes */}
          <div className="space-y-3">
            <div className="space-y-1.5">
              <div className="text-xs text-muted-foreground">Colors</div>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full transition-all ${
                      selectedColor === color
                        ? "ring-2 ring-primary ring-offset-2"
                        : "ring-1 ring-muted hover:ring-primary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs text-muted-foreground">Sizes</div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`min-w-[2.5rem] h-8 px-2 rounded-md text-xs font-medium transition-all ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/60 hover:bg-muted"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={isAddingToCart || isAddedToCart}
        >
          {isAddingToCart ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Adding...
            </>
          ) : isAddedToCart ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}


demo.tsx
import { ProductCard } from "@/components/ui/product-card-1";

export default function DemoOne() {
  return <ProductCard   name="Nike Air Force"
        price={129.99}
        originalPrice={169.99}
        rating={4.7}
        reviewCount={325}
        discount={25}
        freeShipping
        isNew
        isBestSeller
        colors={["#1e293b", "#f43f5e", "#0ea5e9", "#10b981"]}
        sizes={["38", "39", "40", "41", "42", "43"]}
        images={[
          "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1656230259229-aa2634e3352c?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]} />;
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
shadcn/badge
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```

Install NPM dependencies:
```bash
lucide-react, framer-motion, @radix-ui/react-slot, class-variance-authority
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
backed-by-yc.tsx
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export const Component = () => {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = hostRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="min-h-[40vh] w-full flex items-center justify-center p-8">
      <div
        ref={hostRef}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full",
          "px-2 py-2 isolate select-none"
        )}
        style={
          {
            ["--mx" as any]: "50%",
            ["--my" as any]: "50%",
          } as React.CSSProperties
        }
      >
        {/* Subtle moving glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full"
        >
          <div
            className={cn(
              "absolute inset-0 rounded-full",
              "bg-[radial-gradient(160px_80px_at_var(--mx)_var(--my),rgba(255,140,0,0.24),transparent_70%)]",
              "blur-2xl"
            )}
          />
        </div>

        {/* Glass pill */}
        <div
          className={cn(
            "relative z-10 rounded-full px-4 py-2",
            "backdrop-blur-xl",
            "bg-white/15",
            "ring-1 ring-black/5 dark:ring-white/10",
            "shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          )}
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "h-6 w-6 shrink-0 rounded-md grid place-items-center",
                "bg-[#FC6A21]",
                "shadow-[0_2px_10px_rgba(252,106,33,0.55)]"
              )}
              aria-hidden="true"
            >
              <YCMonogram className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm md:text-base font-medium tracking-wide text-neutral-800 dark:text-white">
              Backed by Y Combinator
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function YCMonogram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 5h3.2l2.8 5 2.8-5H18l-4.6 8v6h-2.8v-6L6 5z"
        fill="currentColor"
      />
    </svg>
  );
}

demo.tsx
import { Component } from "@/components/ui/backed-by-yc";

export default function DemoOne() {
  return <Component />;
}

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
animated-badge.tsx
"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "motion/react"

type AnimatedBadgeProps = {
  text?: string
  color?: string // hex or css color value
  href?: string // optional redirect link
}

function hexToRgba(hexColor: string, alpha: number): string {
  const hex = hexColor.replace("#", "")
  if (hex.length === 3) {
    const r = parseInt(hex[0] + hex[0], 16)
    const g = parseInt(hex[1] + hex[1], 16)
    const b = parseInt(hex[2] + hex[2], 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  if (hex.length === 6) {
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return hexColor
}

export const AnimatedBadge = ({
  text = "Introducing Eldoraui",
  color = "#22d3ee",
  href,
}: AnimatedBadgeProps) => {
  const content = (
    <motion.div
      initial={false}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="group relative flex max-w-fit items-center justify-center gap-3 rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-neutral-700 transition-colors dark:border-neutral-700/80 dark:bg-black dark:text-zinc-300"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-full h-20 w-[165px]">
        <svg
          className="h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 50 50"
          fill="none"
        >
          {/* <g stroke="#fff" strokeWidth="0.4">
              <path d="M 69 49.8 h -30 q -3 0 -3 -3 v -15 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -15 q 0 -3 -3 -3 h -30" />
            </g> */}
          <g mask="url(#ml-mask-1)">
            <circle
              className="multiline ml-light-1"
              cx="0"
              cy="0"
              r="20"
              fill="url(#ml-white-grad)"
            />
          </g>
          <defs>
            <mask id="ml-mask-1">
              <path
                d="M 69 49.8 h -30 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -30"
                strokeWidth="0.6"
                stroke="white"
              />
            </mask>
            <radialGradient id="ml-white-grad" fx="1">
              <stop offset="0%" stopColor={color} />
              <stop offset="20%" stopColor={color} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div
        className="relative flex h-1 w-1 items-center justify-center rounded-full"
        style={{ backgroundColor: hexToRgba(color, 0.4) }}
      >
        <div
          className="flex h-2 w-2 animate-ping items-center justify-center rounded-full"
          style={{ backgroundColor: color }}
        >
          <div
            className="flex h-2 w-2 animate-ping items-center justify-center rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <div
          className="absolute top-1/2 left-1/2 flex h-1 w-1 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          style={{ backgroundColor: hexToRgba(color, 0.8) }}
        ></div>
      </div>
      <div className="mx-2 h-4 w-px bg-neutral-300 dark:bg-neutral-600/80" />
      <span className="bg-clip-text text-xs font-medium">{text}</span>
      <ChevronRight className="ml-1 h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 dark:text-neutral-500" />
    </motion.div>
  )
  return (
    <>
      {href ? (
        <Link href={href} className="inline-block">
          {content}
        </Link>
      ) : (
        content
      )}
      <style>
        {`    
.multiline {
  offset-anchor: 10px 0px;
  animation: multiline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 3s;
}

.ml-light-1 {
  offset-path: path(
    "M 69 49.8 h -30 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -50"
  );
}

@keyframes multiline-animation-path {
  0% {
    offset-distance: 0%;
  }
  50% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}`}
      </style>
    </>
  )
}



demo.tsx
import { AnimatedBadge } from "@/components/ui/animated-badge";

export default function AnimatedBadgeDemo() {
  return(
  <AnimatedBadge
  text="Introducing Eldora ui"
  color="#22d3ee"
  href="/docs/components/animated-badge"
/>
)
}

```

Install NPM dependencies:
```bash
next, motion, lucide-react
```





