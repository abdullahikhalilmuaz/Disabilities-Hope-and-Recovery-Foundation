import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./button.module.css";

type ButtonVariant = "primary" | "outline" | "ghost" | "success";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

/**
 * Shared CTA button used across the homepage.
 * Renders a Next.js <Link> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  iconPosition = "left",
  type = "button",
  onClick,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}