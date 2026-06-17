import {
  Stethoscope,
  Briefcase,
  Megaphone,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { FaWheelchair } from "react-icons/fa";

const ProgramsPreview = () => {
  const programs = [
    {
      icon: Stethoscope,
      title: "Inclusive Healthcare",
      description:
        "Providing accessible medical care, health screenings, drugs and specialist treatment.",
    },
    {
      icon: Briefcase,
      title: "Rehabilitation Services",
      description:
        "Physical, occupational, speech therapy and counseling to improve quality of life.",
    },
    {
      icon: FaWheelchair,
      title: "Assistive Devices",
      description:
        "Supporting and distributing wheelchairs, hearing aids, white canes and more.",
    },
    {
      icon: Megaphone,
      title: "Advocacy & Inclusion",
      description:
        "Promoting disability rights and inclusion through advocacy, public education and policy engagement.",
    },
    {
      icon: GraduationCap,
      title: "Capacity Building",
      description:
        "Training caregivers, teachers, health workers and community leaders on inclusive practices.",
    },
    {
      icon: TrendingUp,
      title: "Economic Empowerment",
      description:
        "Skills acquisition and vocational training for self-reliance and sustainable livelihoods.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            WHAT WE DO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Our Programs
          </h2>
          <p className="text-gray-600 text-lg">
            We implement life-changing programs that promote inclusive health,
            independence and opportunity.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 card-shadow hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
