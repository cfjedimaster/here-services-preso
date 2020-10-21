require('dotenv').config();
const fetch = require('node-fetch');

const APP_KEY = process.env.HERE_APP_KEY;

let at = '30.22,-92.02';
let query = 'taco bell';

let url = `https://discover.search.hereapi.com/v1/discover?apikey=${APP_KEY}&at=${at}&q=${encodeURIComponent(query)}`;

fetch(url)
.then(res => res.json())
.then(res => {
	console.log(JSON.stringify(res, null, '\t'));
});
