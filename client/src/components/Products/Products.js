import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/Products/Products.css";
import Product from "../Product/Product";
import ProductDetails from "../ProductsDetails/ProductDetails";
import { fetchProducts } from "../../redux/actions/productsActions";

function Products() {

  const dispatch = useDispatch();

  const  products  = useSelector((state) => state.products.products);
  let productsNumber
  useEffect(() => {
    fetchProducts(dispatch)
  }, []);
  


  return (
    <>
      <div className={`products-items ${products.length<4 && 'start' }`}>
        {products.map((p) => {
          return <Product key={p.id} product={p} />;
        })}
      </div>
      <ProductDetails />
    </>
  );
}

export default Products;
