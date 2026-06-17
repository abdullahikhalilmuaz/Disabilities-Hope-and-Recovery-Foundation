import SectionHeading from "@/components/ui/sectionheading";
import styles from "./partners.module.css";

const PARTNERS = [
  "Federal Ministry of Health",
  "World Health Organization",
  "CBM",
  "Sightsavers",
  "NEMA",
  "St. John's Medical Centre",
];

export default function Partners() {
  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Our Partners"
          title="Working Together for Greater Impact"
        />

        <ul className={styles.logoGrid}>
          {PARTNERS.map((name) => (
            <li className={styles.logoCard} key={name}>
              <span className={styles.logoText}>{name}</span>
            </li>
          ))}
        </ul>

        <div className={styles.dots} aria-hidden="true">
          <span className={styles.dotActive} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </section>
  );
}