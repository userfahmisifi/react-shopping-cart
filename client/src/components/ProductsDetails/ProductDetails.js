import React from 'react'
import Modal from 'react-modal'
import '../../css/ProductsDetails/ProductDetails.css'

function ProductDetails(props) {
    
    return (
        <Modal isOpen={props.isOpen} style={{ content: { textAlign: 'center' }, overlay: { background: 'grey' } }}>

            <h2 className='product-title'> {props.product.title}</h2>
            <img src={props.product.imageUrl} alt={props.product.title} className='product-image'/>
            <p> {props.product.desc} </p>
            <button onClick={() => props.setIsOpen(false)} className='close-btn'> &times; </button>

        </Modal>
    )
}

export default ProductDetails
