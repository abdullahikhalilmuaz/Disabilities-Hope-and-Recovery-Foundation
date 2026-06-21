import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Accessibility,
  Heart,
  HandHelping,
  Activity,
  GraduationCap,
  Briefcase,
  Megaphone,
  TreePine,
  Quote,
} from "lucide-react";
import { FaHeart, FaHandshake } from "react-icons/fa";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import "./impact.css";

// ─────────────────────────────────────────────────────────────────────────────
// SEO
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Our Impact | DHRF",
  description:
    "See how DHRF is creating real change — transforming lives and building hope for persons with disabilities and vulnerable communities across Nigeria.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 🖼️  IMAGE PLACEHOLDERS
// Replace each string below when real photos are available.
// ─────────────────────────────────────────────────────────────────────────────
const IMAGES = {
  /** Hero photo — joyful person with raised hands, wheelchair visible */
  hero: "https://placehold.co/900x500/1e4080/ffffff?text=Impact+Hero+Photo",

  /** Testimonial photo — woman at sewing machine */
  testimonial:
    "https://placehold.co/700x520/e2e8f0/64748b?text=Testimonial+Photo+(Woman+with+Sewing+Machine)",
};

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

/** Hero top stats — 4 colored counters */
const heroStats = [
  {
    icon: <Users size={30} />,
    value: "10,000+",
    label: "Lives Reached",
    sub: "Across Nigeria\nand beyond",
    colorClass: "stat-blue",
  },
  {
    icon: <Accessibility size={30} />,
    value: "2,500+",
    label: "Assistive Devices",
    sub: "Distributed to\nthose in need",
    colorClass: "stat-green",
  },
  {
    icon: <Heart size={30} />,
    value: "500+",
    label: "Therapy Sessions",
    sub: "Delivered with\ncare",
    colorClass: "stat-red",
  },
  {
    icon: <HandHelping size={30} />,
    value: "100+",
    label: "Community Programs",
    sub: "Implemented\nsuccessfully",
    colorClass: "stat-orange",
  },
];

/** Five impact area cards */
const impactAreas = [
  {
    icon: <Activity size={22} />,
    label: "Health &\nRehabilitation",
    href: "/programs/rehabilitation",
  },
  {
    icon: <GraduationCap size={22} />,
    label: "Education &\nSkills",
    href: "/programs/caregiver-training",
  },
  {
    icon: <Accessibility size={22} />,
    label: "Assistive\nDevices",
    href: "/programs/assistive-devices",
  },
  {
    icon: <Briefcase size={22} />,
    label: "Economic\nEmpowerment",
    href: "/programs/economic-empowerment",
  },
  {
    icon: <Megaphone size={22} />,
    label: "Advocacy &\nInclusion",
    href: "/programs/advocacy",
  },
];

