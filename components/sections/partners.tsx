import Image from "next/image";

const Partners = () => {
  const partners = [
    {
      name: "St. John's Medical Centre",
      logo: "/placeholder-partner-1.jpg",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            OUR PARTNERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Working Together for Greater Impact
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center card-shadow hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-primary">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
