import '/assets/css/pages/blog.css'
import { posts } from '/data/posts.js'
import { HeadingPage } from '/components/HeadingPage.js'

export function renderBlog() {
  const app = document.getElementById('app')
  app.innerHTML = '' // Limpa o conteúdo anterior

  const section = createSection()
  const heading = createHeading()
  const postContainer = createPostContainer(posts)

  section.append(heading, postContainer)
  app.appendChild(section)
}

function createHeading() {
  return HeadingPage({
    title: 'Blog',
    subtitle: 'Notícias sobre ecoturismo em Floripa',
  })
}

export function renderPostDetails(postIndex) {
  const app = document.getElementById('app')
  app.innerHTML = '' // Limpa o conteúdo anterior

  const post = posts[postIndex]
  if (post) {
    const heading = HeadingPage({
      title: 'Blog Detalhes',
      subtitle: 'Notícias sobre ecoturismo em Floripa',
    })

    const postContainer = createPostDetails(post)

    app.append(heading, postContainer)
  } else {
    app.innerHTML = '<p>Post não encontrado!</p>'
  }
}

function createSection() {
  const section = document.createElement('section')
  section.className = 'section-page'
  return section
}

function createPostContainer(posts) {
  const postContainer = document.createElement('div')
  postContainer.className = 'container-blog'

  posts.forEach((post, index) => {
    const postElement = createPostElement(post, index)
    postContainer.appendChild(postElement)
  })

  return postContainer
}

function createPostElement(post, index) {
  const article = document.createElement('article')
  article.className = 'post-item'

  article.innerHTML = `
    <figure>
      <img src="${post.urlImg}" alt="Imagem do Post">
    </figure>
    <header>
      <h2>${post.title}</h2>
    </header>
    <p>${post.excerpt}</p>
    <p><strong>Autor:</strong> ${post.author}</p>
    <footer>
      <a href="#" class="read-more" data-index="${index}">Leia mais</a>
    </footer>
  `

  article.querySelector('.read-more').addEventListener('click', (e) => {
    e.preventDefault()
    renderPostDetails(index)
  })

  return article
}

function createPostDetails(post) {
  const postContainer = document.createElement('div')
  postContainer.className = 'container-blog-post-details'

  const postDetails = document.createElement('article')
  postDetails.className = 'post-details'

  postDetails.innerHTML = `
    <img src="${post.urlImg}" alt="Imagem do Post">
    <h1>${post.title}</h1>
    <p>${post.content}</p>
    <p><strong>Autor:</strong> ${post.author}</p>
  `

  const backLink = document.createElement('a')
  backLink.href = '#'
  backLink.textContent = 'Voltar para a lista'
  backLink.className = 'back-link'
  backLink.addEventListener('click', (e) => {
    e.preventDefault()
    renderBlog()
  })

  postDetails.appendChild(backLink)
  postContainer.appendChild(postDetails)

  return postContainer
}

window.addEventListener('DOMContentLoaded', renderBlog)
