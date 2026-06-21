"use client";

import { useState } from "react";
import { Gift, Calendar, Heart, Lock, ArrowRight, Loader2 } from "lucide-react";
// import { initializeDonation } from "../../../server/src/libs/donations";
// import type { DonationType } from "../../../server/src/libs/donations";

import {
  initializeDonation,
  type DonationType,
} from "@/libs/api/donations";
// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const PRESET_AMOUNTS = [2000, 5000, 10000, 25000];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function DonationWidget() {
  const [donationType, setDonationType] = useState<DonationType>("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(5000);
  const [customAmount, setCustomAmount] = useState("");

  // Donor details — required by the backend (Donation model: fullName, email)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const numericAmount =
    selectedAmount === "custom" ? Number(customAmount) || 0 : selectedAmount;

  const displayAmount = `₦${numericAmount.toLocaleString()}`;

  const validate = () => {
    const next: Record<string, string> = {};

    if (!fullName.trim()) next.fullName = "Please enter your full name";
    if (!email.trim()) {
      next.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email";
    }
    if (!numericAmount || numericAmount < 100) {
      next.amount = "Minimum donation is ₦100";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handlePaystack = async () => {
    setSubmitError("");

    if (!validate()) return;

    setSubmitting(true);

    try {
      const res = await initializeDonation({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        amount: numericAmount,
        message: message.trim() || undefined,
        donationType,
      });

      if (res.success && res.authorization_url) {
        // Send the donor to Paystack's hosted checkout. Paystack will
        // redirect them back to PAYSTACK_CALLBACK_URL (your /donate/callback
        // page) once they finish — that page calls /api/donations/verify.
        window.location.href = res.authorization_url;
      } else {
        setSubmitError(
          res.message || "Could not start donation. Please try again.",
        );
        setSubmitting(false);
      }
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="donate-choose">
      <div className="donate-choose__inner">
        {/* Header */}
        <div className="donate-choose__header">
          <div className="donate-choose__heart-icon">
            <Heart size={28} />
          </div>
          <h2 className="donate-choose__title">Choose Your Donation</h2>
          <p className="donate-choose__sub">
            Select an amount or enter a custom value
          </p>
        </div>

        {/* One-time / Monthly tabs */}
        <div
          className="donate-tabs"
          role="tablist"
          aria-label="Donation frequency"
        >
          <button
            role="tab"
            aria-selected={donationType === "one-time"}
            className={`donate-tab${donationType === "one-time" ? " donate-tab--active" : ""}`}
            onClick={() => setDonationType("one-time")}
          >
            <Gift size={15} aria-hidden="true" />
            One-time Donation
          </button>
          <button
            role="tab"
            aria-selected={donationType === "monthly"}
            className={`donate-tab${donationType === "monthly" ? " donate-tab--active" : ""}`}
            onClick={() => setDonationType("monthly")}
          >
            <Calendar size={15} aria-hidden="true" />
            Monthly Donation
          </button>
        </div>

        {/* Amount presets */}
        <div
          className="donate-amounts"
          role="group"
          aria-label="Select donation amount"
        >
          {PRESET_AMOUNTS.map((amount) => (
            <button
              key={amount}
              className={`donate-amount-card${selectedAmount === amount ? " donate-amount-card--active" : ""}`}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
              aria-pressed={selectedAmount === amount}
              aria-label={`Donate ₦${amount.toLocaleString()}`}
            >
              <span className="donate-amount-card__icon" aria-hidden="true">
                <Heart size={18} />
              </span>
              <span className="donate-amount-card__value">
                ₦{amount.toLocaleString()}
              </span>
            </button>
          ))}

          {/* Custom amount */}
          <button
            className={`donate-amount-card donate-amount-card--custom${selectedAmount === "custom" ? " donate-amount-card--active" : ""}`}
            onClick={() => setSelectedAmount("custom")}
            aria-pressed={selectedAmount === "custom"}
            aria-label="Enter a custom donation amount"
          >
            <span className="donate-amount-card__icon" aria-hidden="true">
              {/* Dotted circle */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle
                  cx="9"
                  cy="9"
                  r="7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                />
                <path
                  d="M9 6v6M6 9h6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="donate-amount-card__value">Other Amount</span>
            <span style={{ fontSize: "0.7rem", color: "#718096" }}>Custom</span>
          </button>
        </div>

        {/* Custom amount input */}
        <div
          className={`donate-custom-input-wrap${selectedAmount === "custom" ? " donate-custom-input-wrap--visible" : ""}`}
        >
          <label htmlFor="custom-amount" className="donate-field__label">
            Enter amount (₦)
          </label>
          <input
            id="custom-amount"
            type="number"
            min="100"
            placeholder="e.g. 15000"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="donate-custom-input"
            aria-label="Custom donation amount in Naira"
          />
        </div>
        {errors.amount && (
          <p className="donate-field__error">{errors.amount}</p>
        )}

        {/* Donor details — required by the backend to record + receipt the donation */}
        <div className="donate-donor-fields">
          <div className="donate-field">
            <label htmlFor="donor-name" className="donate-field__label">
              Full Name
            </label>
            <input
              id="donor-name"
              type="text"
              placeholder="e.g. Ada Lovelace"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="donate-custom-input"
              autoComplete="name"
            />
            {errors.fullName && (
              <p className="donate-field__error">{errors.fullName}</p>
            )}
          </div>

          <div className="donate-field">
            <label htmlFor="donor-email" className="donate-field__label">
              Email Address
            </label>
            <input
              id="donor-email"
              type="email"
              placeholder="e.g. ada@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="donate-custom-input"
              autoComplete="email"
            />
            {errors.email && (
              <p className="donate-field__error">{errors.email}</p>
            )}
          </div>

          <div className="donate-field">
            <label htmlFor="donor-phone" className="donate-field__label">
              Phone Number{" "}
              <span className="donate-field__optional">(optional)</span>
            </label>
            <input
              id="donor-phone"
              type="tel"
              placeholder="e.g. 0901 234 5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="donate-custom-input"
              autoComplete="tel"
            />
          </div>

          <div className="donate-field donate-field--full">
            <label htmlFor="donor-message" className="donate-field__label">
              Leave a message{" "}
              <span className="donate-field__optional">(optional)</span>
            </label>
            <textarea
              id="donor-message"
              placeholder="A word of support for our work…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="donate-custom-input donate-message-input"
              rows={2}
            />
          </div>
        </div>

        {/* Summary + CTA row */}
        <div className="donate-summary-row">
          <div>
            <p className="donate-summary-row__label">
              You are donating{donationType === "monthly" ? " monthly" : ""}:
            </p>
            <p className="donate-summary-row__amount">{displayAmount}</p>
          </div>
          <button
            className="donate-now-btn"
            onClick={handlePaystack}
            disabled={submitting}
            aria-label={`Donate ${displayAmount} now`}
          >
            {submitting ? (
              <>
                <Loader2
                  size={17}
                  className="donate-now-btn__spinner"
                  aria-hidden="true"
                />
                Redirecting…
              </>
            ) : (
              <>
                <Heart size={17} aria-hidden="true" />
                Donate Now
                <ArrowRight size={15} aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        {submitError && (
          <p className="donate-field__error donate-field__error--center">
            {submitError}
          </p>
        )}

        {/* Secure note */}
        <p className="donate-secure-note">
          <Lock size={13} aria-hidden="true" />
          Secure donation powered by trusted payment partners.
        </p>
      </div>
    </div>
  );
}
