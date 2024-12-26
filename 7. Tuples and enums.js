// Tuples
var color = [23, 45, 56];
var color2 = [255, 0, 255]; // a tuple for rgb colors
var goodRes = [200, "OK"];
// const goodRes2: HttpResponse = ["OK",200]; // error as the order is not followed
// goodRes[0] = "200"; error for changing the type of 0th element
goodRes.push(0); // no error, maybe tuples doesn't check this in the backend.
var responses = [[404, "not Found"]]; // array of tuples
// Enums
// we haven't assigned any values to our enums but typescript assigns them a value starting from 0.
// we can assign a manual values and then the forward ones will be the increment of them.
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var ourStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(ourStatus));
// can be used for configs
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
    ArrowKeys[ArrowKeys["ERROR"] = 233] = "ERROR";
})(ArrowKeys || (ArrowKeys = {}));
// Well compiling them creates a function of constants, pretty much i use to do it creating config constants
var OrderStatus2;
(function (OrderStatus2) {
    OrderStatus2[OrderStatus2["PENDING"] = 0] = "PENDING";
    OrderStatus2[OrderStatus2["SHIPPED"] = 1] = "SHIPPED";
})(OrderStatus2 || (OrderStatus2 = {}));
console.log(OrderStatus.PENDING === OrderStatus2.PENDING);
