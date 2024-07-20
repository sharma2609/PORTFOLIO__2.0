import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Truth_Finder",
    img: "/public/truth_finder.webp",
    desc: "We Developed a web application that determines the authenticity of the news input by the user. Implemented machine learning models that utilize TF-IDF vectorization, including Random Forest, Gradient Boosting, Decision Tree, and Logistic Regression. Tools/ Technologies: Python, HTML, tailwind CSS, JavaScript, React.js, Node.js, ML.",
    link: "https://github.com/sharma2609/Fake-news-detection-System"
  },
  {
    id: 2,
    title: "checkMate",
    img: "/public/checkMate.jpeg",
    desc: "To-Do List Web App This is a To-Do List web application. This web application allows users to create and manage their to-do lists. It provides a user-friendly interface with options to add new tasks, clear the entire list, and delete individual tasks. Tools/ Technologies: React.js, HTML, Bootstrap, and JavaScrip",
    link: "https://github.com/sharma2609/Check-Mate"
  },
  {
    id: 3,
    title: "Kamwalaa",
    img: "/public/kamWala.webp",
    desc: "This is a desktop voice assistant. It utilizes the 'pyttsx3' library for speech synthesis,' speech recognition' for user input, and various modules for tasks like web browsing, email sending, and music playback. Tools/ Technologies: Python",
    link: "https://github.com/sharma2609/DESKTOP-VOICE-ASSISTANT"
    },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;