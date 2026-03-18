import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";

type SharedProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

type PrimaryButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps>;

export function PrimaryButton({
  children,
  className,
  href,
  type = "button",
  ...props
}: PrimaryButtonProps) {
  const classes = cn("shared-button shared-button--primary", className);

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

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
