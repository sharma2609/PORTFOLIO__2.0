import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = () => {
      setHovered(true);
    };

    const mouseLeave = () => {
      setHovered(false);
    };

    window.addEventListener("mousemove", mouseMove);
    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("mouseenter", mouseEnter);
      link.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.querySelectorAll("a").forEach(link => {
        link.removeEventListener("mouseenter", mouseEnter);
        link.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{
        x: position.x - 25,
        y: position.y - 25,
        width: hovered ? 50 : 20,
        height: hovered ? 50 : 20
      }}
    ></motion.div>
  );
};

export default Cursor;
