// import { renderTouristSpots } from "../components/TouristSpots"

export function renderHome() {
  
  const app = document.getElementById('app');

  // const touristSpots = renderTouristSpots();
  // app.appendChild(touristSpots);

  if (!app) {
    console.error('Elemento #app não encontrado!');
    return;
  }
  app.innerHTML = `
      <section id="touristSpots" class="section1">
        <h1>Onde a natureza e a cultura se encontram</h1>
        <p>Explore a essência de Floripa e região: praias deslumbrantes, montanhas imponentes, lagoas cristalinas, trilhas emocionantes e um rico patrimônio histórico-cultural. Sinta a magia de Florianópolis em cada aventura! Bem-vindo(a) ao seu refúgio de maravilhas!</p>
        <span>Hero Section</span>
        <ul id="testeUL"></ul>
      </section>
      <section class="section2">
        <h2>Porque escolher a FloripaTour?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque </p>
        <div class="feedbacks">
          <div class="feedback">
            <h3>Multiplos destinos</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div class="feedback">
            <h3>+ de 1000 Clientes</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div class="feedback">
            <h3>Certificada</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </section>
  `;
}