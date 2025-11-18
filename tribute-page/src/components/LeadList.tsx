import type { Lead } from "@/data/story";
import styles from "./LeadList.module.css";

type Props = {
  leads: Lead[];
};

export function LeadList({ leads }: Props) {
  return (
    <div className={styles.list}>
      {leads.map((lead) => (
        <article key={lead.title} className={styles.card}>
          <h3 className={styles.title}>{lead.title}</h3>
          <p className={styles.location}>{lead.location}</p>
          <p className={styles.description}>{lead.description}</p>
        </article>
      ))}
    </div>
  );
}
