"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#programs", label: "Our Programs" },
    { href: "#impact", label: "Impact & Reports" },
    { href: "#get-help", label: "Get Help" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="container-custom">
          <div className="navbar-inner">
            {/* Desktop Navigation */}
            <div className="navbar-links">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="navbar-link">
                  {link.label}
                </Link>
              ))}
              <Link href="/donate" className={"donateBtn"}>
                <FaHeart size={14} />
                <span>Donate Now</span>
              </Link>
            </div>

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
                href="#donate"
                className="navbar-mobile-donate"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
