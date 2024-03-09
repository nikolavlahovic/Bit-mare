import React from 'react'
import "./SideBarAdmin.css"
import { useNavigate } from 'react-router-dom'

const SideBarAdmin = ({setToken}) => {


  const navigate = useNavigate();

  const logOut = () => {
    navigate("/")
    window.localStorage.removeItem("token")
    setToken(undefined)
  };

  const redirectToAdminReports = () => {
    navigate("/adminReports")
};

  const redirectToAdminCreateReports = () => {
    navigate("/wizard")
};

  return (
    <div className='sidebar'>
       <button onClick={redirectToAdminCreateReports} className='buttons'>Create Reports</button>
       <button onClick={redirectToAdminReports} className='buttons'>Reports</button>
       <div className="log-out">
        <button onClick={logOut} className='buttonl'>Log out</button>
       </div>
    </div>
  )
}

export default SideBarAdmin