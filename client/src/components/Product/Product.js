import React from 'react'

function Product(props) {

    const openModal = (props) => {
        props.setIsOpen(true)
        props.setProduct(props.product)
    }
    return (
        <div className="item">
            <img src={props.product.imageUrl} alt={props.product.title} onClick={() =>openModal(props)}/>
            <div className="item-info">
                {props.product.title}
                <span className="info-price">${props.product.price}</span>
            </div>
            <button className="item-btn"> Add To Cart</button>

        </div>
    )
}

export default Product
