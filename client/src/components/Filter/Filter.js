import React, { useState } from "react";
import "../../css/Filter/Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../redux/actions/productsActions";
import axios from "axios";

function Filter() {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("Latest");
  const [size, setSize] = useState("All");

  const {products} = useSelector((state) => state.products);

  const filterProductsBySize = (e) => {
    setSize(e.target.value)
    if(sort==='Lowest'){
    filterProducts(dispatch, e.target.value,'price');
  }
  else if(sort==='Highest'){
    filterProducts(dispatch, e.target.value,'-price');

  }
  else{
    filterProducts(dispatch,e.target.value, "Latest");

  }
  };

  const sortProducts = (e) => {
    setSort(e.target.value);
    if (e.target.value === "Lowest") {
      filterProducts(dispatch, size, "price");
    } else if (e.target.value === "Highest") {
      filterProducts(dispatch, size, "-price");
    }
    else{
      filterProducts(dispatch, size, "Latest");

    }
  };

  return (
    <div className="products-filter">
      <h2 className="filter-title">Filter</h2>
      <div className="filter-content">
        <p>Number of Products:{products.length} Products</p>
        <div className="content-select">
          <p>Filter</p>
          <select className="select" onChange={filterProductsBySize}>
            <option>All</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="content-select">
          <p>Order</p>
          <select className="select" value={sort} onChange={sortProducts}>
            <option>Latest</option>
            <option>Highest</option>
            <option>Lowest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
