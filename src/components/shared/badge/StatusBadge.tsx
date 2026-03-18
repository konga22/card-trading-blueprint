import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";

type StatusTone = "neutral" | "positive" | "warning" | "brand";

type StatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: StatusTone;
};

export function StatusBadge({ children, className, tone = "neutral", ...props }: StatusBadgeProps) {
  return (
    <span className={cn("status-badge", `status-badge--${tone}`, className)} {...props}>
      {children}
    </span>
  );
}
