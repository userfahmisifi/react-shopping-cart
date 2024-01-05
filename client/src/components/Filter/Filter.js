import React, { useState } from 'react'
import '../../css/Filter/Filter.css'


function Filter({ products, data, setProducts }) {
    const [sort,setSort]=useState('Latest')

    const filterProductsBySize = (e) => {
        setSort('Latest')
        if (e.target.value === 'All') {
            setProducts(data.sort((a,b)=>b.id-a.id))
        } else {

            setProducts(data.filter(p => p.sizes.includes(e.target.value)).sort((a,b)=>b.id-a.id))
        }


    }










    const sortProducts = (e) => {
        setSort(e.target.value)

        const items = [...products]

        setProducts(items.sort((a, b) => {
            if (e.target.value === 'Highest') {

                return b.price - a.price;
            }
            else if (e.target.value === 'Lowest') {
                return a.price - b.price;
            }
            else if (e.target.value === 'Latest') {
                return b.id - a.id;
            }



        }))
    }








    return (
        <div className="products-filter">
            <h2 className='filter-title'>Filter</h2>
            <div className='filter-content'>
                <p>Number of Products:4 Products</p>
                <div className='content-select'>
                    <p>Filter</p>
                    <select className='select' onChange={filterProductsBySize}>
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
                    <select className='select'value={sort} onChange={sortProducts}>
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
