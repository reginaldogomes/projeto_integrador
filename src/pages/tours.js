import '@/assets/css/pages/tours.css'
import { HeadingPage } from '/components/HeadingPage.js'
import { touristSpots } from '../data/touristSpots'
import { initCarousel } from '/components/Carousel.js'

document.addEventListener('DOMContentLoaded', () => {
  initCarousel('.feedback') // Seleciona o container do carrossel
})

export function renderTours() {
  const app = document.getElementById('app')

  // Limpa o conteúdo anterior, se houver
  app.innerHTML = ''

  // Cria o conteúdo da página usando createElement para evitar o uso direto de innerHTML
  const container = document.createElement('div')
  container.classList.add('container-tours')

  // Cria e insere o componente HeadingPage
  const headingPage = HeadingPage({
    title: 'Passeios',
    subtitle: 'Veja os passeios que oferecemos na ilha da magia.',
  })
  app.appendChild(headingPage)

  app.innerHTML = `
<section class="section">
  <div class="top-beaches">
    <div class="beach-text">
      <h2>Praias de Destaque</h2>
      <p>Descubra o paraíso em Floripa! A Ilha do Campeche impressiona com suas águas cristalinas e areias brancas, perfeita para relaxar. Já a Praia de Joaquina, famosa pelas ondas, atrai surfistas e tem um ambiente vibrante. Venha viver momentos inesquecíveis nessas praias deslumbrantes</p>
    </div>
    <div class="beach-cards">
      <div class="imagem-container">
        <img src="assets/img/Passeios/Campeche.jpg" alt="Descrição da Imagem">
        <div class="texto-overlay">Ilha do Campeche</div>
      </div>
      <div class="imagem-container">
        <img src="assets/img/passeios/Joaquina.png" alt="Descrição da Imagem">
        <div class="texto-overlay">Praia da Joaquina</div>
      </div>
    </div>     
  </div>
  <div class="natural-attractions">
    <div class="attraction-cards">
      <div class="imagem-container">
        <img src="assets/img/passeios/picodacoroa.png" alt="Pico da Coroa">
        <div class="texto-overlay">Pico da Coroa</div>
      </div>
      <div class="imagem-container">
        <img src="/assets/img/passeios/SnorkelingTartarugas.png" alt="Snorkeling Com Tartarugas">
        <div class="texto-overlay">Mergulho com Tartarugas</div>
      </div>
    </div>
    <div class="attraction-header">
      <h2>Belezas Naturais</h2>
      <p>Descubra o Pico da Coroa, com suas vistas deslumbrantes do Atlântico e vegetação local, e mergulhe nas águas cristalinas para observar tartarugas marinhas de perto. Uma experiência inesquecível de contato com a natureza.</p>
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

  // Lógica do carrossel
  let index = 0
  const avaliacoes = document.querySelectorAll('.avaliacao')
  const totalAvaliacoes = avaliacoes.length

  function mudarAvaliacao() {
    index++

    if (index >= totalAvaliacoes) {
      index = 0 // Volta para o primeiro
    }

    atualizarCarrossel()
  }

  function atualizarCarrossel() {
    const avaliacaoContainer = document.querySelector('.avaliacoes')
    const offset = -index * 100
    avaliacaoContainer.style.transform = `translateX(${offset}%)` // Aplica a transformação CSS
  }

  // Inicia o carrossel
  atualizarCarrossel()
  setInterval(mudarAvaliacao, 3000) // Muda a avaliação a cada 3 segundos
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
