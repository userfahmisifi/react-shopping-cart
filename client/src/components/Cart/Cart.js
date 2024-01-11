import React, { useState } from 'react'
import '../../css/Cart/Cart.css'

function Cart({ productsInCart, totalPrice,setProductsInCart,setTotalPrice}) {
 const removeFromCart=(product)=>{
      
      setProductsInCart(productsInCart.filter(p=>p.id!=product.id))
      setTotalPrice(totalPrice-((product.price)*(product.qty)))
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

        {productsInCart.length ? <div className='total'>
          <p>Total Price:<span className='total-price'>${totalPrice}</span></p>
          <button className='total-btn'>Select Products</button>
        </div> : ''}
      </div>
    </div>
  )
}

export default Cart
