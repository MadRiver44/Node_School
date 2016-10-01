var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var upperCase = map(function(chunk){
	return chunk.toString().toUpperCase();
});
var port = process.argv[2];


var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	if (request.method === 'POST'){
		request.pipe(upperCase).pipe(response);
	}

});
server.listen(port);

/* official solution

   
     var http = require('http')  
     var map = require('through2-map')  
       
     var server = http.createServer(function (req, res) {  
       if (req.method != 'POST')  
         return res.end('send me a POST\n')  
       
       req.pipe(map(function (chunk) {  
         return chunk.toString().toUpperCase()  
       })).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))

*/
