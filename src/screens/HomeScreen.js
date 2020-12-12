import React from 'react'
import Header from '../components/header/Index'
import Products from '../components/products/Products'
import OrderSummary from '../components/orderSummary/OrderSummary'

const HomeScreen = () => {
    return (
        <div className="container">
            <Header />

            <main>
                <Products />
                <OrderSummary />

            </main>
        </div>
    )
}

export default HomeScreen
