const express = require('express');
const router = express.Router();

const async = require('async');
const pool = require('../../config/dbPool.js');

// url : localhost:3000/board , method : GET
router.get('/', function(req, res) {

	let taskArray = [
    // 1. pool에서 connection 하나 가져오기
		function(callback) {
      pool.getConnection(function(err, connection) {
        if (err) {
          res.status(500).send({
            message : "Internal Server Error"
          });
          callback("pool.getConnection Error : " + err);
        } else {
        	callback(null, connection);
        }
      });
    },
    // 2. 게시판 정보를 가져옴
    function(connection, callback) { 
    	let selectBoardItemsQuery = 'SELECT * FROM board ORDER BY board_idx DESC';		// board_idx로 내림차순 정렬
    	connection.query(selectBoardItemsQuery, function(err, result) {
    		if (err) {
          res.status(500).send({
            message : "Internal Server Error"
          });
          callback("connection.query Error : " + err);
        } else {
        	res.status(200).send({
        		message : "Successfully Get Board Data",
        		data : result								// 게시판 정보 JSON 객체로 전달
        	});
    			callback(null, "Successfully Get Board Data");
        }
        connection.release();			// connection 반환
    	});
    }
	];

	async.waterfall(taskArray, function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
});

// url : localhost:3000/board , method : POST
router.post('/', function(req, res) {
	let user_idx = req.body.user_idx;
	let board_title = req.body.board_title;
	let board_content = req.body.board_content;

	let taskArray = [
    // 1. Null Value Check
		function(callback) {
			if (!user_idx || !board_title || !board_content) {
				res.status(400).send({
					message : "Null Value"
				});
				callback("Null Value");
			} else {
				callback(null);
			}
		},
    // 2. pool에서 connection 하나 가져오기
		function(callback) {
      pool.getConnection(function(err, connection) {
        if (err) {
          res.status(500).send({
            message : "Internal Server Error"
          });
          callback("pool.getConnection Error : " + err);
        } else {
        	callback(null, connection);
        }
      });
    },
    // 3. 게시판에 글 추가
    function(connection, callback) {
    	let insertBoardItemQuery = 'INSERT INTO board (user_idx, board_title, board_content) VALUES (?, ?, ?)';
    	connection.query(insertBoardItemQuery, [user_idx, board_title, board_content], function(err, result) {
    		if (err) {
          res.status(500).send({
            message : "Internal Server Error"
          });
          callback("connection.query Error : " + err);
        } else {
        	res.status(201).send({
        		message : "Successfully Register Board Data"        		
        	});
    			callback(null, "Successfully Register Board Data");
        }
        connection.release();			// connection 반환
    	});
    }
	];

	async.waterfall(taskArray, function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
});

// url : localhost:3000/board , method : DELETE
router.delete('/', function(req, res) {
	let user_idx = req.body.user_idx;
	let board_idx = req.body.board_idx;

	let taskArray = [
    // 1. Null Value Check
		function(callback) {
			if (!user_idx || !board_idx) {
				res.status(400).send({
					message : "Null Value"
				});
				callback("Null Value");
			} else {
				callback(null);
			}
		},
    // 2. pool에서 connection 하나 가져오기
		function(callback) {
      pool.getConnection(function(err, connection) {
        if (err) {
          res.status(500).send({
            message : "Internal Server Error"
          });
          callback("pool.getConnection Error : " + err);
        } else {
        	callback(null, connection);
        }
      });
    },
    // 3. 게시판에 글 하나 삭제
    function(connection, callback) {
    	let deleteBoardItemQuery = 'DELETE FROM board WHERE user_idx = ? AND board_idx = ?';		// 특정 게시판 글의 index와 작성자를 동시에 확인 => 작성자만 삭제 가능
    	connection.query(deleteBoardItemQuery, [user_idx, board_idx], function(err, result) {
    		if (err) {
          res.status(500).send({
            message : "Internal Server Error"
          });
          callback("connection.query Error : " + err);
        } else {
        	// console.log(result); // 어떤 JSON 정보가 넘어오는지 확인해보세요:)
        	if (result.affectedRows === 1) {					// affectedRows 프로퍼티 : 영향을 미친 데이터 Row 수
						res.status(201).send({
							message : "Successful Delete Board Data"
						});
						callback(null, "Successfully Delete Board Data");
					} else if (result.affectedRows === 0) {		// 바뀐 row 가 없으면 => 입력을 잘못 받은 것
						res.status(400).send({
							message : "Wrong Input"
						});
						callback("Wrong Input");
					}
        }
        connection.release();			// connection 반환
    	});
    }
	];

	async.waterfall(taskArray, function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
});

module.exports = router;