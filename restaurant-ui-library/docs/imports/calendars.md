# Calendars (34 available)

## Cherry-Picked Components from 21st.dev

<!-- Add your selected calendar components here -->

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
calendar.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components: userComponents,
  ...props
}: CalendarProps) {
  const defaultClassNames = {
    months: "relative flex flex-col sm:flex-row gap-4",
    month: "w-full",
    month_caption: "relative mx-10 mb-1 flex h-9 items-center justify-center z-20",
    caption_label: "text-sm font-medium",
    nav: "absolute top-0 flex w-full justify-between z-10",
    button_previous: cn(
      buttonVariants({ variant: "ghost" }),
      "size-9 text-muted-foreground/80 hover:text-foreground p-0",
    ),
    button_next: cn(
      buttonVariants({ variant: "ghost" }),
      "size-9 text-muted-foreground/80 hover:text-foreground p-0",
    ),
    weekday: "size-9 p-0 text-xs font-medium text-muted-foreground/80",
    day_button:
      "relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg p-0 text-foreground outline-offset-2 group-[[data-selected]:not(.range-middle)]:[transition-property:color,background-color,border-radius,box-shadow] group-[[data-selected]:not(.range-middle)]:duration-150 focus:outline-none group-data-[disabled]:pointer-events-none focus-visible:z-10 hover:bg-accent group-data-[selected]:bg-primary hover:text-foreground group-data-[selected]:text-primary-foreground group-data-[disabled]:text-foreground/30 group-data-[disabled]:line-through group-data-[outside]:text-foreground/30 group-data-[outside]:group-data-[selected]:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 group-[.range-start:not(.range-end)]:rounded-e-none group-[.range-end:not(.range-start)]:rounded-s-none group-[.range-middle]:rounded-none group-data-[selected]:group-[.range-middle]:bg-accent group-data-[selected]:group-[.range-middle]:text-foreground",
    day: "group size-9 px-0 text-sm",
    range_start: "range-start",
    range_end: "range-end",
    range_middle: "range-middle",
    today:
      "*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary [&[data-selected]:not(.range-middle)>*]:after:bg-background [&[data-disabled]>*]:after:bg-foreground/30 *:after:transition-colors",
    outside: "text-muted-foreground data-selected:bg-accent/50 data-selected:text-muted-foreground",
    hidden: "invisible",
    week_number: "size-9 p-0 text-xs font-medium text-muted-foreground/80",
  };

  const mergedClassNames: typeof defaultClassNames = Object.keys(defaultClassNames).reduce(
    (acc, key) => ({
      ...acc,
      [key]: classNames?.[key as keyof typeof classNames]
        ? cn(
            defaultClassNames[key as keyof typeof defaultClassNames],
            classNames[key as keyof typeof classNames],
          )
        : defaultClassNames[key as keyof typeof defaultClassNames],
    }),
    {} as typeof defaultClassNames,
  );

  const defaultComponents = {
    Chevron: (props: any) => {
      if (props.orientation === "left") {
        return <ChevronLeft size={16} strokeWidth={2} {...props} aria-hidden="true" />;
      }
      return <ChevronRight size={16} strokeWidth={2} {...props} aria-hidden="true" />;
    },
  };

  const mergedComponents = {
    ...defaultComponents,
    ...userComponents,
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-fit", className)}
      classNames={mergedClassNames}
      components={mergedComponents}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

demo.tsx
"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

function Component() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border border-border p-2"
      />
      <p
        className="mt-4 text-center text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Calendar -{" "}
        <a
          className="underline hover:text-foreground"
          href="https://daypicker.dev/"
          target="_blank"
          rel="noopener nofollow"
        >
          React DayPicker
        </a>
      </p>
    </div>
  );
}

export { Component };


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
lucide-react, react-day-picker, @radix-ui/react-slot, class-variance-authority
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
fullscreen-calendar.tsx
"use client"

import * as React from "react"
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
  SearchIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Event {
  id: number
  name: string
  time: string
  datetime: string
}

interface CalendarData {
  day: Date
  events: Event[]
}

interface FullScreenCalendarProps {
  data: CalendarData[]
}

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
]

