import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './style.css';
import Office from './pages/Office';
import Clients from './pages/Clients';
import Visits from './pages/Visits';
import Error from './pages/Error';
function App() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <header>
        <h1>Gabinet</h1>
      </header>
      <nav>
        <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName : undefined}>Gabinet</NavLink>
        <NavLink to="clients" className={({ isActive }) => isActive ? activeClassName : undefined}>Klienci</NavLink>
        <NavLink to="visits" className={({ isActive }) => isActive ? activeClassName : undefined}>Wizyty</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Office/>}/>
        <Route path="clients" element={<Clients/>}/>
        <Route path="visits" element={<Visits/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;