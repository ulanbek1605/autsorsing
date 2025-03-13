'use client';

import React from 'react';
import './contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1 className="contacts-header">Свяжитесь с нами</h1>
      <div className="contacts-content">
        <div className="contacts-info">
          <p>
            <strong>📍 Адрес:</strong>ТК Келечек б/н г. Кызыл-Кыя ул. 60 лет Кыргызской ССР
          </p>
          <p>
            <strong>📞 Телефон:</strong>{' '}
            <a href="tel:+996227616767" className="contact-link">
              +996 227 616 767
            </a>
          </p>
          <p>
            <strong>📞 Телефон:</strong>{' '}
            <a href="tel:+996553616767" className="contact-link">
              +996 553 616 767
            </a>
          </p>
          <p>
            <strong>✉️ Email:</strong>{' '}
            <a href="mailto:u.bukh@mail.ru" className="contact-link">
              u.bukh@mail.ru
            </a>
          </p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6088.655506366779!2d72.1327653773183!3d40.268469019050414!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDE2JzA2LjUiTiA3MsKwMDcnNTguMCJF!5e0!3m2!1sru!2skg!4v1741848976276!5m2!1sru!2skg"
            allowFullScreen
            loading="lazy"
            className="map-contact"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта с нашим местоположением"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
