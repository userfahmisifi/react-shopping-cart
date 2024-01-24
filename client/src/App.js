import React, { useState} from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState({});

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="products">
          <Products setProduct={setProduct} product={product} />

          <Filter />
        </div>
        <Cart setShowForm={setShowForm} />
        {showForm && <Form setShowForm={setShowForm} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
