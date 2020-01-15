(function () { // Declare anonymous function
var num = prompt('Type a number'); // Ask user to type number

function random_string() { // Declare function to get random string
    var result = ''; // Assign empty string to variable
    var string = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM'; // Assign A-Z and 0-9
    var max_position = string.length - 1;
        for( i = 0; i < num; ++i ) { // Create a loop
            var position = Math.floor ( Math.random() * max_position ); // Get random letter/number
            result = result + string[position]; // Append more and more till N
        }
    return result;
}

console.log(random_string()); 

var symbol = prompt('Type the 1st symbol'); 

function symbol_replacement() { 
	var output = result; // Get previous result
	if (typeof (result[i]) == 'string') {
	    for (var i = 0; i < result.length; i + 1) { // Step + 1
        symbol = result[i];
    	}		
	}

    return output;
}
console.log(symbol_replacement());

var sign = prompt('Type the 2nd symbol');

function sign_replacement() {
	var output2 = output; // Get previous result
	if (typeof (result[i]) == 'number') {
		for (var i = 0; i < output.length; i + 2) { // Step + 2
		sign = output[i];
		}		
	}

	return output2;
}
console.log(sign_replacement());

function quantity() {
	count = output2.length;
	var res = 0;
	for ( i = 0; i < count; i++){
		if (output2.charAt (i) = symbol || output2.charAt (i) = sign)
			res++;
	}
	return res
}

console.log(quantity());

}) ();






