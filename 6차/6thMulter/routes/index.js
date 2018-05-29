const express = require('express');
const router = express.Router();

router.use('/local', require('./local/index.js'));
router.use('/s3', require('./s3/index.js'));

router.use('/moment', require('./moment.js'));
module.exports = router;