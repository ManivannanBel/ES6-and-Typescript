//Let declaration is not hoisted
//Variables declared with let is only has its scope to its own block
var a = 2
var b = 3
if(a === 2){
    var a = 20
    let b = 30
    console.log('inside if block a=',a,' b=',b)
}
console.log('inside if block a=',a,' b=',b)

//var can be redeclared but let cannot be redeclrared
var c = 10
var c = 50
//but let cannot be