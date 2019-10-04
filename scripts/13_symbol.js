"use strict";
//It generates a unique value
var s = Symbol("First sysmbol");
console.log(typeof (s));
console.log(s.toString());
console.log(Symbol.keyFor(s)); //undefined
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 == s2); //false
//Symbol.for is used to find if already a symbol exist with the same name, then assigns it to the symbol, if not creates a new symbol ////with the value
var s4 = Symbol.for('RegSymbol');
var s5 = Symbol.for('RegSymbol');
console.log(s4 == s5); //true
console.log(Symbol.keyFor(s4)); //RegSymbol
