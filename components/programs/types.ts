export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  accent: string;
  iconName: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface GalleryImage {
  src?: string;
  seed: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarSeed: string;
}

export interface ProgramData {
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string;
  heroImageSeed: string;
  heroImageAlt: string;
  breadcrumb: string;

  highlights: string[];

  services: ServiceItem[];

  howWeHelp: StepItem[];

  impactTitle: string;
  stats: StatItem[];

  galleryEyebrow: string;
  galleryTitle: string;
  gallery: GalleryImage[];

  testimonial: Testimonial;

  ctaTitle: string;
  ctaDesc: string;

  seoTitle: string;
  seoDescription: string;
}