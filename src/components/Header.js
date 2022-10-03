import React from "react"
import {Route, Routes, Link } from 'react-router-dom'
import Photos from "../pages/Photos"
import Cart from "../pages/Cart"

function Header() {
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>

            <Routes>
                <Route exact path="/" component={Photos} />
                <Route exact path="/cart" component={Cart} />
            </Routes>
            
        </header>
    )
}

export default Header
