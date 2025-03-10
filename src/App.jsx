import './App.css'
import Nav from './components/Nav'
import Home from "./components/Hero"
import Update from './components/Update'
import Cart from './components/Cart'
import CardData from "./components/CartData.js"
import About from './components/About.jsx'
import React, { useState, useEffect } from "react";
import Auth from './Auth.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const { intakeItems, equipmentItems } = CardData;
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth");
    if (authStatus === "true") {
      setIsAuth(true);
    }
  }, []);


  return (
    <>
   {isAuth ? (<div>
      <Nav />
      <Home />
      <Update />
      <br />
      <br />
      <br />

      <p className='Product-section-title'>Explore Our Proteins      </p>
      <div className="Cart-container" id='Proteins'>
        {intakeItems.map((item, index) =>(
          <Cart
          key={index}
          img={item.img}
          price={item.price}
          title={item.title}
          description={item.description}
           />
        ))}

      </div>
      <br />
      <br />
      <br />
      <p className='Product-section-title'>Explore Our Equipment      </p>

      <div className="Cart-container" id='Equipment'>
        {equipmentItems.map((item, index) =>(
          <Cart
          key={index}
          img={item.img}
          price={item.price}
          title={item.title}
          description={item.description}
           />
        ))}

      </div>
      <br />
      <br />
      <p className='Product-section-title'  style={{ textAlign:"center"}}>About Us</p>

      <About />
      <br />
      <br />
      <Contact />

    </div>) :( 
    <Auth setIsAuth={setIsAuth} />
    )}
    </>
  )
}

export default App
