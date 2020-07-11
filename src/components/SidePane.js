import React, { Component } from "react";

import Logo from "./Logo";
import ManagerCard from "./ManagerCard";

import phoneIcon from "../images/phone-icon.svg";
import emailIcon from "../images/email-icon.svg";

import "../styles/SidePane.css";
import Navigation from "./Navigation";

class SidePane extends Component {
  constructor(props) {
    super(props);

    this.onCloseHandler = this.onCloseHandler.bind(this);
  }
  render() {
    const { isOpen } = this.props;
    return (
      <aside
        className={["side_pane", isOpen ? "side_pane--open" : null].join(" ")}
      >
        <div className="side_pane__logo">
          <Logo />
          <button
            className="side_pane__close_button"
            onClick={(e) => this.onCloseHandler(e)}
          >
            ←
          </button>
        </div>
        <div className="side_pane__navigation">
          <Navigation />
        </div>
        <footer className="side_pane__footer">
          <ManagerCard
            imageSrc="https://randomuser.me/api/portraits/men/1.jpg"
            name="Азамат Хугаев"
            position="Ваш персональный менеджер"
            contacts={[
              { type: 0, value: "+7 (968) 865-65-26" },
              { type: 1, value: "ak@jetlend.ru" },
            ]}
          />
          <div className="side_pane__contacts">
            <a href="tel:+78002229332" className="side_pane__phone">
              <img
                src={phoneIcon}
                className="side_pane__icon"
                alt="Телефон"
                aria-hidden="true"
              />
              <span className="side_pane__text">8 (800) 222 93-32</span>
            </a>
            <a href="mailto:support@jetlend.ru" className="side_pane__email">
              <img
                src={emailIcon}
                className="side_pane__icon"
                alt="Телефон"
                aria-hidden="true"
              />
              <span className="side_pane__text">support@jetlend.ru</span>
            </a>
          </div>
        </footer>
      </aside>
    );
  }

  onCloseHandler(e) {
    const { onClose } = this.props;
    if (onClose) onClose(e);
  }
}

export default SidePane;
