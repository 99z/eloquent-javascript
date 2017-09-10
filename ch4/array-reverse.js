function reverseArray(arr) {
	let reversed = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		reversed.push(arr[i]);
	}
	return reversed;
}

function reverseArrayInPlace(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr.splice(i, 0, arr.pop());
	}
	return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));