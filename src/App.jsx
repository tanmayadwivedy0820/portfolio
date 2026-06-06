import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About, Skills, Projects, Education, Contact, Footer } from "./components/Sections";
import { useTheme } from "./useTheme";

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <div className="grain" />
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
