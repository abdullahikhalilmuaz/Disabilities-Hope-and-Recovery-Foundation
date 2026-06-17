import { Users, Heart, Users2 } from "lucide-react";
import { FaWheelchair } from "react-icons/fa";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Lives Reached",
      description: "Across Nigeria and beyond",
    },
    {
      icon: FaWheelchair,
      number: "2,500+",
      label: "Assistive Devices",
      description: "Distributed to those in need",
    },
    {
      icon: Heart,
      number: "500+",
      label: "Therapy Sessions",
      description: "Delivered with care",
    },
    {
      icon: Users2,
      number: "100+",
      label: "Community Programs",
      description: "Implemented successfully",
    },
  ];

  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center text-white space-y-2">
                <div className="flex justify-center">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
                </div>
                <p className="text-3xl md:text-4xl font-bold">{stat.number}</p>
                <p className="text-sm md:text-base font-medium">{stat.label}</p>
                <p className="text-xs md:text-sm opacity-80">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
