


// PageInitial.tsx
import { Container, CardsContainer, MapContainer } from './styles';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AddressCard from '../../../components/cards';
import Header from '../../../components/header';

export default function PageInitial() {
  const navigate = useNavigate();

  // Adicione tipos explícitos para title e description
  const handleNavigation = (title: string, description: string) => {
    navigate('/igreja', { state: { title, description } });
  };

  return (
    <Container>
      <Header />
      <MapContainer>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1kQ7ejTduJkj4iexvxij9JRza_6lt4eI&ehbc=2E312F" width="100%" height="100%"></iframe>
      </MapContainer>
      <CardsContainer>
        <AddressCard
          icon={<FaHome />}
          title={'Paróquia Santo Antônio do Partenon'}
          subtitle={'Rua Luiz de Camões, 35'}
          onClick={() => handleNavigation('Paróquia Santo Antônio do Partenon', 'Bem-vindo à Paróquia Santo Antônio do Partenon')}
        />
        <AddressCard
          icon={<FaHome />}
          title={'Igreja Brasa'}
          subtitle={'Av. Dr. Carlos Barbosa, 80'}
          onClick={() => handleNavigation('Igreja Brasa', 'Bem-vindo à Igreja Brasa')}
        />
        <AddressCard
          icon={<FaHome />}
          title={'Paróquia Nossa Senhora de Lourdes'}
          subtitle={'Rua General Caldwell, 1022'}
          onClick={() => handleNavigation('Paróquia Nossa Senhora de Lourdes', 'Bem-vindo à Paróquia Nossa Senhora de Lourdes')}
        />
        <AddressCard
          icon={<FaHome />}
          title={'Centro Estadual de Treinamento Esportivo'}
          subtitle={'Rua Gonçalves Dias, 700'}
          onClick={() => handleNavigation('Centro Estadual de Treinamento Esportivo', 'Bem-vindo à Paróquia Nossa Senhora de Lourdes')}
        />
      </CardsContainer>
    </Container>
  );
}

