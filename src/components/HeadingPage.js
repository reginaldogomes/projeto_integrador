// src/HeadingPage.js
import '/assets/css/components/heading-page.css'

export function HeadingPage({ title, subtitle }) {
  // Cria o elemento principal
  const headingPage = document.createElement('div')
  headingPage.className = 'heading-page'

  // Cria o título
  const h1 = document.createElement('h1')
  h1.textContent = title

  // Cria o subtítulo
  const h3 = document.createElement('h3')
  h3.textContent = subtitle

  // Anexa os elementos
  headingPage.appendChild(h1)
  headingPage.appendChild(h3)

  return headingPage
}
