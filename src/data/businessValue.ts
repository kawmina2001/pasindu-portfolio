import {
  BarChart3,
  Clock,
  Globe2,
  LineChart,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type ValuePillar = {
  id: string;
  number: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  badge: string;
  icon: LucideIcon;
};

export type ComparisonItem = {
  aspect: string;
  withoutWebsite: string;
  withWebsite: string;
};

export const businessValueIntro = {
  eyebrow: "Business Impact & Growth",
  title: "Why Your Business Needs a Website",
  tagline: "A modern website is your highest-performing, 24/7 sales engine.",
  description:
    "In today's digital-first economy, a website is not an expense — it is an investment that builds customer trust, automates operations, and continuously scales your revenue.",
};

export const valuePillars: ValuePillar[] = [
  {
    id: "sales-automation",
    number: "01",
    title: "24/7 Automated Sales & Lead Generation",
    description:
      "Physical shops and office lines close, but your website never sleeps. Capture customer inquiries, orders, and appointment bookings 24 hours a day, 365 days a year without manual intervention.",
    stat: "3.5x",
    statLabel: "Higher inquiry volume than social media alone",
    badge: "Sales Automation",
    icon: TrendingUp,
  },
  {
    id: "brand-credibility",
    number: "02",
    title: "Instant Brand Credibility & Market Authority",
    description:
      "Over 84% of consumers research a business online before making a purchase. A branded, high-performance website establishes verified credibility, builds immediate confidence, and sets you apart from competitors.",
    stat: "84%",
    statLabel: "Consumers trust businesses with official websites",
    badge: "Brand Authority",
    icon: ShieldCheck,
  },
  {
    id: "market-reach",
    number: "03",
    title: "Island-Wide & Global Market Expansion",
    description:
      "Break past physical geographic borders. Showcase your products, villas, menus, educational courses, or custom services to high-value customers across Sri Lanka and worldwide seamlessly.",
    stat: "Global",
    statLabel: "Market reach without geographic boundaries",
    badge: "Unlimited Scale",
    icon: Globe2,
  },
  {
    id: "operational-savings",
    number: "04",
    title: "Operational Automation & Staff Time Saved",
    description:
      "Automate repetitive tasks like answering FAQs, sharing price lists, taking bookings, and managing catalogs. Free up your core team to focus on scaling and delivering high-quality work.",
    stat: "15+ hrs",
    statLabel: "Saved weekly on repetitive customer communication",
    badge: "Cost Efficiency",
    icon: Clock,
  },
  {
    id: "owned-asset",
    number: "05",
    title: "100% Owned Digital Real Estate",
    description:
      "Social media algorithms change constantly and can limit your organic reach overnight. Your custom website is your proprietary digital asset that you own 100%, with zero algorithm penalties.",
    stat: "100%",
    statLabel: "Direct customer ownership & zero algorithm risk",
    badge: "Direct Ownership",
    icon: BarChart3,
  },
  {
    id: "data-analytics",
    number: "06",
    title: "Data-Driven Customer Intelligence",
    description:
      "Track exactly which services your customers want, where they come from, and what converts them using precision visitor data. Make strategic, profitable marketing decisions backed by real analytics.",
    stat: "Real-Time",
    statLabel: "Actionable visitor insights & conversion tracking",
    badge: "Data Intelligence",
    icon: LineChart,
  },
];

export const businessComparison: ComparisonItem[] = [
  {
    aspect: "Customer Accessibility",
    withoutWebsite: "Limited to operating hours and local physical location",
    withWebsite: "Continuous 24/7 global access with instant online interaction",
  },
  {
    aspect: "Customer Trust & Legitimacy",
    withoutWebsite: "Skeptical buyers questioning business authenticity",
    withWebsite: "Immediate professional authority and verified brand trust",
  },
  {
    aspect: "Lead & Order Inquiries",
    withoutWebsite: "Manual phone calls and unanswered chat messages",
    withWebsite: "Automated inquiry pipelines, booking calendars & WhatsApp sync",
  },
  {
    aspect: "Search Visibility",
    withoutWebsite: "Invisible when customers search for solutions on Google",
    withWebsite: "Ranked on search engines, capturing high-intent paying clients",
  },
  {
    aspect: "Business Equity & Value",
    withoutWebsite: "Zero digital asset value; dependent on third-party apps",
    withWebsite: "High-value digital asset that increases overall enterprise worth",
  },
];
