import React, { useState, useEffect } from "react";
import "./skills.scss";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, key }) => {
  return (
    <motion.div
      key={key}
      className="skill"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{
        delay: 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const [positions, setPositions] = useState({
    HTML: { x: "0vw", y: "-7vw" },
    CSS: { x: "-12vw", y: "5vw" },
    Javascript: { x: "12vw", y: "5vw" },
    Python: { x: "-17vw", y: "-8vw" },
    SQL: { x: "17vw", y: "-8vw" },
    React: { x: "0vw", y: "11vw" },
    Node: { x: "0vw", y: "-15vw" },
    Express: { x: "-21vw", y: "11vw" },
    Bootstrap: { x: "23vw", y: "10vw" },
    Tailwind: { x: "0vw", y: "19vw" },
    SCSS: { x: "-30vw", y: "-12vw" },
    Git: { x: "35vw", y: "-8vw" },
    Github: { x: "33vw", y: "16vw" },
    OOPS: { x: "28vw", y: "-18vw" },
    FramerMotion: { x: "-39vw", y: "2vw" },
  });

  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".skills-container");
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setKey(prevKey => prevKey + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      if (window.innerWidth < 768) {
        setPositions({
          HTML: { x: "25vw", y: "-44vw" },
          CSS: { x: "-26vw", y: "-39vw" },
          Javascript: { x: "0vw", y: "-86vw" },
          Python: { x: "-10vw", y: "-62vw" },
          SQL: { x: "25vw", y: "38vw" },
          React: { x: "8vw", y: "16vw" },
          Node: { x: "-6vw", y: "-18vw" },
          Express: { x: "-14vw", y: "29vw" },
          Bootstrap: { x: "-12vw", y: "60vw" },
          Tailwind: { x: "-36vw", y: "46vw" },
          SCSS: { x: "-20vw", y: "-8vw" },
          Git: { x: "42vw", y: "0vw" },
          Github: { x: "-2vw", y: "-43vw" },
          OOPS: { x: "-42vw", y: "0vw" },
          FramerMotion: { x: "0vw", y: "86vw" },
        });
      } else {
        setPositions({
          HTML: { x: "0vw", y: "-7vw" },
          CSS: { x: "-12vw", y: "5vw" },
          Javascript: { x: "12vw", y: "5vw" },
          Python: { x: "-17vw", y: "-8vw" },
          SQL: { x: "17vw", y: "-8vw" },
          React: { x: "0vw", y: "11vw" },
          Node: { x: "0vw", y: "-15vw" },
          Express: { x: "-21vw", y: "11vw" },
          Bootstrap: { x: "23vw", y: "10vw" },
          Tailwind: { x: "0vw", y: "19vw" },
          SCSS: { x: "-30vw", y: "-12vw" },
          Git: { x: "35vw", y: "-8vw" },
          Github: { x: "33vw", y: "16vw" },
          OOPS: { x: "28vw", y: "-18vw" },
          FramerMotion: { x: "-39vw", y: "2vw" },
        });
      }
    };

    window.addEventListener("resize", updatePositions);
    updatePositions();

    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <div className="skills-container">
      <motion.div className="skill-main" whileHover={{ scale: 1.1 }}>
        Skills
      </motion.div>

      {Object.entries(positions).map(([name, { x, y }]) => (
        <Skill key={`${name}-${key}`} name={name} x={x} y={y} />
      ))}
    </div>
  );
};

export default Skills;
