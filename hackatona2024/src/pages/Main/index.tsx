// DonationOrVolunteerPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Button, ButtonContainer, Container, Input, Logo, Title, Text } from './styles';

const Main = () => {
  const [cep, setCep] = useState<string>(''); // Tipando explicitamente como string
  const navigate = useNavigate();

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove qualquer caractere que não seja número
    if (value.length <= 8) {
      setCep(value.replace(/(\d{5})(\d)/, '$1-$2')); // Adiciona a máscara para o CEP
    }
  };

  // Função para validar o formato do CEP
  const isValidCep = (cep: string) => {
    const cepRegex = /^[0-9]{5}-[0-9]{3}$/; // Ajusta para o formato xxxxx-xxx
    return cepRegex.test(cep);
  };

  // Função para verificar se o CEP existe usando uma API externa
  const checkCepExists = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        return false; // CEP não existe
      }
      return true; // CEP existe
    } catch (error) {
      console.error("Erro ao verificar o CEP:", error);
      alert("Erro ao verificar o CEP. Tente novamente.");
      return false;
    }
  };

  // Função para obter coordenadas a partir do CEP
  const fetchCoordinates = async (cep: string) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${cep},BR`);
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        return { lat: parseFloat(lat), lon: parseFloat(lon) };
      } else {
        alert("CEP não encontrado. Tente novamente.");
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar coordenadas:", error);
      alert("Erro ao buscar coordenadas. Tente novamente.");
      return null;
    }
  };

  // Função para navegação interna
  const handleNavigation = async () => {
    if (cep.trim() === '') {
      window.alert('Por favor, insira o seu CEP antes de continuar.');
    } else if (!isValidCep(cep)) {
      window.alert('Por favor, insira um CEP válido no formato XXXXX-XXX.');
    } else {
      const cepExists = await checkCepExists(cep);
      if (!cepExists) {
        window.alert('CEP não encontrado. Tente novamente.');
      } else {
        const coordinates = await fetchCoordinates(cep);
        if (coordinates) {
          navigate('/initial', { state: { userCoordinates: coordinates } }); // Passando as coordenadas para a próxima página
        }
      }
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
        maxLength={9} // Limita o tamanho do input para o formato xxxxx-xxx
      />
      <ButtonContainer>
        <Button onClick={handleCep}>Não sei meu CEP</Button>
        <Button onClick={handleNavigation}>Continuar</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Main;
