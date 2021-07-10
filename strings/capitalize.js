let string = 'launch school tech & talk';

let words = string.split(' ');

let newWords = [];
for (word of words) {
	let newWord = word[0].toUpperCase() + word.substring(1);

	newWords.push(newWord);
}

console.log(newWords.join(' '));