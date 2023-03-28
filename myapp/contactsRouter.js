const express = require('express');
const router = express.Router();
//const myRouter= require('./my-router');



router.get('/', (req, res) => {
      res.send('Это главный роутер');
  })
  
  router.get('/contacts', (req, res) => {
    res.json({contacts: []})
  })
  .post('/contacts', (req, res) => {
    res.send("Изменения")
  })
  
  // определим роутер about
  router.get('/about', (req, res) => {
    res.send('About');
  });
  module.exports = {router};