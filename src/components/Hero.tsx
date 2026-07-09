import { motion } from "motion/react";
import { MessageSquare, ShieldCheck, Sparkles, Award, MapPin } from "lucide-react";
import { clinicDetails, doctorProfile } from "../data";

export default function Hero() {
  const encodedMessage = encodeURIComponent(clinicDetails.whatsappMessage);
  const whatsappUrl = `https://wa.me/${clinicDetails.whatsappNumber}?text=${encodedMessage}`;

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-clinical-50/50 via-white to-slate-50 overflow-hidden"
    >
      {/* Abstract Background Design Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-clinical-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content Section */}
          <motion.div
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Top Tagline Pill */}
            <div className="inline-flex flex-col items-center lg:items-start gap-4">
              <span className="text-clinical-600 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase block">
                Expertise You Can Trust
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinical-50 border border-clinical-200 text-clinical-800 text-xs font-semibold tracking-wide shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-clinical-600 animate-pulse" />
                <span>Chandigarh's Premier Dental Clinic</span>
              </div>
            </div>

            {/* Main Display Headline */}
            <div className="space-y-4">
              <h1
                id="hero-title"
                className="font-display font-extrabold text-slate-900 tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.1]"
              >
                Centre For <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinical-600 to-cyan-600">Complete</span> <br className="hidden sm:inline" />
                Dental Care (CCDC)
              </h1>
              <p
                id="hero-subtitle"
                className="font-sans text-lg sm:text-xl md:text-2xl font-medium text-slate-600 italic leading-relaxed"
              >
                "{clinicDetails.tagline}"
              </p>
            </div>

            {/* Description Copy */}
            <p className="font-sans text-base text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience world-class cosmetic and restorative dentistry led by{" "}
              <strong className="text-slate-800 font-semibold">Dr. Vikramaditya Sabharwal</strong>. 
              We utilize state-of-the-art dental lasers, 3D scanners, and computerized local anesthesia 
              to provide a completely silent, painless, and precise clinical journey.
            </p>

            {/* trust parameters list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 pt-2 text-left">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-clinical-100 text-clinical-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-slate-800">99.8% Painless Record</h4>
                  <p className="font-sans text-xs text-slate-400">Computerized STA numbing technology</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-clinical-100 text-clinical-700 flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-slate-800">Laser-Assisted Clinical Care</h4>
                  <p className="font-sans text-xs text-slate-400">Zero drills, zero suture bleeding</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-clinical-100 text-clinical-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-slate-800">Premier Chandigarh Clinic</h4>
                  <p className="font-sans text-xs text-slate-400">Centrally located posh Sector 19-B</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-clinical-100 text-clinical-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-slate-800">18+ Years of Legacy</h4>
                  <p className="font-sans text-xs text-slate-400">15,000+ happy smiles designed</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons & Social Proof */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  id="hero-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-clinical-600 hover:bg-clinical-700 active:scale-[0.98] text-white font-sans text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-clinical-600/20 transition-all duration-300 group"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Book Appointment</span>
                </a>
                
                <a
                  href="#services"
                  className="inline-flex items-center justify-center border border-slate-200 hover:border-clinical-300 hover:bg-clinical-50/50 active:scale-[0.98] text-slate-700 hover:text-clinical-700 font-sans text-base font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>

              {/* Avatar stack social proof */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center font-display font-bold text-slate-500 text-xs">A</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center font-display font-bold text-slate-600 text-xs">M</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center font-display font-bold text-slate-700 text-xs">H</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-clinical-100 flex items-center justify-center text-[10px] font-bold text-clinical-700">+15k</div>
                </div>
                <div className="text-left">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-wider">5-Star Trusted Care</p>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-tighter">15,000+ Happy Patients</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Visual Column */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Decorative shapes */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-clinical-100/50 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="relative bg-white p-4 rounded-[40px] shadow-2xl border border-clinical-100 transform rotate-2">
                <div className="relative aspect-[3/4] bg-slate-100 rounded-[32px] overflow-hidden flex flex-col items-center justify-center">
                  <img
                    id="doctor-portrait-img"
                    src={doctorProfile.photoUrl}
                    alt={doctorProfile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Inner dentist badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-lg">
                    <h3 className="font-display font-bold text-slate-900 text-sm leading-tight">
                      {doctorProfile.name}
                    </h3>
                    <p className="font-sans text-[11px] font-medium text-slate-500 mt-0.5">
                      {doctorProfile.role}
                    </p>
                    <p className="font-sans text-[10px] text-clinical-700 font-semibold tracking-wide uppercase mt-1">
                      MDS (Prosthodontics) • WCLI USA
                    </p>
                  </div>
                </div>

                {/* Status indicator floating card */}
                <div className="absolute bottom-10 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-clinical-50 transform -rotate-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-bold text-slate-700">Now Accepting Patients</span>
                  </div>
                </div>
              </div>

              {/* Decorative floating experience badge */}
              <div className="absolute -top-4 -right-4 bg-clinical-600 text-white rounded-2xl p-3.5 shadow-lg border-2 border-white flex flex-col items-center justify-center text-center w-24 h-24 rotate-3 hover:rotate-0 transition-transform duration-300">
                <span className="font-display font-extrabold text-xl leading-none">18+</span>
                <span className="font-sans text-[10px] font-medium leading-tight mt-1">Years of Legacy</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
