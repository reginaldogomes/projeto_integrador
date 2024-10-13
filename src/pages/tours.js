import '@/assets/css/tours.css'

export function renderTours() {
  const app = document.getElementById('app')
  app.innerHTML = `
      <section class="section">
        <div class="heading-page">
          <h1>Passeios</h1>
          <h3>Veja os passeios que oferecemos na ilha da magina.</h3>
        </div>
        <div class="container" id="cards-container"></div>
      </section>
  `

  const tours = [
    {
      imgSrc: '/assets/img/Passeios/Bombinhas02.svg',
      imgAlt: 'Bombinhas',
      title: 'Bombinhas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    },
    {
      imgSrc: '/assets/img/Passeios/Dunasdosantinho.svg',
      imgAlt: 'Dunas do Santinho',
      title: 'Dunas do Santinho',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    },
    {
      imgSrc: '/assets/img/Passeios/IlhadoCampeche.svg',
      imgAlt: 'Ilha do Campeche',
      title: 'Ilha do Campeche',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    },
  ]

  const cardsContainer = document.getElementById('cards-container')
  tours.forEach((tours) => {
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
