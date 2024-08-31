// AddressCard.tsx
import React from 'react';
import { ButtonContainer, Icon, TextContainer, Title, Subtitle, Description } from './styles';

interface AddressCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description?: string;  // Adiciona uma prop opcional para descrição
  onClick?: () => void;  // Adiciona uma prop opcional para lidar com cliques
}

const AddressCard: React.FC<AddressCardProps> = ({ icon, title, subtitle, description, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <Icon>{icon}</Icon>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {description && <Description>{description}</Description>} {/* Condicionalmente renderiza a descrição */}
      </TextContainer>
    </ButtonContainer>
  );
};

export default AddressCard;
