import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import './style.css';
import Office from './pages/Office';
import Error from './pages/Error';
import Add from './pages/client/Add';
import All from './pages/client/All';
function App() {
    return (
      <BrowserRouter>
      <div>Gabinet</div>
      <div style={{display:'flex'}}>
    <Menu menuButton={<MenuButton>Klienci</MenuButton>}>
      <MenuItem href="/clients/add" >Nowy klient</MenuItem>
      <MenuItem href="/clients/all">Lista klientów</MenuItem>
      <MenuItem>Close Window</MenuItem>
    </Menu>    
    <Menu menuButton={<MenuButton>Wizyty</MenuButton>}>
      <MenuItem href="/visits/add" >Nowa wizyta</MenuItem>
      <MenuItem href="/visits/all">Lista wizyt</MenuItem>
      <MenuItem>Close Window</MenuItem>
    </Menu>    
    <Menu menuButton={<MenuButton>Klienci</MenuButton>}>
      <MenuItem href="/clients/add" >Nowy klient</MenuItem>
      <MenuItem href="/clients/all">Lista klientów</MenuItem>
      <MenuItem>Close Window</MenuItem>
    </Menu>
    <a href="/"><button>Strona główna</button></a>
    </div>
      <Routes>
        <Route path="/" element={<Office/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="clients/add" element={<Add/>}/>
        <Route path="clients/all" element={<All/>}/>
      </Routes>
      </BrowserRouter>
    );
}

export default App;