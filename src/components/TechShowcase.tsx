import { useState } from "react";
import { Scan, Flame, Activity, Tv, Cpu, Sparkles } from "lucide-react";
import { techList } from "../data";

const iconMap: Record<string, any> = {
  Scan: Scan,
  Flame: Flame,
  Activity: Activity,
  Tv: Tv,
};

export default function TechShowcase() {
  const [selectedTechId, setSelectedTechId] = useState<string>(techList[0].id);
  const activeTech = techList.find((t) => t.id === selectedTechId) || techList[0];

  return (
    <section id="tech" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-clinical-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-display font-bold text-clinical-700 text-sm tracking-widest uppercase">
            Clinical Technology
          </h2>
          <p className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Advanced Equipment for Micro-Precision Dentistry
          </p>
          <p className="font-sans text-slate-500 text-base max-w-xl mx-auto">
            We invest in premium diagnostic and therapeutic equipment to ensure your treatment is safe, conservative, and 100% predictable.
          </p>
          <div className="w-16 h-1 bg-clinical-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Interactive Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Tech List (Left side selectors) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            {techList.map((tech) => {
              const IconComponent = iconMap[tech.iconName] || Cpu;
              const isSelected = tech.id === selectedTechId;

              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTechId(tech.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? "bg-slate-900 border-slate-900 text-white shadow-xl scale-[1.02]"
                      : "bg-slate-50 hover:bg-slate-100/70 border-slate-100 text-slate-800"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-clinical-500 text-white"
                        : "bg-clinical-50 text-clinical-600"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base leading-snug">
                      {tech.name}
                    </h3>
                    <p
                      className={`font-sans text-xs mt-1 ${
                        isSelected ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {tech.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded Detail Display (Right side card) */}
          <div className="lg:col-span-7">
            <div className="h-full bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
              
              {/* Overlay accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-clinical-100/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                
                {/* Tech Badge & Title */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-clinical-100 border border-clinical-200 text-clinical-800 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-clinical-600" />
                    <span>In-House Precision Tech</span>
                  </div>
                  <h3 className="font-display font-extrabold text-slate-900 text-2xl sm:text-3xl tracking-tight leading-tight mt-3">
                    {activeTech.name}
                  </h3>
                  <p className="font-sans text-sm font-semibold text-clinical-600 italic">
                    — {activeTech.tagline}
                  </p>
                </div>

                {/* Primary Description */}
                <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeTech.description}
                </p>

                {/* Patient Benefit Highlight */}
                <div className="p-5 bg-white rounded-2xl border border-slate-100 space-y-2 shadow-sm">
                  <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm tracking-wide uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Why It Matters For Your Comfort
                  </h4>
                  <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {activeTech.precisionImpact}
                  </p>
                </div>
              </div>

              {/* Quick visual guarantee */}
              <div className="pt-6 mt-8 border-t border-slate-200/60 flex items-center gap-3">
                <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  CCDC Chandigarh • Clinical Innovation
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
