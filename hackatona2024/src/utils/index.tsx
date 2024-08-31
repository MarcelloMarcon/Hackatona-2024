// utils/distanceCalculator.ts
export const calculateDistance = (coords1: { lat: number, lon: number }, coords2: { lat: number, lon: number }): string => {
    const R = 6371; // Raio da Terra em km
    const dLat = (coords2.lat - coords1.lat) * (Math.PI / 180);
    const dLon = (coords2.lon - coords1.lon) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coords1.lat * (Math.PI / 180)) * Math.cos(coords2.lat * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distância em km
  
    return distance.toFixed(2); // Retorna a distância formatada com duas casas decimais
  };
  