function greet (language){
	switch (language){
		case 'ab':
			return 'Бзиа збаша';
		case 'ak':
			return 'ete-sen';
		case 'en':
			return 'hi';
		case 'fr':
			return 'Salut!';
		case 'pt':
			return 'Ola!';
		case 'de':
			return 'Hallo!';
	}
	
}

console.log (greet('en')); // 'Hi!'
console.log (greet('fr')); // 'Salut!'
console.log (greet('pt')); // 'Olá!'
console.log (greet('de')); // 'Hallo!'
console.log (greet('ab')); // 'Hej!'
console.log (greet('ak')); // 'Haai!'