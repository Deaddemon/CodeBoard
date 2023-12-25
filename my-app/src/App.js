import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Canvas from './whiteboard/canvas';
import Home from './home/home';

function App() {
  return (
   
    
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/canvas" element={<Canvas/>} />
        </Routes>
        </BrowserRouter>
        
   
  
 
  );
}

export default App;
