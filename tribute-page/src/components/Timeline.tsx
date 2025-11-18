import type { TimelineEvent } from "@/data/story";
import styles from "./Timeline.module.css";

type Props = {
  events: TimelineEvent[];
};

export function Timeline({ events }: Props) {
  return (
    <div className={styles.timeline}>
      {events.map((event) => (
        <article key={event.year} className={styles.event}>
          <span className={styles.badge}>{event.year}</span>
          <div className={styles.content}>
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.description}>{event.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
