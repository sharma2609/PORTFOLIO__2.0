import "./app.scss"
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Projects">Parallax</section>
    <section>Projects1</section>
    <section>Projects2</section>
    <section>Projects3</section>
    <section id="Contacts">Contact</section>
  </div>;
};

export default App;
