import Sidebar from "../Sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
import bentoIcon from "..//..//assets//bento.png"
import instaIcon from "..//..//assets//instagram.png"
import githubIcon from "..//..//assets//github.png"
import linkedinIcon from "..//../assets//linkedin.webp"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
          <Sidebar/>
          <motion.span 
          initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
          transition={{duration:0.5}}>Priyanshu Sharma</motion.span>
            <motion.div className="social"
            initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            >
                <a href="https://bento.me/sharma2609p" target="_blank"><img src={bentoIcon} alt=""/></a>
                <a href="https://www.instagram.com/sharma2609p/" target="_blank"><img src={instaIcon} alt=""/></a>
                <a href="https://github.com/sharma2609" target="_blank"><img src={githubIcon} alt=""/></a>
                <a href="https://www.linkedin.com/in/priyanshu-sharma-361150238/" target="_blank"><img src={linkedinIcon} alt=""/></a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar