var http = require('http');
var urls = process.argv.slice(2);

var count = 0;

var output = [];
urls.forEach(getHttp); // array of url's, call the gethttp function on each item

function getHttp(url, index){
	http.get(url, function(response){
		var str = "";
			response.setEncoding("utf8");
			response.on('data', function(data){
				str += data;
			});
			response.on('end',function(){
				output[index] = str;
				count++;
				if (count === urls.length){
					output.forEach(function(item){
						console.log(item);
				});
			}
		});
	});	
}


/*
concatStream solution, this is a much simpler solution to understand

var http = require('http');
var concatStream = require('concat-stream');

var urls = process.argv.slice(2),
    results = [],
    resultsCount = 0;

urls.forEach(function (url, i) {
  http.get(url, function (response) {
    response.setEncoding('utf8');

    response.pipe(concatStream(function (data) {
      results[i] = data;
      resultsCount++;

      if (resultsCount === urls.length) {
        results.forEach(function (result) {
          console.log(result);
        });
      }
    }));    
  });
});

*/
