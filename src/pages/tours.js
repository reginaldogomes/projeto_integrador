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
            <div class="card">
              <div class="card-header">
                <img src="/assets/img/Passeios/Bombinhas02.svg" alt"Bombinhas">
              </div>
              <div class="card-body">
                <h3>Bombinhas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                <a href="" class="btn">Saiba Mais</a>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <img src="/assets/img/Passeios/Dunasdosantinho.svg" alt"Dunas do Santinho">
              </div>
              <div class="card-body">
                <h3>Dunas do Santinho</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                <a href="" class="btn">Saiba Mais</a>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <img src="/assets/img/Passeios/IlhadoCampeche.svg" alt"Ilha do Campache">
              </div>
              <div class="card-body">
                <h3>Ilha do Campache</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                <a href="" class="btn">Saiba Mais</a>
              </div>
            </div>
          </div>
        <section>
      </section>
  `;
}