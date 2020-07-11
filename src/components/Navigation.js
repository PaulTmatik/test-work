import React, { Component } from "react";

import "../styles/Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul className="navigation__links">
          <li className="navigation__item navigation--complite">
            <a className="navigation__link" href="#">Идентификация</a>
          </li>
          <li className="navigation__item navigation--current">
            <a className="navigation__link" href="#">Документация</a>
          </li>
          <li className="navigation__item navigation--disabled">
            <span className="navigation__link">Решение</span>
          </li>
          <li className="navigation__item navigation--disabled">
            <span className="navigation__link">Верификация</span>
          </li>
          <li className="navigation__item navigation--disabled">
            <span className="navigation__link">Перевод средств</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
