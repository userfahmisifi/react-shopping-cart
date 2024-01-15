import React, { useState } from 'react'
import '../../css/Cart/Cart.css'

function Cart({ productsInCart,setProductsInCart,setShowForm}) {
 const removeFromCart=(product)=>{
      
      setProductsInCart(productsInCart.filter(p=>p.id!=product.id))
 }

  return (
    <div className='cart'>
      <p className='cart-desc'>{productsInCart.length ? `There is ${productsInCart.length} Items In Cart` : 'cart is empty'}</p>
      <hr />
      <div className='cart-content'>

        {productsInCart.map(product => {
          return <div className='item' key={product.id} >
            <img src={product.imageUrl} alt={product.title} />
            <div className='item-info'>
              <p className='info-title'>{product.title}</p>
              <p className='info-qty'>Qty:{product.qty}</p>
              <p className='info-price'>Price: ${product.price} </p>
            </div>
            <button className='item-btn' onClick={()=>removeFromCart(product)}>Remove</button>
          </div>

        })}

        {productsInCart.length>0 && <div className='total'>
          <p>Total Price:<span className='total-price'>${productsInCart.reduce((acc,p)=>acc+(p.price*p.qty),0)}</span></p>
          <button className='total-btn' onClick={()=>setShowForm(true)}>Select Products</button>
        </div>}
      </div>
    </div>
  )
}

export default Cart
