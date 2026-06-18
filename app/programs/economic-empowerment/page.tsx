// app/programs/economic-empowerment/page.tsx
import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { economicEmpowermentData } from "@/libs/programs-data";

export const metadata: Metadata = {
  title: economicEmpowermentData.seoTitle,
  description: economicEmpowermentData.seoDescription,
  openGraph: {
    title: economicEmpowermentData.seoTitle,
    description: economicEmpowermentData.seoDescription,
    url: "https://dhrf.org.ng/programs/economic-empowerment",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: economicEmpowermentData.seoTitle,
    description: economicEmpowermentData.seoDescription,
  },
  alternates: {
    canonical: "https://dhrf.org.ng/programs/economic-empowerment",
  },
};

export default function Page() {
  return <ProgramPage data={economicEmpowermentData} />;
}
