import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 16px;
  border: 2px solid #9A9A9A;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: none;
    border-color: #9A9A9A;
  }
`;

export const Icon = styled.div`
  font-size: 24px;
  color: #333;
  display: flex;
  align-items: center;
  margin-right: 8px; /* Ajuste para que o ícone fique colado ao título */
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-left: 5px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const Subtitle = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  color: #666;
`;
