const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { value } = req.cookies;
  res.render('index', { value });
});

router.post('/set', (req, res) => {
  res.cookie('value', req.body.value, {
    maxAge: 10000,
  });
  res.redirect('/');
});

module.exports = router;
