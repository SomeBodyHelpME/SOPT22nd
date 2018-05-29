const express = require('express');
const router = express.Router();

router.use('/', require('./single.js'));

module.exports = router;