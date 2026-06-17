import type { Metadata } from "next";
import Head from "next/head";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHeart,
  FaUsers,
  FaHandshake,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdOutlineDevices,
  MdCampaign,
  MdSchool,
  MdWork,
  MdPeople,
  MdAccessible,
} from "react-icons/md";
import Link from "next/link";
import Navbar from "../components/layout/navbar";

import "../styles/home.css";

export const metadata: Metadata = {
  title:
    "DHRF – Disability Hope & Recovery Foundation | Empowering Persons with Disabilities in Nigeria",
  description:
    "DHRF (Disability Hope & Recovery Foundation) provides inclusive healthcare, rehabilitation, assistive devices, advocacy and empowerment programs that enable persons with disabilities and vulnerable individuals to live with dignity, independence and hope across Nigeria and beyond.",
  keywords:
    "disability support Nigeria, DHRF, Disability Hope Recovery Foundation, assistive devices Nigeria, wheelchair Nigeria, inclusive healthcare, rehabilitation services Nigeria, disability empowerment, persons with disabilities, NGO Nigeria disability",
  openGraph: {
    title: "DHRF – Empowering Persons with Disabilities for a Better Tomorrow",
    description:
      "We provide healthcare, rehabilitation, assistive devices, advocacy and empowerment programs that enable persons with disabilities and vulnerable individuals to live with dignity, independence and hope.",
    url: "https://dhrf.org.ng",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DHRF – Disability Hope & Recovery Foundation",
    description:
      "Empowering Persons with Disabilities for a Better Tomorrow. Healthcare, rehabilitation, assistive devices & advocacy across Nigeria.",
  },
  alternates: {
    canonical: "https://dhrf.org.ng",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={"wrapper"}>
        {/* ── TOP BAR ── */}
        <div className={"topBar"}>
          <p className={"topBarTagline"}>
            Creating inclusive communities. Empowering lives. Restoring hope.
          </p>
          <div className={"topBarRight"}>
            <a href="tel:+2348031234567" className={"topBarContact"}>
              <FaPhone size={12} />
              <span>+234 803 123 4567</span>
            </a>
            <a href="mailto:info@dhrf.org.ng" className={"topBarContact"}>
              <FaEnvelope size={12} />
              <span>info@dhrf.org.ng</span>
            </a>
            <div className={"topBarSocials"}>
              <a href="#" aria-label="Facebook">
                <FaFacebookF size={13} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter size={13} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={13} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn size={13} />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* ── NAVBAR ── */}
        <header className={"navbar"}>
          <div className={"navInner"}>
            <Link href="/" className={"logo"} aria-label="DHRF Home">
              <div className={"logoIcon"}>
                <MdAccessible size={28} color="#fff" />
              </div>
              <div className={"logoText"}>
                <span className={"logoBrand"}>DHRF</span>
                <span className={"logoSub"}>
                  Disability Hope &amp; Recovery Foundation
                </span>
              </div>
            </Link>

            <nav className={"navLinks"} aria-label="Primary Navigation">
              <Link href="/" className={"navLink navLinkActive"}>
                Home
              </Link>
              <div className={"navDropdown"}>
                <Link href="/about" className={"navLink"}>
                  About Us ▾
                </Link>
              </div>
              <div className={"navDropdown"}>
                <Link href="/programs" className={"navLink"}>
                  Programs ▾
                </Link>
              </div>
              <div className={"navDropdown"}>
                <Link href="/impact" className={"navLink"}>
                  Impact ▾
                </Link>
              </div>
              <Link href="/get-help" className={"navLink"}>
                Get Help
              </Link>
              <div className={"navDropdown"}>
                <Link href="/get-involved" className={"navLink"}>
                  Get Involved ▾
                </Link>
              </div>
              <Link href="/news" className={"navLink"}>
                News
              </Link>
              <Link href="/contact" className={"navLink"}>
                Contact
              </Link>
            </nav>

            <Link href="/donate" className={"donateBtn"}>
              <FaHeart size={14} />
              <span>Donate Now</span>
            </Link>
          </div>
        </header>

        <Navbar />
        <main>
          {/* ── HERO ── */}
          <section
            className={"hero"}
            aria-label="Hero: Empowering Persons with Disabilities"
          >
            <div className={"heroContent"}>
              <p className={"heroEyebrow"}>Inclusive Health. Dignity. Hope.</p>
              <h1 className={"heroTitle"}>
                Empowering Persons
                <br />
                with Disabilities
                <br />
                for a Better Tomorrow.
              </h1>
              <p className={"heroDesc"}>
                We provide healthcare, rehabilitation, assistive devices,
                advocacy and empowerment programs that enable persons with
                disabilities and vulnerable individuals to live with dignity,
                independence and hope.
              </p>
              <div className={"heroCtas"}>
                <a href="/donate" className={"heroCtaPrimary"}>
                  <FaHeart size={14} /> Donate Now
                </a>
                <a href="/get-help" className={"heroCtaSecondary"}>
                  <FaUsers size={14} /> Request Support
                </a>
                <a href="/get-involved" className={"heroCtaOutline"}>
                  <FaHandshake size={14} /> Partner With Us
                </a>
              </div>
            </div>
            <div className={"heroImageWrap"}>
              <img
                src="https://unsplash.com/photos/a-man-and-a-woman-in-scrubs-sitting-next-to-each-other-in-a-hospital-DlMrjA-ny1w"
                alt="Healthcare worker assisting a young person using a wheelchair"
                className={"heroImage"}
                width={700}
                height={520}
              />
            </div>
          </section>

          {/* ── STATS BAR ── */}
          <section className={"statsBar"} aria-label="Our Impact Statistics">
            <div className={"statsInner"}>
              <article className={"statItem"}>
                <FaUsers size={30} color="#1a56a0" />
                <div>
                  <span className={"statNumber"}>10,000+</span>
                  <span className={"statLabel"}>Lives Reached</span>
                  <span className={"statSub"}>Across Nigeria and beyond</span>
                </div>
              </article>
              <article className={"statItem"}>
                <MdAccessible size={34} color="#1a56a0" />
                <div>
                  <span className={"statNumber"}>2,500+</span>
                  <span className={"statLabel"}>Assistive Devices</span>
                  <span className={"statSub"}>
                    Distributed to those in need
                  </span>
                </div>
              </article>
              <article className={"statItem"}>
                <FaHeart size={28} color="#1a56a0" />
                <div>
                  <span className={"statNumber"}>500+</span>
                  <span className={"statLabel"}>Therapy Sessions</span>
                  <span className={"statSub"}>Delivered with care</span>
                </div>
              </article>
              <article className={"statItem"}>
                <FaHandshake size={30} color="#1a56a0" />
                <div>
                  <span className={"statNumber"}>100+</span>
                  <span className={"statLabel"}>Community Programs</span>
                  <span className={"statSub"}>Implemented successfully</span>
                </div>
              </article>
            </div>
          </section>

          {/* ── PROGRAMS ── */}
          <section
            className={"programs"}
            id="programs"
            aria-labelledby="programs-heading"
          >
            <div className={"sectionContainer"}>
              <p className={"sectionEyebrow"}>What We Do</p>
              <h2 id="programs-heading" className={"sectionTitle"}>
                Our Programs
              </h2>
              <p className={"sectionDesc"}>
                We implement life-changing programs that promote inclusive
                health, independence and opportunity.
              </p>

              <div className={"programsGrid"}>
                <article className={"programCard"}>
                  <div className={"programIcon iconGreen"}>
                    <MdHealthAndSafety size={28} color="#fff" />
                  </div>
                  <div className={"programBody"}>
                    <h3 className={"programTitle"}>Inclusive Healthcare</h3>
                    <p className={"programDesc"}>
                      Providing accessible medical care, health screenings,
                      drugs and specialist treatment.
                    </p>
                    <a
                      href="/programs/healthcare"
                      className={"programArrow"}
                      aria-label="Learn more about Inclusive Healthcare"
                    >
                      <FaArrowRight size={14} />
                    </a>
                  </div>
                </article>

                <article className={"programCard"}>
                  <div className={"programIcon iconPurple"}>
                    <MdPeople size={28} color="#fff" />
                  </div>
                  <div className={"programBody"}>
                    <h3 className={"programTitle"}>Rehabilitation Services</h3>
                    <p className={"programDesc"}>
                      Physical, occupational, speech therapy and counseling to
                      improve quality of life.
                    </p>
                    <a
                      href="/programs/rehabilitation"
                      className={"programArrow"}
                      aria-label="Learn more about Rehabilitation Services"
                    >
                      <FaArrowRight size={14} />
                    </a>
                  </div>
                </article>

                <article className={"programCard"}>
                  <div className={"programIcon iconOrange"}>
                    <MdAccessible size={28} color="#fff" />
                  </div>
                  <div className={"programBody"}>
                    <h3 className={"programTitle"}>Assistive Devices</h3>
                    <p className={"programDesc"}>
                      Supplying and distributing wheelchairs, hearing aids,
                      white canes and more.
                    </p>
                    <a
                      href="/programs/assistive-devices"
                      className={"programArrow"}
                      aria-label="Learn more about Assistive Devices"
                    >
                      <FaArrowRight size={14} />
                    </a>
                  </div>
                </article>

                <article className={"programCard"}>
                  <div className={"programIcon iconBlue"}>
                    <MdCampaign size={28} color="#fff" />
                  </div>
                  <div className={"programBody"}>
                    <h3 className={"programTitle"}>Advocacy &amp; Inclusion</h3>
                    <p className={"programDesc"}>
                      Promoting disability rights and inclusion through
                      advocacy, public education and policy engagement.
                    </p>
                    <a
                      href="/programs/advocacy"
                      className={"programArrow"}
                      aria-label="Learn more about Advocacy and Inclusion"
                    >
                      <FaArrowRight size={14} />
                    </a>
                  </div>
                </article>

                <article className={"programCard"}>
                  <div className={"programIcon iconYellow"}>
                    <MdSchool size={28} color="#fff" />
                  </div>
                  <div className={"programBody"}>
                    <h3 className={"programTitle"}>Capacity Building</h3>
                    <p className={"programDesc"}>
                      Training caregivers, teachers, health workers and
                      community leaders on inclusive practices.
                    </p>
                    <a
                      href="/programs/capacity-building"
                      className={"programArrow"}
                      aria-label="Learn more about Capacity Building"
                    >
                      <FaArrowRight size={14} />
                    </a>
                  </div>
                </article>

                <article className={"programCard"}>
                  <div className={"programIcon iconRed"}>
                    <MdWork size={28} color="#fff" />
                  </div>
                  <div className={"programBody"}>
                    <h3 className={"programTitle"}>Economic Empowerment</h3>
                    <p className={"programDesc"}>
                      Skills acquisition and vocational training for
                      self-reliance and sustainable livelihoods.
                    </p>
                    <a
                      href="/programs/economic-empowerment"
                      className={"programArrow"}
                      aria-label="Learn more about Economic Empowerment"
                    >
                      <FaArrowRight size={14} />
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* ── SUCCESS STORY ── */}
          <section className={"story"} aria-labelledby="story-heading">
            <div className={"storyInner"}>
              <div className={"storyImageWrap"}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Amina, a DHRF beneficiary, smiling in her wheelchair"
                  className={"storyImage"}
                  width={500}
                  height={400}
                />
              </div>
              <div className={"storyContent"}>
                <p className={"storyEyebrow"}>Success Story</p>
                <h2 id="story-heading" className={"storyTitle"}>
                  Amina&apos;s Journey of Hope
                </h2>
                <blockquote className={"storyQuote"}>
                  &ldquo;After receiving a wheelchair and therapy through DHRF,
                  I regained my independence. Today, I am back in school and
                  inspiring others like me.&rdquo;
                </blockquote>
                <p className={"storyAttrib"}>– Amina, Beneficiary</p>
                <a href="/stories" className={"storyBtn"}>
                  Read More Stories <FaArrowRight size={14} />
                </a>
                <div className={"storyNav"}>
                  <button aria-label="Previous story" className={"storyNavBtn"}>
                    <FaChevronLeft size={14} />
                  </button>
                  <button aria-label="Next story" className={"storyNavBtn"}>
                    <FaChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ── DONATE ── */}
          <section className={"donate"} aria-labelledby="donate-heading">
            <div className={"donateInner"}>
              <div className={"donateLeft"}>
                <h2 id="donate-heading" className={"donateTitle"}>
                  Your Support Can Change a Life
                </h2>
                <p className={"donateDesc"}>
                  Every donation helps us reach more people, provide essential
                  services, and build a more inclusive society for all.
                </p>
                <div className={"donateAmounts"}>
                  {["₦5,000", "₦10,000", "₦25,000", "₦50,000"].map(
                    (amount, i) => (
                      <button
                        key={amount}
                        className={
                          i === 2 ? "amountBtn amountBtnActive" : "amountBtn"
                        }
                      >
                        {amount}
                      </button>
                    ),
                  )}
                  <button className={"amountBtnOther"}>Other Amount</button>
                </div>
                <div className={"donateCtas"}>
                  <a href="/donate" className={"donateNowBtn"}>
                    <FaHeart size={14} /> Donate Securely Now
                  </a>
                  <a href="/donate#ways" className={"donateOtherLink"}>
                    Other Ways to Give <FaArrowRight size={13} />
                  </a>
                </div>
              </div>
              <div className={"donateRight"}>
                <div className={"donateIconCircle"}>
                  <FaHeart size={36} color="#1a56a0" />
                </div>
                <ul className={"donateOptions"}>
                  <li>
                    <FaCheckCircle size={15} color="#2ecc71" /> One-time
                    Donation
                  </li>
                  <li>
                    <FaCheckCircle size={15} color="#2ecc71" /> Monthly Giving
                  </li>
                  <li>
                    <FaCheckCircle size={15} color="#2ecc71" /> Sponsor a
                    Program
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── PARTNERS ── */}
          <section className={"partners"} aria-labelledby="partners-heading">
            <div className={"sectionContainer"}>
              <p className={"sectionEyebrow"}>Our Partners</p>
              <h2 id="partners-heading" className={"sectionTitle"}>
                Working Together for Greater Impact
              </h2>
              <div className={"partnersLogos"}>
                {[
                  { name: "Federal Ministry of Health", abbr: "FMOH" },
                  { name: "World Health Organization", abbr: "WHO" },
                  { name: "CBM", abbr: "CBM" },
                  { name: "Sightsavers", abbr: "SS" },
                  { name: "NEMA", abbr: "NEMA" },
                  { name: "St. John's Medical Centre", abbr: "SJMC" },
                ].map((p) => (
                  <div key={p.abbr} className={"partnerLogo"} title={p.name}>
                    <span className={"partnerAbbr"}>{p.abbr}</span>
                    <span className={"partnerName"}>{p.name}</span>
                  </div>
                ))}
              </div>
              <div className={"partnerDots"}>
                <span className={"dot dotActive"} />
                <span className={"dot"} />
                <span className={"dot"} />
                <span className={"dot"} />
                <span className={"dot"} />
              </div>
            </div>
          </section>
        </main>

        {/* ── FOOTER ── */}
        <footer className={"footer"} aria-label="Site Footer">
          <div className={"footerTop"}>
            <div className={"footerBrand"}>
              <div className={"footerLogo"}>
                <div className={"footerLogoIcon"}>
                  <MdAccessible size={22} color="#fff" />
                </div>
                <div>
                  <span className={"footerLogoBrand"}>DHRF</span>
                  <span className={"footerLogoSub"}>
                    Disability Hope &amp; Recovery Foundation
                  </span>
                </div>
              </div>
              <p className={"footerAbout"}>
                We advance inclusive health, rehabilitation, advocacy and
                empowerment for persons with disabilities and vulnerable
                communities.
              </p>
              <div className={"footerSocials"}>
                <a href="#" aria-label="Facebook">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" aria-label="Twitter / X">
                  <FaTwitter size={14} />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram size={14} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn size={14} />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube size={14} />
                </a>
              </div>
            </div>

            <nav className={"footerCol"} aria-label="Quick Links">
              <h3 className={"footerColTitle"}>Quick Links</h3>
              <a href="/about">About Us</a>
              <a href="/programs">Our Programs</a>
              <a href="/impact">Impact &amp; Reports</a>
              <a href="/get-help">Get Help</a>
              <a href="/get-involved">Get Involved</a>
              <a href="/contact">Contact Us</a>
            </nav>

            <nav className={"footerCol"} aria-label="Programs">
              <h3 className={"footerColTitle"}>Programs</h3>
              <a href="/programs/healthcare">Healthcare</a>
              <a href="/programs/rehabilitation">Rehabilitation</a>
              <a href="/programs/assistive-devices">Assistive Devices</a>
              <a href="/programs/advocacy">Advocacy</a>
              <a href="/programs/capacity-building">Capacity Building</a>
              <a href="/programs/economic-empowerment">Economic Empowerment</a>
            </nav>

            <address className={"footerCol"} style={{ fontStyle: "normal" }}>
              <h3 className={"footerColTitle"}>Contact Us</h3>
              <span className={"footerContactItem"}>
                <FaMapMarkerAlt size={13} />
                No. 15 Unity Road, Katsina State, Nigeria.
              </span>
              <a href="tel:+2348031234567" className={"footerContactItem"}>
                <FaPhone size={13} /> +234 803 123 4567
              </a>
              <a href="mailto:info@dhrf.org.ng" className={"footerContactItem"}>
                <FaEnvelope size={13} /> info@dhrf.org.ng
              </a>
              <span className={"footerContactItem"}>
                <span className={"footerHours"}>
                  Mon – Fri: 8:00 AM – 5:00 PM
                </span>
              </span>
            </address>

            <div className={"footerNewsletter"}>
              <h3 className={"footerColTitle"}>Subscribe to Our Newsletter</h3>
              <p className={"footerNewsletterDesc"}>
                Stay updated with our latest news and impact stories.
              </p>
              <div className={"newsletterForm"}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={"newsletterInput"}
                  aria-label="Email address for newsletter"
                />
                <button className={"newsletterBtn"} type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className={"footerBottom"}>
            <p className={"footerCopy"}>
              © 2025 Disability Hope &amp; Recovery Foundation (DHRF). All
              rights reserved.
            </p>
            <div className={"footerLegal"}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
