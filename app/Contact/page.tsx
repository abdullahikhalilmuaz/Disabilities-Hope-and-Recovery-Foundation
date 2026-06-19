"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Handshake,
  HeartHandshake,
} from "lucide-react";
import styles from "./contact.module.css";

/* ─── static metadata (move to a separate layout if using RSC) ─── */
const metadata: Metadata = {
  title: "Contact Us | DHRF – Disability Hope & Recovery Foundation",
  description:
    "Get in touch with DHRF. Call, email, visit us or send a message online. We're here to help and listen.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 803 123 4567",
    sub: "Mon – Fri: 8AM – 5PM",
    color: "green",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@dhrf.org.ng",
    sub: "We reply within 24hrs",
    color: "blue",
  },
  {
    icon: MapPin,
    label: "Our Location",
    value: "No. 12 Hope Street,",
    sub: "Abuja, Nigeria",
    color: "orange",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Friday",
    sub: "8:00AM – 5:00PM",
    color: "purple",
  },
];

const subjects = [
  "General Enquiry",
  "Support Request",
  "Volunteer / Partnership",
  "Donation",
  "Media & Press",
  "Other",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  }

  return (
    <main className={styles.page}>
      <Navbar />
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>CONTACT US</span>
          <h1 className={styles.heroTitle}>
            We&apos;re Here to Help
            <br />
            and Listen.
          </h1>
          <p className={styles.heroDesc}>
            Whether you need support, want to partner with us, volunteer, or
            make a donation — we&apos;d love to hear from you.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/dhrf-contact-hero/1400/600"
          alt="DHRF staff ready to help"
          className={styles.heroImg}
        />
      </section>

      {/* ── Contact cards ── */}
      <section className={styles.cardsSection}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            {contactDetails.map(({ icon: Icon, label, value, sub, color }) => (
              <div
                key={label}
                className={`${styles.card} ${styles[`card--${color}`]}`}
              >
                <div
                  className={`${styles.cardIcon} ${styles[`cardIcon--${color}`]}`}
                >
                  <Icon size={22} />
                </div>
                <p className={styles.cardLabel}>{label}</p>
                <p className={styles.cardValue}>{value}</p>
                <p className={styles.cardSub}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Message form + sidebars ── */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.mainGrid}>
            {/* form */}
            <div className={styles.formWrap}>
              <h2 className={styles.sectionTitle}>Send Us a Message</h2>
              <p className={styles.sectionSub}>
                Fill in the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              {sent ? (
                <div className={styles.successBox}>
                  <CheckCircle size={40} className={styles.successIcon} />
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for reaching out. A member of our team will be in
                    touch with you shortly.
                  </p>
                  <button
                    className={styles.btnPrimary}
                    onClick={() => setSent(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label className={styles.label}>Your Name *</label>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Phone Number</label>
                      <input
                        className={styles.input}
                        type="tel"
                        placeholder="+234 000 000 0000"
                      />
                    </div>
                  </div>

                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label className={styles.label}>Email Address *</label>
                      <input
                        className={styles.input}
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Subject</label>
                      <select className={styles.input} defaultValue="">
                        <option value="" disabled>
                          Select a subject
                        </option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Your Message *</label>
                    <textarea
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Tell us how we can help you…"
                      rows={5}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.btnPrimary}
                    disabled={loading}
                  >
                    {loading ? (
                      "Sending…"
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* side panels */}
            <aside className={styles.side}>
              <div className={styles.sideCard}>
                <div className={styles.sideCardIcon}>
                  <HeartHandshake size={28} />
                </div>
                <h3 className={styles.sideCardTitle}>Get Help</h3>
                <p className={styles.sideCardText}>
                  If you or someone you know needs support, we are here to
                  assist.
                </p>
                <a href="/get-help" className={styles.btnGreen}>
                  Request Support →
                </a>
              </div>

              <div className={styles.sideCard}>
                <div className={styles.sideCardIcon}>
                  <HeartHandshake size={28} />
                </div>
                <h3 className={styles.sideCardTitle}>Make a Difference</h3>
                <p className={styles.sideCardText}>
                  Your donations help us continue our life-changing work in
                  communities.
                </p>
                <a href="/donate" className={styles.btnDark}>
                  Donate Now →
                </a>
              </div>

              <div className={styles.sideCard}>
                <div className={styles.sideCardIcon}>
                  <Handshake size={28} />
                </div>
                <h3 className={styles.sideCardTitle}>Partner With Us</h3>
                <p className={styles.sideCardText}>
                  We work with individuals, organizations and institutions to
                  create greater impact.
                </p>
                <a href="/get-involved/partner" className={styles.btnOutline}>
                  Become a Partner →
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Find Us On the Map</h2>
          <p className={styles.sectionSub}>
            DHRF Office — No. 12 Hope Street, Abuja, Nigeria
          </p>
          <div className={styles.mapEmbed}>
            <iframe
              title="DHRF Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.065!2d7.4951!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMjguNCJOIDfCsDI5JzQyLjQiRQ!5e0!3m2!1sen!2sng!4v1680000000000"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
