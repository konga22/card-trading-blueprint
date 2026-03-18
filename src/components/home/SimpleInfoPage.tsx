import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import styles from "./home.module.css";
import { PageScaffold } from "./PageScaffold";

type SimpleInfoCard = {
  label: string;
  title: string;
  description: string;
};

type SimpleInfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: SimpleInfoCard[];
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
};

export function SimpleInfoPage({
  eyebrow,
  title,
  description,
  cards,
  primaryAction,
  secondaryAction,
}: SimpleInfoPageProps) {
  return (
    <PageScaffold
      eyebrow={eyebrow}
      title={title}
      description={description}
      actions={
        <>
          {secondaryAction ? (
            <SecondaryButton href={secondaryAction.href}>
              {secondaryAction.label}
            </SecondaryButton>
          ) : null}
          {primaryAction ? (
            <PrimaryButton href={primaryAction.href}>
              {primaryAction.label}
            </PrimaryButton>
          ) : null}
        </>
      }
      aside={
        <div className={styles.infoCard}>
          <StatusBadge tone="neutral">안내</StatusBadge>
          <p className={styles.infoText}>
            이 페이지는 홈에서 바로 내려가지 않고, 별도 화면으로 분리된 정보를 담고 있습니다.
          </p>
        </div>
      }
    >
      <div className={styles.infoGrid}>
        {cards.map((card) => (
          <CardPanel key={card.title} className={styles.infoCard}>
            <div className={styles.infoLabel}>{card.label}</div>
            <h2 className={styles.infoTitle}>{card.title}</h2>
            <p className={styles.infoText}>{card.description}</p>
          </CardPanel>
        ))}
      </div>
    </PageScaffold>
  );
}

