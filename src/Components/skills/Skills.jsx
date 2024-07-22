import "./skills.scss";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitSquare } from "react-icons/fa";



const Skills = () => {
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
    </div>
  );
}

export default Skills;
