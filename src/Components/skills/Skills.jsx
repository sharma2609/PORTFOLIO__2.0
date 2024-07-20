import "./skills.scss";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="skill"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ 
        delay: 0.2,
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
  return (
    <>
      {/* <h2 className="title">Skills</h2> */}
      <div className="skills-container">
        <motion.div
          className="skill-main"
          whileHover={{ scale: 1.1 }}
        >
          Skills
        </motion.div>

        <Skill name="HTML" x="0vw" y="-7vw" />
        <Skill name="CSS" x="-12vw" y="5vw" />
        <Skill name="Javascript" x="12vw" y="5vw" />
        <Skill name="Python" x="-17vw" y="-8vw" />
        <Skill name="SQL" x="17vw" y="-8vw" />
        <Skill name="React.js" x="0vw" y="11vw" />
        <Skill name="Node.js" x="0vw" y="-15vw" />
        <Skill name="Express.js" x="-21vw" y="11vw" />
        <Skill name="BootstrapCSS" x="23vw" y="10vw" />
        <Skill name="TailwindCSS" x="0vw" y="19vw" />
        <Skill name="SCSS" x="-30vw" y="-12vw" />
        <Skill name="Git" x="35vw" y="-8vw" />
        <Skill name="Github" x="33vw" y="16vw" />
        <Skill name="OOPS" x="28vw" y="-18vw" />
        <Skill name="framer-motion" x="-39vw" y="2vw" />
      </div>
    </>
  );
};

export default Skills;
