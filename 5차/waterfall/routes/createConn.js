const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const dbConfig = {
	host : 'myins.ck95zai0h4fb.ap-northeast-2.rds.amazonaws.com',
	port : 3306,
	user : 'user',
	password : '11111111',
	database : 'testtest'
};

// localhos:3000/conn
router.get('/', function(req, res) {
	let connection = mysql.createConnection(dbConfig);
	let selectQuery = 'SELECT * FROM board';
	connection.query(selectQuery, function(err, result) {
		if (err) {
			res.status(500).send({
				message : "Internal Server Error"
			});
			connection.end();	// connection이 끝나면 연결을 끊어줘야함
			console.log("Internal Server Error");
		} else {
			res.status(200).send({
				message : "Successfully Get Board Data",
				data : result
			});
			connection.end();	// connection이 끝나면 연결을 끊어줘야함
			console.log("Successfully Get Board Data");
		}
	});
});

// localhost:3000/conn
router.post('/', function(req, res) {
	let user_idx = req.body.user_idx;
	let board_title = req.body.board_title;
	let board_content = req.body.board_content;

	if (!user_idx || !board_title || !board_content) {
		res.status(400).send({
			message : "Null Value"
		});
	} else {
		let connection = mysql.createConnection(dbConfig);
		let insertQuery = 'INSERT INTO board (user_idx, board_title, board_content) VALUES (?, ?, ?)';
		connection.query(insertQuery, [user_idx, board_title, board_content], function(err, result) {
			if (err) {
				res.status(500).send({
					message : "Internal Server Error"
				});
			} else {
				res.status(201).send({
					message : "Successfully Register Board Data"
				});
			}
			// 한 번만 작성하여 연결 끊는 것 가능
			connection.end();	// connection이 끝나면 연결을 끊어줘야함
		});
		// connection.end();	// 안됨!
	}
});

module.exports = router;
