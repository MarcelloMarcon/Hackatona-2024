
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
  color: #ffffff;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
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

  &:hover {
    background-color: #0053ba;
    color: white;
  }

  &:first-of-type {
    background-color: #007bff;
    color: white;
  }

  &:last-of-type {
    background-color: #28a745;
    color: white;
  }
`;

