function catAge(humanYears) {
	if (humanYears === 1) return 15;

	if (humanYears=== 2) return 24;

	else if (humanYears > 2) {
		return 24 + (humanYears-2) * 4;
	}

	else return 0
}

console.log (catAge(0));
console.log (catAge(1));
console.log (catAge(2));
console.log (catAge(3));
console.log (catAge(4));