
import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../../css/Products/Products.css'
import Product from '../Product/Product'
import ProductDetails from '../ProductsDetails/ProductDetails'
import { fetchProducts } from '../../redux/actions/productsActions'

function Products({setProduct,product}) {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch=useDispatch()
  const products=useSelector(state=>state.products)

  useEffect(()=>{
      fetchProducts(dispatch)
  },[])
  
  return (
    <>
      <div className="products-items">
        {
          products.map((p)=>{
            return <Product key={p.id} 
            product={p} 
            setIsOpen={setIsOpen} 
            setProduct={setProduct} 
           
           
            />
          })
        }

      </div>
      <ProductDetails isOpen={isOpen} product={product} setIsOpen={setIsOpen} />

    </>
  )
}

export default Products
