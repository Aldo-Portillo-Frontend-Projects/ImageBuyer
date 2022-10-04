import React from "react"
import CartItem from "../components/CartItem"
import {Context} from '../context/context'

function Cart() {

    const {cart, emptyCart} = React.useContext(Context)
    const cartItemElements = cart.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
    
    const total = (cart.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    const [orderButton, setOrderButton] = React.useState("Place Order")
    function placeOrder() {
        setOrderButton("Ordering ...")
        setTimeout(()=>{
            setOrderButton("Place Order")
            emptyCart()
            alert("Order Placed")
        }, "3000")
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total}</p>
            <div className="order-button">
                { cart.length > 0 && <button onClick={placeOrder}>{orderButton}</button>}
            </div>
        </main>
    )
}

export default Cart