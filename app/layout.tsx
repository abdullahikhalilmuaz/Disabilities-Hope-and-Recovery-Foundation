import type { Metadata } from "next";
import "./globals.css";
// import "@/styles/about.css";
// import Navbar from "@/components/layout/navbar";
// import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "DHRF – Disabilities Hope & Recovery Foundation",
    template: "%s | DHRF",
  },
  description:
    "Providing healthcare, rehabilitation services, assistive devices, disability advocacy, and economic empowerment for persons with disabilities and vulnerable communities.",
  keywords: [
    "disability",
    "rehabilitation",
    "NGO",
    "Nigeria",
    "inclusive health",
    "assistive devices",
  ],
  openGraph: {
    siteName: "Disabilities Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
