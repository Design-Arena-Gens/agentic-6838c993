import type { Quote } from "@/data/story";
import styles from "./Quotes.module.css";

type Props = {
  quotes: Quote[];
};

export function Quotes({ quotes }: Props) {
  return (
    <section className={styles.wrap}>
      {quotes.map((quote) => (
        <figure key={quote.source}>
          <blockquote className={styles.quote}>{quote.text}</blockquote>
          <figcaption className={styles.source}>{quote.source}</figcaption>
        </figure>
      ))}
    </section>
  );
}
