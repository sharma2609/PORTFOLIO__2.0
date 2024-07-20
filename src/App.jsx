import "./app.scss"
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
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
    <section>Projects1</section>
    <section>Projects2</section>
    <section>Projects3</section>
    <section id="Contacts">Contact</section>
  </div>;
};

export default App;
