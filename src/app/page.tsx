import ScrollProgress from "@/components/shared/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      
      <div className="relative noise">
        <Navbar />
        
        <main className="flex flex-col">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
