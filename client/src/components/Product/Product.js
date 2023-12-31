import React from 'react'

function Product(props) {
    return (
        <div className="item">
            <img src={props.product.imageUrl} alt={props.product.title}/>
            <div className="item-info">
                {props.product.title}
                <span className="info-price">${props.product.price}</span>
            </div>
            <button className="item-btn"> Add To Cart</button>
        </div>
    )
}

export default Product
