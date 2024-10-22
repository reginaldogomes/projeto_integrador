// carousel.js
export function initCarousel(containerSelector) {
  let index = 0
  const avaliacoes = document.querySelectorAll(
    `${containerSelector} .avaliacao`
  )
  const totalAvaliacoes = avaliacoes.length
  const avaliacaoContainer = document.querySelector(
    `${containerSelector} .avaliacoes`
  )

  const atualizarCarrossel = () => {
    const offset = -index * 100
    avaliacaoContainer.style.transform = `translateX(${offset}%)`
  }

  const mudarAvaliacao = () => {
    avaliacoes[index].classList.remove('active')
    index = (index + 1) % totalAvaliacoes
    avaliacoes[index].classList.add('active')
    atualizarCarrossel()
  }

  atualizarCarrossel()
  setInterval(mudarAvaliacao, 3000)
}
