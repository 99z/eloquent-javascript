function deepEqual(a, b) {
	if (typeof a === 'object' && typeof b === 'object') {
		for (key in a) {
			if (key in b) {
				if (!deepEqual(a[key], b[key])) return false;
			}
		}
		return true;
	} else {
		return a === b;
	}
}

console.log(deepEqual(1, 1));
console.log(deepEqual({val: 2, hey: 'there'}, {val: 2, hey: 'there'}));
console.log(deepEqual({val: 2, hey: 'there'}, {val: 2, hey: 'boyo'}));
console.log(deepEqual({val: 2, hey: {you: 'there'}}, {val: 2, hey: {you: 'there'}}));