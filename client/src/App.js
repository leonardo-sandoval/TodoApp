import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import We from './pages/we'; // Asegúrate de que la ruta de importación sea correcta y el nombre del componente sea "We"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/landing' element={<>
          <Navbar />
          <Landing />
        </>} />
        {/* Agregamos la ruta para la página "We" */}
        <Route path='/we' element={<>
          <Navbar />
          <We />
        </>} />
      </Routes>
    </>
  )
}

export default App;

