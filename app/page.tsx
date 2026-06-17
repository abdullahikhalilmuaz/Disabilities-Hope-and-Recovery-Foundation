import "../styles/home.css";
import Navbar from "../components/layout/navbar";
import type { Metadata } from "next";
import Head from "next/head";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHeart,
  FaUsers,
  FaHandshake,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdOutlineDevices,
  MdCampaign,
  MdSchool,
  MdWork,
  MdPeople,
  MdAccessible,
} from "react-icons/md";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "DHRF – Disability Hope & Recovery Foundation | Empowering Persons with Disabilities in Nigeria",
  description:
    "DHRF (Disability Hope & Recovery Foundation) provides inclusive healthcare, rehabilitation, assistive devices, advocacy and empowerment programs that enable persons with disabilities and vulnerable individuals to live with dignity, independence and hope across Nigeria and beyond.",
  keywords:
    "disability support Nigeria, DHRF, Disability Hope Recovery Foundation, assistive devices Nigeria, wheelchair Nigeria, inclusive healthcare, rehabilitation services Nigeria, disability empowerment, persons with disabilities, NGO Nigeria disability",
  openGraph: {
    title: "DHRF – Empowering Persons with Disabilities for a Better Tomorrow",
    description:
      "We provide healthcare, rehabilitation, assistive devices, advocacy and empowerment programs that enable persons with disabilities and vulnerable individuals to live with dignity, independence and hope.",
    url: "https://dhrf.org.ng",
    siteName: "Disability Hope & Recovery Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DHRF – Disability Hope & Recovery Foundation",
    description:
      "Empowering Persons with Disabilities for a Better Tomorrow. Healthcare, rehabilitation, assistive devices & advocacy across Nigeria.",
  },
  alternates: {
    canonical: "https://dhrf.org.ng",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main-home-content-container">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

 
        </div>;
    </>
  );
}
