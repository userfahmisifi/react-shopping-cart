import React, { useState } from "react";
import { useSelector} from "react-redux";
import axios from 'axios'
import "../../css/Form/Form.css";
import Input from "../Input/Input";
import OrderModal from "../OrderModal/OrderModal";

function Form({ setShowForm }) {
  const cartItems=useSelector(state=>state.cart)
  const [values, setValues] = useState({ name: "", email: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: ""});
  const [order,setOrder]=useState({items:[]})


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
      setOrder(data)
      setIsOpen(true)
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
      <div onClick={() => setShowForm(false)}>&times;</div>
      <OrderModal isOpen={isOpen} setIsOpen={setIsOpen} order={order}/>
    </div>
  );
}

export default Form;
