const offeredServices = [
  {
    chargesStartsFrom: 299,
    coveredServices: [
      "Floor & Wall Tile Cleaning",
      "Tap & Stainless Steel Polishing",
      "Toilet & Sink Cleaning",
      "Mirror & Glass Cleaning",
      "Grout Cleaing & more...",
    ],
    notCoveredServices: [],
    serviceName: "Bathroom Care",
    imageSource: "images/bathroom-care-service.jpg",
    iconSource: "images/bathroom-care-service-icon.jpg",
  },
  {
    chargesStartsFrom: 499,
    coveredServices: [
      "Countertop & Sink Cleaning",
      "Wall tile & Cabinet Cleaning",
      "Chimney Exterior Cleaning",
      "Stop & Hobe Cleaning",
      "Grease Removal & more...",
    ],
    notCoveredServices: [],
    serviceName: "Kitchen Care",
    imageSource: "images/kitchen-care-service.jpg",
    iconSource: "images/kitchen-care-service-icon.jpg",
  },
  {
    chargesStartsFrom: 1499,
    coveredServices: [
      "Basic-clean Dusting All Rooms",
      "Basic-clean Kitchen & Bathroom Cleaning",
      "Basic-clean Floor Vacuuming & Mopping",
      "Basic-clean Fan & Cobweb Removal",
      "Basic-clean Window (Inside) & Switchboard Cleaning",

      "Deep-clean Everything in Basic Clean",
      "Deep-clean Kitchen Degreasing",
      "Deep-clean Bathroom Descaling",
      "Deep-clean Floor & Tile Scrubbing",
      "Deep-clean Detailed Sanitization",
    ],
    notCoveredServices: [],
    serviceName: "Full Home Care",
    imageSource: "images/full-home-care.jpg",
    iconSource: "images/full-home-care-icon.jpg",
  },
] satisfies {
  serviceName: string;
  chargesStartsFrom: number;
  coveredServices: string[];
  notCoveredServices: string[];
  imageSource: string;
  iconSource: string;
}[];

const upcomingServices = [
  { serviceName: "Sofa Cleaning" },
  { serviceName: "Carpet Cleaning" },
  { serviceName: "Water Tank Cleaning" },
  { serviceName: "Pest Control" },
  { serviceName: "Electrician" },
  { serviceName: "Plumbing" },
] satisfies {
  serviceName: string;
}[];

const whyTrustHandych = [
  {
    title: "Trusted Professional",
    description:
      "Trained, verified and background checked experts you can rely on",
    iconSource: "images/why-trust-us/icon-1.jpg",
  },
  {
    title: "Far & Honest Pricing",
    description:
      "Trained, verified and background checked experts you can rely on",
    iconSource: "images/why-trust-us/icon-2.jpg",
  },
  {
    title: "Right Tool for Every Job",
    description:
      "We use the right equipment to deliver a deep and efficient clean.",
    iconSource: "images/why-trust-us/icon-3.jpg",
  },
  {
    title: "Safe for Your Family",
    description:
      "Eco-friendly and non-toxic products that are safe for your loved ones.",
    iconSource: "images/why-trust-us/icon-4.jpg",
  },
  {
    title: "Book in Minutes",
    description: "Simple WhatsApp booking. Quick, easy and hassle-free.",
    iconSource: "images/why-trust-us/icon-5.jpg",
  },
  {
    title: "We Respect Your Time",
    description: "We arrive on time and complete the job as promised.",
    iconSource: "images/why-trust-us/icon-6.jpg",
  },
  {
    title: "No Hidden Surprises",
    description: "Transparent service from start to finish. Always.",
    iconSource: "images/why-trust-us/icon-7.jpg",
  },
] satisfies {
  title: string;
  description: string;
  iconSource: string;
}[];

export { offeredServices, upcomingServices, whyTrustHandych };
