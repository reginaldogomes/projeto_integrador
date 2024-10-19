// import { renderTouristSpots } from "../components/TouristSpots"
import '/assets/css/home.css'

export function renderHome() {
  const app = document.getElementById('app')

  // const touristSpots = renderTouristSpots();
  // app.appendChild(touristSpots);

  if (!app) {
    console.error('Elemento #app não encontrado!')
    return
  }
  app.innerHTML = `
    <section class="hero">
      <div class="hero__content">
        <span>Florianópolis</span>
        <h1>Onde a Natureza Se Transforma em Pura Emoção</h1>
        <p>Explore Praias Surreais, Descubra Montanhas de Aventuras e Deixe-se Guiar Pelas Belezas Inesquecíveis. Viva a Magia e Renove Seus Sentidos em Cada Paisagem!</p>
      </div>
    </section>
    <section class="section">
      <h2>Os passeios na ilha</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque </p>
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
