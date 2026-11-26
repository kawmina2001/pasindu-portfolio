import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { RoleMarquee } from "@/components/portfolio/RoleMarquee";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { BusinessValue } from "@/components/portfolio/BusinessValue";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Process } from "@/components/portfolio/Process";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SectionDock } from "@/components/portfolio/SectionDock";
import { FloatingWhatsApp } from "@/components/portfolio/FloatingWhatsApp";

const title = "Pasindu Kawmina Wickramarathna | Full-Stack Developer & AI/ML Enthusiast";
const description =
  "Portfolio of Pasindu Kawmina Wickramarathna — Full-Stack Web Developer, ICT undergraduate at the University of Vavuniya and aspiring AI/ML Engineer from Sri Lanka.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <RoleMarquee />
        <About />
        <Services />
        <BusinessValue />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <SectionDock />
      <FloatingWhatsApp />
      <div aria-hidden className="h-20 lg:hidden" />
    </MotionConfig>
  );
}
