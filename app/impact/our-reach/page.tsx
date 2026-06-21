import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Heart, Accessibility, ArrowRight } from "lucide-react";
import "../impact.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Our Reach | Impact | DHRF",
  description:
    "Discover how DHRF's programs reach communities across Nigeria — from urban centres to remote villages, touching lives in 28 states.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 🖼️  IMAGE PLACEHOLDERS — replace when real images are available
// ─────────────────────────────────────────────────────────────────────────────
const IMAGES = {
  /** Hero — wide shot of DHRF working in a community */
  hero: "https://placehold.co/1440x460/1B3A6B/ffffff?text=Our+Reach+Hero+Photo",

  /** Map image — Nigeria map showing reach */
  map: "https://placehold.co/860x500/e2e8f0/64748b?text=Nigeria+Reach+Map",
};

const reachStats = [
  {
    icon: <MapPin size={28} />,
    value: "28",
    label: "States",
    sub: "Across Nigeria",
  },
  {
    icon: <Users size={28} />,
    value: "120+",
    label: "Communities",
    sub: "Reached",
  },
  {
    icon: <Heart size={28} />,
    value: "10,000+",
    label: "Lives",
    sub: "Transformed",
  },
  {
    icon: <Accessibility size={28} />,
    value: "75+",
    label: "Partner Orgs",
    sub: "Nationwide",
  },
];

const regions = [
  {
    name: "North-West",
    states: [
      "Katsina",
      "Sokoto",
      "Kebbi",
      "Zamfara",
      "Kano",
      "Jigawa",
      "Kaduna",
    ],
    color: "#1B3A6B",
  },
  {
    name: "North-East",
    states: ["Borno", "Yobe", "Adamawa", "Taraba", "Bauchi", "Gombe"],
    color: "#2E8B57",
  },
  {
    name: "North-Central",
    states: ["FCT", "Niger", "Kwara", "Kogi", "Nassarawa", "Plateau", "Benue"],
    color: "#7c3aed",
  },
  {
    name: "South-West",
    states: ["Lagos", "Oyo", "Ogun", "Osun", "Ondo", "Ekiti"],
    color: "#ea580c",
  },
  {
    name: "South-East",
    states: ["Enugu", "Anambra", "Imo", "Ebonyi", "Abia"],
    color: "#0369a1",
  },
  {
    name: "South-South",
    states: ["Rivers", "Delta", "Edo", "Bayelsa", "Akwa Ibom", "Cross River"],
    color: "#ca8a04",
  },
];

export default function OurReachPage() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section
        style={{
          position: "relative",
          background: "#1B3A6B",
          minHeight: "320px",
          display: "flex",
          alignItems: "flex-end",
        }}
        aria-label="Our Reach hero"
      >
        <div style={{ position: "absolute", inset: 0 }}>
          {/* 🖼️  Replace IMAGES.hero above */}
          <Image
            src={IMAGES.hero}
            alt="DHRF team working with communities across Nigeria"
            fill
            className="object-cover"
            style={{ opacity: 0.35 }}
            priority
            sizes="100vw"
          />
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "4.5rem 1.5rem 3rem",
            width: "100%",
          }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem" }}>
            <ol
              style={{
                display: "flex",
                gap: "0.4rem",
                alignItems: "center",
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ opacity: 0.4 }}>›</li>
              <li>
                <Link
                  href="/impact"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                >
                  Impact
                </Link>
              </li>
              <li style={{ opacity: 0.4 }}>›</li>
              <li style={{ color: "#2E8B57", fontWeight: 600 }}>Our Reach</li>
            </ol>
          </nav>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2E8B57",
              marginBottom: "0.75rem",
            }}
          >
            Our Reach
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "0.75rem",
            }}
          >
            Reaching Communities
            <br />
            Across Nigeria
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.95rem",
              maxWidth: "440px",
              lineHeight: 1.7,
            }}
          >
            From urban centres to remote villages, our programs are delivering
            real change to persons with disabilities in all six geo-political
            zones.
          </p>
        </div>
      </section>

      {/* Reach stats */}
      <section
        style={{ background: "#fff", padding: "3rem 0 2rem" }}
        aria-label="Reach statistics"
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
            }}
            role="list"
          >
            {reachStats.map(({ icon, value, label, sub }) => (
              <div
                key={label}
                role="listitem"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "0.9rem",
                  padding: "1.75rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span
                  style={{ color: "#2E8B57", marginBottom: "0.25rem" }}
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#1B3A6B",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#2d3748",
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: "0.75rem", color: "#718096" }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map section */}
      <section
        style={{ background: "#f8fafc", padding: "4rem 0" }}
        aria-labelledby="map-heading"
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Map image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/10",
                borderRadius: "1rem",
                overflow: "hidden",
                background: "#e2e8f0",
              }}
            >
              {/* 🖼️  Replace IMAGES.map above */}
              <Image
                src={IMAGES.map}
                alt="Map of Nigeria showing DHRF's operational regions"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            {/* Regions list */}
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
                Coverage
              </p>
              <h2
                id="map-heading"
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 900,
                  color: "#1a202c",
                  marginBottom: "1.5rem",
                }}
              >
                6 Geo-Political Zones.
                <br />
                28 States. One Mission.
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {regions.map(({ name, states, color }) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: color,
                        flexShrink: 0,
                        marginTop: "0.3rem",
                      }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          color: "#1a202c",
                        }}
                      >
                        {name}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "#718096" }}>
                        {states.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section style={{ background: "#fff", padding: "2.5rem 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <Link
            href="/impact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#1B3A6B",
              fontWeight: 700,
              fontSize: "0.88rem",
              textDecoration: "none",
            }}
          >
            ← Back to Impact Overview
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
