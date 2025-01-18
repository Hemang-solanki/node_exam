import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import CreateBlog from '../Pages/CreateBlog'
import SingleBlog from '../Pages/SingleBlog'
import PrivateRoute from '../Pages/PrivateRoute'
import Myblogs from '../Pages/Myblogs'
import EditBlog from '../Pages/EditBlog'
import Admin from '../Pages/Admin'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/createblog' element={<PrivateRoute><CreateBlog/></PrivateRoute>}></Route>
        <Route path='/allblogs/:id' element={<PrivateRoute><SingleBlog/></PrivateRoute>}></Route>
        <Route path='/editblog/:id' element={<PrivateRoute><EditBlog/></PrivateRoute>}></Route>
        <Route path='/myblogs' element={<PrivateRoute><Myblogs/></PrivateRoute>}></Route>
    </Routes>
    </>
  )
}

export default MainRoutes