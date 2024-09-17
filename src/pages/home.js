export function renderHome() {
  const app = document.getElementById('app');
  if (!app) {
    console.error('Elemento #app não encontrado!');
    return;
  }
  app.innerHTML = `
      <section id="section" class="section1">
        <h1>Home</h1>
        <p>Veja os serviços que oferecemos.</p>
        <span>Hero Section</span>
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

document.addEventListener('DOMContentLoaded', function() {
  renderHome();
});