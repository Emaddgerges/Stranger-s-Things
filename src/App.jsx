import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Nav from './Navbar'
import Login from './Login'
import './HomePage.css'
import Render from './Render';
import Register from './Register';


function App() {




  return (
    <>

   
  
   <Routes>

    
    <Route path='/' element={ <Render />} />
    
 
    <Route path='/Login' element={<Login />} />
    <Route path='/Register' element={<Register />} />
    </Routes>
  
{/* 
<Login />
 <Nav />
*/}
  
</>
  )
}

export default App;
