import React from 'react';
import logo from '../../assets/logo.png'; // Substitua com o caminho real para seu logo

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      {/* Logo do lado esquerdo */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>

    </header>
  );
};

// Estilos inline para o componente
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'left',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  } as React.CSSProperties,
  logoContainer: {
  } as React.CSSProperties,
  logo: {
    height: '40px',
  } as React.CSSProperties,
  nav: {
    flex: '2 0 auto',
    textAlign: 'right',
  } as React.CSSProperties,
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '20px',
  } as React.CSSProperties,
  navItem: {
    margin: '0 10px',
  } as React.CSSProperties,
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  } as React.CSSProperties,
};

export default Header;
