let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedArray = [];

for (let prop in person) {
	nestedArray.push([prop,person[prop]]);
}

console.log (nestedArray);