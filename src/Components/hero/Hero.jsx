import "./hero.scss";
import { motion } from "framer-motion";
import scrollIconImg from "..//..//assets//scroll.png";
import CV from "..//..//assets//CV.pdf";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
    opacity: 0.8,
  },
  animate: {
    x: "-450%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const verticalSliderVariants = {
  initial: {
    y: 0,
    opacity: 0.4,
  },
  animate: {
    y: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>PRIYANSHU SHARMA</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and Python Programmer
          </motion.h1>
          <div className="buttons">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href={CV} download>
                    Resume
                </a>
              </motion.button>
          </div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scrollIconImg}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front End + Back End + Python
      </motion.div>
      <motion.div
        className="verticalContainer"
        variants={verticalSliderVariants}
        initial="initial"
        animate="animate"
      >
        <p>WELCOME</p>
      </motion.div>
    </div>
  );
};

export default Hero;