/** Impact in numbers — 4 bold counters */
const impactNumbers = [
  { value: "120+", label: "Communities Reached" },
  { value: "28", label: "States Across Nigeria" },
  { value: "75+", label: "Partner Organizations" },
  { value: "150+", label: "Volunteers Engaged" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function ImpactPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          1. HERO
          Dark navy background, text left, photo right.
          🖼️  Replace IMAGES.hero above to update the photo.
      ══════════════════════════════════════════════════════ */}
      <Navbar />
      <section className="impact-hero" aria-label="Impact page hero">
        <div className="impact-hero__inner">
          {/* Left — content */}
          <div className="impact-hero__content">
            <p className="impact-hero__eyebrow">Our Impact</p>
            <h1 className="impact-hero__title">
              Creating Real Change
              <br />
              Transforming Lives
              <br />
              Building Hope.
            </h1>
            <p className="impact-hero__description">
              Our work is driven by compassion and measured by the positive
              change we create in the lives of persons with disabilities and
              vulnerable individuals.
            </p>
          </div>

          {/* Right — hero photo */}
          <div className="impact-hero__image-wrap">
            {/* 🖼️  Replace IMAGES.hero to update this photo */}
            <Image
              src={IMAGES.hero}
              alt="A joyful young man raises his hands in celebration, with a wheelchair visible beside him"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. STATS BAR
          White card lifted up, overlapping the hero bottom.
          4 colored stats with icons.
      ══════════════════════════════════════════════════════ */}
      <section className="impact-stats-bar" aria-label="Key impact statistics">
        <div className="impact-stats-bar__inner">
          <div className="impact-stats-bar__card" role="list">
            {heroStats.map(({ icon, value, label, sub, colorClass }) => (
              <div
                key={label}
                className={`impact-stat-item ${colorClass}`}
                role="listitem"
              >
                <span className="impact-stat-item__icon" aria-hidden="true">
                  {icon}
                </span>
                <p className="impact-stat-item__value">{value}</p>
                <p className="impact-stat-item__label">{label}</p>
                <p className="impact-stat-item__sub">
                  {sub.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < sub.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. OUR IMPACT AREAS
          5 cards in a row — each has a green circle icon + label.
      ══════════════════════════════════════════════════════ */}
      <section className="impact-areas" aria-labelledby="impact-areas-heading">
        <div className="impact-areas__inner">
          <h2 id="impact-areas-heading" className="impact-areas__title">
            Our Impact Areas
          </h2>

          <div className="impact-areas__grid" role="list">
            {impactAreas.map(({ icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="impact-area-card"
                role="listitem"
                aria-label={`Impact area: ${label.replace("\n", " ")}`}
              >
                <span className="impact-area-card__icon" aria-hidden="true">
                  {icon}
                </span>
                <span className="impact-area-card__label">
                  {label.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < label.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. IMPACT IN NUMBERS
          Light grey background, centred title + 4 big numbers.
      ══════════════════════════════════════════════════════ */}
      <section
        className="impact-numbers"
        aria-labelledby="impact-numbers-heading"
      >
        <div className="impact-numbers__inner">
          <h2 id="impact-numbers-heading" className="impact-numbers__title">
            Impact in Numbers
          </h2>
          <p className="impact-numbers__sub">
            A snapshot of our progress and the lives we continue to touch.
          </p>

          <div className="impact-numbers__grid" role="list">
            {impactNumbers.map(({ value, label }) => (
              <div key={label} className="impact-number-stat" role="listitem">
                <p className="impact-number-stat__value">{value}</p>
                <p className="impact-number-stat__label">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. TESTIMONIAL
          Big quote icon, italic text, author name.
          Right side: photo of woman with sewing machine.
          🖼️  Replace IMAGES.testimonial to update the photo.
      ══════════════════════════════════════════════════════ */}
      <section
        className="impact-testimonial"
        aria-label="Beneficiary testimonial"
      >
        <div className="impact-testimonial__inner">
          {/* Left — quote */}
          <div>
            <div className="impact-testimonial__quote-icon" aria-hidden="true">
              <Quote size={64} strokeWidth={1.5} />
            </div>
            <blockquote>
              <p className="impact-testimonial__text">
                DHRF gave me a wheelchair and also helped me learn a skill.
                Today, I am earning and supporting my family. I am living with
                dignity again.
              </p>
            </blockquote>
            <p className="impact-testimonial__author">— Amina, Beneficiary</p>
          </div>

          {/* Right — testimonial photo */}
          <div className="impact-testimonial__image">
            {/* 🖼️  Replace IMAGES.testimonial to update this photo */}
            <Image
              src={IMAGES.testimonial}
              alt="Amina, a DHRF beneficiary, sitting at her sewing machine with a confident smile"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. BOTTOM CTA BANNER
          Dark navy, heart icon left, title + subtitle,
          two buttons: "Donate Now" (green) + "Partner With Us" (outline).
      ══════════════════════════════════════════════════════ */}
      <section className="impact-cta" aria-label="Support call to action">
        <div className="impact-cta__inner">
          {/* Left */}
          <div className="impact-cta__left">
            <div className="impact-cta__icon-wrap" aria-hidden="true">
              <FaHeart size={22} />
            </div>
            <div>
              <h2 className="impact-cta__title">Be Part of This Impact</h2>
              <p className="impact-cta__sub">
                Your support helps us progress and the lives we and create
                lasting to touch.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="impact-cta__actions">
            <Link href="/donate" className="impact-cta__btn-green">
              <FaHeart size={15} aria-hidden="true" />
              Donate Now
            </Link>
            <Link
              href="/get-involved/partner"
              className="impact-cta__btn-outline"
            >
              <FaHandshake size={16} aria-hidden="true" />
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
