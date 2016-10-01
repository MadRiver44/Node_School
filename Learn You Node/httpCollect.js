var http = require('http');
var url = process.argv[2];
var str = "";
/*
All objects that emit events are instances of the EventEmitter class. 
These objects expose an eventEmitter.on() function that allows one or 
more Functions to be attached to named events emitted by the object. 
Typically, event names are camel-cased strings but any valid JavaScript 
property key can be used.
*/

http.get(url, function(response){ // get method takes url and a callback as args, returns 
								  // response object.

/* the response object is a Node Stream object that emit events. The 3 events most 
important are " data, error, and end "
syntax is - reponse.on("data", function(data){.....})
			response.on("error", function(){....})
			resoonse.on("end", function(){....}) */

	response.setEncoding("utf8"); // set encoding  - returns a string instead of buffer obj
								  // that has to then be converted to a string

// 'on' is an emitter(data = event name, callback is event listener)	
// event name is always a string, listener is a function						  
	response.on("data", function(data){ // data event is emitted when a chunk of data is 
										// avaialable for processing
		str += data;
	}).on('end', function(){ // listen for 'end' event then console log, here it's chained
			console.log(str.length);
			console.log(str);
		});
});

/* official solution using 'bl'

     var http = require('http')  
     var bl = require('bl')  
       
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  
*/


/* with concat-stream

var concatStream = require('concat-stream');
var http = require('http');

var url = process.argv[2];

http.get(url, function (response) {
  response.setEncoding('utf8');
  response.pipe(concatStream(function (data) {
    console.log(data.length);
    console.log(data);
  }));
});
*/