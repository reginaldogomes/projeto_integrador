// src/components/Footer.js
import '@/assets/css/components/footer.css'

export function renderFooter() {
  const footer = document.createElement('footer')

  footer.innerHTML = `
    <p>© Floripa Tour – 2024. Todos direitos reservados.</p>
  `

  return footer
}
