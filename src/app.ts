/*
 * https://www.typescriptlang.org/docs/handbook/modules/reference.html#export--and-import--require
 * CommonJS requires should be replaced with 'import = require()' syntax in typescript, so you can get the types correctly
 * const fs = require('fs') => import fs = require('fs')
 */

// import fs = require('fs') // CommonJS require
const fs = require('fs'); // ES Module import

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
