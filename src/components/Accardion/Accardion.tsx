'use client';
import React, { useState } from 'react';
import './accardion.css';

interface AccordionItem {
  title: string;
  content: string;
}

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items: AccordionItem[] = [
    {
      title: "ВЫ НЕ ЗАВИСИТЕ ОТ ОДНОГО ЧЕЛОВЕКА",
      content: "Который может заболеть, уйти в отпуск или просто не брать трубку. Мы - команда, и всегда можем подменить друг друга."
    },
    {
      title: "МЫ НЕ БРОСАЕМ ПРИ ПРОВЕРКАХ",
      content: "В случае налоговой проверки мы будем вести ее от начала до конца. И заранее подскажем, что вам нужно будет привести в порядок."
    },
    {
      title: "МЫ СНИМАЕМ С ВАС КАДРОВЫЙ ВОПРОС",
      content: "Даже если ваш бухгалтер уволится, то вам не придется в панике искать нового и обеспечивать передачу дел. Всем этим займемся мы."
    },
    {
      title: "ВЫ ЭКОНОМИТЕ НА НАЛОГАХ И СОЦОТЧИСЛЕНИЯХ",
      content: "Мы официально выдаем документы на оплату наших услуг - а значит, сможем вам снизить налог на прибыль. И за нас не нужно платить отчисления в Соцфонд как за штатного бухгалтера."
    },
    {
      title: "ВАШИ ДОКУМЕНТЫ И БУХГАЛТЕРИЯ НАДЕЖНО ЗАЩИЩЕНЫ",
      content: "Мы используем облачную 1С:Бухгалтерию. А документы наших клиентов застрахованы на 1 млн. сом. Это означает, что даже если ваш офис сгорит, ваша бухгалтерия не пострадает."
    }
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;