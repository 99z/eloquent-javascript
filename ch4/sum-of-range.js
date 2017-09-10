function range(start, end) {
	let values = [];
	while (start <= end) {
		values.push(start);
		start += 1;
	}
	return values;
}

function sum(numbers) {
	let total = 0;
	numbers.forEach(function(number) {
		total = total + number;
	});
	return total;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));