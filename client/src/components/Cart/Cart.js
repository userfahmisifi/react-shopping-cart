import React, { useEffect, useState } from 'react'
import '../../css/Cart/Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems,removeItemFromCart } from '../../redux/actions/cartActions'

function Cart({setShowForm}) {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    getCartItems(dispatch)
  },[])
  
 const productsInCart=useSelector(state=>state.cart)

 


  return (
    <div className='cart'>
      <p className='cart-desc'>{productsInCart.length ? `There is ${productsInCart.length} Items In Cart` : 'cart is empty'}</p>
      <hr />
      <div className='cart-content'>

        {productsInCart.map(p => {
          const{product}=p
          return <div className='item' key={product.id} >
            <img src={product.imageUrl} alt={product.title} />
            <div className='item-info'>
              <p className='info-title'>{product.title}</p>
              <p className='info-qty'>Qty:{p.qty}</p>
              <p className='info-price'>Price: ${product.price} </p>
            </div>
            <button className='item-btn' onClick={()=>removeItemFromCart(dispatch,p._id,productsInCart)}>Remove</button>
          </div>

        })}

        {productsInCart.length>0 && <div className='total'>
          <p>Total Price:<span className='total-price'>${productsInCart.reduce((acc,p)=>acc+(p.product.price*p.qty),0)}</span></p>
          <button className='total-btn' onClick={()=>setShowForm(true)}>Select Products</button>
        </div>}
      </div>
    </div>
  )
}

export default Cart
