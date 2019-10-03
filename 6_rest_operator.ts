let displayColors = (message) => {
    console.log(message)
    for(let i in arguments){
        console.log(arguments[i])
    }

}
const message = 'List of colors'
displayColors(message, 'red','blue', 'green')

//Rest operator
let displayColorsRest = (message, ...colors) => {
    console.log(message)
    for(let i in colors){
        console.log(colors[i])
    }
}
displayColorsRest(message, 'red','blue', 'green')