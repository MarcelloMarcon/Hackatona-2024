// IgrejaPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import colher from '../../../assets/colher.png';
import guardaroupa from '../../../assets/guarda-roupa.png';
import higiene from '../../../assets/artigos-de-higiene-pessoal.png';
import profile from '../../../assets/profile_16509786.png';
import water from '../../../assets/soft-drinks_4135327.png';

// Definindo uma interface para as props
interface IgrejaPageProps {
  title: string;
  description: string;
}

// Interface para os dados do card
interface CardProps {
  imageUrl: string;
  title: string;
}

export function IgrejaPage() {
  const location = useLocation();
  const { title, description } = (location.state as IgrejaPageProps) || { title: 'Default Title', description: 'Default Description' };

  // Exemplo de dados dos cards
  const cards: CardProps[] = [
    { imageUrl: colher, title: 'Alimentos' },
    { imageUrl: guardaroupa, title: 'Roupas' },
    { imageUrl: higiene, title: 'Materiais de Higiene' },
    { imageUrl: profile, title: 'Voluntários' },
    { imageUrl: water, title: 'Águas' }
  ];

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      
      {/* Renderizando os cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {cards.map((card, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '20px', textAlign: 'center' }}>
            <img src={card.imageUrl} alt={card.title} style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IgrejaPage;