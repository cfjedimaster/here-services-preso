require('dotenv').config();
const fetch = require('node-fetch');

const APP_KEY = process.env.HERE_APP_KEY;

let at = '30.22,-92.02';
//201-000 is Chinese, 153-000 is Cuban
let categories = '201-000,153-000';

let url = `https://browse.search.hereapi.com/v1/browse?apikey=${APP_KEY}&at=${at}&categories=${encodeURIComponent(categories)}`;

fetch(url)
.then(res => res.json())
.then(res => {
	console.log(JSON.stringify(res, null, '\t'));
});
