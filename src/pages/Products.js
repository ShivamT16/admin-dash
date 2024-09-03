import React, { useState } from 'react'
import Data from "../data.json"
import "./product.css"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Navbar } from './Navbar';

export const Products = () => {
    const [show, setShow] = useState(false)
  return (
    <div><Navbar />
    <div className='products-main' >
        <p className='product-heading'> Products </p>
        <p className='product-para' > Manage your products and view their sales performance </p>

        <div className='product-nav' >
            <p style={{marginLeft: "6rem"}} >Name</p>
            <p style={{marginLeft: "17rem"}} >Status</p>
            <p style={{marginLeft: "6rem"}} >Price</p>
            <p style={{marginLeft: "5rem"}} >Total Sales</p>
            <p style={{marginLeft: "2.8rem"}} >Created at</p>
        </div>
        {
            Data.data.map((item) => 
                <div className='products-card' key={item._id} >
                    <img className='prdouct-img' src={item.productImage} alt="product img" />
                    <p className='product-name'> {item.productName} </p>
                    <p className='product-status' > {item.status} </p>
                    <p className='product-price' > {item.price} </p>
                    <p className='product-sales'> {item.totalSales} </p>
                    <p className='product-create'> {item.createdAt} </p>
                    <p className='product-action' onClick={() => setShow(!show)} > <HiOutlineDotsHorizontal /> </p>
                    { show &&
                       <div className='actions'>
                       <p style={{fontWeight: "500"}} >Actions</p>
                       <p>Edit</p>
                       <p>Delete</p>
                       </div>
                    }   
                    </div>
        )}
                 
    </div>
    </div>
  )
}
