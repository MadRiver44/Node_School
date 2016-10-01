var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var upperCase = map(function(chunk){
	return chunk.toString().toUpperCase();
});
var port = process.argv[2];


var server = http.createServer(function(request, response){
	response.writeHead(200, {'content-type: text/plain'});
	if (request.method === 'POST'){
		request.pipe(upperCase).pipe(response);
	}

});
server.listen(port);
