import React, { Component, Fragment } from "react";

import "../styles/Calendar.css";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    const currentDate = new Date();

    this.state = {
      currentDate,
      periods: this.generatePeriod(currentDate.getFullYear(), 3),
    };

    this.drawElements = this.drawElements.bind(this);
  }

  generatePeriod(currentYear, limit) {
    const out = [];
    let newYear = currentYear;
    while (newYear > currentYear - limit) out.push(newYear--);
    return out;
  }

  render() {
    const { periods } = this.state;
    return (
      <dl className="calendar">
        {periods.map((year) => this.drawElements(year))}
      </dl>
    );
  }

  drawElements(year) {
    const { currentDate } = this.state;
    const monthToDisplay =
      year === currentDate.getFullYear()
        ? this.months.slice(0, currentDate.getMonth())
        : this.months;

    return (
      <Fragment key={year}>
        <dt className="calendar__year">{year}</dt>
        <dd className="calendar__months">
          {monthToDisplay.map((month, i) => this.drawMonth(month, year, i))}
        </dd>
      </Fragment>
    );
  }

  drawMonth(month, year, index) {
    return (
      <div className="calendar__month_item" key={`${index}${year}`}>
        <a className="calendar__link" href={`/${year}/${index}`}>{month}</a>
      </div>
    );
  }
}

export default Calendar;
