// import './style.css'
// // import javascriptLogo from './javascript.svg'
// // import viteLogo from '/vite.svg'

import './assets/css/styles.css';  // Usando alias para assets
import { router } from './router/router.js';
import { renderHeader } from './components/Header';
import { renderFooter } from './components/Footer';
import { renderTouristSpots } from './components/TouristSpots.js'

document.addEventListener('DOMContentLoaded', () => {
    const header = renderHeader();
    document.body.prepend(header);
    router();
    const footer = renderFooter();
    document.body.appendChild(footer);

    function addTouristSpots() {
        // Adiciona o contêiner #tourist-spots ao DOM
        const tourist = document.getElementById('section');
        tourist.innerHTML += '<div id="touristSpots"></div>'
        // document.getElementById('section-1').innerHTML += '<div id="touristSpots"></div>';
        
        // Agora que o contêiner foi adicionado, chamamos a renderização
        renderTouristSpots();
    }

    addTouristSpots();
});
