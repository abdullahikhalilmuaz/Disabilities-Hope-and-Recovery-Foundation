import Link from "next/link";
import Image from "next/image";
import { Heart, Users, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">
                INCLUSIVE HEALTH. DIGNITY. HOPE.
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Persons with Disabilities for a{" "}
              <span className="text-primary">Better Tomorrow</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              We provide healthcare, rehabilitation, assistive devices, advocacy
              and empowerment programs that enable persons with disabilities and
              vulnerable individuals to live with dignity, independence and
              hope.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#donate"
                className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-light transition-colors duration-300"
              >
                Donate Now
              </Link>
              <Link
                href="#request-support"
                className="border-2 border-primary text-primary px-8 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Request Support
              </Link>
              <Link
                href="#partner"
                className="bg-secondary text-white px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-300"
              >
                Partner With Us
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-primary">10,000+</p>
                <p className="text-sm text-gray-600">Lives Reached</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">2,500+</p>
                <p className="text-sm text-gray-600">Assistive Devices</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-600">Therapy Sessions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100+</p>
                <p className="text-sm text-gray-600">Community Programs</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <Image
                src="/placeholder-hero.jpg"
                alt="DHRF empowering persons with disabilities"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Trusted Foundation</p>
                  <p className="text-xs text-gray-600">Serving since 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
