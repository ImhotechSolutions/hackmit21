const express = require('express');
const fhirClient = require('fhirclient');
const axios = require('axios');
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();

const config = {
  method  : 'get',
  url     : `${process.env.API_URL}/Procedure`,
  headers : {
    'x-api-key' : process.env.XAPIKEY
  }
};

axios(config).then(({ data }) => {
  const { entry: patientData } = data;
  console.log(patientData);
  return patientData;
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
