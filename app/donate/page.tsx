"use client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Eye,
  Sparkles,
  Heart,
  BookOpen,
  Users,
  Megaphone,
  Lock,
  Phone,
  Mail,
  ArrowRight,
  Building2,
  Headphones,
  UserPlus,
} from "lucide-react";

import DonationWidget from "@/components/donate/donation-widget";
import CopyButton from "@/components/donate/copy-button";
import "./donate.css";

// ─────────────────────────────────────────────────────────────────────────────
// SEO
// ─────────────────────────────────────────────────────────────────────────────
const metadata: Metadata = {
  title: "Donate | DHRF – Support Persons with Disabilities",
  description:
    "Your donation helps DHRF provide healthcare, rehabilitation, assistive devices, education and advocacy for persons with disabilities across Nigeria. Donate securely via Paystack or bank transfer.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 🖼️  IMAGE PLACEHOLDERS
// Replace each string when real photos are ready.
// ─────────────────────────────────────────────────────────────────────────────
const IMAGES = {
  /**
   * Hero — DHRF worker (woman with braids in green DHRF shirt)
   * smiling while helping a young man in a wheelchair.
   */
  hero: "https://placehold.co/800x800/c9d9e8/1B3A6B?text=Hero+Photo",

  /**
   * Donor avatars — 3 small overlapping headshots shown beside
   * "Join 500+ donors making a difference today"
   */
  avatar1: "https://placehold.co/34x34/c9d9e8/1B3A6B?text=A",
  avatar2: "https://placehold.co/34x34/b8ccd8/1B3A6B?text=B",
  avatar3: "https://placehold.co/34x34/a8bcc8/1B3A6B?text=C",

  /**
   * Bank section illustration — a stylised bank building with
   * a green shield/checkmark. Replace with your SVG or PNG.
   */
  bankIllustration:
    "https://placehold.co/220x200/e0ede0/1B3A6B?text=Bank+Illustration",
};

// ─────────────────────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────────────────────
const trustBadges = [
  {
    icon: <Shield size={18} />,
    label: "Secure & Safe",
    sub: "Your donation is protected",
  },
  {
    icon: <Eye size={18} />,
    label: "Transparent",
    sub: "100% of donations go to our mission",
  },
  {
    icon: <Sparkles size={18} />,
    label: "Impactful",
    sub: "Real change in real communities",
  },
];

const impactCards = [
  {
    icon: <Users size={22} />,
    value: "500+",
    label: "Beneficiaries Supported",
    desc: "Persons with disabilities served",
  },
  {
    icon: <BookOpen size={22} />,
    value: "20+",
    label: "Education & Training",
    desc: "Programs running nationwide",
  },
  {
    icon: <Heart size={22} />,
    value: "15+",
    label: "Healthcare Initiatives",
    desc: "Medical support programs",
  },
  {
    icon: <Users size={22} />,
    value: "30+",
    label: "Communities Reached",
    desc: "Across Nigeria",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function DonatePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          1. HERO
          Light cream bg. Title left. Circular photo right.
          Trust badges below text. Donor avatars.
          🖼️  Replace IMAGES.hero above to update the hero photo.
      ══════════════════════════════════════════════════════ */}
      <section className="donate-hero" aria-label="Donate page hero">
        <div className="donate-hero__inner">
          {/* LEFT — content */}
          <div className="donate-hero__content">
            {/* "Support a Better Tomorrow" pill badge */}
            <span className="donate-hero__badge">
              <Heart size={13} aria-hidden="true" />
              Support a Better Tomorrow
            </span>

            <h1 className="donate-hero__title">
              Your Donation
              <br />
              Creates <span>Real</span>
              <br />
              Change
            </h1>

            <p className="donate-hero__description">
              Every contribution helps us empower persons with disabilities,
              provide healthcare, promote education, and build inclusive
              communities.
            </p>

            {/* Donor social proof */}
            <div className="donate-hero__donors">
              <div className="donate-hero__avatars" aria-hidden="true">
                {[IMAGES.avatar1, IMAGES.avatar2, IMAGES.avatar3].map(
                  (src, i) => (
                    <div key={i} className="donate-hero__avatar">
                      {/* 🖼️  Replace IMAGES.avatar1–3 above */}
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="34px"
                      />
                    </div>
                  ),
                )}
              </div>
              <p className="donate-hero__donor-text">
                Join <strong>500+ donors</strong> making
                <br />a difference today
              </p>
            </div>

            {/* Trust badges */}
            <div
              className="donate-hero__trust"
              aria-label="Why your donation is safe"
            >
              {trustBadges.map(({ icon, label, sub }) => (
                <div key={label} className="donate-hero__trust-item">
                  <span className="donate-hero__trust-icon" aria-hidden="true">
                    {icon}
                  </span>
                  <span className="donate-hero__trust-label">{label}</span>
                  <span className="donate-hero__trust-sub">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — circular hero photo */}
          <div className="donate-hero__image-wrap">
            <div className="donate-hero__image-circle">
              {/* 🖼️  Replace IMAGES.hero above to change this photo */}
              <Image
                src={IMAGES.hero}
                alt="A DHRF healthcare worker in a green shirt smiling while supporting a young man in a wheelchair"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1023px) 280px, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. CHOOSE YOUR DONATION (interactive)
          One-time / Monthly tabs, preset amounts, custom input,
          summary row, Donate Now button.
          All interactivity is in DonationWidget (client component).
      ══════════════════════════════════════════════════════ */}
      <DonationWidget />

      {/* ══════════════════════════════════════════════════════
          3. CHOOSE A WAY TO DONATE
          Two method cards: Paystack (recommended) + Bank Transfer.
          Then a note banner below both.
      ══════════════════════════════════════════════════════ */}
      <section className="donate-methods" aria-labelledby="methods-heading">
        <div className="donate-methods__inner">
          <div className="donate-methods__header">
            <h2 id="methods-heading" className="donate-methods__title">
              Choose a Way to Donate
            </h2>
            <p className="donate-methods__sub">
              Select your preferred method to support our mission
            </p>
          </div>

          <div className="donate-methods__grid">
            {/* ── Paystack card ─────────────────────────── */}
            <div
              className="donate-method-card donate-method-card--recommended"
              aria-label="Donate with Paystack (recommended)"
            >
              <span className="donate-method-card__badge">Recommended</span>

              {/* Paystack wordmark — text-based since we can't load external logos */}
              <div className="donate-method-card__logo" aria-label="Paystack">
                <svg
                  width="110"
                  height="24"
                  viewBox="0 0 110 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect width="8" height="8" rx="2" fill="#00C3F7" />
                  <rect y="10" width="8" height="8" rx="2" fill="#0BA4DB" />
                  <rect
                    x="10"
                    y="5"
                    width="8"
                    height="8"
                    rx="2"
                    fill="#00C3F7"
                  />
                  <text
                    x="24"
                    y="16"
                    fontFamily="sans-serif"
                    fontWeight="700"
                    fontSize="13"
                    fill="#1a202c"
                  >
                    paystack
                  </text>
                </svg>
              </div>

              <h3 className="donate-method-card__title">
                Donate with Paystack
              </h3>

              <ul className="donate-method-card__list">
                {[
                  "Pay securely with your card",
                  "Support from any bank",
                  "Instant payment confirmation",
                  "Mobile Money (coming soon)",
                ].map((item) => (
                  <li key={item}>
                    <span
                      className="donate-method-card__check"
                      aria-hidden="true"
                    >
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path
                          d="M1 3.5L3.5 6L8 1"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* This button triggers Paystack — wire up via DonationWidget or Paystack inline */}
              <button
                className="donate-method-card__btn-primary"
                onClick={() =>
                  alert("Paystack integration: initialise PaystackPop here")
                }
                aria-label="Donate with Paystack"
              >
                Donate with Paystack
                <ArrowRight size={15} aria-hidden="true" />
              </button>

              {/* Card logos */}
              <div
                className="donate-method-card__card-logos"
                aria-label="Accepted cards: Visa, Mastercard, Verve"
              >
                <span className="donate-method-card__card-logo card-logo-visa">
                  VISA
                </span>
                <span className="donate-method-card__card-logo card-logo-master">
                  MC
                </span>
                <span className="donate-method-card__card-logo card-logo-verve">
                  VERVE
                </span>
                <span style={{ fontSize: "0.7rem", color: "#718096" }}>
                  and more
                </span>
              </div>
            </div>

            {/* ── Bank Transfer card ────────────────────── */}
            <div
              className="donate-method-card"
              aria-label="Donate via bank transfer"
            >
              <div className="donate-method-card__icon" aria-hidden="true">
                <Building2 size={26} />
              </div>

              <h3 className="donate-method-card__title">
                Donate via Bank Transfer
              </h3>

              <ul className="donate-method-card__list">
                {[
                  "Direct bank transfer",
                  "No transaction fees",
                  "Secure and reliable",
                  "Send and notify us",
                ].map((item) => (
                  <li key={item}>
                    <span
                      className="donate-method-card__check"
                      aria-hidden="true"
                    >
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path
                          d="M1 3.5L3.5 6L8 1"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="#bank-details"
                className="donate-method-card__btn-outline"
                aria-label="View bank transfer details"
              >
                View Bank Details
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Note banner */}
          <div className="donate-note-banner" role="note">
            <Heart
              size={22}
              className="donate-note-banner__icon"
              aria-hidden="true"
            />
            <span>
              Your donation helps fund programs in healthcare, education,
              empowerment, advocacy, and community inclusion.
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. YOUR IMPACT
          4 stat cards with icon + value + label + desc.
      ══════════════════════════════════════════════════════ */}
      <section className="donate-impact" aria-labelledby="impact-heading">
        <div className="donate-impact__inner">
          <h2 id="impact-heading" className="donate-impact__title">
            Your Impact
          </h2>
          <p className="donate-impact__sub">
            See how your support creates lasting change
          </p>

          <div className="donate-impact__grid" role="list">
            {impactCards.map(({ icon, value, label, desc }) => (
              <div key={label} className="donate-impact-card" role="listitem">
                <div className="donate-impact-card__icon" aria-hidden="true">
                  {icon}
                </div>
                <p className="donate-impact-card__value">{value}</p>
                <p className="donate-impact-card__label">{label}</p>
                <p className="donate-impact-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. BANK TRANSFER DETAILS
          Left: illustrated bank visual.
          Right: white card with bank name, account name, account
          number — each row has a copy-to-clipboard button.
          🖼️  Replace IMAGES.bankIllustration above.
      ══════════════════════════════════════════════════════ */}
      <section
        id="bank-details"
        className="donate-bank"
        aria-labelledby="bank-heading"
      >
        <div className="donate-bank__inner">
          {/* Left — illustration */}
          <div className="donate-bank__illustration">
            <div className="donate-bank__illustration-box">
              {/* 🖼️  Replace IMAGES.bankIllustration above for a real bank SVG/PNG */}
              <Building2 size={52} className="donate-bank__illustration-icon" />
              <span className="donate-bank__illustration-label">
                Secure bank
                <br />
                transfer
              </span>
            </div>
          </div>

          {/* Right — details card */}
          <div className="donate-bank__card">
            <h2 id="bank-heading" className="donate-bank__heading">
              Prefer Bank Transfer?
            </h2>
            <p className="donate-bank__sub">
              You can support our mission directly via bank transfer.
            </p>

            <div
              className="donate-bank__table"
              role="table"
              aria-label="Bank account details"
            >
              {/* Bank Name */}
              <div className="donate-bank__row" role="row">
                <span className="donate-bank__row-label" role="rowheader">
                  Bank Name:
                </span>
                <span className="donate-bank__row-value" role="cell">
                  Zenith Bank
                </span>
                <CopyButton text="Zenith Bank" label="bank name" />
              </div>

              {/* Account Name */}
              <div className="donate-bank__row" role="row">
                <span className="donate-bank__row-label" role="rowheader">
                  Account Name:
                </span>
                <span className="donate-bank__row-value" role="cell">
                  Disability Hope &amp; Recovery Foundation
                </span>
                <CopyButton
                  text="Disability Hope & Recovery Foundation"
                  label="account name"
                />
              </div>

              {/* Account Number */}
              <div className="donate-bank__row" role="row">
                <span className="donate-bank__row-label" role="rowheader">
                  Account Number:
                </span>
                <span className="donate-bank__row-value" role="cell">
                  1234567890
                </span>
                <CopyButton text="1234567890" label="account number" />
              </div>
            </div>

            <p className="donate-bank__note">
              After making your transfer, please email your receipt to{" "}
              <a href="mailto:donations@dhrf.org.ng">donations@dhrf.org.ng</a>{" "}
              so we can acknowledge your support.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. NEED HELP STRIP
          Icon + title/sub on left. Phone + email links right.
      ══════════════════════════════════════════════════════ */}
      <section
        className="donate-help-strip"
        aria-label="Donation support contact"
      >
        <div className="donate-help-strip__inner">
          <div className="donate-help-strip__left">
            <div className="donate-help-strip__icon" aria-hidden="true">
              <Headphones size={20} />
            </div>
            <div>
              <p className="donate-help-strip__title">Need Help?</p>
              <p className="donate-help-strip__sub">
                We&rsquo;re here to help you with your donation.
              </p>
            </div>
          </div>

          <div className="donate-help-strip__contacts">
            <a href="tel:+2349012345678" className="donate-help-strip__contact">
              <Phone size={15} aria-hidden="true" />
              +234 901 234 5678
            </a>
            <a
              href="mailto:donations@dhrf.org.ng"
              className="donate-help-strip__contact"
            >
              <Mail size={15} aria-hidden="true" />
              donations@dhrf.org.ng
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. BOTTOM CTA
          "Together, we can build a more inclusive and empowered
          society." + Become a Volunteer button.
      ══════════════════════════════════════════════════════ */}
      <section
        className="donate-bottom-cta"
        aria-label="Volunteer call to action"
      >
        <div className="donate-bottom-cta__inner">
          <div className="donate-bottom-cta__left">
            <div className="donate-bottom-cta__icon" aria-hidden="true">
              <Heart size={24} />
            </div>
            <p className="donate-bottom-cta__title">
              Together, we can build a more inclusive and empowered society.
            </p>
          </div>
          <Link
            href="/get-involved/volunteer"
            className="donate-bottom-cta__btn"
          >
            <UserPlus size={17} aria-hidden="true" />
            Become a Volunteer
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
