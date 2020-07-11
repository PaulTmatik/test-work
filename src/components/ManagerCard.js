import React, { Component } from "react";
import "../styles/ManagerCard.css";

import emailType from "../images/email-icon.svg";
import watsAppType from "../images/whats-app.svg";

const drawContactItem = (value, type) => {
  let icon = null;
  switch (type) {
    case 0:
      icon = (
        <img
          src={watsAppType}
          alt="Вацап"
          className="manager_card__contact_type"
          aria-hidden="true"
        />
      );
      break;
    case 1:
      icon = (
        <img
          src={emailType}
          alt="Емаил"
          className="manager_card__contact_type"
          aria-hidden="true"
        />
      );
      break;
    default:
      icon = null;
  }

  return (
    <li key={value} className="manager_card__contact_item">
      {icon} {value}
    </li>
  );
};

class ManagerCard extends Component {
  render() {
    const { imageSrc, name, position, contacts } = this.props;
    return (
      <div className="manager_card">
        <div className="manager_card__person">
          <div className="manager_card__avatar">
            <img
              src={imageSrc}
              alt="Изображение пользователя"
              className="manager_card__image"
              aria-hidden="true"
            />
          </div>
          <div className="manager_card__info">
            <div className="manager_card__name">{name}</div>
            <div className="manager_card__position">{position}</div>
            <ul className="manager_card__contacts">
              {contacts.map((item) => drawContactItem(item.value, item.type))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerCard;
