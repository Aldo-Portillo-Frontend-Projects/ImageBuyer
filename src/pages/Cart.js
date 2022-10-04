import React from "react"
import CartItem from "../components/CartItem"
import {Context} from '../context/context'

function Cart() {

    const {cart} = React.useContext(Context)
    const cartItemElements = cart.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart