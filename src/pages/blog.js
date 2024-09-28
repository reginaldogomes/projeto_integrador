import { posts } from '../data/posts'

import '@/assets/css/blog.css'

export function renderBlog() {
  const app = document.getElementById('app')
  const section = document.createElement('section')
  section.className = 'blog-section'

  const headingPage = document.createElement('div')
  headingPage.className = 'heading-page'

  const title = document.createElement('h1')
  title.textContent = 'Blog'
  const subtitle = document.createElement('h3')
  subtitle.textContent = 'Noticias sobre ecoturismo em Floripa'

  headingPage.appendChild(title)
  headingPage.appendChild(subtitle)
  section.appendChild(headingPage)

  // Cria o container fora do forEach
  const postElement = document.createElement('div')
  postElement.className = 'container'

  posts.forEach((post) => {
    // Cria cada artigo individualmente
    const article = document.createElement('article')
    article.innerHTML = `
      <img src="${post.urlImg}" alt="Imagem do Post 1">
      <header>
        <h2>${post.title}</h2>
      </header>
      <p>${post.content}</p>
      <p><strong>Autor:</strong> ${post.author}</p>
      <footer>
        <a href="#" class="read-more">Leia mais</a>
      </footer>
    `

    // Adiciona o artigo ao container
    postElement.appendChild(article)
  })

  // Adiciona o container ao section
  section.appendChild(postElement)

  app.appendChild(section)
}
