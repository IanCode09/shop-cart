import React from 'react'
import CurrencyFormat from 'react-currency-format'

const Product = ({ listProduct }) => {
    return (
        <>
            <img src={listProduct.image} alt="imgProduct" />
            
            <div className="product-info">
                <h2>{listProduct.name}</h2>

                <h1>
                    <CurrencyFormat value={listProduct.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                </h1>
               
                <h3>Description:</h3>
                <p>{listProduct.description}</p>

                <button className="btn btn-secondary">
                    <i className="fas fa-plus"></i>
                </button>

                <span>1</span>

                <button className="btn btn-secondary">
                    <i className="fas fa-minus"></i>
                </button>
            </div>
        </>
    )
}   

export default Product
