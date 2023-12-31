import React from 'react'
import '../../css/Products/Products.css'
import Product from '../Product/Product'

function Products(props) {
  return (
    <div className="products-items">
            {
                props.products.map(function (product) {
                    return  <Product key={product.id} product={product}/>
                })
            }
            
    </div>
  )
}

export default Products
