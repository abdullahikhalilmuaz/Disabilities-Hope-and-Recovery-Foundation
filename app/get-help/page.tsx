"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Navbar from "../../components/layout/navbar"
import Footer from "../../components/layout/footer"
import {
  Stethoscope,
  Activity,
  Accessibility,
  HeartHandshake,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ClipboardList,
  CheckCircle,
  Send,
  ChevronDown,
  X,
} from "lucide-react";
import styles from "./gethelp.module.css";

 const metadata: Metadata = {
  title: "Get Help | DHRF – Disability Hope & Recovery Foundation",
  description:
    "If you or someone you know needs support, DHRF is here to help. Access healthcare, rehabilitation, assistive devices, counselling and more.",
};

const services = [
  {
    icon: Stethoscope,
    title: "Healthcare Access",
    desc: "Access to medical care, health screenings, drugs and specialist services.",
    color: "green",
  },
  {
    icon: Activity,
    title: "Rehabilitation Services",
    desc: "Physiotherapy, occupational therapy, speech therapy and psychosocial support.",
    color: "blue",
  },
  {
    icon: Accessibility,
    title: "Assistive Devices",
    desc: "Provision of wheelchairs, crutches, hearing aids and other mobility aids.",
    color: "orange",
  },
  {
    icon: HeartHandshake,
    title: "Counselling & Support",
    desc: "Emotional support, guidance and referral to community resources.",
    color: "purple",
  },
  {
    icon: TrendingUp,
    title: "Economic Empowerment",
    desc: "Skills training, business support and livelihood opportunities.",
    color: "teal",
  },
];

const howToHelp = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 803 123 4567",
    sub: "Mon – Fri: 8AM – 5PM",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@dhrf.org.ng",
    sub: "We reply within 24hrs",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "No. 12 Hope Street,",
    sub: "Abuja, Nigeria",
  },
  {
    icon: ClipboardList,
    label: "Online Form",
    value: "Fill the request form",
    sub: "and we'll get back to you.",
    isAction: true,
  },
];

const subjects = [
  "Healthcare Access",
  "Rehabilitation Services",
  "Assistive Devices",
  "Counselling & Support",
  "Economic Empowerment",
  "General Support",
  "Other",
];

export default function GetHelpPage() {
  const [formOpen, setFormOpen] = useState(false);
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
    <>
    
    <main className={styles.page} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
    <Navbar />
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/dhrf-gethelp-hero/1400/500"
          alt="DHRF counsellor speaking with a person who needs support"
          className={styles.heroImg}
        />
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>GET HELP</span>
          <h1 className={styles.heroTitle}>
            We&apos;re Here to
            <br />
            Support You
          </h1>
          <p className={styles.heroDesc}>
            If you or someone you know needs support, we are here to listen,
            guide and connect you with the right care and resources.
          </p>
        </div>
      </section>

      {/* ── How we can help ── */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.secTitle}>How We Can Help</h2>
          <div className={styles.servicesGrid}>
            {services.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className={`${styles.serviceCard} ${styles[`service--${color}`]}`}>
                <div className={`${styles.serviceIcon} ${styles[`serviceIcon--${color}`]}`}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.serviceTitle}>{title}</h3>
                <p className={styles.serviceDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who can request help ── */}
      <section className={styles.whoSection}>
        <div className={styles.container}>
          <div className={styles.whoBanner}>
            <div className={styles.whoIconWrap}>
              <HeartHandshake size={28} />
            </div>
            <div className={styles.whoText}>
              <strong>Who Can Request Help?</strong>
              <p>
                Persons with disabilities, vulnerable individuals and caregivers
                can request support. All requests are treated with
                confidentiality and respect.
              </p>
            </div>
            <button
              className={styles.btnGreen}
              onClick={() => {
                setFormOpen(true);
                setSent(false);
              }}
            >
              Request Support Now →
            </button>
          </div>
        </div>
      </section>

      {/* ── How to get help ── */}
      <section className={styles.howSection}>
        <div className={styles.container}>
          <h2 className={styles.secTitle}>How to Get Help</h2>
          <p className={styles.secSub}>
            It&apos;s easy to reach us. Choose any of the options below.
          </p>
          <div className={styles.howGrid}>
            {howToHelp.map(({ icon: Icon, label, value, sub, isAction }) => (
              <div key={label} className={styles.howCard}>
                <div className={styles.howIcon}>
                  <Icon size={22} />
                </div>
                <p className={styles.howLabel}>{label}</p>
                <p className={styles.howValue}>{value}</p>
                <p className={styles.howSub}>{sub}</p>
                {isAction && (
                  <button
                    className={styles.btnSmallGreen}
                    onClick={() => {
                      setFormOpen(true);
                      setSent(false);
                    }}
                  >
                    Open Form
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inline Request Form (shown on click) ── */}
      {formOpen && (
        <section className={styles.formSection} id="request-form">
          <div className={styles.container}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <div>
                  <h2 className={styles.secTitle} style={{ marginBottom: 4 }}>
                    Support Request Form
                  </h2>
                  <p className={styles.secSub} style={{ margin: 0 }}>
                    Tell us what you need — we&apos;ll respond within 24 hours.
                  </p>
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setFormOpen(false)}
                  aria-label="Close form"
                >
                  <X size={20} />
                </button>
              </div>

              {sent ? (
                <div className={styles.successBox}>
                  <CheckCircle size={44} className={styles.successIcon} />
                  <h3>Request Received!</h3>
                  <p>
                    Thank you for reaching out. Our team will contact you
                    shortly to discuss how we can help.
                  </p>
                  <button
                    className={styles.btnGreen}
                    onClick={() => {
                      setSent(false);
                      setFormOpen(false);
                    }}
                  >
                    Close
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
                      <label className={styles.label}>Full Name *</label>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Phone Number *</label>
                      <input
                        className={styles.input}
                        type="tel"
                        placeholder="+234 000 000 0000"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label className={styles.label}>Email Address</label>
                      <input
                        className={styles.input}
                        type="email"
                        placeholder="you@example.com (optional)"
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Type of Support Needed *</label>
                      <select className={styles.input} defaultValue="" required>
                        <option value="" disabled>
                          Select support type
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
                    <label className={styles.label}>Location / State *</label>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Your city or state in Nigeria"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>
                      Briefly Describe Your Need *
                    </label>
                    <textarea
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Tell us about yourself and what support you need…"
                      rows={4}
                      required
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button
                      type="submit"
                      className={styles.btnGreenLg}
                      disabled={loading}
                    >
                      {loading ? (
                        "Submitting…"
                      ) : (
                        <>
                          <Send size={16} /> Submit Request
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className={styles.btnCancel}
                      onClick={() => setFormOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Floating CTA if form not open ── */}
      {!formOpen && (
        <div className={styles.floatingCta}>
          <div className={styles.container}>
            <div className={styles.ctaBanner}>
              <p className={styles.ctaText}>
                Ready to get the support you need?
              </p>
              <button
                className={styles.btnGreenLg}
                onClick={() => {
                  setFormOpen(true);
                  setSent(false);
                  setTimeout(
                    () =>
                      document
                        .getElementById("request-form")
                        ?.scrollIntoView({ behavior: "smooth" }),
                    100
                  );
                }}
              >
                <ClipboardList size={16} /> Fill the Request Form
              </button>
            </div>
          </div>
        </div>
      )}
    <Footer />
    </main>
    </>
  );
}