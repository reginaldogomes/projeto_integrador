const config = {
  // Informações gerais do projeto
  projectName: 'Floripa Tour',
  version: '1.0.0',
}

document.addEventListener('DOMContentLoaded', () => {
  document.title = config.projectName + " - " + config.version;
  
  const logoElement = document.getElementById('logo');
  logoElement.value(config.projectName);

  if (logoElement) {
    // Cria um nó de texto com o nome do projeto
    const projectNameTextNode = document.createTextNode(config.projectName);
    
    // Adiciona o nó de texto como filho do elemento 'logo'
    logoElement.appendChild(projectNameTextNode)
  } else {
    console.error('Elemento com ID "logo" não encontrado.');
  }
})

