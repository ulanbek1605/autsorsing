import React from 'react';
import './team.css'; 

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="team-header">НАША КОМАНДА</h1>
      <div className="team-grid">
        <div className="team-member">
          <div className="member-image" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}></div>
          <h2 className="member-name">Омурбек Маликов</h2>
          <p className="member-role">Директор</p>
        </div>
        <div className="team-member">
          <div className="member-image" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}></div>
          <h2 className="member-name">Караев Абдулхай</h2>
          <p className="member-role">Управляющий</p>
        </div>
        <div className="team-member">
          <div className="member-image" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}></div>
          <h2 className="member-name">Жолдошева Уулкан</h2>
          <p className="member-role">Бухгалтер</p>
        </div>
        <div className="team-member">
          <div className="member-image" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}></div>
          <h2 className="member-name">Фазылжанов Шавкат</h2>
          <p className="member-role">Бухгалтер</p>
        </div>
        <div className="team-member">
          <div className="member-image" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}></div>
          <h2 className="member-name">Холматов Анвар</h2>
          <p className="member-role">Бухгалтер</p>
        </div>
      </div>
    </div>
  );
};

export default Team;