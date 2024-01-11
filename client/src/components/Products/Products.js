import React, { useState } from 'react'
import '../../css/Products/Products.css'
import Product from '../Product/Product'
import ProductDetails from '../ProductsDetails/ProductDetails'

function Products({products,setProduct,product,setProductsInCart,productsInCart,totalPrice,setTotalPrice}) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <div className="products-items">
        {
          products.map((p)=>{
            return <Product key={p.id} 
            product={p} 
            setIsOpen={setIsOpen} 
            setProduct={setProduct} 
            setProductsInCart={setProductsInCart} 
            productsInCart={productsInCart}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
           
            />
          })
        }

      </div>
      <ProductDetails isOpen={isOpen} product={product} setIsOpen={setIsOpen} />

    </>
  )
}

export default Products
