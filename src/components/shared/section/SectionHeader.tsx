import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";

type SectionHeaderProps = HTMLAttributes<HTMLElement> & {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  action?: ReactNode;
};

export function SectionHeader({
  title,
  description,
  eyebrow,
  action,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <header className={cn("section-header", className)} {...props}>
      <div className="section-header__copy">
        {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
        <div className="section-header__title-row">
          <h2 className="section-header__title">{title}</h2>
          {action ? <div className="section-header__action">{action}</div> : null}
        </div>
        {description ? <p className="section-header__description">{description}</p> : null}
      </div>
    </header>
  );
}
