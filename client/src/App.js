
import React, { useState,useEffect } from 'react'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from './data.json'
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';

function App() {
  const [products, setProducts] = useState(data)
  const [product, setProduct] = useState({})
  const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem('productsInCart')) || [])
  const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem('totalPrice')) ||0)
 
  useEffect(()=>{
       localStorage.setItem('productsInCart',JSON.stringify(productsInCart))
       localStorage.setItem('totalPrice',totalPrice)
  },[productsInCart])


  return (
    <div className='layout'>
      <Header />
      <main>
        <div className="products">
          <Products
            products={products}
            setProduct={setProduct}
            product={product}
            setProductsInCart={setProductsInCart}
            productsInCart={productsInCart}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
           
          />

          <Filter
            products={products}
            data={data}
            setProducts={setProducts}
          />
        </div>
        <Cart productsInCart={productsInCart} totalPrice={totalPrice} setProductsInCart={setProductsInCart} setTotalPrice={setTotalPrice} />

      </main>
      <Footer />
    </div>
  );
}

export default App;
