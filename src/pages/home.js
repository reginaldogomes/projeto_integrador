// import { renderTouristSpots } from "../components/TouristSpots"
import '/assets/css/pages/home.css'
import { createTestimonialCarousel } from '../components/Carousel'

export function renderHome() {
  const app = document.getElementById('app')

  // Limpa o conteúdo anterior, se houver
  if (!app) {
    console.error('Elemento #app não encontrado!')
    return
  }
  app.innerHTML = '' // Limpa o conteúdo anterior

  // Cria o conteúdo da página usando createElement para evitar o uso direto de innerHTML
  const container = document.createElement('div')
  container.classList.add('container-home')

  // Criação do Hero
  const heroSection = document.createElement('section')
  heroSection.className = 'hero'

  const heroContent = document.createElement('div')
  heroContent.className = 'hero__content'

  // Adicionando o texto
  const locationSpan = document.createElement('span')
  locationSpan.textContent = 'Florianópolis'

  const heading = document.createElement('h1')
  heading.textContent = 'Onde a Natureza Se Transforma em Pura Emoção'

  const paragraph = document.createElement('p')
  paragraph.textContent =
    'Explore Praias Surreais, Descubra Montanhas de Aventuras e Deixe-se Guiar Pelas Belezas Inesquecíveis. Viva a Magia e Renove Seus Sentidos em Cada Paisagem!'

  // Montando a estrutura do Hero
  heroContent.appendChild(locationSpan)
  heroContent.appendChild(heading)
  heroContent.appendChild(paragraph)
  heroSection.appendChild(heroContent)
  container.appendChild(heroSection)

  // Adiciona o container da página ao app
  app.appendChild(container)

  // Testemunhos para os carousels
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

  // Função para criar o container do carousel dinamicamente
  function createCarouselContainer(id, parent) {
    const containerCarousel = document.createElement('div')
    containerCarousel.classList.add('carousel-container')
    containerCarousel.id = id

    // Adiciona o container dentro da seção pai (parent)
    parent.appendChild(containerCarousel)

    return containerCarousel
  }

  // Criação da seção de carousels
  const testimonialsSection = document.createElement('section')
  testimonialsSection.className = 'testimonials-section'

  // Adiciona a nova seção após a seção hero
  heroSection.insertAdjacentElement('afterend', testimonialsSection)

  // Cria os containers dentro da nova seção de carousels
  const carousel1 = createCarouselContainer(
    'testimonialCarousel1',
    testimonialsSection
  )
  const carousel2 = createCarouselContainer(
    'testimonialCarousel2',
    testimonialsSection
  )

  // Instância 1 do carousel
  createTestimonialCarousel('#testimonialCarousel1', testimonials1)

  // Instância 2 do carousel
  createTestimonialCarousel('#testimonialCarousel2', testimonials2)
}
