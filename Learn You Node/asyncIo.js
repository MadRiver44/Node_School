var fs = require('fs');

var contents = fs.readFile(process.argv[2],function callback(err,data){
	if (err){
		return console.error(err);
	}
	console.log(data.toString().split('\n').length-1);
});
