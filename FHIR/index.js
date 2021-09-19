import app from './server.js';
import axios from 'axios';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

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
