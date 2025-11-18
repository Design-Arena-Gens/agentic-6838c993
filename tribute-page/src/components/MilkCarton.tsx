import Image from "next/image";
import styles from "./MilkCarton.module.css";

export function MilkCarton() {
  return (
    <div className={styles.carton}>
      <div className={styles.top}>
        <span>Have You Seen</span>
        <span className={styles.missing}>THIS MAN?</span>
      </div>
      <div className={styles.body}>
        <div className={styles.photo}>
          <Image
            src="/images/rodriguez-illustration.svg"
            alt="Stylized portrait of Sixto Rodríguez on a milk carton"
            width={240}
            height={300}
            priority
          />
          <dl className={styles.details}>
            <dt>Alias</dt>
            <dd>Sugar Man</dd>
            <dt>Last Seen</dt>
            <dd>Detroit, 1970s</dd>
            <dt>Occupation</dt>
            <dd>Poet &amp; Musician</dd>
            <dt>Reward</dt>
            <dd>Truth &amp; Melody</dd>
          </dl>
        </div>
        <div className={styles.footnote}>
          If you have any information about Rodríguez&apos;s whereabouts, stories, or the people
          his songs saved, please report below. The search never ended—it just became a chorus.
        </div>
      </div>
      <span className={styles.tear} aria-hidden />
    </div>
  );
}
