import React, { Component } from "react";
import { cutString } from "../helpers";

import blackClipIcon from "../images/black-clip-icon.svg";

import "../styles/DocumentsLoader.css";
import PickupButton from "./PickupButton";

class DocumentsLoader extends Component {
  render() {
    const { list } = this.props;
    return (
      <ul className="documents_loader">
        {list.map((item) => this.drawDocumentItem(item))}
      </ul>
    );
  }

  drawDocumentItem(item) {
    const { key, data } = item;
    return (
      <li key={key} className="documents_loader__item">
        <div className="documents_loader__owner">
          {this.wrapOwnerNameWithLink(data.owner)}
        </div>
        <div className="documents_loader__buttons">
          {this.switchBetweenButtonAndLink("Разворот", data.copy.spread)}
          {this.switchBetweenButtonAndLink("Регистрация", data.copy.register)}
        </div>
      </li>
    );
  }

  wrapOwnerNameWithLink(owner) {
    const { name, link } = owner;
    if (Boolean(link) === false) return name;
    return (
      <a href={link} className="documents_loader__owner_link">
        {name}
      </a>
    );
  }

  switchBetweenButtonAndLink(buttonName, copyData) {
    if (Boolean(copyData) === false)
      return <PickupButton>{buttonName}</PickupButton>;
    const { filename, link } = copyData;
    return (
      <div className="documents_loader__pickup">
        <img
          src={blackClipIcon}
          alt="Скрепка"
          className="documents_loader__icon"
          aria-hidden="true"
        />
        <a href={link} title={filename} className="documents_loader__link">
          {cutString(filename, 18)}
        </a>
      </div>
    );
  }
}

export default DocumentsLoader;
