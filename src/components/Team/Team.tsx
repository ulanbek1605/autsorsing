import React from 'react';
import './team.css'; 

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="team-header">НАША КОМАНДА</h1>
      <div className="team-grid">
        <div className="team-member">
          <div className="member-image" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}></div>
          <h2 className="member-name">Каныбек Чериков</h2>
          <p className="member-role">Основатель</p>
        </div>
        <div className="team-member">
          <div className="member-image" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}></div>
          <h2 className="member-name">Махабат Жакыпова</h2>
          <p className="member-role">Директор</p>
        </div>
        <div className="team-member">
          <div className="member-image" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}></div>
          <h2 className="member-name">Адила Усеналиева</h2>
          <p className="member-role">Бухгалтер</p>
        </div>
        <div className="team-member">
          <div className="member-image" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}></div>
          <h2 className="member-name">Бермет Омурбекова</h2>
          <p className="member-role">Бухгалтер</p>
        </div>
      </div>
    </div>
  );
};

export default Team;