export interface DoctorProfile {
  name: string;
  role: string;
  education: string[];
  experienceYears: number;
  legacyText: string;
  bio: string[];
  achievements: string[];
  photoUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string; // Used to dynamically select Lucide icons
}

export interface TechItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  precisionImpact: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  location: string;
  rating: number;
  treatment: string;
  date: string;
  reviewText: string;
  isVerified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ClinicDetails {
  name: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  address: string;
  mapEmbedUrl?: string;
  timings: {
    days: string;
    hours: string;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
}
