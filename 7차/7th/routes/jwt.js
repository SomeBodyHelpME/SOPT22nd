const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretKey.js').secret;

router.post('/sign', function(req, res) {
	
	let option = {
    algorithm : 'HS512',
    expiresIn : 60 * 60 * 24 * 1    //만료시간을 시작시간부터의 '초'값
  };

  let payload = {
    'string' : req.body.string
  };

  jwt.sign(payload, secretKey, option, function(err, token) {
    if(err) {
      res.status(500).send({
        message : "token err"
      });
    } else {
      res.status(201).send({
        message : "success",
        token : token
      });
    }
  });

});

router.post('/verify', function(req, res) {
	let token = req.headers.token;
	jwt.verify(token, secretKey, (err, data) => {
	  if (err){
	    console.log(err);
	  	if(err.message === 'jwt expired') console.log('expired token');    
	  	else if(err.message === 'invalid token') console.log('invalid token');

	  	res.status(500).send({
        message : "token err"
      });
	  }
	  else {
	    console.log(data);
	    console.log(data.string);
	    res.status(201).send({
	    	message : "success",
	    	data : data,
	    	string : data.string
	    });
	  }
	});
});

module.exports = router;