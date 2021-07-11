let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = {};
for (let item of nestedArray) {
	obj[item[0]] = item[1];
}

console.log (obj);