import fetch from 'node-fetch';

const response = await fetch('http://localhost:3001/api/v1/ideas');
const data = await response.json();

// console.log(data);

export default data;