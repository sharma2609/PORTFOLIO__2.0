import "./skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHtml5, FaPython, FaReact, FaNode, FaBootstrap, FaGithub, FaGitSquare } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMysql } from "react-icons/si";
import { BsFiletypeSql, BsFiletypeScss } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

const textVariants = {
  initial: {
    x: 0,
    opacity: 0.8
  },
  animate: {
    x: "-40%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 10,
    },
  },
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <div className='banner'>
      <div className='slider' style={{ '--quantity': 15 }}>
        <div className='item' style={{ '--position': 1 }}><FaHtml5 /></div>
        <div className='item' style={{ '--position': 2 }}><MdCss /></div>
        <div className='item' style={{ '--position': 3 }}><IoLogoJavascript /></div>
        <div className='item' style={{ '--position': 4 }}><FaPython /></div>
        <div className='item' style={{ '--position': 5 }}><FaReact /></div>
        <div className='item' style={{ '--position': 6 }}><FaNode /></div>
        <div className='item' style={{ '--position': 7 }}><SiExpress /></div>
        <div className='item' style={{ '--position': 8 }}><SiMysql /></div>
        <div className='item' style={{ '--position': 9 }}><TbBrandFramerMotion /></div>
        <div className='item' style={{ '--position': 10 }}><BsFiletypeScss /></div>
        <div className='item' style={{ '--position': 11 }}><BsFiletypeSql /></div>
        <div className='item' style={{ '--position': 12 }}><FaBootstrap /></div>
        <div className='item' style={{ '--position': 13 }}><FaGithub /></div>
        <div className='item' style={{ '--position': 14 }}><RiTailwindCssFill /></div>
        <div className='item' style={{ '--position': 15 }}><FaGitSquare /></div>
      </div>
      <motion.div className="text"
          // ref={ref}
          variants={textVariants}
          initial="initial"
          animate={"animate"}>
        <motion.h1 className="text" variants={textVariants}>Technical Proficiencies</motion.h1>
      </motion.div>
    </div>
  );
}

export default Skills;
