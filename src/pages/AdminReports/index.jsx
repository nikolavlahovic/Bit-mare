import React from "react";
import "./AdminReports.css";

const AdminReports = ({
  adminReports,
  setSelectedReport,
  token,
  setFreshData,
}) => {
  const deleteReport = async (id) => {
    const res = await fetch(`http://localhost:3333/api/reports/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      setFreshData((pre) => !pre);
    }
  };

  return (
    <div className="admin-reports">
      {adminReports?.map((report) => {
        console.log(report);
        return (
          <div>
            <p>Name: {report.candidateName}</p>
            <p>Company Name: {report.companyName}</p>
            <p>Interview Date: {report.interviewDate}</p>
            <p>Phase: {report.phase}</p>
            <p>Status: {report.status}</p>
            <p>Note:{report.note}</p>
            <div className="photo">
            <img
              src="https://www.svgrepo.com/download/21045/delete-button.svg"
              alt=""
              onClick={() => deleteReport(report.id)}
            />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default AdminReports;
