import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import SearchReceiver from './pages/SearchReceiver'
import TransactionHistory from './pages/TransactionHistory'
import Topup from './pages/Topup'
import Profile from './pages/Profile'
import PersonalInformation from './pages/PersonalInformation'
import ChangePassword from './pages/ChangePassword'
import ChangePin from './pages/ChangePin'
import ConfirmChangePin from './pages/ConfirmChangePin'
import AddPhoneNumber from './pages/AddPhoneNumber'
import ManagePhoneNumber from './pages/ManagePhoneNumber'
import Transfer from './pages/Transfer'
import TransferDetail from './pages/TransferDetail'
import TransferSuccess from './pages/TransferSuccess'
import TransferFailed from './pages/TransferFailed'
import RegisterPin from './pages/RegisterPin'
import RegisterPinSuccess from './pages/RegisterPinSuccess'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/register/pin' element={<RegisterPin />}></Route>
      <Route path='/register/success' element={<RegisterPinSuccess />}></Route>

      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
      <Route path='/dashboard/transfer' element={<PrivateRoute><SearchReceiver /></PrivateRoute>}></Route>
      <Route path='/dashboard/transfer/:id' element={<PrivateRoute><Transfer /></PrivateRoute>}></Route>
      <Route path='/dashboard/transfer/detail/:id' element={<PrivateRoute><TransferDetail /></PrivateRoute>}></Route>
      <Route path='/dashboard/transfer/success' element={<PrivateRoute><TransferSuccess /></PrivateRoute>}></Route>
      <Route path='/dashboard/transfer/failed' element={<PrivateRoute><TransferFailed /></PrivateRoute>}></Route>
      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
      <Route path='/dashboard/topup' element={<PrivateRoute><Topup /></PrivateRoute>}></Route>
      <Route path='/dashboard/profile' element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
      <Route path='/dashboard/profile/info' element={<PrivateRoute><PersonalInformation /></PrivateRoute>}></Route>
      <Route path='/dashboard/profile/cpass' element={<PrivateRoute><ChangePassword /></PrivateRoute>}></Route>
      <Route path='/dashboard/profile/cpin' element={<PrivateRoute><ChangePin /></PrivateRoute>}></Route>
      <Route path='/dashboard/profile/cpin/confirm' element={<PrivateRoute><ConfirmChangePin /></PrivateRoute>}></Route>
      <Route path='/dashboard/profile/addphone' element={<PrivateRoute><AddPhoneNumber /></PrivateRoute>}></Route>
      <Route path='/dashboard/profile/managephone' element={<PrivateRoute><ManagePhoneNumber /></PrivateRoute>}></Route>
      <Route path='/dashboard/transaction' element={<PrivateRoute><TransactionHistory /></PrivateRoute>}></Route>
    </Routes>
  )
}

export default App