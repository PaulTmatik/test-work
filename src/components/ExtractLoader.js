import React, { Component } from "react";
import PickupButton from "./PickupButton";

import okStatusIcon from "../images/ok-status-icon.svg";
import warnStatusIcon from "../images/warn-status-icon.svg";

import "../styles/ExtractLoader.css";

class ExtractLoader extends Component {
  render() {
    const { period, list } = this.props;
    return (
      <div className="extract_loader">
        <p className="extract_loader__period">{`
          Загрузите выписки за период ${period.start} по ${period.end}. 
          Это позволит повысить вероятность одобрения.
        `}</p>
        <ul className="extract_loader__list">
          {list.map((item) => this.DrawExtractItem(item))}
        </ul>
      </div>
    );
  }

  DrawExtractItem(item) {
    const { key, data } = item;
    const status = data.status ? (
      <img src={okStatusIcon} alt="Одобрено" aria-hidden="true" />
    ) : (
      <img src={warnStatusIcon} alt="Не рассмотрено" aria-hidden="true" />
    );
    return (
      <li className="extract_loader__item" key={key}>
        <div className="extract_loader__name">{data.name}</div>
        <div className="extract_loader__status">{status}</div>
        <div className="extract_loader__button">
          <PickupButton>Прикрепить</PickupButton>
        </div>
      </li>
    );
  }
}

export default ExtractLoader;
