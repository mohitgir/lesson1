/**
 * Created by Mohit Gir on 2017-01-11.
 */

//reference the fileSystem module that ships with node

var fs = require('fs');

//get drinks
var drinks = fs.readFile('drinks.txt','utf8',function (err, drinks) {
    //if we get drinks, print them out
    console.log(drinks);

});

//drink heading
console.log('Drinks:');


//get food
var food = fs.readFile('food.txt','utf8',function (err, food) {
    //if we get food, print them out
    console.log(food);

});

//drink heading
console.log('Food:');




