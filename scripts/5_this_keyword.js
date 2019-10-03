"use strict";
var obj = {
    id: 1,
    greet: function () {
        var _this = this;
        console.log(this.id);
        setTimeout(function () { console.log(this.id); }, 1000); //This value is bound to inner function, so output is undefined
        setTimeout(function () { console.log(_this.id); }, 1000); //But in this arrow function displays the this.id value
    }
};
obj.greet();
