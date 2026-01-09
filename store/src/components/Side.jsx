import React from 'react'
import { Link } from 'react-router-dom'

const Side = () => {
  return (
    <div className='h-30   flex justify-between items-center  justify-center   w-full bg-blue-400'>
        <h2 className=' text-2xl font-semibold w-[20%]'>Sneakers Store</h2>
        <div className='flex gap-10 text-2xl w-[70%] justify-end'>
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          <Link to="/product">Products</Link>
          <Link to="/men">Men'ware </Link>
          <Link to="/women">Women'ware </Link>
        </div>
    </div>
  )
}

export default Side