import React from 'react'

function Product({ setIsOpen, setProduct, product, setProductsInCart, productsInCart, totalPrice, setTotalPrice}) {

    const openModal = () => {
        setIsOpen(true)
        setProduct(product)
    }

    const addToCart=(product)=>{
        const index=productsInCart.findIndex(p=>p.id===product.id)

        const isProductExist=index===-1

        if(isProductExist){
        productsInCart.push({...product,qty:1})
        }else{
            productsInCart[index].qty+=1
        }

        setProductsInCart([...productsInCart])
        setTotalPrice(totalPrice+product.price)
    }

    return (
        <div className="item">
            <img src={product.imageUrl} alt={product.title} onClick={() => openModal()} />
            <div className="item-info">
                {product.title}
                <span className="info-price">${product.price}</span>
            </div>
            <button className="item-btn" onClick={() => {addToCart(product)
               
               
               
               
               
               //if (productsInCart.map(product => product.id).includes(product.id)) {
                    //productsInCart.find(p=>p.id===product.id).qty+=1
                    //setProductsInCart([...productsInCart])

                //} else {
                    //setProductsInCart([...productsInCart, {...product,qty:1}])
                    
                //}
                //setTotalPrice(totalPrice + product.price)
            }}> Add To Cart</button>

        </div>
    )
}

export default Product
