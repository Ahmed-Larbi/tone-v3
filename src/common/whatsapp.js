// src/components/WhatsappButton.js
import React from "react";
import "./Whatsapp.css"; // Import CSS for styling the button

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+971561234542"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsappButton;
