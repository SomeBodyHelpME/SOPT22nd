var express = require('express');
var router = express.Router();

const moment = require('moment');

const upload = require('../config/multer.js');
const db = require('../module/pool.js');
const sql = require('../module/sql.js');

router.get('/', async (req, res) => {
	let user_idx = req.query.user_idx;

	let getQuery = 'SELECT * FROM board_login.bookmark WHERE user_idx = ?';
	let getResult = await db.queryParamCnt_Arr(getQuery, [user_idx]);

	if (!getResult) {
		res.status(500).send({
			message : "Internal Server Error"
		});
	} else {
		let result = [];
		for(let i = 0 ; i < getResult.length ; i++) {
			let getBoardQuery = 'SELECT * FROM board_login.board WHERE board_idx = ?';
			let getBoardResult = await db.queryParamCnt_Arr(getBoardQuery, [getResult[i].board_idx]);

      let getUserIdQuery = 'SELECT user_id FROM board_login.user WHERE user_idx = ?';
      let getUserId = await db.queryParamCnt_Arr(getUserIdQuery, [getBoardResult[0].user_idx]);

      getBoardResult[0].user_id = getUserId[0].user_id;
    	
      console.log(getBoardResult[0]);
      console.log(getUserId[0]);
    	result.push(getBoardResult[0]);
		}
		console.log(result);

		res.status(200).send({
			message : "Successfully Get Bookmark",
			data : result
		});
	}
});

router.post('/', async (req, res) => {
	let user_idx = req.body.user_idx;
	let board_idx = req.body.board_idx;

	if (!user_idx || !board_idx) {
		res.status(400).send({
			message : "Null Value"
		});
	} else {
		let selectQuery = 'SELECT * FROM board_login.bookmark WHERE user_idx = ? AND board_idx = ?';
		let selectResult = await db.queryParamCnt_Arr(selectQuery, [user_idx, board_idx]);

		if (selectResult.length === 1) {
			res.status(400).send({
				message : "Already Exists"
			});
		} else {
			let insertQuery = 'INSERT INTO board_login.bookmark (user_idx, board_idx) VALUES (?, ?)';
			let insertResult = await db.queryParamCnt_Arr(insertQuery, [user_idx, board_idx]);

			if (!insertResult) {
				res.status(500).send({
					message : "Internal Server Error"
				});
			} else {
				res.status(201).send({
					message : "Successfully Register Bookmark"
				});
			}
		}
	}
});

router.delete('/', async (req, res) => {
	let user_idx = req.body.user_idx;
	let board_idx = req.body.board_idx;

	if (!user_idx || !board_idx) {
		res.status(400).send({
			message : "Null Value"
		});
	} else {
		let deleteQuery = 'DELETE FROM board_login.bookmark WHERE board_idx = ? AND user_idx = ?';
		let deleteResult = await db.queryParamCnt_Arr(deleteQuery, [board_idx, user_idx]);

		if (!deleteResult) {
			res.status(500).send({
				message : "Internal Server Error"
			});
		} else {
			res.status(201).send({
				message : "Successfully Delete Bookmark"
			});
		}
	}
});

module.exports = router;