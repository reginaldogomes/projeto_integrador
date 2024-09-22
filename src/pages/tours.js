import '@/assets/css/tours.css';

export function renderTours() {
  const app = document.getElementById('app');
  app.innerHTML = `
      <section class="section">
        <div class="heading-page">
          <h1>Passeios</h1>
          <h3>Veja os passeios que oferecemos na ilha da magia.</h3>
        </div>
        <section>
          <div class="container">
            <div class="card-1">
              <div class="card-header">
                <img src="https://via.placeholder.com/300x200" alt"Ponto Turistico">
              </div>
              <div class="card-body">
                <h3>Titulo do Card</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="footer">
                <button>Saiba Mais</button>
              </div>
            </div>
          </div>
        <section>
      </section>
  `;
}