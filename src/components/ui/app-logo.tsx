import * as React from "react"
import { Sigma, type LucideProps } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const appLogoVariants = cva(
  "text-primary shrink-0 transition-colors",
  {
    variants: {
      size: {
        default: "size-6",
        sm: "size-4",
        lg: "size-8",
        xl: "size-10",
        "2xl": "size-12",
        "3xl": "size-16",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface AppLogoProps
  extends Omit<LucideProps, "ref" | "size">,
    VariantProps<typeof appLogoVariants> {}

const AppLogo = React.forwardRef<SVGSVGElement, AppLogoProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <Sigma
        ref={ref}
        className={cn(appLogoVariants({ size, className }))}
        {...props}
      />
    )
  }
)
AppLogo.displayName = "AppLogo"

export { AppLogo, appLogoVariants }
