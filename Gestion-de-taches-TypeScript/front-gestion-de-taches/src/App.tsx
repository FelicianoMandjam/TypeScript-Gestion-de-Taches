import { useState } from 'react'
import Home from './pages/Home/Home'
import Sign from './pages/Auth/Sign'
import SignUp from './pages/Auth/SignUp'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Header from "./utils/componants/Header.jsx"
import AddTasks from "./pages/CRUD/AddTask.js"
import AddCategory from './pages/CRUD/AddCategory.js'

import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index path='/home' element={<Home />}/>
        <Route path='/' element={<Sign />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/addTask' element={<AddTasks />}/>
        <Route path='/addCategory' element={<AddCategory />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
