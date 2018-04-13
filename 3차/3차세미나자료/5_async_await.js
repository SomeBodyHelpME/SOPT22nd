const crypto = require('crypto-promise');

const fsmod = require('./fsmod.js');

var create = function() {
	let pwd = 'password';

	const salt = await crypto.randomBytes(32);
	const hashedpwd = await crypto.pbkdf2(pwd, salt.toString('base64'), 100000, 32, 'sha512');
	  
	console.log('salt : ' + salt.toString('base64'));
	console.log('hashedpwd : '+ hashedpwd.toString('base64'));
	  
	let result = await fsmod.writeFile('./pwd.txt', hashedpwd.toString('base64'), 'utf8');

}

create();