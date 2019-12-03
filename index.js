// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var formatterBR = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  // the default value for minimumFractionDigits depends on the currency
  // and is usually already 2
});

appDiv.innerHTML += '<h2>' + formatterBR.format(14495.6) + '</h2>';
