var fs = require("fs");

// fs.readFileSync(), takes as argument, process.argv[2] -- which is the 
// contents of a file in the form of a Buffer (an array like object with a dedicated 
// allocated space in memory that can't be resized and it meant to handle binary data).

// because we have an array loke object returned, we can turn it into a string and
// 'then use the ('\n') newline as a delimter to split it into an array

// from there we derive the length.

var contents = fs.readFileSync(process.argv[2]).toString().split('\n');
var result = contents.length-1;
console.log(result);


/*----------------------------------------
offical answer
     var fs = require('fs')  
       
     var contents = fs.readFileSync(process.argv[2])  
     var lines = contents.toString().split('\n').length - 1  
     console.log(lines) 


     ---------------------------------------*/
