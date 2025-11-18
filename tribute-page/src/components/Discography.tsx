import type { DiscographyItem } from "@/data/story";
import styles from "./Discography.module.css";

type Props = {
  items: DiscographyItem[];
};

export function Discography({ items }: Props) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.title} className={styles.item}>
          <span className={styles.spine}>{item.title.toUpperCase()}</span>
          <div className={styles.details}>
            <p className={styles.year}>{item.year}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.highlight}>{item.highlight}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
