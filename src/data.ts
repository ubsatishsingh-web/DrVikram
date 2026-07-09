import { DoctorProfile, ServiceItem, TechItem, TestimonialItem, FaqItem, ClinicDetails } from "./types";

export const clinicDetails: ClinicDetails = {
  name: "Centre For Complete Dental Care (CCDC)",
  tagline: "18 Years of Painless, Precision Dentistry in Chandigarh",
  phone: "+91 98767 68558",
  whatsappNumber: "919876768558",
  whatsappMessage: "Hi Dr. Sabharwal, I'd like to book an appointment at CCDC",
  address: "House No-1273, Sector 22 B, Ground Floor, Chandigarh, 160022 (behind Hotel Sunbeam)",
  timings: [
    { days: "Monday – Saturday", hours: "10:00 AM – 1:30 PM, 4:30 PM – 7:30 PM" },
    { days: "Sunday", hours: "Closed" }
  ],
  socials: [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "Facebook", url: "https://facebook.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" }
  ]
};

export const doctorProfile: DoctorProfile = {
  name: "Dr. Vikramaditya Sabharwal",
  role: "Director & Principal Clinical Director",
  education: [
    "BDS - Bachelor of Dental Surgery",
    "MDS - Prosthodontics & Crown & Bridge",
    "Fellowship in Laser Dentistry (WCLI, USA)",
    "Diplomate in Advanced Dental Implantology (ICOI, USA)"
  ],
  experienceYears: 18,
  legacyText: "For nearly two decades, Dr. Sabharwal has pioneered painless, minimally invasive dental procedures in Chandigarh, blending micro-dentistry technology with clinical empathy.",
  bio: [
    "Dr. Vikramaditya Sabharwal is a highly respected prosthodontist and implantologist with over 18 years of clinical excellence. His philosophy centers on preserving natural tooth structure using microscopes and ultra-precise dental lasers.",
    "Known for his gentle touch and meticulously planned treatments, Dr. Sabharwal has successfully completed over 15,000 restorative and cosmetic dental procedures, earning the trust of patients across Chandigarh, Punjab, Haryana, and overseas."
  ],
  achievements: [
    "Pioneered Computer-Guided Painless Implantology in the Tri-City area.",
    "Certified Laser Specialist from the World Clinical Laser Institute (WCLI), USA.",
    "Recipient of 'Outstanding Clinician of the Year' at the North India Dental Awards.",
    "Keynote speaker at national prosthodontic and implantology conferences."
  ],
  photoUrl: "/images/dr-vikramaditya.jpg"
};

export const services: ServiceItem[] = {
  id: "services-list",
  // Let's create an array of actual services
} as any;

