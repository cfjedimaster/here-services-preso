require('dotenv').config();
const fetch = require('node-fetch');

const APP_KEY = process.env.HERE_APP_KEY;

let at = '30.22,-92.02';

let url = `https://revgeocode.search.hereapi.com/v1/revgeocode?apikey=${APP_KEY}&at=${at}`;

fetch(url)
.then(res => res.json())
.then(res => {
	console.log(JSON.stringify(res, null, '\t'));
});
