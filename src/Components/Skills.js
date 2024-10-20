import React from "react";
import '../CSS/Skills.css'
import ricon from "../Images/reacticon.png"
import njs from "../Images/njs.png"
import java from "../Images/java.png"
import git from "../Images/git.png"
import cplus from "../Images/cplus.png"
import  vscode from "../Images/vscode.png"
import { motion } from "framer-motion";
function Skills(params) {
    return(
        <>
          <motion.div
           initial={{ scale: 0 }}
           animate={{ rotate: 360, scale: 1 }}
           transition={{
             type: "spring",
             stiffness: 260,
             damping: 20
           }}
          className="skills_container">
            <motion.div className="skill_child">
                <img  src={ricon}/>
               <center> <b>React JS</b></center>
            </motion.div>
            <motion.div className="skill_child">
                <img  src={njs}/>
                <center> <b>Node JS</b></center>
            </motion.div><motion.div className="skill_child skill_child3">
                <img  src={java}/>
                <center> <b>Java</b></center>
            </motion.div><motion.div className="skill_child">
                <img  src={vscode}/>
                <center> <b>VS Code</b></center>
            </motion.div><motion.div className="skill_child">
                <img  src={git}/>
                <center> <b>Git Hub</b></center>
            </motion.div><motion.div className="skill_child">
                <img  src={cplus}/>
                <center> <b>C++ Programming</b></center>
            </motion.div>
          </motion.div>
        </>
    )
}
export default Skills;