import { useState, useEffect } from "react";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
import { clinicDetails } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const encodedMessage = encodeURIComponent(clinicDetails.whatsappMessage);
  const whatsappUrl = `https://wa.me/${clinicDetails.whatsappNumber}?text=${encodedMessage}`;

  const navLinks = [
    { name: "About Dr. Sabharwal", href: "#about" },
    { name: "Core Services", href: "#services" },
    { name: "Advanced Tech", href: "#tech" },
    { name: "Patient Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact & Hours", href: "#contact" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand Section */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-clinical-600 text-white flex items-center justify-center font-display font-semibold text-lg shadow-md shadow-clinical-500/20 group-hover:bg-clinical-700 transition-colors">
              CCDC
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-900 tracking-tight text-sm sm:text-base group-hover:text-clinical-600 transition-colors leading-none">
                Centre For Complete Dental Care
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 tracking-wide mt-1">
                Painless Precision • Dr. Sabharwal
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-slate-600 hover:text-clinical-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${clinicDetails.phone}`}
              className="flex items-center gap-2 text-slate-600 hover:text-clinical-700 font-sans text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-clinical-600" />
              <span>{clinicDetails.phone}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-clinical-600 hover:bg-clinical-700 text-white font-sans text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-clinical-600/10 hover:shadow-lg hover:shadow-clinical-600/20 transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-clinical-500 rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl border-l border-slate-100 p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-clinical-600 text-white flex items-center justify-center font-display font-semibold text-sm">
              CCDC
            </div>
            <span className="font-display font-bold text-slate-900 text-sm">
              CCDC Chandigarh
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-5 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-base font-semibold text-slate-700 hover:text-clinical-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col gap-4">
          <a
            href={`tel:${clinicDetails.phone}`}
            className="flex items-center justify-center gap-2.5 w-full border border-slate-200 py-3 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-clinical-600" />
            <span>Call Us: {clinicDetails.phone}</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center bg-clinical-600 hover:bg-clinical-700 text-white font-semibold py-3.5 rounded-xl text-center shadow-lg shadow-clinical-600/15"
          >
            Book Appointment (WhatsApp)
          </a>
        </div>
      </div>
    </nav>
  );
}
