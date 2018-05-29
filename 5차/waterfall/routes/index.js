const express = require('express');
const router = express.Router();

router.use('/conn', require('./createConn.js'));

// router.use method의 첫 번째 인자가 어떻게 url에 적용되는지 => ``안에 있는 값
router.use('/signin', require('./login/signin.js'));	// localhost:3000`/signin`
router.use('/signup', require('./login/signup.js'));	// localhost:3000`/signup`

router.use('/', require('./board/index.js'));					// localhost:3000`/`

module.exports = router;