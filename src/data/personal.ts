// Edit your personal details here — every section reads from this file.
// Frozen at runtime to guarantee tamper-proof immutability.
export const personal = Object.freeze({
  fullName: "Pasindu Kawmina Wickramarathna",
  shortName: "Pasindu Kawmina",
  firstName: "Pasindu",
  initials: "PK",
  title: "Founder & Lead Developer @ DevLogic Labs | Full-Stack Web Developer | ICT Undergraduate",
  titleLines: ["Founder @ DevLogic Labs", "Full-Stack Web Developer", "Aspiring AI/ML Engineer"],
  roles: [
    "Full-Stack Web Developer",
    "Digital Solutions Architect",
    "React.js & Node.js Developer",
    "AI/ML Enthusiast",
    "Software Engineer Intern",
  ],
  tagline: "Turning ideas into technology, and technology into solutions.",
  location: "Colombo, Sri Lanka",
  email: "pasindukawmina85@gmail.com",
  phoneDisplay: "+94 77 282 0226",
  phoneE164: "94772820226",
  linkedin: "https://linkedin.com/in/pasindu-kawmina-2ab5b4288",
  github: "https://github.com/kawmina2001",
  // Link to CV file
  cvUrl: "/Pasindu_Kawmina_CV.pdf",
  languages: ["Sinhala", "English"],
  bio: [
    "I am a fourth-year Bachelor of Information and Communication Technology (Hons) undergraduate at the University of Vavuniya, Sri Lanka, with a strong passion for software development, emerging technologies, and artificial intelligence.",
    "Driven by the vision of bridging modern engineering with real-world business challenges, I founded DevLogic Labs. Through DevLogic Labs, we partner with clients to engineer bespoke web applications, enterprise POS/ERP systems, and intelligent digital solutions tailored to automate manual processes and help businesses scale efficiently.",
    "I have hands-on experience in developing full-stack web applications using technologies such as React.js, Node.js, Express.js, and .NET. I am also familiar with RESTful API development, database management, authentication systems, and containerization using Docker.",
    "Currently, I am gaining practical industry experience as a Software Engineer Intern at CodeGen International, where I contribute to software engineering solutions and modern enterprise application development.",
    "I enjoy solving real-world problems through technology, learning new tools, and building practical applications. My long-term career goal is to become a skilled Software Engineer specializing in Artificial Intelligence and Machine Learning.",
    "I am always eager to explore new technologies, improve my technical skills, and take on challenging opportunities that help me grow professionally.",
  ],
  interests: [
    "Building scalable web applications.",
    "Exploring Artificial Intelligence and Machine Learning.",
    "Solving real-world problems through software development.",
    "Learning modern frameworks and technologies.",
    "Developing innovative and user-friendly software solutions.",
  ],
});

export const agency = Object.freeze({
  name: "DevLogic Labs",
  tagline: "Build Smart. Think Beyond.",
  category: "Custom Digital Solutions & Technology Agency",
  location: "Colombo, Sri Lanka",
  phoneDisplay: "+94 72 327 0863",
  phoneE164: "94723270863",
  email: "devlogiclabs.mail@gmail.com",
  description:
    "Custom Digital Solutions & Technology Agency delivering bespoke web applications, enterprise business systems, and AI-driven innovations.",
});

export const education = {
  university: "University of Vavuniya, Sri Lanka",
  degree: "Bachelor of Information and Communication Technology (Honours)",
  period: "2023 – Present",
  gpa: "3.41",
};

export const certifications = [
  { title: "AI/ML Engineer – Stage 1 Program", issuer: "Faculty of Computing, SLIIT" },
];

export const extracurricular = [
  {
    title: "Tech Industry Visits",
    companies: "WSO2 • IFS • 99x • Zone24x7",
    role: "Organizing Committee (OC) Member & Participant",
    description:
      "Organized and participated in technical exposure visits to Sri Lanka's leading technology enterprises: WSO2, IFS, 99x, and Zone24x7, gaining firsthand insights into cloud architectures, enterprise software, and deep-tech R&D.",
  },
];

export const process = [
  { step: "01", title: "Discuss", text: "Understand client requirements and project goals." },
  { step: "02", title: "Design", text: "Create the user interface and plan the system architecture." },
  { step: "03", title: "Develop", text: "Build and test the application using suitable technologies." },
  { step: "04", title: "Deliver & Support", text: "Deliver the final product and provide ongoing support when agreed." },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  placeholder?: boolean;
};

// Real, verified client testimonials only — no placeholder names or simulated reviews.
export const testimonials: Testimonial[] = [];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why-website", label: "Value" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const whatsappLink = (text = "Hi Pasindu, I'd like to discuss a project with you.") =>
  `https://wa.me/${personal.phoneE164}?text=${encodeURIComponent(text)}`;

export const agencyWhatsappLink = (text = "Hi DevLogic Labs, I'd like to discuss a project.") =>
  `https://wa.me/${agency.phoneE164}?text=${encodeURIComponent(text)}`;
