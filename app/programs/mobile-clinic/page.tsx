// app/programs/mobile-clinics/page.tsx
import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { mobileClinicsData } from "@/libs/programs-data";

export const metadata: Metadata = {
  title: mobileClinicsData.seoTitle,
  description: mobileClinicsData.seoDescription,
  openGraph: {
    title: mobileClinicsData.seoTitle,
    description: mobileClinicsData.seoDescription,
    url: "https://dhrf.org.ng/programs/mobile-clinics",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: mobileClinicsData.seoTitle,
    description: mobileClinicsData.seoDescription,
  },
  alternates: { canonical: "https://dhrf.org.ng/programs/mobile-clinics" },
};

export default function Page() {
  return <ProgramPage data={mobileClinicsData} />;
}
