// components/Footer.js
import React from 'react';
import './footer.css'; // Импортируем обычный CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div>+996 551 986867</div> <br />
        <div>+996 700 986867</div> <br />
        <div>info@cherikov.kg</div>
      </div>
      <div className="footer-address">
        Кыргызская Республика, г. Бишкек, бул. Эркиндик, 64Б, офис 22
      </div>
    </footer>
  );
};

export default Footer;