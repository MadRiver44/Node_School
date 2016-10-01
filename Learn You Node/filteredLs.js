var path = require('path');
var fs = require('fs');

fs.readdir(process.argv[2], function callback(err, files){
	// with async, handle error first and always!
	if(err){
		throw(err);
	}
	/* use an async capable function, forEach() to filter files by type
		use path.extname() - returns file type from "." to
		end of the string */

	/* process.argv[] holds command line argumennts, the first two are
	always "node" then file */

	files.forEach(function(item){
		if (path.extname(item) === '.' + process.argv[3]){
			console.log(item);
		}
	})
})