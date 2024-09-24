// import { renderTouristSpots } from "../components/TouristSpots"

export function renderHome() {
  const app = document.getElementById('app')

  // const touristSpots = renderTouristSpots();
  // app.appendChild(touristSpots);

  if (!app) {
    console.error('Elemento #app não encontrado!')
    return
  }
  app.innerHTML = `
    <section id="touristSpots" class="section1">
      <h1>O Encontro Perfeito entre Natureza e Encanto</h1>
      <p>Desperte Seus Sentidos com Praias de Tirar o Fôlego, Montanhas Imponentes, Lagoas Cristalinas e Trilhas Vibrantes. Viva a Magia de Florianópolis e Redescubra o Seu Refúgio de Aventuras!</p>
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
  `
}
