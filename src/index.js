const express = require('express');
const bodyParser = require('body-parser');

const api = express();

api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

// api.post('/add', (req, res) => {
// 	console.log('Post request received');
//    });

//    api.post('/add', (req, res) => {
// 	res.send('It works!');
//    });
api.listen(3000, () => {
  console.log('API up and running!');
});

api.post('/add', (req, res) => {
	console.log(req.body);
	res.send('It works!');
   });

// api.get('/', (req, res) => {
// 	console.log(req);
// 	res.send('Hello, world!');
//   });