import React from 'react';
import "./Navbar.css";
import SocialIcons from './SocialIcons';
import HeroImg from '../assets/images/ChatGPT Image Apr 3, 2026, 06_52_42 PM.png'

import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomButton from './CustomButton';

const downloadCV = () => {

  const fileUrl = "/Khushi-Resume.pdf";

  window.open(fileUrl, "_blank");

  // 2️⃣ Download file
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Khushi-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


const Hero = () => {

  const customFont=()=>{
    return{
      fontFamily:"poppins"
    }
  }

//   const codeIcon {
//     return{
//       marginRight: "10px",
//       color: "#ff7a18"
//     }
  
// }
  return (
          <div id="home">
        <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-6 col-sm-7 col-12 Social-links">

                {/* Social Icons */}
                <div className="social-icons">
                   <SocialIcons />
                </div>

                <h1 style={customFont()}>
                  Hi, I'm Khushii Bhatnagar
                </h1>
                <div className="fw-semi fs-4 bold ">
                  <p>
                    <ul className='list-unstyled' style={customFont()}>
                      <li><i className="fa-solid fa-code"></i> Turning ideas into interactive digital experiences.</li>
                      <li><i className="fa-solid fa-code"></i> Design. Code. Create.</li>
                      <li><i className="fa-solid fa-code"></i> Always learning, always building.</li>
                    </ul>
                  </p>

                  <CustomButton
                  text = "Download CV "
                  onClick={downloadCV}
                  />
                 
                </div>

            </div>

            <div className="col-lg-6 col-sm-5 col-12">
                {/* RIGHT IMAGE */}
                <div className="right-img">
                  <img src={HeroImg} alt="hero" className="hero-img text-center img-fluid" />
                </div>
                
            </div>

        </div>
      </div>
  )
}

export default Hero;