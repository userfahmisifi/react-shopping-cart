import React,{useState} from 'react'
import Products from '../components/Products/Products'
import Filter from '../components/Filter/Filter'
import Cart from '../components/Cart/Cart'
import Form from '../components/Form/Form'

function Home() {
 const [showForm, setShowForm] = useState(false);
 const [product, setProduct] = useState({});
  return (
    <>
      <div className="products">
          <Products setProduct={setProduct} product={product} />

          <Filter />
        </div>
        <Cart setShowForm={setShowForm} />
        {showForm && <Form setShowForm={setShowForm} />}

    </>
  )
}

export default Home
