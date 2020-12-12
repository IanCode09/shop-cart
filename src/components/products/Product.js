import React from 'react'
import CurrencyFormat from 'react-currency-format'

const Product = ({ listProduct }) => {
    return (
        <>
            <img src={listProduct.image} />
            
            <div className="product-info">
                <h2>{listProduct.name}</h2>

                <h1>
                    <CurrencyFormat value={listProduct.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                </h1>
               
                <h3>Description:</h3>
                <p>{listProduct.description}</p>

                <button className="btn btn-secondary">
                    <i class="fas fa-plus"></i>
                </button>

                <span>1</span>

                <button className="btn btn-secondary">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        </>
    )
}   

export default Product
