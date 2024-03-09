import React from "react";
import "./CandidateInfoPage.css";
import CandidateAbout from "../../components/CandidateAbout";

const CandidateInfoPage = ({ data }) => {
  console.log(data);
  return (
    <div className="candidateInfoPage">
      <CandidateAbout
        avatar={data.avatar}
        name={data.name}
        email={data.email}
        birthday={data.birthday}
        education={data.education}
      />
      
    </div>
  );
};

export default CandidateInfoPage;
