const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();

// Info needed to connect to FHIR
const config = {
  method  : 'get',
  url     : `${process.env.API_URL}/Procedure`,
  headers : {
    'x-api-key' : process.env.XAPIKEY
  }
};

// Temp function to get procedure data
axios(config).then(({ data }) => {
  const { entry: procedures } = data;
  console.log(procedures);
  return procedures;
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
