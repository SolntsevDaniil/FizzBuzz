(function() {
'use strict';

	var doc = document,
		i = 1;

	while(i < 101) {

		if (i % 15 == 0) { doc.write("<p>FizzBuzz</p>"); }
		else if (i % 5 == 0) { doc.write("<p>Buzz</p>"); }
		else if (i % 3 == 0) { doc.write("<p>Fizz</p>"); }
		else { doc.write("<p>" + i + "</p>"); }

		i++;
	};

})()