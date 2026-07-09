import { Instagram, Facebook, Linkedin, Heart, ShieldCheck } from "lucide-react";
import { clinicDetails, doctorProfile } from "../data";

export default function Footer() {
  const currentYear = 2026;

  const socialIcons: Record<string, any> = {
    Instagram: Instagram,
    Facebook: Facebook,
    LinkedIn: Linkedin,
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Column 1: Brand & Logo Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-clinical-500 text-white flex items-center justify-center font-display font-bold text-lg shadow-md shadow-clinical-500/20">
                CCDC
              </div>
              <span className="font-display font-extrabold text-white text-lg tracking-tight">
                Centre For Complete Dental Care
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Led by Dr. Vikramaditya Sabharwal, CCDC Chandigarh has provided painless, high-precision dental implants, root canals, and aesthetic cosmetic dentistry for over 18 years.
            </p>
            
            {/* Social Icons row */}
            <div className="flex items-center gap-4 pt-2">
              {clinicDetails.socials.map((social) => {
                const IconComponent = socialIcons[social.platform] || Instagram;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-clinical-600 flex items-center justify-center transition-all duration-300"
                    aria-label={`Follow CCDC on ${social.platform}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick navigation links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              Core Treatments
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-clinical-400 transition-colors">
                  Computer Guided Implants
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-clinical-400 transition-colors">
                  Waterlase® Laser Dentistry
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-clinical-400 transition-colors">
                  Cosmetic Smile Designing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-clinical-400 transition-colors">
                  Painless Single-Visit RCT
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-clinical-400 transition-colors">
                  Invisalign Clear Aligners
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact quick information */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              Clinic Direct Desk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <p className="leading-relaxed text-slate-400">
                {clinicDetails.address}
              </p>
              <div className="pt-2">
                <span className="text-slate-500 block text-[11px] uppercase tracking-wide font-semibold">
                  Phone Call Support
                </span>
                <a href={`tel:${clinicDetails.phone}`} className="text-white hover:text-clinical-400 font-semibold block mt-0.5">
                  {clinicDetails.phone}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px] uppercase tracking-wide font-semibold">
                  WhatsApp Helpline
                </span>
                <a
                  href={`https://wa.me/${clinicDetails.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold block mt-0.5"
                >
                  Book Slot Online
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright row */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-slate-500">
              © {currentYear} Centre For Complete Dental Care (CCDC). All Rights Reserved.
            </p>
            <p className="text-slate-500">
              Designed & Developed by{" "}
              <a
                href="https://zeradental.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-clinical-400 font-semibold underline decoration-slate-700 hover:decoration-clinical-400 transition-colors"
              >
                Zera Dental
              </a>
            </p>
          </div>
          
          <div className="flex items-center gap-1.5 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-clinical-500" />
            <span>Painless Clinical Dental Practice • Dr. Vikramaditya Sabharwal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
