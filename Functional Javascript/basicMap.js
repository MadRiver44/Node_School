/* code to transform
function doubleAll(numbers){
	var result = [];
	for (var i = 0; i < numbers.length; i++){
		result.push(numbers[i] * 2;)
	}
return result;
}
*/

function doubleAll(numbers){
	return numbers.map(function(item){
		return item * 2;
	},[]);
}

module.exports = doubleAll

/* breakdown
1. map operates on a supplied array, takes a callback function that will
   transform the array into a new one of the SAME length 
   as the original.
2.here, the transformation is by multiplying each element by two.


/* official solution
────────────────────────────────────────────────────────────────────────────────
    module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }

────────────────────────────────────────────────────────────────────────────────
*/
