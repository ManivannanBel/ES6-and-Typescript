"use strict";
var displayColors = function (message) {
    console.log(message);
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
var message = 'List of colors';
displayColors(message, 'red', 'blue', 'green');
//Rest operator
var displayColorsRest = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
displayColorsRest(message, 'red', 'blue', 'green');
