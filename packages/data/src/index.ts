const heroItem = [
  { label: "Verified Staff" },
  { label: "Same Day Service" },
  { label: "Affordable Pricing" },
  { label: "Quality Assured" },
] satisfies { label: string }[];

const stat = [
  { counter: "5000+", label: "Services Completed" },
  { counter: "2000+", label: "Happy Customers" },
  { counter: "150+", label: "Professionals" },
  { counter: "4.9", label: "Customer Rating" },
] satisfies { counter: string; label: string }[];

const whyChooseUs = [
  {
    description:
      "Every professional undergoes identity verification and background checks before joining Handych.",
    title: "Verified Professionals",
  },
  {
    description:
      "Book services according to your availability with same-day and advance scheduling options.",
    title: "Flexible Scheduling",
  },
  {
    description:
      "Know exactly what you are paying for with no hidden charges or surprise fees.",
    title: "Transparent Pricing",
  },
  {
    description:
      "Consistent service standards with customer satisfaction at the center of everything we do.",
    title: "Quality Assurance",
  },
] satisfies {
  title: string;
  description: string;
}[];

const howItWorksSteps = [
  {
    description:
      "Browse housekeeping, deep cleaning, office cleaning and specialized services.",
    title: "Choose Service",
  },
  {
    description: "Choose a date and time that fits your availability.",
    title: "Pick Schedule",
  },
  {
    description:
      "A trained and verified professional arrives at your location.",
    title: "Professional Arrives",
  },
  {
    description:
      "Relax while we transform your space into a cleaner environment.",
    title: "Enjoy Clean Space",
  },
] satisfies {
  title: string;
  description: string;
}[];

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "Simply choose a service, select your preferred date and time, and confirm your booking online.",
  },
  {
    question: "Are your professionals verified?",
    answer:
      "Yes. Every professional undergoes identity verification and quality screening before joining Handych.",
  },
  {
    question: "Do you offer same-day bookings?",
    answer:
      "Depending on availability, same-day bookings may be available in selected service areas.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept online payments, UPI, cards, net banking, and cash where available.",
  },
  {
    question: "Can I reschedule my booking?",
    answer:
      "Yes. You can reschedule from your booking dashboard or contact support.",
  },
] satisfies {
  question: string;
  answer: string;
}[];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Durgapur",
    rating: 5,
    review:
      "Handych completely transformed our apartment. The team arrived on time, worked professionally, and left every room spotless. Easily the best housekeeping service we've used.",
    featured: true,
  },
  {
    name: "Rahul Das",
    location: "Kolkata",
    rating: 5,
    review: "Booking was simple and the service quality exceeded expectations.",
  },
  {
    name: "Ananya Roy",
    location: "Asansol",
    rating: 5,
    review:
      "Professional staff, transparent pricing, and excellent communication.",
  },
] satisfies {
  name: string;
  location: string;
  rating: number;
  review: string;
  featured?: boolean;
}[];

const services = [
  {
    title: "Housekeeping",
    description:
      "Routine cleaning and maintenance to keep your home organized and spotless.",
    price: "Starting ₹499",
    includes: ["Dusting", "Floor Cleaning", "Bed Making", "Trash Removal"],
  },
  {
    title: "Deep Cleaning",
    description: "Comprehensive cleaning for every corner of your property.",
    price: "Starting ₹999",
    includes: [
      "Wall Cleaning",
      "Window Cleaning",
      "Furniture Cleaning",
      "Sanitization",
    ],
  },
  {
    title: "Office Cleaning",
    description: "Professional cleaning services for productive workspaces.",
    price: "Starting ₹1499",
    includes: ["Desk Cleaning", "Meeting Rooms", "Washrooms", "Waste Disposal"],
  },
  {
    title: "Kitchen Cleaning",
    description: "Deep grease removal and complete kitchen sanitization.",
    price: "Starting ₹799",
    includes: ["Countertops", "Cabinets", "Tiles", "Sink Cleaning"],
  },
  {
    title: "Bathroom Cleaning",
    description: "Deep sanitization for cleaner and healthier bathrooms.",
    price: "Starting ₹699",
    includes: ["Tiles", "Mirrors", "Toilets", "Stain Removal"],
  },
  {
    title: "Move In / Move Out",
    description: "Complete property preparation before or after moving.",
    price: "Starting ₹1999",
    includes: [
      "Dust Removal",
      "Floor Cleaning",
      "Kitchen Cleaning",
      "Bathroom Cleaning",
    ],
  },
] as const satisfies {
  title: string;
  description: string;
  price: string;
  includes: string[];
}[];

const specialPackages = [
  {
    title: "Essential",
    price: "₹499",
    features: [
      "Floor Cleaning",
      "Dusting",
      "Trash Removal",
      "Basic Sanitization",
    ],
  },
  {
    title: "Deep Clean",
    featured: true,
    price: "₹999",
    features: [
      "Everything in Essential",
      "Kitchen Deep Cleaning",
      "Bathroom Deep Cleaning",
      "Furniture Cleaning",
      "Window Cleaning",
    ],
  },
  {
    title: "Premium Care",
    price: "₹1999",
    features: [
      "Everything in Deep Clean",
      "Move-Out Cleaning",
      "Priority Scheduling",
      "Dedicated Support",
    ],
  },
] satisfies {
  title: string;
  featured?: boolean;
  price: string;
  features: string[];
}[];

const qualitySteps = [
  {
    title: "Background Verification",
    description: "Identity checks and verification before onboarding.",
  },
  {
    title: "Professional Training",
    description: "Standardized service and safety training programs.",
  },
  {
    title: "Performance Monitoring",
    description: "Continuous quality tracking and service audits.",
  },
  {
    title: "Customer Feedback Reviews",
    description: "Every booking contributes to our quality score.",
  },
] satisfies {
  title: string;
  description: string;
}[];

const ourValues = [
  {
    title: "Trust",
    description:
      "Every professional is carefully verified before joining Handych.",
  },
  {
    title: "Quality",
    description: "Consistent service standards across every booking.",
  },
  {
    title: "Customer First",
    description: "Every decision starts with customer satisfaction.",
  },
  {
    title: "Professionalism",
    description: "Reliable, punctual and respectful service delivery.",
  },
] satisfies {
  title: string;
  description: string;
}[];

export {
  stat,
  whyChooseUs,
  heroItem,
  howItWorksSteps,
  faqs,
  testimonials,
  services,
  specialPackages,
  qualitySteps,
  ourValues,
};
