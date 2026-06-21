"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  XCircle,
  Clock,
  Loader2,
  Heart,
  ShieldCheck,
  Headphones,
  Phone,
  Mail,
  Hash,
  Banknote,
  CreditCard,
  Info,
  AlertTriangle,
  AlertCircle,
  Calendar,
  Download,
  Home,
  RefreshCw,
  Users,
  Package,
  Accessibility,
  BookOpen,
  Megaphone,
  Lock,
} from "lucide-react";
import { verifyDonation } from "../../../../server/src/libs/donations";
import type { DonationRecord } from "../../../../server/src/libs/donations";
import CopyButton from "@/components/donate/copy-button";
import "../donate.css";

type PageStatus = "loading" | "success" | "failed" | "pending" | "error";

// How many times to silently re-check a "pending" payment (e.g. a bank
// transfer that hasn't cleared yet) before settling on "still processing".
const MAX_PENDING_RETRIES = 4;
const RETRY_DELAY_MS = 4000;

// ─────────────────────────────────────────────────────────────────────────
// Small formatting helpers
// ─────────────────────────────────────────────────────────────────────────
function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString()}`;
}

function formatDateTime(iso?: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-NG", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatPaymentMethod(donation: DonationRecord) {
  if (donation.channel === "card") {
    const brand = donation.cardBrand
      ? donation.cardBrand.charAt(0).toUpperCase() + donation.cardBrand.slice(1)
      : "Card";
    return donation.cardLast4 ? `${brand} Card •••• ${donation.cardLast4}` : `${brand} Card`;
  }
  if (donation.channel === "bank_transfer") return "Bank Transfer";
  if (donation.channel === "ussd") return "USSD";
  if (donation.channel === "mobile_money") return "Mobile Money";
  if (donation.channel) {
    return donation.channel.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return "—";
}

function downloadReceipt(donation: DonationRecord) {
  const lines = [
    "DISABILITY HOPE & RECOVERY FOUNDATION (DHRF)",
    "Donation Receipt",
    "================================================",
    "",
    `Donor:           ${donation.fullName}`,
    `Email:           ${donation.email}`,
    `Amount:          ${formatCurrency(donation.amount)}`,
    `Donation Type:   ${donation.donationType === "monthly" ? "Monthly" : "One-time"}`,
    `Payment Method:  ${formatPaymentMethod(donation)}`,
    `Status:          Successful`,
    `Date & Time:     ${formatDateTime(donation.paidAt || donation.createdAt)}`,
    `Reference:       ${donation.reference}`,
    "",
    "Thank you for being a part of the change.",
    "Together, we can do more!",
    "",
    "Need help? donations@dhrf.org.ng | +234 901 234 5678",
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `DHRF-Receipt-${donation.reference}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ─────────────────────────────────────────────────────────────────────────
// Small presentational pieces (kept in this file on purpose)
// ─────────────────────────────────────────────────────────────────────────
function TransactionRow({
  icon,
  label,
  value,
  valueClassName,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  valueClassName?: string;
}) {
  return (
    <div className="donate-receipt__row">
      <span className="donate-receipt__row-label">
        <span className="donate-receipt__row-icon" aria-hidden="true">
          {icon}
        </span>
        {label}
      </span>
      <span className={`donate-receipt__row-value${valueClassName ? ` ${valueClassName}` : ""}`}>
        {value}
      </span>
    </div>
  );
}

function CalloutBox({
  variant,
  icon,
  title,
  children,
}: {
  variant: "success" | "pending" | "failed";
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`donate-receipt__callout donate-receipt__callout--${variant}`}>
      <span className="donate-receipt__callout-icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className="donate-receipt__callout-title">{title}</p>
        {children}
      </div>
    </div>
  );
}

function SecureTrustedBox() {
  return (
    <div className="donate-receipt__secure">
      <ShieldCheck size={20} className="donate-receipt__secure-icon" aria-hidden="true" />
      <p>
        <strong>Secure &amp; Trusted</strong>
        <br />
        This transaction is secured by Paystack. Your payment information is
        safe and encrypted.
      </p>
    </div>
  );
}

