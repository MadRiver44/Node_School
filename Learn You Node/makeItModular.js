//import required node modules, fs and path

var path = require('path');
var fs = require('fs');

// as per instructions, export a single function with 3 arguents specified
module.exports = function(dirName, fileExt, callback){
	var filterArr = [];
//fileSystem.readdir takes 2 args, (directory path and callback)
// callback takes 2 args, (err and file)
fs.readdir(dirName, function(err, data){
	// this first err handles the readdir err
	if(err){
		// if err in readdir, invoke callback and handle that err
		return callback(err);
	}
	// run test on each item and push that to  new array
	data.forEach(function(item){ // forEach does not itself return a new array
		if (path.extname(item) === '.' + fileExt){
			filterArr.push(item);
		}

	});
	// invoke callback function defined in other file (modular.js)
	// callback takes 2 args, null if no error and ffiltered file extentions
	callback(null,filterArr);
});
	
};


// official solution
/*

  _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti  
  on/solution_filter.js_ :  
   
     var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  
  */
  