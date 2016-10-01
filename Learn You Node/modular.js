var makeItModular = require('./makeItModular.js');

var dirName = process.argv[2];
var fileExt = process.argv[3];

var callback = (dirName, fileExt, function(err, data){
	if (err){
		return console.log(err);
	}data.forEach(function(item){
		console.log(item);
	})
})
// invoke modular function
makeItModular(dirName,fileExt,callback);



// official solution

/*
  _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti  
  on/solution.js_ :  
   
     var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
       
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  
*/