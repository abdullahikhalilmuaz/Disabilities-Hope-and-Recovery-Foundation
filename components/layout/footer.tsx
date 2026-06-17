import Link from 'next/link';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#programs', label: 'Our Programs' },
    { href: '#impact', label: 'Impact & Reports' },
    { href: '#get-help', label: 'Get Help' },
    { href: '#contact', label: 'Contact Us' },
  ];

  const programs = [
    { href: '#healthcare', label: 'Healthcare' },
    { href: '#rehabilitation', label: 'Rehabilitation' },
    { href: '#assistive-devices', label: 'Assistive Devices' },
    { href: '#advocacy', label: 'Advocacy' },
    { href: '#capacity-building', label: 'Capacity Building' },
    { href: '#economic-empowerment', label: 'Economic Empowerment' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold text-white">DHRF</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Disability Hope & Recovery Foundation - Empowering persons with disabilities for a
              better tomorrow.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-primary" />
              <span>Making inclusion possible</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>No. 15 Linyi Road, Katina State, Nigeria.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+234 803 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>info@dhrf.org.ng</span>
              </li>
            </ul>
            <Link
              href="#donate"
              className="inline-block mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-light transition-colors text-sm font-medium"
            >
              Submit a Donation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2023 Disability Hope & Recovery Foundation (DHRF). All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <Link href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="#cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;