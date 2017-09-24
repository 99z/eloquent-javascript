function every(array, cb) {
	return array.map(function(value) {
		return cb(value);
	}).reduce(function(a, b) {
		return a === b;
	});
}

function some(array, cb) {
	for (i = 0; i < array.length; i++) {
		if (cb(array[i])) return true;
	}
	return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));