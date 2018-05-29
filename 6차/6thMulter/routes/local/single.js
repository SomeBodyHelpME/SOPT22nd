const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({storage : storage});

router.post('/', upload.single('image'), function(req, res) {
	console.log(req.file);
	res.status(201).send({
		message : "Successfully Store file"
	});
});

module.exports = router;