// Header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'; // Importa o ícone de logout
import logo from '../../assets/logo.png'; // Substitua com o caminho real para seu logo
import { HeaderContainer, LogoContainer, Logo, Text, LogoutButton } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();

  // Função para lidar com o logout
  const handleLogout = () => {
    navigate('/'); // Redireciona para a página Main
  };

  return (
    <HeaderContainer>
      {/* Logo e texto do lado esquerdo */}
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
        <Text>Tech Solidária</Text> {/* Texto ao lado da logo */}
      </LogoContainer>
      {/* Botão de Logout do lado direito */}
      <LogoutButton onClick={handleLogout}>
        <FaSignOutAlt /> {/* Ícone de logout */}
      </LogoutButton>
    </HeaderContainer>
  );
};

export default Header;
