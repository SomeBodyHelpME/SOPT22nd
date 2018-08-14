var express = require('express');
var router = express.Router();

router.use('/', require('./router.js'));
router.use('/api', require('./api.js'));
router.use('/signin', require('./signin.js'));
router.use('/signup', require('./signup.js'));
router.use('/bookmark', require('./bookmark.js'));
module.exports = router;
