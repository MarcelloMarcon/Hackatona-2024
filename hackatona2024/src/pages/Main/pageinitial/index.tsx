


// PageInitial.tsx
import { Container, CardsContainer, MapContainer } from './styles';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AddressCard from '../../../components/cards';

export default function PageInitial() {
  const navigate = useNavigate();

  // Adicione tipos explícitos para title e description
  const handleNavigation = (title: string, description: string) => {
    navigate('/igreja', { state: { title, description } });
  };

  return (
    <Container>
      <MapContainer>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1kQ7ejTduJkj4iexvxij9JRza_6lt4eI&ehbc=2E312F" width="100%" height="100%"></iframe>
      </MapContainer>
      <CardsContainer>
        <AddressCard
          icon={<FaHome />}
          title={'Igreja João Banana'}
          subtitle={'Rua Dom Pedro Primeiro 1022, Canoas RS'}
          onClick={() => handleNavigation('Igreja João Banana', 'Bem-vindo à Igreja João Banana')}
        />
        <AddressCard
          icon={<FaHome />}
          title={'Igreja São Pedro'}
          subtitle={'Avenida São Pedro 200, Porto Alegre RS'}
          onClick={() => handleNavigation('Igreja São Pedro', 'Bem-vindo à Igreja São Pedro')}
        />
        <AddressCard
          icon={<FaHome />}
          title={'Igreja Nossa Senhora'}
          subtitle={'Rua Dom Pedro Primeiro 1022, Canoas RS'}
          onClick={() => handleNavigation('Igreja Nossa Senhora', 'Bem-vindo à Igreja Nossa Senhora')}
        />
      </CardsContainer>
    </Container>
  );
}

