import React, { useState } from 'react'
import "./styles/Nav.css"
import logo from "../assets/logo.png"
import CardMenu from './CartMenu';

export default function Nav() {
  const [Card, setCard] = useState(false);
  
  const OpenCard = () =>{
    setCard(!Card);
  }


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
    
    <ul className="nav-list" >
      <label htmlFor="nav-check" className='navCheck'>
      <li><a href="#">Home</a></li>
      <li><a href="#Proteins">Protiens</a></li>
      <li><a href="#Equipment">Equipements</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li className='Cart-btn'><a href="#" onClick={OpenCard}>Cart</a></li>

      <div className="card-con">
        <CardMenu width={ Card ? "40%": "0%"} OpenCard={OpenCard} BuyNow={() => console.log("CLICKED!!!!")}/>
        </div>
      </label>
      
    </ul>
  </nav>
  )
}
