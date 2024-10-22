import '@/assets/css/pages/tours.css'
import { HeadingPage } from '/components/HeadingPage.js'
import { touristSpots } from '../data/touristSpots'

export function renderTours() {
  const app = document.getElementById('app')

  // Limpa o conteúdo anterior, se houver
  app.innerHTML = ''

  // Cria o container principal da página
  const container = document.createElement('div')
  container.classList.add('container-tours')

  // Cria e insere o componente HeadingPage
  const headingPage = HeadingPage({
    title: 'Passeios',
    subtitle: 'Veja os passeios que oferecemos na ilha da magia.',
  })
  container.appendChild(headingPage)

  // Cria o container para os cards de passeios
  const cardsContainer = document.createElement('div')
  cardsContainer.classList.add('cards-container') // Garanta que a classe 'cards-container' exista no CSS

  // Itera sobre os pontos turísticos e cria os cards
  touristSpots.forEach((tour) => {
    const card = createCard(tour)
    cardsContainer.appendChild(card)
  })

  // Adiciona o container de cards ao container principal
  container.appendChild(cardsContainer)

  // Adiciona o container principal ao app
  app.appendChild(container)

  // Função responsável por criar os cards de cada passeio
  function createCard({ imgSrc, imgAlt, title, description }) {
    const card = document.createElement('div')
    card.className = 'card'

    // Criação do header do card com a imagem
    const cardHeader = document.createElement('div')
    cardHeader.className = 'card-header'
    const img = document.createElement('img')
    img.src = imgSrc
    img.alt = imgAlt
    cardHeader.appendChild(img)

    // Criação do corpo do card com título e descrição
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

    // Monta o corpo do card
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardDescription)
    cardBody.appendChild(cardButton)

    // Junta header e body no card
    card.appendChild(cardHeader)
    card.appendChild(cardBody)

    return card
  }
}
