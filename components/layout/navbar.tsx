"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Heart,
  HeartHandshake,
} from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import styles from "./navbar.module.css";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Inclusive Healthcare", href: "/programs/healthcare" },
      { label: "Rehabilitation Services", href: "/programs/rehabilitation" },
      { label: "Assistive Devices", href: "/programs/assistive-devices" },
      { label: "Advocacy & Inclusion", href: "/programs/advocacy" },
      { label: "Capacity Building", href: "/programs/caregiver-training" },
      { label: "Economic Empowerment", href: "/programs/economic-empowerment" },
      { label: "Mobile Clinics", href: "/programs/mobile-clinic" },
      { label: "Research & Knowledge", href: "/programs/research" },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
    children: [
      { label: "Impact", href: "/impact" },
      { label: "Our Reach", href: "/impact/our-reach" },
      { label: "Annual Reports", href: "/impact/annual-reports" },
    ],
  },
  { label: "Get Help", href: "/get-help" },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Partner With Us", href: "/get-involved/partner" },
      { label: "Careers", href: "/get-involved/careers" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebook },
  { label: "Twitter", href: "https://twitter.com", Icon: FaTwitter },
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: FaLinkedin },
  { label: "YouTube", href: "https://youtube.com", Icon: FaYoutube },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      {/* Top utility bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <p className={styles.tagline}>
            Creating inclusive communities. Empowering lives. Restoring hope.
          </p>
          <div className={styles.topBarRight}>
            <a href="tel:+2348031234567" className={styles.topBarItem}>
              <Phone size={14} aria-hidden="true" />
              <span>+234 803 123 4567</span>
            </a>
            <a href="mailto:info@dhrf.org.ng" className={styles.topBarItem}>
              <Mail size={14} aria-hidden="true" />
              <span>info@dhrf.org.ng</span>
            </a>
            <ul className={styles.socialList} aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`Visit DHRF on ${label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={styles.mainNav}>
        <div className={styles.mainNavInner}>
          <Link href="/" className={styles.logo} aria-label="DHRF home">
            <span className={styles.logoIcon} aria-hidden="true">
              <HeartHandshake size={26} />
            </span>
            <span className={styles.logoText}>
              <span className={styles.logoName}>DHRF</span>
              <span className={styles.logoSub}>
                Disability Hope &amp; Recovery Foundation
              </span>
            </span>
          </Link>

          <nav
            className={`${styles.nav} ${mobileOpen ? styles.navOpen : ""}`}
            aria-label="Primary"
          >
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li
                  key={link.label}
                  className={styles.navItem}
                  onMouseEnter={() =>
                    link.children && setOpenSubmenu(link.label)
                  }
                  onMouseLeave={() => link.children && setOpenSubmenu(null)}
                >
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        className={`${styles.navLink} ${
                          isActive(link.href) ? styles.navLinkActive : ""
                        }`}
                        aria-expanded={openSubmenu === link.label}
                        onClick={() =>
                          setOpenSubmenu(
                            openSubmenu === link.label ? null : link.label,
                          )
                        }
                      >
                        {link.label}
                        <ChevronDown size={15} aria-hidden="true" />
                      </button>
                      <ul
                        className={`${styles.submenu} ${
                          openSubmenu === link.label ? styles.submenuOpen : ""
                        }`}
                      >
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${
                        isActive(link.href) ? styles.navLinkActive : ""
                      }`}
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/donate" className={styles.donateButton}>
            <Heart size={16} aria-hidden="true" />
            <span>Donate Now</span>
          </Link>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
