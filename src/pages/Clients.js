import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Add from './client/Add'
import All from './client/All'
import Error from './Error'
import '../style.css'

function Clients(){
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <div>
        <p>This is the Clients Page</p>
    </div>
      <nav>
        <NavLink end to="add" className={({ isActive }) => isActive ? activeClassName : undefined}>Dodaj klienta</NavLink>
        <NavLink to="all" className={({ isActive }) => isActive ? activeClassName : undefined}>Wszyscy klienci</NavLink>
      </nav>
      <Routes>
        <Route path="add" element={<Add/>}/>
        <Route path="all" element={<All/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default Clients;