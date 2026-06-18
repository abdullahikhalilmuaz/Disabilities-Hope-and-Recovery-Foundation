// app/programs/advocacy/page.tsx
import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { advocacyData } from "@/libs/programs-data";

export const metadata: Metadata = {
  title: advocacyData.seoTitle,
  description: advocacyData.seoDescription,
  openGraph: {
    title: advocacyData.seoTitle,
    description: advocacyData.seoDescription,
    url: "https://dhrf.org.ng/programs/advocacy",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: advocacyData.seoTitle,
    description: advocacyData.seoDescription,
  },
  alternates: { canonical: "https://dhrf.org.ng/programs/advocacy" },
};

export default function Page() {
  return <ProgramPage data={advocacyData} />;
}
