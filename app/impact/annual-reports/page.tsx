import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, ArrowRight, Calendar } from "lucide-react";
import "@/styles/impact/impact.css";

export const metadata: Metadata = {
  title: "Annual Reports | Impact | DHRF",
  description:
    "Download DHRF's annual impact reports — detailed accounts of our programs, financials, beneficiary stories and achievements each year.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 🖼️  REPORT PDF PATHS — replace with real file paths when available
// e.g. "/reports/dhrf-annual-report-2024.pdf"
// ─────────────────────────────────────────────────────────────────────────────
const reports = [
  {
    year: "2024",
    title: "DHRF Annual Report 2024",
    description:
      "Our most impactful year yet — 10,000+ lives reached, 2,500 assistive devices distributed, and programs expanded to 5 new states.",
    pages: "48 pages",
    size: "4.2 MB",
    /** 🖼️  Replace with real PDF path: "/reports/dhrf-annual-report-2024.pdf" */
    downloadHref: "#",
    isFeatured: true,
    coverColor: "#1B3A6B",
  },
  {
    year: "2023",
    title: "DHRF Annual Report 2023",
    description:
      "Expanding reach across the north — rehabilitation services, caregiver training, and economic empowerment for 6,000+ beneficiaries.",
    pages: "42 pages",
    size: "3.8 MB",
    /** 🖼️  Replace with real PDF path: "/reports/dhrf-annual-report-2023.pdf" */
    downloadHref: "#",
    isFeatured: false,
    coverColor: "#2E8B57",
  },
  {
    year: "2022",
    title: "DHRF Annual Report 2022",
    description:
      "Post-pandemic recovery — rebuilding access to healthcare and rehabilitation for persons with disabilities in underserved communities.",
    pages: "36 pages",
    size: "3.1 MB",
    /** 🖼️  Replace with real PDF path: "/reports/dhrf-annual-report-2022.pdf" */
    downloadHref: "#",
    isFeatured: false,
    coverColor: "#7c3aed",
  },
  {
    year: "2021",
    title: "DHRF Annual Report 2021",
    description:
      "Resilience in a challenging year — mobile clinics, assistive device drives and advocacy campaigns kept our mission moving forward.",
    pages: "34 pages",
    size: "2.9 MB",
    /** 🖼️  Replace with real PDF path: "/reports/dhrf-annual-report-2021.pdf" */
    downloadHref: "#",
    isFeatured: false,
    coverColor: "#0369a1",
  },
  {
    year: "2020",
    title: "DHRF Annual Report 2020",
    description:
      "Founding year impact — launching core programs and building partnerships to serve persons with disabilities across Katsina State.",
    pages: "28 pages",
    size: "2.4 MB",
    /** 🖼️  Replace with real PDF path: "/reports/dhrf-annual-report-2020.pdf" */
    downloadHref: "#",
    isFeatured: false,
    coverColor: "#ea580c",
  },
];

export default function AnnualReportsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: "#1B3A6B", padding: "5rem 0 4rem" }}
        aria-label="Annual Reports hero"
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.25rem" }}>
            <ol style={{ display: "flex", gap: "0.4rem", alignItems: "center", listStyle: "none", padding: 0, margin: 0, fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link></li>
              <li style={{ opacity: 0.4 }}>›</li>
              <li><Link href="/impact" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Impact</Link></li>
              <li style={{ opacity: 0.4 }}>›</li>
              <li style={{ color: "#2E8B57", fontWeight: 600 }}>Annual Reports</li>
            </ol>
          </nav>

          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2E8B57", marginBottom: "0.75rem" }}>
            Transparency & Accountability
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.75rem" }}>
            Annual Reports
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: "480px", lineHeight: 1.7 }}>
            Each year we publish a detailed account of our programs, financial
            stewardship, beneficiary stories and achievements. Download any
            report below.
          </p>
        </div>
      </section>

      {/* Reports grid */}
      <section style={{ background: "#f8fafc", padding: "4rem 0" }} aria-labelledby="reports-heading">
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 id="reports-heading" style={{ fontSize: "1.4rem", fontWeight: 900, color: "#1a202c", marginBottom: "2rem" }}>
            All Reports
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {reports.map(({ year, title, description, pages, size, downloadHref, isFeatured, coverColor }) => (
              <article
                key={year}
                style={{
                  background: "#fff",
                  border: isFeatured ? "2px solid #2E8B57" : "1px solid #e2e8f0",
                  borderRadius: "1rem",
                  padding: "1.75rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  boxShadow: isFeatured ? "0 4px 20px rgba(46,139,87,0.1)" : "none",
                }}
              >
                {/* Cover colour block */}
                <div
                  style={{
                    width: "64px",
                    height: "80px",
                    borderRadius: "0.5rem",
                    background: coverColor,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                  aria-hidden="true"
                >
                  <FileText size={24} color="#fff" />
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#fff" }}>{year}</span>
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                    <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#1a202c", margin: 0 }}>{title}</h3>
                    {isFeatured && (
                      <span style={{ background: "#2E8B57", color: "#fff", fontSize: "0.65rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "9999px", letterSpacing: "0.05em" }}>
                        LATEST
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#4a5568", lineHeight: 1.6, marginBottom: "0.5rem" }}>{description}</p>
                  <div style={{ display: "flex", gap: "1.25rem", fontSize: "0.75rem", color: "#718096" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <Calendar size={13} aria-hidden="true" /> {year}
                    </span>
                    <span>{pages}</span>
                    <span>{size}</span>
                  </div>
                </div>

                {/* Download button */}
                <a
                  href={downloadHref}
                  aria-label={`Download ${title}`}
                  download
                  style={{
                    flexShrink: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.7rem 1.25rem",
                    background: isFeatured ? "#2E8B57" : "#1B3A6B",
                    color: "#fff",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    borderRadius: "0.6rem",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Download size={15} aria-hidden="true" />
                  Download PDF
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section style={{ background: "#fff", padding: "2.5rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/impact" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#1B3A6B", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none" }}>
            ← Back to Impact Overview
          </Link>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#2E8B57", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none" }}>
            Request a printed copy <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
