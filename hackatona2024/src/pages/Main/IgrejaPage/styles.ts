// PageStyles.ts
import styled from 'styled-components';

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

export const BackButton = styled.button`
  position: fixed;
  top: 107px; /* Posiciona o botão a 107px do topo da página */
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

// Novos componentes estilizados para endereço e telefone com cor preta
export const AddressText = styled.p`
  font-size: 1rem;
  color: #000; /* Define a cor do texto para preto */
  margin: 5px 0;
`;

export const PhoneText = styled.p`
  font-size: 1rem;
  color: #000; /* Define a cor do texto para preto */
  margin: 5px 0;
`;
