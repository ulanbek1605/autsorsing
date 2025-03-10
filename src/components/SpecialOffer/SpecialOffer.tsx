import React from 'react';
import './specialOffer.css';

interface Offer {
  title: string;
  oldPrice: string;
  newPrice: string;
  savings: string;
}

const SpecialOffer = () => {
  const offers: Offer[] = [
    {
      title: 'ПРИ ОПЛАТЕ ЗА 3 МЕСЯЦА',
      oldPrice: '7900',
      newPrice: '5900 сом',
      savings: 'ЭКОНОМИЯ - 6000 СОМ',
    },
    {
      title: 'ПРИ ОПЛАТЕ ЗА 6 МЕСЯЦЕВ',
      oldPrice: '7900',
      newPrice: '3900 сом',
      savings: 'ЭКОНОМИЯ - 24 000 СОМ',
    },
  ];

  return (
    <div className="special-offer-container">
      <h1 className="special-offer-header">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ ДЛЯ  &quot;НУЛЕВЫХ&quot;</h1>
      <div className="offer-cards">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <h2 className="offer-title">{offer.title}</h2>
            <p className="offer-price">
              <span className="old-price">{offer.oldPrice}</span>
              <span className="new-price">{offer.newPrice}</span>
            </p>
            <p className="offer-example">{offer.savings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;