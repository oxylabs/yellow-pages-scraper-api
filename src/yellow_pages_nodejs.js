import fetch from 'node-fetch';

const username = 'USERNAME';
const password = 'PASSWORD';
const body = {
 'source': 'universal',
 'url': 'https://www.yellowpages.ca/bus/Ontario/North-York/The-Burger-Cellar/6835043.html',
};
const response = await fetch('https://realtime.oxylabs.io/v1/queries', {
  method: 'post',
  body: JSON.stringify(body),
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
  }
});

console.log(await response.json());
