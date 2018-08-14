var express = require('express');
var router = express.Router();
const crypto = require('crypto-promise');
const moment = require('moment');

const upload = require('../config/multer.js');
const db = require('../module/pool.js');
const sql = require('../module/sql.js');

router.post('/', async (req, res) => {
	let user_id = req.body.user_id;
	let user_pw = req.body.user_pw;

	if (!user_id || !user_pw) {
		res.status(400).send({
			message : "Null Value"
		});
	} else {
		let checkQuery = 'SELECT * FROM board_login.user WHERE user_id = ?';
		let checkResult = await db.queryParamCnt_Arr(checkQuery, [user_id]);

		if (!checkResult) {
			res.status(500).send({
				message : "Internal Server Error"
			});
		} else if (checkResult.length === 1) {
			let hashedpwd = await crypto.pbkdf2(user_pw, checkResult[0].user_salt, 100000, 32, 'sha512');
	    if (hashedpwd.toString('base64') === checkResult[0].user_pw) {
	      res.status(201).send({
	        message: "Login Success",
	        user_idx : checkResult[0].user_idx
	      });
	    } else {
	      res.status(400).send({
	        message : "Login Failed"
	      });
	      console.log("pwd error");
	    }
		} else {
			res.status(400).send({
				message : "Login Failed"
			});
			console.log("id error");
		}
	}
});

module.exports = router;