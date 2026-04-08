import React, { useState } from 'react'
import CustomButton from './CustomButton';

const ProjectCard = ({ project }) => {
    const [showPreview, setShowPreview] = useState(false);

    const handleClick = () => {
        if (project.live) {
            window.open(project.link, "_blank");
        } else {
            setShowPreview(true);
        }
    };
  return (
    <>
    <div className="project-card">
        {/* image Preview */}
        <div className="project-preview">
            <img src={project.image} alt={project.title} />
        </div>

        <p>{project.title}</p>

        <CustomButton text= {project.live ? "Visit" : "View"}
        onClick={handleClick}  />
    </div>

    {/* Pop Up Template */}
    {showPreview && (
        <div className="preview-modal">
            <div className="modal-content">
                <span className="close-btn" onClick={() => setShowPreview(false)}>
                    ✕
                </span>

                <div className="template-scroll">
                    <img src={project.template} alt="template" />
                </div>
            </div>
        </div>
    )}
    </>
  )
}

export default ProjectCard