"use strict";
//Let declaration is not hoisted
var a = 2;
var b = 3;
if (a === 2) {
    var a = 20;
    var b_1 = 30;
    console.log('inside if block a=', a, ' b=', b_1);
}
console.log('inside if block a=', a, ' b=', b);
//var can be redeclared but let cannot be redeclrared
var c = 10;
var c = 50;
//but let cannot be
