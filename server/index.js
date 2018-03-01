const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const peopleCtrl = require(`${__dirname}/controllers/peopleCtrl`);
const {getData} = require(`${__dirname}/controllers/peopleCtrl`);
// Absolute Dependencies

const app = express();
// Express.js is actually creating our server.

const port = 3001;
// Define a port for listening

app.use(bodyParser.json());
app.use(cors());

app.get('/api/getData', getData);

app.listen(
  port,
  () => {
    console.log(`Listening on port!`);
  }
);