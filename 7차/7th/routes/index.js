const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/mod', require('./mod/index.js'));
router.use('/jwt', require('./jwt.js'));

module.exports = router;
