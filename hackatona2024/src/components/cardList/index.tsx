// CardList.tsx
import React from 'react';
import { Card, CardImage, CardTitle, CardDescription, CardDescriptionTitle, CardDescriptionBody } from './styles';

interface CardProps {
  imageUrl: string;
  title: string;
  count: number;
}

interface CardListProps {
  cards: CardProps[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
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
          {card.title === 'Voluntários' && (
            <CardDescription>
              <CardDescriptionTitle>Não precisamos de voluntários nesse abrigo.</CardDescriptionTitle>
              <CardDescriptionBody>
              </CardDescriptionBody>
            </CardDescription>
          )}
          {card.title === 'Águas' && (
            <CardDescription>
              <CardDescriptionTitle>Doação de Água</CardDescriptionTitle>
              <CardDescriptionBody>
                Garrafas de água mineral<br/>
                Água de 500 ml a 1,5 litros<br/>
                Água com prazo de validade adequado<br/>
                Garrafas lacradas e sem danos<br/>
              </CardDescriptionBody>
            </CardDescription>
          )}
        </Card>
      ))}
    </div>
  );
};

export default CardList;
