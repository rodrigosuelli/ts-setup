/*
 * https://www.typescriptlang.org/docs/handbook/modules/reference.html#export--and-import--require
 * CommonJS requires should be replaced with 'import = require()' syntax in typescript, so you can get the types correctly
 * const fs = require('fs') => import fs = require('fs')
 */

// import fs = require('fs') // Typescript compatible Require
import fs from 'fs'; // ES Module import
import { sum } from './utils/sum';

try {
  fs.appendFileSync('mynewfile1.txt', 'Hello content!');
  console.log('Saved!');

  const n1: number = 1;
  const hi = 'hi';

  const car = {
    model: 'fiat',
    year: 2024,
  };

  const model = car.model;
  const year = car.year;

  console.log(hi.replaceAll('h', 'a'));
  console.log(hi);
  console.log(n1);

  console.log(sum(1, 2));
} catch (error) {
  console.log(error);
}
