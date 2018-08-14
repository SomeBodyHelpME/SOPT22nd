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
			res.status(400).send({
				message : "Already Exists"
			});
		} else {
			const salt = await crypto.randomBytes(32);
	    const hashedpwd = await crypto.pbkdf2(user_pw, salt.toString('base64'), 100000, 32, 'sha512');

			let insertQuery = 'INSERT INTO board_login.user (user_id, user_pw, user_salt) VALUES (?, ?, ?)';
			let insertResult = await db.queryParamCnt_Arr(insertQuery, [user_id, hashedpwd.toString('base64'), salt.toString('base64')]);

			if (!insertResult) {
				res.status(500).send({
					message : "Internal Server Error"
				});
			} else {
				res.status(201).send({
					message : "Successfully Sign Up"
				});
			}
		}
	}
});

module.exports = router;