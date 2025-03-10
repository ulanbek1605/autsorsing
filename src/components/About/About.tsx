import React from 'react';
import Image from 'next/image'; 
import './about.css';

const About = () => {
  return (
    <div className="about_container">
      <div className="author_block">
        <div className="author_img">
          <Image
            src="/images/author1.jpg"
            alt="Каныбек Чериков"
            width={300} 
            height={400} 
            className="author_image"
          />
        </div>
        <div className="author_info">
          <h1 className="title">Наша история</h1>
          <p className="text">
            В апреле 2014 года двое партнеров – бухгалтер и налоговый юрист – оставили работу в больших компаниях и открыли свою небольшую бухгалтерскую фирму. Все, что у них тогда было – это один стол в чужом офисе. И большая мечта. Они хотели предоставлять лучшие бухгалтерские услуги в Бишкеке и Кыргызстане.
          </p>
          <p className="text">
            С тех пор многое изменилось. Появился свой офис, клиенты, сотрудники. К сожалению, один из партнеров вышел из бизнеса.
          </p>
          <p className="text">
            Но мечта осталась прежней. И каждый день наша команда старается сделать хотя бы один маленький шаг к ней.
          </p>
          <p className="signature">
            С уважением,<br />
            Каныбек Чериков<br />
            Сооснователь
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;