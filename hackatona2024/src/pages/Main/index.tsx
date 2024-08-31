// DonationOrVolunteerPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Input, ButtonContainer, Button, Container } from './styles';

const Main = () => {
  const [cep, setCep] = useState('');
  const navigate = useNavigate(); // Adicionando o hook useNavigate

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  // Funções para navegação
  const handleNavigation = () => {
    navigate('/initial');
  };

  return (
    <Container>
      <Title>Insira seu CEP</Title>
      <Input
        type="text"
        value={cep}
        onChange={handleCepChange}
        placeholder="Digite seu CEP"
      />
      <ButtonContainer>
        <Button onClick={handleNavigation}>Quero fazer doação</Button>
        <Button onClick={handleNavigation}>Quero voluntariar</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Main;
