import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./success-story.module.css";

export default function SuccessStory() {
  return (
    <section className={styles.section} aria-labelledby="success-story-heading">
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.imageWrap}>
            {/* TODO: replace with /public/images/success-story.jpg via next/image once supplied */}
            <img
              src="https://picsum.photos/seed/dhrf-amina/640/640"
              alt="Amina, a DHRF beneficiary, smiling outdoors in her wheelchair"
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>Success Story</p>
            <h2 id="success-story-heading" className={styles.title}>
              Amina&apos;s Journey of Hope
            </h2>
            <blockquote className={styles.quote}>
              <p>
                After receiving a wheelchair and therapy through DHRF, I
                regained my independence. Today, I am back in school and
                inspiring others like me.
              </p>
              <footer className={styles.attribution}>
                — Amina, Beneficiary
              </footer>
            </blockquote>

            <div className={styles.footerRow}>
              <Button href="/news/stories" icon={<ArrowRight size={16} />} iconPosition="right">
                Read More Stories
              </Button>

              <div className={styles.carouselControls}>
                <button
                  type="button"
                  className={styles.carouselButton}
                  aria-label="Previous story"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  type="button"
                  className={styles.carouselButton}
                  aria-label="Next story"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}