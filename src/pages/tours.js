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
  cardsContainer.classList.add('cards-container')

  // Cria o container de detalhes do passeio (será oculto inicialmente)
  const detailsContainer = document.createElement('div')
  detailsContainer.className = 'details-container hidden' // Classe 'hidden' para ocultar inicialmente

  // Botão para voltar aos cards de passeios
  const backButton = document.createElement('button')
  backButton.className = 'back-button'
  backButton.textContent = 'Voltar'
  backButton.onclick = () => {
    detailsContainer.classList.add('hidden')
    cardsContainer.classList.remove('hidden')
  }
  detailsContainer.appendChild(backButton)

  // Adiciona o container de detalhes ao container principal
  container.appendChild(detailsContainer)

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
  function createCard({
    imgSrc,
    imgAlt,
    title,
    description,
    excerpt,
    gallery,
  }) {
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
    cardDescription.textContent = excerpt

    const cardButton = document.createElement('button')
    cardButton.className = 'btn'
    cardButton.textContent = 'Saiba Mais'
    cardButton.onclick = () =>
      showDetails({ imgSrc, imgAlt, title, description, excerpt, gallery })

    // Monta o corpo do card
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardDescription)
    cardBody.appendChild(cardButton)

    // Junta header e body no card
    card.appendChild(cardHeader)
    card.appendChild(cardBody)

    return card
  }

  function showDetails({ imgSrc, imgAlt, title, description, gallery }) {
    // Limpa o conteúdo anterior do detailsContainer
    detailsContainer.innerHTML = ''
    detailsContainer.appendChild(backButton)

    // Header de detalhes com a imagem principal
    const detailsHeader = document.createElement('div')
    detailsHeader.className = 'details-header'

    const detailsImage = document.createElement('img')
    detailsImage.src = imgSrc
    detailsImage.alt = imgAlt
    detailsHeader.appendChild(detailsImage)

    // Título e descrição
    const detailsTitle = document.createElement('h2')
    detailsTitle.textContent = title

    const detailsDescription = document.createElement('p')
    detailsDescription.textContent = description

    detailsContainer.appendChild(detailsHeader)
    detailsContainer.appendChild(detailsTitle)
    detailsContainer.appendChild(detailsDescription)

    // Galeria de fotos
    const galleryContainer = document.createElement('div')
    galleryContainer.className = 'gallery-container'

    gallery.forEach((imageSrc) => {
      const galleryImage = document.createElement('img')
      galleryImage.src = imageSrc
      galleryImage.alt = `${title} photo`
      galleryImage.className = 'gallery-image'
      galleryContainer.appendChild(galleryImage)
    })

    detailsContainer.appendChild(galleryContainer)

    // Alterna a visibilidade entre os cards e os detalhes
    detailsContainer.classList.remove('hidden')
    cardsContainer.classList.add('hidden')
  }
}
