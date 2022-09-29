import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
function App() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink to="" className={({ isActive }) => isActive ? activeClassName : undefined}>Home</NavLink>
        <NavLink to="about" className={({ isActive }) => isActive ? activeClassName : undefined}>About</NavLink>
        <NavLink to="contact" className={({ isActive }) => isActive ? activeClassName : undefined}>Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;