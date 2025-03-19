import  { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles/OrderPlace.css";
import { useSelector, useDispatch } from 'react-redux';


export default function OrderPlace() {
    const [orderConfirmed, setOrderConfirmed] = useState(true);
    // const [previousOrders, setPreviousOrders] = useState([]);
    const cartItems = useSelector(state => state.cart.cartItems); // Fetch cart items from Redux
    const total = useSelector(state => state.cart.total); // Fetch total price
    // const dispatch = useDispatch();



    // For demonstration, we're sending the entire cartItems array as the new order.
    const NewOrders = cartItems;

    // Replace with the actual user's email
    const userEmail = "nmohammedfazil790@gmail.com";

    useEffect(() => {
        const timer = setTimeout(() => {
            setOrderConfirmed(false);
        }, 3000);
        handelPostFetchOrder();

        return () => clearTimeout(timer);
    }, []);

    const handelPostFetchOrder = async () => {
        try {
            const postResponse = await axios.post("http://localhost:5000/OrderPlace", {
                email: userEmail,
                NewOrders,
            });
            console.log("Order placed:", postResponse.data);


        } catch (err) {
            console.error("Error placing order:", err);
        }
    };

    return (
        <>
            {!orderConfirmed ? (
                <div className='Order-container'>
                    <div className="Ordered-Cart-items">
                        <h1 style={{ margin: "1rem" }}> confirmed Order!</h1>
                        {cartItems.map((item, index) => (
                            <div key={item.id || `cart-item-${index}`} className="Ordered-carditem">
                                <img src={item.img} alt={item.title} className="Ordered-Item-image" />
                                <span className="Ordered-Card-details">
                                    <p className="Ordered-Name">{item.title}</p>
                                    <p className="Ordered-Rate">${item.price}</p>
                                </span>
                            </div>
                        ))}
                        {cartItems != "" ? <p className='Ordered-Total'>Order Successful</p> : ""}
                        {cartItems != "" ? <p className='Ordered-deviler'>You will receive an receipt in your mail</p>
                            : <p className='Ordered-deviler'>Empty Cart</p>}
                    </div>
                    <div className="total">
                        <p>Total: ${total.toFixed(2)}</p>
                        {/* <button onClick={() => setOrderConfirmed(true)}>Buy Now</button> */}
                    </div>

                </div>
            ) : (
                <section className="orderConfirm">
                    <p className='OrderTitle'>Order Confirmed!</p>
                </section>
            )}
        </>
    );
}
