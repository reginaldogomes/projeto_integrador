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
            <button class="button_contact" type="submit">Enviar</button>
          </div>
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15002.503510486065!2d-43.93413985!3d-19.940164399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1728996655863!5m2!1sen!2sbr" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                             
        </form>
      </section>
  `
}