// Exporting the 6 targeted services requested by the user
export const serviceList: ServiceItem[] = [
  {
    id: "immediate-implants",
    title: "Immediate Dental Implants (Single Sitting Procedure)",
    description: "Walk out with a complete, fully functional smile on the same day as your computer-guided implant placement.",
    benefits: [
      "Flapless, stitches-free immediate placements",
      "No messy, standard impression clay needed",
      "Immediate temporary cosmetic crown in one sitting"
    ],
    iconName: "Sparkles"
  },
  {
    id: "zirconia-crowns",
    title: "Zirconia Crowns",
    description: "Ultra-durable, CAD/CAM customized crowns offering unmatched natural translucency and metal-free strength.",
    benefits: [
      "100% metal-free, high-biocompatible materials",
      "Precise margins prevents decay recurrence",
      "Lifelong structural warranty against cracking"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "dental-veneers",
    title: "Dental Veneers",
    description: "Super-thin, custom-crafted ceramic shells designed to correct discoloration, gaps, and minor chips instantly.",
    benefits: [
      "Ultra-conservative, preserving healthy enamel",
      "Custom shade and texture matching system",
      "Highly stain-resistant premium dental ceramics"
    ],
    iconName: "Search"
  },
  {
    id: "invisalign",
    title: "Invisalign",
    description: "Straighten misaligned teeth discreetly using comfortable, removable, and virtually invisible smart plastic aligners.",
    benefits: [
      "Entirely transparent aligner sets",
      "Removable for effortless eating and oral hygiene",
      "AI-driven predictive tooth movement models"
    ],
    iconName: "Layers"
  },
  {
    id: "smile-designing",
    title: "Smile Designing",
    description: "Crafting your perfect smile utilizing digital facial analysis to harmonize teeth shape, color, and size.",
    benefits: [
      "Digital Smile Design (DSD) pre-visualizations",
      "Micro-customized teeth proportions matching your face",
      "Aesthetic structural alignment and bite balancing"
    ],
    iconName: "Smile"
  },
  {
    id: "microscope-rct",
    title: "Root Canal Treatment (under microscope)",
    description: "Meticulous nerve treatment using state-of-the-art high-magnification microscopes for success and virtual painlessness.",
    benefits: [
      "Up to 25x magnification finding hidden canals",
      "Single-sitting root canal clinical workflows",
      "Safe laser-assisted sterilization of canal walls"
    ],
    iconName: "Zap"
  }
];

export const techList: TechItem[] = [
  {
    id: "intraoral-scanner",
    name: "3D Intraoral Digital Scanner",
    tagline: "No more messy clay impressions",
    description: "Our high-speed laser scanner captures thousands of pictures of your teeth in seconds, generating a high-precision 3D digital model on a screen instantly.",
    precisionImpact: "Ensures crowns, aligners, and dental bridges fit with micron-level accuracy, eliminating loose edges.",
    iconName: "Scan"
  },
  {
    id: "dental-laser",
    name: "Waterlase® iPlus All-Tissue Laser",
    tagline: "Water and light energy instead of drills",
    description: "A state-of-the-art laser system that combines atomized water droplets with laser energy to cut hard and soft dental tissues smoothly without friction, pressure, or heat.",
    precisionImpact: "Removes decay painlessly without triggering the classic drilling vibration or sound, preserving healthy structure.",
    iconName: "Flame"
  },
  {
    id: "computerized-anesthesia",
    name: "STA Single Tooth Anesthesia System®",
    tagline: "Syringe-free, localized dental comfort",
    description: "A computer-controlled local anesthetic delivery system that administers numbing agent droplet-by-droplet. It measures tissue resistance in real-time.",
    precisionImpact: "No painful needle pinch, no numbness in the tongue/lips, and immediate localized tooth comfort.",
    iconName: "Activity"
  },
  {
    id: "micro-endodontics",
    name: "High-Magnification Dental Microscope",
    tagline: "Seeing the unseen for absolute perfection",
    description: "A specialized clinical microscope offering up to 25x magnification, illuminating root canals and crown margins with high-intensity fiber optics.",
    precisionImpact: "Enables Dr. Sabharwal to find hidden auxiliary nerve pathways that conventional dentists might miss, avoiding failures.",
    iconName: "Tv"
  }
];

export const testimonialList: TestimonialItem[] = [
  {
    id: "review-1",
    patientName: "Devendra Pratap Singh",
    location: "Sector 8, Chandigarh",
    rating: 5,
    treatment: "Full Mouth Dental Implants",
    date: "June 2026",
    reviewText: "I was extremely apprehensive about dental implants due to bone loss. Dr. Sabharwal spent an hour explaining the 3D computer-guided approach. The actual surgery was completed with almost zero pain, no cuts, and I walked home with fixed temporary teeth on the same day. CCDC is on par with the best international clinics.",
    isVerified: true
  },
  {
    id: "review-2",
    patientName: "Meenakshi Sharma",
    location: "Panchkula",
    rating: 5,
    treatment: "Laser Root Canal & E-Max Veneers",
    date: "May 2026",
    reviewText: "I had extreme fear of dental drills. Finding Dr. Sabharwal was a blessing. He used the laser to clean my decayed tooth without any drilling sound or pain. I also got veneers done for my front teeth, and they look incredibly natural. His attention to detail is outstanding!",
    isVerified: true
  },
  {
    id: "review-3",
    patientName: "Harpreet Singh Bajwa",
    location: "Mohali / Calgary, Canada",
    rating: 5,
    treatment: "Digital Smile Designing & Veneers",
    date: "March 2026",
    reviewText: "As an NRI, I had limited time in Chandigarh. Dr. Sabharwal digitized my entire jaw, designed my new smile, and placed 8 porcelain veneers in just 4 days. The fit is immaculate, and the communication throughout was highly professional. Absolutely recommend CCDC to everyone looking for premium dental care.",
    isVerified: true
  },
  {
    id: "review-4",
    patientName: "Dr. Ananya Roy",
    location: "PGIMER Resident, Chandigarh",
    rating: 5,
    treatment: "Painless Wisdom Tooth Extraction",
    date: "April 2026",
    reviewText: "Being a medical professional myself, I am very picky about sterile protocols. Dr. Sabharwal's clinic has class-leading autoclave systems and air filtration. He removed my impacted wisdom tooth using localized STA numbing in under 20 minutes. I felt absolutely nothing. Excellent care!",
    isVerified: true
  }
];

export const faqList: FaqItem[] = [
  {
    id: "faq-1",
    question: "How is 'Painless Dentistry' achieved at CCDC?",
    answer: "We achieve a near-painless experience through a combination of three advanced methods: first, the STA Single Tooth Anesthesia system, which computer-controls local numbing to prevent syringe pinches; second, our dental lasers, which replace vibration-heavy dental drills for cavity prep and gum treatment; and third, our highly precise, minimally invasive surgical planning which minimizes recovery inflammation.",
    category: "Painless Treatment"
  },
  {
    id: "faq-2",
    question: "Do you offer treatment on a single visit?",
    answer: "Yes. Many of our procedures—such as dental crowns, root canals, fillings, and computer-guided single implants—can be safely and effectively completed in a single dental session. Our digital workflows allow us to scan and process diagnostic teeth designs within minutes.",
    category: "Scheduling"
  },
  {
    id: "faq-3",
    question: "What makes digital 3D implant planning better?",
    answer: "Traditional dental implantology relies on flat 2D X-rays and tactile feedback. Our digital approach uses a high-speed 3D intraoral scanner combined with high-resolution bone imaging to create a virtual 3D guide. This guide allows Dr. Sabharwal to view the precise angle, bone depth, and surrounding nerves before the procedure, resulting in highly accurate, stitch-free 'flapless' placements with minimal recovery times.",
    category: "Implants"
  },
  {
    id: "faq-4",
    question: "How do I schedule an appointment?",
    answer: "You can tap any of the 'Book via WhatsApp' buttons on our website. This will open WhatsApp with a pre-filled message directly to our clinic desk. Our administrative coordinator will immediately share available slots matching your convenience, preventing waiting room crowding.",
    category: "Appointments"
  },
  {
    id: "faq-5",
    question: "Are there sterilization standards maintained in the clinic?",
    answer: "Yes, we adhere strictly to international sterilization guidelines. We utilize a Class-B vacuum autoclave, sterile single-use disposable kits for every patient, UV sterilization cabinets, and high-volume clinical air purifiers to maintain surgical-grade hygiene across all chambers.",
    category: "Safety"
  }
];
