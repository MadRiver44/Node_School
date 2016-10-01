function foo(){
	quux = 1;
	function zip(){
		bar = true;
		var quux = 2;
	}
	var bar;
	return zip;
}