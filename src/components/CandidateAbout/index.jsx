import React from "react";
import "../CandidateAbout/CandidateAbout.css";
import { useNavigate } from "react-router-dom";

const CandidateAbout = ({ name, avatar, email, birthday, education }) => {
  const navigate = useNavigate();

  const backToCandidates = () => {
    navigate("/candidates")
  }
  return (
    <div className="candidate-info">
      <div className="info-card">
        <img src={avatar} alt="slika" />
        <div className="info-text">
          <p>Name: {name} </p>
          <p>E-mail: {email}</p>
          <p>Birthday: {birthday}</p>
          <p>Education: {education}</p> <p>Notes: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magnam nulla pariatur molestiae, dolore ipsa! Illo enim eveniet et corporis tempora atque sunt placeat sit voluptas aliquid? Voluptatem, maxime alias?lorem</p> <button onClick={backToCandidates} className="buttonc">Back</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateAbout;
