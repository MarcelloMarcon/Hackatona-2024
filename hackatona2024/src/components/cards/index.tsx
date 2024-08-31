import React from 'react';
import { ButtonContainer, Icon, TextContainer, Title, Subtitle } from './styles';

interface AddressCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick?: () => void;  // Adiciona uma prop opcional para lidar com cliques
}

const AddressCard: React.FC<AddressCardProps> = ({ icon, title, subtitle, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <Icon>{icon}</Icon>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
    </ButtonContainer>
  );
};

export default AddressCard;
