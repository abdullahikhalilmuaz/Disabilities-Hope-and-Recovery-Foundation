import { Heart, UserRound, Handshake } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.media}>
        {/* TODO: replace with /public/images/hero-photo.jpg via next/image once supplied */}
        <img
          src="https://picsum.photos/seed/dhrf-hero/1600/900"
          alt="A young boy in a wheelchair smiling while a healthcare worker kneels beside him during a community outreach visit"
          className={styles.image}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Inclusive Health. Dignity. Hope.</p>
          <h1 className={styles.heading}>
            Empowering Persons with Disabilities for a Better Tomorrow.
          </h1>
          <p className={styles.lead}>
            We provide healthcare, rehabilitation, assistive devices, advocacy
            and empowerment programs that enable persons with disabilities and
            vulnerable individuals to live with dignity, independence and hope.
          </p>
          <div className={styles.actions}>
            <Button href="/donate" variant="primary" icon={<Heart size={16} />}>
              Donate Now
            </Button>
            <Button
              href="/get-help"
              variant="outline"
              icon={<UserRound size={16} />}
            >
              Request Support
            </Button>
            <Button
              href="/get-involved/partner"
              variant="ghost"
              icon={<Handshake size={16} />}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
