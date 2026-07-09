import { useState, SVGProps } from "react";
import { Sparkles, Zap, ShieldCheck, Smile, Layers, Search, ArrowRight, MessageSquareCode } from "lucide-react";
import { serviceList, clinicDetails } from "../data";

const iconMap: Record<string, any> = {
  Sparkles: Sparkles,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Smile: Smile,
  Layers: Layers,
  Search: Search,
};

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const encodedMessage = encodeURIComponent(clinicDetails.whatsappMessage);
  
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-clinical-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-display font-bold text-clinical-700 text-sm tracking-widest uppercase">
            Specialized Treatments
          </h2>
          <p className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Comprehensive Care Powered by Modern Tech
          </p>
          <p className="font-sans text-slate-500 text-base max-w-xl mx-auto">
            From conservative hygiene checkups to full mouth computer-guided implants, we provide painless precision treatment for all dental branches.
          </p>
          <div className="w-16 h-1 bg-clinical-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => {
            const IconComponent = iconMap[service.iconName] || Smile;
            const isExpanded = activeServiceId === service.id;
            const serviceWhatsappMessage = encodeURIComponent(
              `Hi Dr. Sabharwal, I'd like to book an appointment for ${service.title} at CCDC`
            );
            const serviceWhatsappUrl = `https://wa.me/${clinicDetails.whatsappNumber}?text=${serviceWhatsappMessage}`;

            return (
              <div
                id={`service-card-${service.id}`}
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-clinical-100 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-2xl bg-clinical-50 text-clinical-600 flex items-center justify-center group-hover:bg-clinical-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-sans text-slate-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits checklist */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <CheckIcon className="w-4 h-4 text-clinical-500 shrink-0 mt-0.5" />
                        <span className="font-sans text-[13px] font-medium text-slate-600 leading-tight">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={serviceWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-sans text-[13px] font-bold tracking-wide transition-colors"
                  >
                    <MessageSquareCode className="w-4 h-4" />
                    <span>Inquire / Book</span>
                  </a>

                  <a
                    href={serviceWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-clinical-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
