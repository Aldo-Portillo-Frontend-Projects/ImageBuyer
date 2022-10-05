import React from "react";
import {Context} from '../context/context'
import PropTypes from 'prop-types'

function CartItem ({item}) {

    const {removeFromCart} = React.useContext(Context)

    const [hovered, setHovered] = React.useState(false)
    
    return (
        <div className="cart-item">
            <i className={hovered ? "ri-delete-bin-fill": "ri-delete-bin-line"} onClick={()=> removeFromCart(item.id)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )

    CartItem.propTypes = {
        item: PropTypes.shape({
            url: PropTypes.string.isRequired
        })
    }
}

export default CartItem