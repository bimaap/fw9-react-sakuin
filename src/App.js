import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='transfer/:id' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App