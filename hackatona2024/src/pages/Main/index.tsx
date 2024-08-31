// DonationOrVolunteerPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Button, ButtonContainer, Container, Input, Logo, Title, Text } from './styles';

const Main = () => {
  const [cep, setCep] = useState('');
  const navigate = useNavigate();

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  // Função para navegação interna
  const handleNavigation = () => {
    if (cep.trim() === '') {
      window.alert('Por favor, insira o seu CEP antes de continuar.');
    } else {
      navigate('/initial');
    }
  };

  // Função para o botão "Não sei meu CEP" abrir uma nova guia
  const handleCep = () => {
    window.open('https://buscacep.com.br/#google_vignette', '_blank');
  };

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <Text>Tech Solidária</Text>
      <Title>Insira seu CEP</Title>
      <Input
        type="text"
        value={cep}
        onChange={handleCepChange}
        placeholder="Digite seu CEP"
      />
      <ButtonContainer>
        <Button onClick={handleCep}>Não sei meu CEP</Button>
        <Button onClick={handleNavigation}>Continuar</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Main;
