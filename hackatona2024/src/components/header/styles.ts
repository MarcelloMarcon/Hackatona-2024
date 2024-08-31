// styles.ts
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Ajuste para centralizar verticalmente */
  padding: 10px 20px;
  background-color: #2e312f;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 2px solid #9A9A9A;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center; /* Centraliza o logo e o texto verticalmente */
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Text = styled.p`
  font-family: 'Quicksand', sans-serif; /* Usando a fonte Quicksand */
  font-weight: 600; /* Semibold */
  color: #326A7A; /* Cor cinza */
  margin-left: 10px; /* Espaço entre o logo e o texto */
  font-size: 1.2rem; /* Tamanho da fonte */
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #888; /* Cor do ícone */
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-right: 30px;

  &:hover {
    color: #fff; /* Altera a cor ao passar o mouse */
  }
`;
