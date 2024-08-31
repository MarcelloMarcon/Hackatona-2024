// styles.ts
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 9px;
  padding-bottom: 0px;
  border: 2px solid #9A9A9A;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;

  &:hover {
    background-color: #e0e0e0;
    border-width: 3px; /* Aumenta a borda ao passar o mouse */
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
  margin-right: 8px;
`;
export const DistanceText = styled.p`
  font-size: 0.9rem;
  color: 'black';  // Cor cinza para a distância
  margin-top: 5px;
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

export const Description = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: #666;
`;
