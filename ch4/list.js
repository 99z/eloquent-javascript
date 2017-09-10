function arrayToList(arr) {
	let list = {};
	let curPos = list;
	arr.forEach(function(val, index) {
		curPos.val = val;
		if (index == arr.length - 1) {
			curPos.rest = null;
		} else {
			curPos.rest = {};
		}
		curPos = curPos.rest;
	})
	return list;
}

function listToArray(list, arr) {
	arr.push(list.val);
	if (list.rest != null) {
		return listToArray(list.rest, arr);
	}
	return arr;
}

function prepend(elem, list) {
	let newList = {};
	newList.val = elem.val;	
	newList.rest = list;
	return newList;
}

function nth(list, num) {
	if (list.val == num) {
		return list;
	} else {
		return nth(list.rest, num);
	}
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray({ val: 1, rest: { val: 2, rest: { val: 3, rest: null } } }, []));
// Verification that prepend() works
console.log(listToArray(prepend({val: 0, rest: {}}, { val: 1, rest: { val: 2, rest: { val: 3, rest: null } } }), []));
console.log(nth({ val: 1, rest: { val: 2, rest: { val: 3, rest: null } } }, 2));
