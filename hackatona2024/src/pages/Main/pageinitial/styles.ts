import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row; /* Define os elementos lado a lado */
  text-align: center;
  margin-top: 50px;
  margin-right: 50px;
  gap: 20px; /* Espaço entre o mapa e os cards */
  align-items: flex-start; /* Alinha os itens ao topo */

  /* Media query para dispositivos móveis */
  @media (max-width: 768px) {
    flex-direction: column; /* Empilha o mapa e os cards em telas menores */
    margin-right: 0; /* Remove a margem direita em dispositivos móveis */
    margin-left: 0; /* Remove a margem esquerda em dispositivos móveis */
  }
`;

export const MapContainer = styled.div`
  width: 50%; /* Define a largura do contêiner do mapa */
  height: 480px; /* Define a altura do contêiner do mapa */
  flex-shrink: 0; /* Impede o encolhimento do contêiner do mapa */
  margin-left: 50px;
  margin-top: 50px;

  /* Media query para dispositivos móveis */
  @media (max-width: 768px) {
    width: 90%; /* Ajusta a largura do mapa para 90% da tela em dispositivos móveis */
    max-width: 500px; /* Define uma largura máxima para o mapa em dispositivos móveis */
    margin: 10px auto; 
    margin-top:25px/* Centraliza o mapa horizontalmente e adiciona margens superior e inferior */
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 30px; 
  flex: 1; 
  align-items: end;
  margin-top: 50px;

  /* Media query para dispositivos móveis */
  @media (max-width: 768px) {
    align-items: center; /* Centraliza os cards em dispositivos móveis */
    margin-top: 20px; /* Ajusta a margem superior para dispositivos móveis */
  }
`;
