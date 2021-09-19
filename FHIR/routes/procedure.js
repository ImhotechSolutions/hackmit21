const router = require('express').Router();
const axios = require('axios');

router.route('/').get((req, res) => {
  console.log('Procedure route');
});
