import React from "react";

function Input({ label, name, type, setVal, val }) {

 
  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <label>{label}</label>
      <input type={type}  name={name} onChange={handleChange} />
    </div>
  );
}

export default Input;
