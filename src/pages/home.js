import '/assets/css/pages/home.css'
// import { renderTouristSpots } from "../components/TouristSpots"
import { renderComponent, cardsData } from '../components/Card'
import { createTestimonialCarousel } from '../components/Carousel'

export function renderHome() {
  const app = document.getElementById('app')

  if (!app) {
    console.error('Elemento #app não encontrado!')
    return
  }
  app.innerHTML = '' // Limpa o conteúdo anterior

  const container = document.createElement('div')
  container.classList.add('container-home')

  // Criação do Hero
  const heroSection = document.createElement('section')
  heroSection.className = 'hero'

  const heroContent = document.createElement('div')
  heroContent.className = 'hero__content'

  const locationSpan = document.createElement('span')
  locationSpan.textContent = 'Florianópolis'

  const heading = document.createElement('h1')
  heading.textContent = 'Onde a Natureza Se Transforma em Pura Emoção'

  const paragraph = document.createElement('p')
  paragraph.textContent =
    'Explore Praias Surreais, Descubra Montanhas de Aventuras e Deixe-se Guiar Pelas Belezas Inesquecíveis. Viva a Magia e Renove Seus Sentidos em Cada Paisagem!'

  heroContent.appendChild(locationSpan)
  heroContent.appendChild(heading)
  heroContent.appendChild(paragraph)
  heroSection.appendChild(heroContent)
  container.appendChild(heroSection)

  app.appendChild(container)

  // Teste Section
  const testeSection = document.createElement('section')
  testeSection.className = 'container-teste'
  container.appendChild(testeSection)

  const divider = document.createElement('div')
  divider.className = 'divider'
  divider.innerHTML = `
  <div class="divider-line"></div>
  <span class="divider-text">O que fazer</span>
  <div class="divider-line"></div>
`

  const testeHeading = document.createElement('h2')
  testeHeading.className = 'heading'
  testeHeading.innerHTML =
    'Conheça os <strong>melhores locais para curtir</strong>'

  const description = document.createElement('p')
  description.className = 'description'
  description.innerHTML =
    'Aqui, você pode desfrutar de <b>trilhas incríveis, praias paradisíacas, passeios de barco e cidades históricas encantadoras</b>. Venha explorar conosco esse lugar único e surpreendente.'

  const grid = document.createElement('div')
  grid.className = 'grid'

  // Dados dos locais turísticos
  const touristSpots = [
    {
      imgSrc:
        'https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2022/11/bombinhas-santa-catarina-clube-candeias.jpeg',
      imgAlt: 'Bombinhas',
      title: 'Bombinhas',
      excerpt:
        'Descubra Bombinhas, uma das joias de Santa Catarina, conhecida por suas águas cristalinas e praias paradisíacas.',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89EmsFkyZrRfzoYIdVI2kLyKeLtPze0l8qg&s',
      imgAlt: 'Dunas do Santinho',
      title: 'Dunas do Santinho',
      excerpt:
        'Visite as Dunas do Santinho, um local de beleza natural perfeita para quem busca aventura e tranquilidade.',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0PKqemXaoPL4cJCu_Uts7UGfiOWRw2dUow&s',
      imgAlt: 'Ilha do Campeche',
      title: 'Ilha do Campeche',
      excerpt:
        'Aventure-se pela Ilha do Campeche e explore suas paisagens naturais e águas cristalinas.',
    },
    {
      imgSrc:
        'https://www.carpemundi.com.br/wp-content/uploads/2017/04/campeche-floripa.jpg',
      imgAlt: 'Sul da Ilha',
      title: 'Tour no Sul da Ilha',
      excerpt:
        'Explore o Sul da Ilha e descubra praias exuberantes e uma lagoa encantadora de tirar o fôlego.',
    },
    {
      imgSrc: 'https://likefloripa.com/wp-content/uploads/2023/01/IMG_7965.jpg',
      imgAlt: 'Fortaleza de Anhatomirim',
      title: 'Fortaleza de Anhatomirim',
      excerpt:
        'Conheça a Fortaleza de Anhatomirim e mergulhe na história fascinante de Santa Catarina.',
    },
  ]

  // Seleciona 3 locais aleatórios
  const randomSpots = touristSpots.sort(() => 0.5 - Math.random()).slice(0, 3)

  randomSpots.forEach((spot) => {
    const gridItem = document.createElement('div')
    gridItem.className = 'grid-item'

    gridItem.innerHTML = `
    <div class="grid-item-image" style="background-image: url('${spot.imgSrc}');" alt="${spot.imgAlt}"></div>
    <div class="grid-item-content">
      <h2 class="grid-item-title">${spot.title}</h2>
      <p class="grid-item-description">${spot.excerpt}</p>
    </div>
  `
    grid.appendChild(gridItem)
  })

  // Botão "Ver todos"
  const viewAllButton = document.createElement('a')
  viewAllButton.href = 'tours'
  viewAllButton.className = 'view-all-button'
  viewAllButton.textContent = 'Ver todos'

  // Adiciona elementos à seção
  testeSection.appendChild(divider)
  testeSection.appendChild(testeHeading)
  testeSection.appendChild(description)
  testeSection.appendChild(grid)
  testeSection.appendChild(viewAllButton)

  // Testimonials Section
  const testimonials1 = [
    { quote: 'Serviço excelente, recomendo!', author: 'João Silva' },
    { quote: 'Atendimento impecável!', author: 'Maria Oliveira' },
    {
      quote: 'A empresa resolveu todos os meus problemas.',
      author: 'Carlos Pereira',
    },
  ]

  const testimonials2 = [
    {
      quote: 'Melhor experiência que já tive com uma empresa!',
      author: 'Ana Souza',
    },
    {
      quote: 'Suporte de primeira, altamente recomendado.',
      author: 'Pedro Santos',
    },
    {
      quote: 'Estou impressionado com a qualidade do serviço.',
      author: 'Lucas Lima',
    },
  ]

  function createCarouselContainer(id, parent) {
    const containerCarousel = document.createElement('div')
    containerCarousel.classList.add('carousel-container')
    containerCarousel.id = id
    parent.appendChild(containerCarousel)
    return containerCarousel
  }

  const testimonialsSection = document.createElement('section')
  testimonialsSection.className = 'testimonials-section'
  testeSection.insertAdjacentElement('afterend', testimonialsSection)

  const carousel1 = createCarouselContainer(
    'testimonialCarousel1',
    testimonialsSection
  )
  /*const carousel2 = createCarouselContainer(
    'testimonialCarousel2',
    testimonialsSection
  )*/

  createTestimonialCarousel('#testimonialCarousel1', testimonials1)
  //createTestimonialCarousel('#testimonialCarousel2', testimonials2)
}
