var fs = require('fs');

var contents = fs.readFile(null,function callback(err,process.argv[2]){
	if (err){
		throw err;
	}
}).toString().split('\n');
var result = contents.length-1;
console.log(result);