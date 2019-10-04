//It generates a unique value
let s = Symbol("First sysmbol")
console.log(typeof(s))
console.log(s.toString())
console.log(Symbol.keyFor(s))   //undefined

let s1 = Symbol()
let s2 = Symbol()

console.log(s1==s2)//false

//Symbol.for is used to find if already a symbol exist with the same name, then assigns it to the symbol, if not creates a new symbol ////with the value
let s4 = Symbol.for('RegSymbol') 
let s5 = Symbol.for('RegSymbol')

console.log(s4==s5)//true

console.log(Symbol.keyFor(s4))  //RegSymbol