// IgrejaPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

// Definindo uma interface para as props
interface IgrejaPageProps {
  title: string;
  description: string;
}

export function IgrejaPage() {
  const location = useLocation();
  const { title, description } = location.state as IgrejaPageProps || { title: 'Default Title', description: 'Default Description' };

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default IgrejaPage;
