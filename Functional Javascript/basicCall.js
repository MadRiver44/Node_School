function duckCount(){
	var args = Array.prototype.slice.call(arguments);
	return args.filter(function(item){
		return Object.prototype.hasOwnProperty.call(item, 'quack') 
	}).length;
}
module.exports = duckCount;

/* breakdown

1. arguments object is 'array like', meaning it doesn't have other array props, but it
	does have Array.length property.
2. first I tried filter with test if ('quack' in item), no go, then I tried if 
	(Object.prototype.hasOwnProperty.call(item, 'quack'), no go.
3. were using call to set the 'this' object to the hasOwnProperty function and specifying
	the property we're looking for.
4. at first I used reduce as a chain on the filter, but since arguments has a length property
	it made sense to use it's length property as the final answer

official solution
────────────────────────────────────────────────────────────────────────────────
    function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }
    
    module.exports = duckCount

────────────────────────────────────────────────────────────────────────────────
