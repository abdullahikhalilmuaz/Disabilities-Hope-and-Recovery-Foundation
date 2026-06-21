import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Check, ArrowRight } from "lucide-react";
import "../getinvolved.css";
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Fundraise | Get Involved | DHRF",
  description:
    "Organise a fundraiser or campaign to support DHRF's mission and reach more persons with disabilities across Nigeria.",
};

const IMAGES = {
  /** 🖼️  Replace with real fundraising event photo */
  hero: "https://placehold.co/1440x420/1B3A6B/ffffff?text=Fundraise+Hero+Photo",
};

const ideas = [
  "Charity run, walk or cycle event in your community",
  "Birthday or anniversary donation appeal",
  "Bake sale, raffle or community market",
  "Online crowdfunding campaign",
  "Workplace giving or payroll giving scheme",
  "Corporate matching gift drive",
];

export default function FundraisePage() {
  return (
    <>
    <Navbar />
      <section className="gi-sub-hero" aria-label="Fundraise hero">
        <div className="gi-sub-hero__bg">
          {/* 🖼️  Replace IMAGES.hero */}
          <Image src={IMAGES.hero} alt="Participants at a DHRF fundraising event" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="gi-sub-hero__overlay" />
        <div className="gi-sub-hero__content">
          <nav aria-label="Breadcrumb">
            <ol className="gi-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li className="gi-breadcrumb__sep">›</li>
              <li><Link href="/get-involved">Get Involved</Link></li>
              <li className="gi-breadcrumb__sep">›</li>
              <li className="gi-breadcrumb__active">Fundraise</li>
            </ol>
          </nav>
          <p className="gi-sub-hero__eyebrow">Get Involved</p>
          <h1 className="gi-sub-hero__title">Start a Fundraiser<br />for DHRF</h1>
          <p className="gi-sub-hero__desc">
            Organise a fundraiser or campaign to support our cause
            and help us reach more persons with disabilities in your community.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="gi-sub-content">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2E8B57", marginBottom: "0.5rem" }}>Fundraising Ideas</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1a202c", marginBottom: "1rem" }}>How to Fundraise for Us</h2>
              <p style={{ fontSize: "0.88rem", color: "#4a5568", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Anyone can fundraise for DHRF. All you need is passion and creativity.
                Here are some ideas to get you started, or tell us your own idea and
                we'll support you every step of the way.
              </p>
              <ul className="gi-benefit-list">
                {ideas.map((idea) => (
                  <li key={idea} className="gi-benefit-item">
                    <span className="gi-benefit-check" aria-hidden="true"><Check size={12} color="#fff" strokeWidth={3} /></span>
                    {idea}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gi-form-card">
              <h2 className="gi-form-title">Register Your Fundraiser</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="gi-form-grid">
                  <div className="gi-form-field">
                    <label htmlFor="fr-name" className="gi-form-label">Your Name *</label>
                    <input id="fr-name" type="text" className="gi-form-input" placeholder="Full name" required />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="fr-email" className="gi-form-label">Email Address *</label>
                    <input id="fr-email" type="email" className="gi-form-input" placeholder="you@example.com" required />
                  </div>
                  <div className="gi-form-field gi-form-field--full">
                    <label htmlFor="fr-event" className="gi-form-label">Fundraiser Name / Type *</label>
                    <input id="fr-event" type="text" className="gi-form-input" placeholder="e.g. Charity Walk 2025" required />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="fr-date" className="gi-form-label">Planned Date</label>
                    <input id="fr-date" type="date" className="gi-form-input" />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="fr-target" className="gi-form-label">Fundraising Target (₦)</label>
                    <input id="fr-target" type="number" className="gi-form-input" placeholder="e.g. 100000" min="0" />
                  </div>
                  <div className="gi-form-field gi-form-field--full">
                    <label htmlFor="fr-details" className="gi-form-label">Tell us more about your fundraiser</label>
                    <textarea id="fr-details" className="gi-form-textarea" placeholder="Describe your plans and how we can support you..." />
                  </div>
                </div>
                <button type="submit" className="gi-form-submit">
                  Register Fundraiser <ArrowRight size={15} aria-hidden="true" />
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
