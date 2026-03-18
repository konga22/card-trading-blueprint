import Link from "next/link";
import type { ReactNode } from "react";

import {
  CardPanel,
  FilterChip,
  PrimaryButton,
  SecondaryButton,
  StatusBadge,
} from "@/components/shared";

import styles from "./home.module.css";

type Tone = "neutral" | "brand" | "positive" | "warning";

type CardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function HomeCard({ children, className, href }: CardProps) {
  return (
    <CardPanel
      className={cx(styles.cardShell, className)}
      href={href}
      interactive={Boolean(href)}
    >
      {children}
    </CardPanel>
  );
}

export function HomeSection({
  id,
  eyebrow,
  title,
  description,
  action,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className={styles.sectionPanel}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeading}>
          {eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
          <h2 className={styles.sectionTitle}>{title}</h2>
          {description ? <p className={styles.sectionDescription}>{description}</p> : null}
        </div>
        {action ? action : null}
      </div>
      <div className={styles.sectionGrid}>{children}</div>
    </section>
  );
}

export function HomeButton({
  children,
  variant = "secondary",
  href,
  className,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  const classNames = cx(styles.button, variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary, className);
  if (href) {
    if (variant === "primary") {
      return (
        <PrimaryButton href={href} className={classNames}>
          {children}
        </PrimaryButton>
      );
    }

    return (
      <SecondaryButton href={href} className={classNames}>
        {children}
      </SecondaryButton>
    );
  }

  if (variant === "primary") {
    return (
      <PrimaryButton className={classNames} onClick={onClick} type={type}>
        {children}
      </PrimaryButton>
    );
  }

  return (
    <SecondaryButton className={classNames} onClick={onClick} type={type}>
      {children}
    </SecondaryButton>
  );
}

export function HomeChip({
  children,
  active = false,
  className,
  href,
}: {
  children: ReactNode;
  active?: boolean;
  className?: string;
  href?: string;
}) {
  if (href) {
    return (
      <Link className={cx(styles.chipLink, styles.chip, active && styles.chipActive, className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <FilterChip active={active} className={cx(styles.chip, active && styles.chipActive, className)}>
      {children}
    </FilterChip>
  );
}

export function HomeStatusBadge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const toneClass =
    tone === "brand"
      ? styles.statusBrand
      : tone === "positive"
        ? styles.statusPositive
        : tone === "warning"
          ? styles.statusWarning
          : styles.statusNeutral;
  return (
    <StatusBadge tone={tone} className={cx(styles.statusBadge, toneClass, className)}>
      {children}
    </StatusBadge>
  );
}

function IconWrapper({ children, tone, className }: { children: ReactNode; tone: Tone; className?: string }) {
  const toneClass =
    tone === "brand"
      ? styles.accentBrand
      : tone === "positive"
        ? styles.accentPositive
        : tone === "warning"
          ? styles.accentWarning
          : styles.accentNeutral;
  return <span className={cx(styles.actionIcon, toneClass, className)}>{children}</span>;
}

export function SparkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1.5L10.95 6.05L15.5 8L10.95 9.95L9 14.5L7.05 9.95L2.5 8L7.05 6.05L9 1.5Z" fill="currentColor" />
    </svg>
  );
}

export function TrendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2.5 12.5L6.5 8.5L9.5 11.5L15.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.7 5.5H15.5V9.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 14.5H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 12V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 12V5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 12V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 6.5H14L12.8 12.8C12.7 13.3 12.3 13.7 11.8 13.7H6.2C5.7 13.7 5.3 13.3 5.2 12.8L4 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.5 6.5C6.5 4.9 7.8 3.5 9.4 3.5C11 3.5 12.3 4.8 12.3 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function HomeIconButton({
  label,
  children,
  href,
}: {
  label: string;
  children: ReactNode;
  href?: string;
}) {
  if (href) {
    return (
      <Link className={styles.iconButton} href={href} aria-label={label}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles.iconButton} aria-label={label}>
      {children}
    </button>
  );
}

export function AccentIcon({
  icon,
  tone,
}: {
  icon: "spark" | "trend" | "chart" | "sell";
  tone: Tone;
}) {
  if (icon === "spark") return <IconWrapper tone={tone}><SparkIcon /></IconWrapper>;
  if (icon === "trend") return <IconWrapper tone={tone}><TrendIcon /></IconWrapper>;
  if (icon === "chart") return <IconWrapper tone={tone}><ChartIcon /></IconWrapper>;
  return <IconWrapper tone={tone}><SellIcon /></IconWrapper>;
}
