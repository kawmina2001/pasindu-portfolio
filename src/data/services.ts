import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  Building2,
  CalendarCheck,
  Code2,
  Cpu,
  GraduationCap,
  Hotel,
  Palette,
  Palmtree,
  Rocket,
  Scissors,
  ShoppingCart,
  Smartphone,
  Store,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = { title: string; description: string; icon: LucideIcon };

export const agencyServicesIntro = {
  agencyName: "DevLogic Labs",
  tagline: "Build Smart. Think Beyond.",
  category: "Custom Digital Solutions & Technology Agency",
  description:
    "All custom client solutions, business software, and digital services are professionally engineered and delivered through my agency, DevLogic Labs.",
};

export const services: Service[] = [
  {
    title: "Web Application Development",
    icon: Code2,
    description: "High-performance, scalable web applications with modern frontend architectures, robust backend APIs, and real-time data flows.",
  },
  {
    title: "Mobile Application Development (Android & iOS)",
    icon: Smartphone,
    description: "Cross-platform mobile apps for Android and iOS engineered for fluid touch interactions, device integrations, and offline reliability.",
  },
  {
    title: "Custom Software Development",
    icon: Cpu,
    description: "Bespoke software systems and automation solutions engineered around your organization's specific operational workflows and goals.",
  },
  {
    title: "POS & Business Management Systems",
    icon: Store,
    description: "Point-of-sale platforms featuring rapid billing, multi-branch inventory tracking, barcode integration, and comprehensive profit analytics.",
  },
  {
    title: "Learning Management Systems (LMS)",
    icon: GraduationCap,
    description: "Interactive e-learning platforms with structured course modules, student dashboards, live classes, quizzes, and automated certification.",
  },
  {
    title: "Salon, Spa & Tattoo Shop Booking Systems",
    icon: Scissors,
    description: "Specialized booking engines with stylist scheduling, automated client reminders, service add-ons, and integrated payment tracking.",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "User-centric wireframing, high-fidelity Figma prototypes, design systems, and conversion-optimized interactive user interfaces.",
  },
  {
    title: "Business & Corporate Websites",
    icon: Briefcase,
    description: "Authoritative, fast, and mobile-responsive corporate websites that establish company credibility and drive qualified client inquiries.",
  },
  {
    title: "E-Commerce & Online Stores",
    icon: ShoppingCart,
    description: "Full-featured online shops with dynamic product catalogs, seamless payment gateway integrations, order tracking, and sales analytics.",
  },
  {
    title: "Hotel, Villa & Hospitality Websites",
    icon: Hotel,
    description: "Immersive hospitality websites showcasing luxury rooms, villas, amenities, photo galleries, and direct booking reservation inquiries.",
  },
  {
    title: "Travel & Tourism Websites",
    icon: Palmtree,
    description: "Visually rich travel portals featuring custom tour packages, destination guides, quotation calculators, and easy booking inquiries.",
  },
  {
    title: "Restaurant & Food Ordering Websites",
    icon: UtensilsCrossed,
    description: "Engaging restaurant websites with digital menus, table reservation engines, online food ordering flows, and WhatsApp order delivery.",
  },
  {
    title: "Education & Learning Platforms",
    icon: BookOpen,
    description: "Tailored portals for schools, tuition institutes, and academies featuring student enrollment, study materials, and teacher-parent communication.",
  },
  {
    title: "Real Estate & Property Websites",
    icon: Building2,
    description: "Modern property listings platforms with advanced location filters, photo and video showcases, agent profiles, and lead capture forms.",
  },
  {
    title: "Portfolio & Personal Websites",
    icon: BadgeCheck,
    description: "Distinctive, high-impact personal brand portfolios for founders, creatives, and engineers built to leave a lasting impression.",
  },
  {
    title: "Landing Pages",
    icon: Rocket,
    description: "Laser-focused, high-converting landing pages built for marketing campaigns, SaaS products, and rapid lead acquisition.",
  },
  {
    title: "Online Reservation & Appointment Systems",
    icon: CalendarCheck,
    description: "Self-service booking portals with real-time slot availability, automated calendar synchronization, and instant notification alerts.",
  },
  {
    title: "Website Maintenance & Technical Support",
    icon: Wrench,
    description: "Proactive speed optimization, regular security updates, domain and hosting management, bug fixes, and continuous technical support.",
  },
];
