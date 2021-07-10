let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(location, destinations) {

	for (destination of destinations) {
		if (destination === location) return true;
	}

	return false;
}

console.log (contains('Barcelona', destinations)); // true
console.log (contains('Nashville', destinations)); // false