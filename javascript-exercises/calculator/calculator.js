function add (x1, x2) {
	return x1 + x2;
}

function subtract (x1, x2) {
	return x1 - x2;
}

function sum (array) {
	return array.reduce((a, b) => a + b, 0);
}

function multiply (array) {
	// Has to be 1 as the default b/c the first run it 0 * 2 => 0.
	// By setting default to 1, we let the problem continue. 
	return array.reduce((a, b) => a * b, 1);
}

function power(x1, x2) {
	return Math.pow(x1, x2);
}

function factorial(x1) {
	if (x1 == 0 || x1 == 1) return 1;
	let product = 1;

	for (var i = x1; i > 0; i--) {
		product *= i;
	}

	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}