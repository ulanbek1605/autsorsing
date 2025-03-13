// components/Footer.js
import React from 'react';
import './footer.css'; // Импортируем обычный CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div>+996 227 616767</div> <br />
        <div>+996 553 616767</div> <br />
        <div>u.bukh@mail.ru</div>
      </div>
      <div className="footer-address">
        ТК Келечек б/н г. Кызыл-Кыя ул. 60 лет Кыргызской ССР
      </div>
    </footer>
  );
};

export default Footer;