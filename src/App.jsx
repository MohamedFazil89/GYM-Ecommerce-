import './App.css'
import Nav from './components/Nav'
import Home from "./components/Hero"
import Update from './components/Update'
import Cart from './components/Cart'
import CardData from "./components/CartData.js"

function App() {
  const { intakeItems, equipmentItems } = CardData;


  return (
    <div>
      <Nav />
      <Home />
      <Update />
      <br />
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
      
    </div>
  )
}

export default App
