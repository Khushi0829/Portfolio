import React, { useState } from 'react'
// import ContactImg from '../assets/images/ChatGPT Image Apr 7, 2026, 10_39_21 AM.png'
import ProjectCard from './ProjectCard'
import './Projects.css'

import projects from '../data/projectsData'
import CustomButton from './CustomButton'
import toast, { Toaster } from 'react-hot-toast';




const Projects = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Sending message...");

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", "24c81572-12e2-4a3d-9abb-c3b6cb09fe9b");
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message sent successfully!", { id: toastId });
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error(data.message || "Failed to send message.", { id: toastId });
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred. Please try again later.", { id: toastId });
        }
    };

    return (

        <div className="container-fluid mt-4 p-0 " id="projects">
            <div className="row g-4 d-flex">
                <div className="col-lg-7 col-sm-12 col-12">
                    <div className="card-section">
                        <h3 className='text-center'>My <span className="section-title">Projects</span></h3>
                        <div className="projects-scroll-container d-flex flex-nowrap overflow-auto pb-3">
                            {projects.map((project) => (
                                <div className="project-item flex-shrink-0" key={project.id} style={{ width: '280px', marginRight: '15px' }}>
                                    <ProjectCard project={project} />
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
                                    <img src="https://res.cloudinary.com/dctxgziod/image/upload/v1778743669/ChatGPT_Image_Apr_7_2026_10_39_21_AM_p5xmps.png" alt="" className='img-fluid' />
                                </div>
                            </div>

                            <div className="col-lg-7 col-sm-7 col-12">
                                <Toaster />
                                <form onSubmit={handleSubmit} id="enq-form">


                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="form-control mb-1"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control mb-1"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                    <textarea
                                        rows="2"
                                        name="message"
                                        placeholder="Message"
                                        className="form-control mb-1"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>

                                    <CustomButton text="Send Message" className=" w-100" type="submit" />

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;