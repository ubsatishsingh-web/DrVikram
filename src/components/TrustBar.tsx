import { Calendar, Award, Shield, GraduationCap } from "lucide-react";

export default function TrustBar() {
  const badges = [
    {
      id: "trust-est",
      icon: Calendar,
      title: "Est. 2008",
      description: "18 Years of Clinical Service",
    },
    {
      id: "trust-award",
      icon: Award,
      title: "PRIME TIME Award",
      description: "Best Implant & Laser Clinic",
    },
    {
      id: "trust-army",
      icon: Shield,
      title: "ECHS Empanelled",
      description: "Serving Chandimandir Army Veterans",
    },
    {
      id: "trust-academy",
      icon: GraduationCap,
      title: "European Academy",
      description: "Certified in Advanced Endodontics",
    },
  ];

  return (
    <section
      id="trust-bar-section"
      className="bg-white border-y border-slate-100 py-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={badge.id}
                className={`flex items-center gap-4 py-4 sm:py-2 px-2 first:pt-0 sm:first:pt-2 lg:first:pl-0 lg:pl-6 first:pl-0`}
              >
                <div className="w-10 h-10 rounded-xl bg-clinical-50 text-clinical-600 flex items-center justify-center shrink-0 shadow-sm border border-clinical-100/50">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm tracking-tight">
                    {badge.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-500 mt-0.5 leading-snug">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
