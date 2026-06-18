// app/programs/assistive-devices/page.tsx
import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { assistiveDevicesData } from "@/libs/programs-data";

export const metadata: Metadata = {
  title: assistiveDevicesData.seoTitle,
  description: assistiveDevicesData.seoDescription,
  openGraph: {
    title: assistiveDevicesData.seoTitle,
    description: assistiveDevicesData.seoDescription,
    url: "https://dhrf.org.ng/programs/assistive-devices",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: assistiveDevicesData.seoTitle,
    description: assistiveDevicesData.seoDescription,
  },
  alternates: { canonical: "https://dhrf.org.ng/programs/assistive-devices" },
};

export default function Page() {
  return <ProgramPage data={assistiveDevicesData} />;
}
