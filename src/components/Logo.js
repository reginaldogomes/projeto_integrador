// src/components/Logo.js
import logoImg from '@/assets/img/logo-floripa-tour.svg'

export function renderLogo() {

  const logo = document.createElement('img');
  logo.setAttribute('src', logoImg);

  return logo;
  
}
