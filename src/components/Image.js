import React from 'react'
import {Context} from '../context/context'
import PropTypes from 'prop-types'


function Image ({className, img}) {

    const {toggleFavorite, cart, addToCart, removeFromCart} = React.useContext(Context)

    const [hovered, setHovered] = React.useState(false)
    
    const heartIcon = hovered && <i className={img.isFavorite ? "ri-heart-fill favorite": "ri-heart-line favorite"} onClick={() => toggleFavorite(img.id)}></i>



    function cartIcon () {
        const alreadyInCart = cart.some(item => item.id === img.id)
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={()=> removeFromCart(img.id)}></i>
        } else if (hovered){
            return <i className="ri-add-circle-line cart" onClick={()=> addToCart(img)}></i>
        }
    }

    return(
        <div className={`${className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
            <img src={img.url} className="image-grid" />
            {heartIcon}
            {cartIcon()}
        </div>
    )


    //Use propTypes to Image component
    //The purpose of this is to ensure that the passed value is of the correct datatype
    //THink of form validation but for props

    Image.propTypes = {
        className: PropTypes.string,
        img: PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            isFavorite: PropTypes.bool
        })
    }
}

export default Image
