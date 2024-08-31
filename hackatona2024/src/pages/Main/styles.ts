// DonationOrVolunteerPage.styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2e312f;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #9A9A9A;
  width: 300px;
`;

export const Logo = styled.img`
  height: 160px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: #2e312f;
  color: white;

  &:hover {
    background-color: #1d1f1d; /* Cor de fundo ao passar o mouse */
  }
`;

// Novo componente estilizado para o texto
export const Text = styled.p`
  font-family: 'Quicksand', sans-serif; /* Usando a fonte Quicksand */
  font-weight: 600; /* Semibold */
  color: #326A7A; /* Cor cinza */
  margin-top: 2px;
  font-size: 25px;
`;
