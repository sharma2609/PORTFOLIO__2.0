import "./app.scss"
import Contact from "./Components/contact/Contact";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
import Projects from "./Components/projects/Projects";
import Skills from "./Components/skills/Skills";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section><Skills/></section>
    <section id="Projects"><Parallax type="projects"/></section>
    <Projects/>
    <section id="Contacts"><Contact/></section>
  </div>;
};

export default App;