export function FullScreenCalendar({ data }: FullScreenCalendarProps) {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = React.useState(today)
  const [currentMonth, setCurrentMonth] = React.useState(
    format(today, "MMM-yyyy"),
  )
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
  }

  function goToToday() {
    setCurrentMonth(format(today, "MMM-yyyy"))
  }

  return (
    <div className="flex flex-1 flex-col">
      {/* Calendar Header */}
      <div className="flex flex-col space-y-4 p-4 md:flex-row md:items-center md:justify-between md:space-y-0 lg:flex-none">
        <div className="flex flex-auto">
          <div className="flex items-center gap-4">
            <div className="hidden w-20 flex-col items-center justify-center rounded-lg border bg-muted p-0.5 md:flex">
              <h1 className="p-1 text-xs uppercase text-muted-foreground">
                {format(today, "MMM")}
              </h1>
              <div className="flex w-full items-center justify-center rounded-lg border bg-background p-0.5 text-lg font-bold">
                <span>{format(today, "d")}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-foreground">
                {format(firstDayCurrentMonth, "MMMM, yyyy")}
              </h2>
              <p className="text-sm text-muted-foreground">
                {format(firstDayCurrentMonth, "MMM d, yyyy")} -{" "}
                {format(endOfMonth(firstDayCurrentMonth), "MMM d, yyyy")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Button variant="outline" size="icon" className="hidden lg:flex">
            <SearchIcon size={16} strokeWidth={2} aria-hidden="true" />
          </Button>

          <Separator orientation="vertical" className="hidden h-6 lg:block" />

          <div className="inline-flex w-full -space-x-px rounded-lg shadow-sm shadow-black/5 md:w-auto rtl:space-x-reverse">
            <Button
              onClick={previousMonth}
              className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
              variant="outline"
              size="icon"
              aria-label="Navigate to previous month"
            >
              <ChevronLeftIcon size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
            <Button
              onClick={goToToday}
              className="w-full rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 md:w-auto"
              variant="outline"
            >
              Today
            </Button>
            <Button
              onClick={nextMonth}
              className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
              variant="outline"
              size="icon"
              aria-label="Navigate to next month"
            >
              <ChevronRightIcon size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </div>

          <Separator orientation="vertical" className="hidden h-6 md:block" />
          <Separator
            orientation="horizontal"
            className="block w-full md:hidden"
          />

          <Button className="w-full gap-2 md:w-auto">
            <PlusCircleIcon size={16} strokeWidth={2} aria-hidden="true" />
            <span>New Event</span>
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="lg:flex lg:flex-auto lg:flex-col">
        {/* Week Days Header */}
        <div className="grid grid-cols-7 border text-center text-xs font-semibold leading-6 lg:flex-none">
          <div className="border-r py-2.5">Sun</div>
          <div className="border-r py-2.5">Mon</div>
          <div className="border-r py-2.5">Tue</div>
          <div className="border-r py-2.5">Wed</div>
          <div className="border-r py-2.5">Thu</div>
          <div className="border-r py-2.5">Fri</div>
          <div className="py-2.5">Sat</div>
        </div>

        {/* Calendar Days */}
        <div className="flex text-xs leading-6 lg:flex-auto">
          <div className="hidden w-full border-x lg:grid lg:grid-cols-7 lg:grid-rows-5">
            {days.map((day, dayIdx) =>
              !isDesktop ? (
                <button
                  onClick={() => setSelectedDay(day)}
                  key={dayIdx}
                  type="button"
                  className={cn(
                    isEqual(day, selectedDay) && "text-primary-foreground",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      "text-foreground",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-muted-foreground",
                    (isEqual(day, selectedDay) || isToday(day)) &&
                      "font-semibold",
                    "flex h-14 flex-col border-b border-r px-3 py-2 hover:bg-muted focus:z-10",
                  )}
                >
                  <time
                    dateTime={format(day, "yyyy-MM-dd")}
                    className={cn(
                      "ml-auto flex size-6 items-center justify-center rounded-full",
                      isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "bg-primary text-primary-foreground",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-primary text-primary-foreground",
                    )}
                  >
                    {format(day, "d")}
                  </time>
                  {data.filter((date) => isSameDay(date.day, day)).length >
                    0 && (
                    <div>
                      {data
                        .filter((date) => isSameDay(date.day, day))
                        .map((date) => (
                          <div
                            key={date.day.toString()}
                            className="-mx-0.5 mt-auto flex flex-wrap-reverse"
                          >
                            {date.events.map((event) => (
                              <span
                                key={event.id}
                                className="mx-0.5 mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground"
                              />
                            ))}
                          </div>
                        ))}
                    </div>
                  )}
                </button>
              ) : (
                <div
                  key={dayIdx}
                  onClick={() => setSelectedDay(day)}
                  className={cn(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "bg-accent/50 text-muted-foreground",
                    "relative flex flex-col border-b border-r hover:bg-muted focus:z-10",
                    !isEqual(day, selectedDay) && "hover:bg-accent/75",
                  )}
                >
                  <header className="flex items-center justify-between p-2.5">
                    <button
                      type="button"
                      className={cn(
                        isEqual(day, selectedDay) && "text-primary-foreground",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          "text-foreground",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          "text-muted-foreground",
                        isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "border-none bg-primary",
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          "bg-foreground",
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          "font-semibold",
                        "flex h-7 w-7 items-center justify-center rounded-full text-xs hover:border",
                      )}
                    >
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>
                  </header>
                  <div className="flex-1 p-2.5">
                    {data
                      .filter((event) => isSameDay(event.day, day))
                      .map((day) => (
                        <div key={day.day.toString()} className="space-y-1.5">
                          {day.events.slice(0, 1).map((event) => (
                            <div
                              key={event.id}
                              className="flex flex-col items-start gap-1 rounded-lg border bg-muted/50 p-2 text-xs leading-tight"
                            >
                              <p className="font-medium leading-none">
                                {event.name}
                              </p>
                              <p className="leading-none text-muted-foreground">
                                {event.time}
                              </p>
                            </div>
                          ))}
                          {day.events.length > 1 && (
                            <div className="text-xs text-muted-foreground">
                              + {day.events.length - 1} more
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="isolate grid w-full grid-cols-7 grid-rows-5 border-x lg:hidden">
            {days.map((day, dayIdx) => (
              <button
                onClick={() => setSelectedDay(day)}
                key={dayIdx}
                type="button"
                className={cn(
                  isEqual(day, selectedDay) && "text-primary-foreground",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "text-foreground",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-muted-foreground",
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-semibold",
                  "flex h-14 flex-col border-b border-r px-3 py-2 hover:bg-muted focus:z-10",
                )}
              >
                <time
                  dateTime={format(day, "yyyy-MM-dd")}
                  className={cn(
                    "ml-auto flex size-6 items-center justify-center rounded-full",
                    isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "bg-primary text-primary-foreground",
                    isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      "bg-primary text-primary-foreground",
                  )}
                >
                  {format(day, "d")}
                </time>
                {data.filter((date) => isSameDay(date.day, day)).length > 0 && (
                  <div>
                    {data
                      .filter((date) => isSameDay(date.day, day))
                      .map((date) => (
                        <div
                          key={date.day.toString()}
                          className="-mx-0.5 mt-auto flex flex-wrap-reverse"
                        >
                          {date.events.map((event) => (
                            <span
                              key={event.id}
                              className="mx-0.5 mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground"
                            />
                          ))}
                        </div>
                      ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


demo.tsx
"use client"

import { FullScreenCalendar } from "@/components/ui/fullscreen-calendar"

const dummyEvents = [
  {
    day: new Date("2025-01-02"),
    events: [
      {
        id: 1,
        name: "Q1 Planning Session",
        time: "10:00 AM",
        datetime: "2025-01-02T00:00",
      },
      {
        id: 2,
        name: "Team Sync",
        time: "2:00 PM",
        datetime: "2025-01-02T00:00",
      },
    ],
  },
  {
    day: new Date("2025-01-07"),
    events: [
      {
        id: 3,
        name: "Product Launch Review",
        time: "2:00 PM",
        datetime: "2025-01-07T00:00",
      },
      {
        id: 4,
        name: "Marketing Sync",
        time: "11:00 AM",
        datetime: "2025-01-07T00:00",
      },
      {
        id: 5,
        name: "Vendor Meeting",
        time: "4:30 PM",
        datetime: "2025-01-07T00:00",
      },
    ],
  },
  {
    day: new Date("2025-01-10"),
    events: [
      {
        id: 6,
        name: "Team Building Workshop",
        time: "11:00 AM",
        datetime: "2025-01-10T00:00",
      },
    ],
  },
  {
    day: new Date("2025-01-13"),
    events: [
      {
        id: 7,
        name: "Budget Analysis Meeting",
        time: "3:30 PM",
        datetime: "2025-01-14T00:00",
      },
      {
        id: 8,
        name: "Sprint Planning",
        time: "9:00 AM",
        datetime: "2025-01-14T00:00",
      },
      {
        id: 9,
        name: "Design Review",
        time: "1:00 PM",
        datetime: "2025-01-14T00:00",
      },
    ],
  },
  {
    day: new Date("2025-01-16"),
    events: [
      {
        id: 10,
        name: "Client Presentation",
        time: "10:00 AM",
        datetime: "2025-01-16T00:00",
      },
      {
        id: 11,
        name: "Team Lunch",
        time: "12:30 PM",
        datetime: "2025-01-16T00:00",
      },
      {
        id: 12,
        name: "Project Status Update",
        time: "2:00 PM",
        datetime: "2025-01-16T00:00",
      },
    ],
  },
]

function CalendarDemo() {
  return (
    <div className="flex h-screen flex-1 flex-col scale-90">
      <FullScreenCalendar data={dummyEvents} />
    </div>
  )
}

export { CalendarDemo }
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
shadcn/separator
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

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
date-fns, lucide-react, @radix-ui/react-slot, class-variance-authority, @radix-ui/react-separator
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
fullscreen-calendar.tsx
"use client"

import * as React from "react"
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
  SearchIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Event {
  id: number
  name: string
  time: string
  datetime: string
}

interface CalendarData {
  day: Date
  events: Event[]
}

interface FullScreenCalendarProps {
  data: CalendarData[]
}

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
]

export function FullScreenCalendar({ data }: FullScreenCalendarProps) {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = React.useState(today)
  const [currentMonth, setCurrentMonth] = React.useState(
    format(today, "MMM-yyyy"),
  )
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
  }

  function goToToday() {
    setCurrentMonth(format(today, "MMM-yyyy"))
  }

  return (
    <div className="flex flex-1 flex-col">
      {/* Calendar Header */}
      <div className="flex flex-col space-y-4 p-4 md:flex-row md:items-center md:justify-between md:space-y-0 lg:flex-none">
        <div className="flex flex-auto">
          <div className="flex items-center gap-4">
            <div className="hidden w-20 flex-col items-center justify-center rounded-lg border bg-muted p-0.5 md:flex">
              <h1 className="p-1 text-xs uppercase text-muted-foreground">
                {format(today, "MMM")}
              </h1>
              <div className="flex w-full items-center justify-center rounded-lg border bg-background p-0.5 text-lg font-bold">
                <span>{format(today, "d")}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-foreground">
                {format(firstDayCurrentMonth, "MMMM, yyyy")}
              </h2>
              <p className="text-sm text-muted-foreground">
                {format(firstDayCurrentMonth, "MMM d, yyyy")} -{" "}
                {format(endOfMonth(firstDayCurrentMonth), "MMM d, yyyy")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Button variant="outline" size="icon" className="hidden lg:flex">
            <SearchIcon size={16} strokeWidth={2} aria-hidden="true" />
          </Button>

          <Separator orientation="vertical" className="hidden h-6 lg:block" />

          <div className="inline-flex w-full -space-x-px rounded-lg shadow-sm shadow-black/5 md:w-auto rtl:space-x-reverse">
            <Button
              onClick={previousMonth}
              className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
              variant="outline"
              size="icon"
              aria-label="Navigate to previous month"
            >
              <ChevronLeftIcon size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
            <Button
              onClick={goToToday}
              className="w-full rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 md:w-auto"
              variant="outline"
            >
              Today
            </Button>
            <Button
              onClick={nextMonth}
              className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
              variant="outline"
              size="icon"
              aria-label="Navigate to next month"
            >
              <ChevronRightIcon size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </div>

          <Separator orientation="vertical" className="hidden h-6 md:block" />
          <Separator
            orientation="horizontal"
            className="block w-full md:hidden"
          />

          <Button className="w-full gap-2 md:w-auto">
            <PlusCircleIcon size={16} strokeWidth={2} aria-hidden="true" />
            <span>New Event</span>
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="lg:flex lg:flex-auto lg:flex-col">
        {/* Week Days Header */}
        <div className="grid grid-cols-7 border text-center text-xs font-semibold leading-6 lg:flex-none">
          <div className="border-r py-2.5">Sun</div>
          <div className="border-r py-2.5">Mon</div>
          <div className="border-r py-2.5">Tue</div>
          <div className="border-r py-2.5">Wed</div>
          <div className="border-r py-2.5">Thu</div>
          <div className="border-r py-2.5">Fri</div>
          <div className="py-2.5">Sat</div>
        </div>

        {/* Calendar Days */}
        <div className="flex text-xs leading-6 lg:flex-auto">
          <div className="hidden w-full border-x lg:grid lg:grid-cols-7 lg:grid-rows-5">
            {days.map((day, dayIdx) =>
              !isDesktop ? (
                <button
                  onClick={() => setSelectedDay(day)}
                  key={dayIdx}
                  type="button"
                  className={cn(
                    isEqual(day, selectedDay) && "text-primary-foreground",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      "text-foreground",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-muted-foreground",
                    (isEqual(day, selectedDay) || isToday(day)) &&
                      "font-semibold",
                    "flex h-14 flex-col border-b border-r px-3 py-2 hover:bg-muted focus:z-10",
                  )}
                >
                  <time
                    dateTime={format(day, "yyyy-MM-dd")}
                    className={cn(
                      "ml-auto flex size-6 items-center justify-center rounded-full",
                      isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "bg-primary text-primary-foreground",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-primary text-primary-foreground",
                    )}
                  >
                    {format(day, "d")}
                  </time>
                  {data.filter((date) => isSameDay(date.day, day)).length >
                    0 && (
                    <div>
                      {data
                        .filter((date) => isSameDay(date.day, day))
                        .map((date) => (
                          <div
                            key={date.day.toString()}
                            className="-mx-0.5 mt-auto flex flex-wrap-reverse"
                          >
                            {date.events.map((event) => (
                              <span
                                key={event.id}
                                className="mx-0.5 mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground"
                              />
                            ))}
                          </div>
                        ))}
                    </div>
                  )}
                </button>
              ) : (
                <div
                  key={dayIdx}
                  onClick={() => setSelectedDay(day)}
                  className={cn(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "bg-accent/50 text-muted-foreground",
                    "relative flex flex-col border-b border-r hover:bg-muted focus:z-10",
                    !isEqual(day, selectedDay) && "hover:bg-accent/75",
                  )}
                >
                  <header className="flex items-center justify-between p-2.5">
                    <button
                      type="button"
                      className={cn(
                        isEqual(day, selectedDay) && "text-primary-foreground",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          "text-foreground",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          "text-muted-foreground",
                        isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "border-none bg-primary",
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          "bg-foreground",
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          "font-semibold",
                        "flex h-7 w-7 items-center justify-center rounded-full text-xs hover:border",
                      )}
                    >
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>
                  </header>
                  <div className="flex-1 p-2.5">
                    {data
                      .filter((event) => isSameDay(event.day, day))
                      .map((day) => (
                        <div key={day.day.toString()} className="space-y-1.5">
                          {day.events.slice(0, 1).map((event) => (
                            <div
                              key={event.id}
                              className="flex flex-col items-start gap-1 rounded-lg border bg-muted/50 p-2 text-xs leading-tight"
                            >
                              <p className="font-medium leading-none">
                                {event.name}
                              </p>
                              <p className="leading-none text-muted-foreground">
                                {event.time}
                              </p>
                            </div>
                          ))}
                          {day.events.length > 1 && (
                            <div className="text-xs text-muted-foreground">
                              + {day.events.length - 1} more
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="isolate grid w-full grid-cols-7 grid-rows-5 border-x lg:hidden">
            {days.map((day, dayIdx) => (
              <button
                onClick={() => setSelectedDay(day)}
                key={dayIdx}
                type="button"
                className={cn(
                  isEqual(day, selectedDay) && "text-primary-foreground",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "text-foreground",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-muted-foreground",
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-semibold",
                  "flex h-14 flex-col border-b border-r px-3 py-2 hover:bg-muted focus:z-10",
                )}
              >
                <time
                  dateTime={format(day, "yyyy-MM-dd")}
                  className={cn(
                    "ml-auto flex size-6 items-center justify-center rounded-full",
                    isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "bg-primary text-primary-foreground",
                    isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      "bg-primary text-primary-foreground",
                  )}
                >
                  {format(day, "d")}
                </time>
                {data.filter((date) => isSameDay(date.day, day)).length > 0 && (
                  <div>
                    {data
                      .filter((date) => isSameDay(date.day, day))
                      .map((date) => (
                        <div
                          key={date.day.toString()}
                          className="-mx-0.5 mt-auto flex flex-wrap-reverse"
                        >
                          {date.events.map((event) => (
                            <span
                              key={event.id}
                              className="mx-0.5 mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground"
                            />
                          ))}
                        </div>
                      ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


demo.tsx
"use client"

import { FullScreenCalendar } from "@/components/ui/fullscreen-calendar"

const dummyEvents = [
  {
    day: new Date("2025-01-02"),
    events: [
      {
        id: 1,
        name: "Q1 Planning Session",
        time: "10:00 AM",
        datetime: "2025-01-02T00:00",
      },
      {
        id: 2,
        name: "Team Sync",
        time: "2:00 PM",
        datetime: "2025-01-02T00:00",
      },
    ],
  },
  {
    day: new Date("2025-01-07"),
    events: [
      {
        id: 3,
        name: "Product Launch Review",
        time: "2:00 PM",
        datetime: "2025-01-07T00:00",
      },
      {
        id: 4,
        name: "Marketing Sync",
        time: "11:00 AM",
        datetime: "2025-01-07T00:00",
      },
      {
        id: 5,
        name: "Vendor Meeting",
        time: "4:30 PM",
        datetime: "2025-01-07T00:00",
      },
    ],
  },
  {
    day: new Date("2025-01-10"),
    events: [
      {
        id: 6,
        name: "Team Building Workshop",
        time: "11:00 AM",
        datetime: "2025-01-10T00:00",
      },
    ],
  },
  {
    day: new Date("2025-01-13"),
    events: [
      {
        id: 7,
        name: "Budget Analysis Meeting",
        time: "3:30 PM",
        datetime: "2025-01-14T00:00",
      },
      {
        id: 8,
        name: "Sprint Planning",
        time: "9:00 AM",
        datetime: "2025-01-14T00:00",
      },
      {
        id: 9,
        name: "Design Review",
        time: "1:00 PM",
        datetime: "2025-01-14T00:00",
      },
    ],
  },
  {
    day: new Date("2025-01-16"),
    events: [
      {
        id: 10,
        name: "Client Presentation",
        time: "10:00 AM",
        datetime: "2025-01-16T00:00",
      },
      {
        id: 11,
        name: "Team Lunch",
        time: "12:30 PM",
        datetime: "2025-01-16T00:00",
      },
      {
        id: 12,
        name: "Project Status Update",
        time: "2:00 PM",
        datetime: "2025-01-16T00:00",
      },
    ],
  },
]

function CalendarDemo() {
  return (
    <div className="flex h-screen flex-1 flex-col scale-90">
      <FullScreenCalendar data={dummyEvents} />
    </div>
  )
}

export { CalendarDemo }
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
shadcn/separator
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

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
date-fns, lucide-react, @radix-ui/react-slot, class-variance-authority, @radix-ui/react-separator
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
mini-calendar.tsx
"use client";

import * as React from "react";
import {
  format,
  addWeeks,
  subWeeks,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const DAYS_OF_WEEK = [
  { key: "sun", label: "Sun" },
  { key: "mon", label: "Mon" },
  { key: "tue", label: "Tue" },
  { key: "wed", label: "Wed" },
  { key: "thu", label: "Thu" },
  { key: "fri", label: "Fri" },
  { key: "sat", label: "Sat" },
];

export const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [currentWeek, setCurrentWeek] = React.useState<Date>(new Date());

  const weekDays = eachDayOfInterval({
    start: startOfWeek(currentWeek, { weekStartsOn: 0 }),
    end: endOfWeek(currentWeek, { weekStartsOn: 0 }),
  });

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
      <div className="flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentWeek(subWeeks(currentWeek, 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-sm font-medium">
          {format(currentWeek, "MMMM yyyy")}
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 text-center mb-2 px-4">
        {DAYS_OF_WEEK.map((day) => (
          <div
            key={day.key}
            className="text-xs font-medium text-muted-foreground"
          >
            {day.label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 p-4 pt-0">
        {weekDays.map((day) => {
          const isSelected =
            format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

          return (
            <Button
              key={day.toString()}
              variant={isSelected ? "default" : "ghost"}
              className={cn(
                "h-9 w-9 p-0 font-normal",
                isSelected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
              onClick={() => setSelectedDate(day)}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

demo.tsx
"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/mini-calendar";

const DemoMiniCalendar = () => {
  return (
    <div className="w-[350px]">
      <Calendar />
    </div>
  );
};

export { DemoMiniCalendar };

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
date-fns, iconsax-react, @radix-ui/react-slot, class-variance-authority
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
calendar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean }> = ({
  day,
  isHeader,
}) => {
  const randomBgWhite =
    !isHeader && Math.random() < 0.3
      ? "bg-indigo-500 text-white "
      : "text-text-tertiary";

  return (
    <div
      className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${
        isHeader ? "" : "rounded-xl"
      } ${randomBgWhite}`}
    >
      <span className={`font-medium ${isHeader ? "text-xs" : "text-sm"}`}>
        {day}
      </span>
    </div>
  );
};

export function Calendar() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const bookingLink = `https://cal.com/aliimam/designali`;

  const renderCalendarDays = () => {
    let days: React.ReactNode[] = [
      ...dayNames.map((day, i) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array(firstDayOfWeek).map((_, i) => (
        <div
          key={`empty-start-${i}`}
          className="col-span-1 row-span-1 h-8 w-8"
        />
      )),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, i) => <CalendarDay key={`date-${i + 1}`} day={i + 1} />),
    ];

    return days;
  };

  return (
    <BentoCard height="h-auto" linkTo={bookingLink}>
      <div className=" grid h-full  gap-5">
        <div className="">
          <h2 className="mb-4 text-lg md:text-3xl font-semibold">
            Any questions about Design?
          </h2>
          <p className="mb-2 text-xs md:text-md text-text-secondary">
            Feel free to reach out to me!
          </p>
          <Button className="mt-3 rounded-2xl">Book Now</Button>
        </div>
        <div className=" transition-all duration-500 ease-out md:group-hover:-right-12 md:group-hover:top-5">
          <div>
            <div className="h-full w-[550px] rounded-[24px] border border-border-primary p-2 transition-colors duration-100 group-hover:border-indigo-400">
              <div
                className="h-full rounded-2xl border-2 border-[#A5AEB81F]/10  p-3"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              >
                <div className="flex items-center space-x-2">
                  <p className="text-sm ">
                    <span className="font-medium">
                      {currentMonth}, {currentYear}
                    </span>
                  </p>
                  <span className="h-1 w-1 rounded-full ">&nbsp;</span>
                  <p className="text-xs text-text-tertiary">30 min call</p>
                </div>
                <div className="mt-4 grid grid-cols-7 grid-rows-5 gap-2 px-4">
                  {renderCalendarDays()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  height?: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  showHoverGradient?: boolean;
  hideOverflow?: boolean;
  linkTo?: string;
}

export function BentoCard({
  children,
  height = "h-auto",
  rowSpan = 8,
  colSpan = 7,
  className = "",
  showHoverGradient = true,
  hideOverflow = true,
  linkTo,
}: BentoCardProps) {
  const cardContent = (
    <div
      className={`group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-indigo-100/10 dark:hover:bg-indigo-900/10 ${
        hideOverflow && "overflow-hidden"
      } ${height} row-span-${rowSpan} col-span-${colSpan} ${className}`}
    >
      {linkTo && (
        <div className="absolute bottom-4 right-6 z-[999] flex h-12 w-12 rotate-6 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
          <svg
            className="h-6 w-6 text-indigo-600"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.25 15.25V6.75H8.75"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 7L6.75 17.25"
            ></path>
          </svg>
        </div>
      )}
      {showHoverGradient && (
        <div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      )}
      {children}
    </div>
  );

  if (linkTo) {
    return linkTo.startsWith("/") ? (
      <Link href={linkTo} className="block">
        {cardContent}
      </Link>
    ) : (
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}


demo.tsx
import { Calendar } from "@/components/ui/calendar"

export function HomePage() {
  return (
    <main className="overflow-hidden">
      <Calendar />
    </main>
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
@radix-ui/react-slot, class-variance-authority
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
coach-scheduling-card.tsx
"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DaySchedule {
  date: string;
  dayName: string;
  dayNumber: number;
  slots: TimeSlot[];
  hasAvailability: boolean;
}

interface Coach {
  name: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

interface CoachSchedulingProps {
  coach?: Coach;
  locations?: string[];
  weekSchedule?: DaySchedule[];
  onLocationChange?: (location: string) => void;
  onTimeSlotSelect?: (day: string, time: string) => void;
  onWeekChange?: (direction: "prev" | "next") => void;
  enableAnimations?: boolean;
  className?: string;
}

const defaultCoach: Coach = {
  name: "Michael Baumgardner",
  title: "Tennis coach",
  location: "New York",
  rating: 5.0,
  reviewCount: 7,
  imageUrl: "https://images.unsplash.com/photo-1660463532854-f887f2a6c674"
};

const defaultLocations = [
  "Riverbank State Park Tennis Courts",
  "Central Park Tennis Center", 
  "Brooklyn Bridge Park Courts",
  "Prospect Park Tennis Center"
];

const defaultWeekSchedule: DaySchedule[] = [
  {
    date: "Aug 17",
    dayName: "Today",
    dayNumber: 17,
    hasAvailability: true,
    slots: [
      { time: "10:30 AM", available: true },
      { time: "11:00 AM", available: true },
      { time: "11:30 AM", available: true },
      { time: "12:00 PM", available: true },
      { time: "12:30 PM", available: true },
      { time: "01:00 PM", available: false },
      { time: "01:30 PM", available: true },
      { time: "02:00 PM", available: true },
      { time: "02:30 PM", available: true },
      { time: "03:00 PM", available: true }
    ]
  },
  {
    date: "Aug 18",
    dayName: "Tue",
    dayNumber: 18,
    hasAvailability: true,
    slots: [
      { time: "10:30 AM", available: true },
      { time: "11:00 AM", available: true },
      { time: "11:30 AM", available: true },
      { time: "12:00 PM", available: true },
      { time: "03:00 PM", available: true }
    ]
  },
  {
    date: "Aug 19",
    dayName: "Wed",
    dayNumber: 19,
    hasAvailability: true,
    slots: [
      { time: "11:00 AM", available: true },
      { time: "12:00 PM", available: true },
      { time: "12:30 PM", available: true },
      { time: "01:30 PM", available: false },
      { time: "02:00 PM", available: true },
      { time: "02:30 PM", available: true },
      { time: "03:00 PM", available: true }
    ]
  },
  {
    date: "Aug 20",
    dayName: "Thu",
    dayNumber: 20,
    hasAvailability: false,
    slots: []
  },
  {
    date: "Aug 21",
    dayName: "Fri",
    dayNumber: 21,
    hasAvailability: false,
    slots: []
  },
  {
    date: "Aug 22",
    dayName: "Sat",
    dayNumber: 22,
    hasAvailability: false,
    slots: []
  }
];

export function CoachSchedulingCard({
  coach = defaultCoach,
  locations = defaultLocations,
  weekSchedule = defaultWeekSchedule,
  onLocationChange,
  onTimeSlotSelect,
  onWeekChange,
  enableAnimations = true,
  className
}: CoachSchedulingProps) {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [weekRange] = useState("Aug 17 - Aug 22");
  const [showConfirmationView, setShowConfirmationView] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<{day: string, time: string, dayName: string} | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = enableAnimations && !shouldReduceMotion;
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    setIsLocationDropdownOpen(false);
    onLocationChange?.(location);
  };

  const handleTimeSlotClick = (day: string, time: string) => {
    const dayInfo = weekSchedule.find(d => d.date === day);
    setSelectedTimeSlot({
      day,
      time,
      dayName: dayInfo?.dayName || day
    });
    setShowConfirmationView(true);
    onTimeSlotSelect?.(day, time);
  };

  const handleBackToMain = () => {
    setShowConfirmationView(false);
    setSelectedTimeSlot(null);
  };

  const handleConfirmBooking = () => {
    // Handle booking confirmation logic here
    setShowConfirmationView(false);
    setSelectedTimeSlot(null);
  };

  const handleWeekNavigation = (direction: "prev" | "next") => {
    onWeekChange?.(direction);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -25,
      scale: 0.95,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
      },
    },
  };

  const timeSlotVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      }
    }
  };

  return (
    <motion.div
      variants={shouldAnimate ? containerVariants : {}}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate="visible"
      className={cn(
        "bg-card rounded-xl border border-border/50 shadow-lg overflow-hidden max-w-2xl relative",
        className
      )}
    >
      <div className="relative h-auto">
        {/* Main Content */}
        <motion.div
          initial={false}
          animate={{ 
            y: showConfirmationView ? "-20px" : "0px",
            opacity: showConfirmationView ? 0.3 : 1,
            scale: showConfirmationView ? 0.95 : 1
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            mass: 0.8
          }}
          className="w-full"
        >
      {/* Coach Profile Header */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="p-6 pb-6"
      >
        <div className="flex items-start justify-between gap-6">
          {/* Left Side - Profile Image */}
          <motion.div
            whileHover={shouldAnimate ? { 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            } : {}}
            className="flex-shrink-0"
          >
            <img
              src={coach.imageUrl}
              alt={coach.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
          </motion.div>

          {/* Center - Coach Info */}
          <div className="flex-1 min-w-0 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {coach.name}
            </h2>
            
            {/* Rating and Details Row */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-red-500 text-red-500" />
                <span className="font-medium">{coach.rating}</span>
                <motion.button
                  whileHover={shouldAnimate ? { 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  } : {}}
                  className="underline hover:text-foreground transition-colors"
                >
                  ({coach.reviewCount} reviews)
                </motion.button>
              </div>
              <span>•</span>
              <span>{coach.title}</span>
              <span>•</span>
              <span>{coach.location}</span>
            </div>
          </div>

          {/* Right Side - Pricing */}
          <motion.div
            initial={shouldAnimate ? { 
              opacity: 0, 
              scale: 0.8,
              x: 20,
              filter: "blur(4px)"
            } : {}}
            animate={shouldAnimate ? {
              opacity: 1,
              scale: 1,
              x: 0,
              filter: "blur(0px)"
            } : {}}
            transition={shouldAnimate ? {
              type: "spring",
              stiffness: 400,
              damping: 25,
              delay: 0.3,
              mass: 0.6
            } : {}}
            className="text-right flex-shrink-0"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Per Session</p>
            <motion.p 
              className="text-2xl font-bold text-emerald-500"
              initial={shouldAnimate ? { scale: 0.5 } : {}}
              animate={shouldAnimate ? { scale: 1 } : {}}
              transition={shouldAnimate ? {
                type: "spring",
                stiffness: 500,
                damping: 20,
                delay: 0.5
              } : {}}
            >
              $75
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Location Selector */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="px-6 pb-4 relative z-50"
        style={{ overflow: 'visible' }}
      >
        <label className="block text-sm text-muted-foreground mb-2">
          Choose location
        </label>
        <div className="relative z-50" ref={dropdownRef}>
          <motion.button
            whileHover={shouldAnimate ? {
              scale: 1.01,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            } : {}}
            whileTap={shouldAnimate ? { scale: 0.99 } : {}}
            onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
            aria-expanded={isLocationDropdownOpen}
            aria-haspopup="listbox"
            className="w-full flex items-center justify-between p-3 bg-muted rounded-lg border border-border/50 hover:border-border transition-colors"
          >
            <span className="text-foreground">{selectedLocation}</span>
            <ChevronDown className={cn(
              "w-4 h-4 text-muted-foreground transition-transform",
              isLocationDropdownOpen && "rotate-180"
            )} />
          </motion.button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isLocationDropdownOpen && (
              <motion.div
                initial={shouldAnimate ? { opacity: 0, y: -10, scale: 0.95 } : {}}
                animate={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : {}}
                exit={shouldAnimate ? { opacity: 0, y: -10, scale: 0.95 } : {}}
                transition={shouldAnimate ? { type: "spring", stiffness: 400, damping: 25 } : {}}
                className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-lg shadow-xl z-[9999] overflow-hidden"
                role="listbox"
              >
                {locations.map((location, index) => (
                  <motion.button
                    key={location}
                    initial={shouldAnimate ? { opacity: 0, x: -10 } : {}}
                    animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                    transition={shouldAnimate ? { delay: index * 0.05 } : {}}
                    whileHover={shouldAnimate ? {
                      backgroundColor: "hsl(var(--muted))",
                      transition: { duration: 0.15 }
                    } : {}}
                    onClick={() => handleLocationChange(location)}
                    role="option"
                    aria-selected={location === selectedLocation}
                    className="w-full text-left p-3 hover:bg-muted transition-colors text-foreground"
                  >
                    {location}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Separator */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="mx-6 border-t border-border/50"
      />

      {/* Week Navigation */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="p-6 pb-4"
      >
        <div className="flex items-center justify-between">
                     <motion.button
             whileHover={shouldAnimate ? {
               scale: 1.05,
               transition: { type: "spring", stiffness: 400, damping: 25 }
             } : {}}
             whileTap={shouldAnimate ? { scale: 0.95 } : {}}
             onClick={() => handleWeekNavigation("prev")}
             aria-label="Previous week"
             className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
           >
             <ChevronLeft className="w-5 h-5 text-muted-foreground" />
           </motion.button>

          <h3 className="font-semibold text-foreground">
            {weekRange}
          </h3>

                     <motion.button
             whileHover={shouldAnimate ? {
               scale: 1.05,
               transition: { type: "spring", stiffness: 400, damping: 25 }
             } : {}}
             whileTap={shouldAnimate ? { scale: 0.95 } : {}}
             onClick={() => handleWeekNavigation("next")}
             aria-label="Next week"
             className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
           >
             <ChevronRight className="w-5 h-5 text-muted-foreground" />
           </motion.button>
        </div>
      </motion.div>

      {/* Daily Schedule */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="px-6 pb-6 space-y-4"
      >
        {weekSchedule.map((day) => (
          <motion.div
            key={day.date}
            variants={shouldAnimate ? itemVariants : {}}
            className="space-y-3"
          >
            {/* Day Header */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-foreground">
                  {day.dayName}, {day.date}
                </h4>
              </div>
              {!day.hasAvailability && (
                <span className="text-sm text-muted-foreground">
                  No Availability
                </span>
              )}
            </div>

            {/* Time Slots */}
            {day.hasAvailability && (
              <motion.div 
                variants={shouldAnimate ? containerVariants : {}}
                className="flex flex-wrap gap-2"
              >
                {day.slots.map((slot) => (
                                     <motion.button
                     key={`${day.date}-${slot.time}`}
                     variants={shouldAnimate ? timeSlotVariants : {}}
                     whileHover={shouldAnimate && slot.available ? {
                       scale: 1.05,
                       y: -2,
                       transition: { type: "spring", stiffness: 400, damping: 25 }
                     } : {}}
                     whileTap={shouldAnimate && slot.available ? { scale: 0.98 } : {}}
                     onClick={() => slot.available && handleTimeSlotClick(day.date, slot.time)}
                     disabled={!slot.available}
                     aria-label={`${slot.available ? 'Book' : 'Unavailable'} time slot at ${slot.time} on ${day.dayName}, ${day.date}`}
                     className={cn(
                       "px-3 py-1.5 text-sm rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
                       slot.available
                         ? "bg-background border-border/50 hover:border-border hover:bg-muted text-foreground cursor-pointer"
                         : "bg-muted/50 border-border/30 text-muted-foreground cursor-not-allowed opacity-60"
                     )}
                   >
                     {slot.time}
                   </motion.button>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Actions */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="border-t border-border/50 p-6"
      >
                 <div className="flex gap-3">
           <motion.button
             whileHover={shouldAnimate ? {
               scale: 1.02,
               transition: { type: "spring", stiffness: 400, damping: 25 }
             } : {}}
             whileTap={shouldAnimate ? { scale: 0.98 } : {}}
             className="flex-1 bg-muted text-muted-foreground py-2.5 rounded-lg hover:bg-muted/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
           >
             Cancel
           </motion.button>
           <motion.button
             whileHover={shouldAnimate ? {
               scale: 1.02,
               transition: { type: "spring", stiffness: 400, damping: 25 }
             } : {}}
             whileTap={shouldAnimate ? { scale: 0.98 } : {}}
             className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
           >
             Next
           </motion.button>
         </div>
        </motion.div>
        </motion.div>

        {/* Confirmation View */}
        <motion.div
          initial={false}
          animate={{ 
            y: showConfirmationView ? "0%" : "100%",
            opacity: showConfirmationView ? 1 : 0 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            mass: 0.8
          }}
          className="absolute top-0 left-0 w-full h-full bg-card"
        >
          <div className="p-6 space-y-6">
            {/* Header with back button */}
            <div className="flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBackToMain}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium">Back</span>
              </motion.button>
              <h3 className="text-lg font-semibold text-foreground">Confirm Booking</h3>
              <div></div> {/* Spacer for centering */}
            </div>

            {/* Coach info summary */}
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <img
                src={coach.imageUrl}
                alt={coach.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-semibold text-foreground">{coach.name}</h4>
                <p className="text-sm text-muted-foreground">{coach.title}</p>
              </div>
            </div>

            {/* Booking details */}
            {selectedTimeSlot && (
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Your Booking</p>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-lg font-semibold text-foreground">
                      {selectedTimeSlot.dayName}, {selectedTimeSlot.day}
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {selectedTimeSlot.time}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground font-medium">{selectedLocation}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground font-medium">1 hour</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="text-foreground font-medium">$75</span>
                  </div>
                </div>
              </div>
            )}

            {/* Confirm button */}
            <motion.button
              whileHover={shouldAnimate ? { scale: 1.02, y: -1 } : {}}
              whileTap={shouldAnimate ? { scale: 0.98 } : {}}
              onClick={handleConfirmBooking}
              className="w-full relative overflow-hidden py-3 rounded-lg font-semibold transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground border cursor-pointer group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                CONFIRM BOOKING
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {/* Gradient shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 

demo.tsx
"use client";

import { useState } from "react";
import { CoachSchedulingCard } from "@/components/ui/coach-scheduling-card";

export default function Demo() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<{day: string, time: string} | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleTimeSlotSelect = (day: string, time: string) => {
    setSelectedTimeSlot({ day, time });
    console.log(`Selected: ${day} at ${time}`);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    console.log(`Location changed to: ${location}`);
  };

  const handleWeekChange = (direction: "prev" | "next") => {
    console.log(`Week navigation: ${direction}`);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="flex justify-center">
          <CoachSchedulingCard
            onTimeSlotSelect={handleTimeSlotSelect}
            onLocationChange={handleLocationChange}
            onWeekChange={handleWeekChange}
          />
        </div>
      </div>
    </div>
  );
} 
```

Install NPM dependencies:
```bash
lucide-react, framer-motion
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
coach-scheduling-card.tsx
"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DaySchedule {
  date: string;
  dayName: string;
  dayNumber: number;
  slots: TimeSlot[];
  hasAvailability: boolean;
}

interface Coach {
  name: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

interface CoachSchedulingProps {
  coach?: Coach;
  locations?: string[];
  weekSchedule?: DaySchedule[];
  onLocationChange?: (location: string) => void;
  onTimeSlotSelect?: (day: string, time: string) => void;
  onWeekChange?: (direction: "prev" | "next") => void;
  enableAnimations?: boolean;
  className?: string;
}

const defaultCoach: Coach = {
  name: "Michael Baumgardner",
  title: "Tennis coach",
  location: "New York",
  rating: 5.0,
  reviewCount: 7,
  imageUrl: "https://images.unsplash.com/photo-1660463532854-f887f2a6c674"
};

const defaultLocations = [
  "Riverbank State Park Tennis Courts",
  "Central Park Tennis Center", 
  "Brooklyn Bridge Park Courts",
  "Prospect Park Tennis Center"
];

const defaultWeekSchedule: DaySchedule[] = [
  {
    date: "Aug 17",
    dayName: "Today",
    dayNumber: 17,
    hasAvailability: true,
    slots: [
      { time: "10:30 AM", available: true },
      { time: "11:00 AM", available: true },
      { time: "11:30 AM", available: true },
      { time: "12:00 PM", available: true },
      { time: "12:30 PM", available: true },
      { time: "01:00 PM", available: false },
      { time: "01:30 PM", available: true },
      { time: "02:00 PM", available: true },
      { time: "02:30 PM", available: true },
      { time: "03:00 PM", available: true }
    ]
  },
  {
    date: "Aug 18",
    dayName: "Tue",
    dayNumber: 18,
    hasAvailability: true,
    slots: [
      { time: "10:30 AM", available: true },
      { time: "11:00 AM", available: true },
      { time: "11:30 AM", available: true },
      { time: "12:00 PM", available: true },
      { time: "03:00 PM", available: true }
    ]
  },
  {
    date: "Aug 19",
    dayName: "Wed",
    dayNumber: 19,
    hasAvailability: true,
    slots: [
      { time: "11:00 AM", available: true },
      { time: "12:00 PM", available: true },
      { time: "12:30 PM", available: true },
      { time: "01:30 PM", available: false },
      { time: "02:00 PM", available: true },
      { time: "02:30 PM", available: true },
      { time: "03:00 PM", available: true }
    ]
  },
  {
    date: "Aug 20",
    dayName: "Thu",
    dayNumber: 20,
    hasAvailability: false,
    slots: []
  },
  {
    date: "Aug 21",
    dayName: "Fri",
    dayNumber: 21,
    hasAvailability: false,
    slots: []
  },
  {
    date: "Aug 22",
    dayName: "Sat",
    dayNumber: 22,
    hasAvailability: false,
    slots: []
  }
];

export function CoachSchedulingCard({
  coach = defaultCoach,
  locations = defaultLocations,
  weekSchedule = defaultWeekSchedule,
  onLocationChange,
  onTimeSlotSelect,
  onWeekChange,
  enableAnimations = true,
  className
}: CoachSchedulingProps) {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [weekRange] = useState("Aug 17 - Aug 22");
  const [showConfirmationView, setShowConfirmationView] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<{day: string, time: string, dayName: string} | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = enableAnimations && !shouldReduceMotion;
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    setIsLocationDropdownOpen(false);
    onLocationChange?.(location);
  };

  const handleTimeSlotClick = (day: string, time: string) => {
    const dayInfo = weekSchedule.find(d => d.date === day);
    setSelectedTimeSlot({
      day,
      time,
      dayName: dayInfo?.dayName || day
    });
    setShowConfirmationView(true);
    onTimeSlotSelect?.(day, time);
  };

  const handleBackToMain = () => {
    setShowConfirmationView(false);
    setSelectedTimeSlot(null);
  };

  const handleConfirmBooking = () => {
    // Handle booking confirmation logic here
    setShowConfirmationView(false);
    setSelectedTimeSlot(null);
  };

  const handleWeekNavigation = (direction: "prev" | "next") => {
    onWeekChange?.(direction);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -25,
      scale: 0.95,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
      },
    },
  };

  const timeSlotVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      }
    }
  };

  return (
    <motion.div
      variants={shouldAnimate ? containerVariants : {}}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate="visible"
      className={cn(
        "bg-card rounded-xl border border-border/50 shadow-lg overflow-hidden max-w-2xl relative",
        className
      )}
    >
      <div className="relative h-auto">
        {/* Main Content */}
        <motion.div
          initial={false}
          animate={{ 
            y: showConfirmationView ? "-20px" : "0px",
            opacity: showConfirmationView ? 0.3 : 1,
            scale: showConfirmationView ? 0.95 : 1
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            mass: 0.8
          }}
          className="w-full"
        >
      {/* Coach Profile Header */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="p-6 pb-6"
      >
        <div className="flex items-start justify-between gap-6">
          {/* Left Side - Profile Image */}
          <motion.div
            whileHover={shouldAnimate ? { 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            } : {}}
            className="flex-shrink-0"
          >
            <img
              src={coach.imageUrl}
              alt={coach.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
          </motion.div>

          {/* Center - Coach Info */}
          <div className="flex-1 min-w-0 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {coach.name}
            </h2>
            
            {/* Rating and Details Row */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-red-500 text-red-500" />
                <span className="font-medium">{coach.rating}</span>
                <motion.button
                  whileHover={shouldAnimate ? { 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  } : {}}
                  className="underline hover:text-foreground transition-colors"
                >
                  ({coach.reviewCount} reviews)
                </motion.button>
              </div>
              <span>•</span>
              <span>{coach.title}</span>
              <span>•</span>
              <span>{coach.location}</span>
            </div>
          </div>

          {/* Right Side - Pricing */}
          <motion.div
            initial={shouldAnimate ? { 
              opacity: 0, 
              scale: 0.8,
              x: 20,
              filter: "blur(4px)"
            } : {}}
            animate={shouldAnimate ? {
              opacity: 1,
              scale: 1,
              x: 0,
              filter: "blur(0px)"
            } : {}}
            transition={shouldAnimate ? {
              type: "spring",
              stiffness: 400,
              damping: 25,
              delay: 0.3,
              mass: 0.6
            } : {}}
            className="text-right flex-shrink-0"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Per Session</p>
            <motion.p 
              className="text-2xl font-bold text-emerald-500"
              initial={shouldAnimate ? { scale: 0.5 } : {}}
              animate={shouldAnimate ? { scale: 1 } : {}}
              transition={shouldAnimate ? {
                type: "spring",
                stiffness: 500,
                damping: 20,
                delay: 0.5
              } : {}}
            >
              $75
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Location Selector */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="px-6 pb-4 relative z-50"
        style={{ overflow: 'visible' }}
      >
        <label className="block text-sm text-muted-foreground mb-2">
          Choose location
        </label>
        <div className="relative z-50" ref={dropdownRef}>
          <motion.button
            whileHover={shouldAnimate ? {
              scale: 1.01,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            } : {}}
            whileTap={shouldAnimate ? { scale: 0.99 } : {}}
            onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
            aria-expanded={isLocationDropdownOpen}
            aria-haspopup="listbox"
            className="w-full flex items-center justify-between p-3 bg-muted rounded-lg border border-border/50 hover:border-border transition-colors"
          >
            <span className="text-foreground">{selectedLocation}</span>
            <ChevronDown className={cn(
              "w-4 h-4 text-muted-foreground transition-transform",
              isLocationDropdownOpen && "rotate-180"
            )} />
          </motion.button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isLocationDropdownOpen && (
              <motion.div
                initial={shouldAnimate ? { opacity: 0, y: -10, scale: 0.95 } : {}}
                animate={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : {}}
                exit={shouldAnimate ? { opacity: 0, y: -10, scale: 0.95 } : {}}
                transition={shouldAnimate ? { type: "spring", stiffness: 400, damping: 25 } : {}}
                className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-lg shadow-xl z-[9999] overflow-hidden"
                role="listbox"
              >
                {locations.map((location, index) => (
                  <motion.button
                    key={location}
                    initial={shouldAnimate ? { opacity: 0, x: -10 } : {}}
                    animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                    transition={shouldAnimate ? { delay: index * 0.05 } : {}}
                    whileHover={shouldAnimate ? {
                      backgroundColor: "hsl(var(--muted))",
                      transition: { duration: 0.15 }
                    } : {}}
                    onClick={() => handleLocationChange(location)}
                    role="option"
                    aria-selected={location === selectedLocation}
                    className="w-full text-left p-3 hover:bg-muted transition-colors text-foreground"
                  >
                    {location}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Separator */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="mx-6 border-t border-border/50"
      />

      {/* Week Navigation */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="p-6 pb-4"
      >
        <div className="flex items-center justify-between">
                     <motion.button
             whileHover={shouldAnimate ? {
               scale: 1.05,
               transition: { type: "spring", stiffness: 400, damping: 25 }
             } : {}}
             whileTap={shouldAnimate ? { scale: 0.95 } : {}}
             onClick={() => handleWeekNavigation("prev")}
             aria-label="Previous week"
             className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
           >
             <ChevronLeft className="w-5 h-5 text-muted-foreground" />
           </motion.button>

          <h3 className="font-semibold text-foreground">
            {weekRange}
          </h3>

                     <motion.button
             whileHover={shouldAnimate ? {
               scale: 1.05,
               transition: { type: "spring", stiffness: 400, damping: 25 }
             } : {}}
             whileTap={shouldAnimate ? { scale: 0.95 } : {}}
             onClick={() => handleWeekNavigation("next")}
             aria-label="Next week"
             className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
           >
             <ChevronRight className="w-5 h-5 text-muted-foreground" />
           </motion.button>
        </div>
      </motion.div>

      {/* Daily Schedule */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="px-6 pb-6 space-y-4"
      >
        {weekSchedule.map((day) => (
          <motion.div
            key={day.date}
            variants={shouldAnimate ? itemVariants : {}}
            className="space-y-3"
          >
            {/* Day Header */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-foreground">
                  {day.dayName}, {day.date}
                </h4>
              </div>
              {!day.hasAvailability && (
                <span className="text-sm text-muted-foreground">
                  No Availability
                </span>
              )}
            </div>

            {/* Time Slots */}
            {day.hasAvailability && (
              <motion.div 
                variants={shouldAnimate ? containerVariants : {}}
                className="flex flex-wrap gap-2"
              >
                {day.slots.map((slot) => (
                                     <motion.button
                     key={`${day.date}-${slot.time}`}
                     variants={shouldAnimate ? timeSlotVariants : {}}
                     whileHover={shouldAnimate && slot.available ? {
                       scale: 1.05,
                       y: -2,
                       transition: { type: "spring", stiffness: 400, damping: 25 }
                     } : {}}
                     whileTap={shouldAnimate && slot.available ? { scale: 0.98 } : {}}
                     onClick={() => slot.available && handleTimeSlotClick(day.date, slot.time)}
                     disabled={!slot.available}
                     aria-label={`${slot.available ? 'Book' : 'Unavailable'} time slot at ${slot.time} on ${day.dayName}, ${day.date}`}
                     className={cn(
                       "px-3 py-1.5 text-sm rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
                       slot.available
                         ? "bg-background border-border/50 hover:border-border hover:bg-muted text-foreground cursor-pointer"
                         : "bg-muted/50 border-border/30 text-muted-foreground cursor-not-allowed opacity-60"
                     )}
                   >
                     {slot.time}
                   </motion.button>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Actions */}
      <motion.div 
        variants={shouldAnimate ? itemVariants : {}}
        className="border-t border-border/50 p-6"
      >
                 <div className="flex gap-3">
           <motion.button
             whileHover={shouldAnimate ? {
               scale: 1.02,
               transition: { type: "spring", stiffness: 400, damping: 25 }
             } : {}}
             whileTap={shouldAnimate ? { scale: 0.98 } : {}}
             className="flex-1 bg-muted text-muted-foreground py-2.5 rounded-lg hover:bg-muted/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
           >
             Cancel
           </motion.button>
           <motion.button
             whileHover={shouldAnimate ? {
               scale: 1.02,
               transition: { type: "spring", stiffness: 400, damping: 25 }
             } : {}}
             whileTap={shouldAnimate ? { scale: 0.98 } : {}}
             className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
           >
             Next
           </motion.button>
         </div>
        </motion.div>
        </motion.div>

        {/* Confirmation View */}
        <motion.div
          initial={false}
          animate={{ 
            y: showConfirmationView ? "0%" : "100%",
            opacity: showConfirmationView ? 1 : 0 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            mass: 0.8
          }}
          className="absolute top-0 left-0 w-full h-full bg-card"
        >
          <div className="p-6 space-y-6">
            {/* Header with back button */}
            <div className="flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBackToMain}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium">Back</span>
              </motion.button>
              <h3 className="text-lg font-semibold text-foreground">Confirm Booking</h3>
              <div></div> {/* Spacer for centering */}
            </div>

            {/* Coach info summary */}
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <img
                src={coach.imageUrl}
                alt={coach.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-semibold text-foreground">{coach.name}</h4>
                <p className="text-sm text-muted-foreground">{coach.title}</p>
              </div>
            </div>

            {/* Booking details */}
            {selectedTimeSlot && (
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Your Booking</p>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-lg font-semibold text-foreground">
                      {selectedTimeSlot.dayName}, {selectedTimeSlot.day}
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {selectedTimeSlot.time}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground font-medium">{selectedLocation}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground font-medium">1 hour</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="text-foreground font-medium">$75</span>
                  </div>
                </div>
              </div>
            )}

            {/* Confirm button */}
            <motion.button
              whileHover={shouldAnimate ? { scale: 1.02, y: -1 } : {}}
              whileTap={shouldAnimate ? { scale: 0.98 } : {}}
              onClick={handleConfirmBooking}
              className="w-full relative overflow-hidden py-3 rounded-lg font-semibold transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground border cursor-pointer group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                CONFIRM BOOKING
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {/* Gradient shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 

demo.tsx
"use client";

import { useState } from "react";
import { CoachSchedulingCard } from "@/components/ui/coach-scheduling-card";

export default function Demo() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<{day: string, time: string} | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleTimeSlotSelect = (day: string, time: string) => {
    setSelectedTimeSlot({ day, time });
    console.log(`Selected: ${day} at ${time}`);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    console.log(`Location changed to: ${location}`);
  };

  const handleWeekChange = (direction: "prev" | "next") => {
    console.log(`Week navigation: ${direction}`);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="flex justify-center">
          <CoachSchedulingCard
            onTimeSlotSelect={handleTimeSlotSelect}
            onLocationChange={handleLocationChange}
            onWeekChange={handleWeekChange}
          />
        </div>
      </div>
    </div>
  );
} 
```

Install NPM dependencies:
```bash
lucide-react, framer-motion
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
multiple-months-range.tsx
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("flex flex-col items-center gap-4 p-4 rounded-lg")}>
      <h1 className="text-2xl font-bold mb-2">Component Example</h1>
      <h2 className="text-xl font-semibold">{count}</h2>
      <div className="flex gap-2">
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
};


demo.tsx
"use client"

import * as React from "react"
import { type DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

export function Calendar05() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  })

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border shadow-sm"
    />
  )
}

```

Copy-paste these files for dependencies:
```tsx
originui/calendar
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components: userComponents,
  ...props
}: CalendarProps) {
  const defaultClassNames = {
    months: "relative flex flex-col sm:flex-row gap-4",
    month: "w-full",
    month_caption: "relative mx-10 mb-1 flex h-9 items-center justify-center z-20",
    caption_label: "text-sm font-medium",
    nav: "absolute top-0 flex w-full justify-between z-10",
    button_previous: cn(
      buttonVariants({ variant: "ghost" }),
      "size-9 text-muted-foreground/80 hover:text-foreground p-0",
    ),
    button_next: cn(
      buttonVariants({ variant: "ghost" }),
      "size-9 text-muted-foreground/80 hover:text-foreground p-0",
    ),
    weekday: "size-9 p-0 text-xs font-medium text-muted-foreground/80",
    day_button:
      "relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg p-0 text-foreground outline-offset-2 group-[[data-selected]:not(.range-middle)]:[transition-property:color,background-color,border-radius,box-shadow] group-[[data-selected]:not(.range-middle)]:duration-150 focus:outline-none group-data-[disabled]:pointer-events-none focus-visible:z-10 hover:bg-accent group-data-[selected]:bg-primary hover:text-foreground group-data-[selected]:text-primary-foreground group-data-[disabled]:text-foreground/30 group-data-[disabled]:line-through group-data-[outside]:text-foreground/30 group-data-[outside]:group-data-[selected]:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 group-[.range-start:not(.range-end)]:rounded-e-none group-[.range-end:not(.range-start)]:rounded-s-none group-[.range-middle]:rounded-none group-data-[selected]:group-[.range-middle]:bg-accent group-data-[selected]:group-[.range-middle]:text-foreground",
    day: "group size-9 px-0 text-sm",
    range_start: "range-start",
    range_end: "range-end",
    range_middle: "range-middle",
    today:
      "*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary [&[data-selected]:not(.range-middle)>*]:after:bg-background [&[data-disabled]>*]:after:bg-foreground/30 *:after:transition-colors",
    outside: "text-muted-foreground data-selected:bg-accent/50 data-selected:text-muted-foreground",
    hidden: "invisible",
    week_number: "size-9 p-0 text-xs font-medium text-muted-foreground/80",
  };

  const mergedClassNames: typeof defaultClassNames = Object.keys(defaultClassNames).reduce(
    (acc, key) => ({
      ...acc,
      [key]: classNames?.[key as keyof typeof classNames]
        ? cn(
            defaultClassNames[key as keyof typeof defaultClassNames],
            classNames[key as keyof typeof classNames],
          )
        : defaultClassNames[key as keyof typeof defaultClassNames],
    }),
    {} as typeof defaultClassNames,
  );

  const defaultComponents = {
    Chevron: (props: any) => {
      if (props.orientation === "left") {
        return <ChevronLeft size={16} strokeWidth={2} {...props} aria-hidden="true" />;
      }
      return <ChevronRight size={16} strokeWidth={2} {...props} aria-hidden="true" />;
    },
  };

  const mergedComponents = {
    ...defaultComponents,
    ...userComponents,
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-fit", className)}
      classNames={mergedClassNames}
      components={mergedComponents}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
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
lucide-react, react-day-picker, @radix-ui/react-slot, class-variance-authority
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
calendar-with-event-slots.tsx
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("flex flex-col items-center gap-4 p-4 rounded-lg")}>
      <h1 className="text-2xl font-bold mb-2">Component Example</h1>
      <h2 className="text-xl font-semibold">{count}</h2>
      <div className="flex gap-2">
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
};


demo.tsx
"use client"

import * as React from "react"
import { formatDateRange } from "little-date"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card-shadcn"

const events = [
  {
    title: "Team Sync Meeting",
    from: "2025-06-12T09:00:00",
    to: "2025-06-12T10:00:00",
  },
  {
    title: "Design Review",
    from: "2025-06-12T11:30:00",
    to: "2025-06-12T12:30:00",
  },
  {
    title: "Client Presentation",
    from: "2025-06-12T14:00:00",
    to: "2025-06-12T15:00:00",
  },
]

export function Calendar31() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <Card className="w-fit py-4">
      <CardContent className="px-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-transparent p-0"
          required
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 border-t px-4 !pt-4">
        <div className="flex w-full items-center justify-between px-1">
          <div className="text-sm font-medium">
            {date?.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-6"
            title="Add Event"
          >
            <PlusIcon />
            <span className="sr-only">Add Event</span>
          </Button>
        </div>
        <div className="flex w-full flex-col gap-2">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full"
            >
              <div className="font-medium">{event.title}</div>
              <div className="text-muted-foreground text-xs">
                {formatDateRange(new Date(event.from), new Date(event.to))}
              </div>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
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
```tsx
originui/calendar
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components: userComponents,
  ...props
}: CalendarProps) {
  const defaultClassNames = {
    months: "relative flex flex-col sm:flex-row gap-4",
    month: "w-full",
    month_caption: "relative mx-10 mb-1 flex h-9 items-center justify-center z-20",
    caption_label: "text-sm font-medium",
    nav: "absolute top-0 flex w-full justify-between z-10",
    button_previous: cn(
      buttonVariants({ variant: "ghost" }),
      "size-9 text-muted-foreground/80 hover:text-foreground p-0",
    ),
    button_next: cn(
      buttonVariants({ variant: "ghost" }),
      "size-9 text-muted-foreground/80 hover:text-foreground p-0",
    ),
    weekday: "size-9 p-0 text-xs font-medium text-muted-foreground/80",
    day_button:
      "relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg p-0 text-foreground outline-offset-2 group-[[data-selected]:not(.range-middle)]:[transition-property:color,background-color,border-radius,box-shadow] group-[[data-selected]:not(.range-middle)]:duration-150 focus:outline-none group-data-[disabled]:pointer-events-none focus-visible:z-10 hover:bg-accent group-data-[selected]:bg-primary hover:text-foreground group-data-[selected]:text-primary-foreground group-data-[disabled]:text-foreground/30 group-data-[disabled]:line-through group-data-[outside]:text-foreground/30 group-data-[outside]:group-data-[selected]:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 group-[.range-start:not(.range-end)]:rounded-e-none group-[.range-end:not(.range-start)]:rounded-s-none group-[.range-middle]:rounded-none group-data-[selected]:group-[.range-middle]:bg-accent group-data-[selected]:group-[.range-middle]:text-foreground",
    day: "group size-9 px-0 text-sm",
    range_start: "range-start",
    range_end: "range-end",
    range_middle: "range-middle",
    today:
      "*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary [&[data-selected]:not(.range-middle)>*]:after:bg-background [&[data-disabled]>*]:after:bg-foreground/30 *:after:transition-colors",
    outside: "text-muted-foreground data-selected:bg-accent/50 data-selected:text-muted-foreground",
    hidden: "invisible",
    week_number: "size-9 p-0 text-xs font-medium text-muted-foreground/80",
  };

  const mergedClassNames: typeof defaultClassNames = Object.keys(defaultClassNames).reduce(
    (acc, key) => ({
      ...acc,
      [key]: classNames?.[key as keyof typeof classNames]
        ? cn(
            defaultClassNames[key as keyof typeof defaultClassNames],
            classNames[key as keyof typeof classNames],
          )
        : defaultClassNames[key as keyof typeof defaultClassNames],
    }),
    {} as typeof defaultClassNames,
  );

  const defaultComponents = {
    Chevron: (props: any) => {
      if (props.orientation === "left") {
        return <ChevronLeft size={16} strokeWidth={2} {...props} aria-hidden="true" />;
      }
      return <ChevronRight size={16} strokeWidth={2} {...props} aria-hidden="true" />;
    },
  };

  const mergedComponents = {
    ...defaultComponents,
    ...userComponents,
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-fit", className)}
      classNames={mergedClassNames}
      components={mergedComponents}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
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
@radix-ui/react-slot, class-variance-authority, lucide-react, react-day-picker
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
glass-calendar.tsx
import * as React from "react";
import { Settings, Plus, Edit2, ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths, isSameDay, isToday, getDate, getDaysInMonth, startOfMonth } from "date-fns";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn

// --- TYPE DEFINITIONS ---
interface Day {
  date: Date;
  isToday: boolean;
  isSelected: boolean;
}

interface GlassCalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  className?: string;
}

// --- HELPER TO HIDE SCROLLBAR ---
const ScrollbarHide = () => (
  <style>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);


// --- MAIN COMPONENT ---
export const GlassCalendar = React.forwardRef<HTMLDivElement, GlassCalendarProps>(
  ({ className, selectedDate: propSelectedDate, onDateSelect, ...props }, ref) => {
    const [currentMonth, setCurrentMonth] = React.useState(propSelectedDate || new Date());
    const [selectedDate, setSelectedDate] = React.useState(propSelectedDate || new Date());

    // Generate all days for the current month
    const monthDays = React.useMemo(() => {
        const start = startOfMonth(currentMonth);
        const totalDays = getDaysInMonth(currentMonth);
        const days: Day[] = [];
        for (let i = 0; i < totalDays; i++) {
            const date = new Date(start.getFullYear(), start.getMonth(), i + 1);
            days.push({
                date,
                isToday: isToday(date),
                isSelected: isSameDay(date, selectedDate),
            });
        }
        return days;
    }, [currentMonth, selectedDate]);

    const handleDateClick = (date: Date) => {
      setSelectedDate(date);
      onDateSelect?.(date);
    };
    
    const handlePrevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-[360px] rounded-3xl p-5 shadow-2xl overflow-hidden",
          "bg-black/20 backdrop-blur-xl border border-white/10",
          "text-white font-sans",
          className
        )}
        {...props}
      >
        <ScrollbarHide />
        {/* Header: Tabs and Settings */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 rounded-lg bg-black/20 p-1">
            <button className="rounded-md bg-white px-4 py-1 text-xs font-bold text-black shadow-md">
              Weekly
            </button>
            <button className="rounded-md px-4 py-1 text-xs font-semibold text-white/60 transition-colors hover:text-white">
              Monthly
            </button>
          </div>
          <button className="p-2 text-white/70 transition-colors hover:bg-black/20 rounded-full">
            <Settings className="h-5 w-5" />
          </button>
        </div>

        {/* Date Display and Navigation */}
        <div className="my-6 flex items-center justify-between">
            <motion.p 
              key={format(currentMonth, "MMMM")}
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }}
              className="text-4xl font-bold tracking-tight"
            >
                {format(currentMonth, "MMMM")}
            </motion.p>
            <div className="flex items-center space-x-2">
                <button onClick={handlePrevMonth} className="p-1 rounded-full text-white/70 transition-colors hover:bg-black/20">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={handleNextMonth} className="p-1 rounded-full text-white/70 transition-colors hover:bg-black/20">
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </div>

        {/* Scrollable Monthly Calendar Grid */}
        <div className="overflow-x-auto scrollbar-hide -mx-5 px-5">
            <div className="flex space-x-4">
                {monthDays.map((day) => (
                    <div key={format(day.date, "yyyy-MM-dd")} className="flex flex-col items-center space-y-2 flex-shrink-0">
                        <span className="text-xs font-bold text-white/50">
                            {format(day.date, "E").charAt(0)}
                        </span>
                        <button
                            onClick={() => handleDateClick(day.date)}
                            className={cn(
                                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 relative",
                                {
                                    "bg-gradient-to-br from-pink-500 to-orange-400 text-white shadow-lg": day.isSelected,
                                    "hover:bg-white/20": !day.isSelected,
                                    "text-white": !day.isSelected,
                                }
                            )}
                        >
                            {day.isToday && !day.isSelected && (
                                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-pink-400"></span>
                            )}
                            {getDate(day.date)}
                        </button>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Divider */}
        <div className="mt-6 h-px bg-white/20" />

        {/* Footer Actions */}
        <div className="mt-4 flex items-center justify-between space-x-4">
           <button className="flex items-center space-x-2 text-sm font-medium text-white/70 transition-colors hover:text-white">
             <Edit2 className="h-4 w-4" />
             <span>Add a note...</span>
           </button>
           <button className="flex items-center space-x-2 rounded-lg bg-black/20 px-3 py-2 text-xs font-bold text-white shadow-md transition-colors hover:bg-black/30">
             <Plus className="h-4 w-4" />
             <span>New Event</span>
           </button>
        </div>
      </div>
    );
  }
);

GlassCalendar.displayName = "GlassCalendar";


demo.tsx
import * as React from "react";
import { GlassCalendar } from "@/components/ui/glass-calendar"; // Adjust the import path as needed

export default function GlassCalendarDemo() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  
  // A high-quality, abstract background image for the glass effect
  const backgroundImageUrl = "https://plus.unsplash.com/premium_photo-1673873438024-81d29f555b95?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjM2fHxjb2xvcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div 
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center p-4 bg-slate-900"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <GlassCalendar 
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
        className="transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

```

Install NPM dependencies:
```bash
date-fns, lucide-react, framer-motion
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
git-hub-calendar.tsx
"use client";

import { useState, useEffect } from "react";
import { format, subDays, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from "date-fns";

interface ContributionDay {
  date: string; // ISO date string (e.g., "2025-09-13")
  count: number;
}

interface GitHubCalendarProps {
  data: ContributionDay[]; // Contribution data
  colors?: string[]; // Custom color scale (default: GitHub-like greens)
}

const GitHubCalendar = ({ data, colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"] }: GitHubCalendarProps) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const today = new Date();
  const startDate = subDays(today, 364); // One year back
  const weeks = 53;
  const daysInWeek = 7;

  // Process data prop
  useEffect(() => {
    setContributions(data.map((item) => ({ ...item, date: new Date(item.date) })));
  }, [data]);

  // Get color based on contribution count
  const getColor = (count: number) => {
    if (count === 0) return colors[0];
    if (count === 1) return colors[1];
    if (count === 2) return colors[2];
    if (count === 3) return colors[3];
    return colors[4] || colors[colors.length - 1]; // Fallback to last color
  };

  // Render weeks
  const renderWeeks = () => {
    const weeksArray = [];
    let currentWeekStart = startOfWeek(startDate, { weekStartsOn: 0 });

    for (let i = 0; i < weeks; i++) {
      const weekDays = eachDayOfInterval({
        start: currentWeekStart,
        end: endOfWeek(currentWeekStart, { weekStartsOn: 0 }),
      });

      weeksArray.push(
        <div key={i} className="flex flex-col gap-1">
          {weekDays.map((day, index) => {
            const contribution = contributions.find((c) => isSameDay(new Date(c.date), day));
            const color = contribution ? getColor(contribution.count) : colors[0];

            return (
              <div
                key={index}
                className={`w-3 h-3 rounded-[4px]`}
                style={{ backgroundColor: color }}
                title={`${format(day, "PPP")}: ${contribution?.count || 0} contributions`}
              />
            );
          })}
        </div>
      );
      currentWeekStart = addDays(currentWeekStart, 7);
    }

    return weeksArray;
  };

  // Render month labels
  const renderMonthLabels = () => {
    const months = [];
    let currentMonth = startDate;
    for (let i = 0; i < 12; i++) {
      months.push(
        <span key={i} className="text-xs text-gray-500">
          {format(currentMonth, "MMM")}
        </span>
      );
      currentMonth = addDays(currentMonth, 30);
    }
    return months;
  };

  // Render day labels
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="p-4 border rounded-lg">
      <div className="flex">
        <div className="flex flex-col justify-between mt-5.5 mr-2">
          {dayLabels.map((day, index) => (
            <span key={index} className="text-xs text-gray-500 h-3">
              {day}
            </span>
          ))}
        </div>
        <div>
          <div className="flex w-full justify-between gap-4 mb-2">{renderMonthLabels()}</div>
          <div className="flex gap-1">{renderWeeks()}</div>
        </div>
      </div>
      <div className="mt-4 justify-center flex gap-2 text-xs items-center">
        <span>Less</span>
        {colors.map((color, index) => (
          <div key={index} className="w-3 h-3 rounded-[4px]" style={{ backgroundColor: color }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export {GitHubCalendar};

demo.tsx
import { GitHubCalendar } from "@/components/ui/git-hub-calendar";

export default function DemoOne() {
  const contributionData = [
  { date: "2025-10-13", count: 3 },
  { date: "2025-05-12", count: 1 },
  { date: "2025-09-11", count: 2 },
  { date: "2025-09-10", count: 5 },
  { date: "2024-09-13", count: 2 },
  { date: "2024-09-15", count: 0 },
  { date: "2024-09-20", count: 4 },
  { date: "2024-10-01", count: 1 },
  { date: "2024-10-05", count: 3 },
  { date: "2024-10-10", count: 0 },
  { date: "2024-10-15", count: 2 },
  { date: "2024-10-20", count: 5 },
  { date: "2024-11-02", count: 1 },
  { date: "2024-11-07", count: 3 },
  { date: "2024-11-12", count: 4 },
  { date: "2024-11-18", count: 0 },
  { date: "2024-11-25", count: 2 },
  { date: "2024-12-01", count: 3 },
  { date: "2024-12-05", count: 1 },
  { date: "2024-12-10", count: 0 },
  { date: "2024-12-15", count: 4 },
  { date: "2024-12-20", count: 2 },
  { date: "2024-12-25", count: 0 },
  { date: "2025-01-03", count: 3 },
  { date: "2025-01-08", count: 1 },
  { date: "2025-01-15", count: 5 },
  { date: "2025-01-20", count: 2 },
  { date: "2025-01-25", count: 0 },
  { date: "2025-02-01", count: 4 },
  { date: "2025-02-07", count: 3 },
  { date: "2025-02-12", count: 1 },
  { date: "2025-02-18", count: 0 },
  { date: "2025-02-25", count: 2 },
  { date: "2025-03-02", count: 5 },
  { date: "2025-03-08", count: 3 },
  { date: "2025-03-15", count: 1 },
  { date: "2025-03-20", count: 0 },
  { date: "2025-03-25", count: 4 },
  { date: "2025-04-01", count: 2 },
  { date: "2025-04-07", count: 0 },
  { date: "2025-04-12", count: 3 },
  { date: "2025-04-18", count: 1 },
  { date: "2025-04-25", count: 5 },
  { date: "2025-05-01", count: 2 },
  { date: "2025-05-07", count: 0 },
  { date: "2025-06-01", count: 4 },
  { date: "2025-06-10", count: 3 },
  { date: "2025-06-15", count: 1 },
  { date: "2025-07-01", count: 0 },
  { date: "2025-07-10", count: 2 },
  { date: "2025-08-01", count: 5 },
  { date: "2025-08-15", count: 3 },
  { date: "2025-09-01", count: 1 },
];

  return (
    <div> 
      <GitHubCalendar 
      data={contributionData}  
      />
    </div>
  );
}
```

Install NPM dependencies:
```bash
date-fns
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
git-hub-calendar.tsx
"use client";

import { useState, useEffect } from "react";
import { format, subDays, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from "date-fns";

interface ContributionDay {
  date: string; // ISO date string (e.g., "2025-09-13")
  count: number;
}

interface GitHubCalendarProps {
  data: ContributionDay[]; // Contribution data
  colors?: string[]; // Custom color scale (default: GitHub-like greens)
}

const GitHubCalendar = ({ data, colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"] }: GitHubCalendarProps) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const today = new Date();
  const startDate = subDays(today, 364); // One year back
  const weeks = 53;
  const daysInWeek = 7;

  // Process data prop
  useEffect(() => {
    setContributions(data.map((item) => ({ ...item, date: new Date(item.date) })));
  }, [data]);

  // Get color based on contribution count
  const getColor = (count: number) => {
    if (count === 0) return colors[0];
    if (count === 1) return colors[1];
    if (count === 2) return colors[2];
    if (count === 3) return colors[3];
    return colors[4] || colors[colors.length - 1]; // Fallback to last color
  };

  // Render weeks
  const renderWeeks = () => {
    const weeksArray = [];
    let currentWeekStart = startOfWeek(startDate, { weekStartsOn: 0 });

    for (let i = 0; i < weeks; i++) {
      const weekDays = eachDayOfInterval({
        start: currentWeekStart,
        end: endOfWeek(currentWeekStart, { weekStartsOn: 0 }),
      });

      weeksArray.push(
        <div key={i} className="flex flex-col gap-1">
          {weekDays.map((day, index) => {
            const contribution = contributions.find((c) => isSameDay(new Date(c.date), day));
            const color = contribution ? getColor(contribution.count) : colors[0];

            return (
              <div
                key={index}
                className={`w-3 h-3 rounded-[4px]`}
                style={{ backgroundColor: color }}
                title={`${format(day, "PPP")}: ${contribution?.count || 0} contributions`}
              />
            );
          })}
        </div>
      );
      currentWeekStart = addDays(currentWeekStart, 7);
    }

    return weeksArray;
  };

  // Render month labels
  const renderMonthLabels = () => {
    const months = [];
    let currentMonth = startDate;
    for (let i = 0; i < 12; i++) {
      months.push(
        <span key={i} className="text-xs text-gray-500">
          {format(currentMonth, "MMM")}
        </span>
      );
      currentMonth = addDays(currentMonth, 30);
    }
    return months;
  };

  // Render day labels
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="p-4 border rounded-lg">
      <div className="flex">
        <div className="flex flex-col justify-between mt-5.5 mr-2">
          {dayLabels.map((day, index) => (
            <span key={index} className="text-xs text-gray-500 h-3">
              {day}
            </span>
          ))}
        </div>
        <div>
          <div className="flex w-full justify-between gap-4 mb-2">{renderMonthLabels()}</div>
          <div className="flex gap-1">{renderWeeks()}</div>
        </div>
      </div>
      <div className="mt-4 justify-center flex gap-2 text-xs items-center">
        <span>Less</span>
        {colors.map((color, index) => (
          <div key={index} className="w-3 h-3 rounded-[4px]" style={{ backgroundColor: color }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export {GitHubCalendar};

demo.tsx
import { GitHubCalendar } from "@/components/ui/git-hub-calendar";

export default function DemoOne() {
  const contributionData = [
  { date: "2025-10-13", count: 3 },
  { date: "2025-05-12", count: 1 },
  { date: "2025-09-11", count: 2 },
  { date: "2025-09-10", count: 5 },
  { date: "2024-09-13", count: 2 },
  { date: "2024-09-15", count: 0 },
  { date: "2024-09-20", count: 4 },
  { date: "2024-10-01", count: 1 },
  { date: "2024-10-05", count: 3 },
  { date: "2024-10-10", count: 0 },
  { date: "2024-10-15", count: 2 },
  { date: "2024-10-20", count: 5 },
  { date: "2024-11-02", count: 1 },
  { date: "2024-11-07", count: 3 },
  { date: "2024-11-12", count: 4 },
  { date: "2024-11-18", count: 0 },
  { date: "2024-11-25", count: 2 },
  { date: "2024-12-01", count: 3 },
  { date: "2024-12-05", count: 1 },
  { date: "2024-12-10", count: 0 },
  { date: "2024-12-15", count: 4 },
  { date: "2024-12-20", count: 2 },
  { date: "2024-12-25", count: 0 },
  { date: "2025-01-03", count: 3 },
  { date: "2025-01-08", count: 1 },
  { date: "2025-01-15", count: 5 },
  { date: "2025-01-20", count: 2 },
  { date: "2025-01-25", count: 0 },
  { date: "2025-02-01", count: 4 },
  { date: "2025-02-07", count: 3 },
  { date: "2025-02-12", count: 1 },
  { date: "2025-02-18", count: 0 },
  { date: "2025-02-25", count: 2 },
  { date: "2025-03-02", count: 5 },
  { date: "2025-03-08", count: 3 },
  { date: "2025-03-15", count: 1 },
  { date: "2025-03-20", count: 0 },
  { date: "2025-03-25", count: 4 },
  { date: "2025-04-01", count: 2 },
  { date: "2025-04-07", count: 0 },
  { date: "2025-04-12", count: 3 },
  { date: "2025-04-18", count: 1 },
  { date: "2025-04-25", count: 5 },
  { date: "2025-05-01", count: 2 },
  { date: "2025-05-07", count: 0 },
  { date: "2025-06-01", count: 4 },
  { date: "2025-06-10", count: 3 },
  { date: "2025-06-15", count: 1 },
  { date: "2025-07-01", count: 0 },
  { date: "2025-07-10", count: 2 },
  { date: "2025-08-01", count: 5 },
  { date: "2025-08-15", count: 3 },
  { date: "2025-09-01", count: 1 },
];

  return (
    <div> 
      <GitHubCalendar 
      data={contributionData}  
      />
    </div>
  );
}
```

Install NPM dependencies:
```bash
date-fns
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
economic-calendar.tsx
// components/ui/economic-calendar.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2 } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn

// Type definition for a single economic event
export interface EconomicEvent {
  countryCode: string;
  time: string;
  eventName: string;
  actual: string | null;
  forecast: string | null;
  prior: string | null;
  impact: 'high' | 'medium' | 'low';
}

// Props for the main component
interface EconomicCalendarProps {
  title: string;
  events: EconomicEvent[];
  className?: string;
}

// A simple volatility icon component
const VolatilityIcon = ({ impact }: { impact: EconomicEvent['impact'] }) => {
  const barCount = impact === 'high' ? 3 : impact === 'medium' ? 2 : 1;
  return (
    <div className="flex items-end gap-0.5 h-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "w-1 rounded-full",
            i === 0 ? "h-2" : i === 1 ? "h-3" : "h-4",
            i < barCount ? "bg-foreground/80" : "bg-muted"
          )}
        />
      ))}
    </div>
  );
};

export const EconomicCalendar = React.forwardRef<
  HTMLDivElement,
  EconomicCalendarProps
>(({ title, events, className }, ref) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  // Function to handle scrolling and update button states
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll function for navigation buttons
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [events]);

  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14,
      },
    },
  };

  return (
    <div ref={ref} className={cn("w-full max-w-6xl mx-auto font-sans p-4", className)}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          {title}
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </h2>
        <div className="flex items-center gap-2">
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="p-1.5 rounded-full bg-background border hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </motion.button>
          )}
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="p-1.5 rounded-full bg-background border hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </motion.button>
          )}
          <Code2 className="h-6 w-6 text-muted-foreground ml-2" />
        </div>
      </div>

      {/* Scrollable Events Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
      >
        <motion.div
            className="flex flex-nowrap gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {events.map((event, index) => (
            <motion.div
                key={index}
                variants={itemVariants}
                className="flex-shrink-0 w-72 bg-card border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
                <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">Today</p>
                    <span className="text-sm font-semibold text-red-500 bg-red-500/10 px-2 py-0.5 rounded-md">
                    {event.time}
                    </span>
                </div>
                <VolatilityIcon impact={event.impact} />
                </div>

                <div className="flex items-center gap-3 mb-4">
                <img
                    // FIX: Updated the image source URL to a more reliable provider
                    src={`https://flagcdn.com/w40/${event.countryCode.toLowerCase()}.png`}
                    alt={`${event.countryCode} flag`}
                    className="h-8 w-8 rounded-full object-cover bg-muted"
                />
                <h3 className="font-semibold text-foreground truncate">{event.eventName}</h3>
                </div>

                <div className="grid grid-cols-3 text-center text-sm">
                <div>
                    <p className="text-muted-foreground">Actual</p>
                    <p className="font-medium text-foreground mt-1">{event.actual ?? "—"}</p>
                </div>
                <div>
                    <p className="text-muted-foreground">Forecast</p>
                    <p className="font-medium text-foreground mt-1">{event.forecast ?? "—"}</p>
                </div>
                <div>
                    <p className="text-muted-foreground">Prior</p>
                    <p className="font-medium text-foreground mt-1">{event.prior ?? "—"}</p>
                </div>
                </div>
            </motion.div>
            ))}
        </motion.div>
      </div>
      
      {/* Footer Link */}
      <a href="#" className="text-sm text-blue-500 hover:underline mt-2 inline-block">
        See all market events ›
      </a>
    </div>
  );
});

EconomicCalendar.displayName = "EconomicCalendar";

demo.tsx
// demo.tsx
import { EconomicCalendar, EconomicEvent } from "@/components/ui/economic-calendar";

const eventsData: EconomicEvent[] = [
  {
    countryCode: "US",
    time: "21:30",
    eventName: "15-Year Mortgage Rate",
    actual: "10:59",
    forecast: null,
    prior: "5.49%",
    impact: 'medium',
  },
  {
    countryCode: "US",
    time: "21:30",
    eventName: "30-Year Mortgage Rate",
    actual: "10:59",
    forecast: null,
    prior: "6.3%",
    impact: 'high',
  },
  {
    countryCode: "EU",
    time: "22:30",
    eventName: "ECB Guindos Speech",
    actual: null,
    forecast: null,
    prior: null,
    impact: 'low',
  },
  {
    countryCode: "CA",
    time: "23:10",
    eventName: "BoC Mendes Speech",
    actual: null,
    forecast: null,
    prior: null,
    impact: 'low',
  },
  {
    countryCode: "JP",
    time: "23:50",
    eventName: "BoJ Core CPI y/y",
    actual: "2.8%",
    forecast: "2.9%",
    prior: "3.1%",
    impact: 'high',
  },
  {
    countryCode: "AU",
    time: "01:00",
    eventName: "RBA Financial Stability Review",
    actual: null,
    forecast: null,
    prior: null,
    impact: 'medium',
  },
];

export default function EconomicCalendarDemo() {
  return (
    <div className="w-full bg-background flex items-center justify-center py-12">
      <EconomicCalendar title="Economic Calendar" events={eventsData} />
    </div>
  );
}
```

Install NPM dependencies:
```bash
lucide-react, framer-motion
```



