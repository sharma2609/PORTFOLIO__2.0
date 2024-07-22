import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

// Import images
import mountainsImg from "../../assets/mountains.png";
import planetsImg from "../../assets/planets.png";
import sunImg from "../../assets/sun.png";
import starsImg from "../../assets/stars.png";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg, #202020, #000000)"
            : "linear-gradient(180deg, #404040, #000000)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains" style={{ backgroundImage: `url(${mountainsImg})` }}></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "skills" ? planetsImg : sunImg})`,
        }}
      ></motion.div>
      <motion.div 
        className="stars" 
        style={{ 
          x: yBg, 
          backgroundImage: `url(${starsImg})` 
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
