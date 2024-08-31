// IgrejaPage.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import colher from '../../../assets/colher.svg';
import guardaroupa from '../../../assets/guarda-roupa.svg';
import higiene from '../../../assets/artigos-de-higiene-pessoal.svg';
import profile from '../../../assets/profile_16509786.svg';
import water from '../../../assets/soft-drinks_4135327.svg';
import { Container, Title, Description, CardsContainer, Card, CardImage, CardTitle, CardDescription, CardDescriptionTitle, CardDescriptionBody, BackButton } from './styles';
import Header from '../../../components/header';

// Definindo uma interface para as props
interface IgrejaPageProps {
  title: string;
  description: string;
  counts: number[];
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
      <Header />
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Voltar
      </BackButton>
      <Title>{title}</Title>
      <Description>{description}</Description>
      
      {/* Renderizando os cards */}
      <CardsContainer>
        {cards.map((card, index) => (
          <Card key={index} count={card.count}>
            <CardImage src={card.imageUrl} alt={card.title} />
            <CardTitle>{card.title}</CardTitle>
            {card.title === 'Alimentos' && (
              <CardDescription>
                <CardDescriptionTitle>Priorize alimentos não perecíveis</CardDescriptionTitle>
                <CardDescriptionBody>
                  Arroz<br />
                  Feijão<br />
                  Leite em pó<br />
                  Óleo<br />
                  Papinha para nenéns<br />
                  Açúcar
                </CardDescriptionBody>
              </CardDescription>
            )}
            {card.title === 'Roupas' && (
              <CardDescription>
                <CardDescriptionTitle>Doe roupa em bom estado e em diversos tamanhos</CardDescriptionTitle>
                <CardDescriptionBody>
                  Casacos e jaquetas<br />
                  Sapatos<br />
                  Acessórios (cinto, bolsas, etc)<br />
                  Calças<br />
                  Camisetas<br />
                  Roupas Infantis
                </CardDescriptionBody>
              </CardDescription>
            )}
            {card.title === 'Materiais de Higiene' && (
              <CardDescription>
                <CardDescriptionTitle>Doação não é descarte</CardDescriptionTitle>
                <CardDescriptionBody>
                  Sabonete<br />
                  Pasta de dente<br />
                  Escova de dente <br />
                  Shampoo<br />
                  Absorvente <br />
                  Desodorante<br />
                  Papel Higiênico
                </CardDescriptionBody>
              </CardDescription>
            )}
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
}

export default IgrejaPage;
