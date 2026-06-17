import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Target,
  Eye,
  Diamond,
  Check,
  Users,
  Accessibility,
  Heart,
  HandHelping,
  ArrowRight,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Disability Hope & Recovery Foundation — our story, mission, vision, values, and the passionate team dedicated to creating change.",
};

type ImpactStat = {
  icon: LucideIcon;
  value: string;
  label: string;
  sub: string;
  color: string;
  bg: string;
};

const impactStats: ImpactStat[] = [
  {
    icon: Users,
    value: "10,000+",
    label: "Lives Reached",
    sub: "Across Nigeria and beyond",
    color: "text-brand-blue",
    bg: "bg-blue-50",
  },
  {
    icon: Accessibility,
    value: "2,500+",
    label: "Assistive Devices",
    sub: "Distributed to those in need",
    color: "text-brand-green",
    bg: "bg-green-50",
  },
  {
    icon: Heart,
    value: "500+",
    label: "Therapy Sessions",
    sub: "Delivered with care",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: HandHelping,
    value: "100+",
    label: "Community Programs",
    sub: "Implemented successfully",
    color: "text-brand-orange",
    bg: "bg-orange-50",
  },
];

const values = [
  "Inclusion",
  "Dignity",
  "Compassion",
  "Accountability",
  "Excellence",
  "Collaboration",
];

const team = [
  {
    name: "Abdullahi H. Mu'az",
    role: "Founder / Executive Director",
    image: "/images/team-1.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Maryam A. Usman",
    role: "Program Director",
    image: "/images/team-2.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Ibrahim S. Lawal",
    role: "Operations Manager",
    image: "/images/team-3.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Fatima R. Yusuf",
    role: "Finance & Admin Lead",
    image: "/images/team-4.jpg",
    linkedinUrl: "#",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-20 bg-brand-blue overflow-hidden" aria-label="About Us hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative z-10">
              <p className="text-brand-green font-semibold text-xs tracking-widest uppercase mb-3">
                Who We Are
              </p>
              <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 max-w-3xl">
                About Us
              </h1>
              <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
                We are a non-governmental organization committed to advancing
                inclusive health, rehabilitation, and empowerment for persons with
                disabilities and vulnerable individuals.
              </p>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_120px_rgba(15,23,42,0.25)] h-[420px] sm:h-[520px]">
                <Image
                  src="/images/about-hero.jpg"
                  alt="DHRF team member speaking with a beneficiary in a wheelchair"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        id="story"
        className="py-20 bg-white"
        aria-labelledby="story-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-green font-semibold text-xs tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2
                id="story-heading"
                className="font-display font-black text-3xl sm:text-4xl text-neutral-900 mb-6"
              >
                Building a More Inclusive and Compassionate World
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed">
                Disability Hope & Recovery Foundation (DHRF) was established to
                address the barriers faced by persons with disabilities in
                accessing healthcare, rehabilitation, education, and economic
                opportunities. We work in communities, partner with
                stakeholders, and advocate for policies that promote dignity,
                equality, and full participation for all.
              </p>
            </div>
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/about-story.jpg"
                alt="DHRF community outreach event with beneficiaries"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section
        id="mission"
        className="py-16 bg-neutral-50"
        aria-label="Mission, Vision and Values"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="bg-white rounded-[2rem] p-8 border border-neutral-100 shadow-card">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-5">
                <Target size={24} className="text-brand-green" />
              </div>
              <h3 className="font-display font-bold text-brand-green text-xl mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                To advance inclusive health and wellbeing by providing
                accessible medical care, rehabilitation services, assistive
                devices, advocacy, and empowerment programs for persons with
                disabilities and vulnerable individuals.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-[2rem] p-8 border border-neutral-100 shadow-card">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <Eye size={24} className="text-brand-blue" />
              </div>
              <h3 className="font-display font-bold text-brand-blue text-xl mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                A society where every person with a disability enjoys good
                health, independence, dignity, and equal opportunities to
                participate and thrive.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-[2rem] p-8 border border-neutral-100 shadow-card">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-5">
                <Diamond size={24} className="text-brand-purple" />
              </div>
              <h3 className="font-display font-bold text-brand-purple text-xl mb-4">
                Our Values
              </h3>
              <ul className="space-y-3">
                {values.map((v) => (
                  <li
                    key={v}
                    className="flex items-center gap-3 text-sm text-neutral-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-brand-green" />
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact at a Glance */}
      <section className="py-20 bg-neutral-50" aria-labelledby="impact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start bg-white rounded-[2rem] border border-neutral-100 p-8 sm:p-10 shadow-card">
            <div>
              <h2
                id="impact-heading"
                className="font-display font-black text-3xl sm:text-4xl text-neutral-900 mb-4"
              >
                Our Impact at a Glance
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed mb-8">
                Through our programs and partnerships, we continue to make a
                meaningful difference in the lives of many.
              </p>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-light text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                See Our Impact
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {impactStats.map(
                ({ icon: Icon, value, label, sub, color, bg }) => (
                  <div
                    key={label}
                    className="rounded-[1.5rem] border border-neutral-100 bg-white p-5 text-center shadow-sm"
                  >
                    <div
                      className={`${bg} w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3`}
                    >
                      <Icon size={22} className={color} />
                    </div>
                    <p className={`font-display font-black text-2xl ${color}`}>
                      {value}
                    </p>
                    <p className="font-semibold text-neutral-800 text-xs mt-1">
                      {label}
                    </p>
                    <p className="text-neutral-500 text-[11px] mt-1">
                      {sub}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="py-20 bg-neutral-50"
        aria-labelledby="team-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold text-xs tracking-widest uppercase mb-2">
              Our Leadership
            </p>
            <h2
              id="team-heading"
              className="font-display font-black text-3xl sm:text-4xl text-neutral-900 mb-3"
            >
              Meet the Team
            </h2>
            <p className="text-neutral-600 text-base max-w-xl mx-auto">
              Passionate people dedicated to creating change and building a more
              inclusive society.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {team.map(({ name, role, image, linkedinUrl }) => (
              <div key={name} className="group text-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-neutral-200">
                  <Image
                    src={image}
                    alt={`Photo of ${name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm">
                  {name}
                </h3>
                <p className="text-neutral-500 text-xs mt-0.5">{role}</p>
                <a
                  href={linkedinUrl}
                  aria-label={`LinkedIn profile of ${name}`}
                  className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#0077B5] text-white mt-2 hover:bg-[#005f92] transition-colors"
                >
                  <FaLinkedin size={13} />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/about/team"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-semibold text-sm transition-colors"
            >
              View Full Team
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
