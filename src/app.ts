import fs from 'fs';

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

let n1: number = 1;
const hi = 'hi';

console.log(hi.replaceAll('h', 'a'));

console.log(hi);
console.log(n1);

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(1, 2));
