// PageInitial.tsx
import { Container, CardsContainer, MapContainer } from './styles';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AddressCard from '../../../components/cards';
import Header from '../../../components/header';

export default function PageInitial() {
  const navigate = useNavigate();

  // Definindo dados de contagem, endereço, telefone e descrição para cada igreja
  const churches = [
    {
      title: 'Paróquia Santo Antônio do Partenon',
      description: 'Bem-vindo à Paróquia Santo Antônio do Partenon',
      subtitle: 'Rua Luiz de Camões, 35',
      counts: [5, 20, 30, 50, 10], // Exemplo de contagens
      address: 'Rua Luiz de Camões, 35', // Endereço adicionado
      phone: '(51) 1234-5678', // Número de telefone adicionado
      cardDescription: 'Este é um local histórico com uma comunidade vibrante.', // Nova descrição adicionada
    },
    {
      title: 'Igreja Brasa',
      description: 'Bem-vindo à Igreja Brasa',
      subtitle: 'Av. Dr. Carlos Barbosa, 80',
      counts: [8, 25, 20, 55, 60],
      address: 'Av. Dr. Carlos Barbosa, 80',
      phone: '(51) 8765-4321',
      cardDescription: 'Um espaço acolhedor para todos.',
    },
    {
      title: 'Paróquia Nossa Senhora de Lourdes',
      description: 'Bem-vindo à Paróquia Nossa Senhora de Lourdes',
      subtitle: 'Rua General Caldwell, 1022',
      counts: [12, 18, 35, 10, 45],
      address: 'Rua General Caldwell, 1022',
      phone: '(51) 2345-6789',
      cardDescription: 'Conhecida por suas atividades sociais.',
    },
    {
      title: 'Centro Estadual de Treinamento Esportivo',
      description: 'Bem-vindo ao Centro Estadual de Treinamento Esportivo',
      subtitle: 'Rua Gonçalves Dias, 700',
      counts: [7, 22, 40, 70, 15],
      address: 'Rua Gonçalves Dias, 700',
      phone: '(51) 3456-7890',
      cardDescription: 'Facilidades esportivas e eventos comunitários.',
    },
  ];

  // Função para navegar para a página da igreja com dados
  const handleNavigation = (title: string, description: string, counts: number[], address: string, phone: string) => {
    navigate('/abrigos', { state: { title, description, counts, address, phone } });
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
            description={church.cardDescription} // Passando a nova prop para o card
            onClick={() => handleNavigation(church.title, church.description, church.counts, church.address, church.phone)}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}
