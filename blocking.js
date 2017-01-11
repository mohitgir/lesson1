/**
 * Created by Mohit Gir on 2017-01-11.
 */

//reference the fileSystem module that ships with node

var fs = require('fs');

//drinks
console.log('DRINKS:');

var drinks = fs.readFileSync('drinks.txt','utf8');
console.log(drinks);

//foods
console.log('\nFOOD:');

var food = fs.readFileSync('food.txt','utf8');
console.log(food);