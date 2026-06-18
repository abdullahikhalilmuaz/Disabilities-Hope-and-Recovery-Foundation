import type { Metadata } from "next";
import {
  Target,
  Eye,
  Diamond,
  Users,
  Accessibility,
  HeartPulse,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "./about.module.css";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";

export const metadata: Metadata = {
  title: "About Us | DHRF – Disability Hope & Recovery Foundation Nigeria",
  description:
    "Learn about DHRF (Disability Hope & Recovery Foundation), our mission, vision, values, leadership team, and our commitment to empowering persons with disabilities across Nigeria through inclusive healthcare, rehabilitation and advocacy.",
  keywords:
    "about DHRF, Disability Hope Recovery Foundation mission, disability NGO Nigeria, inclusive health advocacy, disability empowerment team Nigeria",
  openGraph: {
    title: "About DHRF – Disability Hope & Recovery Foundation",
    description:
      "We are a non-governmental organization committed to advancing inclusive health, rehabilitation, and empowerment for persons with disabilities and vulnerable individuals.",
    url: "https://dhrf.org.ng/about",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About DHRF – Disability Hope & Recovery Foundation",
    description:
      "Non-governmental organization advancing inclusive health, rehabilitation, and empowerment for persons with disabilities across Nigeria.",
  },
  alternates: { canonical: "https://dhrf.org.ng/about" },
};

/* ─── data ─────────────────────────────────────────── */
const VALUES = [
  "Inclusion",
  "Dignity",
  "Compassion",
  "Accountability",
  "Excellence",
  "Collaboration",
];

const STATS = [
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

const TEAM = [
  {
    name: "Abdullahi H. Mu'az",
    role: "Founder / Executive Director",
    image: "https://picsum.photos/seed/dhrf-team1/400/400",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Maryam A. Usman",
    role: "Program Director",
    image: "https://picsum.photos/seed/dhrf-team2/400/400",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ibrahim S. Lawal",
    role: "Operations Manager",
    image: "https://picsum.photos/seed/dhrf-team3/400/400",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Fatima R. Yusuf",
    role: "Finance & Admin Lead",
    image: "https://picsum.photos/seed/dhrf-team4/400/400",
    linkedin: "https://linkedin.com",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div
        className={"kantra"}
        style={{
          
        }}
      >
        <main id="kantrast">
          {/* ── HERO BANNER ── */}
          <section
            className={styles.heroBanner}
            aria-labelledby="about-hero-heading"
          >
            {/* background image */}
            <div className={styles.heroBg} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/dhrf-about-hero/1600/700"
                alt=""
                className={styles.heroBgImg}
              />
              <div className={styles.heroBgOverlay} />
            </div>

            <div className={styles.heroContent}>
              <p className={styles.heroEyebrow}>Who We Are</p>
              <h1 id="about-hero-heading" className={styles.heroTitle}>
                About Us
              </h1>
              <p className={styles.heroDesc}>
                We are a non-governmental organization committed to advancing
                inclusive health, rehabilitation, and empowerment for persons
                with disabilities and vulnerable individuals.
              </p>
            </div>
          </section>

          {/* ── OUR STORY ── */}
          <section className={styles.story} aria-labelledby="story-heading">
            <div className={styles.storyInner}>
              <div className={styles.storyText}>
                <p className={styles.eyebrow}>Our Story</p>
                <h2 id="story-heading" className={styles.storyTitle}>
                  Building a More Inclusive and Compassionate World
                </h2>
                <p className={styles.storyBody}>
                  Disability Hope &amp; Recovery Foundation (DHRF) was
                  established to address the barriers faced by persons with
                  disabilities in accessing healthcare, rehabilitation,
                  education, and economic opportunities. We work in communities,
                  partner with stakeholders, and advocate for policies that
                  promote dignity, equality, and full participation for all.
                </p>
              </div>
              <div className={styles.storyImageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/dhrf-story/800/560"
                  alt="DHRF team members distributing medicine and support to community members"
                  className={styles.storyImage}
                  width={780}
                  height={520}
                />
              </div>
            </div>
          </section>

          {/* ── MISSION / VISION / VALUES ── */}
          <section
            className={styles.mvv}
            aria-label="Mission, Vision and Values"
          >
            <div className={styles.mvvInner}>
              {/* Mission */}
              <article className={styles.mvvCard}>
                <div className={styles.mvvIconWrap} data-accent="green">
                  <Target size={26} aria-hidden="true" />
                </div>
                <h3 className={styles.mvvTitle}>Our Mission</h3>
                <p className={styles.mvvBody}>
                  To advance inclusive health and wellbeing by providing
                  accessible medical care, rehabilitation services, assistive
                  devices, advocacy, and empowerment programs for persons with
                  disabilities and vulnerable individuals.
                </p>
              </article>

              {/* Vision */}
              <article className={styles.mvvCard}>
                <div className={styles.mvvIconWrap} data-accent="blue">
                  <Eye size={26} aria-hidden="true" />
                </div>
                <h3 className={styles.mvvTitle}>Our Vision</h3>
                <p className={styles.mvvBody}>
                  A society where every person with a disability enjoys good
                  health, independence, dignity, and equal opportunities to
                  participate and thrive.
                </p>
              </article>

              {/* Values */}
              <article className={styles.mvvCard}>
                <div className={styles.mvvIconWrap} data-accent="purple">
                  <Diamond size={26} aria-hidden="true" />
                </div>
                <h3 className={styles.mvvTitle}>Our Values</h3>
                <ul className={styles.valuesList} aria-label="Our core values">
                  {VALUES.map((v) => (
                    <li key={v}>
                      <CheckCircle2
                        size={15}
                        className={styles.valuesCheck}
                        aria-hidden="true"
                      />
                      {v}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          {/* ── IMPACT AT A GLANCE ── */}
          <section className={styles.impact} aria-labelledby="impact-heading">
            <div className={styles.impactInner}>
              {/* left label col */}
              <div className={styles.impactLabel}>
                <h2 id="impact-heading" className={styles.impactTitle}>
                  Our Impact at a Glance
                </h2>
                <p className={styles.impactDesc}>
                  Through our programs and partnerships, we continue to make a
                  meaningful difference in the lives of many.
                </p>
                <Link href="/impact" className={styles.impactBtn}>
                  See Our Impact <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              {/* stats */}
              {STATS.map(({ value, label, description, Icon }) => (
                <article className={styles.stat} key={label}>
                  <span className={styles.statIcon} aria-hidden="true">
                    <Icon size={24} />
                  </span>
                  <p className={styles.statValue}>{value}</p>
                  <p className={styles.statLabel}>{label}</p>
                  <p className={styles.statDesc}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── LEADERSHIP / TEAM ── */}
          <section className={styles.team} aria-labelledby="team-heading">
            <div className={styles.teamInner}>
              <p className={styles.eyebrow}>Our Leadership</p>
              <h2 id="team-heading" className={styles.teamTitle}>
                Meet the Team
              </h2>
              <p className={styles.teamSubtitle}>
                Passionate people dedicated to creating change and building a
                more inclusive society.
              </p>

              <ul className={styles.teamGrid}>
                {TEAM.map(({ name, role, image, linkedin }) => (
                  <li key={name} className={styles.teamCard}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={`Portrait of ${name}, ${role}`}
                      className={styles.teamPhoto}
                      width={340}
                      height={320}
                    />
                    <div className={styles.teamInfo}>
                      <p className={styles.teamName}>{name}</p>
                      <p className={styles.teamRole}>{role}</p>
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} on LinkedIn`}
                        className={styles.teamLinkedin}
                      >
                        <FaLinkedin size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.teamFooter}>
                <Link href="/about/team" className={styles.teamViewAll}>
                  View Full Team <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
