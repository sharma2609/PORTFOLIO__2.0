import Sidebar from "../Sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
import { SiBento } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
          <Sidebar/>
          <motion.span 
          initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
          transition={{duration:0.5}}>PRIYANSHU SHARMA</motion.span>
            <motion.div className="social"
            initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            >
                <a href="https://bento.me/sharma2609p" target="_blank"><SiBento /></a>
                <a href="https://www.instagram.com/sharma2609p/" target="_blank"><FaInstagram /></a>
                <a href="https://github.com/sharma2609" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/priyanshu-sharma-361150238/" target="_blank"><FaLinkedin /></a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar