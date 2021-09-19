const express = require('express');
const app = express();

const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

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
  // console.log(procedures);
  return procedures;
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

const procedure = require('../routes/procedure');
app.use('/procedure', procedure);
