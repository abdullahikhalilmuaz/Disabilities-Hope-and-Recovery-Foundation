"use client"
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Check, ArrowRight } from "lucide-react";
import "../getinvolved.css";
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

 const metadata: Metadata = {
  title: "Become an Ambassador | Get Involved | DHRF",
  description:
    "Represent DHRF and create awareness about disability inclusion in your community. Join our Ambassador programme today.",
};

const IMAGES = {
  /** 🖼️  Replace with real ambassador group photo */
  hero: "https://placehold.co/1440x420/1B3A6B/ffffff?text=Ambassador+Hero+Photo",
};

const ambassadorPerks = [
  "Official DHRF Ambassador certificate and branded kit",
  "Feature on DHRF's website and social media channels",
  "Exclusive access to DHRF events and briefings",
  "Direct line to DHRF leadership and program teams",
  "Opportunities to speak at events and represent DHRF",
  "Ongoing training and capacity building support",
];

const responsibilities = [
  "Share DHRF's mission and impact stories in your network",
  "Represent DHRF at community and professional events",
  "Create and share content promoting disability inclusion",
  "Provide feedback from communities to DHRF",
  "Support mobilisation for DHRF campaigns and events",
];

export default function AmbassadorPage() {
  return (
    <>
    <Navbar />
      <section className="gi-sub-hero" aria-label="Ambassador programme hero">
        <div className="gi-sub-hero__bg">
          {/* 🖼️  Replace IMAGES.hero */}
          <Image src={IMAGES.hero} alt="DHRF Ambassadors gathered at a disability awareness event" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="gi-sub-hero__overlay" />
        <div className="gi-sub-hero__content">
          <nav aria-label="Breadcrumb">
            <ol className="gi-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li className="gi-breadcrumb__sep">›</li>
              <li><Link href="/get-involved">Get Involved</Link></li>
              <li className="gi-breadcrumb__sep">›</li>
              <li className="gi-breadcrumb__active">Become an Ambassador</li>
            </ol>
          </nav>
          <p className="gi-sub-hero__eyebrow">Get Involved</p>
          <h1 className="gi-sub-hero__title">Become a DHRF<br />Ambassador</h1>
          <p className="gi-sub-hero__desc">
            Represent DHRF and create awareness about disability inclusion
            in your community, workplace or institution.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="gi-sub-content">
          {/* Two columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", marginBottom: "3rem" }}>
            {/* Perks */}
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2E8B57", marginBottom: "0.5rem" }}>Ambassador Benefits</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1a202c", marginBottom: "1rem" }}>What You Get</h2>
              <ul className="gi-benefit-list">
                {ambassadorPerks.map((p) => (
                  <li key={p} className="gi-benefit-item">
                    <span className="gi-benefit-check" aria-hidden="true"><Check size={12} color="#fff" strokeWidth={3} /></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2E8B57", marginBottom: "0.5rem" }}>Your Role</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1a202c", marginBottom: "1rem" }}>What We Expect</h2>
              <ul className="gi-benefit-list">
                {responsibilities.map((r) => (
                  <li key={r} className="gi-benefit-item">
                    <span className="gi-benefit-check" style={{ background: "#1B3A6B" }} aria-hidden="true"><Check size={12} color="#fff" strokeWidth={3} /></span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application form */}
          <div className="gi-form-card">
            <h2 className="gi-form-title">Apply to be an Ambassador</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="gi-form-grid">
                <div className="gi-form-field">
                  <label htmlFor="amb-name" className="gi-form-label">Full Name *</label>
                  <input id="amb-name" type="text" className="gi-form-input" placeholder="Your full name" required />
                </div>
                <div className="gi-form-field">
                  <label htmlFor="amb-email" className="gi-form-label">Email Address *</label>
                  <input id="amb-email" type="email" className="gi-form-input" placeholder="you@example.com" required />
                </div>
                <div className="gi-form-field">
                  <label htmlFor="amb-phone" className="gi-form-label">Phone Number</label>
                  <input id="amb-phone" type="tel" className="gi-form-input" placeholder="+234 ..." />
                </div>
                <div className="gi-form-field">
                  <label htmlFor="amb-location" className="gi-form-label">State / City *</label>
                  <input id="amb-location" type="text" className="gi-form-label" placeholder="e.g. Lagos, Nigeria" required />
                </div>
                <div className="gi-form-field gi-form-field--full">
                  <label htmlFor="amb-profession" className="gi-form-label">Profession / Background</label>
                  <input id="amb-profession" type="text" className="gi-form-input" placeholder="e.g. Medical Doctor, Student, Entrepreneur" />
                </div>
                <div className="gi-form-field gi-form-field--full">
                  <label htmlFor="amb-why" className="gi-form-label">Why do you want to be a DHRF Ambassador?</label>
                  <textarea id="amb-why" className="gi-form-textarea" placeholder="Tell us what motivates you and how you plan to create awareness..." />
                </div>
              </div>
              <button type="submit" className="gi-form-submit">
                Submit Application <ArrowRight size={15} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
