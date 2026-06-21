"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Clock, Heart, Globe, Check, ArrowRight } from "lucide-react";
import "../getinvolved.css";
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

 const metadata: Metadata = {
  title: "Volunteer | Get Involved | DHRF",
  description:
    "Volunteer with DHRF and give your time and skills to support persons with disabilities across Nigeria. Make a real difference in your community.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 🖼️  IMAGE PLACEHOLDERS — replace when real photos are available
// ─────────────────────────────────────────────────────────────────────────────
const IMAGES = {
  /** Hero — volunteers working in the community */
  hero: "https://placehold.co/1440x420/1B3A6B/ffffff?text=Volunteer+Hero+Photo",
};

const benefits = [
  "Make a direct impact in the lives of persons with disabilities",
  "Gain hands-on experience in healthcare and community development",
  "Work alongside passionate, professional DHRF staff",
  "Build your network and grow your skills",
  "Receive a volunteer certificate and recognition",
  "Flexible hours to fit your schedule",
];

const roles = [
  {
    icon: <Heart size={20} />,
    title: "Healthcare Volunteer",
    desc: "Support our medical outreach and clinic days.",
  },
  {
    icon: <Users size={20} />,
    title: "Community Mobiliser",
    desc: "Help organise community events and awareness campaigns.",
  },
  {
    icon: <Globe size={20} />,
    title: "Digital & Communications",
    desc: "Support our social media, content and web presence.",
  },
  {
    icon: <Clock size={20} />,
    title: "Administrative Support",
    desc: "Help with data entry, coordination and office support.",
  },
];

export default function VolunteerPage() {
  return (
    <>
    <Navbar />
      {/* Hero */}
      <section className="gi-sub-hero" aria-label="Volunteer page hero">
        <div className="gi-sub-hero__bg">
          {/* 🖼️  Replace IMAGES.hero above */}
          <Image
            src={IMAGES.hero}
            alt="DHRF volunteers smiling while supporting community members"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="gi-sub-hero__overlay" />
        <div className="gi-sub-hero__content">
          <nav aria-label="Breadcrumb">
            <ol className="gi-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="gi-breadcrumb__sep">›</li>
              <li>
                <Link href="/get-involved">Get Involved</Link>
              </li>
              <li className="gi-breadcrumb__sep">›</li>
              <li className="gi-breadcrumb__active">Volunteer</li>
            </ol>
          </nav>
          <p className="gi-sub-hero__eyebrow">Get Involved</p>
          <h1 className="gi-sub-hero__title">Volunteer With DHRF</h1>
          <p className="gi-sub-hero__desc">
            Give your time and skills to support persons with disabilities and
            help us build more inclusive communities across Nigeria.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="gi-sub-content">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Left — why volunteer */}
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#2E8B57",
                  marginBottom: "0.5rem",
                }}
              >
                Why Volunteer?
              </p>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  color: "#1a202c",
                  marginBottom: "1.25rem",
                  lineHeight: 1.2,
                }}
              >
                Your Time Can
                <br />
                Change a Life
              </h2>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#4a5568",
                  lineHeight: 1.7,
                  marginBottom: "1.75rem",
                }}
              >
                DHRF volunteers are at the heart of everything we do. Whether
                you have a few hours a week or a full day a month, your
                contribution matters and creates lasting change for persons with
                disabilities and vulnerable communities.
              </p>
              <ul className="gi-benefit-list">
                {benefits.map((b) => (
                  <li key={b} className="gi-benefit-item">
                    <span className="gi-benefit-check" aria-hidden="true">
                      <Check size={12} color="#fff" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — volunteer roles */}
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#2E8B57",
                  marginBottom: "0.5rem",
                }}
              >
                Volunteer Roles
              </p>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  color: "#1a202c",
                  marginBottom: "1.25rem",
                  lineHeight: 1.2,
                }}
              >
                How You Can Help
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {roles.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.75rem",
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <span
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "#e8eef8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1B3A6B",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      {icon}
                    </span>
                    <div>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          color: "#1a202c",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {title}
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "#718096" }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application form */}
          <div style={{ marginTop: "3.5rem" }}>
            <div className="gi-form-card">
              <h2 className="gi-form-title">Apply to Volunteer</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="gi-form-grid">
                  <div className="gi-form-field">
                    <label htmlFor="vol-firstname" className="gi-form-label">
                      First Name *
                    </label>
                    <input
                      id="vol-firstname"
                      type="text"
                      className="gi-form-input"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="vol-lastname" className="gi-form-label">
                      Last Name *
                    </label>
                    <input
                      id="vol-lastname"
                      type="text"
                      className="gi-form-input"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="vol-email" className="gi-form-label">
                      Email Address *
                    </label>
                    <input
                      id="vol-email"
                      type="email"
                      className="gi-form-input"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="vol-phone" className="gi-form-label">
                      Phone Number *
                    </label>
                    <input
                      id="vol-phone"
                      type="tel"
                      className="gi-form-input"
                      placeholder="+234 ..."
                      required
                    />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="vol-role" className="gi-form-label">
                      Preferred Role
                    </label>
                    <select id="vol-role" className="gi-form-select">
                      <option value="">Select a role</option>
                      <option>Healthcare Volunteer</option>
                      <option>Community Mobiliser</option>
                      <option>Digital & Communications</option>
                      <option>Administrative Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="vol-availability" className="gi-form-label">
                      Availability
                    </label>
                    <select id="vol-availability" className="gi-form-select">
                      <option value="">Select availability</option>
                      <option>Weekdays</option>
                      <option>Weekends</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <div className="gi-form-field gi-form-field--full">
                    <label htmlFor="vol-message" className="gi-form-label">
                      Why do you want to volunteer?
                    </label>
                    <textarea
                      id="vol-message"
                      className="gi-form-textarea"
                      placeholder="Tell us about yourself and your motivation..."
                    />
                  </div>
                </div>
                <button type="submit" className="gi-form-submit">
                  Submit Application
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
