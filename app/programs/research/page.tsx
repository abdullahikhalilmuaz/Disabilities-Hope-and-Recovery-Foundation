// app/programs/research/page.tsx
import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { researchData } from "@/libs/programs-data";

export const metadata: Metadata = {
  title: researchData.seoTitle,
  description: researchData.seoDescription,
  openGraph: {
    title: researchData.seoTitle,
    description: researchData.seoDescription,
    url: "https://dhrf.org.ng/programs/research",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: researchData.seoTitle,
    description: researchData.seoDescription,
  },
  alternates: { canonical: "https://dhrf.org.ng/programs/research" },
};

export default function Page() {
  return <ProgramPage data={researchData} />;
}
