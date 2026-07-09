import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqList } from "../data";

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    if (openFaqId === id) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute left-10 bottom-10 w-72 h-72 bg-slate-100 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-clinical-700 text-sm tracking-widest uppercase">
            Got Questions?
          </h2>
          <p className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Frequently Asked Questions
          </p>
          <p className="font-sans text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Learn more about our microscopic procedures, diagnostic systems, and clinical sterilization protocol.
          </p>
          <div className="w-16 h-1 bg-clinical-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                id={`faq-item-${faq.id}`}
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50 border-clinical-200 shadow-sm"
                    : "bg-white border-slate-100 hover:border-slate-200"
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-clinical-500/25"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? "text-clinical-600" : "text-slate-400"}`} />
                    <span className="font-display font-bold text-slate-800 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-clinical-600 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Smooth Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-200/50" : "max-h-0"
                  }`}
                >
                  <div className="p-5 sm:p-6 text-slate-500 font-sans text-xs sm:text-sm leading-relaxed space-y-2">
                    <p>{faq.answer}</p>
                    <div className="flex items-center gap-2 pt-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-clinical-600">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
