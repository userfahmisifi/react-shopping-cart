import React, { useState } from 'react'
import '../../css/Products/Products.css'
import Product from '../Product/Product'
import ProductDetails from '../ProductsDetails/ProductDetails'

function Products(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState({})

  return (
    <>
      <div className="products-items">
        {
          props.products.map(function (product) {
            return <Product key={product.id} product={product} setIsOpen={setIsOpen} setProduct={setProduct} />
          })
        }

      </div>
      <ProductDetails isOpen={isOpen} product={product} setIsOpen={setIsOpen}/>

    </>
  )
}

export default Products
