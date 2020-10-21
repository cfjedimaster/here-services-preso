require('dotenv').config();
const fetch = require('node-fetch');

const APP_KEY = process.env.HERE_APP_KEY;


let url = `https://router.hereapi.com/v8/routes?apikey=${APP_KEY}&&transportMode=car&origin=30.22,-92.02&destination=29.95838,-90.17346&return=polyline,actions,instructions,summary`;

fetch(url)
.then(res => res.json())
.then(res => {
	console.log(JSON.stringify(res, null, '\t'));
});
