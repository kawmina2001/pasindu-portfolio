// Edit your personal details here — every section reads from this file.
export const personal = {
  fullName: "Pasindu Kawmina Wickramarathna",
  shortName: "Pasindu Kawmina",
  firstName: "Pasindu",
  initials: "PK",
  title: "Full-Stack Web Developer | ICT Undergraduate | Aspiring AI/ML Engineer",
  titleLines: ["Full-Stack Web Developer", "ICT Undergraduate", "Aspiring AI/ML Engineer"],
  roles: [
    "Full-Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Software Developer",
    "AI/ML Enthusiast",
    "UI/UX Designer",
  ],
  tagline: "Turning ideas into technology, and technology into solutions.",
  location: "Pannipitiya, Sri Lanka",
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
};

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
  { title: "WSO2 Industry Visit", role: "Organizing Committee (OC) Member" },
];

export const process = [
  { step: "01", title: "Discuss", text: "Understand client requirements and project goals." },
  { step: "02", title: "Design", text: "Create the user interface and plan the system architecture." },
  { step: "03", title: "Develop", text: "Build and test the application using suitable technologies." },
  { step: "04", title: "Deliver & Support", text: "Deliver the final product and provide ongoing support when agreed." },
];

// Placeholder testimonials — replace with real client feedback when available.
export const testimonials = [
  { quote: "Your client testimonial will appear here once it has been shared.", name: "Client Name", role: "Role, Company", placeholder: true },
  { quote: "Space reserved for genuine feedback from a future project.", name: "Client Name", role: "Role, Company", placeholder: true },
  { quote: "Real reviews only — this card will be updated with an actual testimonial.", name: "Client Name", role: "Role, Company", placeholder: true },
  { quote: "Placeholder testimonial. Add real client words in src/data/personal.ts.", name: "Client Name", role: "Role, Company", placeholder: true },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const whatsappLink = (text = "Hi Pasindu, I'd like to discuss a project with you.") =>
  `https://wa.me/${personal.phoneE164}?text=${encodeURIComponent(text)}`;
