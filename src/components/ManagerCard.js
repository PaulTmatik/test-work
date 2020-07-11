import React, { Component } from "react";
import "../styles/ManagerCard.css";

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
              {contacts.map((item) => (
                <li key={item.value}>{item.value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerCard;
