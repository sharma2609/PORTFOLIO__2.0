import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaPython, FaReact, FaNode, FaBootstrap, FaGithub, FaGitSquare } from 'react-icons/fa';
import { MdCss } from 'react-icons/md';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiMysql } from 'react-icons/si';
import { BsFiletypeSql, BsFiletypeScss } from 'react-icons/bs';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import './skills.scss';
import { GoTools } from "react-icons/go";


const Skills = () => {
  const textRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let interval = null;

    const handleIntersection = (entries) => {
      const [entry] = entries;
      const target = textRef.current;

      if (entry.isIntersecting) {
        if (target) {
          let iteration = 0;

          // Reset text color to white before starting animation
          target.style.color = 'white';

          clearInterval(interval);

          interval = setInterval(() => {
            target.innerText = target.innerText
              .split("")
              .map((letter, index) => {
                if (index < iteration) {
                  return target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
              })
              .join("");

            if (iteration >= target.dataset.value.length) {
              clearInterval(interval);
              target.style.color = '#3dccc7'; // Change text color after effect ends
            }

            iteration += 1 / 3;
          }, 30);
        }
      } else {
        // Reset text color to white when the section is not visible
        if (target) {
          target.style.color = 'white';
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='banner'>
      <div className='slider' style={{ '--quantity': 15 }}>
      {/* <div className='slidertext'><GoTools /></div> */}
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

      <div className="text" data-value="TECHNICAL PROFICIENCIES" ref={textRef}>
        TECHNICAL PROFICIENCIES
      </div>
    </div>
  );
};

export default Skills;
