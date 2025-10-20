# Alerts (23 available)

## Cherry-Picked Components from 21st.dev

<!-- Add your selected alert components here -->

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
team-invitation.tsx
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import Image from "next/image";

export function TeamInvitation() {
    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
                <div className="flex items-center gap-4">
                    <div className="relative h-10 w-10 flex-shrink-0">
                        <Image
                            src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
                            alt="Sarah Chen"
                            sizes="40px"
                            fill
                            className="rounded-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-zinc-950" />
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Team Invitation
                                </p>
                                <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                                    Kokonut invited you to join{" "}
                                    <span className="font-medium text-zinc-700 dark:text-zinc-300">
                                        Design Team
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="rounded-lg flex items-center justify-center h-8 w-8 p-0 hover:bg-red-50 dark:hover:bg-red-950/50 text-zinc-400 hover:text-red-600 dark:text-zinc-500 dark:hover:text-red-400 transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            className={cn(
                                "rounded-lg flex items-center justify-center h-8 w-8 p-0",
                                "hover:bg-emerald-50 dark:hover:bg-emerald-950/50",
                                "text-zinc-400 hover:text-emerald-600",
                                "dark:text-zinc-500 dark:hover:text-emerald-400",
                                "transition-colors"
                            )}
                        >
                            <Check className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="mt-2 ml-14">
                    <p className="text-[12px] text-zinc-400 dark:text-zinc-500">
                        Invited 5 minutes ago
                    </p>
                </div>
            </div>
        </div>
    );
}

export { TeamInvitation }


demo.tsx
import { TeamInvitation } from "@/components/ui/team-invitation";
import { LucideIcon } from "lucide-react";


export function DemoTeamInvitation() {
    return <TeamInvitation />
}

export { DemoTeamInvitation }
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
alert.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva("relative rounded-lg border", {
  variants: {
    variant: {
      default: "border-border bg-background",
      warning: "border-amber-500/50 text-amber-600",
      error: "border-red-500/50 text-red-600",
      success: "border-emerald-500/50",
      info: "border-blue-500/50 text-blue-600",
    },
    size: {
      sm: "px-4 py-3",
      lg: "p-4",
    },
    isNotification: {
      true: "z-[100] max-w-[400px] bg-background shadow-lg shadow-black/5",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
    isNotification: false,
  },
})

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode
  action?: React.ReactNode
  layout?: "row" | "complex"
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      size,
      isNotification,
      icon,
      action,
      layout = "row",
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        alertVariants({ variant, size, isNotification }),
        className,
      )}
      {...props}
    >
      {layout === "row" ? (
        // Однострочный вариант
        <div className="flex items-center gap-2">
          <div className="grow flex items-center">
            {icon && <span className="me-3 inline-flex">{icon}</span>}
            {children}
          </div>
          {action && <div className="flex items-center shrink-0">{action}</div>}
        </div>
      ) : (
        // Многострочный вариант
        <div className="flex gap-2">
          {icon && children ? (
            <div className="flex grow gap-3">
              <span className="mt-0.5 shrink-0">{icon}</span>
              <div className="grow">{children}</div>
            </div>
          ) : (
            <div className="grow">
              {icon && <span className="me-3 inline-flex">{icon}</span>}
              {children}
            </div>
          )}
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
    </div>
  ),
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("text-sm font-medium", className)} {...props} />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

const AlertContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-1", className)} {...props} />
))
AlertContent.displayName = "AlertContent"

export { Alert, AlertTitle, AlertDescription, AlertContent }


demo.tsx
import { Alert } from "@/components/ui/alert"
import { TriangleAlert } from "lucide-react"

function AlertBasic() {
  return (
    <Alert
      layout="row"
      icon={
        <TriangleAlert className="text-amber-500" size={16} strokeWidth={2} />
      }
    >
      <p className="text-sm">Some information is missing!</p>
    </Alert>
  )
}

export { AlertBasic }
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

