import React from 'react'
import "./styles/Nav.css"
import logo from "../assets/logo.png"

export default function Nav() {
  return (
    <nav className="nav">
    <input type="checkbox" id="nav-check" />
    <div className="nav-header">
      <div className="nav-title">
        <img src={logo} alt="" />
      </div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <ul className="nav-list">
      <li><a href="#">Home</a></li>
      <li><a href="#Proteins">Protiens</a></li>
      <li><a href="#Equipment">Equipements</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      
    </ul>
  </nav>
  )
}
