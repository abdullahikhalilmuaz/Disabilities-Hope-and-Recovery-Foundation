"use client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, Check } from "lucide-react";
import "../getinvolved.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

 const metadata: Metadata = {
  title: "Careers | Get Involved | DHRF",
  description:
    "Join the DHRF team. Explore career opportunities and work with passionate people dedicated to improving lives of persons with disabilities across Nigeria.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 🖼️  IMAGE PLACEHOLDERS — replace when real photos are available
// ─────────────────────────────────────────────────────────────────────────────
const IMAGES = {
  hero: "https://placehold.co/1440x420/1B3A6B/ffffff?text=Careers+Hero+Photo",
};

// ─────────────────────────────────────────────────────────────────────────────
// Job listings — replace / expand when real positions open
// ─────────────────────────────────────────────────────────────────────────────
const openings = [
  {
    title: "Program Officer – Rehabilitation",
    location: "Katsina, Nigeria",
    type: "Full-time",
    department: "Programs",
    closing: "July 31, 2025",
    href: "/get-involved/careers/program-officer-rehab",
  },
  {
    title: "Community Health Worker",
    location: "Abuja, Nigeria",
    type: "Full-time",
    department: "Healthcare",
    closing: "July 25, 2025",
    href: "/get-involved/careers/community-health-worker",
  },
  {
    title: "Digital Communications Officer",
    location: "Remote (Nigeria-based)",
    type: "Full-time",
    department: "Communications",
    closing: "August 5, 2025",
    href: "/get-involved/careers/digital-comms",
  },
  {
    title: "Monitoring & Evaluation Officer",
    location: "Katsina, Nigeria",
    type: "Full-time",
    department: "M&E",
    closing: "August 10, 2025",
    href: "/get-involved/careers/me-officer",
  },
];

const culturePoints = [
  "Mission-driven environment where your work creates real impact",
  "Inclusive, respectful and supportive workplace culture",
  "Opportunities for professional growth and training",
  "Competitive salary and benefits",
  "Flexible and collaborative team environment",
  "Work directly with the communities you serve",
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="gi-sub-hero" aria-label="Careers hero">
        <div className="gi-sub-hero__bg">
          {/* 🖼️  Replace IMAGES.hero above */}
          <Image
            src={IMAGES.hero}
            alt="DHRF team members collaborating in an office setting"
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
              <li className="gi-breadcrumb__active">Careers</li>
            </ol>
          </nav>
          <p className="gi-sub-hero__eyebrow">Join Our Team</p>
          <h1 className="gi-sub-hero__title">
            Build a Career
            <br />
            That Matters
          </h1>
          <p className="gi-sub-hero__desc">
            Work with passionate people dedicated to improving lives and
            building a more inclusive society for persons with disabilities.
          </p>
        </div>
      </section>

      {/* Why work with us */}
      <section style={{ background: "#f8fafc", padding: "4rem 0" }}>
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
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
                Our Culture
              </p>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  color: "#1a202c",
                  marginBottom: "1.25rem",
                }}
              >
                Why Work at DHRF?
              </h2>
              <ul className="gi-benefit-list">
                {culturePoints.map((p) => (
                  <li key={p} className="gi-benefit-item">
                    <span className="gi-benefit-check" aria-hidden="true">
                      <Check size={12} color="#fff" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: "#1B3A6B",
                borderRadius: "1.25rem",
                padding: "2.5rem",
                color: "#fff",
              }}
            >
              <p style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1 }}>
                50+
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.75)",
                  marginBottom: "1.5rem",
                }}
              >
                Team members across Nigeria
              </p>
              <p style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1 }}>
                10,000+
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.75)",
                  marginBottom: "1.5rem",
                }}
              >
                Lives impacted through our work
              </p>
              <p style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1 }}>
                28
              </p>
              <p
                style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}
              >
                States we operate across
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section
        style={{ background: "#fff", padding: "4rem 0" }}
        aria-labelledby="openings-heading"
      >
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2E8B57",
              marginBottom: "0.4rem",
            }}
          >
            Join Us
          </p>
          <h2
            id="openings-heading"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#1a202c",
              marginBottom: "2rem",
            }}
          >
            Current Openings
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {openings.map(
              ({ title, location, type, department, closing, href }) => (
                <article
                  key={title}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.9rem",
                    padding: "1.5rem 1.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "#1a202c",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {title}
                    </p>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.75rem",
                          color: "#718096",
                        }}
                      >
                        <MapPin size={13} aria-hidden="true" /> {location}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.75rem",
                          color: "#718096",
                        }}
                      >
                        <Clock size={13} aria-hidden="true" /> {type}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          background: "#e8eef8",
                          color: "#1B3A6B",
                          padding: "0.15rem 0.6rem",
                          borderRadius: "9999px",
                          fontWeight: 600,
                        }}
                      >
                        {department}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        color: "#a0aec0",
                        marginTop: "0.5rem",
                      }}
                    >
                      Closing: {closing}
                    </p>
                  </div>
                  <Link
                    href={href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.7rem 1.25rem",
                      background: "#1B3A6B",
                      color: "#fff",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      borderRadius: "0.6rem",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      transition: "background 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    <Briefcase size={14} aria-hidden="true" />
                    Apply Now
                  </Link>
                </article>
              ),
            )}
          </div>

          {/* No role listed notice */}
          <div
            style={{
              marginTop: "2rem",
              background: "#f0f4f8",
              border: "1px solid #e2e8f0",
              borderRadius: "0.9rem",
              padding: "1.5rem 1.75rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div style={{ color: "#1B3A6B" }}>
              <Briefcase size={24} />
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  color: "#1a202c",
                  marginBottom: "0.2rem",
                }}
              >
                Don't see a role that fits?
              </p>
              <p style={{ fontSize: "0.8rem", color: "#718096" }}>
                Send your CV to{" "}
                <a
                  href="mailto:careers@dhrf.org.ng"
                  style={{
                    color: "#1B3A6B",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  careers@dhrf.org.ng
                </a>{" "}
                and we'll reach out when a suitable opportunity arises.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
