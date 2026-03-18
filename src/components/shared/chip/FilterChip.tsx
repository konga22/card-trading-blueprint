import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";

type FilterChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  active?: boolean;
};

export function FilterChip({
  children,
  active = false,
  className,
  type = "button",
  ...props
}: FilterChipProps) {
  return (
    <button
      type={type}
      aria-pressed={active}
      className={cn("filter-chip", active && "filter-chip--active", className)}
      {...props}
    >
      <span className="filter-chip__label">{children}</span>
    </button>
  );
}
