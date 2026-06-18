"use client";
// components/programs/ProgramPage.tsx

import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Users,
  Activity,
  Accessibility,
  MessageCircle,
  Brain,
  Eye,
  Truck,
  Stethoscope,
  ClipboardList,
  UserCheck,
  Pill,
  FileText,
  Megaphone,
  Scale,
  GraduationCap,
  Briefcase,
  Mic,
  DollarSign,
  Monitor,
  Network,
  BookOpen,
  BarChart2,
  CalendarCheck,
  Flag,
  Smartphone,
  Shield,
  PenLine,
  Ear,
  MapPin,
  Baby,
  HeartPulse,
  TrendingUp,
  Award,
  type LucideIcon,
} from "lucide-react";
import styles from "@/app/programs/program.module.css";

import type { ProgramData } from "@/components/programs/types";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  Accessibility,
  MessageCircle,
  Brain,
  Eye,
  Truck,
  Stethoscope,
  ClipboardList,
  UserCheck,
  Pill,
  FileText,
  Megaphone,
  Scale,
  GraduationCap,
  Briefcase,
  Mic,
  DollarSign,
  Monitor,
  Network,
  BookOpen,
  Handshake,
  BarChart2,
  CalendarCheck,
  Flag,
  Smartphone,
  Shield,
  PenLine,
  Ear,
  MapPin,
  Baby,
  HeartPulse,
  TrendingUp,
  Users,
  Heart,
  Award,
};

function ProgramIcon({ name, size = 22 }: { name: string; size?: number }) {
  const Icon: LucideIcon = ICON_MAP[name] ?? Activity;
  return <Icon size={size} aria-hidden="true" />;
}

/* ─── main component ────────────────────────────────────── */
interface ProgramPageProps {
  data: ProgramData;
}

