import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './component/header'; // Asegúrate de que la ruta sea correcta
import Dashboard from './component/Dashboard'; // Asegúrate de que la ruta sea correcta
import Login from './component/login'; // Asegúrate de que la ruta sea correcta
import SalesSection from './component/SalesSection'; // Asegúrate de que la ruta sea correcta
import NewSale from './component/NewSaleForm'; // Asegúrate de que este componente existe
import './App.css'; // Asegúrate de que la ruta sea correcta

function App() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación

  const handleLogin = (usuario) => {
    setIsLoggedIn(true); // Cambiar estado a autenticado
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" /> // Redirige al dashboard si está autenticado
            ) : (
              <Login onLogin={handleLogin} />
            )
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isLoggedIn ? (
              <>
                <Header username="UsuarioEjemplo" /> {/* Muestra el Header solo si está autenticado */}
                <Dashboard />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route 
          path="/ventas" 
          element={
            isLoggedIn ? (
              <>
                <Header username="UsuarioEjemplo" />
                <SalesSection />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route 
          path="/nueva-venta" 
          element={
            isLoggedIn ? (
              <>
                <Header username="UsuarioEjemplo" />
                <NewSale /> {/* Componente para manejar la nueva venta */}
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
