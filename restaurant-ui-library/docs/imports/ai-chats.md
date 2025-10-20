# AI Chats (30 available)

## Cherry-Picked Components from 21st.dev

<!-- Add your selected AI chat components here -->
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
ruixen-query-box.tsx
"use client";

import { Mic, SendHorizonal, Upload } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function RuixenQueryBox() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 56,
    maxHeight: 220,
  });

  const [inputValue, setInputValue] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    console.log("Submitted:", inputValue);
    setInputValue("");
    adjustHeight(true);
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    console.log("Uploaded files:", files);
  };

  return (
    <div className="w-full px-4 py-6">
      <div
        className="relative max-w-2xl mx-auto bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden"
        style={{
          backgroundImage:
            "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_chat_gradient.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Textarea
          id="ai-textarea"
          ref={textareaRef}
          placeholder="Ask anything..."
          className={cn(
            "w-full resize-none border-none bg-transparent",
            "text-base text-white placeholder:text-gray-400",
            "px-5 py-4 pr-24 rounded-2xl leading-[1.4]",
            "transition-all focus-visible:ring-0 focus-visible:ring-offset-0"
          )}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            adjustHeight();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        {/* Icon Buttons */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            type="button"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors"
          >
            <Mic className="w-4 h-4" />
          </button>

          {/* File Upload Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors"
              >
                <Upload className="w-4 h-4" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-60 p-4">
              <p className="text-sm mb-2">Upload files:</p>
              <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={(e) => handleFileUpload(e.target.files)}
                className="w-full border border-gray-300 rounded p-1"
              />
              <Button
                className="mt-2 w-full"
                onClick={() => fileInputRef.current?.click()}
              >
                Choose Files
              </Button>
            </PopoverContent>
          </Popover>

          <button
            type="button"
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className={cn(
              "p-2 rounded-full transition-colors",
              inputValue.trim()
                ? "bg-[#004a58] text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            )}
          >
            <SendHorizonal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}


demo.tsx
import RuixenQueryBox from "@/components/ui/ruixen-query-box";

export default function DemoOne () {
  return <RuixenQueryBox />;
};
```

Copy-paste these files for dependencies:
```tsx
originui/popover
"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    showArrow?: boolean;
  }
>(({ className, align = "center", sideOffset = 4, showArrow = false, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-h-[var(--radix-popover-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg shadow-black/5 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    >
      {props.children}
      {showArrow && (
        <PopoverPrimitive.Arrow className="-my-px fill-popover drop-shadow-[0_1px_0_hsl(var(--border))]" />
      )}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };

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
```tsx
originui/textarea
import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };

```
```tsx
kokonutd/use-auto-resize-textarea
import { useEffect, useRef, useCallback } from "react";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

export function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            // Temporarily shrink to get the right scrollHeight
            textarea.style.height = `${minHeight}px`;

            // Calculate new height
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        // Set initial height
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    // Adjust height on window resize
    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

```

Install NPM dependencies:
```bash
lucide-react, @radix-ui/react-popover, @radix-ui/react-slot, class-variance-authority
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
chat-interface.tsx
'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link2 } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface LoaderConfig {
  enabled: boolean;
  delay?: number;
  duration?: number;
}

interface Link {
  text: string;
}

interface Message {
  id: number;
  sender: 'left' | 'right';
  type: 'text' | 'image' | 'text-with-links';
  content: string;
  maxWidth?: string;
  loader?: LoaderConfig;
  links?: Link[];
}

interface Person {
  name: string;
  avatar: string;
}

interface ChatStyle {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  showBorder: boolean;
  nameColor?: string;
}

interface LinkBubbleStyle {
  backgroundColor: string;
  textColor: string;
  iconColor: string;
  borderColor: string;
}

interface UiConfig {
  containerWidth?: number;
  containerHeight?: number;
  backgroundColor?: string;
  autoRestart?: boolean;
  restartDelay?: number;
  loader?: {
    dotColor?: string;
  };
  linkBubbles?: LinkBubbleStyle;
  leftChat?: ChatStyle;
  rightChat?: ChatStyle;
}

interface ChatConfig {
  leftPerson: Person;
  rightPerson: Person;
  messages: Message[];
}

interface ChatComponentProps {
  config: ChatConfig;
  uiConfig?: UiConfig;
}

interface MessageLoaderProps {
  dotColor?: string;
}

interface LinkBadgeProps {
  link: Link;
  linkStyle: LinkBubbleStyle;
}

interface MessageBubbleProps {
  message: Message;
  isLeft: boolean;
  uiConfig: Required<UiConfig>;
  onContentReady?: () => void;
  isLoading: boolean;
  isVisible: boolean;
}

interface MessageWrapperProps {
  message: Message;
  config: ChatConfig;
  uiConfig: Required<UiConfig>;
  previousMessageComplete: boolean;
  onMessageComplete?: (messageId: number) => void;
  previousMessage: Message | null;
  nextMessage: Message | null;
  onVisibilityChange?: (messageId: number) => void;
  isNextVisible: boolean;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Convert hex color to rgba with specified alpha
 */
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

/**
 * Animated loading indicator with bouncing dots
 * @param {string} dotColor - Color of the loading dots
 */
const MessageLoader = React.memo<MessageLoaderProps>(({ dotColor = '#9ca3af' }) => {
  const dotAnimation = {
    y: [0, -6, 0]
  };

  const dotTransition = (delay = 0) => ({
    duration: 0.6,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay
  });

  return (
    <motion.div
      className="flex items-center gap-1 px-3 py-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      {[0, 0.15, 0.3].map((delay, i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: dotColor }}
          animate={dotAnimation}
          transition={dotTransition(delay)}
        />
      ))}
    </motion.div>
  );
});

MessageLoader.displayName = 'MessageLoader';

/**
 * Link badge component for displaying clickable links (non-functional, just visual)
 */
const LinkBadge = React.memo<LinkBadgeProps>(({ link, linkStyle }) => (
  <div
    className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs border tracking-wider"
    style={{
      backgroundColor: linkStyle.backgroundColor,
      color: linkStyle.textColor,
      borderColor: linkStyle.borderColor
    }}
  >
    <Link2 size={12} color={linkStyle.iconColor} />
    <span>{link.text}</span>
  </div>
));

LinkBadge.displayName = 'LinkBadge';

// ============================================================================
// MESSAGE BUBBLE COMPONENT
// ============================================================================

/**
 * Message bubble that displays different content types (text, image, text-with-links)
 * Handles smooth transition from loader to content
 */
const MessageBubble = React.memo<MessageBubbleProps>(({ message, isLeft, uiConfig, onContentReady, isLoading, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const chatStyle = isLeft ? uiConfig.leftChat! : uiConfig.rightChat!;

  // Notify parent when text content is ready
  useEffect(() => {
    if (isVisible && (message.type === 'text' || message.type === 'text-with-links')) {
      onContentReady?.();
    }
  }, [isVisible, message.type, onContentReady]);

  // Handle image load completion
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    onContentReady?.();
  }, [onContentReady]);

  // Memoize bubble styling
  const bubbleStyle = useMemo(() => ({
    backgroundColor: chatStyle.backgroundColor,
    color: chatStyle.textColor,
    borderColor: chatStyle.borderColor,
    borderWidth: chatStyle.showBorder ? '0.5px' : '0'
  }), [chatStyle.backgroundColor, chatStyle.textColor, chatStyle.borderColor, chatStyle.showBorder]);

  const roundedClass = isLeft
    ? "rounded-br-lg rounded-tl-lg rounded-tr-lg" // Left: rounded except bottom-left
    : "rounded-bl-lg rounded-tl-lg rounded-tr-lg"; // Right: rounded except bottom-right

  // Always use minimal padding for images, adjust content spacing internally
  const paddingClass = message.type === 'image' ? 'p-1' : 'p-4';
  const maxWidthClass = message.maxWidth || 'max-w-sm';

  return (
    <div
      className={`${roundedClass} ${paddingClass} ${maxWidthClass} border-solid relative`}
      style={bubbleStyle}
    >
      <AnimatePresence mode="wait">
        {/* Show loader while message is loading */}
        {isLoading && !isVisible ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={message.type === 'image' ? 'flex items-center justify-center p-3' : 'flex items-center justify-center'}
          >
            <MessageLoader dotColor={uiConfig.loader?.dotColor} />
          </motion.div>
        ) : isVisible ? (
          /* Show actual message content */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Text message */}
            {message.type === 'text' && (
              <p className="text-sm leading-relaxed" style={{ color: chatStyle.textColor }}>
                {message.content}
              </p>
            )}

            {/* Image message */}
            {message.type === 'image' && (
              <div className="relative min-h-32">
                {!imageLoaded && (
                  <div className="w-full h-32 flex items-center justify-center">
                    <MessageLoader dotColor={uiConfig.loader?.dotColor} />
                  </div>
                )}
                <img
                  src={message.content}
                  alt="Chat image"
                  className={`rounded max-h-full max-w-48 h-auto object-cover ${!imageLoaded ? 'hidden' : ''}`}
                  onLoad={handleImageLoad}
                />
              </div>
            )}

            {/* Text with link badges */}
            {message.type === 'text-with-links' && (
              <div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: chatStyle.textColor }}>
                  {message.content}
                </p>
                <div className="flex flex-wrap gap-1">
                  {message.links?.map((link, index) => (
                    <LinkBadge key={index} link={link} linkStyle={uiConfig.linkBubbles!} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
});

MessageBubble.displayName = 'MessageBubble';

// ============================================================================
// MESSAGE WRAPPER COMPONENT
// ============================================================================

/**
 * Wrapper for individual messages that handles:
 * - Sequential loading/display logic
 * - Avatar positioning and animation
 * - Username display for message groups
 * - Completion tracking
 */
const MessageWrapper = React.memo<MessageWrapperProps>(({
  message,
  config,
  uiConfig,
  previousMessageComplete,
  onMessageComplete,
  previousMessage,
  nextMessage,
  onVisibilityChange,
  isNextVisible
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messageCompleted, setMessageCompleted] = useState(false);

  const isLeft = message.sender === 'left';
  const person = isLeft ? config.leftPerson : config.rightPerson;
  const chatStyle = isLeft ? uiConfig.leftChat! : uiConfig.rightChat!;

  // Message grouping logic
  const isContinuation = previousMessage?.sender === message.sender;
  const nextMessageSameSender = nextMessage?.sender === message.sender;
  const shouldShowAvatar = !nextMessageSameSender || !isNextVisible;

  // Sequential message loading
  useEffect(() => {
    if (!previousMessageComplete) return;

    const { loader } = message;
    const loaderDelay = 500;
    const totalDelay = loaderDelay + (loader?.duration || 1000);

    if (loader?.enabled) {
      const loaderTimeout = setTimeout(() => setIsLoading(true), loaderDelay);
      const messageTimeout = setTimeout(() => {
        setIsLoading(false);
        setIsVisible(true);
        onVisibilityChange?.(message.id);
      }, totalDelay);

      return () => {
        clearTimeout(loaderTimeout);
        clearTimeout(messageTimeout);
      };
    } else {
      const messageTimeout = setTimeout(() => {
        setIsVisible(true);
        onVisibilityChange?.(message.id);
      }, 0);

      return () => clearTimeout(messageTimeout);
    }
  }, [message, previousMessageComplete, onVisibilityChange]);

  // Notify parent when content is fully loaded
  const handleContentReady = useCallback(() => {
    if (!messageCompleted) {
      setMessageCompleted(true);
      setTimeout(() => onMessageComplete?.(message.id), 350); // Match animation duration
    }
  }, [messageCompleted, onMessageComplete, message.id]);

  // Memoize layout classes
  const messageClass = useMemo(() =>
    isLeft ? "flex items-end gap-3" : "flex items-end gap-3 flex-row-reverse",
    [isLeft]
  );

  if (!isLoading && !isVisible) return null;

  return (
    <div className={messageClass}>
      {/* Avatar with animation */}
      <AnimatePresence mode="wait">
        {shouldShowAvatar ? (
          <motion.img
            key="avatar"
            src={person.avatar}
            alt={person.name}
            className="w-8 h-8 rounded-full object-cover flex-shrink-0 border-[1.5px] border-white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          />
        ) : (
          <div className="w-8 h-8 flex-shrink-0" key="spacer" />
        )}
      </AnimatePresence>

      {/* Message content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex flex-col"
        style={{ alignItems: isLeft ? 'flex-start' : 'flex-end' }}
      >
        {/* Username (only for first message in group) */}
        {!isContinuation && (
          <motion.div
            className="text-xs mb-1 leading-relaxed"
            style={{ color: chatStyle.nameColor || '#582F0E' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.25 }}
          >
            {person.name}
          </motion.div>
        )}

        <MessageBubble
          message={message}
          isLeft={isLeft}
          uiConfig={uiConfig}
          onContentReady={handleContentReady}
          isLoading={isLoading}
          isVisible={isVisible}
        />
      </motion.div>
    </div>
  );
});

MessageWrapper.displayName = 'MessageWrapper';

// ============================================================================
// MAIN CHAT COMPONENT
// ============================================================================

/**
 * Main chat interface component with auto-scrolling, message sequencing,
 * and auto-restart functionality
 */
const ChatComponent: React.FC<ChatComponentProps> = ({ config, uiConfig = {} }) => {
  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // State
  const [completedMessages, setCompletedMessages] = useState<number[]>([]);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [key, setKey] = useState(0); // Key for forcing component remount

  // Default configuration
  const defaultUiConfig: Required<UiConfig> = {
    containerWidth: 400,
    containerHeight: 500,
    backgroundColor: '#ffffff',
    autoRestart: false,
    restartDelay: 3000,
    loader: { dotColor: '#9ca3af' },
    linkBubbles: {
      backgroundColor: '#f3f4f6',
      textColor: '#374151',
      iconColor: '#374151',
      borderColor: '#e5e7eb'
    },
    leftChat: {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      borderColor: '#d1d1d1',
      showBorder: true,
      nameColor: '#000000'
    },
    rightChat: {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      borderColor: '#d1d1d1',
      showBorder: true,
      nameColor: '#000000'
    }
  };

  const ui: Required<UiConfig> = { ...defaultUiConfig, ...uiConfig } as Required<UiConfig>;

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================

  const handleMessageComplete = useCallback((messageId: number) => {
    setCompletedMessages(prev => {
      const newCompleted = [...prev, messageId];

      // Auto-restart when all messages are complete
      if (newCompleted.length === config.messages.length && ui.autoRestart) {
        setTimeout(() => {
          setCompletedMessages([]);
          setVisibleMessages([]);
          setKey(prevKey => prevKey + 1); // Force remount
        }, ui.restartDelay);
      }

      return newCompleted;
    });
  }, [config.messages.length, ui.autoRestart, ui.restartDelay]);

  const handleVisibilityChange = useCallback((messageId: number) => {
    setVisibleMessages(prev =>
      prev.includes(messageId) ? prev : [...prev, messageId]
    );
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  }, []);

  // ============================================================================
  // EFFECTS
  // ============================================================================

  // Auto-scroll on new messages
  useEffect(() => {
    const observer = new MutationObserver(scrollToBottom);

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true
      });
    }

    return () => observer.disconnect();
  }, [key, scrollToBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [config.messages, completedMessages, scrollToBottom]);

  // ============================================================================
  // MEMOIZED VALUES
  // ============================================================================

  // Memoize gradient background to avoid recalculating on every render
  const gradientBackground = useMemo(() => {
    return `linear-gradient(to bottom, ${hexToRgba(ui.backgroundColor, 1)} 0%, ${hexToRgba(ui.backgroundColor, 0.95)} 20%, ${hexToRgba(ui.backgroundColor, 0.8)} 40%, ${hexToRgba(ui.backgroundColor, 0.4)} 70%, ${hexToRgba(ui.backgroundColor, 0)} 100%)`;
  }, [ui.backgroundColor]);

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div
      key={key}
      className="mx-auto rounded-lg relative"
      style={{
        width: `${ui.containerWidth}px`,
        height: `${ui.containerHeight}px`,
        backgroundColor: ui.backgroundColor
      }}
    >
      {/* Top gradient fade overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10 rounded-t-lg"
        style={{ background: gradientBackground }}
      />

      {/* Scrollable messages container */}
      <div
        ref={containerRef}
        className="p-8 overflow-y-scroll h-full"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* Hide scrollbar for webkit browsers */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Messages list */}
        <div className="min-h-full flex flex-col justify-end">
          {config.messages.map((message, index) => {
            const previousMessageComplete = index === 0 || completedMessages.includes(config.messages[index - 1].id);
            const previousMessage = index > 0 ? config.messages[index - 1] : null;
            const nextMessage = index < config.messages.length - 1 ? config.messages[index + 1] : null;
            const isNextVisible = nextMessage ? visibleMessages.includes(nextMessage.id) : false;
            const isContinuation = previousMessage?.sender === message.sender;

            // Tight spacing for same-sender messages, larger spacing for different senders
            const spacingClass = index === 0 ? "" : (isContinuation ? "mt-1.5" : "mt-8");

            return (
              <div key={message.id} className={spacingClass}>
                <MessageWrapper
                  message={message}
                  config={config}
                  uiConfig={ui}
                  previousMessageComplete={previousMessageComplete}
                  onMessageComplete={handleMessageComplete}
                  onVisibilityChange={handleVisibilityChange}
                  previousMessage={previousMessage}
                  nextMessage={nextMessage}
                  isNextVisible={isNextVisible}
                />
              </div>
            );
          })}
          {/* Scroll anchor with spacing */}
          <div ref={messagesEndRef} className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
export type { ChatComponentProps, ChatConfig, UiConfig, Message, Person, ChatStyle, LinkBubbleStyle };


demo.tsx
'use client';

import React from 'react';
import ChatComponent, { ChatConfig, UiConfig } from "@/components/ui/chat-interface";


export default function DemoOne() {
  // ==========================================
  // UI CONFIGURATION
  // ==========================================
  const uiConfig: UiConfig = {
    // Container dimensions
    containerWidth: 550,                    // Width of the chat container in pixels
    containerHeight: 450,                   // Height of the chat container in pixels
    backgroundColor: '#F5EBE0',             // Main container background color

    // Auto-restart settings
    autoRestart: true,                      // Enable/disable auto restart after all messages
    restartDelay: 3000,                     // Delay in ms before restarting (default: 3000ms / 3 seconds)

    // Loading indicator
    loader: {
      dotColor: '#936639'                   // Color of the loading dots
    },

    // Link badges styling
    linkBubbles: {
      backgroundColor: '#F5EBE0',           // Link bubble background color
      textColor: '#936639',                 // Link bubble text color
      iconColor: '#936639',                 // Link bubble icon color
      borderColor: '#F5EBE0'                // Link bubble border color
    },

    // Left side chat bubbles
    leftChat: {
      backgroundColor: '#FDF6EE',           // Background color
      textColor: '#582F0E',                 // Text color
      borderColor: '#E3D5CA',               // Border color
      showBorder: true,                     // Show/hide border
      nameColor: '#936639'                  // Name/username color
    },

    // Right side chat bubbles
    rightChat: {
      backgroundColor: '#EDE0D4',           // Background color
      textColor: '#582F0E',                 // Text color
      borderColor: '#d1d1d1',               // Border color
      showBorder: false,                    // Show/hide border
      nameColor: '#936639'                  // Name/username color
    }
  };

  // ==========================================
  // CHAT CONFIGURATION
  // ==========================================
  const chatConfig: ChatConfig = {
    // Chat participants
    leftPerson: {
      name: "Tony",
      avatar: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758823069/10_qujlpy.jpg"
    },
    rightPerson: {
      name: "Brendon",
      avatar: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758731402/2_hme6yu.jpg"
    },

    // Message sequence
    messages: [
      {
        id: 1,
        sender: 'left',
        type: 'text',
        content: 'Hey! Did you see the latest project updates?',
        maxWidth: 'max-w-sm',  // Optional: max-w-xs, max-w-sm, max-w-md, max-w-lg, max-w-xl, or custom like 'max-w-[300px]'
        loader: {
          enabled: true,
          delay: 1000,
          duration: 2000
        }
      },
      {
        id: 2,
        sender: 'right',
        type: 'text',
        content: 'Not yet! What\'s new?',
        loader: {
          enabled: true,
          delay: 4000,
          duration: 1500
        }
      },
      {
        id: 3,
        sender: 'left',
        type: 'text-with-links',
        content: 'We\'re on track to complete it by the end of the quarter.',
        maxWidth: 'max-w-xs',
        links: [
          {
            text: 'Substack'
          },
          {
            text: 'Youtube'
          }
        ],
        loader: {
          enabled: true,
          delay: 6000,
          duration: 1800
        }
      },
      {
        id: 4,
        sender: 'left',
        type: 'image',
        content: 'https://res.cloudinary.com/dctgknnt7/image/upload/v1758636253/cld-sample.jpg',
        loader: {
          enabled: false,
          delay: 10500,
          duration: 2000
        }
      },
      {
        id: 5,
        sender: 'right',
        type: 'text',
        content: 'These look great! Thanks for sharing.',
        loader: {
          enabled: true,
          delay: 8500,
          duration: 1200
        }
      },
    ]
  };

  return <ChatComponent config={chatConfig} uiConfig={uiConfig} />;
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
gradient-ai-chat-input.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, ChevronDown, Image, X, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface GradientColors {
  topLeft: string;
  topRight: string;
  bottomRight: string;
  bottomLeft: string;
}

interface ThemeGradients {
  light: GradientColors;
  dark: GradientColors;
}

interface DropdownOption {
  id: string;
  label: string;
  value: string;
}

interface GradientAIChatInputProps {
  placeholder?: string;
  onSend?: (message: string) => void;
  onFileAttach?: () => void;
  enableAnimations?: boolean;
  className?: string;
  disabled?: boolean;

  // Dropdown options
  dropdownOptions?: DropdownOption[];
  onOptionSelect?: (option: DropdownOption) => void;

  // Gradient customization - now theme-aware
  mainGradient?: ThemeGradients;
  outerGradient?: ThemeGradients;
  innerGradientOpacity?: number;
  buttonBorderColor?: {
    light: string;
    dark: string;
  };

  // Shadow customization
  enableShadows?: boolean;
  shadowOpacity?: number;
  shadowColor?: {
    light: string;
    dark: string;
  };
}

export function GradientAIChatInput({
  placeholder = "Send message...",
  onSend,
  enableAnimations = true,
  className,
  disabled = false,

  // Dropdown options with defaults
  dropdownOptions = [
    { id: "option1", label: "ChatGPT", value: "chatgpt" },
    { id: "option2", label: "Claude", value: "claude" },
    { id: "option3", label: "Gemini", value: "gemini" }
  ],
  onOptionSelect,

  // Theme-aware gradient defaults
  mainGradient = {
    light: {
      topLeft: "#F5E9AD",
      topRight: "#F6B4AD", 
      bottomRight: "#F5ABA0",
      bottomLeft: "#F5DCBA"
    },
    dark: {
      topLeft: "#B8905A",    // Much darker amber
      topRight: "#B86B42",   // Much darker orange
      bottomRight: "#A8502D", // Very deep orange-red
      bottomLeft: "#B89E6E"  // Much darker golden
    }
  },
  outerGradient = {
    light: {
      topLeft: "#E5D99D",
      topRight: "#E6A49D",
      bottomRight: "#E59B90", 
      bottomLeft: "#E5CCBA"
    },
    dark: {
      topLeft: "#996F40",    // Very dark outer border
      topRight: "#99532D",   
      bottomRight: "#8A3F22",
      bottomLeft: "#997D50"
    }
  },
  innerGradientOpacity = 0.1,
  buttonBorderColor = {
    light: "#DBDBD8",  // Light gray for light mode
    dark: "#4A4A4A"    // Darker gray for dark mode
  },

  // Shadow defaults
  enableShadows = true,
  shadowOpacity = 1,
  shadowColor = {
    light: "rgb(0, 0, 0)", // Black shadow for light mode
    dark: "rgb(184, 107, 66)" // Orange shadow for dark mode
  },
}: GradientAIChatInputProps) {
  const [message, setMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = enableAnimations && !shouldReduceMotion;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  // Fix hydration mismatch - only apply theme after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get current theme's gradients - default to light mode for SSR
  const isDark = mounted && theme === "dark";
  const currentMainGradient = isDark ? mainGradient.dark : mainGradient.light;
  const currentOuterGradient = isDark ? outerGradient.dark : outerGradient.light;
  const currentButtonBorderColor = isDark ? buttonBorderColor.dark : buttonBorderColor.light;
  const currentShadowColor = isDark ? shadowColor.dark : shadowColor.light;

  // Utility function to convert hex or rgb to rgba
  const hexToRgba = (color: string, alpha: number): string => {
    // Handle RGB format: rgb(r, g, b)
    if (color.startsWith('rgb(')) {
      const rgbValues = color.slice(4, -1).split(',').map(val => parseInt(val.trim()));
      return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${alpha})`;
    }

    // Handle hex format
    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Fallback - return as is if neither format
    return color;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && onSend && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleFileAttachment = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachedFiles(prev => [...prev, ...files]);
    e.target.value = ''; // Reset input
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      className={cn(
        "relative",
        className
      )}
      initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
    >
      {/* Main container with complex multi-layer gradient border */}
      <div className="relative">
        {/* Outer thin border (0.5px) - darker gradient */}
        <div className="absolute inset-0 rounded-[20px] p-[0.5px]"
             style={{
               background: `conic-gradient(from 0deg at 50% 50%,
                 ${currentOuterGradient.topLeft} 0deg,     /* Top left - darker version */
                 ${currentOuterGradient.topRight} 90deg,    /* Top right - darker version */
                 ${currentOuterGradient.bottomRight} 180deg,   /* Bottom right - darker version */
                 ${currentOuterGradient.bottomLeft} 270deg,   /* Bottom left - darker version */
                 ${currentOuterGradient.topLeft} 360deg    /* Back to top left */
               )`
             }}>
          
          {/* Main thick border (2px) - primary gradient */}
          <div className="h-full w-full rounded-[19.5px] p-[2px]"
               style={{
                 background: `conic-gradient(from 0deg at 50% 50%,
                   ${currentMainGradient.topLeft} 0deg,     /* Top left */
                   ${currentMainGradient.topRight} 90deg,    /* Top right */
                   ${currentMainGradient.bottomRight} 180deg,   /* Bottom right - deeper side */
                   ${currentMainGradient.bottomLeft} 270deg,   /* Bottom left */
                   ${currentMainGradient.topLeft} 360deg    /* Back to top left */
                 )`
               }}>
            
            {/* Inner container with background */}
            <div className="h-full w-full rounded-[17.5px] bg-background relative">
              
              {/* Inner thin border (0.5px) - configurable opacity darker gradient */}
              <div className="absolute inset-0 rounded-[17.5px] p-[0.5px]"
                   style={{
                     background: `conic-gradient(from 0deg at 50% 50%,
                       ${hexToRgba(currentOuterGradient.topLeft, innerGradientOpacity)} 0deg,
                       ${hexToRgba(currentOuterGradient.topRight, innerGradientOpacity)} 90deg,
                       ${hexToRgba(currentOuterGradient.bottomRight, innerGradientOpacity)} 180deg,
                       ${hexToRgba(currentOuterGradient.bottomLeft, innerGradientOpacity)} 270deg,
                       ${hexToRgba(currentOuterGradient.topLeft, innerGradientOpacity)} 360deg
                     )`
                   }}>
                <div className="h-full w-full rounded-[17px] bg-background"></div>
              </div>

              {/* Yellow/orange highlight on top edge */}
              <div
                className="absolute top-0 left-4 right-4 h-[0.5px] bg-gradient-to-r from-transparent via-[var(--top-highlight)]/30 to-transparent"
                style={{ '--top-highlight': currentMainGradient.topLeft } as React.CSSProperties}
              />

              {/* Darker bottom edge */}
              <div
                className="absolute bottom-0 left-4 right-4 h-[0.5px] bg-gradient-to-r from-transparent via-[var(--bottom-highlight)]/20 to-transparent"
                style={{ '--bottom-highlight': currentMainGradient.bottomRight } as React.CSSProperties}
              />
            </div>
          </div>
        </div>

        {/* Content container - Two row layout */}
        <div className="relative p-4">

          {/* Top row: Text input + Send button */}
          <div className="flex items-start gap-3 mb-3">
            {/* Text input area */}
            <div className="flex-1 relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                disabled={disabled}
                rows={1}
                className={cn(
                  "w-full resize-none border-0 bg-transparent",
                  "text-foreground placeholder:text-muted-foreground",
                  "text-base leading-6 py-2 px-0",
                  "focus:outline-none focus:ring-0 outline-none",
                  "overflow-hidden",
                  "transition-colors duration-200",
                  disabled && "opacity-50 cursor-not-allowed"
                )}
                style={{
                  minHeight: "40px",
                  maxHeight: "120px",
                  height: "auto",
                  outline: "none !important",
                  boxShadow: "none !important",
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height = Math.min(target.scrollHeight, 120) + "px";
                }}
              />
            </div>

            {/* Send button - Top right corner */}
            <motion.button
              type="submit"
              onClick={handleSubmit}
              disabled={disabled || !message.trim()}
              className={cn(
                "flex items-center justify-center",
                "w-8 h-8 mt-1", // Align with text top
                "text-muted-foreground hover:text-foreground",
                "transition-colors cursor-pointer",
                (disabled || !message.trim()) && "opacity-50 cursor-not-allowed"
              )}
              whileHover={shouldAnimate && message.trim() ? { scale: 1.1 } : {}}
              whileTap={shouldAnimate && message.trim() ? { scale: 0.9 } : {}}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              <Send className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Bottom row: File pills + Attach File + Select buttons */}
          <div className="flex items-center gap-2">
           

            {/* Attach File button */}
            <motion.button
              type="button"
              onClick={handleFileAttachment}
              disabled={disabled}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5",
                "text-sm text-muted-foreground hover:text-foreground",
                "rounded-full transition-colors cursor-pointer",
                "bg-muted/30 hover:bg-muted/50",
                disabled && "opacity-50 cursor-not-allowed"
              )}
              style={{
                border: `1px solid ${currentButtonBorderColor}`
              }}
              whileHover={shouldAnimate ? { scale: 1.02 } : {}}
              whileTap={shouldAnimate ? { scale: 0.98 } : {}}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              <Image className="w-3 h-3" aria-hidden="true" />
              <span>Attach File</span>
            </motion.button>

            {/* Dropdown selector */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                disabled={disabled}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5",
                  "text-sm text-muted-foreground hover:text-foreground",
                  "rounded-full transition-colors cursor-pointer",
                  "bg-muted/30 hover:bg-muted/50",
                  disabled && "opacity-50 cursor-not-allowed"
                )}
                style={{
                  border: `1px solid ${currentButtonBorderColor}`
                }}
                whileHover={shouldAnimate ? { scale: 1.02 } : {}}
                whileTap={shouldAnimate ? { scale: 0.98 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
              >
                <span className="text-muted-foreground font-medium">
                  {selectedOption ? selectedOption.label : "Select"}
                </span>
                <ChevronDown className={cn(
                  "w-3 h-3 transition-transform",
                  isDropdownOpen && "rotate-180"
                )} />
              </motion.button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -5, scale: 0.95 }}
                  className="absolute top-full mt-2 left-0 bg-popover border border-border rounded-lg shadow-lg min-w-[120px] z-10"
                >
                  <div className="p-1">
                    {dropdownOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSelectedOption(option);
                          onOptionSelect?.(option);
                          setIsDropdownOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-2 py-1.5 text-sm rounded hover:bg-accent transition-colors flex items-center gap-2 mb-1",
                          selectedOption?.id === option.id && "bg-accent"
                        )}
                      >
                        <span className="flex-1">{option.label}</span>
                        {selectedOption?.id === option.id && (
                          <Check className="w-3 h-3 text-foreground" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Vertical line separator at the very end */}
            {attachedFiles.length > 0 && (
            <div
              className="h-6 w-px"
              style={{ backgroundColor: currentButtonBorderColor }}
            />
            )}
             {/* File pills - show next to buttons when files attached */}
             {attachedFiles.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {attachedFiles.map((file, index) => (
                  <motion.div
                    key={`${file.name}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5",
                      "text-sm text-muted-foreground",
                      "rounded-full border",
                      "bg-muted/50"
                    )}
                    style={{
                      border: `1px solid ${currentButtonBorderColor}`
                    }}
                  >
                    <span className="truncate max-w-[100px]">{file.name}</span>
                    <button
                      onClick={() => removeFile(index)}
                      className="flex-shrink-0 w-4 h-4 rounded-full bg-muted-foreground/20 hover:bg-destructive/20 flex items-center justify-center"
                    >
                      <X className="w-3 h-3 text-foreground hover:text-destructive" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"
        />

        {/* Enhanced shadow system for both light and dark modes */}
        {enableShadows && (
          <>
            {/* Bottom shadow - stronger and more visible */}
            <div
              className="absolute -bottom-3 left-3 right-3 h-6 rounded-full blur-md"
              style={{
                opacity: shadowOpacity,
                background: `linear-gradient(to bottom, ${hexToRgba(currentShadowColor, 0.1)} 0%, transparent 100%)`
              }}
            />

            {/* Side shadows - more pronounced */}
            <div
              className="absolute -left-2 top-3 bottom-3 w-4 rounded-full blur-sm"
              style={{
                opacity: shadowOpacity,
                background: `linear-gradient(to right, ${hexToRgba(currentShadowColor, 0.06)} 0%, transparent 100%)`
              }}
            />
            <div
              className="absolute -right-2 top-3 bottom-3 w-4 rounded-full blur-sm"
              style={{
                opacity: shadowOpacity,
                background: `linear-gradient(to left, ${hexToRgba(currentShadowColor, 0.06)} 0%, transparent 100%)`
              }}
            />

            {/* Additional drop shadow for depth */}
            <div
              className="absolute inset-0 rounded-[20px] shadow-lg pointer-events-none"
              style={{
                opacity: shadowOpacity,
                boxShadow: `0 10px 25px ${hexToRgba(currentShadowColor, isDark ? 0.15 : 0.05)}`
              }}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}


demo.tsx
"use client";

import { GradientAIChatInput } from "@/components/ui/gradient-ai-chat-input";

export default function GradientAIChatInputDemo() {
  const handleSend = (message: string) => {
    console.log("Message sent:", message);
  };

  const handleFileAttach = () => {
    console.log("File attach clicked");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Gradient AI Chat Input
          </h1>
        
        </div>

        {/* Demo */}
        <div className="space-y-6">
          <GradientAIChatInput
            placeholder="Send message..."
            onSend={handleSend}
            onFileAttach={handleFileAttach}
          />
        </div>
      </div>
    </div>
  );
}

```

Install NPM dependencies:
```bash
next-themes, lucide-react, framer-motion
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
file-upload-and-chat.tsx
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Upload, Paperclip, Send, Moon, Sun, X, FileText, Image, Video, Music, Archive, MessageCircle, Bot, User } from 'lucide-react';

const FileUploadChat = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m here to help you with your files and answer any questions you might have. Feel free to upload files and start chatting!',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef(null);
  const chatEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [inputValue]);

  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) return <Image className="w-4 h-4" />;
    if (['mp4', 'avi', 'mkv', 'mov', 'webm'].includes(ext)) return <Video className="w-4 h-4" />;
    if (['mp3', 'wav', 'flac', 'ogg', 'aac'].includes(ext)) return <Music className="w-4 h-4" />;
    if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) return <Archive className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileSelect = (files) => {
    const newFiles = Array.from(files).map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
    
    // Add system message about file upload
    const fileNames = newFiles.map(f => f.name).join(', ');
    const systemMessage = {
      id: Date.now(),
      type: 'system',
      content: `📎 Added ${newFiles.length} file(s): ${fileNames}`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, systemMessage]);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files);
    }
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const generateAIResponse = (userMessage, files) => {
    const responses = [
      `I can see you've shared "${userMessage}". ${files.length > 0 ? `Along with ${files.length} file(s), ` : ''}How can I help you further?`,
      `Thanks for your message! ${files.length > 0 ? `I notice you've uploaded ${files.length} file(s). ` : ''}What would you like to know?`,
      `Got it! ${files.length > 0 ? `I see you've attached ${files.map(f => f.name).join(', ')}. ` : ''}What's your next question?`,
      `Understood! ${files.length > 0 ? `Those files look interesting - ${files.length} in total. ` : ''}Feel free to ask me anything else!`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = () => {
    if (inputValue.trim() || uploadedFiles.length > 0) {
      const newMessage = {
        id: Date.now(),
        type: 'user',
        content: inputValue.trim(),
        files: [...uploadedFiles],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      
      const messageContent = inputValue.trim();
      const attachedFiles = [...uploadedFiles];
      
      setInputValue('');
      setUploadedFiles([]);
      setIsTyping(true);
      
      // Simulate AI response with typing delay
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          type: 'ai',
          content: generateAIResponse(messageContent, attachedFiles),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1000 + Math.random() * 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const themeClasses = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    inputBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-100',
    uploadArea: isDragOver 
      ? (isDarkMode ? 'bg-blue-900/50 border-blue-500' : 'bg-blue-50 border-blue-400')
      : (isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'),
    userMessage: isDarkMode ? 'bg-blue-600' : 'bg-blue-500',
    aiMessage: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
    systemMessage: isDarkMode ? 'bg-yellow-900/30 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className={`w-full min-h-screen transition-colors duration-300 ${themeClasses.background}`}>
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className={`rounded-2xl shadow-xl border ${themeClasses.cardBg} ${themeClasses.border} mb-6`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className={`text-3xl font-bold ${themeClasses.text}`}>File Upload & Chat</h1>
                  <p className={`mt-1 ${themeClasses.textSecondary}`}>Upload files and chat with AI assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 rounded-xl border transition-all duration-200 hover:scale-105 hover:shadow-lg ${themeClasses.border} ${themeClasses.inputBg} ${themeClasses.text}`}
              >
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
            </div>

            {/* Quick Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${themeClasses.uploadArea}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFileSelect(e.target.files)}
                multiple
                className="hidden"
              />
              <div className="flex items-center justify-center gap-4">
                <Upload className={`w-8 h-8 ${themeClasses.textSecondary}`} />
                <div>
                  <h3 className={`text-lg font-semibold ${themeClasses.text}`}>
                    {isDragOver ? 'Drop files here!' : 'Quick File Upload'}
                  </h3>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>
                    Drag files here or{' '}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="text-blue-500 hover:text-blue-600 underline font-medium"
                    >
                      browse
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* Files Ready to Send */}
            {uploadedFiles.length > 0 && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`text-sm font-medium ${themeClasses.text}`}>
                    Files ready to send ({uploadedFiles.length})
                  </h4>
                  <button
                    onClick={() => setUploadedFiles([])}
                    className={`text-xs px-3 py-1 rounded-full ${themeClasses.textSecondary} hover:text-red-500 transition-colors`}
                  >
                    Clear all
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {uploadedFiles.map(file => (
                    <div key={file.id} className={`flex items-center gap-3 p-3 rounded-lg border ${themeClasses.border} ${themeClasses.inputBg}`}>
                      {getFileIcon(file.name)}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${themeClasses.text}`}>{file.name}</p>
                        <p className={`text-xs ${themeClasses.textSecondary}`}>{formatFileSize(file.size)}</p>
                      </div>
                      <button
                        onClick={() => removeFile(file.id)}
                        className={`p-1 rounded-full hover:bg-red-500/20 ${themeClasses.textSecondary} hover:text-red-500 transition-colors`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`rounded-2xl shadow-xl border ${themeClasses.cardBg} ${themeClasses.border}`}>
          {/* Chat Header */}
          <div className={`px-6 py-4 border-b ${themeClasses.border}`}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className={`font-semibold ${themeClasses.text}`}>Chat with AI Assistant</h3>
              <span className={`text-sm ${themeClasses.textSecondary}`}>Online</span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map(message => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : message.type === 'system' ? 'justify-center' : 'justify-start'}`}>
                {message.type !== 'system' && message.type === 'ai' && (
                  <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${themeClasses.inputBg}`}>
                    <Bot className="w-5 h-5 text-blue-500" />
                  </div>
                )}
                
                <div className={`max-w-xs lg:max-w-md ${
                  message.type === 'user' ? `${themeClasses.userMessage} text-white ml-3` :
                  message.type === 'ai' ? `${themeClasses.aiMessage} ${themeClasses.text}` :
                  `${themeClasses.systemMessage} text-xs`
                } px-4 py-3 rounded-2xl ${message.type === 'user' ? 'rounded-br-md' : message.type === 'ai' ? 'rounded-bl-md' : 'rounded-lg'}`}>
                  {message.content && <p className="break-words">{message.content}</p>}
                  {message.files && message.files.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {message.files.map(file => (
                        <div key={file.id} className="flex items-center gap-2 text-sm opacity-90 bg-black/10 rounded px-2 py-1">
                          {getFileIcon(file.name)}
                          <span className="truncate">{file.name}</span>
                          <span className="text-xs">({formatFileSize(file.size)})</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {message.type === 'user' && (
                  <div className={`w-8 h-8 rounded-full ml-3 flex items-center justify-center ${themeClasses.userMessage}`}>
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${themeClasses.inputBg}`}>
                  <Bot className="w-5 h-5 text-blue-500" />
                </div>
                <div className={`px-4 py-3 rounded-2xl rounded-bl-md ${themeClasses.aiMessage}`}>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className={`border-t p-4 ${themeClasses.border}`}>
            <div className="flex gap-3 items-end">
              <button
                onClick={() => fileInputRef.current?.click()}
                className={`p-3 rounded-xl border transition-all duration-200 hover:scale-105 hover:shadow-lg ${themeClasses.border} ${themeClasses.inputBg} ${themeClasses.text}`}
                title="Attach files"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              
              <div className="flex-1 relative">
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  rows={1}
                  className={`w-full px-4 py-3 rounded-xl border resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 max-h-32 ${themeClasses.inputBg} ${themeClasses.border} ${themeClasses.text} placeholder-gray-400`}
                  style={{ minHeight: '48px' }}
                />
                
                {/* Character count */}
                {inputValue.length > 0 && (
                  <div className={`absolute bottom-1 right-3 text-xs ${themeClasses.textSecondary}`}>
                    {inputValue.length}
                  </div>
                )}
              </div>
              
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() && uploadedFiles.length === 0}
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 disabled:hover:scale-100 shadow-lg"
                title="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            {/* Quick Actions */}
            {uploadedFiles.length === 0 && inputValue.length === 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => setInputValue('Can you help me analyze this file?')}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors hover:bg-blue-500 hover:text-white hover:border-blue-500 ${themeClasses.border} ${themeClasses.textSecondary}`}
                >
                  Analyze file
                </button>
                <button
                  onClick={() => setInputValue('What can you do with uploaded files?')}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors hover:bg-blue-500 hover:text-white hover:border-blue-500 ${themeClasses.border} ${themeClasses.textSecondary}`}
                >
                  File capabilities
                </button>
                <button
                  onClick={() => setInputValue('Hello! How can you help me today?')}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors hover:bg-blue-500 hover:text-white hover:border-blue-500 ${themeClasses.border} ${themeClasses.textSecondary}`}
                >
                  Get started
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadChat;

demo.tsx
import  Component  from "@/components/ui/file-upload-and-chat";

export default function FileUploadChat() {
  return <Component />;
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
ai-chat.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AIChatCard({ className }: { className?: string }) {
  const [messages, setMessages] = useState<{ sender: "ai" | "user"; text: string }[]>([
    { sender: "ai", text: "👋 Hello! I’m your AI assistant." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: "🤖 This is a sample AI response." }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className={cn("relative w-[360px] h-[460px] rounded-2xl overflow-hidden p-[2px]", className)}>
      {/* Animated Outer Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-white/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner Card */}
      <div className="relative flex flex-col w-full h-full rounded-xl border border-white/10 overflow-hidden bg-black/90 backdrop-blur-xl">
        {/* Inner Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            animate={{
              y: ["0%", "-140%"],
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{ left: `${Math.random() * 100}%`, bottom: "-10%" }}
          />
        ))}

        {/* Header */}
        <div className="px-4 py-3 border-b border-white/10 relative z-10">
          <h2 className="text-lg font-semibold text-white">🤖 AI Assistant</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 text-sm flex flex-col relative z-10">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "px-3 py-2 rounded-xl max-w-[80%] shadow-md backdrop-blur-md",
                msg.sender === "ai"
                  ? "bg-white/10 text-white self-start"
                  : "bg-white/30 text-black font-semibold self-end"
              )}
            >
              {msg.text}
            </motion.div>
          ))}

          {/* AI Typing Indicator */}
          {isTyping && (
            <motion.div
              className="flex items-center gap-1 px-3 py-2 rounded-xl max-w-[30%] bg-white/10 self-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse delay-200"></span>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse delay-400"></span>
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 p-3 border-t border-white/10 relative z-10">
          <input
            className="flex-1 px-3 py-2 text-sm bg-black/50 rounded-lg border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/50"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}


demo.tsx
import  AIChatCard  from "@/components/ui/ai-chat";

export default function DemoOne() {
  return <AIChatCard  />;
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
ai-input.tsx
"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { AnimatePresence, motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface OrbProps {
  dimension?: string
  className?: string
  tones?: {
    base?: string
    accent1?: string
    accent2?: string
    accent3?: string
  }
  spinDuration?: number
}

const ColorOrb: React.FC<OrbProps> = ({
  dimension = "192px",
  className,
  tones,
  spinDuration = 20,
}) => {
  const fallbackTones = {
    base: "oklch(95% 0.02 264.695)",
    accent1: "oklch(75% 0.15 350)",
    accent2: "oklch(80% 0.12 200)",
    accent3: "oklch(78% 0.14 280)",
  }

  const palette = { ...fallbackTones, ...tones }

  const dimValue = parseInt(dimension.replace("px", ""), 10)

  const blurStrength =
    dimValue < 50 ? Math.max(dimValue * 0.008, 1) : Math.max(dimValue * 0.015, 4)

  const contrastStrength =
    dimValue < 50 ? Math.max(dimValue * 0.004, 1.2) : Math.max(dimValue * 0.008, 1.5)

  const pixelDot = dimValue < 50 ? Math.max(dimValue * 0.004, 0.05) : Math.max(dimValue * 0.008, 0.1)

  const shadowRange = dimValue < 50 ? Math.max(dimValue * 0.004, 0.5) : Math.max(dimValue * 0.008, 2)

  const maskRadius =
    dimValue < 30 ? "0%" : dimValue < 50 ? "5%" : dimValue < 100 ? "15%" : "25%"

  const adjustedContrast =
    dimValue < 30 ? 1.1 : dimValue < 50 ? Math.max(contrastStrength * 1.2, 1.3) : contrastStrength

  return (
    <div
      className={cn("color-orb", className)}
      style={{
        width: dimension,
        height: dimension,
        "--base": palette.base,
        "--accent1": palette.accent1,
        "--accent2": palette.accent2,
        "--accent3": palette.accent3,
        "--spin-duration": `${spinDuration}s`,
        "--blur": `${blurStrength}px`,
        "--contrast": adjustedContrast,
        "--dot": `${pixelDot}px`,
        "--shadow": `${shadowRange}px`,
        "--mask": maskRadius,
      } as React.CSSProperties}
    >
      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .color-orb {
          display: grid;
          grid-template-areas: "stack";
          overflow: hidden;
          border-radius: 50%;
          position: relative;
          transform: scale(1.1);
        }

        .color-orb::before,
        .color-orb::after {
          content: "";
          display: block;
          grid-area: stack;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform: translateZ(0);
        }

        .color-orb::before {
          background:
            conic-gradient(
              from calc(var(--angle) * 2) at 25% 70%,
              var(--accent3),
              transparent 20% 80%,
              var(--accent3)
            ),
            conic-gradient(
              from calc(var(--angle) * 2) at 45% 75%,
              var(--accent2),
              transparent 30% 60%,
              var(--accent2)
            ),
            conic-gradient(
              from calc(var(--angle) * -3) at 80% 20%,
              var(--accent1),
              transparent 40% 60%,
              var(--accent1)
            ),
            conic-gradient(
              from calc(var(--angle) * 2) at 15% 5%,
              var(--accent2),
              transparent 10% 90%,
              var(--accent2)
            ),
            conic-gradient(
              from calc(var(--angle) * 1) at 20% 80%,
              var(--accent1),
              transparent 10% 90%,
              var(--accent1)
            ),
            conic-gradient(
              from calc(var(--angle) * -2) at 85% 10%,
              var(--accent3),
              transparent 20% 80%,
              var(--accent3)
            );
          box-shadow: inset var(--base) 0 0 var(--shadow) calc(var(--shadow) * 0.2);
          filter: blur(var(--blur)) contrast(var(--contrast));
          animation: spin var(--spin-duration) linear infinite;
        }

        .color-orb::after {
          background-image: radial-gradient(
            circle at center,
            var(--base) var(--dot),
            transparent var(--dot)
          );
          background-size: calc(var(--dot) * 2) calc(var(--dot) * 2);
          backdrop-filter: blur(calc(var(--blur) * 2)) contrast(calc(var(--contrast) * 2));
          mix-blend-mode: overlay;
        }

        .color-orb[style*="--mask: 0%"]::after {
          mask-image: none;
        }

        .color-orb:not([style*="--mask: 0%"])::after {
          mask-image: radial-gradient(black var(--mask), transparent 75%);
        }

        @keyframes spin {
          to {
            --angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .color-orb::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

const SPEED_FACTOR = 1

interface ContextShape {
  showForm: boolean
  successFlag: boolean
  triggerOpen: () => void
  triggerClose: () => void
}

const FormContext = React.createContext({} as ContextShape)
const useFormContext = () => React.useContext(FormContext)

export function MorphPanel() {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)

  const [showForm, setShowForm] = React.useState(false)
  const [successFlag, setSuccessFlag] = React.useState(false)

  const triggerClose = React.useCallback(() => {
    setShowForm(false)
    textareaRef.current?.blur()
  }, [])

  const triggerOpen = React.useCallback(() => {
    setShowForm(true)
    setTimeout(() => {
      textareaRef.current?.focus()
    })
  }, [])

  const handleSuccess = React.useCallback(() => {
    triggerClose()
    setSuccessFlag(true)
    setTimeout(() => setSuccessFlag(false), 1500)
  }, [triggerClose])

  React.useEffect(() => {
    function clickOutsideHandler(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node) && showForm) {
        triggerClose()
      }
    }
    document.addEventListener("mousedown", clickOutsideHandler)
    return () => document.removeEventListener("mousedown", clickOutsideHandler)
  }, [showForm, triggerClose])

  const ctx = React.useMemo(
    () => ({ showForm, successFlag, triggerOpen, triggerClose }),
    [showForm, successFlag, triggerOpen, triggerClose]
  )

  return (
    <div className="flex items-center justify-center" style={{ width: FORM_WIDTH, height: FORM_HEIGHT }}>
      <motion.div
        ref={wrapperRef}
        data-panel
        className={cx(
          "bg-background relative bottom-8 z-3 flex flex-col items-center overflow-hidden border max-sm:bottom-5"
        )}
        initial={false}
        animate={{
          width: showForm ? FORM_WIDTH : "auto",
          height: showForm ? FORM_HEIGHT : 44,
          borderRadius: showForm ? 14 : 20,
        }}
        transition={{
          type: "spring",
          stiffness: 550 / SPEED_FACTOR,
          damping: 45,
          mass: 0.7,
          delay: showForm ? 0 : 0.08,
        }}
      >
        <FormContext.Provider value={ctx}>
          <DockBar />
          <InputForm ref={textareaRef} onSuccess={handleSuccess} />
        </FormContext.Provider>
      </motion.div>
    </div>
  )
}

function DockBar() {
  const { showForm, triggerOpen } = useFormContext()
  return (
    <footer className="mt-auto flex h-[44px] items-center justify-center whitespace-nowrap select-none">
      <div className="flex items-center justify-center gap-2 px-3 max-sm:h-10 max-sm:px-2">
        <div className="flex w-fit items-center gap-2">
          <AnimatePresence mode="wait">
            {showForm ? (
              <motion.div
                key="blank"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="h-5 w-5"
              />
            ) : (
              <motion.div
                key="orb"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ColorOrb dimension="24px" tones={{ base: "oklch(22.64% 0 0)" }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Button
          type="button"
          className="flex h-fit flex-1 justify-end rounded-full px-2 !py-0.5"
          variant="ghost"
          onClick={triggerOpen}
        >
          <span className="truncate">Ask AI</span>
        </Button>
      </div>
    </footer>
  )
}

const FORM_WIDTH = 360
const FORM_HEIGHT = 200

function InputForm({ ref, onSuccess }: { ref: React.Ref<HTMLTextAreaElement>; onSuccess: () => void }) {
  const { triggerClose, showForm } = useFormContext()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSuccess()
  }

  function handleKeys(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Escape") triggerClose()
    if (e.key === "Enter" && e.metaKey) {
      e.preventDefault()
      btnRef.current?.click()
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute bottom-0"
      style={{ width: FORM_WIDTH, height: FORM_HEIGHT, pointerEvents: showForm ? "all" : "none" }}
    >
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 550 / SPEED_FACTOR, damping: 45, mass: 0.7 }}
            className="flex h-full flex-col p-1"
          >
            <div className="flex justify-between py-1">
              <p className="text-foreground z-2 ml-[38px] flex items-center gap-[6px] select-none">
                AI Input
              </p>
              <button
                type="submit"
                ref={btnRef}
                className="text-foreground right-4 mt-1 flex -translate-y-[3px] cursor-pointer items-center justify-center gap-1 rounded-[12px] bg-transparent pr-1 text-center select-none"
              >
                <KeyHint>⌘</KeyHint>
                <KeyHint className="w-fit">Enter</KeyHint>
              </button>
            </div>
            <textarea
              ref={ref}
              placeholder="Ask me anything..."
              name="message"
              className="h-full w-full resize-none scroll-py-2 rounded-md p-4 outline-0"
              required
              onKeyDown={handleKeys}
              spellCheck={false}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-2 left-3"
          >
            <ColorOrb dimension="24px" tones={{ base: "oklch(22.64% 0 0)" }} />
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}

const SPRING_LOGO = { type: "spring", stiffness: 350 / SPEED_FACTOR, damping: 35 } as const

function KeyHint({ children, className }: { children: string; className?: string }) {
  return (
    <kbd
      className={cx(
        "text-foreground flex h-6 w-fit items-center justify-center rounded-sm border px-[6px] font-sans",
        className
      )}
    >
      {children}
    </kbd>
  )
}

export default MorphPanel


demo.tsx
import { MorphPanel } from "@/components/ui/ai-input";

export default function DemoOne() {
  return <MorphPanel />;
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
motion, class-variance-authority, @radix-ui/react-slot
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
ai-input.tsx
"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { AnimatePresence, motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface OrbProps {
  dimension?: string
  className?: string
  tones?: {
    base?: string
    accent1?: string
    accent2?: string
    accent3?: string
  }
  spinDuration?: number
}

const ColorOrb: React.FC<OrbProps> = ({
  dimension = "192px",
  className,
  tones,
  spinDuration = 20,
}) => {
  const fallbackTones = {
    base: "oklch(95% 0.02 264.695)",
    accent1: "oklch(75% 0.15 350)",
    accent2: "oklch(80% 0.12 200)",
    accent3: "oklch(78% 0.14 280)",
  }

  const palette = { ...fallbackTones, ...tones }

  const dimValue = parseInt(dimension.replace("px", ""), 10)

  const blurStrength =
    dimValue < 50 ? Math.max(dimValue * 0.008, 1) : Math.max(dimValue * 0.015, 4)

  const contrastStrength =
    dimValue < 50 ? Math.max(dimValue * 0.004, 1.2) : Math.max(dimValue * 0.008, 1.5)

  const pixelDot = dimValue < 50 ? Math.max(dimValue * 0.004, 0.05) : Math.max(dimValue * 0.008, 0.1)

  const shadowRange = dimValue < 50 ? Math.max(dimValue * 0.004, 0.5) : Math.max(dimValue * 0.008, 2)

  const maskRadius =
    dimValue < 30 ? "0%" : dimValue < 50 ? "5%" : dimValue < 100 ? "15%" : "25%"

  const adjustedContrast =
    dimValue < 30 ? 1.1 : dimValue < 50 ? Math.max(contrastStrength * 1.2, 1.3) : contrastStrength

  return (
    <div
      className={cn("color-orb", className)}
      style={{
        width: dimension,
        height: dimension,
        "--base": palette.base,
        "--accent1": palette.accent1,
        "--accent2": palette.accent2,
        "--accent3": palette.accent3,
        "--spin-duration": `${spinDuration}s`,
        "--blur": `${blurStrength}px`,
        "--contrast": adjustedContrast,
        "--dot": `${pixelDot}px`,
        "--shadow": `${shadowRange}px`,
        "--mask": maskRadius,
      } as React.CSSProperties}
    >
      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .color-orb {
          display: grid;
          grid-template-areas: "stack";
          overflow: hidden;
          border-radius: 50%;
          position: relative;
          transform: scale(1.1);
        }

        .color-orb::before,
        .color-orb::after {
          content: "";
          display: block;
          grid-area: stack;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform: translateZ(0);
        }

        .color-orb::before {
          background:
            conic-gradient(
              from calc(var(--angle) * 2) at 25% 70%,
              var(--accent3),
              transparent 20% 80%,
              var(--accent3)
            ),
            conic-gradient(
              from calc(var(--angle) * 2) at 45% 75%,
              var(--accent2),
              transparent 30% 60%,
              var(--accent2)
            ),
            conic-gradient(
              from calc(var(--angle) * -3) at 80% 20%,
              var(--accent1),
              transparent 40% 60%,
              var(--accent1)
            ),
            conic-gradient(
              from calc(var(--angle) * 2) at 15% 5%,
              var(--accent2),
              transparent 10% 90%,
              var(--accent2)
            ),
            conic-gradient(
              from calc(var(--angle) * 1) at 20% 80%,
              var(--accent1),
              transparent 10% 90%,
              var(--accent1)
            ),
            conic-gradient(
              from calc(var(--angle) * -2) at 85% 10%,
              var(--accent3),
              transparent 20% 80%,
              var(--accent3)
            );
          box-shadow: inset var(--base) 0 0 var(--shadow) calc(var(--shadow) * 0.2);
          filter: blur(var(--blur)) contrast(var(--contrast));
          animation: spin var(--spin-duration) linear infinite;
        }

        .color-orb::after {
          background-image: radial-gradient(
            circle at center,
            var(--base) var(--dot),
            transparent var(--dot)
          );
          background-size: calc(var(--dot) * 2) calc(var(--dot) * 2);
          backdrop-filter: blur(calc(var(--blur) * 2)) contrast(calc(var(--contrast) * 2));
          mix-blend-mode: overlay;
        }

        .color-orb[style*="--mask: 0%"]::after {
          mask-image: none;
        }

        .color-orb:not([style*="--mask: 0%"])::after {
          mask-image: radial-gradient(black var(--mask), transparent 75%);
        }

        @keyframes spin {
          to {
            --angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .color-orb::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

const SPEED_FACTOR = 1

interface ContextShape {
  showForm: boolean
  successFlag: boolean
  triggerOpen: () => void
  triggerClose: () => void
}

const FormContext = React.createContext({} as ContextShape)
const useFormContext = () => React.useContext(FormContext)

export function MorphPanel() {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)

  const [showForm, setShowForm] = React.useState(false)
  const [successFlag, setSuccessFlag] = React.useState(false)

  const triggerClose = React.useCallback(() => {
    setShowForm(false)
    textareaRef.current?.blur()
  }, [])

  const triggerOpen = React.useCallback(() => {
    setShowForm(true)
    setTimeout(() => {
      textareaRef.current?.focus()
    })
  }, [])

  const handleSuccess = React.useCallback(() => {
    triggerClose()
    setSuccessFlag(true)
    setTimeout(() => setSuccessFlag(false), 1500)
  }, [triggerClose])

  React.useEffect(() => {
    function clickOutsideHandler(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node) && showForm) {
        triggerClose()
      }
    }
    document.addEventListener("mousedown", clickOutsideHandler)
    return () => document.removeEventListener("mousedown", clickOutsideHandler)
  }, [showForm, triggerClose])

  const ctx = React.useMemo(
    () => ({ showForm, successFlag, triggerOpen, triggerClose }),
    [showForm, successFlag, triggerOpen, triggerClose]
  )

  return (
    <div className="flex items-center justify-center" style={{ width: FORM_WIDTH, height: FORM_HEIGHT }}>
      <motion.div
        ref={wrapperRef}
        data-panel
        className={cx(
          "bg-background relative bottom-8 z-3 flex flex-col items-center overflow-hidden border max-sm:bottom-5"
        )}
        initial={false}
        animate={{
          width: showForm ? FORM_WIDTH : "auto",
          height: showForm ? FORM_HEIGHT : 44,
          borderRadius: showForm ? 14 : 20,
        }}
        transition={{
          type: "spring",
          stiffness: 550 / SPEED_FACTOR,
          damping: 45,
          mass: 0.7,
          delay: showForm ? 0 : 0.08,
        }}
      >
        <FormContext.Provider value={ctx}>
          <DockBar />
          <InputForm ref={textareaRef} onSuccess={handleSuccess} />
        </FormContext.Provider>
      </motion.div>
    </div>
  )
}

function DockBar() {
  const { showForm, triggerOpen } = useFormContext()
  return (
    <footer className="mt-auto flex h-[44px] items-center justify-center whitespace-nowrap select-none">
      <div className="flex items-center justify-center gap-2 px-3 max-sm:h-10 max-sm:px-2">
        <div className="flex w-fit items-center gap-2">
          <AnimatePresence mode="wait">
            {showForm ? (
              <motion.div
                key="blank"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="h-5 w-5"
              />
            ) : (
              <motion.div
                key="orb"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ColorOrb dimension="24px" tones={{ base: "oklch(22.64% 0 0)" }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Button
          type="button"
          className="flex h-fit flex-1 justify-end rounded-full px-2 !py-0.5"
          variant="ghost"
          onClick={triggerOpen}
        >
          <span className="truncate">Ask AI</span>
        </Button>
      </div>
    </footer>
  )
}

const FORM_WIDTH = 360
const FORM_HEIGHT = 200

function InputForm({ ref, onSuccess }: { ref: React.Ref<HTMLTextAreaElement>; onSuccess: () => void }) {
  const { triggerClose, showForm } = useFormContext()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSuccess()
  }

  function handleKeys(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Escape") triggerClose()
    if (e.key === "Enter" && e.metaKey) {
      e.preventDefault()
      btnRef.current?.click()
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute bottom-0"
      style={{ width: FORM_WIDTH, height: FORM_HEIGHT, pointerEvents: showForm ? "all" : "none" }}
    >
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 550 / SPEED_FACTOR, damping: 45, mass: 0.7 }}
            className="flex h-full flex-col p-1"
          >
            <div className="flex justify-between py-1">
              <p className="text-foreground z-2 ml-[38px] flex items-center gap-[6px] select-none">
                AI Input
              </p>
              <button
                type="submit"
                ref={btnRef}
                className="text-foreground right-4 mt-1 flex -translate-y-[3px] cursor-pointer items-center justify-center gap-1 rounded-[12px] bg-transparent pr-1 text-center select-none"
              >
                <KeyHint>⌘</KeyHint>
                <KeyHint className="w-fit">Enter</KeyHint>
              </button>
            </div>
            <textarea
              ref={ref}
              placeholder="Ask me anything..."
              name="message"
              className="h-full w-full resize-none scroll-py-2 rounded-md p-4 outline-0"
              required
              onKeyDown={handleKeys}
              spellCheck={false}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-2 left-3"
          >
            <ColorOrb dimension="24px" tones={{ base: "oklch(22.64% 0 0)" }} />
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}

const SPRING_LOGO = { type: "spring", stiffness: 350 / SPEED_FACTOR, damping: 35 } as const

function KeyHint({ children, className }: { children: string; className?: string }) {
  return (
    <kbd
      className={cx(
        "text-foreground flex h-6 w-fit items-center justify-center rounded-sm border px-[6px] font-sans",
        className
      )}
    >
      {children}
    </kbd>
  )
}

export default MorphPanel


demo.tsx
import { MorphPanel } from "@/components/ui/ai-input";

export default function DemoOne() {
  return <MorphPanel />;
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
motion, class-variance-authority, @radix-ui/react-slot
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
siri-orb.tsx
"use client"

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Settings } from "lucide-react";

// --- Minimal Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "candy" | "default"
  size?: "sm" | "md"
}
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
  const variants: Record<string, string> = {
    default:
      "bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
    candy: "bg-pink-500 text-white hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-500",
  }
  const sizes: Record<string, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
  }
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

// --- SiriOrb Component ---
interface SiriOrbProps {
  size?: string
  className?: string
  colors?: {
    bg?: string
    c1?: string
    c2?: string
    c3?: string
  }
  animationDuration?: number
}
const SiriOrb: React.FC<SiriOrbProps> = ({
  size = "192px",
  className,
  colors,
  animationDuration = 20,
}) => {
  const defaultColors = {
    bg: "transparent",
    c1: "oklch(75% 0.15 350)",
    c2: "oklch(80% 0.12 200)", 
    c3: "oklch(78% 0.14 280)",
  }

  const finalColors = { ...defaultColors, ...colors }
  const sizeValue = parseInt(size.replace("px", ""), 10)

  const blurAmount = Math.max(sizeValue * 0.08, 8)
  const contrastAmount = Math.max(sizeValue * 0.003, 1.8)

  return (
    <div
      className={cn("siri-orb", className)}
      style={
        {
          width: size,
          height: size,
          "--bg": finalColors.bg,
          "--c1": finalColors.c1,
          "--c2": finalColors.c2,
          "--c3": finalColors.c3,
          "--animation-duration": `${animationDuration}s`,
          "--blur-amount": `${blurAmount}px`,
          "--contrast-amount": contrastAmount,
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .siri-orb {
          display: grid;
          grid-template-areas: "stack";
          overflow: hidden;
          border-radius: 50%;
          position: relative;
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.08) 0%,   /* darker core for light mode */
            rgba(0, 0, 0, 0.03) 30%,
            transparent 70%
          );
        }

        /* override for dark mode */
        .dark .siri-orb {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.02) 30%,
            transparent 70%
          );
        }

        .siri-orb::before {
          content: "";
          display: block;
          grid-area: stack;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background:
            conic-gradient(
              from calc(var(--angle) * 1.2) at 30% 65%,
              var(--c3) 0deg,
              transparent 45deg 315deg,
              var(--c3) 360deg
            ),
            conic-gradient(
              from calc(var(--angle) * 0.8) at 70% 35%,
              var(--c2) 0deg,
              transparent 60deg 300deg,
              var(--c2) 360deg
            ),
            conic-gradient(
              from calc(var(--angle) * -1.5) at 65% 75%,
              var(--c1) 0deg,
              transparent 90deg 270deg,
              var(--c1) 360deg
            ),
            conic-gradient(
              from calc(var(--angle) * 2.1) at 25% 25%,
              var(--c2) 0deg,
              transparent 30deg 330deg,
              var(--c2) 360deg
            ),
            conic-gradient(
              from calc(var(--angle) * -0.7) at 80% 80%,
              var(--c1) 0deg,
              transparent 45deg 315deg,
              var(--c1) 360deg
            ),
            radial-gradient(
              ellipse 120% 80% at 40% 60%,
              var(--c3) 0%,
              transparent 50%
            );
          filter: blur(var(--blur-amount)) contrast(var(--contrast-amount)) saturate(1.2);
          animation: rotate var(--animation-duration) linear infinite;
          transform: translateZ(0);
          will-change: transform;
        }

        .siri-orb::after {
          content: "";
          display: block;
          grid-area: stack;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 45% 55%,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 30%,
            transparent 60%
          );
          mix-blend-mode: overlay;
        }

        @keyframes rotate {
          from {
            --angle: 0deg;
          }
          to {
            --angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .siri-orb::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

// --- Demo Wrapper ---
const SiriOrbDemo: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>("192px")
  const [animationDuration, setAnimationDuration] = useState(20)
  const [showSettings, setShowSettings] = useState(false)

  const sizeOptions = [
    { value: "64px", label: "XS" },
    { value: "128px", label: "SM" },
    { value: "192px", label: "MD" },
    { value: "256px", label: "LG" },
    { value: "320px", label: "XL" },
  ]

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-white to-gray-100 dark:from-slate-900 dark:to-slate-700 flex items-center justify-center relative text-black dark:text-white">
      <SiriOrb
        size={selectedSize}
        animationDuration={animationDuration}
        className="drop-shadow-2xl"
      />

      <div className="absolute right-4 bottom-4">
        <Button
          variant="candy"
          size="sm"
          onClick={() => setShowSettings(!showSettings)}
          className="h-10 w-10 rounded-full p-0"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {showSettings && (
        <div className="bg-white/90 dark:bg-black/40 backdrop-blur-md absolute right-4 bottom-[64px] flex w-fit flex-col justify-between gap-4 rounded-lg border border-black/10 dark:border-white/20 p-4 shadow-xl">
          <div>
            <div className="mb-2 block text-sm font-medium">Size</div>
            <div className="flex gap-2">
              {sizeOptions.map((option) => (
                <Button
                  variant="candy"
                  size="sm"
                  key={option.value}
                  type="button"
                  onClick={() => setSelectedSize(option.value)}
                  className={`h-auto w-auto px-2 py-1 ${
                    selectedSize === option.value ? "" : "opacity-50"
                  }`}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="animation-speed"
              className="mb-2 block text-sm font-medium"
            >
              Animation Speed: {animationDuration}s
            </label>
            <input
              id="animation-speed"
              type="range"
              min="5"
              max="40"
              value={animationDuration}
              onChange={(e) => setAnimationDuration(Number(e.target.value))}
              className="slider h-2 w-full cursor-pointer appearance-none rounded-lg border border-gray-300 dark:border-white/30 bg-gray-200 dark:bg-white/10"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: oklch(0.72 0.2 352.53);
          cursor: pointer;
          border: none;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: oklch(0.72 0.2 352.53);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
}

export default SiriOrbDemo


demo.tsx
import Component from "@/components/ui/siri-orb";

export default function DemoOne() {
  return <Component />;
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
ruixen-mono-chat.tsx
"use client";

import React, { useState } from "react";
import {
    SmilePlus,
    Send,
    MoreHorizontal,
    CheckCheck,
    Check,
    Users,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    content: string;
    sender: {
        name: string;
        avatar: string;
        isOnline: boolean;
    };
    timestamp: string;
    status: "sent" | "delivered" | "read";
    reactions?: Array<{
        emoji: string;
        count: number;
        reacted: boolean;
    }>;
}

interface RuixenCard04Props {
    chatName?: string;
    messages?: Message[];
}

export default function RuixenCard04({
    chatName = "Software Team",
    messages = [
        {
            id: "1",
            content: "Just pushed the latest design system updates ✨",
            sender: {
                name: "Alex Chen",
                avatar:
                    "https://github.com/shadcn.png",
                isOnline: true,
            },
            timestamp: "10:24 AM",
            status: "read",
            reactions: [
                { emoji: "🙌", count: 2, reacted: true },
                { emoji: "✨", count: 1, reacted: false },
            ],
        },
        {
            id: "2",
            content:
                "The new components look amazing! Great work on the animations.",
            sender: {
                name: "Sarah Kim",
                avatar:
                    "https://github.com/evilrabbit.png",
                isOnline: true,
            },
            timestamp: "10:26 AM",
            status: "delivered",
        },
    ],
}: RuixenCard04Props) {
    const [selectedSender, setSelectedSender] = useState<string | null>(null);

    // Get unique senders from messages
    const uniqueSenders = Array.from(
        new Map(
            messages.map((m) => [m.sender.name, m.sender])
        ).values()
    );

    // Filter messages by selected sender or show all
    const filteredMessages = selectedSender
        ? messages.filter((m) => m.sender.name === selectedSender)
        : messages;

    return (
        <div className="w-full max-w-5xl mx-auto p-6 bg-white dark:bg-black rounded-3xl shadow-lg flex flex-col h-[550px] border border-gray-300 dark:border-gray-700">
            {/* Header */}
            <header className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-3 mb-6">
                <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-black dark:text-white" />
                    <div>
                        <h2 className="text-2xl font-semibold text-black dark:text-white">
                            {chatName}
                        </h2>
                        <p className="italic text-sm text-gray-600 dark:text-gray-400">
                            Collaborate creatively, deliver clearly.
                        </p>
                    </div>
                </div>
                <button
                    aria-label="More options"
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition"
                >
                    <MoreHorizontal className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
            </header>

            {/* Body */}
            <main className="flex flex-1 overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
                {/* Participants List */}
                <aside className="w-56 bg-gray-50 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 p-4 overflow-y-auto">
                    {uniqueSenders.map((sender) => {
                        const isSelected = selectedSender === sender.name;
                        return (
                            <button
                                key={sender.name}
                                onClick={() =>
                                    setSelectedSender(
                                        isSelected ? null : sender.name
                                    )
                                }
                                className={cn(
                                    "flex items-center gap-3 w-full p-3 mb-3 rounded-lg transition-colors",
                                    isSelected
                                        ? "bg-black dark:bg-white text-white dark:text-black"
                                        : "hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-300"
                                )}
                            >
                                <div className="relative">
                                    <Image
                                        src={sender.avatar}
                                        alt={sender.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full ring-1 ring-gray-400 dark:ring-gray-600"
                                    />
                                    <span
                                        className={cn(
                                            "absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-white dark:ring-black",
                                            sender.isOnline
                                                ? "bg-green-500"
                                                : "bg-gray-400"
                                        )}
                                    />
                                </div>
                                <span className="text-left font-medium truncate">
                                    {sender.name}
                                </span>
                            </button>
                        );
                    })}
                </aside>

                {/* Messages */}
                <section className="flex-1 p-6 overflow-y-auto bg-white dark:bg-black">
                    {filteredMessages.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            No messages to display.
                        </p>
                    ) : (
                        filteredMessages.map((message) => (
                            <div
                                key={message.id}
                                className="mb-6 last:mb-0 group border-b border-gray-200 dark:border-gray-800 pb-4"
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <Image
                                        src={message.sender.avatar}
                                        alt={message.sender.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full ring-1 ring-gray-400 dark:ring-gray-600"
                                    />
                                    <div>
                                        <p className="font-semibold text-black dark:text-white">
                                            {message.sender.name}
                                        </p>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            {message.timestamp}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-800 dark:text-gray-200 text-lg mb-1">
                                    {message.content}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        {message.status === "read" && (
                                            <CheckCheck className="w-5 h-5 text-green-500" />
                                        )}
                                        {message.status === "delivered" && (
                                            <Check className="w-5 h-5" />
                                        )}
                                        <span>{message.timestamp}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {message.reactions?.map((reaction) => (
                                            <button
                                                key={reaction.emoji}
                                                className={cn(
                                                    "px-2 py-1 rounded-md text-sm transition-colors",
                                                    reaction.reacted
                                                        ? "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
                                                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400",
                                                    "hover:bg-gray-200 dark:hover:bg-gray-600"
                                                )}
                                            >
                                                {reaction.emoji} {reaction.count}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </section>
            </main>

            {/* Footer */}
            <footer className="mt-6 flex items-center gap-4 border-t border-gray-300 dark:border-gray-700 pt-4">
                <button
                    aria-label="Add emoji"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                    <SmilePlus className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
                <input
                    type="text"
                    placeholder="Write your message..."
                    className={cn(
                        "flex-1 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700",
                        "bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400",
                        "focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                    )}
                />
                <button
                    aria-label="Send message"
                    className="p-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:brightness-90 transition"
                >
                    <Send className="w-6 h-6" />
                </button>
            </footer>
        </div>
    );
}


demo.tsx
import RuixenCard04 from "@/components/ui/ruixen-mono-chat";

const DemoOne = () => {
  return <RuixenCard04 />;
};

export { DemoOne };

```

Install NPM dependencies:
```bash
next, lucide-react
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
ia-siri-chat.tsx
"use client";

import { Mic, MicOff, Volume2, VolumeX, Sparkles, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface VoiceChatProps {
  onStart?: () => void;
  onStop?: (duration: number) => void;
  onVolumeChange?: (volume: number) => void;
  className?: string;
  demoMode?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocity: { x: number; y: number };
}

export function VoiceChat({
  onStart,
  onStop,
  onVolumeChange,
  className,
  demoMode = true
}: VoiceChatProps) {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useState(0);
  const [duration, setDuration] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [waveformData, setWaveformData] = useState<number[]>(Array(32).fill(0));
  const intervalRef = useRef<NodeJS.Timeout>();
  const animationRef = useRef<number>();

  // Generate particles for ambient effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 400,
          y: Math.random() * 400,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          velocity: {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5
          }
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.velocity.x + 400) % 400,
        y: (particle.y + particle.velocity.y + 400) % 400,
        opacity: particle.opacity + (Math.random() - 0.5) * 0.02
      })));
      animationRef.current = requestAnimationFrame(animateParticles);
    };

    animationRef.current = requestAnimationFrame(animateParticles);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Timer and waveform simulation
  useEffect(() => {
    if (isListening) {
      intervalRef.current = setInterval(() => {
        setDuration(prev => prev + 1);
        
        // Simulate audio waveform
        const newWaveform = Array(32).fill(0).map(() => 
          Math.random() * (isListening ? 100 : 20)
        );
        setWaveformData(newWaveform);
        
        // Simulate volume changes
        const newVolume = Math.random() * 100;
        setVolume(newVolume);
        onVolumeChange?.(newVolume);
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setWaveformData(Array(32).fill(0));
      setVolume(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isListening, onVolumeChange]);

  // Demo mode simulation
  useEffect(() => {
    if (!demoMode) return;

    const demoSequence = async () => {
      // Start listening
      setIsListening(true);
      onStart?.();
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Stop listening and start processing
      setIsListening(false);
      setIsProcessing(true);
      onStop?.(duration);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start speaking response
      setIsProcessing(false);
      setIsSpeaking(true);
      
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      // Reset
      setIsSpeaking(false);
      setDuration(0);
      
      // Repeat demo
      setTimeout(demoSequence, 2000);
    };

    const timeout = setTimeout(demoSequence, 1000);
    return () => clearTimeout(timeout);
  }, [demoMode, onStart, onStop, duration]);

  const handleToggleListening = () => {
    if (demoMode) return;
    
    if (isListening) {
      setIsListening(false);
      onStop?.(duration);
      setDuration(0);
    } else {
      setIsListening(true);
      onStart?.();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getStatusText = () => {
    if (isListening) return "Listening...";
    if (isProcessing) return "Processing...";
    if (isSpeaking) return "Speaking...";
    return "Tap to speak";
  };

  const getStatusColor = () => {
    if (isListening) return "text-blue-400";
    if (isProcessing) return "text-yellow-400";
    if (isSpeaking) return "text-green-400";
    return "text-muted-foreground";
  };

  return (
    <div className={cn("flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden", className)}>
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Background glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
          animate={{
            scale: isListening ? [1, 1.2, 1] : [1, 1.1, 1],
            opacity: isListening ? [0.3, 0.6, 0.3] : [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Main voice button */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            onClick={handleToggleListening}
            className={cn(
              "relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300",
              "bg-gradient-to-br from-primary/20 to-primary/10 border-2",
              isListening ? "border-blue-500 shadow-lg shadow-blue-500/25" :
              isProcessing ? "border-yellow-500 shadow-lg shadow-yellow-500/25" :
              isSpeaking ? "border-green-500 shadow-lg shadow-green-500/25" :
              "border-border hover:border-primary/50"
            )}
            animate={{
              boxShadow: isListening 
                ? ["0 0 0 0 rgba(59, 130, 246, 0.4)", "0 0 0 20px rgba(59, 130, 246, 0)"]
                : undefined
            }}
            transition={{
              duration: 1.5,
              repeat: isListening ? Infinity : 0
            }}
          >
            <AnimatePresence mode="wait">
              {isProcessing ? (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Loader2 className="w-12 h-12 text-yellow-500 animate-spin" />
                </motion.div>
              ) : isSpeaking ? (
                <motion.div
                  key="speaking"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Volume2 className="w-12 h-12 text-green-500" />
                </motion.div>
              ) : isListening ? (
                <motion.div
                  key="listening"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Mic className="w-12 h-12 text-blue-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Mic className="w-12 h-12 text-muted-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Pulse rings */}
          <AnimatePresence>
            {isListening && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5
                  }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Waveform visualizer */}
        <div className="flex items-center justify-center space-x-1 h-16">
          {waveformData.map((height, index) => (
            <motion.div
              key={index}
              className={cn(
                "w-1 rounded-full transition-colors duration-300",
                isListening ? "bg-blue-500" :
                isProcessing ? "bg-yellow-500" :
                isSpeaking ? "bg-green-500" :
                "bg-muted"
              )}
              animate={{
                height: `${Math.max(4, height * 0.6)}px`,
                opacity: isListening || isSpeaking ? 1 : 0.3
              }}
              transition={{
                duration: 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Status and timer */}
        <div className="text-center space-y-2">
          <motion.p
            className={cn("text-lg font-medium transition-colors", getStatusColor())}
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{
              duration: 2,
              repeat: isListening || isProcessing || isSpeaking ? Infinity : 0
            }}
          >
            {getStatusText()}
          </motion.p>
          
          <p className="text-sm text-muted-foreground font-mono">
            {formatTime(duration)}
          </p>

          {volume > 0 && (
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <VolumeX className="w-4 h-4 text-muted-foreground" />
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  animate={{ width: `${volume}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <Volume2 className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          )}
        </div>

        {/* AI indicator */}
        <motion.div
          className="flex items-center space-x-2 text-sm text-muted-foreground"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Voice Assistant</span>
        </motion.div>
      </div>
    </div>
  );
}

