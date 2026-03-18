import Link from "next/link";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";

type CardPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  href?: string;
  interactive?: boolean;
};

export function CardPanel({
  children,
  className,
  href,
  interactive,
  ...props
}: CardPanelProps) {
  const classes = cn("card-panel", interactive && "card-panel--interactive", className);

  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

    if (href.startsWith("/")) {
      return (
        <Link className={classes} href={href} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
