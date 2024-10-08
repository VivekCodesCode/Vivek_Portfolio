import React from "react";
import '../CSS/Skills.css'
import ricon from "../Images/reacticon.png"
import njs from "../Images/njs.png"
import java from "../Images/java.png"
import git from "../Images/git.png"
import cplus from "../Images/cplus.png"
import  vscode from "../Images/vscode.png"
function Skills(params) {
    return(
        <>
          <div className="skills_container">
            <div className="skill_child">
                <img  src={ricon}/>
               <center> <b>React JS</b></center>
            </div>
            <div className="skill_child">
                <img  src={njs}/>
                <center> <b>Node JS</b></center>
            </div><div className="skill_child skill_child3">
                <img  src={java}/>
                <center> <b>Java</b></center>
            </div><div className="skill_child">
                <img  src={vscode}/>
                <center> <b>VS Code</b></center>
            </div><div className="skill_child">
                <img  src={git}/>
                <center> <b>Git Hub</b></center>
            </div><div className="skill_child">
                <img  src={cplus}/>
                <center> <b>C++ Programming</b></center>
            </div>
          </div>
        </>
    )
}
export default Skills;