import React from 'react';
import './App.css';
import MenuTemas from './components/MenuTemas';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaTema from './components/PaginaTema';
import PaginaTablaPreguntas from './components/PaginaTablaPreguntas';
import { DebateProvider } from './DebateContext';
import PaginaInicioSesion from './components/PaginaInicioSesion';


function App() {
  const temas = [
    {nombre: 'Fortnite', path:'/fortnite'},
    {nombre: 'Counter Strike 2', path:'/cs2'},
    {nombre: 'Futbol', path:'/futbol'}
  ]

  return (
    <Router>
      <div className="App">
        <h1>Seleccione un tema:</h1>
        <Routes>
          <Route path="/" element={<MenuTemas temas={temas} />} />
          <Route path="/fortnite" element={<PaginaTablaPreguntas/>} />
          <Route path="/cs2" element={<PaginaTablaPreguntas/>} />
          <Route path="/futbol" element={<PaginaTablaPreguntas/>} />
        </Routes>
      </div>
    </Router>
  );
}

const AppWithDebateProvider = () => {
  return(
    <DebateProvider>
      <App/>
    </DebateProvider>
  )
}

export default AppWithDebateProvider;
