import React from "react";
import Topbar from "./components/Topbar";
import DocumentsLoader from "./components/DocumentsLoader";
import ExtractLoader from "./components/ExtractLoader";
import Calendar from "./components/Calendar";

import { DocumentsStorage } from "./storage";
import { ExtractStorage } from "./storage";

import "./styles/Page.css";

function App() {
  return (
    <>
      <Topbar companyName="ООО «Ромашка обыкновенная»" tin="1234567890" />
      <main className="page__main">
        <h1 className="page__h1">Загрузите документацию</h1>
        <section className="page__load_section">
          <h2 className="page__h2">
            Загрузите копию паспорта директора и учредителей компании: основной
            разворот и регистрация.
          </h2>
          <DocumentsLoader
            list={DocumentsStorage.map((item) => ({
              key: item.id,
              data: item,
            }))}
          />
        </section>

        <section className="page__load_section">
          <h2 className="page__h2">
            Загрузите банковские выписки за последние 24 месяца в формате .txt
            (1C) по следующим счетам:
          </h2>
          <ExtractLoader
            period={{ start: "06.06.2017", end: "06.06.2020" }}
            list={ExtractStorage.map((item) => ({ key: item.id, data: item }))}
          />
        </section>

        <section className="page__calendar_section">
          <Calendar />
          <button className="button button--blue">Отправить на оценку</button>
        </section>
      </main>
    </>
  );
}

export default App;
