import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Accessibility,
  MessageCircle,
  Brain,
  Eye,
  Truck,
  Check,
  Users,
  TrendingUp,
  MapPin,
  Heart,
  ArrowRight,
  Quote,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rehabilitation Services",
  description:
    "DHRF provides comprehensive rehabilitation and therapy services that improve independence, restore function, and enhance quality of life for persons with disabilities.",
};

const services = [
  {
    icon: Activity,
    title: "Physical Therapy",
    description: "Improving mobility, strength, and physical function through individualized therapy.",
    href: "/programs/rehabilitation-services/physical-therapy",
    iconBg: "bg-blue-100",
    iconColor: "text-brand-blue",
  },
  {
    icon: Accessibility,
    title: "Occupational Therapy",
    description: "Helping individuals develop daily living and work skills for greater independence.",
    href: "/programs/rehabilitation-services/occupational-therapy",
    iconBg: "bg-green-100",
    iconColor: "text-brand-green",
  },
  {
    icon: MessageCircle,
    title: "Speech Therapy",
    description: "Improving communication skills and speech for children and adults.",
    href: "/programs/rehabilitation-services/speech-therapy",
    iconBg: "bg-orange-100",
    iconColor: "text-brand-orange",
  },
  {
    icon: Brain,
    title: "Counseling & Mental Health",
    description: "Providing emotional support and mental health counseling for better wellbeing.",
    href: "/programs/rehabilitation-services/counseling",
    iconBg: "bg-teal-100",
    iconColor: "text-brand-teal",
  },
  {
    icon: Eye,
    title: "Low Vision Support",
    description: "Helping individuals with low vision access tools, training and support.",
    href: "/programs/rehabilitation-services/low-vision",
    iconBg: "bg-yellow-100",
    iconColor: "text-brand-yellow",
  },
  {
    icon: Truck,
    title: "Rehabilitation Outreach",
    description: "Bringing therapy services to underserved communities through outreach programs.",
    href: "/programs/rehabilitation-services/outreach",
    iconBg: "bg-red-100",
    iconColor: "text-brand-red",
  },
];

const howWeHelp = [
  {
    title: "Assessment",
    description: "We evaluate each individual's condition and needs.",
  },
  {
    title: "Personalized Plan",
    description: "We create a personalized therapy plan tailored to their goals.",
  },
  {
    title: "Therapy & Support",
    description: "Our experts provide consistent therapy and support.",
  },
  {
    title: "Progress & Independence",
    description: "We monitor progress and help them achieve independence.",
  },
];

const impactStats = [
  { icon: Heart, value: "1,800+", label: "Therapy Sessions Delivered", color: "text-brand-blue", bg: "bg-blue-50" },
  { icon: Users, value: "350+", label: "Individuals in Therapy", color: "text-brand-green", bg: "bg-green-50" },
  { icon: TrendingUp, value: "90%", label: "Improvement in Mobility", color: "text-brand-orange", bg: "bg-orange-50" },
  { icon: UserCheck, value: "250+", label: "Children Supported with Therapy", color: "text-brand-purple", bg: "bg-purple-50" },
  { icon: MapPin, value: "20+", label: "Communities Reached", color: "text-brand-teal", bg: "bg-teal-50" },
];

const gallery = [
  { src: "/images/rehab-1.jpg", alt: "Therapist helping child with physical therapy" },
  { src: "/images/rehab-2.jpg", alt: "Group occupational therapy session" },
  { src: "/images/rehab-3.jpg", alt: "Child celebrating progress in therapy" },
  { src: "/images/rehab-4.jpg", alt: "Young person in seated therapy exercise" },
  { src: "/images/rehab-5.jpg", alt: "Therapist supporting a child with walker" },
];

const highlights = [
  { label: "Professional Therapists", icon: UserCheck },
  { label: "Modern Equipment", icon: Activity },
  { label: "Personalized Care", icon: Heart },
  { label: "Compassionate Support", icon: Users },
];

