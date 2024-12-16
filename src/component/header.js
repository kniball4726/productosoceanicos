import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // Importa Link para navegación
import Logo from '../imagenes/LOGO.png';
import '../../src/headers.css';

const Header = ({ username }) => {
  const handleLogout = () => {
    console.log('Cerrar sesión');
  };

  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }} />
          <div className="user-info">
            <span className="username">{username}</span>
            <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" anchor="left">
        <div className="drawer-container">
          <div className="logo-1" style={{ padding: '16px', textAlign: 'center' }}>
            <img src={Logo} alt="Logo" style={{ height: '60px' }} />
          </div>
          <List>
            {['Inicio', 'Ingresos', 'Otros Ingresos', 'Ventas', 'Egresos', 'Base de Datos', 'Informes', 'Contabilidad', 'Facturación'].map((text) => (
              <ListItem button key={text}>
                <ListItemText
                  primary={
                    <Link 
                      to={text === 'Inicio' ? '/dashboard' : (text === 'Ventas' ? '/ventas' : `#${text.toLowerCase().replace(/\s+/g, '-')}`)} 
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {text}
                    </Link>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