Install NPM dependencies:
```bash
class-variance-authority, @radix-ui/react-slot
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
alert-dialog.tsx
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}


demo.tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

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
@radix-ui/react-alert-dialog, @radix-ui/react-slot, class-variance-authority
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
alert-dialog.tsx
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}


demo.tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

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
@radix-ui/react-alert-dialog, @radix-ui/react-slot, class-variance-authority
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
alert.tsx
"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { type LucideIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 text-sm transition-colors shadow-sm/2",
  {
    variants: {
      variant: {
        default:
          "border-[hsl(var(--hu-border))] bg-[hsl(var(--hu-card))] text-[hsl(var(--hu-card-foreground))]",
        destructive:
          "border-[hsl(var(--hu-destructive))] bg-[hsl(var(--hu-destructive))]/10 text-[hsl(var(--hu-destructive))] [&>svg]:text-[hsl(var(--hu-destructive))]",
        warning:
          "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-200 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400",
        success:
          "border-green-200 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-950/30 dark:text-green-200 [&>svg]:text-green-600 dark:[&>svg]:text-green-400",
        info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-700 dark:bg-blue-950/30 dark:text-blue-200 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: LucideIcon;
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      icon: Icon,
      title,
      dismissible,
      onDismiss,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const handleDismiss = () => {
      setIsVisible(false);
      setTimeout(() => {
        onDismiss?.();
      }, 150); // Match the exit animation duration
    };

    // Extract motion-conflicting props
    const {
      onDrag,
      onDragStart,
      onDragEnd,
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      onTransitionEnd,
      ...motionProps
    } = props;

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={ref}
            className={cn(alertVariants({ variant }), className)}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            role="alert"
            {...motionProps}
          >
            <div className="flex">
              {Icon && (
                <div className="flex-shrink-0">
                  <Icon className="h-4 w-4 mt-0.5" />
                </div>
              )}
              <div className={cn("flex-1", Icon && "ml-3")}>
                {title && <h3 className="text-sm font-medium mb-1">{title}</h3>}
                <div
                  className={cn("text-sm", title && "text-muted-foreground")}
                >
                  {children}
                </div>
              </div>
              {dismissible && (
                <div className="flex-shrink-0 ml-3">
                  <button
                    type="button"
                    className="inline-flex rounded-md p-1.5 transition-colors hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--hu-ring))]"
                    onClick={handleDismiss}
                    aria-label="Dismiss alert"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

Alert.displayName = "Alert";

export { Alert, alertVariants };

demo.tsx
import { Alert } from "@/components/ui/alert";
import { Code, Sparkles, TrendingUp, Lock, Calendar } from "lucide-react";

export default function DemoOne() {
  return (
    <>
      <div className="space-y-4">
        <Alert
          icon={Code}
          variant="info"
          title="Code Review Ready"
        >
          Your pull request is ready for code review by the team.
        </Alert>
        <Alert
          icon={Sparkles}
          variant="success"
          title="Feature Unlocked"
        >
          Congratulations! You've unlocked premium features.
        </Alert>
        <Alert
          icon={TrendingUp}
          variant="info"
          title="Performance Improved"
        >
          Your application performance has increased by 40% this month.
        </Alert>
        <Alert
          icon={Lock}
          variant="warning"
          title="Security Alert"
        >
          We detected unusual login activity. Please verify your account.
        </Alert>
        <Alert
          icon={Calendar}
          variant="default"
          title="Meeting Reminder"
        >
          Your team standup meeting starts in 15 minutes.
        </Alert>
      </div>
    </>
  );
}

```

Install NPM dependencies:
```bash
motion, lucide-react, class-variance-authority
```

