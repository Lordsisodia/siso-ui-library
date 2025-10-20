"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { Send, Trash } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const cardVariants = cva(
  "mx-auto flex w-full max-w-2xl flex-col rounded-xl border bg-card text-card-foreground shadow-sm transition-colors",
  {
    variants: {
      isExpanded: {
        true: "h-auto",
        false: "h-auto",
      },
    },
    defaultVariants: {
      isExpanded: true,
    },
  },
)

export interface EmailClientCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  avatarSrc: string
  avatarFallback: string
  senderName: string
  senderEmail: string
  timestamp: string
  message: string
  actions?: React.ReactNode[]
  reactions?: string[]
  onReactionClick?: (reaction: string) => void
  onActionClick?: (index: number) => void
}

const EmailClientCard = React.forwardRef<HTMLDivElement, EmailClientCardProps>(
  (
    {
      className,
      avatarSrc,
      avatarFallback,
      senderName,
      senderEmail,
      timestamp,
      message,
      actions = [],
      reactions = [],
      onReactionClick,
      onActionClick,
      isExpanded,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = React.useState("")

    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.05,
        },
      },
    }

    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    }

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ isExpanded }), className)}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        {...props}
      >
        <motion.div className="flex items-start gap-4 border-b p-4 sm:p-6" variants={itemVariants}>
          <Avatar className="h-10 w-10 border">
            <AvatarImage src={avatarSrc} alt={senderName} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <p className="font-semibold text-card-foreground">{senderName}</p>
            <p className="text-sm text-muted-foreground">{senderEmail}</p>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="hidden text-xs sm:inline">{timestamp}</span>
            {actions.map((action, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => onActionClick?.(index)}
                  aria-label={`Action ${index + 1}`}
                >
                  {action}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="p-4 text-sm leading-relaxed text-foreground/90 sm:p-6" variants={itemVariants}>
          <p>{message}</p>
        </motion.div>

        <motion.div className="mt-auto border-t bg-muted/50 p-3 sm:p-4" variants={itemVariants}>
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Type here..."
              className="flex-grow bg-background focus-visible:ring-1 focus-visible:ring-offset-0"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <div className="flex items-center gap-1">
              {reactions.map((reaction) => (
                <motion.div
                  key={reaction}
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-xl"
                    onClick={() => onReactionClick?.(reaction)}
                    aria-label={`React with ${reaction}`}
                  >
                    {reaction}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  },
)

EmailClientCard.displayName = "EmailClientCard"

export { EmailClientCard, cardVariants }

export function EmailClientCardDemo() {
  const emailData = {
    avatarSrc: "https://i.pravatar.cc/150",
    avatarFallback: "SL",
    senderName: "Samantha Lusan",
    senderEmail: "samantha@icloud.com",
    timestamp: "Yesterday, 10:12 am",
    message:
      "Yes, they've introduced new APIs for smoother and more dynamic animations. The enhancements to the core animation framework will make it easier to create more engaging user experiences.",
    reactions: ["😍", "❤️", "🔥", "⚡️", "👍"],
  }

  const handleReaction = (reaction: string) => {
    console.log(`Reacted with: ${reaction}`)
  }

  const handleAction = (index: number) => {
    const labels = ["Send", "Delete"]
    console.log(`Action clicked: ${labels[index] ?? index}`)
  }

  return (
    <div className="flex w-full items-center justify-center bg-background p-4">
      <EmailClientCard
        avatarSrc={emailData.avatarSrc}
        avatarFallback={emailData.avatarFallback}
        senderName={emailData.senderName}
        senderEmail={emailData.senderEmail}
        timestamp={emailData.timestamp}
        message={emailData.message}
        reactions={emailData.reactions}
        onReactionClick={handleReaction}
        onActionClick={handleAction}
        actions={[<Send key="send" className="h-4 w-4" />, <Trash key="trash" className="h-4 w-4" />]}
      />
    </div>
  )
}
