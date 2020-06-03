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

app.get('/lift', (req, res) => {
  res.send('get lift works!');
});

app.post('/lift', (req, res) => {
  res.send('post a lift works!');
});

app.delete('/lift', (req, res) => {
  res.send('delete a lift works!')
});

app.put('/lift', (req, res) => {
  res.send('update lift works!')
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})