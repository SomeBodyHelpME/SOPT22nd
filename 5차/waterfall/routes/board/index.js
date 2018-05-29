const express = require('express');
const router = express.Router();

router.use('/board', require('./board.js'));		//localhost:3000`/board`

module.exports = router;