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
            <strong>📍 Адрес:</strong> ул. Мусой Бакской, Ул. Хрущебова, Баталья
          </p>
          <p>
            <strong>📞 Телефон:</strong>{' '}
            <a href="tel:+996551181888" className="contact-link">
              +996 551 181 888
            </a>
          </p>
          <p>
            <strong>✉️ Email:</strong>{' '}
            <a href="mailto:example@gmail.com" className="contact-link">
              example@gmail.com
            </a>
          </p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.927842704981!2d72.7911988!3d40.543183299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdabf76c64ebd9%3A0x6af14b6e3e0e9637!2zMzE2INCj0LvQuNGG0LAg0JvQtdC90LjQvdCwLCDQntGI!5e0!3m2!1sru!2skg!4v1741413042503!5m2!1sru!2skg"
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