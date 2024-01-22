import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState({});
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("productsInCart")) || []
  );

  useEffect(() => {
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="products">
          <Products
            setProduct={setProduct}
            product={product}
            setProductsInCart={setProductsInCart}
            productsInCart={productsInCart}
          />

          <Filter data={data} />
        </div>
        <Cart
          productsInCart={productsInCart}
          setProductsInCart={setProductsInCart}
          setShowForm={setShowForm}
        />
        {showForm && <Form setShowForm={setShowForm} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
