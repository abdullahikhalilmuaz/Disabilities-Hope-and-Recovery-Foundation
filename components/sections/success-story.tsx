import Image from "next/image";
import { Quote } from "lucide-react";
import Link from "next/link";

const SuccessStory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20">
              <Image
                src="/placeholder-story.jpg"
                alt="Amina's journey of hope"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg">
              <Quote className="w-8 h-8" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              SUCCESS STORY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Amina&apos;s Journey of Hope
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
              <blockquote className="text-lg text-gray-700 leading-relaxed">
                &ldquo;After receiving a wheelchair and therapy through DHRF, I
                regained my independence. Today, I am back in school and
                inspiring others like me.&rdquo;
              </blockquote>
              <p className="mt-4 text-primary font-medium">
                - Amina, Beneficiary
              </p>
            </div>

            <Link
              href="#stories"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
            >
              Read More Stories
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
