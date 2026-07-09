/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Services from "./components/Services";
import TechShowcase from "./components/TechShowcase";
import PatientReviews from "./components/PatientReviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div id="app-root" className="relative min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Premium Header/Navigation */}
      <Navbar />

      {/* Structured Single-Page Sections */}
      <main>
        {/* Starting with the required Hero section */}
        <Hero />
        
        {/* Four high-credibility trust badges bar */}
        <TrustBar />
        
        {/* Legacy & Clinical Philosophy */}
        <About />
        
        {/* Core dental treatments list */}
        <Services />
        
        {/* Technical equipment display */}
        <TechShowcase />
        
        {/* Patient Reviews & testimonials */}
        <PatientReviews />
        
        {/* Dynamic Accordion FAQ */}
        <FAQ />
        
        {/* Detailed Address, timings, and Interactive Map */}
        <Contact />
      </main>

      {/* Styled Footer */}
      <Footer />

      {/* Bottom-right floating sticky WhatsApp action */}
      <FloatingWhatsApp />
    </div>
  );
}

