//console.log(process.argv);

	var sum = 0;
	for( var i = 2; i < process.argv.length; i++){
		var num = Number(process.argv[i]);
		sum += num;
	}

console.log(sum);



/*------------------------------------

offical result

     var result = 0  
       
     for (var i = 2; i < process.argv.length; i++)  
       result += Number(process.argv[i])  
       
     console.log(result)


     ---------------------------------*/