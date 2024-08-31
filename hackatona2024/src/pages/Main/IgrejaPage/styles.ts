// styles.ts
import styled from 'styled-components';

// Função para determinar a cor de fundo com base no count
const getBackgroundColor = (count: number) => {
  if (count < 10) return '#F06263'; // Soft Red
  if (count <= 30) return '#FFD180'; // Soft Orange
  return '#81C784'; // Soft Green
};

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #2e312f;
  margin-bottom: 7px;
  margin-top: 90px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #2e312f;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const CardDescription = styled.div`
  position: absolute;
  top: 100%; /* Posiciona a descrição abaixo do card */
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff; /* Fundo branco */
  color: #000; /* Texto preto */
  padding: 10px;
  border-radius: 5px;
  opacity: 0; /* Esconde a descrição inicialmente */
  transition: opacity 0.3s ease;
  text-align: left; /* Alinha o texto à esquerda */
  width: 180px; /* Define uma largura fixa */
  margin-top: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma leve sombra */
  pointer-events: none; /* Ignora eventos de mouse para a descrição */
`;

export const CardDescriptionTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 0;
`;

export const CardDescriptionBody = styled.p`
  font-size: 12px;
  margin: 0;
  line-height: 1.4;
`;

export const Card = styled.div<{ count: number }>`
  position: relative;
  border: 1px solid #9A9A9A;
  text-align: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: visible; /* Permite que o conteúdo, como a descrição, se expanda fora do card */
  padding: 0;
  background-color: ${({ count }) => getBackgroundColor(count)};
  cursor: pointer; /* Altera o cursor ao passar sobre o card */

  &:hover ${CardDescription} {
    opacity: 1; /* Mostrar a descrição ao passar o mouse sobre o card */
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CardImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: brightness(0) invert(1);
`;

export const CardTitle = styled.h3`
  font-size: 15px;
  color: #ffff;
  margin-top: 5px;
  margin-bottom: 0;
`;

export const BackButton = styled.button`
  position: fixed;
  top: 90px; /* Posiciona o botão a 50px do topo da página */
  left: 30px; /* Posiciona o botão a 30px da esquerda da página */
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #2e312f;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1d1f1d; /* Cor de fundo ao passar o mouse */
  }

  svg {
    font-size: 18px;
  }
`;
