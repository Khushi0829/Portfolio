import React, { useState } from 'react'
import ContactImg from '../assets/images/ChatGPT Image Apr 7, 2026, 10_39_21 AM.png'
import ProjectCard from './ProjectCard'
import './Projects.css'

import projects from '../data/projectsData'
import CustomButton from './CustomButton'

const Projects = () => {
        const [formData, setFormData] = useState({
            name: "",
            email:"",
            message:""
        });

       const handleChange = (e) =>{
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const sendToWhatsapp = (e) => {
            e.preventDefault();

            const phoneNumber = "918233310560";

            const text = `New Contact Message
            Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}
            `;

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
            window.open(whatsappURL, "_blank");
        };
  return (

    <div className="container-fluid mt-4 p-0 " id="projects">
        <div className="row g-4 d-flex">
            <div className="col-lg-7 col-sm-12 col-12">
                <div className="card-section">
                    <h3 className='text-center'>My <span className="section-title">Projects</span></h3>
                    <div className="row g-4">

                        {projects.map((project)=> (
                            <div className="col-lg-4 col-sm-6 col-12" key={project.id}>
                                <ProjectCard project={project}/>
                            </div>
                        ))}
                        
                    </div>

                </div>
                
            </div>

            <div className="col-lg-5 col-sm-12 col-12">
                <div className="card-section">
                    <h4 className="section-heading text-center">
                      Get In Touch
                    </h4>

                    <div className="row g-4">
                        <div className="col-lg-5 col-sm-5 col-12">
                            <div className="contact-img">
                                <img src={ContactImg} alt="" className='img-fluid' />
                            </div>
                        </div>

                        <div className="col-lg-7 col-sm-7 col-12">
                            <form onSubmit={sendToWhatsapp}>

                                <input
                                  type="text"
                                  placeholder="First Name"
                                  className="form-control mb-1"
                                  onChange={handleChange} 
                                  required
                                />

                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="form-control mb-1"
                                  onChange={handleChange} 
                                  required
                                />

                                <textarea
                                  rows="2"
                                  placeholder="Message"
                                  className="form-control mb-1"
                                  onChange={handleChange} 
                                  required
                                ></textarea>

                                <CustomButton text="Send Message" className=" w-100" type="submit"/>

                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects