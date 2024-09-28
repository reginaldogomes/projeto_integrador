import { posts } from '../data/posts'

// Função para obter o índice do post da URL
function getPostIndex() {
  const params = new URLSearchParams(window.location.search)
  return params.get('post')
}

// Função para renderizar os detalhes do post
export function renderPostDetails() {
  const app = document.getElementById('app')
  app.innerHTML = '' // Limpa o conteúdo anterior

  const postIndex = getPostIndex()
  const post = posts[postIndex]

  if (post) {
    const section = document.createElement('section')
    section.className = 'section'

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
    backLink.href = 'index.html'
    backLink.textContent = 'Voltar para a lista'
    backLink.className = 'back-link'

    postDetails.appendChild(title)
    postDetails.appendChild(content)
    postDetails.appendChild(author)
    postDetails.appendChild(backLink)
    section.appendChild(postDetails)
    app.appendChild(section)
  } else {
    app.innerHTML = '<p>Post não encontrado!</p>'
  }
}

// Inicializa a aplicação
renderPostDetails()
