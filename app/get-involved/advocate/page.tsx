"use client"
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Megaphone, Check, ArrowRight } from "lucide-react";
import "../getinvolved.css";
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Advocate | Get Involved | DHRF",
  description:
    "Use your voice to promote inclusion, accessibility and equal opportunities for persons with disabilities. Become a disability rights advocate with DHRF.",
};

const IMAGES = {
  /** 🖼️  Replace with real advocacy/campaigning photo */
  hero: "https://placehold.co/1440x420/1B3A6B/ffffff?text=Advocate+Hero+Photo",
};

const ways = [
  "Share DHRF content on your social media platforms",
  "Speak up about disability inclusion in your community",
  "Attend and promote our awareness events",
  "Write letters to local representatives about disability policy",
  "Educate colleagues, friends and family about disability rights",
  "Report barriers to accessibility in public spaces",
];

export default function AdvocatePage() {
  return (
    <>
    <Navbar />
      <section className="gi-sub-hero" aria-label="Advocate hero">
        <div className="gi-sub-hero__bg">
          {/* 🖼️  Replace IMAGES.hero */}
          <Image src={IMAGES.hero} alt="Person speaking at a disability advocacy event" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="gi-sub-hero__overlay" />
        <div className="gi-sub-hero__content">
          <nav aria-label="Breadcrumb">
            <ol className="gi-breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li className="gi-breadcrumb__sep">›</li>
              <li><Link href="/get-involved">Get Involved</Link></li>
              <li className="gi-breadcrumb__sep">›</li>
              <li className="gi-breadcrumb__active">Advocate</li>
            </ol>
          </nav>
          <p className="gi-sub-hero__eyebrow">Get Involved</p>
          <h1 className="gi-sub-hero__title">Use Your Voice.<br />Drive Change.</h1>
          <p className="gi-sub-hero__desc">
            Promote inclusion, accessibility and equal opportunities for
            persons with disabilities in your community and beyond.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="gi-sub-content">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2E8B57", marginBottom: "0.5rem" }}>Advocacy</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1a202c", marginBottom: "1rem" }}>How You Can Advocate</h2>
              <p style={{ fontSize: "0.88rem", color: "#4a5568", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Advocacy is one of the most powerful ways to create lasting change.
                You don't need to be an expert — you just need to care and be willing
                to use your voice for those who are often unheard.
              </p>
              <ul className="gi-benefit-list">
                {ways.map((w) => (
                  <li key={w} className="gi-benefit-item">
                    <span className="gi-benefit-check" aria-hidden="true"><Check size={12} color="#fff" strokeWidth={3} /></span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gi-form-card">
              <h2 className="gi-form-title">Join as an Advocate</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="gi-form-grid">
                  <div className="gi-form-field">
                    <label htmlFor="adv-name" className="gi-form-label">Full Name *</label>
                    <input id="adv-name" type="text" className="gi-form-input" placeholder="Your full name" required />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="adv-email" className="gi-form-label">Email Address *</label>
                    <input id="adv-email" type="email" className="gi-form-input" placeholder="you@example.com" required />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="adv-state" className="gi-form-label">State / Location</label>
                    <input id="adv-state" type="text" className="gi-form-input" placeholder="e.g. Katsina" />
                  </div>
                  <div className="gi-form-field">
                    <label htmlFor="adv-platform" className="gi-form-label">Primary Platform</label>
                    <select id="adv-platform" className="gi-form-select">
                      <option value="">Select platform</option>
                      <option>Social Media</option>
                      <option>Community / In-person</option>
                      <option>Workplace</option>
                      <option>School / Campus</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="gi-form-field gi-form-field--full">
                    <label htmlFor="adv-message" className="gi-form-label">Why do you want to advocate?</label>
                    <textarea id="adv-message" className="gi-form-textarea" placeholder="Tell us your motivation..." />
                  </div>
                </div>
                <button type="submit" className="gi-form-submit">
                  Become an Advocate <ArrowRight size={15} aria-hidden="true" />
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
