import React from 'react'
import './Header.css'
import MML from '../images/MML.png'
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/')
  }
  return (
    <div className='header'>
        <img src= {MML} alt="" onClick={redirectToHome} />
    </div>
  )
}

export default Header