import fs from 'fs';

function sum(a: number, b: number) {
  return a + b;
}

try {
  fs.appendFileSync('mynewfile1.txt', 'Hello content!');
  console.log('Saved!');

  let n1: number = 1;
  const hi = 'hi';

  console.log(hi.replaceAll('h', 'a'));

  console.log(hi);
  console.log(n1);

  console.log(sum(1, 2));
} catch (error) {
  console.log(error);
}
