function countWords(inputWords){
	return inputWords.reduce(function(item,count){
		console.log(item);
		if(!item[count]){
			item[count] = 1;
		}else{
			item[count] += 1;
		}
		return item; // always return the item
	},{}); // always supply an initial value, the problem requested an object
}
module.exports = countWords;

/* breakdown -- need help understanding how count var works or is assigned????





────────────────────────────────────────────────────────────────────────────────
    function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
    
    module.exports = countWords

────────────────────────────────────────────────────────────────────────────────

*/