function NeedHelpBox() {
  return (
    <div className="donate-receipt__help">
      <div className="donate-receipt__help-header">
        <Headphones size={18} aria-hidden="true" />
        <div>
          <p className="donate-receipt__help-title">Need Help?</p>
          <p className="donate-receipt__help-sub">
            We&rsquo;re here to help if you have any questions about your donation.
          </p>
        </div>
      </div>
      <div className="donate-receipt__help-contacts">
        <a href="tel:+2349012345678" className="donate-receipt__help-contact">
          <Phone size={14} aria-hidden="true" /> +234 901 234 5678
        </a>
        <a href="mailto:donations@dhrf.org.ng" className="donate-receipt__help-contact">
          <Mail size={14} aria-hidden="true" /> donations@dhrf.org.ng
        </a>
        <span className="donate-receipt__help-contact donate-receipt__help-contact--muted">
          Mon&nbsp;-&nbsp;Fri: 8AM&nbsp;-&nbsp;5PM
        </span>
      </div>
    </div>
  );
}

function ReceiptHeader() {
  return (
    <div className="donate-receipt__topbar">
      <div className="donate-receipt__brand">
        <span className="donate-receipt__brand-mark" aria-hidden="true">
          <Heart size={16} />
        </span>
        <div>
          <p className="donate-receipt__brand-name">DHRF</p>
          <p className="donate-receipt__brand-sub">Disability Hope &amp; Recovery Foundation</p>
        </div>
      </div>
      <p className="donate-receipt__secure-by">
        Secure Payment by <Lock size={11} aria-hidden="true" /> paystack
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Main content (needs useSearchParams, so it's wrapped in Suspense below)
// ─────────────────────────────────────────────────────────────────────────
function SuccessContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference") || searchParams.get("trxref");

  const [status, setStatus] = useState<PageStatus>("loading");
  const [donation, setDonation] = useState<DonationRecord | null>(null);
  const [manualChecking, setManualChecking] = useState(false);
  const retriesRef = useRef(0);

  useEffect(() => {
    if (!reference) {
      setStatus("error");
      return;
    }

    let cancelled = false;

    const check = () => {
      verifyDonation(reference)
        .then((res) => {
          if (cancelled || !res.success || !res.data) {
            if (!cancelled) setStatus("error");
            return;
          }

          setDonation(res.data);

          if (res.data.status === "success") {
            setStatus("success");
            return;
          }
          if (res.data.status === "failed") {
            setStatus("failed");
            return;
          }

          if (retriesRef.current < MAX_PENDING_RETRIES) {
            retriesRef.current += 1;
            setStatus("pending");
            window.setTimeout(() => {
              if (!cancelled) check();
            }, RETRY_DELAY_MS);
          } else {
            setStatus("pending");
          }
        })
        .catch(() => {
          if (!cancelled) setStatus("error");
        });
    };

    check();

    return () => {
      cancelled = true;
    };
  }, [reference]);

  const handleManualCheck = () => {
    if (!reference || manualChecking) return;
    setManualChecking(true);
    verifyDonation(reference)
      .then((res) => {
        if (res.success && res.data) {
          setDonation(res.data);
          if (res.data.status === "success") setStatus("success");
          else if (res.data.status === "failed") setStatus("failed");
          else setStatus("pending");
        }
      })
      .finally(() => setManualChecking(false));
  };

  // ── Loading / error are simple centered states (no transaction data yet) ──
  if (status === "loading") {
    return (
      <section className="donate-receipt">
        <div className="donate-receipt__card donate-receipt__card--center">
          <ReceiptHeader />
          <Loader2 className="donate-receipt__spin" size={44} aria-hidden="true" />
          <h1 className="donate-receipt__plain-title">Confirming your donation…</h1>
          <p className="donate-receipt__plain-sub">
            Please wait while we verify your payment with Paystack.
          </p>
        </div>
      </section>
    );
  }

  if (status === "error" || !donation) {
    return (
      <section className="donate-receipt">
        <div className="donate-receipt__card donate-receipt__card--center">
          <ReceiptHeader />
          <XCircle className="donate-receipt__icon-circle donate-receipt__icon-circle--failed" size={48} aria-hidden="true" />
          <h1 className="donate-receipt__plain-title">Something went wrong</h1>
          <p className="donate-receipt__plain-sub">
            We couldn&rsquo;t verify this donation
            {reference ? "" : " — no payment reference was found in the link"}.
            If you were charged, please contact us with your reference so we
            can confirm it manually.
          </p>
          <Link href="/donate" className="donate-receipt__btn donate-receipt__btn--outline">
            <Home size={16} aria-hidden="true" /> Return to Donate Page
          </Link>
        </div>
      </section>
    );
  }

  // ── Success / Pending / Failed — the full receipt-style layout ──
  const variant = status as "success" | "pending" | "failed";

  return (
    <section className="donate-receipt">
      <div className="donate-receipt__card">
        <ReceiptHeader />

        {/* Status icon + heading */}
        <div className="donate-receipt__status-block">
          {variant === "success" && (
            <CheckCircle2
              className="donate-receipt__icon-circle donate-receipt__icon-circle--success"
              size={48}
              aria-hidden="true"
            />
          )}
          {variant === "pending" && (
            <Clock
              className="donate-receipt__icon-circle donate-receipt__icon-circle--pending"
              size={48}
              aria-hidden="true"
            />
          )}
          {variant === "failed" && (
            <XCircle
              className="donate-receipt__icon-circle donate-receipt__icon-circle--failed"
              size={48}
              aria-hidden="true"
            />
          )}

          {variant === "success" && (
            <>
              <h1 className="donate-receipt__title">Thank You!</h1>
              <p className="donate-receipt__subtitle donate-receipt__subtitle--success">
                Your Donation Was Successful
              </p>
              <p className="donate-receipt__desc">
                Your generosity helps empower persons with disabilities and
                builds a more inclusive society. We appreciate your support!
              </p>
            </>
          )}

          {variant === "pending" && (
            <>
              <h1 className="donate-receipt__title">Payment Verification In Progress</h1>
              <p className="donate-receipt__subtitle donate-receipt__subtitle--pending">
                We&rsquo;re confirming your payment
              </p>
              <p className="donate-receipt__desc">
                We have received your payment request and are waiting for
                confirmation from our payment provider. This usually takes a
                few moments.
              </p>
            </>
          )}

          {variant === "failed" && (
            <>
              <h1 className="donate-receipt__title">Payment Not Completed</h1>
              <p className="donate-receipt__subtitle donate-receipt__subtitle--failed">
                Your donation was not successful
              </p>
              <p className="donate-receipt__desc">
                Unfortunately, we couldn&rsquo;t process your payment at this
                time. No funds were deducted from your account.
              </p>
            </>
          )}
        </div>

        {/* Reference box */}
        <div className={`donate-receipt__ref donate-receipt__ref--${variant}`}>
          <div>
            <p className="donate-receipt__ref-label">Reference</p>
            <p className="donate-receipt__ref-value">{donation.reference}</p>
          </div>
          <CopyButton text={donation.reference} label="reference" />
        </div>

        {/* Transaction details */}
        <div className="donate-receipt__details">
          <div className="donate-receipt__details-header">
            <h2>Transaction Details</h2>
            <span className={`donate-receipt__pill donate-receipt__pill--${variant}`}>
              {variant === "success" ? "Successful" : variant === "pending" ? "Pending" : "Failed"}
            </span>
          </div>

          <TransactionRow icon={<Banknote size={15} />} label="Amount" value={formatCurrency(donation.amount)} />
          <TransactionRow icon={<CreditCard size={15} />} label="Payment Method" value={formatPaymentMethod(donation)} />
          <TransactionRow
            icon={<Info size={15} />}
            label="Status"
            value={variant === "success" ? "Successful" : variant === "pending" ? "Pending Verification" : "Failed"}
            valueClassName={`donate-receipt__row-value--${variant}`}
          />
          <TransactionRow icon={<Calendar size={15} />} label="Date & Time" value={formatDateTime(donation.paidAt || donation.createdAt)} />
          <TransactionRow icon={<Hash size={15} />} label="Reference" value={donation.reference} />
          {variant === "failed" && (
            <TransactionRow
              icon={<AlertCircle size={15} />}
              label="Reason"
              value={donation.gatewayResponse || "Card authorization failed"}
              valueClassName="donate-receipt__row-value--failed"
            />
          )}
        </div>

        {/* Status-specific callout */}
        {variant === "success" && (
          <CalloutBox variant="success" icon={<Heart size={18} />} title="Your Impact">
            <p className="donate-receipt__callout-text">
              Because of donors like you, we can continue to:
            </p>
            <div className="donate-receipt__impact-grid">
              {[
                { icon: <Users size={18} />, label: "Provide Rehabilitation Services" },
                { icon: <Package size={18} />, label: "Distribute Assistive Devices" },
                { icon: <Accessibility size={18} />, label: "Support Health Outreach" },
                { icon: <BookOpen size={18} />, label: "Promote Inclusive Education" },
                { icon: <Megaphone size={18} />, label: "Advocate for Disability Rights" },
              ].map((item) => (
                <div key={item.label} className="donate-receipt__impact-item">
                  <span aria-hidden="true">{item.icon}</span>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </CalloutBox>
        )}

        {variant === "pending" && (
          <CalloutBox variant="pending" icon={<Info size={18} />} title="What happens next?">
            <ul className="donate-receipt__callout-list">
              <li>We will verify your payment automatically.</li>
              <li>You will receive an email confirmation once your donation is confirmed.</li>
              <li>You can check back on this page for updates.</li>
            </ul>
          </CalloutBox>
        )}

        {variant === "failed" && (
          <CalloutBox variant="failed" icon={<AlertTriangle size={18} />} title="Why this might have happened">
            <ul className="donate-receipt__callout-list">
              <li>Insufficient funds in your account</li>
              <li>Your card was declined by the bank</li>
              <li>Incorrect card details</li>
              <li>Network or payment gateway issue</li>
            </ul>
          </CalloutBox>
        )}

        <SecureTrustedBox />

        {/* Buttons — only ones that actually do something real are here */}
        {variant === "success" && (
          <div className="donate-receipt__btn-row">
            <button
              className="donate-receipt__btn donate-receipt__btn--primary donate-receipt__btn--success"
              onClick={() => downloadReceipt(donation)}
            >
              <Download size={16} aria-hidden="true" /> Download Receipt
            </button>
            <Link href="/" className="donate-receipt__btn donate-receipt__btn--outline">
              <Home size={16} aria-hidden="true" /> Return to Homepage
            </Link>
          </div>
        )}

        {variant === "pending" && (
          <>
            <div className="donate-receipt__btn-row">
              <button
                className="donate-receipt__btn donate-receipt__btn--primary donate-receipt__btn--pending"
                onClick={handleManualCheck}
                disabled={manualChecking}
              >
                {manualChecking ? (
                  <Loader2 size={16} className="donate-receipt__btn-spin" aria-hidden="true" />
                ) : (
                  <RefreshCw size={16} aria-hidden="true" />
                )}
                Check Payment Status
              </button>
              <Link href="/" className="donate-receipt__btn donate-receipt__btn--outline">
                <Home size={16} aria-hidden="true" /> Return to Homepage
              </Link>
            </div>
            <a
              href="mailto:donations@dhrf.org.ng"
              className="donate-receipt__btn donate-receipt__btn--outline donate-receipt__btn--full"
            >
              <Headphones size={16} aria-hidden="true" /> Contact Support
            </a>
          </>
        )}

        {variant === "failed" && (
          <>
            <Link
              href="/donate"
              className="donate-receipt__btn donate-receipt__btn--primary donate-receipt__btn--failed donate-receipt__btn--full"
            >
              <RefreshCw size={16} aria-hidden="true" /> Try Again
            </Link>
            <div className="donate-receipt__btn-row">
              <Link href="/" className="donate-receipt__btn donate-receipt__btn--outline">
                <Home size={16} aria-hidden="true" /> Return to Homepage
              </Link>
              <a href="mailto:donations@dhrf.org.ng" className="donate-receipt__btn donate-receipt__btn--outline">
                <Headphones size={16} aria-hidden="true" /> Contact Support
              </a>
            </div>
          </>
        )}

        <NeedHelpBox />

        <p className="donate-receipt__closing">
          {variant === "success" && <>Thank you for being a part of the change. Together, we can do more! 💚</>}
          {variant === "pending" && <>Thank you for your patience. Your support means the world to us! 🙏</>}
          {variant === "failed" && <>We&rsquo;re here to help. Please try again or contact support. 🧡</>}
        </p>
      </div>
    </section>
  );
}

export default function DonateSuccessPage() {
  return (
    <Suspense
      fallback={
        <section className="donate-receipt">
          <div className="donate-receipt__card donate-receipt__card--center">
            <Loader2 className="donate-receipt__spin" size={44} aria-hidden="true" />
            <p className="donate-receipt__plain-sub">Loading…</p>
          </div>
        </section>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}