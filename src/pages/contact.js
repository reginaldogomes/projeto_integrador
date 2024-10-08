import '@/assets/css/contact.css'

export function renderContact() {
  const app = document.getElementById('app')
  app.innerHTML = `
      <section class="section-contact">
        <div class="heading-page">
          <h1>Contato</h1>
          <h3>Entre em contato conosco</h3>
        </div>
        <form class="contact-form" action="#" method="post">
          <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Seu nome" required>
          </div>
          <div class="form-group">
            <label for="company">Empresa:</label>
            <input type="text" id="company" name="company" placeholder="Sua empresa">
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Seu email" required>
          </div>
          <div class="form-group">
            <label for="whatsapp">WhatsApp:</label>
            <input type="text" id="whatsapp" name="whatsapp" placeholder="Seu WhatsApp" required>
          </div>
          <div class="form-group">
            <label for="message">Mensagem:</label><br>
            <textarea id="message" name="message" rows="5" placeholder="Sua mensagem" required></textarea>
            
            <p>Nacionalidade:</p>
            <input type="radio" name="nacionalidade" id="brasil" value="brasil">
            <label for="brasil">Brasileiro(a)</label>
            <input type="radio" name="nacionalidade" id="outro" value="outro">
            <label for="outro">Estrangeiro(a)</label>
          </div>
          <button class="button_contact" type="submit">Enviar</button>
                    
        </form>
      </section>
  `
}
