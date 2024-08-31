// PageInitial.tsx
import { Container, CardsContainer, MapContainer } from './styles';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AddressCard from '../../../components/cards';
import Header from '../../../components/header';

export default function PageInitial() {
  const navigate = useNavigate();

  // Definindo dados de contagem para cada igreja
  const churches = [
    {
      title: 'Paróquia Santo Antônio do Partenon',
      description: 'Bem-vindo à Paróquia Santo Antônio do Partenon',
      subtitle: 'Rua Luiz de Camões, 35',
      counts: [5, 20, 30, 50, 10], // Exemplo de contagens
    },
    {
      title: 'Igreja Brasa',
      description: 'Bem-vindo à Igreja Brasa',
      subtitle: 'Av. Dr. Carlos Barbosa, 80',
      counts: [8, 25, 20, 55, 60],
    },
    {
      title: 'Paróquia Nossa Senhora de Lourdes',
      description: 'Bem-vindo à Paróquia Nossa Senhora de Lourdes',
      subtitle: 'Rua General Caldwell, 1022',
      counts: [12, 18, 35, 10, 45],
    },
    {
      title: 'Centro Estadual de Treinamento Esportivo',
      description: 'Bem-vindo ao Centro Estadual de Treinamento Esportivo',
      subtitle: 'Rua Gonçalves Dias, 700',
      counts: [7, 22, 40, 70, 15],
    },
  ];

  // Função para navegar para a página da igreja com dados
  const handleNavigation = (title: string, description: string, counts: number[]) => {
    navigate('/abrigos', { state: { title, description, counts } });
  };

  return (
    <Container>
      <Header />
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1kQ7ejTduJkj4iexvxij9JRza_6lt4eI&ehbc=2E312F"
          width="100%"
          height="100%"
          title="Mapa"
        ></iframe>
      </MapContainer>
      <CardsContainer>
        {churches.map((church, index) => (
          <AddressCard
            key={index}
            icon={<FaHome />}
            title={church.title}
            subtitle={church.subtitle}
            onClick={() => handleNavigation(church.title, church.description, church.counts)}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}
