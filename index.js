import { square } from './mylib.js';
import { hello } from './hello.js';
import { showTodosConsole } from './fetchapi.js';
import { showTodosAppDiv } from './fetchapi.js';
//import { showBitIoConn } from './bitioConn.js';

// Import stylesheets
import './style.css';

console.log(square(11)); // 121

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

//teste - funcionou.
hello('Bisterco');
hello('teste commit...');
hello('Square 4 = ' + square(4));

hello('... VER CONSOLE ...');

//showTodosConsole();

showTodosAppDiv();

//showBitIoConn();
