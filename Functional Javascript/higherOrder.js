function repeat(operation, num){
	while(num > 0){
		operation();
		num--;
	}
	
}

module.exports = repeat;

/* official solution

────────────────────────────────────────────────────────────────────────────────
    function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }
    
    module.exports = repeat

────────────────────────────────────────────────────────────────────────────────

*/

