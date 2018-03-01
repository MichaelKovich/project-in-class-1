const axios = require("axios");

const getData = (req, res, next) => {
  axios
    .get('https://www.swapi.co/api/people')
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => { 
      res.status(500).json({message: 'Error in Request'})
    });
};

module.exports = {
  getData
};