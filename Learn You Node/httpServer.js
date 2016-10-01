var http = require('http'); // load the two modules needed
var fs = require('fs');

var port = process.argv[2]; // set vars to handle command line args
var file = process.argv[3];



var server = http.createServer(function(request, response){
	response.writeHead(200,{"Content-Type": "text/plain"});
	fs.createReadStream(file).pipe(response);
})
server.listen(port);

// the server object returned by createServer is an "eventEmitter"
/* In order to actually serve requests, the listen method needs 
to be called on the server object. In most cases, all you'll need
to pass to listen is the port number you want the server to listen 
on. */

/* Notes
define a server (create a web server object), the function inside is called
request handler. request object is an instance of "IncomingMessage"

// you have to write headers either implicitly or explicitly
// before you can send data

/* 
The request object that's passed in to a handler implements the 
ReadableStream interface. This stream can be listened to or piped 
elsewhere just like any other stream. We can grab the data right out 
of the stream by listening to the stream's 'data' and 'end' events. 

The chunk emitted in each 'data' event is a Buffer. If you know it's 
going to be string data, the best thing to do is collect the data 
in an array, then at the 'end', concatenate and stringify it.
*/

	/* The response object is an instance of ServerResponse which is a 
	WritableStream. It contains many useful methods for sending data back 
	to the client.
	*/


// for more info ... https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

/* official solution

     var http = require('http')  
     var fs = require('fs')  
       
     var server = http.createServer(function (req, res) {  
       res.writeHead(200, { 'content-type': 'text/plain' })  
       
       fs.createReadStream(process.argv[3]).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  
   

*/