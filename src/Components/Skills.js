import React from "react";
import '../CSS/Skills.css';
import ricon from "../Images/reacticon.png";
import njs from "../Images/njs.png";
import java from "../Images/java.png";
import git from "../Images/git.png";
import cplus from "../Images/cplus.png";
import vscode from "../Images/vscode.png";
import { motion } from "framer-motion";

function Skills() {
    return (
        <>
          <motion.div         
            
            viewport={{ once: true }} 
            className="skills_container"
          >
            <motion.div className="skill_child"
            initial={{z:200,x:-100, scale: 0, opacity: 0 }}
            whileInView={{x:0,z:0, opacity: 1, scale: 1, }}
            transition={{
              type: "tween",
              stiffness: 260,
              damping: 20,
              duration:1, 
               ease: "easeOut"
            }}
whileTap={{ scale: 0.2 }}
            
            
            >
                
                <img src={ricon} alt="React JS" />
               <center><b>React JS</b></center>
            </motion.div>

            <motion.div className="skill_child"
            initial={{z:200,x:-100, scale: 0, opacity: 0 }}
            whileInView={{x:0,z:0, opacity: 1, scale: 1, }}
            transition={{
              type: "tween",
              stiffness: 260,
              damping: 20,
              duration:1, 
               ease: "easeOut"
            }}
            whileTap={{ scale: 0.2 }}
            >
                <img src={njs} alt="Node JS" />
                <center><b>Node JS</b></center>
            </motion.div>

            <motion.div className="skill_child"
            initial={{z:200,x:-100, scale: 0, opacity: 0 }}
            whileInView={{x:0,z:0, opacity: 1, scale: 1, }}
            transition={{
              type: "tween",
              stiffness: 260,
              damping: 20,
              duration:1, 
               ease: "easeOut"
            }}
            whileTap={{ scale: 0.2 }}
            >
                <img src={java} alt="Java" />
                <center><b>Java</b></center>
            </motion.div>

            <motion.div className="skill_child"
            initial={{z:200,x:-100, scale: 0, opacity: 0 }}
            whileInView={{x:0,z:0, opacity: 1, scale: 1, }}
            transition={{
              type: "tween",
              stiffness: 260,
              damping: 20,
              duration:1, 
               ease: "easeOut"
            }}
            whileTap={{ scale: 0.2 }}
            >
                <img src={vscode} alt="VS Code" />
                <center><b>VS Code</b></center>
            </motion.div>

            <motion.div className="skill_child"
            initial={{z:200,x:-100, scale: 0, opacity: 0 }}
            whileInView={{x:0,z:0, opacity: 1, scale: 1, }}
            transition={{
              type: "tween",
              stiffness: 260,
              damping: 20,
              duration:1, 
               ease: "easeOut"
            }}
            whileTap={{ scale: 0.2 }}
            >
                <img src={git} alt="Git" />
                <center><b>Git Hub</b></center>
            </motion.div>

            <motion.div className="skill_child"
            initial={{z:200,x:-100, scale: 0, opacity: 0 }}
            whileInView={{x:0,z:0, opacity: 1, scale: 1, }}
            transition={{
              type: "tween",
              stiffness: 260,
              damping: 20,
              duration:1, 
               ease: "easeOut"
            }}
            whileTap={{ scale: 0.2 }}
            >
                <img src={cplus} alt="C++ Programming" />
                <center><b>C++ Programming</b></center>
            </motion.div>
          </motion.div>
        </>
    );
}

export default Skills;
