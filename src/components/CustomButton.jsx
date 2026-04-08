import React from 'react'
import Button from "react-bootstrap/Button";
import './CustomButton.css'

const CustomButton = ({text, variant, onClick, href, download, type="button"}) => {
  return (
    <Button 
    variant = {variant}
    onClick={onClick}
    href={href}
    download={download}
    type={type}
    className="custom-btn"
    style={{
        borderRadius: "10px",
        padding: "6px 16px",
        fontWeight:"500",
        cursor:"pointer",
        border:"none",
    }}>
        {text}
    </Button>
  );
};

export default CustomButton;