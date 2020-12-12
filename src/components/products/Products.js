import React, { useState } from 'react'
import Product from './Product'

const Products = () => {
    const [listProducts, setListProducts] = useState([
        {
            id: '1awdwdw',
            name: "Aerostreet 35-42 Leopard Hitam Emas ",
            price: 230000,
            description: "Bahan kain kulit sintetis dan kain mesh berpori (lembut, nyaman, dan tidak panas) ",
            image: './images/product1.jpg'
        },

        {
            id: '2addfee',
            name: "Apple MacBook Air 13 inch 8GB, 256GB, 1.1GHz Gold",
            price: 15000000,
            description: " MacBook Air terbaru memiliki layar Retina yang menakjubkan dengan teknologi True Tone, ",
            image: './images/product2.jpg'
        }
    ])

    return (
        <div className="container">
            {listProducts.map(listProduct => (
                <div key={listProduct.id} className="list-product">
                    <Product listProduct={listProduct} />
                </div>
            ))}
        </div>
    )
}

export default Products
