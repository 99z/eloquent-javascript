function isEven(number) {
	if (number < 0)
		return new Error("Please use a number >= 0.")
	else if (number == 0)
		return true;
	else if (number == 1)
		return false;
	else
		return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
// Causes call stack exceeded:
// console.log(isEven(4212304));