import React from 'react';
import './tradeTariffs.css'; 

const TradeTariffs = () => {
  return (
    <div className="trade-tariffs-container">
      <h1 className="trade-tariffs-header">ДЛЯ ТОРГОВЛИ</h1>
      <div className="tariffs-grid">
        <div className="tariff-card">
          <h2 className="tariff-title">ТАРИФ  &quot;НУЛЕВОЙ&quot;</h2>
          <ul className="tariff-features">
            <li>7900 сом</li>
            <li>нет деятельности</li>
            <li>нет сотрудников</li>
            <li>1 час консультаций</li>
            <li>сдача отчетности</li>
            <li>прохождение проверок</li>
          </ul>
        </div>
        <div className="tariff-card">
          <h2 className="tariff-title">ТАРИФ  &quot;БАЗОВЫЙ &quot;</h2>
          <ul className="tariff-features">
            <li>22 900 сом</li>
            <li>до 5 сделок в месяц</li>
            <li>до 5 сотрудников</li>
            <li>5 часов консультаций</li>
            <li>сдача отчетности</li>
            <li>прохождение проверок</li>
            <li>+ расчет налогов и Соцфонда</li>
            <li>подготовка счетов</li>
          </ul>
        </div>
        <div className="tariff-card">
          <h2 className="tariff-title">ТАРИФ  &quot;ПРЕМИУМ &quot;</h2>
          <ul className="tariff-features">
            <li>44 900 сом</li>
            <li>до 15 сделок в месяц</li>
            <li>до 15 сотрудников</li>
            <li>неограниченные консультации</li>
            <li>сдача отчетности</li>
            <li>прохождение проверок</li>
            <li>расчет налогов и Соцфонда</li>
            <li>подготовка счетов</li>
            <li>+ ведение Интернет-банкинга</li>
            <li>получение справок</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TradeTariffs;