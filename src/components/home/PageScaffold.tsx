import type { ReactNode } from "react";

import styles from "./home.module.css";

type PageScaffoldProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
};

export function PageScaffold({
  eyebrow,
  title,
  description,
  actions,
  aside,
  children,
}: PageScaffoldProps) {
  return (
    <main className={styles.routePage}>
      <section className={styles.routeHero}>
        <div className={styles.routeCopy}>
          {eyebrow ? <div className={styles.routeEyebrow}>{eyebrow}</div> : null}
          <h1 className={styles.routeTitle}>{title}</h1>
          <p className={styles.routeDescription}>{description}</p>
          {actions ? <div className={styles.routeActions}>{actions}</div> : null}
        </div>
        {aside ? <aside className={styles.routeAside}>{aside}</aside> : null}
      </section>

      <div className={styles.routeBody}>{children}</div>
    </main>
  );
}
