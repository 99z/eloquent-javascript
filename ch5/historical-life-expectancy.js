let ancestry = require('./ancestry');

function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function unique(value, index, self) {
	return self.indexOf(value) === index;
}

function groupCenturies(array) {
	let groups = {};
	array.forEach(function(person) {
		groups[century(person)] ? groups[century(person)].push(age(person)) : groups[century(person)] = [age(person)];
	});
	return groups;
}

function age(p) { return p.died - p.born; }
function century(p) { return Math.ceil(p.died / 100); }

let groupedCenturies = groupCenturies(ancestry);
for (century in groupedCenturies) {
	console.log(century + ': ' + average(groupedCenturies[century]));
}