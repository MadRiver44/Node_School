var net = require('net');
var port = process.argv[2];
var date = new Date();

var server = net.createServer(function(socket){
	socket.setEncoding("utf8");
	socket.end(timeFormat() + '\n'); // call function when stream ends with a newline
});

server.listen(port);

function timeFormat(){ // format time to spec
	return (date.getFullYear() +'-'+ addZero(date.getMonth() + 1) + '-' +
			addZero(date.getDate() + ' ' )+ addZero(date.getHours()) + ':'+ 
			addZero(date.getMinutes()));
}

function addZero(num){  // to add  a zero in front of a single digit if need be
	return (num < 10 ? "0" + num : num);
}

/* official solution

     var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  


     */
   
