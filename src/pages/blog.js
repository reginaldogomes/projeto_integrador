import { posts } from '/data/posts.js'
import { HeadingPage } from '/components/HeadingPage.js'
import '/assets/css/blog.css'

// Função para renderizar a lista de posts
export function renderBlog() {
  const app = document.getElementById('app')
  app.innerHTML = '' // Limpa o conteúdo anterior

  const section = createSection()
  const headingPage = HeadingPage({
    title: 'Blog',
    subtitle: 'Notícias sobre ecoturismo em Floripa',
  })

  const postContainer = createPostContainer(posts)

  const fragment = document.createDocumentFragment()
  fragment.appendChild(headingPage)
  fragment.appendChild(postContainer)

  section.appendChild(fragment)
  app.appendChild(section)
}

// Função para renderizar os detalhes de um post
export function renderPostDetails(postIndex) {
  const app = document.getElementById('app')
  app.innerHTML = '' // Limpa o conteúdo anterior

  const post = posts[postIndex]

  if (post) {
    const section = document.createElement('section')
    section.className = 'section-page'

    // Inclui o HeadingPage para o cabeçalho da página de detalhes
    const headingPage = HeadingPage({
      title: 'Blog',
      subtitle: 'Notícias sobre ecoturismo em Floripa',
    })

    const postContainer = document.createElement('div')
    postContainer.className = 'container'

    const postDetails = document.createElement('div')
    postDetails.className = 'post-details'

    const title = document.createElement('h1')
    title.textContent = post.title

    const content = document.createElement('p')
    content.textContent = post.content

    const author = document.createElement('p')
    author.innerHTML = `<strong>Autor:</strong> ${post.author}`

    // Cria o botão de voltar para a lista
    const backLink = document.createElement('a')
    backLink.href = '#'
    backLink.textContent = 'Voltar para a lista'
    backLink.className = 'back-link'
    backLink.addEventListener('click', (e) => {
      e.preventDefault()
      renderBlog() // Volta para a lista de posts
    })

    postDetails.appendChild(title)
    postDetails.appendChild(content)
    postDetails.appendChild(author)
    postDetails.appendChild(backLink)

    section.appendChild(headingPage) // Adiciona o HeadingPage
    section.appendChild(postContainer)
    postContainer.appendChild(postDetails)
    app.appendChild(section)
  } else {
    app.innerHTML = '<p>Post não encontrado!</p>'
  }
}

// Criação da seção de posts
function createSection() {
  const section = document.createElement('section')
  section.className = 'section-page'
  return section
}

// Criação do contêiner de posts
function createPostContainer(posts) {
  const postContainer = document.createElement('div')
  postContainer.className = 'container'

  posts.forEach((post, index) => {
    const article = createPostElement(post, index)
    postContainer.appendChild(article)
  })

  return postContainer
}

// Criação de um elemento individual de post
function createPostElement(post, index) {
  const article = document.createElement('article')
  article.innerHTML = `
    <figure>
      <img src="${post.urlImg}" alt="Imagem do Post">
    </figure>
    <header>
      <h2>${post.title}</h2>
    </header>
    <p>${post.content}</p>
    <p><strong>Autor:</strong> ${post.author}</p>
    <footer>
      <a href="#" class="read-more" data-index="${index}">Leia mais</a>
    </footer>
  `

  // Adiciona o evento de clique no link "Leia mais"
  const readMoreLink = article.querySelector('.read-more')
  readMoreLink.addEventListener('click', (e) => {
    e.preventDefault()
    renderPostDetails(index) // Chama a função que exibe os detalhes do post
  })

  return article
}

// Inicializa a aplicação ao carregar a página
window.addEventListener('DOMContentLoaded', renderBlog)
