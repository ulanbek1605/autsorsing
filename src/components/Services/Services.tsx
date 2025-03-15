import React from 'react';
import './services.css'
const Services: React.FC = () => {
  return (
    <div className="services-container">
      <div className="service-card">
        <h2 className="service-title">Бухгалтерское сопровождение</h2>
        <p className="service-description">Полное ведение бухгалтерского учета на аутсорсинге для ОсОО</p>
      </div>
      <div className="service-card">
        <h2 className="service-title">Оптимизация налогооблажения</h2>
        <p className="service-description">Услуги по оптимизации налогов в рамках бухгалтерского сопровождения ОсОО</p>
      </div>
      <div className="service-card">
        <h2 className="service-title">Восстановление бухгалтерского учёта</h2>
        <p className="service-description">Восстановление бух.учета для ОсОО за предыдущие периоды деятельности</p>
      </div>
      <div className="service-card">
        <h2 className="service-title">Кадровое делопроизводство</h2>
        <p className="service-description">Кадровый учет и отчетность для ОсОО</p>
      </div>
      <div className="service-card">
        <h2 className="service-title">Регистрация фирм</h2>
        <p className="service-description">Консультирование, подготовка документов, электронная регистрация ОсОО</p>
      </div>
    </div>
  );
};

export default Services;