
export function showTodosConsole() {
//https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/
// Practical example
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)))
} 

export function showTodosAppDiv() {
//https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/
// Practical example
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(function(data) {
      let users = data.results;
      //appDiv.innerHTML += '${users.userId} ${users.title}';
      //appDiv.innerHTML += users.length;
      //console.log('Request succeeded with JSON response', data);
      console.log('TOTAL DE USUARIOS:',data.length);
      const appDiv1 = document.getElementById('app');
      appDiv1.innerHTML += 'TOTAL DE USUARIOS:' + data.length;
      appDiv1.innerHTML += '<BR><BR>3 PRIMEIROS:<BR>'
      appDiv1.innerHTML += '<BR>Id:' + data[0].id + ' / Title: ' + data[0].title + '<br>'
      appDiv1.innerHTML += '<BR>Id:' + data[1].id + ' / Title: ' + data[1].title + '<br>'
      //concatenacao moderna
      appDiv1.innerHTML += `<BR>Id: ${data[2].id} Title: ${data[2].title} <br><br>`      
      }
    )
} 
