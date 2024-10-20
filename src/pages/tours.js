import '@/assets/css/tours.css'
import { touristSpots } from '../data/touristSpots'

export function renderTours() {
  const app = document.getElementById('app')
  app.innerHTML = `
<section class="section">
  <div class="heading-page">
    <h1>Passeios</h1>
    
  </div>
  <div class="banner">
    <img src="/assets/img/Passeios/PonteHercilioLuz.png" alt="Ponte Hercílio Luz">
  </div>
  <div class="feedback">
    <h2>Avaliações</h2>
    <div class="carrossel">
      <div class="avaliacoes">
        <div class="avaliacao active">
          <p>"Ótima experiência! Recomendo para todos."</p>
          <h4>— João Silva</h4>
        </div>
        <div class="avaliacao">
          <p>"Um lugar incrível, voltarei com certeza!"</p>
          <h4>— Maria Oliveira</h4>
        </div>
        <div class="avaliacao">
          <p>"Serviço excelente e atendimento nota 10."</p>
          <h4>— Pedro Santos</h4>
        </div>
        <div class="avaliacao">
          <p>"Melhor lugar para relaxar e aproveitar a praia!"</p>
          <h4>— Ana Costa</h4>
        </div>
      </div>
    </div>
  </div>
  <div class="linha-separadora"></div>
  <div class="top-beaches">
    <div class="beach-text">
      <h2>Melhores Praias</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="beach-cards">
      <div class="imagem-container">
        <img src="assets/img/Passeios/Campeche.jpg" alt="Descrição da Imagem">
        <div class="texto-overlay">Ilha do Campeche</div>
      </div>
      <div class="imagem-container">
        <img src="assets/img/passeios/Campeche.jpg" alt="Descrição da Imagem">
        <div class="texto-overlay">Ilha do Campeche</div>
      </div>
    </div>     
  </div>
  <div class="natural-attractions">
    <div class="attraction-cards">
      <div class="imagem-container">
        <img src="assets/img/passeios/jurere.png" alt="Cachoeira do Rio Verde">
        <div class="texto-overlay">Cachoeira do Rio Verde</div>
      </div>
      <div class="imagem-container">
        <img src="/assets/img/passeios/jurere.png" alt="Vista do Morro do Cambirela">
        <div class="texto-overlay">Vista do Morro do Cambirela</div>
      </div>
    </div>
    <div class="attraction-header">
      <h2>Belezas Naturais</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div class="highlighted-tours">
    <h2>Passeios em Destaque</h2>
  </div>
  <div class="container" id="cards-container"></div>
</section>
  `

  const cardsContainer = document.getElementById('cards-container')
  touristSpots.forEach((tour) => {
    const card = createCard(tour)
    cardsContainer.appendChild(card)
  })
}

function createCard({ imgSrc, imgAlt, title, description }) {
  const card = document.createElement('div')
  card.className = 'card'

  const cardHeader = document.createElement('div')
  cardHeader.className = 'card-header'
  const img = document.createElement('img')
  img.src = imgSrc
  img.alt = imgAlt
  cardHeader.appendChild(img)

  const cardBody = document.createElement('div')
  cardBody.className = 'card-body'
  const cardTitle = document.createElement('h3')
  cardTitle.textContent = title
  const cardDescription = document.createElement('p')
  cardDescription.textContent = description
  const cardButton = document.createElement('a')
  cardButton.href = '#'
  cardButton.className = 'btn'
  cardButton.textContent = 'Saiba Mais'

  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardDescription)
  cardBody.appendChild(cardButton)

  card.appendChild(cardHeader)
  card.appendChild(cardBody)

  return card
}
