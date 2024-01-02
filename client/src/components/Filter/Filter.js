import React from 'react'
import '../../css/Filter/Filter.css'


function Filter(props) {

    const filterProducts=(e)=>{
        
        const {data,setProducts}=props
        
        if(e.target.value !== 'All'){
        
            const filtredProducts=data.filter(p=>p.sizes.includes(e.target.value))
            return setProducts(filtredProducts)
            
        }
        return setProducts(data)
        
    }


    return (
        <div className="products-filter">
            <h2 className='filter-title'>Filter</h2>
            <div className='filter-content'>
                <p>Number of Products:4 Products</p>
                <div className='content-select'>
                   <p>Filter</p>
                    <select className='select' onChange={filterProducts}>
                        <option>All</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
                <div className='content-select'>
                   <p>Order</p>
                    <select className='select'>
                        <option>Latest</option>
                        <option>Highest</option>
                        <option>Lowest</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Filter
