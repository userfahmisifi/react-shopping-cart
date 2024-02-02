import axios from "axios";
//products actions
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SORT_PRODUCTS = "SORT_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
//product actions

export const SET_PRODUCT='SET_PRODUCT'




//products actions creators 

export const fetchProducts = async (dispatch) => {
  const { data: products } = await axios.get(`/api/products`)
                                 ;
  products.reverse();

  dispatch({
    type: GET_PRODUCTS,
    payload: products,
  });
};



export const filterProducts = async (dispatch, val1, val2) => {
  let url = `/api/products?sizes=${val1}`;

  if (val2 === "price" || val2 === "-price") {
    url = `${url}&sort=${val2}`;
  }

  const { data } = await axios.get(url);
  if (val2 === "Latest") {
    data.reverse();
  }
  dispatch({
    type: FILTER_PRODUCTS,
    payload: data,
  });
};


//product action creator

export function setProduct(product){
  return {
    type:SET_PRODUCT,
    payload:product
  }
}
