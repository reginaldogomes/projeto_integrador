import '@/assets/css/tours.css'
import { touristSpots } from '../data/touristSpots'

export function renderTours() {
  const app = document.getElementById('app')
  app.innerHTML = `
      <section class="section">
        <div class="heading-page">
          <h1>Passeios</h1>
          <h3>Veja os passeios que oferecemos na ilha da magia.</h3>
        </div>
        <main>
          <div class="top-beaches">
            <div class="beach-header">
                <h2>Melhores Praias de Florianópolis</h2>
                <p>Paradise Found: Unveiling Lombok's Top Beach Picks For Your Ultimate Island Getaway</p>
            </div>
            <div class="beach-cards">
                <div class="beach-card">
                    <img src="assets/img/Passeios/Campeche.jpg" alt="Campeche">
                    <h3>Ilha do Campeche</h3>
                </div>
                <div class="beach-card">
                    <img src="https://via.placeholder.com/600x600?text=Seling+Blanak+Beach" alt="Seling Blanak Beach">
                    <h3>Seling Blanak Beach</h3>
                </div>
            </div>
          </div>

          <div class="natural-attractions">
            <div class="attraction-cards">
                <div class="attraction-card">
                    <div class="card-tags">
                        <span class="tag">Lombok Timur</span>
                        <span class="tag">Natural</span>
                    </div>
                    <img src="https://via.placeholder.com/600x600?text=Benang+Kelambu" alt="Benang Kelambu">
                    <h3>Benang Kelambu</h3>
                </div>
                <div class="attraction-card">
                    <div class="card-tags">
                        <span class="tag">Lombok Timur</span>
                        <span class="tag">Natural</span>
                    </div>
                    <img src="https://via.placeholder.com/600x600?text=Bukit+Sembalun" alt="Bukit Sembalun">
                    <h3>Bukit Sembalun</h3>
                </div>
            </div>
            <div class="attraction-header">
                <h2>Lombok's Natural Marvels</h2>
                <p>Into The Wild: Journeying Through The Breathtaking Natural Marvels Of Lombok's Untamed Landscapes</p>
            </div>
          </div>

          <h2>Passeios em Destaques</h2>
          <div class="highlighted-tours">
            <!-- Adicione os cards dos passeios aqui seguindo o padrão de .beach-card ou .attraction-card -->
          </div>
        </main>
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
