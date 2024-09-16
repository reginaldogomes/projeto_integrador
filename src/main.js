// import './style.css'
// // import javascriptLogo from './javascript.svg'
// // import viteLogo from '/vite.svg'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <h1>Teste ViteJS</h1>
//   </div>
// `


// import '@/assets/css/styles.css';  // Usando alias para assets
// import { router } from '@/router/router.js';  // Importando o roteamento

// document.addEventListener('DOMContentLoaded', () => {
//     router();  // Iniciar o roteamento
// });

import './assets/css/styles.css';  // Usando alias para assets
import { router } from './router/router.js';
import { renderHeader } from './components/Header';
import { renderFooter } from './components/Footer';


document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    router(); // Configura o roteamento
    renderFooter();
});
