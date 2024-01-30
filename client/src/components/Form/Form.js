import React, { useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import axios from 'axios'
import "../../css/Form/Form.css";
import Input from "../Input/Input";
import OrderModal from "../OrderModal/OrderModal";
import { toogleForm } from "../../redux/actions/orderFormActions";
import { toogleOrderModal } from "../../redux/actions/modalActions";
import { setOrder } from "../../redux/actions/ordersActions";
function Form() {
  const dispatch=useDispatch()
  
  const cartItems=useSelector(state=>state.cart.items)
  const [values, setValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: ""});

  const validateForm = () => {
    let errorsObj={ name: "", email: ""}
     if(!values.name){
      errorsObj={...errorsObj,name:'please enter your name'}
     }
     if(!values.email){
        errorsObj={...errorsObj,email:'please enter your email'}
     }
     setErrors(errorsObj)

  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    validateForm();
    if(values.name && values.email){
      const {data}=await axios.post('http://localhost:4000/api/orders',{...values,items:cartItems})
      
      dispatch(setOrder(data))
      dispatch(toogleOrderModal())
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          type="text"
          setVal={setValues}
          val={values}
        />
        {errors.name && <p>*{errors.name}</p>}
        <Input
          label="Email"
          name="email"
          type="email"
          setVal={setValues}
          val={values}
        />
        {errors.email && <p>*{errors.email}</p>}
        <input type="submit" value="Submit" />
      </form>
      <div onClick={() => dispatch(toogleForm())}>&times;</div>
      <OrderModal/>
    </div>
  );
}

export default Form;
