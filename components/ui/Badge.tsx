import * as React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "info" | "primary" | "outline";
}

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  let baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
  
  let variants = {
    default: "bg-slate-100 text-slate-900 hover:bg-slate-100/80",
    success: "bg-green-50 text-green-700 border border-green-200",
    info: "bg-blue-50 text-blue-700 border border-blue-200",
    primary: "bg-[lab(36_30.43_-81.2_/_0.91)] text-white shadow hover:opacity-90",
    outline: "text-slate-950 border border-slate-200",
  }
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
  )
}
