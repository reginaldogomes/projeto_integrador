// Função para criar elementos com classes e conteúdo opcional
const createElement = (tag, className, content = '') => {
  const element = document.createElement(tag)
  element.className = className
  if (content) element.innerHTML = content
  return element
}

// Função para criar um único cartão
const createCard = ({ imageUrl, title, category }) => {
  const card = createElement('div', 'card')

  const img = createElement('img', 'card-image')
  img.src = imageUrl
  img.alt = title
  card.appendChild(img)

  const overlay = createElement('div', 'overlay')
  const cardTitle = createElement('h3', 'card-title', title)
  const cardCategory = createElement('p', 'card-category', category)

  overlay.appendChild(cardTitle)
  overlay.appendChild(cardCategory)
  card.appendChild(overlay)

  return card
}

// Função para renderizar o componente principal
export const renderComponent = (containerId, title, description, cardsData) => {
  const container = document.getElementById(containerId)

  const titleElem = createElement('h2', 'section-title', title)
  const descriptionElem = createElement('p', 'section-description', description)
  const cardContainer = createElement('div', 'card-container')
  const viewAllLink = createElement('a', 'view-all', 'Ver Todos')
  viewAllLink.href = '#'

  // Adiciona cada cartão ao contêiner de cartões
  cardsData.map(createCard).forEach((card) => cardContainer.appendChild(card))

  // Anexa tudo ao contêiner principal
  container.appendChild(titleElem)
  container.appendChild(descriptionElem)
  container.appendChild(cardContainer)
  container.appendChild(viewAllLink)
}

// Dados de exemplo para exportação (opcional)
export const cardsData = [
  {
    imageUrl: 'url_para_imagem_1.jpg',
    title: 'City tour toda a ilha (Floripa by Bus)',
    category: 'Atividades',
  },
  {
    imageUrl: 'url_para_imagem_2.jpg',
    title: 'Fortaleza de São José da Ponta Grossa',
    category: 'Locais históricos',
  },
  {
    imageUrl: 'url_para_imagem_3.jpg',
    title: 'Museu de Florianópolis',
    category: 'Museus',
  },
]
