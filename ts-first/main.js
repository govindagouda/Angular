var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.sayHello = function () {
        console.log("value x" + this.x + " value y " + this.y);
    };
    return car;
}());
var craobj = new car();
craobj.x = "hi";
craobj.y = 10;
craobj.sayHello();
