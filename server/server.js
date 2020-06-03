const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 9000;
const queries = require('../database/queries.js');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/baselines', (req, res) => {
  res.send('get baslines works!');
});

app.get('/goals', (req, res) => {
  res.send('get goals works!')
})

app.post('/baseline', (req, res) => {
  res.send('post a baseline works!');
});

app.post('/goal', (req, res) => {
  res.send('post a goal works!');
});

app.delete('/baseline', (req, res) => {
  res.send('delete a baseline works!')
});

app.delete('/goal', (req, res) => {
  res.send('delete a goal works!')
});

app.put('/baseline', (req, res) => {
  res.send('update baseline works!')
});

app.put('/baseline', (req, res) => {
  res.send('update baseline works!')
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})