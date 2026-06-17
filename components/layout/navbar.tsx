"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdAccessible } from "react-icons/md";
import "../../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/impact", label: "Impact" },
    { href: "/get-help", label: "Get Help" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar-wrapper">
      {/* ── TOP LEAFLET / TOP BAR ── */}
      <div className="navbar-leaflet">
        <div className="container-custom">
          <div className="leaflet-inner">
            <p className="leaflet-tagline">
              Creating inclusive communities. Empowering lives. Restoring hope.
            </p>
            <div className="leaflet-right">
              <a href="tel:+2348031234567" className="leaflet-contact">
                <FaPhone size={12} />
                <span>+234 803 123 4567</span>
              </a>
              <a href="mailto:info@dhrf.org.ng" className="leaflet-contact">
                <FaEnvelope size={12} />
                <span>info@dhrf.org.ng</span>
              </a>
              <div className="leaflet-socials">
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
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <nav className="navbar">
        <div className="container-custom">
          <div className="navbar-inner">
            {/* Logo */}
            <Link href="/" className="navbar-logo" aria-label="DHRF Home">
              <div className="navbar-logo-icon">
                <MdAccessible size={28} color="#fff" />
              </div>
              <div className="navbar-logo-text">
                <span className="navbar-logo-brand">DHRF</span>
                <span className="navbar-logo-sub">
                  Disability Hope &amp; Recovery Foundation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navbar-link ${
                    link.href === "/" ? "navbar-link-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Donate Button */}
            <Link href="/donate" className="donateBtn">
              <FaHeart size={14} />
              <span>Donate Now</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-mobile-btn"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`navbar-mobile-menu ${isOpen ? "open" : ""}`}>
            <div className="navbar-mobile-links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                className="navbar-mobile-donate"
                onClick={() => setIsOpen(false)}
              >
                <FaHeart size={14} />
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
