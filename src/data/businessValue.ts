import {
  Clock,
  Globe2,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const businessValueIntro = {
  eyebrow: "Interactive Growth Engine",
  title: "Why Your Business Needs a Website",
  tagline: "Watch your business transform from a static shop into a 24/7 sales engine.",
  description:
    "See what happens in real-time when your business is powered by a modern, high-performance website.",
};

export type SimulationEvent = {
  id: string;
  time: string;
  title: string;
  subtext: string;
  badge: string;
  badgeType: "lead" | "booking" | "payment" | "trust";
};

export const simulationEvents: SimulationEvent[] = [
  {
    id: "lead-1",
    time: "11:42 PM",
    title: "Automated Booking Confirmed",
    subtext: "Deluxe Villa Booking (+Rs. 45,000) — while you were asleep",
    badge: "24/7 Booking",
    badgeType: "booking",
  },
  {
    id: "lead-2",
    time: "01:15 AM",
    title: "New Client Inquiry via Google",
    subtext: "Corporate client in Colombo requested a custom POS proposal",
    badge: "Google Search #1",
    badgeType: "lead",
  },
  {
    id: "lead-3",
    time: "05:50 AM",
    title: "Online Store Order Received",
    subtext: "E-Commerce checkout paid via Card (+Rs. 18,200) & synced to WhatsApp",
    badge: "Direct Payment",
    badgeType: "payment",
  },
  {
    id: "lead-4",
    time: "08:10 AM",
    title: "Instant Trust Verification",
    subtext: "Overseas client verified official company credentials & requested quote",
    badge: "Verified Trust",
    badgeType: "trust",
  },
];

export type VisualMetric = {
  id: string;
  stat: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const visualMetrics: VisualMetric[] = [
  {
    id: "metric-247",
    stat: "24/7",
    label: "Always Open",
    description: "Your business continues capturing sales and inquiries while you sleep.",
    icon: Clock,
  },
  {
    id: "metric-leads",
    stat: "+300%",
    label: "More Inquiries",
    description: "Generate 3x more qualified customer leads than social media alone.",
    icon: TrendingUp,
  },
  {
    id: "metric-trust",
    stat: "84%",
    label: "Verified Trust",
    description: "Consumers trust and buy only after verifying your official website.",
    icon: ShieldCheck,
  },
  {
    id: "metric-reach",
    stat: "Island-Wide",
    label: "Unlimited Reach",
    description: "Expand past local physical borders to clients across Sri Lanka & abroad.",
    icon: Globe2,
  },
];

export const simulationComparison = {
  withoutWebsite: {
    status: "Store Closed at 8:00 PM",
    badge: "Lost Business Opportunities",
    indicators: [
      {
        icon: "moon",
        title: "Closed After Hours",
        desc: "Customers searching at 10 PM find your competitor who has an active website.",
      },
      {
        icon: "phone-missed",
        title: "Unanswered Inquiries",
        desc: "No way for clients to browse products or book appointments after working hours.",
      },
      {
        icon: "map-pin-off",
        title: "Trapped in Local Area",
        desc: "Only physical walk-ins know you exist. Zero island-wide or global reach.",
      },
      {
        icon: "alert-triangle",
        title: "Zero Google Presence",
        desc: "Invisible when customers search for your services on Google.",
      },
    ],
  },
  withWebsite: {
    status: "Live 24/7 Automated Growth Engine",
    badge: "Active Growth Powered by DevLogic Labs",
    indicators: [
      {
        icon: "zap",
        title: "24/7 Automated Sales & Bookings",
        desc: "Orders and booking deposits processed automatically day and night.",
      },
      {
        icon: "whatsapp",
        title: "Direct WhatsApp Inquiries",
        desc: "Pre-filled customer inquiries routed directly into your phone instantly.",
      },
      {
        icon: "globe",
        title: "Island-Wide Customer Reach",
        desc: "Sell to customers in Colombo, Kandy, Galle, Jaffna and overseas effortlessly.",
      },
      {
        icon: "check-circle",
        title: "Ranked #1 on Google Search",
        desc: "Capture ready-to-buy customers at the exact moment they search for your service.",
      },
    ],
  },
};
