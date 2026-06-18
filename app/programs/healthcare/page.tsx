// app/programs/healthcare/page.tsx
import type { Metadata } from "next";
import { healthcareData } from "@/libs/programs-data";
import ProgramPage from "@/components/programs/ProgramPage";

export const metadata: Metadata = {
  title: healthcareData.seoTitle,
  description: healthcareData.seoDescription,
  openGraph: {
    title: healthcareData.seoTitle,
    description: healthcareData.seoDescription,
    url: "https://dhrf.org.ng/programs/healthcare",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: healthcareData.seoTitle,
    description: healthcareData.seoDescription,
  },
  alternates: { canonical: "https://dhrf.org.ng/programs/healthcare" },
};

export default function Page() {
  return <ProgramPage data={healthcareData} />;
}
