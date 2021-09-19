import express from 'express';
import axios from 'axios';
import cors from 'cors';
import procedure from './api/procedure.route.js';

const app = express();

app.use(cors());
app.use(express.json());

// Info needed to connect to FHIR
// const config = {
//   method  : 'get',
//   url     : `${process.env.API_URL}/Procedure`,
//   headers : {
//     'x-api-key' : process.env.XAPIKEY
//   }
// };

const configSingle = id => {
  return {
    method  : 'get',
    url     : `${process.env.API_URL}/Procedure/${id}`,
    headers : {
      'x-api-key' : process.env.XAPIKEY
    }
  };
};

const configURL = url => {
  return {
    method  : 'get',
    url     : url,
    headers : {
      'x-api-key' : process.env.XAPIKEY
    }
  };
};

// Temp function to get procedure data
const getProcedures = async (id = '') => {
  const go = true;
  const nextURL = '';
  const procedures = axios(configSingle(id)).then(res => {
    return res.data.entry;
  });
  return procedures;
};

// const getProcedureID = async id => {
//   return axios(configSingle(id)).then(res => {
//     const procedures = res.data;
//     console.log(procedures);
//     return procedures;
//   });
// };

const getProcedureURL = async url => {
  const procedures = axios(configURL(url)).then(res => {
    return res.data.entry;
  });
  return procedures;
};

// getProcedureURL(
//   'https://fhir.r9ymi5mtircd.static-test-account.isccloud.io/Procedure?page=2&queryId=69354794-1929-11ec-8a16-02f9c47f2922'
// );

// create a GET route
// Return the procedure data
app.get('/api', async (req, res) => {
  let procedure = await getProcedures();

  for (let i = 2; i < 8; i++) {
    procedure = procedure.concat(
      await getProcedureURL(
        `https://fhir.r9ymi5mtircd.static-test-account.isccloud.io/Procedure?page=${i}&queryId=1e353518-193f-11ec-a8d1-02f9c47f2922`
      )
    );
  }

  console.log(procedure);
  res.send(JSON.stringify(procedure));
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// API route
app.use('/api/v1/procedures', procedure);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

export default app;
