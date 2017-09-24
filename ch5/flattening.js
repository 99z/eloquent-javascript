let arrayOfArrays = [
	['Hello'],
	['there,'],
	['world!']
];

let flattenedArray = arrayOfArrays.reduce(function(a, b) {
	return a.concat(b);
});

console.log(flattenedArray);