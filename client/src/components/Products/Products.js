import React, { useState } from 'react'
import '../../css/Products/Products.css'
import Product from '../Product/Product'
import ProductDetails from '../ProductsDetails/ProductDetails'

function Products({products}) {
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState({})
  
  return (
    <>
      <div className="products-items">
        {
          products.map((p)=>{
            return <Product key={p.id} product={p} setIsOpen={setIsOpen} setProduct={setProduct} />
          })
        }

      </div>
      <ProductDetails isOpen={isOpen} product={product} setIsOpen={setIsOpen}/>

    </>
  )
}

export default Products
