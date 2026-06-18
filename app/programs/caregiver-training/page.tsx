// app/programs/caregiver-training/page.tsx
import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { caregiverTrainingData } from "@/libs/programs-data";

export const metadata: Metadata = {
  title: caregiverTrainingData.seoTitle,
  description: caregiverTrainingData.seoDescription,
  openGraph: {
    title: caregiverTrainingData.seoTitle,
    description: caregiverTrainingData.seoDescription,
    url: "https://dhrf.org.ng/programs/caregiver-training",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: caregiverTrainingData.seoTitle,
    description: caregiverTrainingData.seoDescription,
  },
  alternates: { canonical: "https://dhrf.org.ng/programs/caregiver-training" },
};

export default function Page() {
  return <ProgramPage data={caregiverTrainingData} />;
}
