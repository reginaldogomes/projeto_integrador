import { posts } from '@/data/posts'
import { HeadingPage } from '@/components/HeadingPage'
import '@/assets/css/blog.css'

// Render Blog function
export function renderBlog() {
  const app = document.getElementById('app')

  // Criação da seção e seus elementos
  const section = createSection()
  const headingPage = HeadingPage({
    title: 'Blog',
    subtitle: 'Noticias sobre ecoturismo em Floripa',
  })

  const postContainer = createPostContainer(posts)

  // Utilização de DocumentFragment para evitar múltiplas inserções no DOM
  const fragment = document.createDocumentFragment()
  fragment.appendChild(headingPage)
  fragment.appendChild(postContainer)

  section.appendChild(fragment)
  app.appendChild(section)
}

function createSection() {
  const section = document.createElement('section')
  section.className = 'blog-section'
  return section
}

function createPostContainer(posts) {
  const postContainer = document.createElement('div')
  postContainer.className = 'container'

  posts.forEach((post) => {
    const article = createPostElement(post)
    postContainer.appendChild(article)
  })

  return postContainer
}

// Render Blog function
function createPostElement(post) {
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
      <a href="#" class="read-more">Leia mais</a>
    </footer>
  `
  return article
}
