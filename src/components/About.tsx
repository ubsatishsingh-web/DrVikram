import { motion } from "motion/react";
import { Award, GraduationCap, CheckCircle, Quote, Sparkles, Heart, Landmark, ShieldCheck } from "lucide-react";
import { doctorProfile } from "../data";

export default function About() {
  const careerTimeline = [
    {
      id: "pgi",
      institution: "PGI Rohtak",
      role: "Clinical Foundations",
      description: "Began clinical journey gaining rigorous, high-volume diagnostic and therapeutic experience at one of Haryana's premier medical institutes.",
      icon: GraduationCap,
    },
    {
      id: "apollo",
      institution: "Apollo Ludhiana",
      role: "Corporate Dental Consultant",
      description: "Served as a key consultant, managing intricate root canals and highly complex prosthodontic and cosmetic cases.",
      icon: ShieldCheck,
    },
    {
      id: "bvp",
      institution: "Bharat Vikas Parishad Chandigarh",
      role: "Head of Charitable Dental Wing (3 Years)",
      description: "Headed community-oriented clinical programs, ensuring premium quality clinical care was accessible to everyone.",
      icon: Landmark,
    },
    {
      id: "ea",
      institution: "European Academy",
      role: "Certified Specialist in Endodontics",
      description: "Obtained advanced international certification in Endodontics (RCT), mastering microscopic, painless single-visit therapies.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-clinical-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-clinical-600 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase block">
            Meet the Doctor
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Director & Principal Clinical Director
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Dr. Vikramaditya Sabharwal blends micro-precision dental expertise with compassionate care to redefine the patient experience.
          </p>
          <div className="w-16 h-1 bg-clinical-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Content Section Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Legacy, Bio, and Warm Quote Block */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                The Clinical Vision
              </span>
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                {doctorProfile.legacyText}
              </p>
              <p className="font-sans text-slate-600 text-sm leading-relaxed">
                {doctorProfile.bio[0]}
              </p>
            </div>

            {/* Warm, Styled Quote Block - Not a wall of text */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-clinical-50 to-teal-50/30 rounded-3xl border border-clinical-100 shadow-sm relative overflow-hidden group">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-clinical-100/50 -z-0 pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <p className="font-sans italic text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  "We are strongly concerned to a patient's pain and its dental complaints throughout the dental treatment and try to make the procedures easy, painless and comfortable for the patient so that a relation of full faith and fairness can be built between patient and the doctor! So Smile, because the world Smiles with YOU!!"
                </p>
                <div className="flex items-center gap-2.5 pt-2 border-t border-clinical-100">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse shrink-0" />
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-900">
                    Dr. Vikramaditya Sabharwal
                  </span>
                </div>
              </div>
            </div>

            {/* Credential highlights */}
            <div className="space-y-4 pt-2">
              <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
                Our Golden Clinical Care Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 hover:border-clinical-100 transition-colors">
                  <CheckCircle className="w-4 h-4 text-clinical-500 shrink-0" />
                  <span className="font-sans text-xs font-semibold text-slate-700">100% Sterile Protocol</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 hover:border-clinical-100 transition-colors">
                  <CheckCircle className="w-4 h-4 text-clinical-500 shrink-0" />
                  <span className="font-sans text-xs font-semibold text-slate-700">Micro-Diagnostic Precision</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 hover:border-clinical-100 transition-colors">
                  <CheckCircle className="w-4 h-4 text-clinical-500 shrink-0" />
                  <span className="font-sans text-xs font-semibold text-slate-700">Silent Laser-Assisted Care</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 hover:border-clinical-100 transition-colors">
                  <CheckCircle className="w-4 h-4 text-clinical-500 shrink-0" />
                  <span className="font-sans text-xs font-semibold text-slate-700">USA-Certified Guidelines</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Trajectory & Milestones Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                Professional Trajectory
              </span>

              {/* Vertical Timeline */}
              <div className="relative border-l border-slate-200/80 ml-3.5 space-y-8">
                {careerTimeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="relative pl-8 group">
                      {/* Timeline Bullet Node with Icon */}
                      <div className="absolute -left-[18px] top-0.5 w-9 h-9 rounded-full bg-white border-2 border-clinical-200 text-clinical-600 flex items-center justify-center shadow-sm group-hover:border-clinical-500 group-hover:text-clinical-500 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      
                      <div className="space-y-1">
                        <span className="font-sans text-[10px] font-bold text-clinical-600 uppercase tracking-wider block">
                          {item.role}
                        </span>
                        <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                          {item.institution}
                        </h3>
                        <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Academic Credentials Board */}
            <div className="p-6 sm:p-8 bg-clinical-50/40 rounded-3xl border border-clinical-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-clinical-600 text-white flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Academic Qualifications
                  </h3>
                  <p className="font-sans text-xs text-slate-500">Board certified prosthodontist and implantologist</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {doctorProfile.education.map((edu, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-500 mt-2 shrink-0" />
                    <span className="font-sans text-xs font-medium text-slate-700">
                      {edu}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Environment Showcase Banner */}
        <div className="mt-24 relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl shadow-slate-900/5 aspect-[16/6] min-h-[220px] max-h-[360px] group">
          <img
            src="/src/assets/images/clinic_interior_modern_1783523651905.jpg"
            alt="CCDC Clinic Interior Lobby"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/40 to-transparent flex flex-col justify-center p-6 sm:p-10 md:p-14 text-white">
            <div className="max-w-md space-y-2 sm:space-y-3">
              <span className="font-sans text-[10px] sm:text-xs font-bold text-clinical-300 uppercase tracking-widest block">
                World-Class Ambiance
              </span>
              <h3 className="font-display font-bold text-lg sm:text-2xl md:text-3xl leading-tight">
                Designed to Ease Your Dental Anxiety
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed">
                Step into a clean, soothing, spa-like environment in Chandigarh, where mechanical dental drills are replaced with whisper-quiet lasers and an atmosphere of trust.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
