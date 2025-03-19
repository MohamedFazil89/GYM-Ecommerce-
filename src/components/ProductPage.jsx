import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './Cart';
export default function ProductPage() {
  const [data, setData] = useState([]);

  
  useEffect(() =>{
    const FetchProduct = async () =>{
      try{
        const Response = await axios.get("http://localhost:5000/api/products")
        console.log(Response.data.Product_Collection)
        setData(Response.data.Product_Collection);
  
      }catch(err){
        console.log(err)
      }
    }
    FetchProduct()
  },[])
  const Protien = data.filter((product) => product.type === "InTakeItems")

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <p>Protien Items</p>
      <ul>
        
        <div className="Cart-container" id='Equipment'>
          {Protien.map((item, index) =>(
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
