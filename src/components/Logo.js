import React from "react";
import logoImage from "../images/jet-lend-logo.png";
import logoText from "../images/JetLend.svg";
import "../styles/Logo.css";

export default function () {
  return (
    <div className="site_logo">
      <img
        src={logoImage}
        alt="Ракета"
        className="site_logo__illustration"
        aria-hidden="true"
      />
      <img
        src={logoText}
        alt="JetLend"
        className="site_logo__text"
        aria-hidden="true"
      />
    </div>
  );
}
