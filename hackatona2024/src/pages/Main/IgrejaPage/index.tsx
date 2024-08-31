// IgrejaPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import colher from '../../../assets/colher.svg';
import guardaroupa from '../../../assets/guarda-roupa.svg';
import higiene from '../../../assets/artigos-de-higiene-pessoal.svg';
import profile from '../../../assets/profile_16509786.svg';
import water from '../../../assets/soft-drinks_4135327.svg';
import { Container, Title, Description, CardsContainer, Card, CardImage, CardTitle } from './styles';

// Definindo uma interface para as props
interface IgrejaPageProps {
  title: string;
  description: string;
  counts: number[]; // Adicionando a propriedade counts
}

// Interface para os dados do card
interface CardProps {
  imageUrl: string;
  title: string;
  count: number; // Adicionando a propriedade count
}

export function IgrejaPage() {
  const location = useLocation();
  const { title, description, counts } = (location.state as IgrejaPageProps) || { title: 'Default Title', description: 'Default Description', counts: [0, 0, 0, 0, 0] };

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
      <Title>{title}</Title>
      <Description>{description}</Description>
      
      {/* Renderizando os cards */}
      <CardsContainer>
        {cards.map((card, index) => (
          <Card key={index} count={card.count}>
            <CardImage src={card.imageUrl} alt={card.title} />
            <CardTitle>{card.title}</CardTitle>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
}

export default IgrejaPage;
