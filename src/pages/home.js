// import { renderTouristSpots } from "../components/TouristSpots"
import '/assets/css/pages/home.css'

export function renderHome() {
  const app = document.getElementById('app')

  // Limpa o conteúdo anterior, se houver
  app.innerHTML = ''

  if (!app) {
    console.error('Elemento #app não encontrado!')
    return
  }

  // Cria o conteúdo da página usando createElement para evitar o uso direto de innerHTML
  const container = document.createElement('div')
  container.classList.add('container-home')

  // Criação do Hero
  // Criação da seção
  const heroSection = document.createElement('section')
  heroSection.className = 'hero'

  // Criação do conteúdo da seção
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

  // Montando a estrutura
  heroContent.appendChild(locationSpan)
  heroContent.appendChild(heading)
  heroContent.appendChild(paragraph)
  heroSection.appendChild(heroContent)

  container.appendChild(heroSection)

  app.appendChild(container)
}
