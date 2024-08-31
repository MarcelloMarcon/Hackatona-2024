// utils/distanceCalculator.ts
export const calculateDistance = (coords1: { lat: number, lng: number }, coords2: { lat: number, lng: number }): string => {
    const R = 6371; // Raio da Terra em km
    const dLat = (coords2.lat - coords1.lat) * (Math.PI / 180);
    const dlng = (coords2.lng - coords1.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coords1.lat * (Math.PI / 180)) * Math.cos(coords2.lat * (Math.PI / 180)) *
      Math.sin(dlng / 2) * Math.sin(dlng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distância em km
  
    return distance.toFixed(2); // Retorna a distância formatada com duas casas decimais
  };
  