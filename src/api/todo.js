import fetch from 'node-fetch';

export default function fetchAllTodos() {
  return new Promise(resolve => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => resolve(json));
  });
}
