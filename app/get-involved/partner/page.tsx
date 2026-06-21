"use client"
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Handshake, Building2, Globe, TrendingUp, Check, ArrowRight } from "lucide-react";
import "../getinvolved.css";
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

 const metadata: Metadata = {
  title: "Partner With Us | Get Involved | DHRF",
  description:
    "Partner with DHRF as an organization, institution or business to create greater impact for persons with disabilities across Nigeria.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 🖼️  IMAGE PLACEHOLDERS — replace when real photos are available
// ─────────────────────────────────────────────────────────────────────────────
const IMAGES = {
  hero: "https://placehold.co/1440x420/1B3A6B/ffffff?text=Partner+With+Us+Hero+Photo",
};

const partnerTypes = [
  { icon: <Building2 size={22} />, title: "Corporate Partners", desc: "Businesses and companies supporting our mission through CSR, funding or in-kind contributions." },
  { icon: <Globe size={22} />, title: "NGO & Civil Society", desc: "Non-profit organisations working alongside us to advance disability inclusion." },
  { icon: <TrendingUp size={22} />, title: "Government Agencies", desc: "Public institutions collaborating on policy, funding and programme delivery." },
  { icon: <Handshake size={22} />, title: "Academic Institutions", desc: "Universities and research bodies contributing knowledge and expertise." },
];

const benefits = [
  "Co-design and implement disability programs with DHRF",
  "Access a network of 500+ beneficiaries and 75+ organisations",
  "Visibility and recognition across our communications channels",
  "Joint reporting and impact measurement",
  "Employee volunteer days and engagement opportunities",
  "Certificate and public acknowledgement of partnership",
];

export default function PartnerPage() {
  return (
    <>
    <Navbar />
      {/* Hero */}
      <section className="gi-sub-hero" aria-label="Partner With Us hero">
        <div className="gi-sub-hero__bg">
          {/* 🖼️  Replace IMAGES.hero above */}
          <Image src={IMAGES.hero} alt="Two professionals shaking hands in a partnership agreement" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="gi-sub-hero__overlay" />
        <div className="gi-sub-hero__content">
          <nav aria-label="Breadcrumb">
            <ol className="gi-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li className="gi-breadcrumb__sep">›</li>
              <li><Link href="/get-involved">Get Involved</Link></li>
              <li className="gi-breadcrumb__sep">›</li>
              <li className="gi-breadcrumb__active">Partner With Us</li>
            </ol>
          </nav>
          <p className="gi-sub-hero__eyebrow">Get Involved</p>
          <h1 className="gi-sub-hero__title">Partner With DHRF</h1>
          <p className="gi-sub-hero__desc">
            Work with us as an organisation or institution to create
            greater impact for persons with disabilities and vulnerable communities.
          </p>
        </div>
      </section>

      {/* Partner types */}
      <section style={{ background: "#f8fafc", padding: "4rem 0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2E8B57", marginBottom: "0.4rem", textAlign: "center" }}>Partnership Models</p>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#1a202c", textAlign: "center", marginBottom: "2rem" }}>Who Can Partner With Us?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {partnerTypes.map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "0.9rem", padding: "1.5rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ width: 52, height: 52, borderRadius: "50%", background: "#e8eef8", display: "flex", alignItems: "center", justifyContent: "center", color: "#1B3A6B" }} aria-hidden="true">{icon}</span>
                <p style={{ fontWeight: 800, fontSize: "0.88rem", color: "#1a202c" }}>{title}</p>
                <p style={{ fontSize: "0.75rem", color: "#718096", lineHeight: 1.5 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + form */}
      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="gi-sub-content">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            {/* Benefits */}
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2E8B57", marginBottom: "0.5rem" }}>Why Partner?</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1a202c", marginBottom: "1.25rem" }}>Benefits of Partnering</h2>
              <ul className="gi-benefit-list">
                {benefits.map((b) => (
                  <li key={b} className="gi-benefit-item">
                    <span className="gi-benefit-check" aria-hidden="true"><Check size={12} color="#fff" strokeWidth={3} /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="gi-form-card">
              <h2 className="gi-form-title">Partnership Enquiry</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="gi-form-grid">
                  <div className="gi-form-field">
                    <label htmlFor="p-name" className="gi-form-label">Contact Name *</label>
                    <input id="p-name" type="text" className="gi-form-input" placeholder="Your full name" required />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="p-org" className="gi-form-label">Organisation *</label>
                    <input id="p-org" type="text" className="gi-form-input" placeholder="Organisation name" required />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="p-email" className="gi-form-label">Email Address *</label>
                    <input id="p-email" type="email" className="gi-form-input" placeholder="you@organisation.com" required />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="p-phone" className="gi-form-label">Phone Number</label>
                    <input id="p-phone" type="tel" className="gi-form-input" placeholder="+234 ..." />
                  </div>
                  <div className="gi-form-field gi-form-field--full">
                    <label htmlFor="p-type" className="gi-form-label">Partnership Type</label>
                    <select id="p-type" className="gi-form-select">
                      <option value="">Select type</option>
                      <option>Corporate Partner</option>
                      <option>NGO / Civil Society</option>
                      <option>Government Agency</option>
                      <option>Academic Institution</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="gi-form-field gi-form-field--full">
                    <label htmlFor="p-message" className="gi-form-label">How would you like to partner?</label>
                    <textarea id="p-message" className="gi-form-textarea" placeholder="Describe your interest and proposed partnership..." />
                  </div>
                </div>
                <button type="submit" className="gi-form-submit">
                  Submit Enquiry <ArrowRight size={15} aria-hidden="true" />
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