// Usage example
export default function VoiceChatDemo() {
  return (
    <VoiceChat
      onStart={() => console.log("Voice recording started")}
      onStop={(duration) => console.log(`Voice recording stopped after ${duration}s`)}
      onVolumeChange={(volume) => console.log(`Volume: ${volume}%`)}
      demoMode={true}
    />
  );
}


demo.tsx
"use client";

import { Mic, MicOff, Volume2, VolumeX, Sparkles, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface VoiceChatProps {
  onStart?: () => void;
  onStop?: (duration: number) => void;
  onVolumeChange?: (volume: number) => void;
  className?: string;
  demoMode?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocity: { x: number; y: number };
}

export function VoiceChat({
  onStart,
  onStop,
  onVolumeChange,
  className,
  demoMode = true
}: VoiceChatProps) {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useState(0);
  const [duration, setDuration] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [waveformData, setWaveformData] = useState<number[]>(Array(32).fill(0));
  const intervalRef = useRef<NodeJS.Timeout>();
  const animationRef = useRef<number>();

  // Generate particles for ambient effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 400,
          y: Math.random() * 400,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          velocity: {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5
          }
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.velocity.x + 400) % 400,
        y: (particle.y + particle.velocity.y + 400) % 400,
        opacity: particle.opacity + (Math.random() - 0.5) * 0.02
      })));
      animationRef.current = requestAnimationFrame(animateParticles);
    };

    animationRef.current = requestAnimationFrame(animateParticles);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Timer and waveform simulation
  useEffect(() => {
    if (isListening) {
      intervalRef.current = setInterval(() => {
        setDuration(prev => prev + 1);
        
        // Simulate audio waveform
        const newWaveform = Array(32).fill(0).map(() => 
          Math.random() * (isListening ? 100 : 20)
        );
        setWaveformData(newWaveform);
        
        // Simulate volume changes
        const newVolume = Math.random() * 100;
        setVolume(newVolume);
        onVolumeChange?.(newVolume);
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setWaveformData(Array(32).fill(0));
      setVolume(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isListening, onVolumeChange]);

  // Demo mode simulation
  useEffect(() => {
    if (!demoMode) return;

    const demoSequence = async () => {
      // Start listening
      setIsListening(true);
      onStart?.();
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Stop listening and start processing
      setIsListening(false);
      setIsProcessing(true);
      onStop?.(duration);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start speaking response
      setIsProcessing(false);
      setIsSpeaking(true);
      
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      // Reset
      setIsSpeaking(false);
      setDuration(0);
      
      // Repeat demo
      setTimeout(demoSequence, 2000);
    };

    const timeout = setTimeout(demoSequence, 1000);
    return () => clearTimeout(timeout);
  }, [demoMode, onStart, onStop, duration]);

  const handleToggleListening = () => {
    if (demoMode) return;
    
    if (isListening) {
      setIsListening(false);
      onStop?.(duration);
      setDuration(0);
    } else {
      setIsListening(true);
      onStart?.();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getStatusText = () => {
    if (isListening) return "Listening...";
    if (isProcessing) return "Processing...";
    if (isSpeaking) return "Speaking...";
    return "Tap to speak";
  };

  const getStatusColor = () => {
    if (isListening) return "text-blue-400";
    if (isProcessing) return "text-yellow-400";
    if (isSpeaking) return "text-green-400";
    return "text-muted-foreground";
  };

  return (
    <div className={cn("flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden", className)}>
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Background glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
          animate={{
            scale: isListening ? [1, 1.2, 1] : [1, 1.1, 1],
            opacity: isListening ? [0.3, 0.6, 0.3] : [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Main voice button */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            onClick={handleToggleListening}
            className={cn(
              "relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300",
              "bg-gradient-to-br from-primary/20 to-primary/10 border-2",
              isListening ? "border-blue-500 shadow-lg shadow-blue-500/25" :
              isProcessing ? "border-yellow-500 shadow-lg shadow-yellow-500/25" :
              isSpeaking ? "border-green-500 shadow-lg shadow-green-500/25" :
              "border-border hover:border-primary/50"
            )}
            animate={{
              boxShadow: isListening 
                ? ["0 0 0 0 rgba(59, 130, 246, 0.4)", "0 0 0 20px rgba(59, 130, 246, 0)"]
                : undefined
            }}
            transition={{
              duration: 1.5,
              repeat: isListening ? Infinity : 0
            }}
          >
            <AnimatePresence mode="wait">
              {isProcessing ? (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Loader2 className="w-12 h-12 text-yellow-500 animate-spin" />
                </motion.div>
              ) : isSpeaking ? (
                <motion.div
                  key="speaking"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Volume2 className="w-12 h-12 text-green-500" />
                </motion.div>
              ) : isListening ? (
                <motion.div
                  key="listening"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Mic className="w-12 h-12 text-blue-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Mic className="w-12 h-12 text-muted-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Pulse rings */}
          <AnimatePresence>
            {isListening && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5
                  }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Waveform visualizer */}
        <div className="flex items-center justify-center space-x-1 h-16">
          {waveformData.map((height, index) => (
            <motion.div
              key={index}
              className={cn(
                "w-1 rounded-full transition-colors duration-300",
                isListening ? "bg-blue-500" :
                isProcessing ? "bg-yellow-500" :
                isSpeaking ? "bg-green-500" :
                "bg-muted"
              )}
              animate={{
                height: `${Math.max(4, height * 0.6)}px`,
                opacity: isListening || isSpeaking ? 1 : 0.3
              }}
              transition={{
                duration: 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Status and timer */}
        <div className="text-center space-y-2">
          <motion.p
            className={cn("text-lg font-medium transition-colors", getStatusColor())}
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{
              duration: 2,
              repeat: isListening || isProcessing || isSpeaking ? Infinity : 0
            }}
          >
            {getStatusText()}
          </motion.p>
          
          <p className="text-sm text-muted-foreground font-mono">
            {formatTime(duration)}
          </p>

          {volume > 0 && (
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <VolumeX className="w-4 h-4 text-muted-foreground" />
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  animate={{ width: `${volume}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <Volume2 className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          )}
        </div>

        {/* AI indicator */}
        <motion.div
          className="flex items-center space-x-2 text-sm text-muted-foreground"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Voice Assistant</span>
        </motion.div>
      </div>
    </div>
  );
}

// Usage example
export default function VoiceChatDemo() {
  return (
    <VoiceChat
      onStart={() => console.log("Voice recording started")}
      onStop={(duration) => console.log(`Voice recording stopped after ${duration}s`)}
      onVolumeChange={(volume) => console.log(`Volume: ${volume}%`)}
      demoMode={true}
    />
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
ai-prompt-box.tsx
import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUp, Paperclip, Square, X, StopCircle, Mic, Globe, BrainCog, FolderCode } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Utility function for className merging
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

// Embedded CSS for minimal custom styles
const styles = `
  *:focus-visible {
    outline-offset: 0 !important;
    --ring-offset: 0 !important;
  }
  textarea::-webkit-scrollbar {
    width: 6px;
  }
  textarea::-webkit-scrollbar-track {
    background: transparent;
  }
  textarea::-webkit-scrollbar-thumb {
    background-color: #444444;
    border-radius: 3px;
  }
  textarea::-webkit-scrollbar-thumb:hover {
    background-color: #555555;
  }
`;

// Inject styles into document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Textarea Component
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex w-full rounded-md border-none bg-transparent px-3 py-2.5 text-base text-gray-100 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 min-h-[44px] resize-none scrollbar-thin scrollbar-thumb-[#444444] scrollbar-track-transparent hover:scrollbar-thumb-[#555555]",
      className
    )}
    ref={ref}
    rows={1}
    {...props}
  />
));
Textarea.displayName = "Textarea";

// Tooltip Components
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border border-[#333333] bg-[#1F2023] px-3 py-1.5 text-sm text-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Dialog Components
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[90vw] md:max-w-[800px] translate-x-[-50%] translate-y-[-50%] gap-4 border border-[#333333] bg-[#1F2023] p-0 shadow-xl duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 z-10 rounded-full bg-[#2E3033]/80 p-2 hover:bg-[#2E3033] transition-all">
        <X className="h-5 w-5 text-gray-200 hover:text-white" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight text-gray-100", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-white hover:bg-white/80 text-black",
      outline: "border border-[#444444] bg-transparent hover:bg-[#3A3A40]",
      ghost: "bg-transparent hover:bg-[#3A3A40]",
    };
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 text-sm",
      lg: "h-12 px-6",
      icon: "h-8 w-8 rounded-full aspect-[1/1]",
    };
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// VoiceRecorder Component
interface VoiceRecorderProps {
  isRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: (duration: number) => void;
  visualizerBars?: number;
}
const VoiceRecorder: React.FC<VoiceRecorderProps> = ({
  isRecording,
  onStartRecording,
  onStopRecording,
  visualizerBars = 32,
}) => {
  const [time, setTime] = React.useState(0);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (isRecording) {
      onStartRecording();
      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      onStopRecording(time);
      setTime(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording, time, onStartRecording, onStopRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full transition-all duration-300 py-3",
        isRecording ? "opacity-100" : "opacity-0 h-0"
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        <span className="font-mono text-sm text-white/80">{formatTime(time)}</span>
      </div>
      <div className="w-full h-10 flex items-center justify-center gap-0.5 px-4">
        {[...Array(visualizerBars)].map((_, i) => (
          <div
            key={i}
            className="w-0.5 rounded-full bg-white/50 animate-pulse"
            style={{
              height: `${Math.max(15, Math.random() * 100)}%`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: `${0.5 + Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ImageViewDialog Component
interface ImageViewDialogProps {
  imageUrl: string | null;
  onClose: () => void;
}
const ImageViewDialog: React.FC<ImageViewDialogProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;
  return (
    <Dialog open={!!imageUrl} onOpenChange={onClose}>
      <DialogContent className="p-0 border-none bg-transparent shadow-none max-w-[90vw] md:max-w-[800px]">
        <DialogTitle className="sr-only">Image Preview</DialogTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative bg-[#1F2023] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={imageUrl}
            alt="Full preview"
            className="w-full max-h-[80vh] object-contain rounded-2xl"
          />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

// PromptInput Context and Components
interface PromptInputContextType {
  isLoading: boolean;
  value: string;
  setValue: (value: string) => void;
  maxHeight: number | string;
  onSubmit?: () => void;
  disabled?: boolean;
}
const PromptInputContext = React.createContext<PromptInputContextType>({
  isLoading: false,
  value: "",
  setValue: () => {},
  maxHeight: 240,
  onSubmit: undefined,
  disabled: false,
});
function usePromptInput() {
  const context = React.useContext(PromptInputContext);
  if (!context) throw new Error("usePromptInput must be used within a PromptInput");
  return context;
}

interface PromptInputProps {
  isLoading?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  maxHeight?: number | string;
  onSubmit?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onDragOver?: (e: React.DragEvent) => void;
  onDragLeave?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
}
const PromptInput = React.forwardRef<HTMLDivElement, PromptInputProps>(
  (
    {
      className,
      isLoading = false,
      maxHeight = 240,
      value,
      onValueChange,
      onSubmit,
      children,
      disabled = false,
      onDragOver,
      onDragLeave,
      onDrop,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(value || "");
    const handleChange = (newValue: string) => {
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };
    return (
      <TooltipProvider>
        <PromptInputContext.Provider
          value={{
            isLoading,
            value: value ?? internalValue,
            setValue: onValueChange ?? handleChange,
            maxHeight,
            onSubmit,
            disabled,
          }}
        >
          <div
            ref={ref}
            className={cn(
              "rounded-3xl border border-[#444444] bg-[#1F2023] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.24)] transition-all duration-300",
              isLoading && "border-red-500/70",
              className
            )}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            {children}
          </div>
        </PromptInputContext.Provider>
      </TooltipProvider>
    );
  }
);
PromptInput.displayName = "PromptInput";

interface PromptInputTextareaProps {
  disableAutosize?: boolean;
  placeholder?: string;
}
const PromptInputTextarea: React.FC<PromptInputTextareaProps & React.ComponentProps<typeof Textarea>> = ({
  className,
  onKeyDown,
  disableAutosize = false,
  placeholder,
  ...props
}) => {
  const { value, setValue, maxHeight, onSubmit, disabled } = usePromptInput();
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (disableAutosize || !textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      typeof maxHeight === "number"
        ? `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px`
        : `min(${textareaRef.current.scrollHeight}px, ${maxHeight})`;
  }, [value, maxHeight, disableAutosize]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit?.();
    }
    onKeyDown?.(e);
  };

  return (
    <Textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      className={cn("text-base", className)}
      disabled={disabled}
      placeholder={placeholder}
      {...props}
    />
  );
};

interface PromptInputActionsProps extends React.HTMLAttributes<HTMLDivElement> {}
const PromptInputActions: React.FC<PromptInputActionsProps> = ({ children, className, ...props }) => (
  <div className={cn("flex items-center gap-2", className)} {...props}>
    {children}
  </div>
);

interface PromptInputActionProps extends React.ComponentProps<typeof Tooltip> {
  tooltip: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}
const PromptInputAction: React.FC<PromptInputActionProps> = ({
  tooltip,
  children,
  className,
  side = "top",
  ...props
}) => {
  const { disabled } = usePromptInput();
  return (
    <Tooltip {...props}>
      <TooltipTrigger asChild disabled={disabled}>
        {children}
      </TooltipTrigger>
      <TooltipContent side={side} className={className}>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
};

// Custom Divider Component
const CustomDivider: React.FC = () => (
  <div className="relative h-6 w-[1.5px] mx-1">
    <div
      className="absolute inset-0 bg-gradient-to-t from-transparent via-[#9b87f5]/70 to-transparent rounded-full"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 140% 50%, 100% 60%, 100% 100%, 0% 100%, 0% 60%, -40% 50%, 0% 40%)",
      }}
    />
  </div>
);

// Main PromptInputBox Component
interface PromptInputBoxProps {
  onSend?: (message: string, files?: File[]) => void;
  isLoading?: boolean;
  placeholder?: string;
  className?: string;
}
export const PromptInputBox = React.forwardRef((props: PromptInputBoxProps, ref: React.Ref<HTMLDivElement>) => {
  const { onSend = () => {}, isLoading = false, placeholder = "Type your message here...", className } = props;
  const [input, setInput] = React.useState("");
  const [files, setFiles] = React.useState<File[]>([]);
  const [filePreviews, setFilePreviews] = React.useState<{ [key: string]: string }>({});
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [isRecording, setIsRecording] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [showThink, setShowThink] = React.useState(false);
  const [showCanvas, setShowCanvas] = React.useState(false);
  const uploadInputRef = React.useRef<HTMLInputElement>(null);
  const promptBoxRef = React.useRef<HTMLDivElement>(null);

  const handleToggleChange = (value: string) => {
    if (value === "search") {
      setShowSearch((prev) => !prev);
      setShowThink(false);
    } else if (value === "think") {
      setShowThink((prev) => !prev);
      setShowSearch(false);
    }
  };

  const handleCanvasToggle = () => setShowCanvas((prev) => !prev);

  const isImageFile = (file: File) => file.type.startsWith("image/");

  const processFile = (file: File) => {
    if (!isImageFile(file)) {
      console.log("Only image files are allowed");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      console.log("File too large (max 10MB)");
      return;
    }
    setFiles([file]);
    const reader = new FileReader();
    reader.onload = (e) => setFilePreviews({ [file.name]: e.target?.result as string });
    reader.readAsDataURL(file);
  };

  const handleDragOver = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => isImageFile(file));
    if (imageFiles.length > 0) processFile(imageFiles[0]);
  }, []);

  const handleRemoveFile = (index: number) => {
    const fileToRemove = files[index];
    if (fileToRemove && filePreviews[fileToRemove.name]) setFilePreviews({});
    setFiles([]);
  };

  const openImageModal = (imageUrl: string) => setSelectedImage(imageUrl);

  const handlePaste = React.useCallback((e: ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          e.preventDefault();
          processFile(file);
          break;
        }
      }
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, [handlePaste]);

  const handleSubmit = () => {
    if (input.trim() || files.length > 0) {
      let messagePrefix = "";
      if (showSearch) messagePrefix = "[Search: ";
      else if (showThink) messagePrefix = "[Think: ";
      else if (showCanvas) messagePrefix = "[Canvas: ";
      const formattedInput = messagePrefix ? `${messagePrefix}${input}]` : input;
      onSend(formattedInput, files);
      setInput("");
      setFiles([]);
      setFilePreviews({});
    }
  };

  const handleStartRecording = () => console.log("Started recording");

  const handleStopRecording = (duration: number) => {
    console.log(`Stopped recording after ${duration} seconds`);
    setIsRecording(false);
    onSend(`[Voice message - ${duration} seconds]`, []);
  };

  const hasContent = input.trim() !== "" || files.length > 0;

  return (
    <>
      <PromptInput
        value={input}
        onValueChange={setInput}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        className={cn(
          "w-full bg-[#1F2023] border-[#444444] shadow-[0_8px_30px_rgba(0,0,0,0.24)] transition-all duration-300 ease-in-out",
          isRecording && "border-red-500/70",
          className
        )}
        disabled={isLoading || isRecording}
        ref={ref || promptBoxRef}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {files.length > 0 && !isRecording && (
          <div className="flex flex-wrap gap-2 p-0 pb-1 transition-all duration-300">
            {files.map((file, index) => (
              <div key={index} className="relative group">
                {file.type.startsWith("image/") && filePreviews[file.name] && (
                  <div
                    className="w-16 h-16 rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                    onClick={() => openImageModal(filePreviews[file.name])}
                  >
                    <img
                      src={filePreviews[file.name]}
                      alt={file.name}
                      className="h-full w-full object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFile(index);
                      }}
                      className="absolute top-1 right-1 rounded-full bg-black/70 p-0.5 opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3 text-white" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div
          className={cn(
            "transition-all duration-300",
            isRecording ? "h-0 overflow-hidden opacity-0" : "opacity-100"
          )}
        >
          <PromptInputTextarea
            placeholder={
              showSearch
                ? "Search the web..."
                : showThink
                ? "Think deeply..."
                : showCanvas
                ? "Create on canvas..."
                : placeholder
            }
            className="text-base"
          />
        </div>

        {isRecording && (
          <VoiceRecorder
            isRecording={isRecording}
            onStartRecording={handleStartRecording}
            onStopRecording={handleStopRecording}
          />
        )}

        <PromptInputActions className="flex items-center justify-between gap-2 p-0 pt-2">
          <div
            className={cn(
              "flex items-center gap-1 transition-opacity duration-300",
              isRecording ? "opacity-0 invisible h-0" : "opacity-100 visible"
            )}
          >
            <PromptInputAction tooltip="Upload image">
              <button
                onClick={() => uploadInputRef.current?.click()}
                className="flex h-8 w-8 text-[#9CA3AF] cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-600/30 hover:text-[#D1D5DB]"
                disabled={isRecording}
              >
                <Paperclip className="h-5 w-5 transition-colors" />
                <input
                  ref={uploadInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) processFile(e.target.files[0]);
                    if (e.target) e.target.value = "";
                  }}
                  accept="image/*"
                />
              </button>
            </PromptInputAction>

            <div className="flex items-center">
              <button
                type="button"
                onClick={() => handleToggleChange("search")}
                className={cn(
                  "rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8",
                  showSearch
                    ? "bg-[#1EAEDB]/15 border-[#1EAEDB] text-[#1EAEDB]"
                    : "bg-transparent border-transparent text-[#9CA3AF] hover:text-[#D1D5DB]"
                )}
              >
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{ rotate: showSearch ? 360 : 0, scale: showSearch ? 1.1 : 1 }}
                    whileHover={{ rotate: showSearch ? 360 : 15, scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 10 } }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  >
                    <Globe className={cn("w-4 h-4", showSearch ? "text-[#1EAEDB]" : "text-inherit")} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {showSearch && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs overflow-hidden whitespace-nowrap text-[#1EAEDB] flex-shrink-0"
                    >
                      Search
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <CustomDivider />

              <button
                type="button"
                onClick={() => handleToggleChange("think")}
                className={cn(
                  "rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8",
                  showThink
                    ? "bg-[#8B5CF6]/15 border-[#8B5CF6] text-[#8B5CF6]"
                    : "bg-transparent border-transparent text-[#9CA3AF] hover:text-[#D1D5DB]"
                )}
              >
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{ rotate: showThink ? 360 : 0, scale: showThink ? 1.1 : 1 }}
                    whileHover={{ rotate: showThink ? 360 : 15, scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 10 } }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  >
                    <BrainCog className={cn("w-4 h-4", showThink ? "text-[#8B5CF6]" : "text-inherit")} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {showThink && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs overflow-hidden whitespace-nowrap text-[#8B5CF6] flex-shrink-0"
                    >
                      Think
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <CustomDivider />

              <button
                type="button"
                onClick={handleCanvasToggle}
                className={cn(
                  "rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8",
                  showCanvas
                    ? "bg-[#F97316]/15 border-[#F97316] text-[#F97316]"
                    : "bg-transparent border-transparent text-[#9CA3AF] hover:text-[#D1D5DB]"
                )}
              >
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{ rotate: showCanvas ? 360 : 0, scale: showCanvas ? 1.1 : 1 }}
                    whileHover={{ rotate: showCanvas ? 360 : 15, scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 10 } }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  >
                    <FolderCode className={cn("w-4 h-4", showCanvas ? "text-[#F97316]" : "text-inherit")} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {showCanvas && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs overflow-hidden whitespace-nowrap text-[#F97316] flex-shrink-0"
                    >
                      Canvas
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          <PromptInputAction
            tooltip={
              isLoading
                ? "Stop generation"
                : isRecording
                ? "Stop recording"
                : hasContent
                ? "Send message"
                : "Voice message"
            }
          >
            <Button
              variant="default"
              size="icon"
              className={cn(
                "h-8 w-8 rounded-full transition-all duration-200",
                isRecording
                  ? "bg-transparent hover:bg-gray-600/30 text-red-500 hover:text-red-400"
                  : hasContent
                  ? "bg-white hover:bg-white/80 text-[#1F2023]"
                  : "bg-transparent hover:bg-gray-600/30 text-[#9CA3AF] hover:text-[#D1D5DB]"
              )}
              onClick={() => {
                if (isRecording) setIsRecording(false);
                else if (hasContent) handleSubmit();
                else setIsRecording(true);
              }}
              disabled={isLoading && !hasContent}
            >
              {isLoading ? (
                <Square className="h-4 w-4 fill-[#1F2023] animate-pulse" />
              ) : isRecording ? (
                <StopCircle className="h-5 w-5 text-red-500" />
              ) : hasContent ? (
                <ArrowUp className="h-4 w-4 text-[#1F2023]" />
              ) : (
                <Mic className="h-5 w-5 text-[#1F2023] transition-colors" />
              )}
            </Button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>

      <ImageViewDialog imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
});
PromptInputBox.displayName = "PromptInputBox";

demo.tsx
import { PromptInputBox } from "@/components/ui/ai-prompt-box";

const DemoOne = () => {
    const handleSendMessage = (message: string, files?: File[]) => {
    console.log('Message:', message);
    console.log('Files:', files);
    };
  return (
    <div className="flex w-full h-screen justify-center items-center bg-[radial-gradient(125%_125%_at_50%_101%,rgba(245,87,2,1)_10.5%,rgba(245,120,2,1)_16%,rgba(245,140,2,1)_17.5%,rgba(245,170,100,1)_25%,rgba(238,174,202,1)_40%,rgba(202,179,214,1)_65%,rgba(148,201,233,1)_100%)]">
    <div className="p-4 w-[500px]">
    <PromptInputBox onSend={(message, files) => console.log(message, files)} />
    </div>
    </div>
  );
};

export { DemoOne };

```

Install NPM dependencies:
```bash
lucide-react, framer-motion, @radix-ui/react-dialog, @radix-ui/react-tooltip
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
agent-plan.tsx
"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Circle,
  CircleAlert,
  CircleDotDashed,
  CircleX,
} from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

// Type definitions
interface Subtask {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  tools?: string[]; // Optional array of MCP server tools
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  level: number;
  dependencies: string[];
  subtasks: Subtask[];
}

// Initial task data
const initialTasks: Task[] = [
  {
    id: "1",
    title: "Research Project Requirements",
    description:
      "Gather all necessary information about project scope and requirements",
    status: "in-progress",
    priority: "high",
    level: 0,
    dependencies: [],
    subtasks: [
      {
        id: "1.1",
        title: "Interview stakeholders",
        description:
          "Conduct interviews with key stakeholders to understand needs",
        status: "completed",
        priority: "high",
        tools: ["communication-agent", "meeting-scheduler"],
      },
      {
        id: "1.2",
        title: "Review existing documentation",
        description:
          "Go through all available documentation and extract requirements",
        status: "in-progress",
        priority: "medium",
        tools: ["file-system", "browser"],
      },
      {
        id: "1.3",
        title: "Compile findings report",
        description:
          "Create a comprehensive report of all gathered information",
        status: "need-help",
        priority: "medium",
        tools: ["file-system", "markdown-processor"],
      },
    ],
  },
  {
    id: "2",
    title: "Design System Architecture",
    description: "Create the overall system architecture based on requirements",
    status: "in-progress",
    priority: "high",
    level: 0,
    dependencies: [],
    subtasks: [
      {
        id: "2.1",
        title: "Define component structure",
        description: "Map out all required components and their interactions",
        status: "pending",
        priority: "high",
        tools: ["architecture-planner", "diagramming-tool"],
      },
      {
        id: "2.2",
        title: "Create data flow diagrams",
        description:
          "Design diagrams showing how data will flow through the system",
        status: "pending",
        priority: "medium",
        tools: ["diagramming-tool", "file-system"],
      },
      {
        id: "2.3",
        title: "Document API specifications",
        description: "Write detailed specifications for all APIs in the system",
        status: "pending",
        priority: "high",
        tools: ["api-designer", "openapi-generator"],
      },
    ],
  },
  {
    id: "3",
    title: "Implementation Planning",
    description: "Create a detailed plan for implementing the system",
    status: "pending",
    priority: "medium",
    level: 1,
    dependencies: ["1", "2"],
    subtasks: [
      {
        id: "3.1",
        title: "Resource allocation",
        description: "Determine required resources and allocate them to tasks",
        status: "pending",
        priority: "medium",
        tools: ["project-manager", "resource-calculator"],
      },
      {
        id: "3.2",
        title: "Timeline development",
        description: "Create a timeline with milestones and deadlines",
        status: "pending",
        priority: "high",
        tools: ["timeline-generator", "gantt-chart-creator"],
      },
      {
        id: "3.3",
        title: "Risk assessment",
        description:
          "Identify potential risks and develop mitigation strategies",
        status: "pending",
        priority: "medium",
        tools: ["risk-analyzer"],
      },
    ],
  },
  {
    id: "4",
    title: "Development Environment Setup",
    description: "Set up all necessary tools and environments for development",
    status: "in-progress",
    priority: "high",
    level: 0,
    dependencies: [],
    subtasks: [
      {
        id: "4.1",
        title: "Install development tools",
        description:
          "Set up IDEs, version control, and other necessary development tools",
        status: "pending",
        priority: "high",
        tools: ["shell", "package-manager"],
      },
      {
        id: "4.2",
        title: "Configure CI/CD pipeline",
        description: "Set up continuous integration and deployment pipelines",
        status: "pending",
        priority: "medium",
        tools: ["github-actions", "gitlab-ci", "jenkins-connector"],
      },
      {
        id: "4.3",
        title: "Set up testing framework",
        description: "Configure automated testing frameworks for the project",
        status: "pending",
        priority: "high",
        tools: ["test-runner", "shell"],
      },
    ],
  },
  {
    id: "5",
    title: "Initial Development Sprint",
    description: "Execute the first development sprint based on the plan",
    status: "pending",
    priority: "medium",
    level: 1,
    dependencies: ["4"],
    subtasks: [
      {
        id: "5.1",
        title: "Implement core features",
        description:
          "Develop the essential features identified in the requirements",
        status: "pending",
        priority: "high",
        tools: ["code-assistant", "github", "file-system", "shell"],
      },
      {
        id: "5.2",
        title: "Perform unit testing",
        description: "Create and execute unit tests for implemented features",
        status: "pending",
        priority: "medium",
        tools: ["test-runner", "code-coverage-analyzer"],
      },
      {
        id: "5.3",
        title: "Document code",
        description: "Create documentation for the implemented code",
        status: "pending",
        priority: "low",
        tools: ["documentation-generator", "markdown-processor"],
      },
    ],
  },
];

export default function Plan() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [expandedTasks, setExpandedTasks] = useState<string[]>(["1"]);
  const [expandedSubtasks, setExpandedSubtasks] = useState<{
    [key: string]: boolean;
  }>({});
  // Add support for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;

  // Toggle task expansion
  const toggleTaskExpansion = (taskId: string) => {
    setExpandedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId],
    );
  };

  // Toggle subtask expansion
  const toggleSubtaskExpansion = (taskId: string, subtaskId: string) => {
    const key = `${taskId}-${subtaskId}`;
    setExpandedSubtasks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Toggle task status
  const toggleTaskStatus = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          // Toggle the status
          const statuses = ["completed", "in-progress", "pending", "need-help", "failed"];
          const currentIndex = Math.floor(Math.random() * statuses.length);
          const newStatus = statuses[currentIndex];

          // If task is now completed, mark all subtasks as completed
          const updatedSubtasks = task.subtasks.map((subtask) => ({
            ...subtask,
            status: newStatus === "completed" ? "completed" : subtask.status,
          }));

          return {
            ...task,
            status: newStatus,
            subtasks: updatedSubtasks,
          };
        }
        return task;
      }),
    );
  };

  // Toggle subtask status
  const toggleSubtaskStatus = (taskId: string, subtaskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          const updatedSubtasks = task.subtasks.map((subtask) => {
            if (subtask.id === subtaskId) {
              const newStatus =
                subtask.status === "completed" ? "pending" : "completed";
              return { ...subtask, status: newStatus };
            }
            return subtask;
          });

          // Calculate if task should be auto-completed when all subtasks are done
          const allSubtasksCompleted = updatedSubtasks.every(
            (s) => s.status === "completed",
          );

          return {
            ...task,
            subtasks: updatedSubtasks,
            status: allSubtasksCompleted ? "completed" : task.status,
          };
        }
        return task;
      }),
    );
  };

  // Animation variants with reduced motion support
  const taskVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : -5 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: prefersReducedMotion ? "tween" : "spring", 
        stiffness: 500, 
        damping: 30,
        duration: prefersReducedMotion ? 0.2 : undefined
      }
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -5,
      transition: { duration: 0.15 }
    }
  };

  const subtaskListVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      overflow: "hidden" 
    },
    visible: { 
      height: "auto", 
      opacity: 1,
      overflow: "visible",
      transition: { 
        duration: 0.25, 
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        when: "beforeChildren",
        ease: [0.2, 0.65, 0.3, 0.9] // Custom easing curve for Apple-like feel
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
      transition: { 
        duration: 0.2,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const subtaskVariants = {
    hidden: { 
      opacity: 0, 
      x: prefersReducedMotion ? 0 : -10 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: prefersReducedMotion ? "tween" : "spring", 
        stiffness: 500, 
        damping: 25,
        duration: prefersReducedMotion ? 0.2 : undefined
      }
    },
    exit: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : -10,
      transition: { duration: 0.15 }
    }
  };

  const subtaskDetailsVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      overflow: "hidden"
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      overflow: "visible",
      transition: { 
        duration: 0.25,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  // Status badge animation variants
  const statusBadgeVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: prefersReducedMotion ? 1 : [1, 1.08, 1],
      transition: { 
        duration: 0.35,
        ease: [0.34, 1.56, 0.64, 1] // Springy custom easing for bounce effect
      }
    }
  };

  return (
    <div className="bg-background text-foreground h-full overflow-auto p-2">
      <motion.div 
        className="bg-card border-border rounded-lg border shadow overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.3,
            ease: [0.2, 0.65, 0.3, 0.9]
          }
        }}
      >
        <LayoutGroup>
          <div className="p-4 overflow-hidden">
            <ul className="space-y-1 overflow-hidden">
              {tasks.map((task, index) => {
                const isExpanded = expandedTasks.includes(task.id);
                const isCompleted = task.status === "completed";

                return (
                  <motion.li
                    key={task.id}
                    className={` ${index !== 0 ? "mt-1 pt-2" : ""} `}
                    initial="hidden"
                    animate="visible"
                    variants={taskVariants}
                  >
                    {/* Task row */}
                    <motion.div 
                      className="group flex items-center px-3 py-1.5 rounded-md"
                      whileHover={{ 
                        backgroundColor: "rgba(0,0,0,0.03)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        className="mr-2 flex-shrink-0 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTaskStatus(task.id);
                        }}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={task.status}
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            transition={{
                              duration: 0.2,
                              ease: [0.2, 0.65, 0.3, 0.9]
                            }}
                          >
                            {task.status === "completed" ? (
                              <CheckCircle2 className="h-4.5 w-4.5 text-green-500" />
                            ) : task.status === "in-progress" ? (
                              <CircleDotDashed className="h-4.5 w-4.5 text-blue-500" />
                            ) : task.status === "need-help" ? (
                              <CircleAlert className="h-4.5 w-4.5 text-yellow-500" />
                            ) : task.status === "failed" ? (
                              <CircleX className="h-4.5 w-4.5 text-red-500" />
                            ) : (
                              <Circle className="text-muted-foreground h-4.5 w-4.5" />
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </motion.div>

                      <motion.div
                        className="flex min-w-0 flex-grow cursor-pointer items-center justify-between"
                        onClick={() => toggleTaskExpansion(task.id)}
                      >
                        <div className="mr-2 flex-1 truncate">
                          <span
                            className={`${isCompleted ? "text-muted-foreground line-through" : ""}`}
                          >
                            {task.title}
                          </span>
                        </div>

                        <div className="flex flex-shrink-0 items-center space-x-2 text-xs">
                          {task.dependencies.length > 0 && (
                            <div className="flex items-center mr-2">
                              <div className="flex flex-wrap gap-1">
                                {task.dependencies.map((dep, idx) => (
                                  <motion.span
                                    key={idx}
                                    className="bg-secondary/40 text-secondary-foreground rounded px-1.5 py-0.5 text-[10px] font-medium shadow-sm"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                      duration: 0.2,
                                      delay: idx * 0.05
                                    }}
                                    whileHover={{ 
                                      y: -1, 
                                      backgroundColor: "rgba(0,0,0,0.1)",
                                      transition: { duration: 0.2 } 
                                    }}
                                  >
                                    {dep}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          )}

                          <motion.span
                            className={`rounded px-1.5 py-0.5 ${
                              task.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : task.status === "in-progress"
                                  ? "bg-blue-100 text-blue-700"
                                  : task.status === "need-help"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : task.status === "failed"
                                      ? "bg-red-100 text-red-700"
                                      : "bg-muted text-muted-foreground"
                            }`}
                            variants={statusBadgeVariants}
                            initial="initial"
                            animate="animate"
                            key={task.status} // Force animation on status change
                          >
                            {task.status}
                          </motion.span>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Subtasks - staggered */}
                    <AnimatePresence mode="wait">
                      {isExpanded && task.subtasks.length > 0 && (
                        <motion.div 
                          className="relative overflow-hidden"
                          variants={subtaskListVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          layout
                        >
                          {/* Vertical connecting line aligned with task icon */}
                          <div className="absolute top-0 bottom-0 left-[20px] border-l-2 border-dashed border-muted-foreground/30" />
                          <ul className="border-muted mt-1 mr-2 mb-1.5 ml-3 space-y-0.5">
                            {task.subtasks.map((subtask) => {
                              const subtaskKey = `${task.id}-${subtask.id}`;
                              const isSubtaskExpanded = expandedSubtasks[subtaskKey];

                              return (
                                <motion.li
                                  key={subtask.id}
                                  className="group flex flex-col py-0.5 pl-6"
                                  onClick={() =>
                                    toggleSubtaskExpansion(task.id, subtask.id)
                                  }
                                  variants={subtaskVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  layout
                                >
                                  <motion.div 
                                    className="flex flex-1 items-center rounded-md p-1"
                                    whileHover={{ 
                                      backgroundColor: "rgba(0,0,0,0.03)",
                                      transition: { duration: 0.2 }
                                    }}
                                    layout
                                  >
                                    <motion.div
                                      className="mr-2 flex-shrink-0 cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSubtaskStatus(task.id, subtask.id);
                                      }}
                                      whileTap={{ scale: 0.9 }}
                                      whileHover={{ scale: 1.1 }}
                                      layout
                                    >
                                      <AnimatePresence mode="wait">
                                        <motion.div
                                          key={subtask.status}
                                          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                          exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                          transition={{
                                            duration: 0.2,
                                            ease: [0.2, 0.65, 0.3, 0.9]
                                          }}
                                        >
                                          {subtask.status === "completed" ? (
                                            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                                          ) : subtask.status === "in-progress" ? (
                                            <CircleDotDashed className="h-3.5 w-3.5 text-blue-500" />
                                          ) : subtask.status === "need-help" ? (
                                            <CircleAlert className="h-3.5 w-3.5 text-yellow-500" />
                                          ) : subtask.status === "failed" ? (
                                            <CircleX className="h-3.5 w-3.5 text-red-500" />
                                          ) : (
                                            <Circle className="text-muted-foreground h-3.5 w-3.5" />
                                          )}
                                        </motion.div>
                                      </AnimatePresence>
                                    </motion.div>

                                    <span
                                      className={`cursor-pointer text-sm ${subtask.status === "completed" ? "text-muted-foreground line-through" : ""}`}
                                    >
                                      {subtask.title}
                                    </span>
                                  </motion.div>

                                  <AnimatePresence mode="wait">
                                    {isSubtaskExpanded && (
                                      <motion.div 
                                        className="text-muted-foreground border-foreground/20 mt-1 ml-1.5 border-l border-dashed pl-5 text-xs overflow-hidden"
                                        variants={subtaskDetailsVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        layout
                                      >
                                        <p className="py-1">{subtask.description}</p>
                                        {subtask.tools && subtask.tools.length > 0 && (
                                          <div className="mt-0.5 mb-1 flex flex-wrap items-center gap-1.5">
                                            <span className="text-muted-foreground font-medium">
                                              MCP Servers:
                                            </span>
                                            <div className="flex flex-wrap gap-1">
                                              {subtask.tools.map((tool, idx) => (
                                                <motion.span
                                                  key={idx}
                                                  className="bg-secondary/40 text-secondary-foreground rounded px-1.5 py-0.5 text-[10px] font-medium shadow-sm"
                                                  initial={{ opacity: 0, y: -5 }}
                                                  animate={{ 
                                                    opacity: 1, 
                                                    y: 0,
                                                    transition: {
                                                      duration: 0.2,
                                                      delay: idx * 0.05
                                                    }
                                                  }}
                                                  whileHover={{ 
                                                    y: -1, 
                                                    backgroundColor: "rgba(0,0,0,0.1)",
                                                    transition: { duration: 0.2 } 
                                                  }}
                                                >
                                                  {tool}
                                                </motion.span>
                                              ))}
                                            </div>
                                          </div>
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </LayoutGroup>
      </motion.div>
    </div>
  );
}


demo.tsx
"use client";

import Plan from "@/components/ui/agent-plan";

export function Demo() {
  return (
    <div className="flex flex-col p-4 w-full h-full">
      <Plan />
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
ai-assistant-interface.tsx
"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
  Search,
  Mic,
  ArrowUp,
  Plus,
  FileText,
  Code,
  BookOpen,
  PenTool,
  BrainCircuit,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AIAssistantInterface() {
  const [inputValue, setInputValue] = useState("");
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [deepResearchEnabled, setDeepResearchEnabled] = useState(false);
  const [reasonEnabled, setReasonEnabled] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [showUploadAnimation, setShowUploadAnimation] = useState(false);
  const [activeCommandCategory, setActiveCommandCategory] = useState<
    string | null
  >(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandSuggestions = {
    learn: [
      "Explain the Big Bang theory",
      "How does photosynthesis work?",
      "What are black holes?",
      "Explain quantum computing",
      "How does the human brain work?",
    ],
    code: [
      "Create a React component for a todo list",
      "Write a Python function to sort a list",
      "How to implement authentication in Next.js",
      "Explain async/await in JavaScript",
      "Create a CSS animation for a button",
    ],
    write: [
      "Write a professional email to a client",
      "Create a product description for a smartphone",
      "Draft a blog post about AI",
      "Write a creative story about space exploration",
      "Create a social media post about sustainability",
    ],
  };

  const handleUploadFile = () => {
    setShowUploadAnimation(true);

    // Simulate file upload with timeout
    setTimeout(() => {
      const newFile = `Document.pdf`;
      setUploadedFiles((prev) => [...prev, newFile]);
      setShowUploadAnimation(false);
    }, 1500);
  };

  const handleCommandSelect = (command: string) => {
    setInputValue(command);
    setActiveCommandCategory(null);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      console.log("Sending message:", inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Logo with animated gradient */}
        <div className="mb-8 w-20 h-20 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 200 200"
            width="100%"
            height="100%"
            className="w-full h-full"
          >
            <g clipPath="url(#cs_clip_1_ellipse-12)">
              <mask
                id="cs_mask_1_ellipse-12"
                style={{ maskType: "alpha" }}
                width="200"
                height="200"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M100 150c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50zm0 50c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100z"
                  clipRule="evenodd"
                ></path>
              </mask>
              <g mask="url(#cs_mask_1_ellipse-12)">
                <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                <path
                  fill="#0066FF"
                  fillOpacity="0.33"
                  d="M200 0H0v200h200V0z"
                ></path>
                <g
                  filter="url(#filter0_f_844_2811)"
                  className="animate-gradient"
                >
                  <path fill="#0066FF" d="M110 32H18v68h92V32z"></path>
                  <path fill="#0044FF" d="M188-24H15v98h173v-98z"></path>
                  <path fill="#0099FF" d="M175 70H5v156h170V70z"></path>
                  <path fill="#00CCFF" d="M230 51H100v103h130V51z"></path>
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_844_2811"
                width="385"
                height="410"
                x="-75"
                y="-104"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_844_2811"
                  stdDeviation="40"
                ></feGaussianBlur>
              </filter>
              <clipPath id="cs_clip_1_ellipse-12">
                <path fill="#fff" d="M0 0H200V200H0z"></path>
              </clipPath>
            </defs>
            <g
              style={{ mixBlendMode: "overlay" }}
              mask="url(#cs_mask_1_ellipse-12)"
            >
              <path
                fill="gray"
                stroke="transparent"
                d="M200 0H0v200h200V0z"
                filter="url(#cs_noise_1_ellipse-12)"
              ></path>
            </g>
            <defs>
              <filter
                id="cs_noise_1_ellipse-12"
                width="100%"
                height="100%"
                x="0%"
                y="0%"
                filterUnits="objectBoundingBox"
              >
                <feTurbulence
                  baseFrequency="0.6"
                  numOctaves="5"
                  result="out1"
                  seed="4"
                ></feTurbulence>
                <feComposite
                  in="out1"
                  in2="SourceGraphic"
                  operator="in"
                  result="out2"
                ></feComposite>
                <feBlend
                  in="SourceGraphic"
                  in2="out2"
                  mode="overlay"
                  result="out3"
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Welcome message */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2">
              Ready to assist you
            </h1>
            <p className="text-gray-500 max-w-md">
              Ask me anything or try one of the suggestions below
            </p>
          </motion.div>
        </div>

        {/* Input area with integrated functions and file upload */}
        <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <div className="p-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full text-gray-700 text-base outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Uploaded files */}
          {uploadedFiles.length > 0 && (
            <div className="px-4 pb-3">
              <div className="flex flex-wrap gap-2">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-50 py-1 px-2 rounded-md border border-gray-200"
                  >
                    <FileText className="w-3 h-3 text-blue-600" />
                    <span className="text-xs text-gray-700">{file}</span>
                    <button
                      onClick={() =>
                        setUploadedFiles((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Search, Deep Research, Reason functions and actions */}
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchEnabled(!searchEnabled)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  searchEnabled
                    ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
              <button
                onClick={() => setDeepResearchEnabled(!deepResearchEnabled)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  deepResearchEnabled
                    ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    deepResearchEnabled ? "text-blue-600" : "text-gray-400"
                  }
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="8" cy="8" r="3" fill="currentColor" />
                </svg>
                <span>Deep Research</span>
              </button>
              <button
                onClick={() => setReasonEnabled(!reasonEnabled)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  reasonEnabled
                    ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                <BrainCircuit
                  className={`w-4 h-4 ${
                    reasonEnabled ? "text-blue-600" : "text-gray-400"
                  }`}
                />
                <span>Reason</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Mic className="w-5 h-5" />
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                  inputValue.trim()
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Upload files */}
          <div className="px-4 py-2 border-t border-gray-100">
            <button
              onClick={handleUploadFile}
              className="flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900 transition-colors"
            >
              {showUploadAnimation ? (
                <motion.div
                  className="flex space-x-1"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                      variants={{
                        hidden: { opacity: 0, y: 5 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: i * 0.1,
                          },
                        },
                      }}
                    />
                  ))}
                </motion.div>
              ) : (
                <Plus className="w-4 h-4" />
              )}
              <span>Upload Files</span>
            </button>
          </div>
        </div>

        {/* Command categories */}
        <div className="w-full grid grid-cols-3 gap-4 mb-4">
          <CommandButton
            icon={<BookOpen className="w-5 h-5" />}
            label="Learn"
            isActive={activeCommandCategory === "learn"}
            onClick={() =>
              setActiveCommandCategory(
                activeCommandCategory === "learn" ? null : "learn"
              )
            }
          />
          <CommandButton
            icon={<Code className="w-5 h-5" />}
            label="Code"
            isActive={activeCommandCategory === "code"}
            onClick={() =>
              setActiveCommandCategory(
                activeCommandCategory === "code" ? null : "code"
              )
            }
          />
          <CommandButton
            icon={<PenTool className="w-5 h-5" />}
            label="Write"
            isActive={activeCommandCategory === "write"}
            onClick={() =>
              setActiveCommandCategory(
                activeCommandCategory === "write" ? null : "write"
              )
            }
          />
        </div>

        {/* Command suggestions */}
        <AnimatePresence>
          {activeCommandCategory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full mb-6 overflow-hidden"
            >
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-3 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-700">
                    {activeCommandCategory === "learn"
                      ? "Learning suggestions"
                      : activeCommandCategory === "code"
                      ? "Coding suggestions"
                      : "Writing suggestions"}
                  </h3>
                </div>
                <ul className="divide-y divide-gray-100">
                  {commandSuggestions[
                    activeCommandCategory as keyof typeof commandSuggestions
                  ].map((suggestion, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => handleCommandSelect(suggestion)}
                      className="p-3 hover:bg-gray-50 cursor-pointer transition-colors duration-75"
                    >
                      <div className="flex items-center gap-3">
                        {activeCommandCategory === "learn" ? (
                          <BookOpen className="w-4 h-4 text-blue-600" />
                        ) : activeCommandCategory === "code" ? (
                          <Code className="w-4 h-4 text-blue-600" />
                        ) : (
                          <PenTool className="w-4 h-4 text-blue-600" />
                        )}
                        <span className="text-sm text-gray-700">
                          {suggestion}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface CommandButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function CommandButton({ icon, label, isActive, onClick }: CommandButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
        isActive
          ? "bg-blue-50 border-blue-200 shadow-sm"
          : "bg-white border-gray-200 hover:border-gray-300"
      }`}
    >
      <div className={`${isActive ? "text-blue-600" : "text-gray-500"}`}>
        {icon}
      </div>
      <span
        className={`text-sm font-medium ${
          isActive ? "text-blue-700" : "text-gray-700"
        }`}
      >
        {label}
      </span>
    </motion.button>
  );
}


demo.tsx
import * as React from "react"
import { AIAssistantInterface } from "@/components/ui/ai-assistant-interface"

export function Demo() {
  return (
    <div className="w-screen">
      <AIAssistantInterface />
    </div>
  )
}

```

Install NPM dependencies:
```bash
lucide-react, framer-motion
```

Extend existing tailwind.config.js with this code:
```js
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

```

Extend existing globals.css with this code:
```css
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Animated gradient for the logo */
@keyframes gradient-shift {
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

.animate-gradient {
  animation: gradient-shift 8s linear infinite;
  transform-origin: center;
  transform-box: fill-box; /* Adicionado para melhor compatibilidade com SVG */
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
hero-1.tsx
"use client";

import * as React from "react";
import { Paperclip, Sparkles } from "lucide-react";

const Hero1 = () => {
  return (
    <div className="min-h-screen bg-[#0c0414] text-white flex flex-col relative overflow-x-hidden">
      {/* Gradient */}
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-40rem] right-[-30rem] z-[0] blur-[4rem] skew-[-40deg]  opacity-50">
        <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
      </div>
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-50rem] right-[-50rem] z-[0] blur-[4rem] skew-[-40deg]  opacity-50">
        <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
      </div>
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-60rem] right-[-60rem] z-[0] blur-[4rem] skew-[-40deg]  opacity-50">
        <div className="w-[10rem] h-[30rem]  bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[30rem]  bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[30rem]  bg-linear-90 from-white to-blue-300"></div>
      </div>
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <img src="http://hextaui.com/logo.svg" width={30} height={30} />
          <div className="font-bold text-md">HextaAI</div>
        </div>
        <button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer font-semibold">
          Get Started
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex-1 flex justify-center">
            <div className="bg-[#1c1528] rounded-full px-4 py-2 flex items-center gap-2  w-fit mx-4">
              <span className="text-xs flex items-center gap-2">
                <span className="bg-black p-1 rounded-full">🥳</span>
                Introducing Magic Components
              </span>
            </div>
          </div>
          {/* Headline */}
          <h1 className="text-5xl font-bold leading-tight">
            Build Stunning websites effortslessly
          </h1>

          {/* Subtitle */}
          <p className="text-md">
            HextaAI can create amazing websites with few lines of prompt.
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto w-full">
            <div className="bg-[#1c1528] rounded-full p-3 flex items-center">
              <button className="p-2 rounded-full hover:bg-[#2a1f3d] transition-all">
                <Paperclip className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#2a1f3d] transition-all">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </button>
              <input
                type="text"
                placeholder="How HextaAI can help you today?"
                className="bg-transparent flex-1 outline-none text-gray-300 pl-4"
              />
            </div>
          </div>

          {/* Suggestion pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-12 max-w-2xl mx-auto">
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
              Launch a blog with Astro
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
              Develop an app using NativeScript
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
              Build documentation with Vitepress
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
              Generate UI with shadcn
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
              Generate UI with HextaUI
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Hero1 };


demo.tsx
// This is a demo of a preview
// That's what users will see in the preview

import { Hero1 } from "@/components/ui/hero-1";

const DemoOne = () => {
  return <Hero1 />;
};

// IMPORTANT:
// format of the export MUST be export default { DemoOneOrOtherName }
// if you don't do this, the demo will not be shown
export default { DemoOne };

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
multimodal-ai-chat-input.tsx
'use client';

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
  memo,
} from 'react';

import equal from 'fast-deep-equal';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 as LoaderIcon, X as XIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const clsx = (...args: any[]) => args.filter(Boolean).join(' ');

// Type Definitions
interface Attachment {
  url: string;
  name: string;
  contentType: string;
  size: number;
}

interface UIMessage {
  id: string;
  content: string;
  role: string;
  attachments?: Attachment[];
}

type VisibilityType = 'public' | 'private' | 'unlisted' | string;

// Utility Functions
const cn = (...inputs: any[]) => {
  return twMerge(clsx(inputs));
};

// Button variants using cva
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // Primary: black background, white text
        default: 'bg-black text-white hover:bg-gray-800',
        // Destructive: high-contrast gray outline, black text
        destructive:
          'border border-black text-black hover:bg-gray-100',
        // Outline: grayscale border, white background, black text
        outline:
          'border border-gray-400 bg-white hover:bg-gray-100 hover:text-black',
        // Secondary: grayscale background, gray text
        secondary:
          'bg-gray-200 text-black hover:bg-gray-300',
        // Ghost: hover effect, default text color (should be black)
        ghost: 'text-black hover:bg-gray-100 hover:text-black', // Explicitly set text to black
        // Link: black text
        link: 'text-black underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

// Button component
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'button' : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

// Textarea component
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        // Adjusted text color, placeholder color, and border/ring colors to grayscale
        'flex min-h-[80px] w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-black', // Added text-black
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

// Stop Icon SVG (uses currentColor)
const StopIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg height={size} viewBox="0 0 16 16" width={size} style={{ color: 'currentcolor' }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H13V13H3V3Z"
        fill="currentColor"
      />
    </svg>
  );
};

// Paperclip Icon SVG (uses currentColor)
const PaperclipIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: 'currentcolor' }}
      className="-rotate-45"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8591 1.70735C10.3257 1.70735 9.81417 1.91925 9.437 2.29643L3.19455 8.53886C2.56246 9.17095 2.20735 10.0282 2.20735 10.9222C2.20735 11.8161 2.56246 12.6734 3.19455 13.3055C3.82665 13.9376 4.68395 14.2927 5.57786 14.2927C6.47178 14.2927 7.32908 13.9376 7.96117 13.3055L14.2036 7.06304L14.7038 6.56287L15.7041 7.56321L15.204 8.06337L8.96151 14.3058C8.06411 15.2032 6.84698 15.7074 5.57786 15.7074C4.30875 15.7074 3.09162 15.2032 2.19422 14.3058C1.29682 13.4084 0.792664 12.1913 0.792664 10.9222C0.792664 9.65305 1.29682 8.43592 2.19422 7.53852L8.43666 1.29609C9.07914 0.653606 9.95054 0.292664 10.8591 0.292664C11.7678 0.292664 12.6392 0.653606 13.2816 1.29609C13.9241 1.93857 14.2851 2.80997 14.2851 3.71857C14.2851 4.62718 13.9241 5.49858 13.2816 6.14106L13.2814 6.14133L7.0324 12.3835C7.03231 12.3836 7.03222 12.3837 7.03213 12.3838C6.64459 12.7712 6.11905 12.9888 5.57107 12.9888C5.02297 12.9888 4.49731 12.7711 4.10974 12.3835C3.72217 11.9959 3.50444 11.4703 3.50444 10.9222C3.50444 10.3741 3.72217 9.8484 4.10974 9.46084L4.11004 9.46054L9.877 3.70039L10.3775 3.20051L11.3772 4.20144L10.8767 4.70131L5.11008 10.4612C5.11005 10.4612 5.11003 10.4612 5.11 10.4613C4.98779 10.5835 4.91913 10.7493 4.91913 10.9222C4.91913 11.0951 4.98782 11.2609 5.11008 11.3832C5.23234 11.5054 5.39817 11.5741 5.57107 11.5741C5.74398 11.5741 5.9098 11.5054 6.03206 11.3832L6.03233 11.3829L12.2813 5.14072C12.2814 5.14063 12.2815 5.14054 12.2816 5.14045C12.6586 4.7633 12.8704 4.25185 12.8704 3.71857C12.8704 3.18516 12.6585 2.6736 12.2813 2.29643C11.9041 1.91925 11.3926 1.70735 10.8591 1.70735Z"
        fill="currentColor"
      />
    </svg>
  );
};

// Arrow Up Icon SVG (Send) (uses currentColor)
const ArrowUpIcon = ({ size = 16 }: { size?: number }) => {
    return (
      <svg
        height={size}
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width={size}
        style={{ color: 'currentcolor' }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"
          fill="currentColor"
        />
      </svg>
    );
  };

// Sub-Components

interface SuggestedActionsProps {
  chatId: string;
  onSelectAction: (action: string) => void;
  selectedVisibilityType: VisibilityType;
}

function PureSuggestedActions({
  onSelectAction,
}: SuggestedActionsProps) {
  const suggestedActions = [
    {
      title: 'How can I improve',
      label: 'my time management skills?',
      action: 'How can I improve my time management skills?',
    },
    {
      title: 'Suggest ideas for',
      label: 'a creative writing project',
      action: 'Suggest ideas for a creative writing project',
    },
    {
      title: 'What are some tips',
      label: 'for staying motivated?',
      action: 'What are some tips for staying motivated?',
    },
    {
      title: 'Help me brainstorm',
      label: 'ideas for a new hobby',
      action: 'Help me brainstorm ideas for a new hobby',
    },
  ];

  return (
    <div
      data-testid="suggested-actions"
      className="grid pb-2 sm:grid-cols-2 gap-2 w-full"
    >
      <AnimatePresence>
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${index}`}
          className={index > 1 ? 'hidden sm:block' : 'block'}
        >
          <Button
            variant="ghost"
            onClick={() => onSelectAction(suggestedAction.action)}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start
                       border-gray-300 bg-white hover:bg-gray-100 text-black hover:text-gray-900"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-gray-500">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
}

const SuggestedActions = memo(
  PureSuggestedActions,
  (prevProps, nextProps) => {
    if (prevProps.chatId !== nextProps.chatId) return false;
    if (prevProps.selectedVisibilityType !== nextProps.selectedVisibilityType)
      return false;
    return true;
  },
);


const PreviewAttachment = ({
  attachment,
  isUploading = false,
}: {
  attachment: Attachment;
  isUploading?: boolean;
}) => {
  const { name, url, contentType } = attachment;

  return (
    <div data-testid="input-attachment-preview" className="flex flex-col gap-1">
      <div className="w-20 h-16 aspect-video bg-gray-200 rounded-md relative flex flex-col items-center justify-center overflow-hidden border border-gray-300">
        {contentType?.startsWith('image/') && url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={url}
            src={url}
            alt={name ?? 'An image attachment'}
            className="rounded-md size-full object-cover grayscale"
          />
        ) : (
          <div className="flex items-center justify-center text-xs text-gray-600 text-center p-1">
             File: {name?.split('.').pop()?.toUpperCase() || 'Unknown'}
          </div>
        )}

        {isUploading && (
          <div
            data-testid="input-attachment-loader"
            className="animate-spin absolute text-gray-500"
          >
            <LoaderIcon className="size-5" />
          </div>
        )}
      </div>
      <div className="text-xs text-gray-600 max-w-20 truncate">
        {name}
      </div>
    </div>
  );
};

function PureAttachmentsButton({
  fileInputRef,
  disabled,
}: {
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
  disabled: boolean;
}) {
  return (
    <Button
      data-testid="attachments-button"
      className="rounded-md rounded-bl-lg p-[7px] h-fit border border-gray-300 hover:bg-gray-200"
      onClick={(event) => {
        event.preventDefault();
        fileInputRef.current?.click();
      }}
      disabled={disabled}
      variant="ghost" // ghost variant now has text-black
      aria-label="Attach files"
    >
      <PaperclipIcon size={14} />
    </Button>
  );
}

const AttachmentsButton = memo(PureAttachmentsButton, (prev, next) => prev.disabled === next.disabled);

function PureStopButton({ onStop }: { onStop: () => void }) {
  return (
    <Button
      data-testid="stop-button"
      // Using default variant (bg-black) and setting text color to white for the icon
      className="rounded-full p-1.5 h-fit border border-black text-white" // Added text-white
      onClick={(event) => {
        event.preventDefault();
        onStop();
      }}
      aria-label="Stop generating"
    >
      <StopIcon size={14} />
    </Button>
  );
}

const StopButton = memo(PureStopButton, (prev, next) => prev.onStop === next.onStop);

function PureSendButton({
  submitForm,
  input,
  uploadQueue,
  attachments,
  canSend,
  isGenerating,
}: {
  submitForm: () => void;
  input: string;
  uploadQueue: Array<string>;
  attachments: Array<Attachment>;
  canSend: boolean;
  isGenerating: boolean;
}) {
  const isDisabled =
    uploadQueue.length > 0 ||
    !canSend ||
    isGenerating ||
    (input.trim().length === 0 && attachments.length === 0);

  return (
    <Button
      data-testid="send-button"
      // Uses default variant (bg-black text-white)
      className="rounded-full p-1.5 h-fit"
      onClick={(event) => {
        event.preventDefault();
        if (!isDisabled) {
          submitForm();
        }
      }}
      disabled={isDisabled}
      aria-label="Send message"
    >
      <ArrowUpIcon size={14} />
    </Button>
  );
}

const SendButton = memo(PureSendButton, (prevProps, nextProps) => {
  if (prevProps.input !== nextProps.input) return false;
  if (prevProps.uploadQueue.length !== nextProps.uploadQueue.length) return false;
  if (prevProps.attachments.length !== nextProps.attachments.length) return false;
  if (prevProps.attachments.length > 0 && !equal(prevProps.attachments, nextProps.attachments)) return false;
  if (prevProps.canSend !== nextProps.canSend) return false;
  if (prevProps.isGenerating !== nextProps.isGenerating) return false;
  return true;
});


// Main Component

interface MultimodalInputProps {
  chatId: string;
  messages: Array<UIMessage>;
  attachments: Array<Attachment>;
  setAttachments: Dispatch<SetStateAction<Array<Attachment>>>;
  onSendMessage: (params: { input: string; attachments: Attachment[] }) => void;
  onStopGenerating: () => void;
  isGenerating: boolean;
  canSend: boolean;
  className?: string;
  selectedVisibilityType: VisibilityType;
}

function PureMultimodalInput({
  chatId,
  messages,
  attachments,
  setAttachments,
  onSendMessage,
  onStopGenerating,
  isGenerating,
  canSend,
  className,
  selectedVisibilityType,
}: MultimodalInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [input, setInput] = useState('');
  const [uploadQueue, setUploadQueue] = useState<Array<string>>([]);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight + 2}px`;
    }
  };

  const resetHeight = useCallback(() => {
     const textarea = textareaRef.current;
      if (textarea) {
          textarea.style.height = 'auto';
          textarea.rows = 1;
          adjustHeight();
      }
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, [input]); // Depend only on input

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  // Placeholder File Upload Function
  const uploadFile = async (file: File): Promise<Attachment | undefined> => {
    console.log(`MOCK: Simulating upload for file: ${file.name}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          // Use URL.createObjectURL for client-side preview. Remember to revoke!
          const mockUrl = URL.createObjectURL(file);
          const mockAttachment: Attachment = {
            url: mockUrl,
            name: file.name,
            contentType: file.type || 'application/octet-stream',
            size: file.size,
          };
          console.log(`MOCK: Upload successful for ${file.name}`);
          resolve(mockAttachment);
        } catch (error) {
          console.error('MOCK: Failed to create object URL for preview:', error);
          resolve(undefined);
        } finally {
           // Remove file name from upload queue
           setUploadQueue(currentQueue => currentQueue.filter(name => name !== file.name));
        }
      }, 700); // Simulate delay
    });
  };

  const handleFileChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      if (files.length === 0) return;

      // Add files to upload queue immediately by name
      setUploadQueue(currentQueue => [...currentQueue, ...files.map((file) => file.name)]);

      // Clear the file input value to allow selecting the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
      const validFiles = files.filter(file => file.size <= MAX_FILE_SIZE);
      const invalidFiles = files.filter(file => file.size > MAX_FILE_SIZE);

      if (invalidFiles.length > 0) {
         console.warn(`Skipped ${invalidFiles.length} files larger than ${MAX_FILE_SIZE / 1024 / 1024}MB.`);
         // Also remove invalid files from the upload queue
         setUploadQueue(currentQueue => currentQueue.filter(name => !invalidFiles.some(f => f.name === name)));
      }

      // Start uploads for valid files
      const uploadPromises = validFiles.map((file) => uploadFile(file));
      const uploadedAttachments = await Promise.all(uploadPromises);

      const successfullyUploadedAttachments = uploadedAttachments.filter(
        (attachment): attachment is Attachment => attachment !== undefined,
      );

      // Add successfully uploaded attachments to the main attachments list
      setAttachments((currentAttachments) => [
        ...currentAttachments,
        ...successfullyUploadedAttachments,
      ]);

    },
    [setAttachments, uploadFile],
  );

  const handleRemoveAttachment = useCallback(
    (attachmentToRemove: Attachment) => {
      // Revoke the object URL
      if (attachmentToRemove.url.startsWith('blob:')) {
         URL.revokeObjectURL(attachmentToRemove.url);
      }
      // Filter out the attachment
      setAttachments((currentAttachments) =>
        currentAttachments.filter(
          (attachment) => attachment.url !== attachmentToRemove.url || attachment.name !== attachmentToRemove.name
        )
      );
      // Focus the textarea
      textareaRef.current?.focus();
    },
    [setAttachments, textareaRef]
  );

  const submitForm = useCallback(() => {
     if (input.trim().length === 0 && attachments.length === 0) {
        console.warn('Please enter a message or add an attachment.');
        return;
     }

    onSendMessage({ input, attachments });

    // Clear input and attachments
    setInput('');
    setAttachments([]);

    // Revoke object URLs for sent attachments
    attachments.forEach(att => {
        if (att.url.startsWith('blob:')) {
            URL.revokeObjectURL(att.url);
        }
    });

    resetHeight();
    textareaRef.current?.focus();

  }, [
    input,
    attachments,
    onSendMessage,
    setAttachments,
    textareaRef,
    resetHeight,
  ]);

  const showSuggestedActions = messages.length === 0 && attachments.length === 0 && uploadQueue.length === 0;

  const isAttachmentDisabled = isGenerating || uploadQueue.length > 0;

  return (
    <div className={cn("relative w-full flex flex-col gap-4", className)}>

      <AnimatePresence>
       {showSuggestedActions && (
         <motion.div
            key="suggested-actions-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
         >
            <SuggestedActions
              onSelectAction={(action) => {
                setInput(action);
                requestAnimationFrame(() => {
                     adjustHeight();
                     textareaRef.current?.focus();
                });
             }}
              chatId={chatId}
              selectedVisibilityType={selectedVisibilityType}
            />
         </motion.div>
       )}
      </AnimatePresence>


      {/* Hidden file input */}
      <input
        type="file"
        className="fixed -top-4 -left-4 size-0.5 opacity-0 pointer-events-none"
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
        tabIndex={-1}
        disabled={isAttachmentDisabled}
        accept="image/*,video/*,audio/*,.pdf" // Example mime types
      />

      {(attachments.length > 0 || uploadQueue.length > 0) && (
        <div
          data-testid="attachments-preview"
          className="flex pt-[10px] flex-row gap-3 overflow-x-auto items-end pb-2 pl-1"
        >
          {attachments.map((attachment) => (
            <div key={attachment.url || attachment.name} className="relative group">
                <PreviewAttachment attachment={attachment} isUploading={false} />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-[-8px] right-[-8px] h-5 w-5 rounded-full p-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleRemoveAttachment(attachment)}
                  aria-label={`Remove ${attachment.name}`}
                >
                   <XIcon className="size-3" />
                </Button>
            </div>
          ))}
          {uploadQueue.map((filename, index) => (
            <PreviewAttachment
              key={`upload-${filename}-${index}`}
              attachment={{ url: '', name: filename, contentType: '', size: 0 }}
              isUploading={true}
            />
          ))}
        </div>
      )}

      <Textarea
        data-testid="multimodal-input"
        ref={textareaRef}
        placeholder="Send a message..."
        value={input}
        onChange={handleInput}
        className={cn(
          'min-h-[24px] max-h-[calc(75dvh)] overflow-y-auto resize-none rounded-2xl !text-base pb-10',
          'bg-gray-100 border border-gray-300', 
          className,
        )}
        style={{color: 'black'}}
        rows={1}
        autoFocus
        disabled={!canSend || isGenerating || uploadQueue.length > 0}
        onKeyDown={(event) => {
          if (
            event.key === 'Enter' &&
            !event.shiftKey &&
            !event.nativeEvent.isComposing
          ) {
            event.preventDefault();

            const canSubmit = canSend && !isGenerating && uploadQueue.length === 0 && (input.trim().length > 0 || attachments.length > 0);

            if (canSubmit) {
              submitForm();
            }
          }
        }}
      />

      <div className="absolute bottom-0 left-0 p-2 w-fit flex flex-row justify-start z-10">
        <AttachmentsButton
          fileInputRef={fileInputRef}
          disabled={isAttachmentDisabled}
        />
      </div>

      <div className="absolute bottom-0 right-0 p-2 w-fit flex flex-row justify-end z-10">
        {isGenerating ? (
          <StopButton onStop={onStopGenerating} />
        ) : (
          <SendButton
            submitForm={submitForm}
            input={input}
            uploadQueue={uploadQueue}
            attachments={attachments}
            canSend={canSend}
            isGenerating={isGenerating}
          />
        )}
      </div>
    </div>
  );
}

export { PureMultimodalInput };

demo.tsx
'use client';

import React, { useState, useCallback } from 'react';
import { PureMultimodalInput } from "@/components/ui/multimodal-ai-chat-input"
type VisibilityType = 'public' | 'private' | 'unlisted' | string;

interface Attachment {
    url: string;
    name: string;
    contentType: string;
    size: number;
}

interface UIMessage {
  id: string;
  content: string;
  role: string;
  attachments?: Attachment[];
}

export function PureMultimodalInputOnlyDisplay() {
  // Minimal state and handlers required by PureMultimodalInput
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isGenerating, setIsGenerating] = useState(false); // Control the stop button visibility
  const [chatId] = useState('demo-input-only'); // Dummy chat ID

  const handleSendMessage = useCallback(({ input, attachments }: { input: string; attachments: Attachment[] }) => {
    console.log("--- Simulating Sending Message ---");
    console.log("Input:", input);
    console.log("Attachments:", attachments);
    console.log("---------------------------------");

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      // In a real app, you'd clear attachments after successful send
      // setAttachments([]);
    }, 2000); // Simulate a 2 second response time

  }, []);

  const handleStopGenerating = useCallback(() => {
    console.log("Stop button clicked (simulated).");
    setIsGenerating(false);
  }, []);

  // Other necessary props for PureMultimodalInput
  const canSend = true; // Always allow sending in this minimal demo
  const messages: UIMessage[] = []; // Provide an empty array as required by type, though not used for context here
  const selectedVisibilityType: VisibilityType = 'private'; // Dummy visibility

  return (
    // Added a simple container div for basic centering/padding if needed
    // but the focus is on the input component itself
    <div className="w-full max-w-3xl mx-auto p-4"> 
      <PureMultimodalInput
        chatId={chatId}
        messages={messages} // Empty array
        attachments={attachments}
        setAttachments={setAttachments}
        onSendMessage={handleSendMessage}
        onStopGenerating={handleStopGenerating}
        isGenerating={isGenerating}
        canSend={canSend} // True
        selectedVisibilityType={selectedVisibilityType} // 'private'
      />
    </div>
  );
}

```

Install NPM dependencies:
```bash
lucide-react, framer-motion, tailwind-merge, fast-deep-equal, class-variance-authority
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
animated-ai-chat.tsx
"use client";

import { useEffect, useRef, useCallback, useTransition } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    ImageIcon,
    FileUp,
    Figma,
    MonitorIcon,
    CircleUserRound,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
    SendIcon,
    XIcon,
    LoaderIcon,
    Sparkles,
    Command,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react"

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            textarea.style.height = `${minHeight}px`;
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

interface CommandSuggestion {
    icon: React.ReactNode;
    label: string;
    description: string;
    prefix: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string;
  showRing?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, containerClassName, showRing = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    
    return (
      <div className={cn(
        "relative",
        containerClassName
      )}>
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
            "transition-all duration-200 ease-in-out",
            "placeholder:text-muted-foreground",
            "disabled:cursor-not-allowed disabled:opacity-50",
            showRing ? "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" : "",
            className
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {showRing && isFocused && (
          <motion.span 
            className="absolute inset-0 rounded-md pointer-events-none ring-2 ring-offset-0 ring-violet-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}

        {props.onChange && (
          <div 
            className="absolute bottom-2 right-2 opacity-0 w-2 h-2 bg-violet-500 rounded-full"
            style={{
              animation: 'none',
            }}
            id="textarea-ripple"
          />
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export function AnimatedAIChat() {
    const [value, setValue] = useState("");
    const [attachments, setAttachments] = useState<string[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [activeSuggestion, setActiveSuggestion] = useState<number>(-1);
    const [showCommandPalette, setShowCommandPalette] = useState(false);
    const [recentCommand, setRecentCommand] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });
    const [inputFocused, setInputFocused] = useState(false);
    const commandPaletteRef = useRef<HTMLDivElement>(null);

    const commandSuggestions: CommandSuggestion[] = [
        { 
            icon: <ImageIcon className="w-4 h-4" />, 
            label: "Clone UI", 
            description: "Generate a UI from a screenshot", 
            prefix: "/clone" 
        },
        { 
            icon: <Figma className="w-4 h-4" />, 
            label: "Import Figma", 
            description: "Import a design from Figma", 
            prefix: "/figma" 
        },
        { 
            icon: <MonitorIcon className="w-4 h-4" />, 
            label: "Create Page", 
            description: "Generate a new web page", 
            prefix: "/page" 
        },
        { 
            icon: <Sparkles className="w-4 h-4" />, 
            label: "Improve", 
            description: "Improve existing UI design", 
            prefix: "/improve" 
        },
    ];

    useEffect(() => {
        if (value.startsWith('/') && !value.includes(' ')) {
            setShowCommandPalette(true);
            
            const matchingSuggestionIndex = commandSuggestions.findIndex(
                (cmd) => cmd.prefix.startsWith(value)
            );
            
            if (matchingSuggestionIndex >= 0) {
                setActiveSuggestion(matchingSuggestionIndex);
            } else {
                setActiveSuggestion(-1);
            }
        } else {
            setShowCommandPalette(false);
        }
    }, [value]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const commandButton = document.querySelector('[data-command-button]');
            
            if (commandPaletteRef.current && 
                !commandPaletteRef.current.contains(target) && 
                !commandButton?.contains(target)) {
                setShowCommandPalette(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (showCommandPalette) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveSuggestion(prev => 
                    prev < commandSuggestions.length - 1 ? prev + 1 : 0
                );
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveSuggestion(prev => 
                    prev > 0 ? prev - 1 : commandSuggestions.length - 1
                );
            } else if (e.key === 'Tab' || e.key === 'Enter') {
                e.preventDefault();
                if (activeSuggestion >= 0) {
                    const selectedCommand = commandSuggestions[activeSuggestion];
                    setValue(selectedCommand.prefix + ' ');
                    setShowCommandPalette(false);
                    
                    setRecentCommand(selectedCommand.label);
                    setTimeout(() => setRecentCommand(null), 3500);
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                setShowCommandPalette(false);
            }
        } else if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                handleSendMessage();
            }
        }
    };

    const handleSendMessage = () => {
        if (value.trim()) {
            startTransition(() => {
                setIsTyping(true);
                setTimeout(() => {
                    setIsTyping(false);
                    setValue("");
                    adjustHeight(true);
                }, 3000);
            });
        }
    };

    const handleAttachFile = () => {
        const mockFileName = `file-${Math.floor(Math.random() * 1000)}.pdf`;
        setAttachments(prev => [...prev, mockFileName]);
    };

    const removeAttachment = (index: number) => {
        setAttachments(prev => prev.filter((_, i) => i !== index));
    };
    
    const selectCommandSuggestion = (index: number) => {
        const selectedCommand = commandSuggestions[index];
        setValue(selectedCommand.prefix + ' ');
        setShowCommandPalette(false);
        
        setRecentCommand(selectedCommand.label);
        setTimeout(() => setRecentCommand(null), 2000);
    };

    return (
        <div className="min-h-screen flex flex-col w-full items-center justify-center bg-transparent text-white p-6 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full mix-blend-normal filter blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-normal filter blur-[128px] animate-pulse delay-700" />
                <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-fuchsia-500/10 rounded-full mix-blend-normal filter blur-[96px] animate-pulse delay-1000" />
            </div>
            <div className="w-full max-w-2xl mx-auto relative">
                <motion.div 
                    className="relative z-10 space-y-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="text-center space-y-3">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block"
                        >
                            <h1 className="text-3xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/40 pb-1">
                                How can I help today?
                            </h1>
                            <motion.div 
                                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "100%", opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.div>
                        <motion.p 
                            className="text-sm text-white/40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Type a command or ask a question
                        </motion.p>
                    </div>

                    <motion.div 
                        className="relative backdrop-blur-2xl bg-white/[0.02] rounded-2xl border border-white/[0.05] shadow-2xl"
                        initial={{ scale: 0.98 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <AnimatePresence>
                            {showCommandPalette && (
                                <motion.div 
                                    ref={commandPaletteRef}
                                    className="absolute left-4 right-4 bottom-full mb-2 backdrop-blur-xl bg-black/90 rounded-lg z-50 shadow-lg border border-white/10 overflow-hidden"
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="py-1 bg-black/95">
                                        {commandSuggestions.map((suggestion, index) => (
                                            <motion.div
                                                key={suggestion.prefix}
                                                className={cn(
                                                    "flex items-center gap-2 px-3 py-2 text-xs transition-colors cursor-pointer",
                                                    activeSuggestion === index 
                                                        ? "bg-white/10 text-white" 
                                                        : "text-white/70 hover:bg-white/5"
                                                )}
                                                onClick={() => selectCommandSuggestion(index)}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.03 }}
                                            >
                                                <div className="w-5 h-5 flex items-center justify-center text-white/60">
                                                    {suggestion.icon}
                                                </div>
                                                <div className="font-medium">{suggestion.label}</div>
                                                <div className="text-white/40 text-xs ml-1">
                                                    {suggestion.prefix}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="p-4">
                            <Textarea
                                ref={textareaRef}
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    adjustHeight();
                                }}
                                onKeyDown={handleKeyDown}
                                onFocus={() => setInputFocused(true)}
                                onBlur={() => setInputFocused(false)}
                                placeholder="Ask zap a question..."
                                containerClassName="w-full"
                                className={cn(
                                    "w-full px-4 py-3",
                                    "resize-none",
                                    "bg-transparent",
                                    "border-none",
                                    "text-white/90 text-sm",
                                    "focus:outline-none",
                                    "placeholder:text-white/20",
                                    "min-h-[60px]"
                                )}
                                style={{
                                    overflow: "hidden",
                                }}
                                showRing={false}
                            />
                        </div>

                        <AnimatePresence>
                            {attachments.length > 0 && (
                                <motion.div 
                                    className="px-4 pb-3 flex gap-2 flex-wrap"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    {attachments.map((file, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-2 text-xs bg-white/[0.03] py-1.5 px-3 rounded-lg text-white/70"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                        >
                                            <span>{file}</span>
                                            <button 
                                                onClick={() => removeAttachment(index)}
                                                className="text-white/40 hover:text-white transition-colors"
                                            >
                                                <XIcon className="w-3 h-3" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="p-4 border-t border-white/[0.05] flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <motion.button
                                    type="button"
                                    onClick={handleAttachFile}
                                    whileTap={{ scale: 0.94 }}
                                    className="p-2 text-white/40 hover:text-white/90 rounded-lg transition-colors relative group"
                                >
                                    <Paperclip className="w-4 h-4" />
                                    <motion.span
                                        className="absolute inset-0 bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                        layoutId="button-highlight"
                                    />
                                </motion.button>
                                <motion.button
                                    type="button"
                                    data-command-button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowCommandPalette(prev => !prev);
                                    }}
                                    whileTap={{ scale: 0.94 }}
                                    className={cn(
                                        "p-2 text-white/40 hover:text-white/90 rounded-lg transition-colors relative group",
                                        showCommandPalette && "bg-white/10 text-white/90"
                                    )}
                                >
                                    <Command className="w-4 h-4" />
                                    <motion.span
                                        className="absolute inset-0 bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                        layoutId="button-highlight"
                                    />
                                </motion.button>
                            </div>
                            
                            <motion.button
                                type="button"
                                onClick={handleSendMessage}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isTyping || !value.trim()}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                    "flex items-center gap-2",
                                    value.trim()
                                        ? "bg-white text-[#0A0A0B] shadow-lg shadow-white/10"
                                        : "bg-white/[0.05] text-white/40"
                                )}
                            >
                                {isTyping ? (
                                    <LoaderIcon className="w-4 h-4 animate-[spin_2s_linear_infinite]" />
                                ) : (
                                    <SendIcon className="w-4 h-4" />
                                )}
                                <span>Send</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {commandSuggestions.map((suggestion, index) => (
                            <motion.button
                                key={suggestion.prefix}
                                onClick={() => selectCommandSuggestion(index)}
                                className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] hover:bg-white/[0.05] rounded-lg text-sm text-white/60 hover:text-white/90 transition-all relative group"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {suggestion.icon}
                                <span>{suggestion.label}</span>
                                <motion.div
                                    className="absolute inset-0 border border-white/[0.05] rounded-lg"
                                    initial={false}
                                    animate={{
                                        opacity: [0, 1],
                                        scale: [0.98, 1],
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                />
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {isTyping && (
                    <motion.div 
                        className="fixed bottom-8 mx-auto transform -translate-x-1/2 backdrop-blur-2xl bg-white/[0.02] rounded-full px-4 py-2 shadow-lg border border-white/[0.05]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-7 rounded-full bg-white/[0.05] flex items-center justify-center text-center">
                                <span className="text-xs font-medium text-white/90 mb-0.5">zap</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white/70">
                                <span>Thinking</span>
                                <TypingDots />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {inputFocused && (
                <motion.div 
                    className="fixed w-[50rem] h-[50rem] rounded-full pointer-events-none z-0 opacity-[0.02] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 blur-[96px]"
                    animate={{
                        x: mousePosition.x - 400,
                        y: mousePosition.y - 400,
                    }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 150,
                        mass: 0.5,
                    }}
                />
            )}
        </div>
    );
}

function TypingDots() {
    return (
        <div className="flex items-center ml-1">
            {[1, 2, 3].map((dot) => (
                <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 bg-white/90 rounded-full mx-0.5"
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                        opacity: [0.3, 0.9, 0.3],
                        scale: [0.85, 1.1, 0.85]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.15,
                        ease: "easeInOut",
                    }}
                    style={{
                        boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
                    }}
                />
            ))}
        </div>
    );
}

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.button
            type="button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-full border border-neutral-800 text-neutral-400 hover:text-white transition-all relative overflow-hidden group"
        >
            <div className="relative z-10 flex items-center gap-2">
                {icon}
                <span className="text-xs relative z-10">{label}</span>
            </div>
            
            <AnimatePresence>
                {isHovered && (
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>
            
            <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    );
}

const rippleKeyframes = `
@keyframes ripple {
  0% { transform: scale(0.5); opacity: 0.6; }
  100% { transform: scale(2); opacity: 0; }
}
`;

if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = rippleKeyframes;
    document.head.appendChild(style);
}




demo.tsx
import { AnimatedAIChat } from "@/components/ui/animated-ai-chat"

export function Demo() {
  return (
    <div className="flex w-screen overflow-x-hidden">
      <AnimatedAIChat />
    </div>
  );
}

```

Install NPM dependencies:
```bash
lucide-react, framer-motion
```

Extend existing globals.css with this code:
```css
.lab-bg::before {
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
  box-sizing: border-box;
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
animated-ai-chat.tsx
"use client";

import { useEffect, useRef, useCallback, useTransition } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    ImageIcon,
    FileUp,
    Figma,
    MonitorIcon,
    CircleUserRound,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
    SendIcon,
    XIcon,
    LoaderIcon,
    Sparkles,
    Command,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react"

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            textarea.style.height = `${minHeight}px`;
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

interface CommandSuggestion {
    icon: React.ReactNode;
    label: string;
    description: string;
    prefix: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string;
  showRing?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, containerClassName, showRing = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    
    return (
      <div className={cn(
        "relative",
        containerClassName
      )}>
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
            "transition-all duration-200 ease-in-out",
            "placeholder:text-muted-foreground",
            "disabled:cursor-not-allowed disabled:opacity-50",
            showRing ? "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" : "",
            className
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {showRing && isFocused && (
          <motion.span 
            className="absolute inset-0 rounded-md pointer-events-none ring-2 ring-offset-0 ring-violet-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}

        {props.onChange && (
          <div 
            className="absolute bottom-2 right-2 opacity-0 w-2 h-2 bg-violet-500 rounded-full"
            style={{
              animation: 'none',
            }}
            id="textarea-ripple"
          />
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export function AnimatedAIChat() {
    const [value, setValue] = useState("");
    const [attachments, setAttachments] = useState<string[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [activeSuggestion, setActiveSuggestion] = useState<number>(-1);
    const [showCommandPalette, setShowCommandPalette] = useState(false);
    const [recentCommand, setRecentCommand] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });
    const [inputFocused, setInputFocused] = useState(false);
    const commandPaletteRef = useRef<HTMLDivElement>(null);

    const commandSuggestions: CommandSuggestion[] = [
        { 
            icon: <ImageIcon className="w-4 h-4" />, 
            label: "Clone UI", 
            description: "Generate a UI from a screenshot", 
            prefix: "/clone" 
        },
        { 
            icon: <Figma className="w-4 h-4" />, 
            label: "Import Figma", 
            description: "Import a design from Figma", 
            prefix: "/figma" 
        },
        { 
            icon: <MonitorIcon className="w-4 h-4" />, 
            label: "Create Page", 
            description: "Generate a new web page", 
            prefix: "/page" 
        },
        { 
            icon: <Sparkles className="w-4 h-4" />, 
            label: "Improve", 
            description: "Improve existing UI design", 
            prefix: "/improve" 
        },
    ];

    useEffect(() => {
        if (value.startsWith('/') && !value.includes(' ')) {
            setShowCommandPalette(true);
            
            const matchingSuggestionIndex = commandSuggestions.findIndex(
                (cmd) => cmd.prefix.startsWith(value)
            );
            
            if (matchingSuggestionIndex >= 0) {
                setActiveSuggestion(matchingSuggestionIndex);
            } else {
                setActiveSuggestion(-1);
            }
        } else {
            setShowCommandPalette(false);
        }
    }, [value]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const commandButton = document.querySelector('[data-command-button]');
            
            if (commandPaletteRef.current && 
                !commandPaletteRef.current.contains(target) && 
                !commandButton?.contains(target)) {
                setShowCommandPalette(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (showCommandPalette) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveSuggestion(prev => 
                    prev < commandSuggestions.length - 1 ? prev + 1 : 0
                );
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveSuggestion(prev => 
                    prev > 0 ? prev - 1 : commandSuggestions.length - 1
                );
            } else if (e.key === 'Tab' || e.key === 'Enter') {
                e.preventDefault();
                if (activeSuggestion >= 0) {
                    const selectedCommand = commandSuggestions[activeSuggestion];
                    setValue(selectedCommand.prefix + ' ');
                    setShowCommandPalette(false);
                    
                    setRecentCommand(selectedCommand.label);
                    setTimeout(() => setRecentCommand(null), 3500);
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                setShowCommandPalette(false);
            }
        } else if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                handleSendMessage();
            }
        }
    };

    const handleSendMessage = () => {
        if (value.trim()) {
            startTransition(() => {
                setIsTyping(true);
                setTimeout(() => {
                    setIsTyping(false);
                    setValue("");
                    adjustHeight(true);
                }, 3000);
            });
        }
    };

    const handleAttachFile = () => {
        const mockFileName = `file-${Math.floor(Math.random() * 1000)}.pdf`;
        setAttachments(prev => [...prev, mockFileName]);
    };

    const removeAttachment = (index: number) => {
        setAttachments(prev => prev.filter((_, i) => i !== index));
    };
    
    const selectCommandSuggestion = (index: number) => {
        const selectedCommand = commandSuggestions[index];
        setValue(selectedCommand.prefix + ' ');
        setShowCommandPalette(false);
        
        setRecentCommand(selectedCommand.label);
        setTimeout(() => setRecentCommand(null), 2000);
    };

    return (
        <div className="min-h-screen flex flex-col w-full items-center justify-center bg-transparent text-white p-6 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full mix-blend-normal filter blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-normal filter blur-[128px] animate-pulse delay-700" />
                <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-fuchsia-500/10 rounded-full mix-blend-normal filter blur-[96px] animate-pulse delay-1000" />
            </div>
            <div className="w-full max-w-2xl mx-auto relative">
                <motion.div 
                    className="relative z-10 space-y-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="text-center space-y-3">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block"
                        >
                            <h1 className="text-3xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/40 pb-1">
                                How can I help today?
                            </h1>
                            <motion.div 
                                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "100%", opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.div>
                        <motion.p 
                            className="text-sm text-white/40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Type a command or ask a question
                        </motion.p>
                    </div>

                    <motion.div 
                        className="relative backdrop-blur-2xl bg-white/[0.02] rounded-2xl border border-white/[0.05] shadow-2xl"
                        initial={{ scale: 0.98 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <AnimatePresence>
                            {showCommandPalette && (
                                <motion.div 
                                    ref={commandPaletteRef}
                                    className="absolute left-4 right-4 bottom-full mb-2 backdrop-blur-xl bg-black/90 rounded-lg z-50 shadow-lg border border-white/10 overflow-hidden"
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="py-1 bg-black/95">
                                        {commandSuggestions.map((suggestion, index) => (
                                            <motion.div
                                                key={suggestion.prefix}
                                                className={cn(
                                                    "flex items-center gap-2 px-3 py-2 text-xs transition-colors cursor-pointer",
                                                    activeSuggestion === index 
                                                        ? "bg-white/10 text-white" 
                                                        : "text-white/70 hover:bg-white/5"
                                                )}
                                                onClick={() => selectCommandSuggestion(index)}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.03 }}
                                            >
                                                <div className="w-5 h-5 flex items-center justify-center text-white/60">
                                                    {suggestion.icon}
                                                </div>
                                                <div className="font-medium">{suggestion.label}</div>
                                                <div className="text-white/40 text-xs ml-1">
                                                    {suggestion.prefix}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="p-4">
                            <Textarea
                                ref={textareaRef}
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    adjustHeight();
                                }}
                                onKeyDown={handleKeyDown}
                                onFocus={() => setInputFocused(true)}
                                onBlur={() => setInputFocused(false)}
                                placeholder="Ask zap a question..."
                                containerClassName="w-full"
                                className={cn(
                                    "w-full px-4 py-3",
                                    "resize-none",
                                    "bg-transparent",
                                    "border-none",
                                    "text-white/90 text-sm",
                                    "focus:outline-none",
                                    "placeholder:text-white/20",
                                    "min-h-[60px]"
                                )}
                                style={{
                                    overflow: "hidden",
                                }}
                                showRing={false}
                            />
                        </div>

                        <AnimatePresence>
                            {attachments.length > 0 && (
                                <motion.div 
                                    className="px-4 pb-3 flex gap-2 flex-wrap"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    {attachments.map((file, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-2 text-xs bg-white/[0.03] py-1.5 px-3 rounded-lg text-white/70"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                        >
                                            <span>{file}</span>
                                            <button 
                                                onClick={() => removeAttachment(index)}
                                                className="text-white/40 hover:text-white transition-colors"
                                            >
                                                <XIcon className="w-3 h-3" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="p-4 border-t border-white/[0.05] flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <motion.button
                                    type="button"
                                    onClick={handleAttachFile}
                                    whileTap={{ scale: 0.94 }}
                                    className="p-2 text-white/40 hover:text-white/90 rounded-lg transition-colors relative group"
                                >
                                    <Paperclip className="w-4 h-4" />
                                    <motion.span
                                        className="absolute inset-0 bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                        layoutId="button-highlight"
                                    />
                                </motion.button>
                                <motion.button
                                    type="button"
                                    data-command-button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowCommandPalette(prev => !prev);
                                    }}
                                    whileTap={{ scale: 0.94 }}
                                    className={cn(
                                        "p-2 text-white/40 hover:text-white/90 rounded-lg transition-colors relative group",
                                        showCommandPalette && "bg-white/10 text-white/90"
                                    )}
                                >
                                    <Command className="w-4 h-4" />
                                    <motion.span
                                        className="absolute inset-0 bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                        layoutId="button-highlight"
                                    />
                                </motion.button>
                            </div>
                            
                            <motion.button
                                type="button"
                                onClick={handleSendMessage}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isTyping || !value.trim()}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                    "flex items-center gap-2",
                                    value.trim()
                                        ? "bg-white text-[#0A0A0B] shadow-lg shadow-white/10"
                                        : "bg-white/[0.05] text-white/40"
                                )}
                            >
                                {isTyping ? (
                                    <LoaderIcon className="w-4 h-4 animate-[spin_2s_linear_infinite]" />
                                ) : (
                                    <SendIcon className="w-4 h-4" />
                                )}
                                <span>Send</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {commandSuggestions.map((suggestion, index) => (
                            <motion.button
                                key={suggestion.prefix}
                                onClick={() => selectCommandSuggestion(index)}
                                className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] hover:bg-white/[0.05] rounded-lg text-sm text-white/60 hover:text-white/90 transition-all relative group"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {suggestion.icon}
                                <span>{suggestion.label}</span>
                                <motion.div
                                    className="absolute inset-0 border border-white/[0.05] rounded-lg"
                                    initial={false}
                                    animate={{
                                        opacity: [0, 1],
                                        scale: [0.98, 1],
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                />
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {isTyping && (
                    <motion.div 
                        className="fixed bottom-8 mx-auto transform -translate-x-1/2 backdrop-blur-2xl bg-white/[0.02] rounded-full px-4 py-2 shadow-lg border border-white/[0.05]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-7 rounded-full bg-white/[0.05] flex items-center justify-center text-center">
                                <span className="text-xs font-medium text-white/90 mb-0.5">zap</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white/70">
                                <span>Thinking</span>
                                <TypingDots />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {inputFocused && (
                <motion.div 
                    className="fixed w-[50rem] h-[50rem] rounded-full pointer-events-none z-0 opacity-[0.02] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 blur-[96px]"
                    animate={{
                        x: mousePosition.x - 400,
                        y: mousePosition.y - 400,
                    }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 150,
                        mass: 0.5,
                    }}
                />
            )}
        </div>
    );
}

function TypingDots() {
    return (
        <div className="flex items-center ml-1">
            {[1, 2, 3].map((dot) => (
                <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 bg-white/90 rounded-full mx-0.5"
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                        opacity: [0.3, 0.9, 0.3],
                        scale: [0.85, 1.1, 0.85]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.15,
                        ease: "easeInOut",
                    }}
                    style={{
                        boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
                    }}
                />
            ))}
        </div>
    );
}

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.button
            type="button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-full border border-neutral-800 text-neutral-400 hover:text-white transition-all relative overflow-hidden group"
        >
            <div className="relative z-10 flex items-center gap-2">
                {icon}
                <span className="text-xs relative z-10">{label}</span>
            </div>
            
            <AnimatePresence>
                {isHovered && (
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>
            
            <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    );
}

const rippleKeyframes = `
@keyframes ripple {
  0% { transform: scale(0.5); opacity: 0.6; }
  100% { transform: scale(2); opacity: 0; }
}
`;

if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = rippleKeyframes;
    document.head.appendChild(style);
}




demo.tsx
import { AnimatedAIChat } from "@/components/ui/animated-ai-chat"

export function Demo() {
  return (
    <div className="flex w-screen overflow-x-hidden">
      <AnimatedAIChat />
    </div>
  );
}

```

Install NPM dependencies:
```bash
lucide-react, framer-motion
```

Extend existing globals.css with this code:
```css
.lab-bg::before {
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
  box-sizing: border-box;
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
placeholders-and-vanish-input.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };
  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation(); // Restart the interval when the tab becomes visible
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < 800; t++) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      vanishAndSubmit();
    }
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    const value = inputRef.current?.value || "";
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vanishAndSubmit();
    onSubmit && onSubmit(e);
  };
  return (
    <form
      className={cn(
        "w-full relative max-w-xl mx-auto bg-white dark:bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
        value && "bg-gray-50"
      )}
      onSubmit={handleSubmit}
    >
      <canvas
        className={cn(
          "absolute pointer-events-none  text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20",
          !animating ? "opacity-0" : "opacity-100"
        )}
        ref={canvasRef}
      />
      <input
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            onChange && onChange(e);
          }
        }}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        value={value}
        type="text"
        className={cn(
          "w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20",
          animating && "text-transparent dark:text-transparent"
        )}
      />

      <button
        disabled={!value}
        type="submit"
        className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-300 h-4 w-4"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.path
            d="M5 12l14 0"
            initial={{
              strokeDasharray: "50%",
              strokeDashoffset: "50%",
            }}
            animate={{
              strokeDashoffset: value ? 0 : "50%",
            }}
            transition={{
              duration: 0.3,
              ease: "linear",
            }}
          />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </motion.svg>
      </button>

      <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              initial={{
                y: 5,
                opacity: 0,
              }}
              key={`current-placeholder-${currentPlaceholder}`}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}


demo.tsx
"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Aceternity UI Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

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
placeholders-and-vanish-input.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };
  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation(); // Restart the interval when the tab becomes visible
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < 800; t++) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      vanishAndSubmit();
    }
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    const value = inputRef.current?.value || "";
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vanishAndSubmit();
    onSubmit && onSubmit(e);
  };
  return (
    <form
      className={cn(
        "w-full relative max-w-xl mx-auto bg-white dark:bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
        value && "bg-gray-50"
      )}
      onSubmit={handleSubmit}
    >
      <canvas
        className={cn(
          "absolute pointer-events-none  text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20",
          !animating ? "opacity-0" : "opacity-100"
        )}
        ref={canvasRef}
      />
      <input
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            onChange && onChange(e);
          }
        }}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        value={value}
        type="text"
        className={cn(
          "w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20",
          animating && "text-transparent dark:text-transparent"
        )}
      />

      <button
        disabled={!value}
        type="submit"
        className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-300 h-4 w-4"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.path
            d="M5 12l14 0"
            initial={{
              strokeDasharray: "50%",
              strokeDashoffset: "50%",
            }}
            animate={{
              strokeDashoffset: value ? 0 : "50%",
            }}
            transition={{
              duration: 0.3,
              ease: "linear",
            }}
          />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </motion.svg>
      </button>

      <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              initial={{
                y: 5,
                opacity: 0,
              }}
              key={`current-placeholder-${currentPlaceholder}`}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}


demo.tsx
"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Aceternity UI Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

```

Install NPM dependencies:
```bash
framer-motion
```





