import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Test from './pages/Test'
import ContentDashboard from './components/ContentDashboard'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
      <Route path='/dashboard/transfer/:id' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
      <Route path='/test' element={<Test />}></Route>
      <Route path='/content' element={<ContentDashboard />}></Route>
    </Routes>
  )
}

export default App