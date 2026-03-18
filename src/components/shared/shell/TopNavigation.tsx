import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";
import { PrimaryButton } from "../button/PrimaryButton";
import { SecondaryButton } from "../button/SecondaryButton";

type NavLink = {
  label: string;
  href: string;
};

type TopNavigationProps = HTMLAttributes<HTMLElement> & {
  brand: ReactNode;
  tagline?: ReactNode;
  links?: NavLink[];
  primaryAction?: {
    label: ReactNode;
    href: string;
  };
  secondaryAction?: {
    label: ReactNode;
    href: string;
  };
  rightSlot?: ReactNode;
};

export function TopNavigation({
  brand,
  tagline,
  links = [],
  primaryAction,
  secondaryAction,
  rightSlot,
  className,
  ...props
}: TopNavigationProps) {
  return (
    <header className={cn("top-navigation", className)} {...props}>
      <div className="top-navigation__brand-block">
        <Link className="top-navigation__brand" href="/" aria-label="Home">
          <span className="top-navigation__brand-mark" aria-hidden="true">
            C
          </span>
          <span className="top-navigation__brand-copy">
            <span className="top-navigation__brand-name">{brand}</span>
            {tagline ? <span className="top-navigation__tagline">{tagline}</span> : null}
          </span>
        </Link>
      </div>

      {links.length ? (
        <nav className="top-navigation__links" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} className="top-navigation__link" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}

      <div className="top-navigation__actions">
        {rightSlot}
        {secondaryAction ? (
          <SecondaryButton href={secondaryAction.href} className="top-navigation__action">
            {secondaryAction.label}
          </SecondaryButton>
        ) : null}
        {primaryAction ? (
          <PrimaryButton href={primaryAction.href} className="top-navigation__action">
            {primaryAction.label}
          </PrimaryButton>
        ) : null}
      </div>
    </header>
  );
}
