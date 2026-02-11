import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './Page/Loginpage';
import Errorpage from './Page/errorpage';
import Productlistpage from './Page/productlistpage';
import Productdetailspage from './Page/Productdetailspage';
import Profilepage from './components/Profilepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/loginpage' element={<Loginpage/>}></Route>            
        <Route path='/errorpage' element={<Errorpage/>}></Route>            
        <Route path='/' element={<Profilepage/>}>
          <Route path='/productlistpage' element={<Productlistpage/>}></Route> 
          <Route path='productdetailspage/:id' element={<Productdetailspage/>}></Route>        
        </Route>            


      </Routes>
    </BrowserRouter>
      

  </React.StrictMode>
);