Extend existing Tailwind 4 index.css with this code (or if project uses Tailwind 3, extend tailwind.config.js or globals.css):
```css
@import "tailwindcss";
@import "tw-animate-css";

:root {
  --radius: 0.75rem;
  --card-radius: 1rem;
  --hu-background: 0, 0%, 100%;
  --hu-foreground: 0, 0%, 14%;
  --hu-card: 0, 0%, 99%;
  --hu-card-foreground: 0, 0%, 14%;
  --hu-primary: 0, 0%, 20%;
  --hu-primary-foreground: 0, 0%, 98%;
  --hu-secondary: 0, 0%, 97%;
  --hu-secondary-foreground: 0, 0%, 20%;
  --hu-muted: 0, 0%, 97%;
  --hu-muted-foreground: 0, 0%, 56%;
  --hu-accent: 0, 0%, 96%;
  --hu-accent-foreground: 0, 0%, 20%;
  --hu-destructive: 9, 96%, 47%;
  --hu-destructive-foreground: 0, 0%, 98%;
  --hu-border: 0, 0%, 92%;
  --hu-input: 0, 0%, 100%;
  --hu-ring: 0, 0%, 71%;
}

.dark {
  --hu-background: 0, 0%, 7%;
  --hu-foreground: 0, 0%, 100%;
  --hu-card: 0, 0%, 9%;
  --hu-card-foreground: 0, 0%, 100%;
  --hu-primary: 0, 0%, 100%;
  --hu-primary-foreground: 0, 0%, 20%;
  --hu-secondary: 0, 0%, 15%;
  --hu-secondary-foreground: 0, 0%, 100%;
  --hu-muted: 0, 0%, 15%;
  --hu-muted-foreground: 0, 0%, 71%;
  --hu-accent: 0, 0%, 15%;
  --hu-accent-foreground: 0, 0%, 100%;
  --hu-destructive: 0, 84%, 50%;
  --hu-destructive-foreground: 0, 0%, 98%;
  --hu-border: 0, 0%, 100%, 10%;
  --hu-input: 0, 0%, 100%, 5%;
  --hu-ring: 0, 0%, 56%;
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
toast.tsx
'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Toaster as SonnerToaster,
  toast as sonnerToast,
} from 'sonner';
import {
  CheckCircle,
  AlertCircle,
  Info,
  AlertTriangle,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Variant = 'default' | 'success' | 'error' | 'warning';
type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

interface ActionButton {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'outline' | 'ghost';
}

interface ToasterProps {
  title?: string;
  message: string;
  variant?: Variant;
  duration?: number;
  position?: Position;
  actions?: ActionButton;
  onDismiss?: () => void;
  highlightTitle?: boolean;
}

export interface ToasterRef {
  show: (props: ToasterProps) => void;
}

const variantStyles: Record<Variant, string> = {
  default: 'bg-card border-border text-foreground',
  success: 'bg-card border-green-600/50',
  error: 'bg-card border-destructive/50',
  warning: 'bg-card border-amber-600/50',
};

const titleColor: Record<Variant, string> = {
  default: 'text-foreground',
  success: 'text-green-600 dark:text-green-400',
  error: 'text-destructive',
  warning: 'text-amber-600 dark:text-amber-400',
};

const iconColor: Record<Variant, string> = {
  default: 'text-muted-foreground',
  success: 'text-green-600 dark:text-green-400',
  error: 'text-destructive',
  warning: 'text-amber-600 dark:text-amber-400',
};

const variantIcons: Record<Variant, React.ComponentType<{ className?: string }>> = {
  default: Info,
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
};

const toastAnimation = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 50, scale: 0.95 },
};

const Toaster = forwardRef<ToasterRef, { defaultPosition?: Position }>(
  ({ defaultPosition = 'bottom-right' }, ref) => {
    const toastReference = useRef<ReturnType<typeof sonnerToast.custom> | null>(null);

    useImperativeHandle(ref, () => ({
      show({
        title,
        message,
        variant = 'default',
        duration = 4000,
        position = defaultPosition,
        actions,
        onDismiss,
        highlightTitle,
      }) {
        const Icon = variantIcons[variant];

        toastReference.current = sonnerToast.custom(
          (toastId) => (
            <motion.div
              variants={toastAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={cn(
                'flex items-center justify-between w-full max-w-xs p-3 rounded-xl border shadow-md',
                variantStyles[variant]
              )}
            >
              <div className="flex items-start gap-2">
                <Icon className={cn('h-4 w-4 mt-0.5 flex-shrink-0', iconColor[variant])} />
                <div className="space-y-0.5">
                  {title && (
                    <h3
                      className={cn(
                        'text-xs font-medium leading-none',
                        titleColor[variant],
                        highlightTitle && titleColor['success'] // override for meeting case
                      )}
                    >
                      {title}
                    </h3>
                  )}
                  <p className="text-xs text-muted-foreground">{message}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {actions?.label && (
                  <Button
                    variant={actions.variant || 'outline'}
                    size="sm"
                    onClick={() => {
                      actions.onClick();
                      sonnerToast.dismiss(toastId);
                    }}
                    className={cn(
                      'cursor-pointer',
                      variant === 'success'
                        ? 'text-green-600 border-green-600 hover:bg-green-600/10 dark:hover:bg-green-400/20'
                        : variant === 'error'
                        ? 'text-destructive border-destructive hover:bg-destructive/10 dark:hover:bg-destructive/20'
                        : variant === 'warning'
                        ? 'text-amber-600 border-amber-600 hover:bg-amber-600/10 dark:hover:bg-amber-400/20'
                        : 'text-foreground border-border hover:bg-muted/10 dark:hover:bg-muted/20'
                    )}
                  >
                    {actions.label}
                  </Button>
                )}

                <button
                  onClick={() => {
                    sonnerToast.dismiss(toastId);
                    onDismiss?.();
                  }}
                  className="rounded-full p-1 hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Dismiss notification"
                >
                  <X className="h-3 w-3 text-muted-foreground" />
                </button>
              </div>
            </motion.div>
          ),
          { duration, position }
        );
      },
    }));

    return (
      <SonnerToaster
        position={defaultPosition}
        toastOptions={{ unstyled: true, className: 'flex justify-end' }}
      />
    );
  }
);

export default Toaster;


demo.tsx
'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Toaster, { ToasterRef } from '@/components/ui/toast';

type Variant = 'default' | 'success' | 'error' | 'warning';
type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export default function ToasterDemo() {
  const toasterRef = useRef<ToasterRef>(null);

  const showToast = (variant: Variant, position: Position = 'bottom-right') => {
    toasterRef.current?.show({
      title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Notification`,
      message: `This is a ${variant} toast notification.`,
      variant,
      position,
      duration: 3000,
      onDismiss: () =>
        console.log(`${variant} toast at ${position} dismissed`),
    });
  };

  const simulateApiCall = async () => {
    toasterRef.current?.show({
      title: 'Scheduling...',
      message: 'Please wait while we schedule your meeting.',
      variant: 'default',
      position: 'bottom-right',
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toasterRef.current?.show({
        title: 'Meeting Scheduled',
        message: 'Your meeting is scheduled for July 4, 2025, at 3:42 PM IST.',
        variant: 'success',
        position: 'bottom-right',
        highlightTitle: true,
        actions: {
          label: 'Undo',
          onClick: () => console.log('Undoing meeting schedule'),
          variant: 'outline',
        },
      });
    } catch (error) {
      toasterRef.current?.show({
        title: 'Error Scheduling Meeting',
        message: 'Failed to schedule the meeting. Please try again.',
        variant: 'error',
        position: 'bottom-right',
      });
    }
  };

  return (
    <div className="p-6 space-y-6">
      <Toaster ref={toasterRef} />

      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-2">Toast Variants</h2>
          <div className="flex flex-wrap gap-4">
            {['default', 'success', 'error', 'warning'].map((variantKey) => (
              <Button
                key={variantKey}
                variant="outline"
                onClick={() => showToast(variantKey as Variant)}
                className={`border-${
                  variantKey === 'default' ? 'border' : variantKey
                }-600 text-${
                  variantKey === 'default' ? 'foreground' : variantKey
                }-600 hover:bg-${variantKey}-600/10 dark:hover:bg-${variantKey}-400/20`}
              >
                {variantKey.charAt(0).toUpperCase() + variantKey.slice(1)} Toast
              </Button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Toast Positions</h2>
          <div className="flex flex-wrap gap-4">
            {[
              'top-left',
              'top-center',
              'top-right',
              'bottom-left',
              'bottom-center',
              'bottom-right',
            ].map((positionKey) => (
              <Button
                key={positionKey}
                variant="outline"
                onClick={() =>
                  showToast('default', positionKey as Position)
                }
                className="border-border text-foreground hover:bg-muted/10 dark:hover:bg-muted/20"
              >
                {positionKey
                  .replace('-', ' ')
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </Button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Real‑World Example</h2>
          <Button
            variant="outline"
            onClick={simulateApiCall}
            className="border-border text-foreground hover:bg-muted/10 dark:hover:bg-muted/20"
          >
            Schedule Meeting
          </Button>
        </section>
      </div>
    </div>
  );
}

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
sonner, lucide-react, framer-motion, @radix-ui/react-slot, class-variance-authority
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
joblisting-component.tsx
"use client"

import { useEffect, useRef, useState, type JSX } from "react"
import type { SVGProps } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useOnClickOutside } from "usehooks-ts"

export interface Job {
  company: string
  title: string
  logo: React.ReactNode
  job_description: string
  salary: string
  location: string
  remote: string
  job_time: string
}

export interface JobListingComponentProps {
  jobs: Job[]
  className?: string
  onJobClick?: (job: Job) => void
}

export const Resend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM348.667 447.471L274.041 314.99L346.99 304.509L430 447.471H348.667ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z"
      fill="inherit"
    />
  </svg>
)

export const Turso = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height="1em"
    viewBox="0 0 201 170"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m100.055 170c-2.1901 0-18.2001-12.8-21.3001-16.45-2.44 3.73-6.44 7.96-6.44 7.96-11.05-5.57-25.17-20.06-27.83-25.13-2.62-5-12.13-62.58-12.39-79.3-.34-9.41 5.85-28.49 67.9601-28.49 62.11 0 68.29 19.08 67.96 28.49-.25 16.72-9.76 74.3-12.39 79.3-2.66 5.07-16.78 19.56-27.83 25.13 0 0-4-4.23-6.44-7.96-3.1 3.65-19.11 16.45-21.3 16.45z"
      fill="#1ebca1"
    />
    <path
      d="m100.055 132.92c-20.7301 0-33.9601-10.95-33.9601-10.95l1.91-26.67-21.75-1.94-3.91-31.55h115.4301l-3.91 31.55-21.75 1.94 1.91 26.67s-13.23 10.95-33.96 10.95z"
      fill="#183134"
    />
    <path
      d="m121.535 75.79 78.52-27.18c-4.67-27.94-29.16-48.61-29.16-48.61v30.78l-14.54 3.75-9.11-10.97-7.8 15.34-39.38 10.16-39.3801-10.16-7.8-15.34-9.11 10.97-14.54-3.75v-30.78s-24.50997 20.67-29.1799684 48.61l78.5199684 27.18-2.8 37.39c6.7 1.7 13.75 3.39 24.2801 3.39 10.53 0 17.57-1.69 24.27-3.39l-2.8-37.39z"
      fill="#4ff8d2"
    />
  </svg>
)

export const Supabase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 109 113"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
      fill="url(#paint1_linear)"
      fillOpacity={0.2}
    />
    <path
      d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
      fill="#3ECF8E"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={53.9738}
        y1={54.974}
        x2={94.1635}
        y2={71.8295}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#249361" />
        <stop offset={1} stopColor="#3ECF8E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1={36.1558}
        y1={30.578}
        x2={54.4844}
        y2={65.0806}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export default function JobListingComponent({
  jobs,
  className,
  onJobClick,
}: JobListingComponentProps) {
  const [activeItem, setActiveItem] = useState<Job | null>(null)
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
  useOnClickOutside(ref, () => setActiveItem(null))

  useEffect(() => {
    function onKeyDown(event: { key: string }) {
      if (event.key === "Escape") {
        setActiveItem(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-smooth-1000/10 /10 pointer-events-none absolute inset-0 z-10 bg-blend-luminosity backdrop-blur-xl"
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeItem ? (
          <>
            <div className="group absolute inset-0 z-10 grid place-items-center">
              <motion.div
                className="bg-background flex h-fit w-[90%] cursor-pointer flex-col items-start gap-4 overflow-hidden border p-4 shadow-xs"
                ref={ref}
                layoutId={`workItem-${activeItem.company}`}
                style={{ borderRadius: 12 }}
              >
                <div className="flex w-full items-center gap-4">
                  <motion.div layoutId={`workItemLogo-${activeItem.company}`}>
                    {activeItem.logo}
                  </motion.div>
                  <div className="flex grow items-center justify-between">
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex w-full flex-row justify-between gap-0.5">
                        <motion.div
                          className="text-foreground text-sm font-medium"
                          layoutId={`workItemCompany-${activeItem.company}`}
                        >
                          {activeItem.company}
                        </motion.div>
                      </div>
                      <motion.p
                        layoutId={`workItemTitle-${activeItem.company}`}
                        className="text-foreground text-sm"
                      >
                        {activeItem.title} / {activeItem.salary}
                      </motion.p>
                      <motion.div
                        className="text-foreground flex flex-row gap-2 text-xs"
                        layoutId={`workItemExtras-${activeItem.company}`}
                      >
                        {activeItem.remote === "Yes" &&
                          ` ${activeItem.location} `}
                        {activeItem.remote === "No" &&
                          ` ${activeItem.location} `}
                        {activeItem.remote === "Hybrid" &&
                          ` ${activeItem.remote} / ${activeItem.location} `}
                        | {activeItem.job_time}
                      </motion.div>
                    </div>
                  </div>
                </div>
                <motion.p
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="text-foreground text-sm"
                >
                  {activeItem.job_description}
                </motion.p>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
      <div className={`relative flex items-start p-6 ${className || ""}`}>
        <div className="relative flex w-full flex-col items-center gap-4 px-2">
          {jobs.map((role) => (
            <motion.div
              layoutId={`workItem-${role.company}`}
              key={role.company}
              className="group bg-background flex w-full cursor-pointer flex-row items-center gap-4 border p-2 shadow-xs md:p-4"
              onClick={() => {
                setActiveItem(role)
                if (onJobClick) onJobClick(role)
              }}
              style={{ borderRadius: 8 }}
            >
              <motion.div layoutId={`workItemLogo-${role.company}`}>
                {role.logo}
              </motion.div>
              <div className="flex w-full flex-col items-start justify-between gap-0.5">
                <motion.div
                  className="text-foreground  font-medium"
                  layoutId={`workItemCompany-${role.company}`}
                >
                  {role.company}
                </motion.div>
                <motion.div
                  className="text-foreground text-xs"
                  layoutId={`workItemTitle-${role.company}`}
                >
                  {role.title} / {role.salary}
                </motion.div>

                <motion.div
                  className="text-foreground flex flex-row gap-2 text-xs"
                  layoutId={`workItemExtras-${role.company}`}
                >
                  {role.remote === "Yes" && ` ${role.location} `}
                  {role.remote === "No" && ` ${role.location} `}
                  {role.remote === "Hybrid" &&
                    ` ${role.remote} / ${role.location} `}
                  | {role.job_time}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}


demo.tsx
import React from "react"

import JobListingComponent, {
  Job,
  Resend,
  Supabase,
  Turso,
} from "@/components/ui/joblisting-component";

const jobs: Job[] = [
  {
    company: "Supabase",
    title: "UI/UX Designer",
    logo: <Supabase />,
    job_description:
      "We are looking for a creative and driven UI/UX Designer to join our team. You will be responsible for designing and implementing user interfaces for our web and mobile applications.",
    salary: "$85,000 - $95,000",
    location: "San Francisco, CA",
    remote: "No",
    job_time: "Full-time",
  },
  {
    company: "Resend",
    title: "UI Developer",
    logo: <Resend className="fill-black dark:fill-white" />,
    job_description:
      "Seeking an experienced UI Developer to work on our latest project. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, and a keen eye for detail.",
    salary: "$75,000 - $85,000",
    location: "Remote",
    remote: "Yes",
    job_time: "Contract",
  },
  {
    company: "Turso",
    title: "Graphic Designer",
    logo: <Turso />,
    job_description:
      "We are in search of a talented Graphic Designer with UI experience to help create stunning visuals for our clients. This role involves collaboration with the design team and clients to deliver high-quality work.",
    salary: "$60,000 - $70,000",
    location: "New York, NY",
    remote: "Hybrid",
    job_time: "Part-time",
  },
]

export default function DemoOne() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <JobListingComponent jobs={jobs} />
    </div>
  )
}

```

Install NPM dependencies:
```bash
motion, usehooks-ts
```

Extend existing Tailwind 4 index.css with this code (or if project uses Tailwind 3, extend tailwind.config.js or globals.css):
```css
@import "tailwindcss";
@import "tw-animate-css";

@theme inline {
  --color-destructive-foreground: var(--destructive-foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);
  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

:root {
  --background: rgb(250, 249, 245);
  --foreground: rgb(61, 57, 41);
  --card: rgb(250, 249, 245);
  --card-foreground: rgb(20, 20, 19);
  --popover: rgb(255, 255, 255);
  --popover-foreground: rgb(40, 38, 27);
  --primary: rgb(201, 100, 66);
  --primary-foreground: rgb(255, 255, 255);
  --secondary: rgb(233, 230, 220);
  --secondary-foreground: rgb(83, 81, 70);
  --muted: rgb(237, 233, 222);
  --muted-foreground: rgb(131, 130, 125);
  --accent: rgb(233, 230, 220);
  --accent-foreground: rgb(40, 38, 27);
  --destructive: rgb(20, 20, 19);
  --destructive-foreground: rgb(255, 255, 255);
  --border: rgb(218, 217, 212);
  --input: rgb(180, 178, 167);
  --ring: rgb(201, 100, 66);
  --chart-1: rgb(176, 87, 48);
  --chart-2: rgb(156, 135, 245);
  --chart-3: rgb(222, 216, 196);
  --chart-4: rgb(219, 211, 240);
  --chart-5: rgb(180, 85, 45);
  --sidebar: rgb(245, 244, 238);
  --sidebar-foreground: rgb(61, 61, 58);
  --sidebar-primary: rgb(201, 100, 66);
  --sidebar-primary-foreground: rgb(251, 251, 251);
  --sidebar-accent: rgb(233, 230, 220);
  --sidebar-accent-foreground: rgb(52, 52, 52);
  --sidebar-border: rgb(235, 235, 235);
  --sidebar-ring: rgb(181, 181, 181);
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: rgb(38, 38, 36);
  --foreground: rgb(195, 192, 182);
  --card: rgb(38, 38, 36);
  --card-foreground: rgb(250, 249, 245);
  --popover: rgb(48, 48, 46);
  --popover-foreground: rgb(229, 229, 226);
  --primary: rgb(217, 119, 87);
  --primary-foreground: rgb(255, 255, 255);
  --secondary: rgb(250, 249, 245);
  --secondary-foreground: rgb(48, 48, 46);
  --muted: rgb(27, 27, 25);
  --muted-foreground: rgb(183, 181, 169);
  --accent: rgb(26, 25, 21);
  --accent-foreground: rgb(245, 244, 238);
  --destructive: rgb(239, 68, 68);
  --destructive-foreground: rgb(255, 255, 255);
  --border: rgb(62, 62, 56);
  --input: rgb(82, 81, 74);
  --ring: rgb(217, 119, 87);
  --chart-1: rgb(176, 87, 48);
  --chart-2: rgb(156, 135, 245);
  --chart-3: rgb(26, 25, 21);
  --chart-4: rgb(47, 43, 72);
  --chart-5: rgb(180, 85, 45);
  --sidebar: rgb(31, 30, 29);
  --sidebar-foreground: rgb(195, 192, 182);
  --sidebar-primary: rgb(52, 52, 52);
  --sidebar-primary-foreground: rgb(251, 251, 251);
  --sidebar-accent: rgb(15, 15, 14);
  --sidebar-accent-foreground: rgb(195, 192, 182);
  --sidebar-border: rgb(235, 235, 235);
  --sidebar-ring: rgb(181, 181, 181);
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
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
card-8.tsx
// components/ui/alert-card.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Define the props for the AlertCard component
interface AlertCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  isVisible: boolean;
  onDismiss?: () => void;
}

const AlertCard = React.forwardRef<HTMLDivElement, AlertCardProps>(
  ({
    className,
    icon,
    title,
    description,
    buttonText,
    onButtonClick,
    isVisible,
    onDismiss,
    ...props
  }, ref) => {
    
    // Animation variants for the card container
    const cardVariants = {
      hidden: { opacity: 0, y: 50, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          staggerChildren: 0.1,
        }
      },
      exit: { 
        opacity: 0, 
        y: 20, 
        scale: 0.98,
        transition: { duration: 0.2 }
      }
    };

    // Animation variants for child elements for a staggered effect
    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={ref}
            className={cn(
              "relative w-full max-w-sm overflow-hidden rounded-2xl p-6 shadow-2xl",
              "bg-destructive text-destructive-foreground", // Theming with shadcn variables
              className
            )}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="alert"
            aria-live="assertive"
            {...props}
          >
            {/* Optional dismiss button */}
            {onDismiss && (
              <motion.div variants={itemVariants} className="absolute top-3 right-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-white/20"
                  onClick={onDismiss}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Dismiss</span>
                </Button>
              </motion.div>
            )}

            {/* Icon with a subtle pulse animation */}
            {icon && (
               <motion.div
                variants={itemVariants}
                className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10"
              >
                 <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    {icon}
                </motion.div>
              </motion.div>
            )}

            {/* Title */}
            <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-tight">
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p variants={itemVariants} className="mt-2 text-sm text-destructive-foreground/80 max-w-[80%]">
              {description}
            </motion.p>
            
            {/* Action Button */}
            <motion.div variants={itemVariants} className="mt-6">
              <Button
                className="w-full rounded-full bg-primary-foreground py-6 text-base font-semibold text-primary shadow-lg transition-transform duration-200 hover:bg-primary-foreground/90 active:scale-95"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
AlertCard.displayName = "AlertCard";

export { AlertCard };

demo.tsx
// demo.tsx
import * as React from "react";
import { Bell } from "lucide-react";
import { AlertCard } from "@/components/ui/card-8";
import { Button } from "@/components/ui/button";

export default function AlertCardDemo() {
  const [isCardVisible, setIsCardVisible] = React.useState(true);

  const handleUnderstood = () => {
    console.log("User understood the alert.");
    setIsCardVisible(false);
  };
  
  const handleDismiss = () => {
    console.log("User dismissed the alert.");
    setIsCardVisible(false);
  };
  
  // A button to reset the demo and show the card again
  const handleReset = () => {
    setIsCardVisible(true);
  };

  return (
    <div className="flex h-[400px] w-full flex-col items-center justify-center gap-4">
      {!isCardVisible && (
         <Button onClick={handleReset}>Show Alert Card</Button>
      )}

      <AlertCard
        isVisible={isCardVisible}
        title="Don't miss your flight"
        description="Hi Jonathan, You have a flight today at 02:15 PM. Better to go early to avoid road traffic."
        buttonText="Okay, I Understand"
        onButtonClick={handleUnderstood}
        onDismiss={handleDismiss} // Provide dismiss handler to show the X button
        icon={<Bell className="h-6 w-6 text-destructive-foreground" />}
      />
    </div>
  );
}
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
planner-card.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Info, Bike, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Your shadcn/ui utility file
import { Button } from "@/components/ui/button"; // Your shadcn/ui button

// Define the props for the component
interface RoutePlannerCardProps {
  alertMessage?: string;
  durationInMinutes: number;
  distance: number;
  distanceUnit?: "mi" | "km";
  climb: number;
  climbUnit?: "ft" | "m";
  elevationData: number[];
  routeFeature: {
    icon: React.ReactNode;
    text: string;
  };
  onStart: () => void;
  className?: string;
}

/**
 * A responsive and theme-adaptive card for displaying route plans with an animated elevation graph.
 */
export const RoutePlannerCard = ({
  alertMessage,
  durationInMinutes,
  distance,
  distanceUnit = "mi",
  climb,
  climbUnit = "ft",
  elevationData,
  routeFeature,
  onStart,
  className,
}: RoutePlannerCardProps) => {

  // Normalize elevation data to a 0-1 range for bar height calculation
  const maxElevation = Math.max(...elevationData);
  const normalizedData = elevationData.map((point) => point / maxElevation);

  // Animation variants for the elevation graph container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // Stagger the animation of each bar
      },
    },
  };

  // Animation variants for each individual bar
  const barVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div
      className={cn(
        "w-full max-w-sm rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-5",
        className
      )}
      aria-labelledby="route-planner-title"
    >
      {/* Alert Message */}
      <AnimatePresence>
        {alertMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 rounded-lg bg-secondary/50 p-3 text-sm font-medium text-secondary-foreground"
          >
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <span>{alertMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Route Info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h2 id="route-planner-title" className="text-4xl font-bold">
            {durationInMinutes} Minutes
          </h2>
          <Info className="h-4 w-4 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground">
          {distance} {distanceUnit} &middot; {climb} {climbUnit} climb
        </p>
      </div>

      {/* Animated Elevation Graph */}
      <div className="w-full" aria-label="Route elevation profile">
        <motion.div
          className="flex h-16 w-full items-end gap-[2px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {normalizedData.map((height, index) => (
            <motion.div
              key={index}
              className="flex-1 rounded-t-full bg-primary"
              style={{ height: `${height * 100}%` }}
              variants={barVariants}
              aria-hidden="true"
            />
          ))}
        </motion.div>
      </div>

      {/* Route Feature */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {routeFeature.icon}
        <span>{routeFeature.text}</span>
      </div>

      {/* Start Button */}
      <Button onClick={onStart} size="lg" className="w-full text-lg">
        Start <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

demo.tsx
import { RoutePlannerCard } from "@/components/ui/planner-card";
import { Bike } from "lucide-react";

/**
 * A demo component to showcase the RoutePlannerCard.
 */
export default function RoutePlannerCardDemo() {
  // Generate some random data for the elevation graph for a nice visual effect
  const sampleElevationData = Array.from({ length: 50 }, () => Math.random() * 80 + 20);

  const handleStart = () => {
    // In a real app, this would trigger navigation or tracking.
    console.log("Start button clicked!");
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-background p-4">
      <RoutePlannerCard
        alertMessage="Rain expected in 28 min."
        durationInMinutes={42}
        distance={5.9}
        climb={327}
        elevationData={sampleElevationData}
        routeFeature={{
          icon: <Bike className="h-5 w-5" />,
          text: "Protected bike lanes",
        }}
        onStart={handleStart}
      />
    </div>
  );
}
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
lucide-react, framer-motion, @radix-ui/react-slot, class-variance-authority
```


