import React from 'react'
import Side from './components/Side'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Store from './components/Store'
import Men from './components/Men'
import Women from './components/Women'
import Card from './components/Card'
const App = () => {
  return (
    <div className=''>
        <Main/>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/product' element={<Products/> }/>
          <Route path='/store' element={<Store/> }/>
          <Route path='/men' element={<Men/> }/>
          <Route path='/women' element={<Women/> }/>
        </Routes>
        <Card/>
    </div>
  )
}

export default App