import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItems, incrementQuantity} from '../../redux/actions/cartActions'
import { setProduct } from '../../redux/actions/productsActions'
import { toogleProductModal } from '../../redux/actions/modalActions'

function Product({product}) {
    const dispatch=useDispatch()
    const productsInCart=useSelector(state=>state.cart.items)

    const openModal = (product) => {
        dispatch(toogleProductModal())
        dispatch(setProduct(product))
    }

    const addToCart = async(product) => {
        const index = productsInCart.findIndex(p => p.product._id === product._id)

        const isProductInCart=(index===-1)
        

        
        if(isProductInCart){
            addCartItems(dispatch,{product:product._id,qty:1})
            
        }else{
            incrementQuantity(dispatch,productsInCart,index)
        }

        


    }

    return (
        <div className="item">
            <img src={product.imageUrl} alt={product.title} onClick={() => openModal(product)} />
            <div className="item-info">
                {product.title}
                <span className="info-price">${product.price}</span>
            </div>
            <button className="item-btn" onClick={() =>addToCart(product)}>Add To Cart</button>
            

        </div>
    )
}

export default Product