export default function RehabilitationServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-brand-blue min-h-[440px] flex items-end overflow-hidden" aria-label="Rehabilitation Services hero">
        <div className="absolute inset-0">
          <Image
            src="/images/rehab-hero.jpg"
            alt="Healthcare worker guiding a young person through rehabilitation exercises"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-blue/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24 w-full">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-white/60 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="opacity-40">/</li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li className="opacity-40">/</li>
              <li className="text-brand-green font-medium">Rehabilitation Services</li>
            </ol>
          </nav>

          <p className="text-brand-green font-semibold text-xs tracking-widest uppercase mb-3">Our Program</p>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Rehabilitation Services
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
            We provide comprehensive rehabilitation and therapy services that improve independence, restore function, and enhance the quality of life for persons with disabilities.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4">
            {highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
                <Icon size={15} className="text-brand-green" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Services grid */}
            <div className="lg:col-span-2">
              <p className="text-brand-green font-semibold text-xs tracking-widest uppercase mb-2">Our Services</p>
              <h2 id="services-heading" className="font-display font-black text-3xl sm:text-4xl text-neutral-900 mb-8">
                What We Provide
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {services.map(({ icon: Icon, title, description, href, iconBg, iconColor }) => (
                  <div key={title} className="bg-neutral-50 rounded-xl p-5 border border-neutral-100 hover:shadow-card transition-shadow">
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`${iconBg} p-2.5 rounded-xl shrink-0`}>
                        <Icon size={20} className={iconColor} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 text-base mb-1">{title}</h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
                      </div>
                    </div>
                    <Link
                      href={href}
                      className="flex items-center gap-1.5 text-brand-green text-sm font-semibold hover:gap-2.5 transition-all"
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Help sidebar */}
            <div>
              <div className="bg-brand-blue rounded-2xl p-7 text-white sticky top-24">
                <p className="text-brand-green font-semibold text-xs tracking-widest uppercase mb-4">How We Help</p>
                <ul className="space-y-5 mb-8">
                  {howWeHelp.map(({ title, description }) => (
                    <li key={title} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={13} className="text-white" />
                      </span>
                      <div>
                        <p className="font-semibold text-white text-sm">{title}</p>
                        <p className="text-white/70 text-xs mt-1 leading-relaxed">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-help"
                  className="flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-light text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors w-full"
                >
                  <UserCheck size={16} />
                  Request Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-neutral-50" aria-labelledby="rehab-impact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="rehab-impact-heading" className="font-display font-black text-2xl sm:text-3xl text-neutral-900">
              Our Impact in Rehabilitation
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {impactStats.map(({ icon: Icon, value, label, color, bg }) => (
              <div key={label} className="bg-white rounded-xl p-5 border border-neutral-100 shadow-card text-center">
                <div className={`${bg} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={22} className={color} />
                </div>
                <p className={`font-display font-black text-2xl ${color}`}>{value}</p>
                <p className="text-neutral-600 text-xs mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — Moments of Hope */}
      <section className="py-20 bg-white" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Gallery */}
            <div className="lg:col-span-2">
              <p className="text-brand-green font-semibold text-xs tracking-widest uppercase mb-2">Our Work in Action</p>
              <h2 id="gallery-heading" className="font-display font-black text-3xl text-neutral-900 mb-6">
                Moments of Hope
              </h2>
              <div className="grid grid-cols-5 gap-3">
                {gallery.map(({ src, alt }, i) => (
                  <div
                    key={alt}
                    className={`relative rounded-xl overflow-hidden bg-neutral-200 ${i === 0 ? "col-span-2 row-span-2 h-48 sm:h-64" : "h-24 sm:h-32"}`}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="20vw"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  href="/impact/gallery"
                  className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm hover:gap-3 transition-all"
                >
                  View More Photos
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100">
              <Quote size={36} className="text-brand-blue/20 mb-4" />
              <blockquote className="text-neutral-700 text-sm leading-relaxed italic mb-6">
                Through the rehabilitation program, my son can now walk independently and go back to school. DHRF has given us hope again.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200 shrink-0">
                  <Image
                    src="/images/testimonial-aisha.jpg"
                    alt="Aisha M., beneficiary parent"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Aisha M.</p>
                  <p className="text-neutral-500 text-xs">Beneficiary</p>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-6">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`h-2 rounded-full transition-all ${i === 0 ? "w-6 bg-brand-blue" : "w-2 bg-neutral-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-blue" aria-label="Support CTA">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <Heart size={22} className="text-white" />
              </div>
              <div>
                <h2 className="font-display font-black text-xl sm:text-2xl text-white mb-1">
                  Help Us Continue Changing Lives
                </h2>
                <p className="text-white/70 text-sm">
                  Your support enables us to provide rehabilitation services and restore hope to more people.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/donate"
                className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-light text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
              >
                <Heart size={15} />
                Donate Now
              </Link>
              <Link
                href="/get-involved/partner"
                className="flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
              >
                <Users size={15} />
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
