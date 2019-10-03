//Spread takes an array of argument and spreads it i.e. opposite to spread
let displayColorsRest1 = (message, ...colors) => {
    console.log(message)
    for(let i in colors){
        console.log(colors[i])
    }
}

let message = 'list of colors: spread operator'
let colorArray = ['red', 'green', 'blue']
displayColorsRest1(message, ...colorArray)