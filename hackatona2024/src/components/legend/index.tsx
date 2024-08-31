// Legend.tsx
import React from 'react';
import styled from 'styled-components';

const LegendContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin-top: 25px;
  padding: 10px;
  padding-left: 150px;
  width: 70%;
  flex-direction: column;
  gap: 10px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
`;

const ColorBox = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
  margin-right: 8px;
  border-radius: 4px;
`;

const LegendText = styled.span`
  font-size: 14px;
  color:rgb(46, 49, 47);
`;

const Legend: React.FC = () => {
  return (
    <LegendContainer>
      <LegendItem>
        <ColorBox color="rgb(199, 50, 51)" />
        <LegendText>Vermelha: Necessidade alta</LegendText>
      </LegendItem>
      <LegendItem>
        <ColorBox color="rgb(243, 178, 62)" />
        <LegendText>Amarela: Necessidade média</LegendText>
      </LegendItem>
      <LegendItem>
        <ColorBox color="rgb(93, 171, 96)" />
        <LegendText>Verde: Não há necessidade</LegendText>
      </LegendItem>
    </LegendContainer>
  );
};

export default Legend;
