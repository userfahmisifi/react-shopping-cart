import React from 'react'
import {useSelector} from 'react-redux'
import Products from '../components/Products/Products'
import Filter from '../components/Filter/Filter'
import Cart from '../components/Cart/Cart'
import Form from '../components/Form/Form'

function Home() {
 const showForm=useSelector(state=>state.orderForm)
  return (
    <>
      <div className="products">
          <Products/>
          <Filter />
        </div>
        <Cart/>
        {showForm && <Form/>}

    </>
  )
}

export default Home
