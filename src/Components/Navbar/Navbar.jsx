import Sidebar from "../Sidebar/SIdebar"
import "./navbar.scss"
import { motion } from "framer-motion"

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
                <a href="https://bento.me/sharma2609p" target="_blank"><img src="/public/bento.png" alt=""/></a>
                <a href="https://www.instagram.com/sharma2609p/" target="_blank"><img src="/instagram.png" alt=""/></a>
                <a href="https://github.com/sharma2609" target="_blank"><img src="/public/github.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/priyanshu-sharma-361150238/" target="_blank"><img src="/public/linkedin.webp" alt=""/></a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar