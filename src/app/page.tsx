import { About } from "@/components/About";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Experience } from "@/components/Experience";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <div className="hairline h-px" />
        <Services />
        <div className="hairline h-px" />
        <Experience />
        <div className="hairline h-px" />
        <Projects />
        <div className="hairline h-px" />
        <Skills />
        <div className="hairline h-px" />
        <Credentials />
        <div className="hairline h-px" />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
