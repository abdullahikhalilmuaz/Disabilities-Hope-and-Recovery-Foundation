import Link from "next/link";
import { MapPin, Phone, Mail, Clock, HeartHandshake } from "lucide-react";
import styles from "./footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Impact & Reports", href: "/impact" },
  { label: "Get Help", href: "/get-help" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact Us", href: "/contact" },
];

const PROGRAM_LINKS = [
  { label: "Healthcare", href: "/programs/healthcare" },
  { label: "Rehabilitation", href: "/programs/rehabilitation" },
  { label: "Assistive Devices", href: "/programs/assistive-devices" },
  { label: "Advocacy", href: "/programs/advocacy" },
  { label: "Capacity Building", href: "/programs/capacity-building" },
  { label: "Economic Empowerment", href: "/programs/economic-empowerment" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebook },
  { label: "Twitter", href: "https://twitter.com", Icon: FaTwitter },
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: FaLinkedin },
  { label: "YouTube", href: "https://youtube.com", Icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.about}>
          <Link href="/" className={styles.logo} aria-label="DHRF home">
            <span aria-hidden="true">
              <HeartHandshake size={24} />
            </span>
            <span>DHRF</span>
          </Link>
          <p className={styles.aboutText}>
            We advance inclusive health, rehabilitation, advocacy and
            empowerment for persons with disabilities and vulnerable
            communities.
          </p>
          <ul className={styles.socialList} aria-label="DHRF on social media">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={`Visit DHRF on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links" className={styles.column}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Program links" className={styles.column}>
          <h3 className={styles.columnTitle}>Programs</h3>
          <ul>
            {PROGRAM_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact Us</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>No. 15 Unity Road, Katsina State, Nigeria.</span>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href="tel:+2348031234567">+234 803 123 4567</a>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href="mailto:info@dhrf.org.ng">info@dhrf.org.ng</a>
            </li>
            <li>
              <Clock size={16} aria-hidden="true" />
              <span>Mon&ndash;Fri: 8:00 AM&ndash;5:00 PM</span>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Subscribe to Our Newsletter</h3>
          <p className={styles.newsletterText}>
            Stay updated with our latest news and impact stories.
          </p>
          <form className={styles.newsletterForm} action="#" method="post">
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} Disability Hope &amp; Recovery
          Foundation (DHRF). All rights reserved.
        </p>
        <ul className={styles.legalLinks}>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-use">Terms of Use</Link>
          </li>
          <li>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
