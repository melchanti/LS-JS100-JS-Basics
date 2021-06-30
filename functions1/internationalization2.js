function extractRegion (code) {
	return code.split('.')[0].split('_')[1];
}

function extractLanguage (code) {

	return code.split('_')[0];
}

function greet (language, code) {
	switch (language) {
		case 'ab':
			return 'Бзиа збаша';
		case 'ak':
			return 'ete-sen';
		case 'en':
			switch (extractRegion(code)) {
				case 'US':
					return 'Hey!';
				case 'GB':
					return 'Hello!';
				case 'AU':
					return 'Howdy!';
			}
		case 'fr':
			return 'Salut!';
		case 'pt':
			return 'Ola!';
		case 'de':
			return 'Hallo!';
		case 'ko':
			return '안녕하세요';
	}
	
}

function localGreet (code) {
	return greet(extractLanguage(code), code);
}

console.log (localGreet ('en_US.UTF-8'));  // 'en'
console.log (localGreet ('en_GB.UTF-8'));  // 'en'
console.log (localGreet ('ko_KR.UTF-16')); // 'ko'