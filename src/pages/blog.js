import '@/assets/css/blog.css'

export function renderBlog() {
  const app = document.getElementById('app')
  app.innerHTML = `
      <section class="blog-section">
        <div class="heading-page">
          <h1>Blog</h1>
          <h3>Noticias sobre ecoturismo em Floripa</h3>
        </div>
        <section class="container">
          <article>
            <img src="https://via.placeholder.com/300x200" alt="Imagem do Post 1">
            <header>
              <h2>Título do Post 1</h2>
            </header>
            <section>
              <p>Descrição curta do conteúdo do post 1...</p>
            </section>
            <footer>
              <a href="#" class="read-more">Leia mais</a>
            </footer>
          </article>
          <article>
            <img src="https://via.placeholder.com/300x200" alt="Imagem do Post 2">
            <header>
              <h2>Título do Post 2</h2>
            </header>
            <section>
              <p>Descrição curta do conteúdo do post 2...</p>
            </section>
            <footer>
              <a href="#" class="read-more">Leia mais</a>
            </footer>
          </article>
          <article>
            <img src="https://via.placeholder.com/300x200" alt="Imagem do Post 3">
            <header>
              <h2>Título do Post 3</h2>
            </header>
            <section>
              <p>Descrição curta do conteúdo do post 3...</p>
            </section>
            <footer>
              <a href="#" class="read-more">Leia mais</a>
            </footer>
          </article>
        </section>
      </div>
  `
}
