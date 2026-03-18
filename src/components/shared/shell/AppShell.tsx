import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";

type AppShellProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function AppShell({ children, className, ...props }: AppShellProps) {
  return (
    <div className={cn("app-shell", className)} {...props}>
      <div className="app-shell__inner">{children}</div>
    </div>
  );
}
