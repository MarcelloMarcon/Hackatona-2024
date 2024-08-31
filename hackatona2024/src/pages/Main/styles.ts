import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row; /* Define os elementos lado a lado */
  text-align: center;
  margin-top: 50px;
  margin-right: 50px;
  margin-left: 50px;

  gap: 20px; /* Espaço entre o mapa e os cards */
  align-items: flex-start; /* Alinha os itens ao topo */
`

export const MapContainer = styled.div`
  width: 50%; /* Define a largura do contêiner do mapa */
  height: 480px; /* Define a altura do contêiner do mapa */
  flex-shrink: 0; /* Impede o encolhimento do contêiner do mapa */
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 30px; 
  flex: 1; 
  align-items: end;
`
