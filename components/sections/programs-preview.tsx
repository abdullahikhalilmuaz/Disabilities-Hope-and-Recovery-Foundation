import {
  Stethoscope,
  Users,
  Accessibility,
  Megaphone,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/sectionheading";
import styles from "./programs-preview.module.css";

interface Program {
  title: string;
  description: string;
  href: string;
  Icon: typeof Stethoscope;
  accent: string;
}

const PROGRAMS: Program[] = [
  {
    title: "Inclusive Healthcare",
    description:
      "Providing accessible medical care, health screenings, drugs and specialist treatment.",
    href: "/programs/healthcare",
    Icon: Stethoscope,
    accent: "healthcare",
  },
  {
    title: "Rehabilitation Services",
    description:
      "Physical, occupational, speech therapy and counseling to improve quality of life.",
    href: "/programs/rehabilitation",
    Icon: Users,
    accent: "rehab",
  },
  {
    title: "Assistive Devices",
    description:
      "Supplying and distributing wheelchairs, hearing aids, white canes and more.",
    href: "/programs/assistive-devices",
    Icon: Accessibility,
    accent: "devices",
  },
  {
    title: "Advocacy & Inclusion",
    description:
      "Promoting disability rights and inclusion through advocacy, public education and policy engagement.",
    href: "/programs/advocacy",
    Icon: Megaphone,
    accent: "advocacy",
  },
  {
    title: "Capacity Building",
    description:
      "Training caregivers, teachers, health workers and community leaders on inclusive practices.",
    href: "/programs/capacity-building",
    Icon: GraduationCap,
    accent: "capacity",
  },
  {
    title: "Economic Empowerment",
    description:
      "Skills acquisition and vocational training for self-reliance and sustainable livelihoods.",
    href: "/programs/economic-empowerment",
    Icon: Briefcase,
    accent: "economic",
  },
];

export default function ProgramsPreview() {
  return (
    <section className={styles.section} aria-labelledby="programs-heading">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Programs"
          subtitle="We implement life-changing programs that promote inclusive health, independence and opportunity."
        />

        <ul className={styles.grid}>
          {PROGRAMS.map(({ title, description, href, Icon, accent }) => (
            <li className={styles.card} key={title}>
              <span
                className={`${styles.iconWrap} ${styles[accent]}`}
                aria-hidden="true"
              >
                <Icon size={22} />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{description}</p>
              <a
                href={href}
                className={styles.cardLink}
                aria-label={`Learn more about ${title}`}
              >
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}