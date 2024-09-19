import { touristSpots } from '../data/touristSpots';

export function renderTouristSpots() {

  const container = document.getElementById('section');
  
  if (container) {
    const spotsHTML = touristSpots.map(spot => `
      <li>
        <strong>${spot.nome}</strong> - ${spot.cidade}, ${spot.estado}
      </li>
    `).join('');

    container.innerHTML = `
      <ul>
        ${spotsHTML}
      </ul>
    `;
  } else {
    console.error('Elemento #touristSpots não encontrado no DOM.');
  }
  return container;
}