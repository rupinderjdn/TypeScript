function square(num) {
    return num * num;
}
// it will not care for the type string or boolean
console.log(square(3));
console.log(square("asd")); // no error
console.log(square(true));
// no error
// having defined type
function greet(person) {
    console.log("Hello, " + person);
}
greet("John"); // no error
greet(123); // error
//  --------------- Default parameters ----------------
function greet2(person) {
    if (person === void 0) { person = "stranger"; }
    console.log("Hello, " + person);
    return "Hello";
}
greet2();
greet2("David");
// ----------------- Return Types ---------------------
var addNums = function (x, y) {
    return x + y;
};
console.log(addNums(2, 3));
console.log(addNums("test", "string"));
console.log(addNums(2, 3));
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
// ---------------- Anonymous functions --------------
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
    return color.toUpperCase();
});
// ----------------------- VOID -----------------
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
    return msg; // error on returning string need to be void
}
printTwice("Hello");
// ----------------------- NEVER -----------------
var stopFunction = function () {
    return "end"; // error for returning anything
};
var makeError = function (msg) {
    throw new Error(msg); // no error perfectly fine
};
