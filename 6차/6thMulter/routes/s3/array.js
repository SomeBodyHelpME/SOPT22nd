const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const aws = require('aws-sdk');
// aws.config.loadFromPath('./config/aws_config.json');
// const s3 = new aws.S3();
// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: 'mybucketveryunique',
//         acl: 'public-read',
//         key: function(req, file, cb) {
//             cb(null, Date.now() + '.' + file.originalname.split('.').pop());
//         }
//     })
// });
const upload = require('../../config/multer.js');

router.post('/', upload.array('image'), function(req, res) {
	console.log(req.files);
	res.status(201).send({
		message : "Successfully Store files"
	});
});

router.post('/fields', upload.fields([{name : 'test', maxCount : 1}, {name : 'test2', maxCount : 2}]), function(req, res) {
  console.log(req.files);
  res.status(201).send({
    message : "Successfully Store files"
  });
});

module.exports = router;