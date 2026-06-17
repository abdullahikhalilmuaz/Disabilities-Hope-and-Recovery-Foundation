"use client";

import { useState } from "react";
import { Heart, Gift, CreditCard } from "lucide-react";
import Link from "next/link";

const DonationCTA = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("N10,000");

  const amounts = ["N5,000", "N10,000", "N25,000", "N50,000"];

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Support Can Change a Life
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Every donation helps us reach more people, provide essential
            services, and build a more inclusive society for all.
          </p>

          {/* Donation Amounts */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  selectedAmount === amount
                    ? "bg-secondary text-white scale-105"
                    : "bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                {amount}
              </button>
            ))}
            <button
              onClick={() => setSelectedAmount("Other")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                selectedAmount === "Other"
                  ? "bg-secondary text-white scale-105"
                  : "bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              Other Amount
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#donate"
              className="bg-secondary text-white px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-300 inline-flex items-center gap-2"
            >
              <CreditCard className="w-5 h-5" />
              Donate Securely Now
            </Link>
            <Link
              href="#ways-to-give"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
            >
              <Gift className="w-5 h-5" />
              Other Ways to Give
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;
