import React from 'react'
import Modal from 'react-modal'
import '../../css/ProductsDetails/ProductDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { toogleProductModal } from '../../redux/actions/modalActions'

function ProductDetails() {
    const dispatch=useDispatch()
    const {product}=useSelector(({products})=>products)
    const isOpen=useSelector((state)=>state.modal.product)
    
    
    return (
        <Modal isOpen={isOpen} style={{ content: { textAlign: 'center' }, overlay: { background: 'grey' } }}>

            <h2 className='product-title'> {product.title}</h2>
            <img src={product.imageUrl} alt={product.title} className='product-image'/>
            <p> {product.desc} </p>
            <button onClick={() =>dispatch(toogleProductModal())} className='close-btn'> &times; </button>

        </Modal>
    )
}

export default ProductDetails
