import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DHRF | Disability Hope & Recovery Foundation",
  description:
    "Disability Hope & Recovery Foundation (DHRF) provides inclusive healthcare, rehabilitation services, assistive devices, disability advocacy and economic empowerment programs across Nigeria.",
  keywords: [
    "DHRF",
    "Disability Hope and Recovery Foundation",
    "disability rights Nigeria",
    "assistive devices",
    "rehabilitation services",
    "inclusive healthcare",
  ],
  openGraph: {
    title: "DHRF | Disability Hope & Recovery Foundation",
    description:
      "Empowering persons with disabilities for a better tomorrow through healthcare, rehabilitation, assistive devices and advocacy.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}