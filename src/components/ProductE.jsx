import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './Cart';
import Nav from './Nav';

export default function ProductPage() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const FetchProduct = async () => {
      try {
        const Response = await axios.get("http://localhost:5000/api/products")
        console.log(Response.data.Product_Collection)
        setData(Response.data.Product_Collection);

      } catch (err) {
        console.log(err)
      }
    }
    FetchProduct()
  }, [])

  const Equipment = data.filter((product) => product.type === "equipmentItems")


  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <Nav />

      <p>Equipment Items</p>
      <ul>

        <div className="Cart-container" id='Equipment'>
          {Equipment.map((item, index) => (
            <Cart
              key={index}
              img={item.img}
              price={item.price}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </ul>

    </div>
  );
}
