import {
  Code2,
  ShoppingCart,
  Store,
  Hotel,
  Briefcase,
  Palmtree,
  Figma,
  Database,
  AppWindow,
  type LucideIcon,
} from "lucide-react";

export type Service = { title: string; description: string; icon: LucideIcon };

export const services: Service[] = [
  { title: "Full-Stack Web Development", icon: Code2, description: "End-to-end web applications with modern frontends, secure APIs and reliable databases." },
  { title: "Custom POS & Business Management Systems", icon: Store, description: "Sales, inventory, repairs, credit and reporting tools tailored to how your business runs." },
  { title: "E-Commerce Website Development", icon: ShoppingCart, description: "Online stores with product catalogues, carts, checkout flows and admin dashboards." },
  { title: "Hotel & Villa Website Development", icon: Hotel, description: "Elegant property websites that showcase rooms, amenities and drive direct enquiries." },
  { title: "Business Website Development", icon: Briefcase, description: "Professional, fast and responsive websites that present your brand with confidence." },
  { title: "Tourism Website Development", icon: Palmtree, description: "Visually rich travel and tour websites with clear packages and easy contact options." },
  { title: "UI/UX Design using Figma", icon: Figma, description: "User-centred wireframes, prototypes and polished interface designs in Figma." },
  { title: "Database and API Development", icon: Database, description: "Well-structured databases and RESTful APIs with authentication and clean documentation." },
  { title: "Custom Web Application Development", icon: AppWindow, description: "Bespoke web apps built around your workflow, from idea to deployment." },
];
