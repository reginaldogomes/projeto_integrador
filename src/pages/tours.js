import '@/assets/css/tours.css'

export function renderTours() {
  const app = document.getElementById('app')
  app.innerHTML = `
      <section class="section">
        <div class="heading-page">
          <h1>Passeios</h1>
          <h3>Veja os passeios que oferecemos na ilha da magina.</h3>
        </div>
        <div class="container" id="cards-container"></div>
      </section>
  `

  const tours = [
    {
      imgSrc: '/assets/img/Passeios/Bombinhas02.svg',
      imgAlt: 'Bombinhas',
      title: 'Bombinhas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    },
    {
      imgSrc: '/assets/img/Passeios/Dunasdosantinho.svg',
      imgAlt: 'Dunas do Santinho',
      title: 'Dunas do Santinho',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    },
    {
      imgSrc: '/assets/img/Passeios/IlhadoCampeche.svg',
      imgAlt: 'Ilha do Campeche',
      title: 'Ilha do Campeche',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    },
  ]

  const cardsContainer = document.getElementById('cards-container')
  tours.forEach((tours) => {
    const card = createCard(tour)
    cardsContainer.appendChild(card)
  })
}
