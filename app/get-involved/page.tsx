import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Handshake,
  Heart,
  Megaphone,
  TrendingUp,
  Star,
  ArrowRight,
} from "lucide-react";

import "./getinvolved.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Get Involved | DHRF",
  description:
    "Join DHRF in creating change. Volunteer, partner with us, donate, advocate, fundraise, or become an ambassador — your time, skills and resources transform lives.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 🖼️  IMAGE PLACEHOLDERS
// Replace each string with your real photo path when images are ready.
// ─────────────────────────────────────────────────────────────────────────────
const IMAGES = {
  /**
   * Hero — DHRF volunteers smiling, one holding a DHRF branded box.
   * Group shot in matching DHRF shirts outdoors.
   */
  hero: "https://placehold.co/900x500/1e4080/ffffff?text=Get+Involved+Hero+Photo",

  /** Volunteer card — group of DHRF volunteers together */
  volunteer: "https://placehold.co/600x400/c9d9e8/1B3A6B?text=Volunteer+Photo",

  /** Partner With Us card — handshake / partnership photo */
  partner: "https://placehold.co/600x400/c9d9e8/1B3A6B?text=Partner+Photo",

  /** Donate card — hands placing coin in donation jar */
  donate: "https://placehold.co/600x400/c9d9e8/1B3A6B?text=Donate+Photo",

  /** Advocate card — person speaking / campaigning for inclusion */
  advocate: "https://placehold.co/600x400/c9d9e8/1B3A6B?text=Advocate+Photo",

  /** Fundraise card — runners at a fundraising event */
  fundraise: "https://placehold.co/600x400/c9d9e8/1B3A6B?text=Fundraise+Photo",

  /** Ambassador card — ambassador group photo with DHRF branding */
  ambassador:
    "https://placehold.co/600x400/c9d9e8/1B3A6B?text=Ambassador+Photo",
};

// ─────────────────────────────────────────────────────────────────────────────
// Ways to get involved — 3×2 grid
// ─────────────────────────────────────────────────────────────────────────────
const ways = [
  {
    image: IMAGES.volunteer,
    imageAlt: "Group of DHRF volunteers smiling together",
    icon: <Users size={16} />,
    iconColor: "#1B3A6B",
    title: "Volunteer",
    description:
      "Give your time and skills to support our programs and community activities.",
    linkLabel: "Become a Volunteer",
    href: "/get-involved/volunteer",
  },
  {
    image: IMAGES.partner,
    imageAlt: "Two people shaking hands in a partnership agreement",
    icon: <Handshake size={16} />,
    iconColor: "#2E8B57",
    title: "Partner With Us",
    description:
      "Partner with us as an organization or institution to create greater impact.",
    linkLabel: "Become a Partner",
    href: "/get-involved/partner",
  },
  {
    image: IMAGES.donate,
    imageAlt: "Hands placing coins into a donation jar",
    icon: <Heart size={16} />,
    iconColor: "#e53e3e",
    title: "Donate",
    description:
      "Your donations help us deliver essential services and reach more lives.",
    linkLabel: "Donate Now",
    href: "/donate",
  },
  {
    image: IMAGES.advocate,
    imageAlt: "Person advocating for disability inclusion at a community event",
    icon: <Megaphone size={16} />,
    iconColor: "#dd6b20",
    title: "Advocate",
    description:
      "Use your voice to promote inclusion, accessibility and equal opportunities.",
    linkLabel: "Learn More",
    href: "/get-involved/advocate",
  },
  {
    image: IMAGES.fundraise,
    imageAlt: "Runners participating in a charity fundraising event",
    icon: <TrendingUp size={16} />,
    iconColor: "#2E8B57",
    title: "Fundraise",
    description:
      "Organize a fundraiser or campaign to support our cause in your community.",
    linkLabel: "Start a Fundraiser",
    href: "/get-involved/fundraise",
  },
  {
    image: IMAGES.ambassador,
    imageAlt: "DHRF brand ambassadors gathered at an awareness event",
    icon: <Star size={16} />,
    iconColor: "#d69e2e",
    title: "Become an Ambassador",
    description:
      "Represent DHRF and create awareness about disability inclusion.",
    linkLabel: "Join the Movement",
    href: "/get-involved/ambassador",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />
      {/* ══════════════════════════════════════════════════════
          1. HERO
          Dark navy. Text left. Photo right with gradient fade.
          🖼️  Replace IMAGES.hero above to update the photo.
      ══════════════════════════════════════════════════════ */}
      <section className="gi-hero" aria-label="Get Involved hero">
        <div className="gi-hero__inner">
          {/* Left — content */}
          <div className="gi-hero__content">
            <p className="gi-hero__eyebrow">Get Involved</p>
            <h1 className="gi-hero__title">
              Be Part of the Change.
              <br />
              Make a Lasting Impact.
            </h1>
            <p className="gi-hero__description">
              Your time, skills, voice and resources can transform lives and
              build a more inclusive society for all.
            </p>
          </div>

          {/* Right — hero photo */}
          <div className="gi-hero__image-wrap">
            {/* 🖼️  Replace IMAGES.hero above */}
            <Image
              src={IMAGES.hero}
              alt="DHRF volunteers in matching shirts smiling together, one holding a branded DHRF box"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. WAYS TO GET INVOLVED
          Centred heading + 3×2 photo-top card grid.
          🖼️  Replace IMAGES.volunteer etc. above per card.
      ══════════════════════════════════════════════════════ */}
      <section className="gi-ways" aria-labelledby="ways-heading">
        <div className="gi-ways__inner">
          <h2 id="ways-heading" className="gi-ways__title">
            Ways to Get Involved
          </h2>

          <div className="gi-ways__grid" role="list">
            {ways.map(
              ({
                image,
                imageAlt,
                icon,
                iconColor,
                title,
                description,
                linkLabel,
                href,
              }) => (
                <article key={title} className="gi-way-card" role="listitem">
                  {/* Photo */}
                  <div className="gi-way-card__img">
                    {/* 🖼️  Replace the matching IMAGES.* value above */}
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />
                    {/* Icon pill overlay */}
                    <span
                      className="gi-way-card__icon-pill"
                      style={{ color: iconColor }}
                      aria-hidden="true"
                    >
                      {icon}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="gi-way-card__body">
                    <h3 className="gi-way-card__title">{title}</h3>
                    <p className="gi-way-card__desc">{description}</p>
                    <Link href={href} className="gi-way-card__link">
                      {linkLabel}
                      <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. BOTTOM CTA BANNER
          Light grey bg. Heart icon + text left. Button right.
      ══════════════════════════════════════════════════════ */}
      <section className="gi-cta" aria-label="Get involved call to action">
        <div className="gi-cta__inner">
          <div className="gi-cta__left">
            <div className="gi-cta__icon" aria-hidden="true">
              <Heart size={22} />
            </div>
            <p className="gi-cta__text">
              Together, we can build a society where everyone thrives with
              dignity and independence.
            </p>
          </div>
          <Link href="/get-involved/volunteer" className="gi-cta__btn">
            Get Involved Today
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
