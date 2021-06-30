let str = 'Captain Ruby';

let num = str.indexOf(' ');

let newStr = str.substring(0, num+1);

str = newStr.concat('JavaScript');

let str2 = 'Captain Ruby';

str2 = str2.substring(0, str2.indexOf(' ')+1).concat('JavaScript');

console.log(str);
console.log (str2);