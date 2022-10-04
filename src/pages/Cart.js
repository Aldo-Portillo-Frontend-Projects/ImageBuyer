import React from "react"
import CartItem from "../components/CartItem"
import {Context} from '../context/context'

function Cart() {

    const {cart} = React.useContext(Context)
    const cartItemElements = cart.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
    
    const total = (cart.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total}</p>
            <div className="order-button">
                <button onClick={total}>Place Order</button>
            </div>
        </main>
    )
}

export default Cart