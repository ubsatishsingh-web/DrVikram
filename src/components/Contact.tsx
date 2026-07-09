import { Phone, MapPin, Clock, Calendar, MessageSquare, ArrowUpRight } from "lucide-react";
import { clinicDetails } from "../data";

export default function Contact() {
  const encodedMessage = encodeURIComponent(clinicDetails.whatsappMessage);
  const whatsappUrl = `https://wa.me/${clinicDetails.whatsappNumber}?text=${encodedMessage}`;

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute right-10 top-1/4 w-80 h-80 bg-clinical-100/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-display font-bold text-clinical-700 text-sm tracking-widest uppercase">
            Visit Us
          </h2>
          <p className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Clinic Location & Hours
          </p>
          <p className="font-sans text-slate-500 text-base max-w-xl mx-auto">
            Our clinic is centrally situated in a serene neighborhood of Chandigarh. Walk-ins are subject to clinician availability, so booking a WhatsApp slot is highly recommended.
          </p>
          <div className="w-16 h-1 bg-clinical-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Content Section Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Main Info Container */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-8 flex-1">
              
              {/* Quick Contact Block */}
              <div className="space-y-6">
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-clinical-50 text-clinical-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                      Clinic Address
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      {clinicDetails.address}
                    </p>
                    <span className="font-sans text-[11px] font-bold text-clinical-700 tracking-wide block mt-2">
                      Sector 22 B, behind Hotel Sunbeam
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-clinical-50 text-clinical-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                      Phone Numbers
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 mt-1">
                      Call us to schedule or manage appointments:
                    </p>
                    <div className="mt-2 space-y-1.5">
                      <a
                        href="tel:+919876768558"
                        className="font-sans font-bold text-slate-900 hover:text-clinical-600 text-sm sm:text-base block transition-colors"
                      >
                        +91 98767 68558
                      </a>
                      <a
                        href="tel:+917814504050"
                        className="font-sans font-bold text-slate-900 hover:text-clinical-600 text-sm sm:text-base block transition-colors"
                      >
                        +91 78145 04050
                      </a>
                      <a
                        href="tel:01725000348"
                        className="font-sans font-bold text-slate-900 hover:text-clinical-600 text-sm sm:text-base block transition-colors"
                      >
                        0172 5000 348
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-clinical-50 text-clinical-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                      Consultation Hours
                    </h4>
                    <div className="mt-2.5 space-y-2">
                      {clinicDetails.timings.map((time, idx) => (
                        <div key={idx} className="flex justify-between gap-4 text-xs font-sans text-slate-500">
                          <span className="font-semibold text-slate-700">{time.days}:</span>
                          <span className="text-right">{time.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Instant Scheduling Callout */}
              <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-emerald-950 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Book Secure Slot
                  </h4>
                  <p className="font-sans text-emerald-800 text-[11px] sm:text-xs">
                    Confirm slot instantly on WhatsApp
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-[11px] sm:text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-500/10 transition-colors shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Tap to Text</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[350px] bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
              
              {/* Interactive Iframe Map */}
              <iframe
                title="CCDC Chandigarh Location Map"
                src="https://maps.google.com/maps?q=House%20No-1273,%20Sector%2022%20B,%20Chandigarh%20160022&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full flex-1 border-0 min-h-[350px]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Map Footer Assist */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="font-sans text-xs text-slate-500 text-center sm:text-left">
                  Landmarks: Sector 22 B, directly behind Hotel Sunbeam
                </span>
                <a
                  href="https://maps.google.com/?q=House+No-1273,+Sector+22+B,+Chandigarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs font-bold text-clinical-600 hover:text-clinical-700 flex items-center gap-1 transition-colors shrink-0"
                >
                  <span>Open in Navigation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
