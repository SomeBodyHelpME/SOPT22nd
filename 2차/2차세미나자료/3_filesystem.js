const fs = require('fs');

var readFile = function() {
  fs.readFile('data.txt', 'utf8', function(err, data){
		if (err) {
			console.log('err : ' + err);
		} else {
			console.log('Successfully read file');
	  	console.log(data);
		}
	});
};

var writeFile = function() {
	let data = 'write file!';
	fs.writeFile('write.txt', data, 'utf8', function(err) {
		if (err) {
			console.log('err : ' + err);
		} else {
			console.log('Successfully write file');
		}
	});
};

//readFile();
//writeFile();
