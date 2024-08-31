// styles.ts
import styled from 'styled-components';

// Função para determinar a cor de fundo com base no count
const getBackgroundColor = (count: number) => {
  if (count < 10) return 'red';
  if (count <= 30) return 'orange';
  return 'green';
};

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #ffff;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #ffff;
  margin-bottom: 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Card = styled.div<{ count: number }>`
  border: 1px solid #ffff;
  text-align: center;
  width: 200px;
  height: 200px;
  border-radius: 50%; /* Garante que o card seja exatamente redondo */
  display: flex;
  flex-direction: column; /* Alinha imagem e texto verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  overflow: hidden; /* Garante que o conteúdo se encaixe dentro do card redondo */
  padding: 0; /* Remove o padding para ajustar o conteúdo interno */
  background-color: ${({ count }) => getBackgroundColor(count)}; /* Define a cor de fundo dinamicamente */
`;

export const CardImage = styled.img`
  width: 80px; /* Define um tamanho fixo para a imagem */
  height: 80px; /* Define um tamanho fixo para a imagem */
  object-fit: contain; /* Mantém a proporção da imagem */
  filter: brightness(0) invert(1); /* Aplica o filtro para deixar a imagem branca */
`;

export const CardTitle = styled.h3`
  font-size: 15px;
  color: #ffff;
  margin-top: 5px;
  margin-bottom: 0; /* Remove a margem inferior padrão */
`;
