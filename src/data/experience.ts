export type Experience = {
  position: string;
  company: string;
  location?: string;
  // Leave as a placeholder until you add the real dates.
  period: string;
  current?: boolean;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    position: "Software Engineer Intern",
    company: "CodeGen International",
    location: "Sri Lanka",
    period: "Present",
    current: true,
    responsibilities: [
      "Contributing to enterprise software development and engineering solutions.",
      "Working with modern technologies and collaborating with development teams.",
      "Solving real-world problems and building scalable software applications.",
    ],
  },
  {
    position: "Software Engineering & IT Intern",
    company: "Omega Line Ltd",
    location: "Omega Line Vavuniya Apparels, Sri Lanka",
    period: "Previous",
    responsibilities: [
      "Worked as a Software Engineering Intern designing and developing internal systems to automate business workflows and improve operational processes.",
      "Gathered user requirements, analyzed business logic, and contributed to full-stack system development and testing.",
      "Managed and monitored enterprise IT network infrastructure, assisted with server administration and hardware support.",
      "Diagnosed and resolved network connectivity, system performance, and IT troubleshooting issues across departments.",
      "Collaborated with cross-functional operational teams to ensure high system availability and reliable IT operations.",
    ],
  },
  {
    position: "Founder & Lead Developer",
    company: "DevLogic Labs",
    location: "Colombo, Sri Lanka",
    period: "2023 – Present",
    current: true,
    responsibilities: [
      "Founded DevLogic Labs, a custom digital solutions and technology agency delivering bespoke software for businesses.",
      "Architecting and developing custom POS, ERP, and e-commerce platforms tailored to operational requirements.",
      "Building high-performance web applications with modern full-stack architectures and AI/ML integrations.",
      "Managing end-to-end client projects from requirements discovery to production deployment and ongoing support.",
    ],
  },
];
