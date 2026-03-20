import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";
import { PrimaryButton } from "../button/PrimaryButton";

type NavLink = {
  label: string;
  href: string;
};

type TopNavigationProps = HTMLAttributes<HTMLElement> & {
  brand: ReactNode;
  tagline?: ReactNode;
  links?: NavLink[];
  utilityLinks?: NavLink[];
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
  utilityLinks = [],
  primaryAction,
  secondaryAction,
  rightSlot,
  className,
  ...props
}: TopNavigationProps) {
  return (
    <header className={cn("top-navigation", className)} {...props}>
      <div className="top-navigation__main-row">
        <div className="top-navigation__brand-block">
          <Link className="top-navigation__brand" href="/" aria-label="Home">
            <span className="top-navigation__brand-copy">
              <span className="top-navigation__brand-name">{brand}</span>
              {tagline ? <span className="top-navigation__tagline">{tagline}</span> : null}
            </span>
          </Link>
        </div>

        <div className="top-navigation__actions">
          {rightSlot}
          {utilityLinks.map((link) => (
            <Link key={link.href} href={link.href} className="top-navigation__utility-link">
              {link.label}
            </Link>
          ))}
          {secondaryAction ? (
            <Link href={secondaryAction.href} className="top-navigation__utility-link">
              {secondaryAction.label}
            </Link>
          ) : null}
          {primaryAction ? (
            <PrimaryButton href={primaryAction.href} className="top-navigation__action">
              {primaryAction.label}
            </PrimaryButton>
          ) : null}
        </div>
      </div>

      {links.length ? (
        <nav className="top-navigation__sub-row" aria-label="Primary">
          <div className="top-navigation__links">
            {links.map((link) => (
              <Link key={link.href} className="top-navigation__nav-link" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
