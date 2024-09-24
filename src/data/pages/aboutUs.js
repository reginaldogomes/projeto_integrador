const aboutUs = {
  title: 'Portal de Turismo de Florianópolis',
  description:
    'Bem-vindo ao Portal de Turismo de Florianópolis, seu guia definitivo para explorar os encantos naturais e culturais desta ilha paradisíaca.',
  sections: [
    {
      title: 'Seções Principais',
      content: [
        {
          subtitle: 'Cultura',
          paragraph:
            'Florianópolis é uma cidade rica em tradições culturais, que mesclam influências açorianas com a contemporaneidade de um importante centro urbano.',
        },
        {
          subtitle: 'Gastronomia',
          paragraph:
            'A gastronomia de Florianópolis é um verdadeiro convite aos sabores do mar. Pratos típicos como a tainha, camarão e ostras frescas são apenas algumas das iguarias que fazem parte do cardápio local.',
        },
        {
          subtitle: 'História',
          paragraph:
            'A história de Florianópolis é marcada pela colonização portuguesa, especialmente pelas influências dos açorianos.',
        },
      ],
    },
    {
      title: 'Foco em Ecoturismo e Praias',
      paragraph:
        'Nosso portal é especializado em promover passeios ecoturísticos, destacando trilhas, reservas naturais e praias que atraem visitantes em busca de contato direto com a natureza.',
      subsection: {
        subtitle: 'Destaque para as Praias',
        paragraph:
          'Florianópolis possui mais de 40 praias, cada uma com suas particularidades.',
      },
    },
    {
      title: 'Galeria de Imagens',
      paragraph:
        'Para ilustrar as belezas naturais de Florianópolis, nossa galeria de imagens apresenta uma seleção visual dos principais pontos turísticos, praias e áreas de preservação.',
    },
  ],
}

// Get the content div
const contentDiv = document.getElementById('about-us')

// Initialize the HTML content
let htmlContent = `
    <h1>${aboutUs.mainTitle}</h1>
    <h2>${aboutUs.title}</h2>
    <p>${aboutUs.description}</p>
`

// Append sections
aboutUs.sections.forEach((section) => {
  htmlContent += `
        <div class="section">
            <h2>${section.title}</h2>
    `

  if (section.content) {
    section.content.forEach((item) => {
      htmlContent += `
                <h3>${item.subtitle}</h3>
                <p>${item.paragraph}</p>
            `
    })
  } else if (section.paragraph) {
    htmlContent += `<p>${section.paragraph}</p>`
  }

  if (section.subsection) {
    htmlContent += `
            <div class="subsection">
                <h3>${section.subsection.subtitle}</h3>
                <p>${section.subsection.paragraph}</p>
            </div>
        `
  }

  htmlContent += '</div>'
})

// Set the innerHTML of the content div
contentDiv.innerHTML = htmlContent
