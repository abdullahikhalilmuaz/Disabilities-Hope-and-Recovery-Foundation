import { Users, Accessibility, HeartPulse, Handshake } from "lucide-react";
import styles from "./impact.module.css";

interface Stat {
  label: string;
  value: string;
  description: string;
  Icon: typeof Users;
}

const STATS: Stat[] = [
  {
    value: "10,000+",
    label: "Lives Reached",
    description: "Across Nigeria and beyond",
    Icon: Users,
  },
  {
    value: "2,500+",
    label: "Assistive Devices",
    description: "Distributed to those in need",
    Icon: Accessibility,
  },
  {
    value: "500+",
    label: "Therapy Sessions",
    description: "Delivered with care",
    Icon: HeartPulse,
  },
  {
    value: "100+",
    label: "Community Programs",
    description: "Implemented successfully",
    Icon: Handshake,
  },
];

export default function Impact() {
  return (
    <section className={styles.section} aria-label="Our impact in numbers">
      <div className={styles.card}>
        {STATS.map(({ value, label, description, Icon }) => (
          <div className={styles.stat} key={label}>
            <span className={styles.iconWrap} aria-hidden="true">
              <Icon size={22} />
            </span>
            <div>
              <p className={styles.value}>{value}</p>
              <p className={styles.label}>{label}</p>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}