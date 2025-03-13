import React from 'react';
import './tariffs.css';

interface Tariff {
  name: string;
  price: string;
  features: string[];
}

const Tariffs = () => {
  const tariffs: Tariff[] = [
    {
      name: 'ТАРИФ "НУЛЕВОЙ"',
      price: '1000 сом',
      features: [
        'нет деятельности',
        'нет сотрудников',
        '1 час консультаций',
        'сдача отчетности',
        'прохождение проверок',
      ],
    },
    {
      name: 'ТАРИФ "БАЗОВЫЙ"',
      price: '5000 сом',
      features: [
        'до 5 сделок в месяц',
        'до 5 сотрудников',
        '5 часов консультаций',
        'сдача отчетности',
        'прохождение проверок',
        '+ расчет налогов и Соцфонда',
        'подготовка счетов',
      ],
    },
    {
      name: 'ТАРИФ "ПРЕМИУМ"',
      price: '15000 сом',
      features: [
        'до 15 сделок в месяц',
        'до 15 сотрудников',
        'неограниченные консультации',
        'сдача отчетности',
        'прохождение проверок',
        'расчет налогов и Соцфонда',
        'подготовка счетов',
        '+ ведение Интернет-банкинга',
        'получение справок',
      ],
    },
  ];

  return (
    <div className="tariffs-block">
      <h1 className="tariffs-title">ДЛЯ СФЕРЫ УСЛУГ</h1>
      <div className="table-block">
        {tariffs.map((tariff, index) => (
          <table key={index} className="tariffs-table">
            <thead>
              <tr>
                <th>{tariff.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{tariff.price}</td>
              </tr>
              {tariff.features.map((feature, idx) => (
                <tr key={idx}>
                  <td>{feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Tariffs;