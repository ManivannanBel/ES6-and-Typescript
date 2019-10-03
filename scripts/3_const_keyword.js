"use strict";
var a1 = 10;
//Const variable is local to its scope block
var b1 = 2;
var obj1 = {
    name: 'mani'
};
console.log(obj1);
//Assigning a new obj cannot be possible
//obj1 = { name:'max'}
//But you can assign a the property of the object
obj1.name = 'max';
console.log(obj1);
