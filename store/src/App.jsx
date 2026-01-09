import React from 'react'
import Side from './components/Side'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Store from './components/Store'
const App = () => {
  return (
    <div className=''>
        <Main/>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/about' element={<About/> }/>
          <Route path='/product' element={<Products/> }/>
          <Route path='/store' element={<Store/> }/>
        </Routes>
    </div>
  )
}

export default App