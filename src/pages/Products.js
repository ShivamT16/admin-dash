import React, { useState } from 'react'
import Data from "../data.json"
import "./product.css"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Navbar } from './Navbar';

export const Products = () => {
    const [show, setShow] = useState(false)
    const [page, setPage] = useState(1)

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
            <p style={{marginLeft: "3rem"}} >Created at</p>
        </div>
        { Data.data.length > 1 &&
            Data.data.slice(page * 5 - 5, page * 5).map((item) => 
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
        <div className='product-footer'>
         <p className='footer-para'>Showing <span className='span'>{page * 5 - 4}-{page * 5}</span> of <span className='span'>{Data.data.length}</span> products </p>
         <p>
         { <button className='btn' onClick={() => setPage( page - 1)} disabled={ page > 1 ? false : true} > {"<"} Prev </button> }
         { <button className='btn' onClick={() => setPage( page + 1)} disabled={  page < Math.floor(Data.data.length / 5) ? false : true} >Next {">"}</button> }
         </p>
         </div> 

    </div>
    </div>
  )
}
