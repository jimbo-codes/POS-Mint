import '../App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';

function App() {
return (
<>
<div className='sticky top-0 z-50'>
      <NavBar className=''/>
      <div className='z-50'>
  </div>
  </div>
    <Routes>  
        <Route path="/" element={<Home/>}/>
      </Routes>
  </>
);
}
export default App;
