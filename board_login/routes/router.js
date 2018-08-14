var express = require('express');
var router = express.Router();

const moment = require('moment');

const upload = require('../config/multer');
const db = require('../module/pool.js');
const sql = require('../module/sql.js');

router.get('/board', async (req, res, next) => {
	let result = await sql.getAllBoardItem();

	if (!result) {
		res.status(500).send({
			message : "Internal Server Error"
		});
	} else {
		res.status(200).send({
			message : "Successful Get Board Data",
			data : result
		});
	}
});

router.post('/board', upload.single('photo'), async (req, res, next) => {
	var photo = null;
  if(req.file != undefined) {
    photo = req.file.location;
  }

	let user_idx = req.body.user_idx;
	let board_title = req.body.board_title;
	let board_content = req.body.board_content;
	let board_writetime = moment().format('YYYY-MM-DD HH:mm:ss');
	
	if (!user_idx || !board_title || !board_content) {
		res.status(400).send({
			message : "Null Value"
		});
	} else {
		let result = await sql.registerBoardItem(user_idx, board_title, board_content, photo, board_writetime);

		if (!result) {
			res.status(500).send({
				message : "Internal Server Error"
			});
		} else {
			res.status(201).send({
				message : "Successful Register Board Data",
			});
		}	
	}
});

router.delete('/board', async (req, res, next) => {
	let board_idx = req.body.board_idx;
	let user_idx = req.body.user_idx;

	let result = await sql.deleteBoardItem(board_idx, user_idx);

	if (!result) {
		res.status(500).send({
			message : "Internal Server Error"
		});
	} else if (result.affectedRows === 1) {
		res.status(201).send({
			message : "Successful Delete Board Data"
		});
	} else if (result.affectedRows === 0) {
		res.status(400).send({
			message : "Wrong Input"
		});
	}
});

router.get('/comment/:board_idx', async (req, res, next) => {
	let board_idx = req.params.board_idx;

	let result = await sql.getAllCommentItem(board_idx);

	if (!result) {
		res.status(500).send({
			message : "Internal Server Error"
		});
	} else {
		res.status(200).send({
			message : "Successful Get Comment Data",
			data : result
		});
	}
});

router.post('/comment', async (req, res, next) => {
	let user_idx = req.body.user_idx;
	let board_idx = req.body.board_idx;
	let comment_content = req.body.comment_content;
	let comment_writetime = moment().format('YYYY-MM-DD HH:mm:ss');

	if (!user_idx || !board_idx || !comment_content) {
		res.status(400).send({
			message : "Null Value"
		});
	} else {
		let result = await sql.registerCommentItem(user_idx, board_idx, comment_content, comment_writetime);

		if (!result) {
			res.status(500).send({
				message : "Internal Server Error"
			});
		} else {
			res.status(201).send({
				message : "Successful Register Comment Data",
			});
		}
	}
});

router.delete('/comment', async (req, res, next) => {
	let comment_idx = req.body.comment_idx;
	let user_idx = req.body.user_idx;

	let result = await sql.deleteCommentItem(comment_idx, user_idx);

	if (!result) {
		res.status(500).send({
			message : "Internal Server Error"
		});
	} else if (result.affectedRows === 1) {
		res.status(201).send({
			message : "Successful Delete Comment Data"
		});
	} else if (result.affectedRows === 0) {
		res.status(400).send({
			message : "Wrong Input"
		});
	}
});
module.exports = router;