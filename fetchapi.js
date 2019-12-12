
export function showTodosConsole() {
//https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/
// Practical example
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)))
} 