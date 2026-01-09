import React from 'react'

const Side = () => {
  return (
    <div className='h-20 flex justify-between items-center  w-full bg-blue-400'>
        <h2 className=' text-2xl font-semibold'>Devashish Graphics</h2>
        <div className='flex gap-10 text-2xl'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Store</a>
          <a href="">Products</a>
        </div>
    </div>
  )
}

export default Side