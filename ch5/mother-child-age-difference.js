let ancestry = require('./ancestry');

function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function byName(array) {
	let byName = {};
	array.forEach(function(person) {
		byName[person.name] = person;
	});
	return byName;
}

function motherAgesAtChildBirth(byNameObj) {
	let ages = [];
	Object.values(byNameObj).forEach(function(person) {
		if (person.mother in byNameObj) {
			ages.push(person.born - byNameObj[person.mother].born);
		}
	});
	return ages;
}

// Using more built-in functions
// Filter provides a more elegant way of not including mothers
// who don't exist in the data
// Map provides a better way of getting the ages
let motherAgesAtChildBirthMap = ancestry.filter(function(person) {
	return byName(ancestry)[person.mother] != null;
}).map(function(person) {
	return person.born - byName(ancestry)[person.mother].born;
});

console.log(average(motherAgesAtChildBirth(byName(ancestry))));
console.log(average(motherAgesAtChildBirthMap));