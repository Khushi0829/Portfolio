import React from 'react'
// import AboutImg from "../assets/images/ChatGPT Image Apr 4, 2026, 04_40_39 PM.png"

import './AboutSkills.css'


import {
 FaReact,
 FaHtml5,
 FaCss3Alt,
 FaJs,
 FaBootstrap,
 FaPhp
} from "react-icons/fa";

import { SiTailwindcss, SiMysql } from "react-icons/si";
import Counter from './Counter';

const skills = [
 {name:"React", icon:<FaReact />, level:"75%", color: "#61DBFB"},
 {name:"HTML5", icon:<FaHtml5 />, level:"80%", color: "#E34F26"},
 {name:"CSS3", icon:<FaCss3Alt />, level:"70%", color: "#264DE4"},
 {name:"JavaScript", icon:<FaJs />, level:"70%", color: "#F7DF1E"},
 {name:"Bootstrap", icon:<FaBootstrap />, level:"70%", color: "#7952B3"},
 {name:"Tailwind", icon:<SiTailwindcss />, level:"60%",color: "#38BDF8"},
 {name:"PHP", icon:<FaPhp />, level:"60%", color: "#777BB4"},
 {name:"MySQL", icon:<SiMysql />, level:"70%", color: "#00758F"},
];

const AboutSkills = () => {
  return (
    <div className="container-fluid mt-4 p-0 " id="about">
        <div className="row g-4 d-flex">
            <div className="col-lg-5 col-sm-12 col-12">
                
                <div className="card-section">
                    <div className="row align-items-center ">
                        <div className="col-lg-5 col-sm-5 col-12 ">
                            <img src="https://res.cloudinary.com/dctxgziod/image/upload/v1778743797/ChatGPT_Image_Apr_4_2026_04_40_39_PM_x6v0c9.png" alt="" className='img-fluid about-img' />
                        </div>

                        <div className="col-lg-7 col-sm-7 col-12 ">

                             <h3 className="section-title">About Me</h3>

                             <p className="text-muted text-justify">
                                I am a passionate web developer skilled in modern frontend and backend technologies. I enjoy creating responsive, user-friendly, and performance-optimized applications.
                             </p>

                            
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-6">
                                        <Counter end={1} title="Years Experience" />
                                        </div>
                                        
                                        <div className="col-lg-6 col-sm-6 col-6">
                                            <Counter end={5} title="Projects" />
                                        </div>

                                </div>
                             

                        </div>
                    </div>
                </div>
                
            </div>

            <div className="col-lg-7 col-sm-12 col-12">
                <div className="skills-container">
                     <h3 className="skills-title text-center">
                        My Skills
                    </h3>
                    <p className="skills-subtitle">
                            Technologies I work with to create amazing web experiences
                    </p>

                    <div className="row g-4">

                        {skills.map((skill,index) =>(
                            <div className="col-lg-3 col-sm-6 mb-4" key={index}> 

                                <div className="skill-card">
                                    {/* ICON + TITLE */}
                                    <div className="mb-2">
                        
                                        <div className="skill-header">
                                            <div className="skill-icon" style={{ backgroundColor:`${skill.color}20`, color:skill.color }}>
                                                {skill.icon}
                                            </div>
                        
                                            <h6>{skill.name}</h6>
                                        </div>
                        
                                        <div className="progress">
                                            <div className="progress-bar" style={{backgroundColor:skill.color, width: `${skill.level}`}}>{skill.level}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSkills