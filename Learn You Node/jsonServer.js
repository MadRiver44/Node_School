var http = require('http');
var url = require('url');
var port = process.argv[2];




var server = http.createServer(function(request, response){
	var urlObj = url.parse(request.url, true);
	var pathname = urlObj.pathname;
	var startTime = urlObj.query.iso;
	var result;

	if (pathname === '/api/unixtime'){
		result = getUnixTimestamp(startTime);
	}else if (pathname === '/api/parsetime'){
		result = getTimeObj(startTime);
	}

	if (result){
		response.writeHead(200, {"content-type" : "application/json"});
		response.end(JSON.stringify(result));
	}else {
		response.writeHead(404);
		response.end();
	}
	
});
server.listen(port);

function getUnixTimestamp(startTime){
	return {unixtime : getTimestamp(startTime)};
}

function getTimestamp(startTime){
	return Date.parse(startTime);
}

function getTimeObj(startTime){
	var date = new Date(getTimestamp(startTime));
	return {
			hour : date.getHours(),
			minute : date.getMinutes(),
			second : date.getSeconds()	
			};
}




/* official solutuion

   
     var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  
   
*/