import React from "react";
import "./TeamSection.css";

import Member1 from "../../assets/T1.jpg";
import Member2 from "../../assets/t2.jpg";
import Member3 from "../../assets/t3.jpg";
import Member4 from "../../assets/t4.jpg";

const TeamSection = () => {
  return (
    <div className="team-container">
      <h2>It's all about the people</h2>
      <div className="team-grid">
        <div className="team-card">
          <img src={Member1} alt="Christian Leth-Espensen" />
          <h3>Christian Leth-Espensen</h3>
          <p>Engineering</p>
        </div>
        <div className="team-card">
          <img src={Member2} alt="Nicky Christensen" />
          <h3>Nicky Christensen</h3>
          <p>Engineering</p>
        </div>
        <div className="team-card">
          <img src={Member3} alt="Benjamin Nørgaard" />
          <h3>Benjamin Nørgaard</h3>
          <p>Engineering</p>
        </div>
        {/* <div className="team-card">
          <img src={Member4} alt="Thor Christensen" />
          <h3>Thor Christensen</h3>
          <p>Co-Founder</p>
        </div>
        <div className="team-card">
          <img src={Member1} alt="Jack Theobald" />
          <h3>Jack Theobald</h3>
          <p>Design</p>
        </div>
        <div className="team-card">
          <img src={Member2} alt="Niklas Refnov" />
          <h3>Niklas Refnov</h3>
          <p>Growth</p>
        </div>
        <div className="team-card">
          <img src={Member3} alt="Anders Johnsen" />
          <h3>Anders Johnsen</h3>
          <p>Co-Founder</p>
        </div>
        <div className="team-card">
          <img src={Member4} alt="Matias Frank" />
          <h3>Matias Frank</h3>
          <p>Engineering</p>
        </div> */}
      </div>
    </div>
  );
};

export default TeamSection;
