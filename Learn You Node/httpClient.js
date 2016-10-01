var http = require('http');
var url = process.argv[2] // url passed as first cmd line arg

http.get(url, function(response){
	response.setEncoding("utf8"); // returns a string instead of a buffer object
	response.on("data",function(item){
		console.log(item);
	});
		
	});
	
// official solution	
/*
     var http = require('http')  
       
     http.get(process.argv[2], function (response) {  
       response.setEncoding('utf8')  
       response.on('data', console.log)  
       response.on('error', console.error)  
     })  
*/
