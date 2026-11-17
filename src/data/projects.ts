import novaImg from "@/assets/projects/02-novastore/cover.jpg";
import taskImg from "@/assets/projects/03-taskflow/cover.jpg";
import fastApiImg from "@/assets/projects/09-fast-API/cover.jpg";
import agriImg from "@/assets/projects/06-agrigo/cover.jpg";
import fashionImg from "@/assets/projects/05-fashionexus/cover.jpg";
import snakeImg from "@/assets/projects/snake-id.jpg";
import chatImg from "@/assets/projects/04-realtime-chat/cover.jpg";
import studentImg from "@/assets/projects/07-student-performance/cover.jpg";
import eduflexImg from "@/assets/projects/ui-ux/preview.png";
import foodiesImg from "@/assets/projects/ui-ux/cover.jpg";

export type ProjectCategory = "client" | "personal" | "academic" | "research" | "uiux";

export const projectFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "personal", label: "Personal Projects" },
  { id: "academic", label: "Academic Projects" },
  { id: "uiux", label: "UI/UX Designs" },
  { id: "research", label: "Research Projects" },
  { id: "client", label: "Client Projects" },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string;
  features?: string[];
  tech: string[];
  categories: ProjectCategory[];
  image?: string;
  // Only add real links. Buttons are hidden while these are empty.
  liveUrl?: string;
  githubUrl?: string;
  note?: string;
  placeholder?: boolean;
  confidential?: boolean;
  featured?: boolean;
};