export default function ProgramPage({ data }: ProgramPageProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* BREADCRUMB */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <div className={styles.breadcrumbInner}>
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">
              <ChevronRight size={13} />
            </span>
            <Link href="/programs">Programs</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">
              <ChevronRight size={13} />
            </span>
            <span className={styles.breadcrumbCurrent}>{data.breadcrumb}</span>
          </div>
        </nav>

        {/* HERO */}
        <section className={styles.hero} aria-labelledby={`hero-${data.slug}`}>
          <div className={styles.heroBg} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://picsum.photos/seed/${data.heroImageSeed}/1600/700`}
              alt=""
              className={styles.heroBgImg}
            />
            <div className={styles.heroBgOverlay} />
          </div>

          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>{data.eyebrow}</p>
            <h1 id={`hero-${data.slug}`} className={styles.heroTitle}>
              {data.title}
            </h1>
            <p className={styles.heroTagline}>{data.tagline}</p>

            <ul
              className={styles.heroHighlights}
              aria-label="Program highlights"
            >
              {data.highlights.map((h) => (
                <li key={h} className={styles.heroHighlightItem}>
                  <span className={styles.heroHighlightIcon} aria-hidden="true">
                    <CheckCircle2 size={16} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICES + HOW WE HELP */}
        <section
          className={styles.services}
          aria-labelledby={`services-${data.slug}`}
        >
          <div className={styles.servicesInner}>
            <div className={styles.servicesLeft}>
              <div>
                <p className={styles.servicesEyebrow}>Our Services</p>
                <h2
                  id={`services-${data.slug}`}
                  className={styles.servicesTitle}
                >
                  What We Provide
                </h2>
              </div>

              <ul className={styles.servicesGrid}>
                {data.services.map((svc) => (
                  <li key={svc.title} className={styles.serviceCard}>
                    <span
                      className={styles.serviceIconWrap}
                      data-accent={svc.accent}
                      aria-hidden="true"
                    >
                      <ProgramIcon name={svc.iconName} size={22} />
                    </span>
                    <div className={styles.serviceBody}>
                      <h3 className={styles.serviceTitle}>{svc.title}</h3>
                      <p className={styles.serviceDesc}>{svc.description}</p>
                      <Link
                        href={svc.href}
                        className={styles.serviceLink}
                        aria-label={`Learn more about ${svc.title}`}
                      >
                        Learn More <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <aside className={styles.servicesRight} aria-label="How we help">
              <p className={styles.howEyebrow}>How We Help</p>
              <ol className={styles.howList}>
                {data.howWeHelp.map((step) => (
                  <li key={step.title} className={styles.howItem}>
                    <span className={styles.howIcon} aria-hidden="true">
                      <CheckCircle2 size={14} />
                    </span>
                    <div>
                      <p className={styles.howTitle}>{step.title}</p>
                      <p className={styles.howDesc}>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link href="/get-help" className={styles.requestBtn}>
                <Users size={16} aria-hidden="true" /> Request Support
              </Link>
            </aside>
          </div>
        </section>

        {/* IMPACT STATS */}
        <section
          className={styles.impact}
          aria-labelledby={`impact-${data.slug}`}
        >
          <div className={styles.impactInner}>
            <h2 id={`impact-${data.slug}`} className={styles.impactTitle}>
              {data.impactTitle}
            </h2>
            <ul className={styles.impactGrid}>
              {data.stats.map((s) => (
                <li key={s.label} className={styles.impactStat}>
                  <span className={styles.impactStatIcon} aria-hidden="true">
                    <ProgramIcon name={s.iconName} size={26} />
                  </span>
                  <p className={styles.impactStatValue}>{s.value}</p>
                  <p className={styles.impactStatLabel}>{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GALLERY + TESTIMONIAL */}
        <section
          className={styles.gallery}
          aria-labelledby={`gallery-${data.slug}`}
        >
          <div className={styles.galleryInner}>
            <div className={styles.galleryLeft}>
              <div>
                <p className={styles.galleryEyebrow}>{data.galleryEyebrow}</p>
                <h2 id={`gallery-${data.slug}`} className={styles.galleryTitle}>
                  {data.galleryTitle}
                </h2>
              </div>

              <ul
                className={styles.galleryGrid}
                aria-label="Program photo gallery"
              >
                {data.gallery.map((img, i) => (
                  <li key={i}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        img.src ||
                        `https://picsum.photos/seed/${img.seed}/480/360`
                      }
                      alt={img.alt}
                      className={styles.galleryImg}
                      loading="lazy"
                      width={480}
                      height={360}
                    />
                  </li>
                ))}
              </ul>

              <Link href="#" className={styles.galleryViewMore}>
                View More Photos <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <aside
              className={styles.testimonialCard}
              aria-label="Beneficiary testimonial"
            >
              <div>
                <span
                  className={styles.testimonialQuoteMark}
                  aria-hidden="true"
                >
                  "
                </span>
                <p className={styles.testimonialQuote}>
                  {data.testimonial.quote}
                </p>
              </div>
              <div>
                <div className={styles.testimonialAuthor}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://picsum.photos/seed/${data.testimonial.avatarSeed}/80/80`}
                    alt={`Portrait of ${data.testimonial.name}`}
                    className={styles.testimonialAvatar}
                    width={44}
                    height={44}
                  />
                  <div>
                    <p className={styles.testimonialName}>
                      {data.testimonial.name}
                    </p>
                    <p className={styles.testimonialRole}>
                      {data.testimonial.role}
                    </p>
                  </div>
                </div>
                <div className={styles.testimonialDots} aria-hidden="true">
                  <span className={`${styles.dot} ${styles.dotActive}`} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className={styles.ctaBanner} aria-label="Call to action">
          <div className={styles.ctaInner}>
            <div className={styles.ctaLeft}>
              <span className={styles.ctaIconWrap} aria-hidden="true">
                <HeartPulse size={48} />
              </span>
              <div>
                <h2 className={styles.ctaTitle}>{data.ctaTitle}</h2>
                <p className={styles.ctaDesc}>{data.ctaDesc}</p>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <Link href="/donate" className={styles.ctaDonateBtn}>
                <Heart size={16} aria-hidden="true" /> Donate Now
              </Link>
              <Link
                href="/get-involved/partner"
                className={styles.ctaPartnerBtn}
              >
                <Handshake size={16} aria-hidden="true" /> Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
