import React from 'react'
import Modal from 'react-modal'

function OrderModal({isOpen,setIsOpen,order}) {
    console.log(order.items)
  return (
    <Modal isOpen={isOpen} style={{ content: {padding:40}}}>
    <span style={{position:'absolute',right:10,top:10,cursor:'pointer',background:'red',color:'#fff'}} onClick={()=>setIsOpen(false)}>&times;</span>
    <h3 style={{background:'#0a670a',color:'#fff',textAlign:'center',padding:'10px 0',}}>order Done Successfuly</h3>
    <div style={{display:'flex',justifyContent:'space-between',border:'1px solid #ccc',margin:'10px 0',padding:'10px 5px'}}>
      <span>Name</span>
      <span>{order.name}</span>
    </div>
    <div style={{display:'flex',justifyContent:'space-between',border:'1px solid #ccc',margin:'10px 0',padding:'10px 5px'}}>
      <span>Email</span>
      <span>{order.email}</span>
    </div>
    <div style={{display:'flex',justifyContent:'space-between',border:'1px solid #ccc',margin:'10px 0',padding:'10px 5px'}}>
      <span>Total</span>
      <span>{order.items.reduce((acc,item)=>acc+(item.qty)*(item.product.price),0)}</span>
    </div>
    <div style={{display:'flex',justifyContent:'space-between',border:'1px solid #ccc',margin:'10px 0',padding:'10px 5px'}}>
      <span>selected Items</span>
      <span>{order.items.map(item=><p>{item.product.title}</p>)}</span>
    </div>
</Modal>
  )
}

export default OrderModal

