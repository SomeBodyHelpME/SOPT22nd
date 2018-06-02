const express = require('express');
const router = express.Router();


router.use('/jwt', require('./jwt.js'));

module.exports = router;
