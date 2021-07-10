function isBlank (string) {

	if (string.length === 0) return true;
	else if (string === ' ') return true;
	else if (string === null) return true;

	return false;
}

console.log(isBlank('mars'));
console.log(isBlank(' '));
console.log(isBlank(''));