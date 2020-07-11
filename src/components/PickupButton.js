import React from "react";
import whiteClipIcon from "../images/white-clip-icon.svg";

export default function PickupButton({ children }) {
  return (
    <label className="button button--blue">
      <img
        src={whiteClipIcon}
        className="button__icon"
        alt="Скрепка"
        aria-hidden="true"
      />
      <span className="button__text">{children}</span>
      <input type="file" className="button--hidden_element" />
    </label>
  );
}
