// carousel.js - Componente reutilizável
import '/assets/css/components/carousel.css'

export function createTestimonialCarousel(containerSelector, testimonials) {
  const container = document.querySelector(containerSelector)
  let currentIndex = 0
  let slides = []

  // Função para renderizar os slides
  function renderSlides() {
    testimonials.forEach((testimonial, index) => {
      const slide = document.createElement('div')
      slide.classList.add('carousel-slide')
      if (index === 0) slide.classList.add('active')
      slide.innerHTML = `
              <p>"${testimonial.quote}"</p>
              <h4>- ${testimonial.author}</h4>
          `
      container.appendChild(slide)
    })

    slides = container.querySelectorAll('.carousel-slide')
  }

  // Função para renderizar os controles (botões)
  function renderControls() {
    const controls = document.createElement('div')
    controls.classList.add('carousel-controls')

    const prevButton = document.createElement('button')
    prevButton.textContent = 'Anterior'
    prevButton.classList.add('carousel-button')
    prevButton.addEventListener('click', () => moveSlide(-1))

    const nextButton = document.createElement('button')
    nextButton.textContent = 'Próximo'
    nextButton.classList.add('carousel-button')
    nextButton.addEventListener('click', () => moveSlide(1))

    controls.appendChild(prevButton)
    controls.appendChild(nextButton)
    container.appendChild(controls)
  }

  // Função para exibir o slide atual
  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[index].classList.add('active')
  }

  // Função para mover o slide (anterior/próximo)
  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length
    showSlide(currentIndex)
  }

  // Inicializa o carousel
  function init() {
    renderSlides()
    renderControls()
    showSlide(currentIndex)
  }

  init() // Chama a função para inicializar o carousel
}
