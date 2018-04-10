const crypto = require('crypto');

var str = 'asdf1234';
// 1. 단순 해싱으로 비밀번호 해싱
let hashAlgorithm = crypto.createHash('sha512');
// 2. 선택된 알고리즘으로 해싱
let hashing = hashAlgorithm.update(str);
// 3. 표시할 인코딩 설정
let hashedString = hashing.digest('base64');

// let hashedString = crypto.createHash('sha512')
// 													.update(str)
// 													.digest('base64');

console.log('hashedString : ' + hashedString);

crypto.randomBytes(32, function(err, buffer) {
	if (err) {
		console.log(err);
	} else {
		console.log(buffer);
		console.log('buffer : ' + buffer.toString('base64'));

		crypto.pbkdf2(str, buffer.toString('base64'), 100000, 64, 'sha512', function(err, hashed) {
			if (err) {
				console.log(err);
			} else {
				console.log(hashed);
				console.log('hashed : ' + hashed.toString('base64'));
			}
		});
	}
});