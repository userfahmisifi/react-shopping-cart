
import React, { useState } from 'react'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from './data.json'
import Filter from './components/Filter/Filter';


function App() {
  const [products, setProducts] = useState(data)

  return (
    <div className='layout'>
      <Header />
      <main>
        <div className="products">
          <Products products={products} data={data} />
          <Filter data={data} setProducts={setProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
