import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

const Header = () => {
    return (
        <div className="header-container">

            <Logo />

            <div className="nav-items">
                <Navigation link="/cart" >
                    CART
                </Navigation>

                <Navigation link="/checkout">
                    CHECKOUT
                </Navigation>

                <Navigation link="/login">
                    LOG IN
                </Navigation>
            </div>

        </div>
    )
}

export default Header
