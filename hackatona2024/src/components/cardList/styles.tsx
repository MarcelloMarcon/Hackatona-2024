// CardStyles.ts
import styled from 'styled-components';

// Função para determinar a cor de fundo com base no count
const getBackgroundColor = (count: number) => {
  if (count < 10) return 'rgb(199 50 51)'; // Soft Red
  if (count <= 30) return 'rgb(243 178 62)'; // Soft Orange
  return 'rgb(93 171 96)'; // Soft Green
};

// Mover a declaração de CardDescription antes da declaração de Card
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
  width: 140px; /* Reduz a largura em telas menores */
  margin-top: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma leve sombra */
  pointer-events: none; /* Ignora eventos de mouse para a descrição */

  @media (max-width: 768px) {
    width: 100px; /* Ajusta a largura da descrição para caber no novo tamanho do cartão */
    font-size: 10px; /* Reduz a fonte em telas menores */
  }
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

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    width: 60px; /* Reduz a largura do cartão em telas menores */
    height: 60px; /* Reduz a altura do cartão em telas menores */
  }
`;

export const CardImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: brightness(0) invert(1);

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    width: 30px; /* Reduz a largura da imagem em telas menores */
    height: 30px; /* Reduz a altura da imagem em telas menores */
  }
`;

export const CardTitle = styled.h3`
  font-size: 15px;
  color: #ffff;
  margin-top: 5px;
  margin-bottom: 0;

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    font-size: 7px; /* Reduz a fonte em telas menores */
  }
`;

export const CardDescriptionTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 0;

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    font-size: 10px; /* Reduz a fonte em telas menores */
  }
`;

export const CardDescriptionBody = styled.p`
  font-size: 12px;
  margin: 0;
  line-height: 1.4;

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    font-size: 8px; /* Reduz a fonte em telas menores */
  }
`;
