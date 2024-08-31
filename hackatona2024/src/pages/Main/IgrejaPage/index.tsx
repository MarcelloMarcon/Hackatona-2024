// IgrejaPage.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import colher from '../../../assets/colher.svg';
import guardaroupa from '../../../assets/guarda-roupa.svg';
import higiene from '../../../assets/artigos-de-higiene-pessoal.svg';
import profile from '../../../assets/profile_16509786.svg';
import water from '../../../assets/soft-drinks_4135327.svg';
import { Container, Title, Description, BackButton, AddressText, PhoneText } from './styles';
import Header from '../../../components/header';
import CardList from '../../../components/cardList';

// Atualizando a interface para incluir endereço e telefone
interface IgrejaPageProps {
  title: string;
  description: string;
  counts: number[];
  address: string;  // Novo campo para endereço
  phone: string;    // Novo campo para número de celular
}

// Interface para os dados do card
interface CardProps {
  imageUrl: string;
  title: string;
  count: number;
}

export function IgrejaPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, description, counts, address, phone } = (location.state as IgrejaPageProps) || {
    title: 'Default Title',
    description: 'Default Description',
    counts: [0, 0, 0, 0, 0],
    address: '',
    phone: '',
  };

  // Exemplo de dados dos cards com a propriedade count
  const cards: CardProps[] = [
    { imageUrl: colher, title: 'Alimentos', count: counts[0] },
    { imageUrl: guardaroupa, title: 'Roupas', count: counts[1] },
    { imageUrl: higiene, title: 'Materiais de Higiene', count: counts[2] },
    { imageUrl: profile, title: 'Voluntários', count: counts[3] },
    { imageUrl: water, title: 'Águas', count: counts[4] }
  ];

  return (
    <Container>
      <Header />
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Voltar
      </BackButton>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <AddressText>Endereço: {address}</AddressText>
      <PhoneText>Telefone: {phone}</PhoneText>
      
      {/* Usando o novo componente CardList */}
      <CardList cards={cards} />
    </Container>
  );
}

export default IgrejaPage;
