import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Buttons respond mechanically, not playfully: a 1px press, no bounce.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[2px] font-sans text-sm font-medium tracking-tight select-none transition-[background-color,border-color,color,opacity] duration-200 active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "bg-ink text-paper hover:bg-ink/85",
        secondary: "border border-ink/25 text-ink hover:border-ink/70",
        ghost: "text-ink hover:text-copper",
      },
      size: {
        md: "h-11 px-5",
        lg: "h-12 px-7 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  href?: string;
  className?: string;
  children: ReactNode;
};

export function Button({ href, variant, size, className, children }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return <button className={classes}>{children}</button>;
}
