require('dotenv').config();
const fetch = require('node-fetch');

const APP_KEY = process.env.HERE_APP_KEY;

let address = '1100 Lee Ave, Lafayette, LA 70501';
//let address = 'Lafayette, LA 70501';

let url = `https://geocode.search.hereapi.com/v1/geocode?apikey=${APP_KEY}&q=${encodeURIComponent(address)}`;

fetch(url)
.then(res => res.json())
.then(res => {
	console.log(JSON.stringify(res, null, '\t'));
});
