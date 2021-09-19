import express from 'express';
import axios from 'axios';
import cors from 'cors';
import procedure from './api/procedure.route.js';

const app = express();

app.use(cors());
app.use(express.json());

// Info needed to connect to FHIR
const config = {
  method  : 'get',
  url     : `${process.env.API_URL}/Procedure`,
  headers : {
    'x-api-key' : process.env.XAPIKEY
  }
};

// Temp function to get procedure data
const getProcedure = async () => {
  return axios(config).then(res => {
    const { entry: procedures } = res.data;
    // console.log(procedures);
    return procedures;
  });
};

// create a GET route
// Return the procedure data
app.get('/api', async (req, res) => {
  const procedure = await getProcedure();
  res.send(JSON.stringify(procedure));
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// API route
app.use('/api/v1/procedures', procedure);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

export default app;
