import * as React from "react"
import { Slot } from "@radix-ui/react-slot" // Wait, I don't have radix. I will just use standard HTML attributes.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    
    let baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50"
    
    let variants = {
      primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
      outline: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
      ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-600",
    }
    
    let sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 px-4 text-xs",
      lg: "h-12 px-8 text-base",
    }
    
    const Comp = asChild ? "span" : "button"
    
    return (
      <Comp
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref as any}
        {...props as any}
      />
    )
  }
)
Button.displayName = "Button"
