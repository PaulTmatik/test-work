import React, { Component } from "react";
import "../styles/Topbar.css";
import helpIcon from "../images/help-icon.svg";
import gearIcon from "../images/gear-icon.svg";
import exitIcon from "../images/exit-icon.svg";
import burgerIcom from "../images/burger-menu.svg";

class Topbar extends Component {
  render() {
    const { companyName, tin, className } = this.props;
    return (
      <div className={["topbar", className].join(" ")}>
        <button className="topbar__button" title="Меню" aria-label="Меню">
          <img
            src={burgerIcom}
            className="topbar__button_icon"
            alt="Бургер-меню"
            aria-hidden="true"
          />
        </button>
        <div className="topbar__middle">
          <div className="topbar__summary">
            <div className="topbar__company_name">{companyName}</div>
            <div className="topbar__tin">ИНН {tin}</div>
          </div>
          <button
            className="topbar__button"
            aria-label="Настройки"
            title="Настройки"
          >
            <img
              src={gearIcon}
              className="topbar__button_icon"
              alt="Шестерёнка"
              aria-hidden="true"
            />
          </button>
        </div>
        <a
          href="/help"
          className="topbar__button"
          title="Справка"
          aria-label="Справка"
        >
          <img
            src={helpIcon}
            className="topbar__button_icon"
            alt="Вопросительный знак"
            aria-hidden="true"
          />
        </a>
        <button className="topbar__button" aria-labelledby="exit-btn-text">
          <img
            src={exitIcon}
            className="topbar__button_icon"
            alt="Обозначение выхода"
            aria-hidden="true"
          />
          <span className="topbar__button_text" id="exit-btn-text">
            Выход
          </span>
        </button>
      </div>
    );
  }
}

export default Topbar;
