import './App.css';
import React, {useState} from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from '../src/Cadastro/Cadastro'
import Home from '../src/Home/Home'
function App() {
  return(
     <Router>
     <Routes>
       <Route path='/cadastro' element={<Cadastro/>}/>
       <Route path='/' element={<Home/>}/>
     </Routes>
   </Router>
   
  );
}

export default App;
