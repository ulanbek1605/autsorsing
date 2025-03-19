import React from "react";
import './numbers.css'
export default function Numbers() {
	return (
	  <section className="numbers">
		<h2>МЫ В ЦИФРАХ</h2>
		<div className="numbers-container">
		  <div className="number-item">
			<strong>5 лет</strong>
			<p>на рынке бухгалтерских услуг Кыргызстана</p>
		  </div>
		  <div className="number-item">
			<strong>более 25.5 тыс.</strong>
			<p>успешно сданных отчетов в госорганы КР</p>
		  </div>
		  <div className="number-item">
			<strong>98 процентов</strong>
			<p>клиентов остаются у нас после первого месяца обслуживания</p>
		  </div>
		  <div className="number-item">
			<strong>от 10 до 30 лет</strong>
			<p>средний опыт наших сотрудников</p>
		  </div>
		</div>
	  </section>
	);
  }
  