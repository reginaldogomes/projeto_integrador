import './assets/css/styles.css'
import './assets/css/responsive.css'
import { router } from './router/router.js'
import { renderHeader } from './components/Header'
import { renderFooter } from './components/Footer'

document.addEventListener('DOMContentLoaded', () => {
  const header = renderHeader()
  document.body.prepend(header)

  router()

  const footer = renderFooter()
  document.body.appendChild(footer)
})
