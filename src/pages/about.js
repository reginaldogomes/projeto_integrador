export function renderAbout() {
  const app = document.getElementById('app');
  app.innerHTML = `
      <section class="section">
        <div class="heading-page">
          <h1>Sobre o Floripa Tour</h1>
          <h3>Conheça nossa historia</h3>
        </div>
        <p>Bem-vindo ao Portal de Turismo de Florianópolis, seu guia definitivo para explorar os encantos naturais e culturais desta ilha paradisíaca. Com o objetivo de oferecer uma experiência imersiva e informativa, nosso portal destaca os principais pontos turísticos de Florianópolis, desde suas praias mundialmente famosas até as áreas de preservação ambiental que fazem da cidade um destino único para o ecoturismo.</p>
      </section>
  `;
}