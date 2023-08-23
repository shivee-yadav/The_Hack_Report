
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} /> */}
      </Routes>
      </div>
  );
}

export default App;
