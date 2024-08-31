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
  padding: 8px;
  border-radius: 5px;
  opacity: 0; /* Esconde a descrição inicialmente */
  transition: opacity 0.3s ease;
  text-align: left; /* Alinha o texto à esquerda */
  width: 100px; /* Reduz a largura para caber no novo tamanho do cartão */
  margin-top: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma leve sombra */
  pointer-events: none; /* Ignora eventos de mouse para a descrição */

  @media (max-width: 768px) {
    width: 80px; /* Ajusta a largura da descrição para caber no novo tamanho do cartão */
    font-size: 8px; /* Reduz a fonte em telas menores */
  }
`;

export const Card = styled.div<{ count: number }>`
  position: relative;
  border: 1px solid #9A9A9A;
  text-align: center;
  width: 80px; /* Reduz a largura do cartão */
  height: 80px; /* Reduz a altura do cartão */
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
    width: 60px; /* Reduz ainda mais a largura do cartão em telas menores */
    height: 60px; /* Reduz ainda mais a altura do cartão em telas menores */
  }
`;

export const CardImage = styled.img`
  width: 50px; /* Reduz a largura da imagem */
  height: 50px; /* Reduz a altura da imagem */
  object-fit: contain;
  filter: brightness(0) invert(1);

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    width: 40px; /* Reduz ainda mais a largura da imagem em telas menores */
    height: 40px; /* Reduz ainda mais a altura da imagem em telas menores */
  }
`;

export const CardTitle = styled.h3`
  font-size: 12px; /* Reduz a fonte */
  color: #ffff;
  margin-top: 3px;
  margin-bottom: 0;

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    font-size: 7px; /* Reduz ainda mais a fonte em telas menores */
  }
`;

export const CardDescriptionTitle = styled.h4`
  font-size: 12px; /* Reduz a fonte */
  font-weight: bold;
  margin-bottom: 3px;
  margin-top: 0;

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    font-size: 7px; /* Reduz ainda mais a fonte em telas menores */
  }
`;

export const CardDescriptionBody = styled.p`
  font-size: 10px; /* Reduz a fonte */
  margin: 0;
  line-height: 1.2; /* Ajusta a altura da linha para caber melhor em telas menores */

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    font-size: 6px; /* Reduz ainda mais a fonte em telas menores */
  }
`;
