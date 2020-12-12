import React from 'react'

const OrderSummary = () => {
    return (
        <div className="order-summary">
            <h2>Pesanan</h2>
            <p style={{ marginTop: 15 }}>( 5 Item )</p>

            <h2 style={{ marginTop: 20, marginBottom: 20 }}>Total Bayar</h2>
            <h1>Rp. 50.000</h1>
        </div>
    )
}

export default OrderSummary