// Categories are best guesses — adjust them to match each project.
export const projects: Project[] = [
  {
    id: "novastore",
    number: "01",
    title: "NovaStore",
    subtitle: "Full-Stack E-commerce Application",
    description: "Developed a full-stack e-commerce web application using the MERN stack (MongoDB, Express.js, React, and Node.js). Implemented JWT-based authentication, role-based access control, product management, responsive user interfaces, and core e-commerce functionality. Used Tailwind CSS to create a modern and responsive frontend while building a scalable backend architecture for managing application data and user interactions.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "Tailwind CSS"],
    categories: ["personal"],
    image: novaImg,
    featured: true,
  },
  {
    id: "taskflow",
    number: "02",
    title: "Full-Stack Task Manager",
    subtitle: "Kanban Project Management Application",
    description: "Developed a full-stack Kanban-style task management application inspired by modern project management platforms. Built the frontend using React and Tailwind CSS and developed the backend using Node.js and Express.js. Integrated PostgreSQL with Prisma ORM for reliable data management and implemented drag-and-drop task organization. The application demonstrates practical experience in full-stack development, database design, API development, and interactive user interface design.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Express.js"],
    categories: ["personal"],
    image: taskImg,
    featured: true,
  },
  {
    id: "fastapi-rest-api",
    number: "03",
    title: "FastAPI REST API Application",
    subtitle: "High-Performance Python Backend Architecture",
    description: "Built a RESTful API application using Python and FastAPI, focusing on clean API architecture, request validation, CRUD operations, and backend development. Implemented structured API endpoints and interactive API documentation to support efficient development and testing. The project strengthened practical skills in Python backend development, API design, data handling, and server-side application development.",
    tech: ["Python", "FastAPI", "Back-End Web Development", "API Development", "REST APIs"],
    categories: ["personal"],
    image: fastApiImg,
    featured: true,
  },
  {
    id: "agrigo",
    number: "04",
    title: "Agriculture Management System",
    subtitle: "Multi-Tier Desktop Management Application",
    description: "Developed a multi-tier desktop application using C# and .NET 8 to streamline agricultural management processes. Implemented role-based access control for secure user management and developed features for managing agricultural data and generating automated reports. The project focused on applying object-oriented programming, database management, software architecture, and secure application development principles.",
    tech: [".NET Framework", "C#", "Microsoft SQL Server", "User Interface Design"],
    categories: ["academic"],
    image: agriImg,
    featured: true,
  },
  {
    id: "fashionexus",
    number: "05",
    title: "FashioNexus",
    subtitle: "AI-Driven Retail Platform",
    description: "Developed a full-stack sales optimization platform integrating a Flask-based machine learning microservice for demand forecasting, containerized with Docker and Nginx.",
    tech: ["React.js", "Node.js", "MySQL", "Flask", "Docker", "Nginx"],
    categories: ["academic"],
    image: fashionImg,
    featured: true,
  },
  {
    id: "snake-identification",
    number: "06",
    title: "ML Snake Identification System",
    subtitle: "Machine Learning-Based Snake Species Identification, Classification, and First Aid Advisory System for Sri Lanka",
    description: "An AI-based research project focused on identifying and classifying snake species in Sri Lanka using machine learning and providing relevant first-aid guidance.",
    features: [
      "Classification of 13 snake species.",
      "Transfer learning.",
      "ResNet50.",
      "EfficientNet.",
      "MobileNetV2.",
      "Grad-CAM explainability.",
      "Vision Language Model verification.",
      "Offline Android application.",
      "Kotlin.",
      "TensorFlow Lite.",
    ],
    tech: ["TensorFlow Lite", "Kotlin", "ResNet50", "EfficientNet", "MobileNetV2"],
    categories: ["research"],
    image: snakeImg,
    featured: true,
  },
  {
    id: "realtime-chat",
    number: "07",
    title: "Real-Time Chat Application",
    subtitle: "Instant Messaging & WebSockets Platform",
    description: "Developed a real-time chat platform with private and group messaging, online status, typing indicators, read receipts, JWT authentication, and persistent message history.",
    tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"],
    categories: ["personal"],
    image: chatImg,
    featured: true,
  },
  {
    id: "student-performance",
    number: "08",
    title: "Student Performance Management System",
    subtitle: "Academic Insights & Tracking Platform",
    description: "An academic management application designed to help track student academic progress, manage results, and provide useful insights through dashboards and analytics.",
    tech: ["React.js", "Node.js", "Database Management", "UI/UX Design"],
    categories: ["academic"],
    image: studentImg,
    featured: true,
  },
  {
    id: "eduflex-uiux",
    number: "09",
    title: "EduFlex",
    subtitle: "Modern E-Learning Web Platform UI/UX",
    description: "A clean, contemporary user interface designed for a modern e-learning platform. Features intuitive course discovery, tutor booking, transparent pricing tiers, and admission workflows with high-contrast typography and engaging visual layouts.",
    features: [
      "Modern e-learning landing page design.",
      "Course discovery & pricing tiers.",
      "Tutor and admission connection flows.",
      "Responsive layout & design system in Figma.",
    ],
    tech: ["Figma", "UI/UX Design", "Wireframing", "Design Systems", "Prototyping"],
    categories: ["personal", "uiux"],
    image: eduflexImg,
    featured: true,
  },
  {
    id: "foodies-uiux",
    number: "10",
    title: "Delicious Foods",
    subtitle: "Mobile Culinary & Food Ordering UI/UX",
    description: "A sleek, user-friendly mobile application interface designed for culinary discovery and food delivery. Features curated dish highlights, interactive meal customization, nutritional information, and streamlined ordering flows.",
    features: [
      "Mobile culinary discovery interface.",
      "Dish details, ingredients & pricing.",
      "Seamless ordering and cart management.",
      "Modern mobile UI components designed in Figma.",
    ],
    tech: ["Figma", "Mobile App Design", "UI/UX Design", "Interactive Prototyping"],
    categories: ["personal", "uiux"],
    image: foodiesImg,
    featured: true,
  },
  {
    id: "mobile-shop-pos",
    number: "11",
    title: "Mobile Shop POS System",
    subtitle: "Cloud Point of Sale & Management",
    description: "A cloud-based Point of Sale and business management system developed for a mobile phone shop with inventory, repairs, credit tracking, and owner dashboard.",
    features: [
      "Mobile phone sales management.",
      "Repair management.",
      "Accessories inventory.",
      "Reload management.",
      "Customer and supplier credit tracking.",
      "Technician commission management.",
      "Expense tracking.",
      "Owner dashboard.",
      "Daily closing summaries.",
      "Bill printing.",
      "Automatic cloud backups.",
      "Multi-PC access.",
    ],
    tech: ["Web Technologies", "Cloud Architecture", "POS System", "User Interface Design"],
    categories: ["client"],
    confidential: true,
    note: "Client Confidential: Screenshots and proprietary interfaces are omitted as per client agreement.",
  },
  {
    id: "incomplete-section",
    number: "12",
    title: "Incomplete Section Web Application",
    subtitle: "Barcode Inventory Tracking System",
    description: "A barcode-scanning inventory tracking application developed during industry internship-related work.",
    features: [
      "Barcode scanning.",
      "Temporary storage management.",
      "Permanent storage management.",
      "Admin approval system.",
      "PDF and Excel reports.",
      "Charts and analytics.",
      "Search functionality.",
    ],
    categories: ["client"],
    confidential: true,
    note: "Client Confidential: Internal industrial barcode tracking screens and inventory logs are protected under client NDA.",
    tech: ["Web Technologies", "Barcode Scanning", "Data Tracking"],
  },
  {
    id: "client-placeholder-1",
    number: "13",
    title: "Client Enterprise Project",
    subtitle: "Confidential Client Solution",
    description: "Custom software developed for a corporate client. Technical architecture and details available upon request.",
    tech: ["Full-Stack", "Secure Architecture"],
    categories: ["client"],
    confidential: true,
    note: "Client Confidential: Proprietary business logic and visuals protected under NDA.",
    placeholder: true,
  },
  {
    id: "client-placeholder-2",
    number: "14",
    title: "Client Enterprise Project",
    subtitle: "Confidential Client Solution",
    description: "Custom software developed for a corporate client. Technical architecture and details available upon request.",
    tech: ["Full-Stack", "Secure Architecture"],
    categories: ["client"],
    confidential: true,
    note: "Client Confidential: Proprietary business logic and visuals protected under NDA.",
    placeholder: true,
  },
];

export const filterProjects = (list: Project[], filter: "all" | ProjectCategory) => {
  if (filter === "all") {
    // Only display special featured projects (including UI/UX) in the main All Projects overview
    return list.filter((p) => p.featured === true);
  }
  return list.filter((p) => p.categories.includes(filter));
};
