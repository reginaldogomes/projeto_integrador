// Função para gerar a lista de pontos turísticos no HTML
function renderTouristSpots() {
  const list = document.getElementById('touristSpots');
  
  // Limpar a lista antes de adicionar novos itens
  list.innerHTML = '';

  // Iterar sobre o array e adicionar os pontos turísticos na lista
  touristSpots.forEach(spot => {
    const listItem = document.createElement('li');
    listItem.textContent = `${spot.nome} - ${spot.cidade}, ${spot.estado}`;
    list.appendChild(listItem);
  });
}

// Chamar a função para exibir os pontos turísticos
renderTouristSpots();


// Função para renderizar o menu no HTML
function renderMenu() {
  const menu = document.getElementById('menu');
  
  // Limpa o menu antes de adicionar os itens
  menu.innerHTML = '';

  // Itera sobre os itens do menu e adiciona no HTML
  menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    link.href = item.link;
    link.textContent = item.name;
    
    // Adiciona o evento onclick para chamar navigateTo
    link.setAttribute('onclick', `navigateTo(event, '${item.link}')`);

    listItem.appendChild(link);
    menu.appendChild(listItem);
  });
}

// Função para lidar com a navegação
function navigateTo(event, path) {
  event.preventDefault();
  console.log(`Navegando para: ${path}`);
  // Aqui você pode implementar a navegação via JavaScript, como manipulação de history API ou outro método.
}

// Chamar a função para exibir o menu
renderMenu();

