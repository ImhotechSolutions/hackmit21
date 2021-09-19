import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// Info needed to connect to FHIR
const config = {
  method  : 'get',
  url     : `${process.env.API_URL}/Procedure`,
  headers : {
    'x-api-key' : process.env.XAPIKEY
  }
};

// Temp function to get procedure data
const getProcedure = () => {
  return axios(config).then(({ data }) => {
    const { entry: procedures } = data;
    // console.log(procedures);
    return procedures;
  });
};

router.route('/').get(getProcedure);

export default router;
