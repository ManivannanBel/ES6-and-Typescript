let array = [1,2,3,4,5,6,7]
array.forEach(arrayFunction)
function arrayFunction(element, index, array) {
    console.log('arr['+index+'] = '+element)
}

let map = new Map([['a','apple'],['b','ball'],['c','car']])
map.forEach(mapFunction)
function mapFunction(value, key, map){
    console.log(key+" : "+value)
}

let set = new Set([15,25,37,4,5,6,7,89,67])
set.forEach(setFunction)
function setFunction(value, key, set){
    console.log(key+" : "+value)
}