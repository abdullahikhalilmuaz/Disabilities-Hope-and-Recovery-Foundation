"use client";

import { useState } from "react";
import { Heart, ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./donation-cta.module.css";

const AMOUNTS = ["₦5,000", "₦10,000", "₦25,000", "₦50,000"];

const GIVING_OPTIONS = [
  "One-time Donation",
  "Monthly Giving",
  "Sponsor a Program",
];

export default function DonationCta() {
  const [selected, setSelected] = useState("₦25,000");

  return (
    <section className={styles.section} aria-labelledby="donate-heading">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id="donate-heading" className={styles.heading}>
            Your Support Can Change a Life
          </h2>
          <p className={styles.lead}>
            Every donation helps us reach more people, provide essential
            services, and build a more inclusive society for all.
          </p>

          <fieldset className={styles.amounts}>
            <legend className="visually-hidden">Choose a donation amount</legend>
            {AMOUNTS.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`${styles.amountButton} ${
                  selected === amount ? styles.amountButtonActive : ""
                }`}
                aria-pressed={selected === amount}
                onClick={() => setSelected(amount)}
              >
                {amount}
              </button>
            ))}
            <button
              type="button"
              className={`${styles.amountButton} ${
                !AMOUNTS.includes(selected) ? styles.amountButtonActive : ""
              }`}
              onClick={() => setSelected("custom")}
            >
              Other Amount
            </button>
          </fieldset>

          <div className={styles.actionsRow}>
            <Button href="/donate" variant="success" icon={<Heart size={16} />}>
              Donate Securely Now
            </Button>
            <Button
              href="/get-involved"
              variant="ghost"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
              className={styles.ghostLight}
            >
              Other Ways to Give
            </Button>
          </div>
        </div>

        <div className={styles.aside}>
          <span className={styles.badge} aria-hidden="true">
            <Heart size={26} />
          </span>
          <ul className={styles.optionList}>
            {GIVING_OPTIONS.map((option) => (
              <li key={option}>
                <Check size={16} aria-hidden="true" />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}