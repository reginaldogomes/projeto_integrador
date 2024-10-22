import { HeadingPage } from '/components/HeadingPage.js'
import '/assets/css/about.css'

export function renderAbout() {
  const app = document.getElementById('app')

  // Limpa o conteúdo anterior, se houver
  app.innerHTML = ''

  // Cria e insere o componente HeadingPage
  const headingPage = HeadingPage({
    title: 'Sobre o Floripa Tour',
    subtitle: 'Conheça nossa história',
  })
  app.appendChild(headingPage)

  // Cria o conteúdo da página usando createElement para evitar o uso direto de innerHTML
  const container = document.createElement('div')
  container.classList.add('container-about')

  const paragraph = document.createElement('p')
  paragraph.textContent = `
    Floripa Tur, o seu portal completo para descobrir os encantos naturais e culturais de Florianópolis, a Ilha da Magia. Nosso objetivo é proporcionar uma experiência única e informativa, destacando os principais atrativos da cidade. Aqui, você encontrará informações sobre as famosas praias que fazem de Florianópolis um destino reconhecido mundialmente, além de explorar suas áreas de preservação ambiental, ideais para os amantes do ecoturismo. Seja para relaxar nas praias ou desbravar trilhas em meio à natureza, o Floripa Tur é seu guia definitivo para viver tudo o que a cidade tem a oferecer.
  `

  // Adiciona o parágrafo dentro do container
  container.appendChild(paragraph)

  // Cria o elemento de imagem
  const image = document.createElement('img')
  image.src = '/assets/img/ponte-hercilio-luz-florianopolis-sc.webp' // Defina o caminho correto da imagem
  image.alt = 'Ponte Hercilio Luz Florianópolis SC'

  // Adiciona a imagem ao container
  container.appendChild(image)

  // Adiciona o container ao app
  app.appendChild(container)
}
