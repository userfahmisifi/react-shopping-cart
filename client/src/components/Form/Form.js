import React, { useState } from 'react'
import '../../css/Form/Form.css'
import Input from '../Input/Input'

function Form({setShowForm}) {

  const [val,setVal]=useState({})
  


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(val)
  }
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <Input label='Name' name='name' type='text' setVal={setVal} val={val}/>
        <Input label='Email' name='email' type='email'setVal={setVal} val={val}/>
        <input type='submit'value='Submit'/>
      </form>
      <div onClick={()=>setShowForm(false)}>&times;</div>
    </div>
  )
}

export default Form
