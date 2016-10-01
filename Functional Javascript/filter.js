function getShortMessages(arr){
	return arr.filter(function(item,index){ //don't forget getShortMassages has to return 
											//something and so does the anonymous function
		if (item.message.length < 50){
			return item.message;
		}
	}).map(function(item){ // have to pass in what you filter
		return item.message;
	});
}
module.exports = getShortMessages;

/* breakdown
1. we are taking an array (arr) passed in our original function and returning a 
   new 'filtered array'.
2. the filter method is called on arr and a test is provided in the callback function.
   The callback function has to return something, here it is the filtered item.
3. We simply chain map onto the operation to return a new array with the filtered results.



/* official solution
────────────────────────────────────────────────────────────────────────────────
    module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }

────────────────────────────────────────────────────────────────────────────────

*/
