// app/programs/rehabilitation/page.tsx
import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { rehabilitationData } from "@/libs/programs-data";

export const metadata: Metadata = {
  title: rehabilitationData.seoTitle,
  description: rehabilitationData.seoDescription,
  openGraph: {
    title: rehabilitationData.seoTitle,
    description: rehabilitationData.seoDescription,
    url: "https://dhrf.org.ng/programs/rehabilitation",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: rehabilitationData.seoTitle,
    description: rehabilitationData.seoDescription,
  },
  alternates: { canonical: "https://dhrf.org.ng/programs/rehabilitation" },
};

export default function Page() {
  return <ProgramPage data={rehabilitationData} />;
}
