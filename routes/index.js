const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title:'Francisco Javier Marquez Villalon'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title:  'Contact'});
});

module.exports = router;