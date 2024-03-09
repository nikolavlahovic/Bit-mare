import React from "react";
import "./CandidatePage.css";
import { useNavigate } from "react-router-dom";

const Candidates = ({ candidates, setSelectedCandidate }) => {
  const navigate = useNavigate();

  const redirectToCandidates = (obj) => {
    setSelectedCandidate(obj);
    navigate("/candidateInfo");
  };
  console.log(candidates);
  return (
    <div className="all-candidates">
      {candidates?.map((kandidat) => {
        console.log(kandidat);
        return (
          <div
            onClick={() => {
              redirectToCandidates(kandidat);
            }}
            className="single-candidate"
          >
            <img src={kandidat.avatar} alt="asdasd" />
            <p>Name: {kandidat.name}</p>
            <p>Email: {kandidat.email}</p>
            {/* <p>Birthday: {kandidat.birthday}</p>
            <p>Education: {kandidat.education}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Candidates;
