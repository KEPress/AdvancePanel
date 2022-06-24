import './App.css';
import './styles/darkmode.scss'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Single from './pages/single/single'
import New from './pages/new/new'
import List from './pages/list/list'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkContext'
import { productData, userData } from './formData'
import { Routes, Route } from 'react-router-dom'

export default function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={ darkMode ? 'App dark':'App' }>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='users'> {/** Nested Route Path **/}
          <Route index element={<List />} /> 
          <Route path=':userID' element={<Single />} />
          <Route path='new' element={<New inputs = { userData } title='Add New User'/>} />
        </Route>
        <Route path='products'> {/** Nested Route Path **/}
          <Route index element={<List />} /> 
          <Route path=':productID' element={<Single />} />
          <Route path='new' element={<New inputs = { productData } title='Add New Product'/>} />
        </Route>
       </Routes>
      
    </div>
  )
}

