import React from "react";
import "./AdminPage.css";
import SideBarAdmin from "../../components/SideBarAdmin";
import MainAdmin from "../../components/MainAdmin";

const AdminPage = ({setToken}) => {
  return (
    <div className="AdminPage">
      <div className="sidebarAndMain">
        <SideBarAdmin setToken={setToken} />
        <MainAdmin />
      </div>
    </div>
  );
};

export default AdminPage;
