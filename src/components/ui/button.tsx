import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    let classes = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 disabled:pointer-events-none disabled:opacity-50"
    
    if (variant === "default") {
      classes += " bg-sage-500 text-white shadow hover:bg-sage-600"
    } else if (variant === "outline") {
      classes += " border border-sage-200 bg-transparent shadow-sm hover:bg-sage-50 hover:text-sage-900"
    } else if (variant === "ghost") {
      classes += " hover:bg-sage-100 hover:text-sage-900"
    }

    if (size === "default") {
      classes += " h-9 px-4 py-2"
    } else if (size === "sm") {
      classes += " h-8 rounded-md px-3 text-xs"
    } else if (size === "lg") {
      classes += " h-10 rounded-md px-8"
    }

    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={`${classes} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
