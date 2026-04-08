import React from 'react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
        {/* GitHub */}
      <a
        href="https://github.com/Khushi0829"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

       {/* Email */}
      <a href="mailto:khushibhatnagar29@gmail.com">
        <MdEmail />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918233310560"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

    </div>
  )
}

export default SocialIcons;