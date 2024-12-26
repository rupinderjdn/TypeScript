// Tuples

const color: number[] = [23,45,56];
const color2: [number,number,number] = [255,0,255]; // a tuple for rgb colors
// const color3: [number,number,number] = [255,0,25,355]; // error for an extra element

type HttpResponse = [number,string];
const goodRes: HttpResponse = [200,"OK"];
// const goodRes2: HttpResponse = ["OK",200]; // error as the order is not followed
// goodRes[0] = "200"; error for changing the type of 0th element
goodRes.push(0); // no error, maybe tuples doesn't check this in the backend.


const responses: HttpResponse[] = [[404,"not Found"]];  // array of tuples

// Enums

// we haven't assigned any values to our enums but typescript assigns them a value starting from 0.
// we can assign a manual values and then the forward ones will be the increment of them.
enum OrderStatus {
    PENDING,SHIPPED,DELIVERED,RETURNED
}
const ourStatus  = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(ourStatus));

// can be used for configs
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 233,
}
// Well compiling them creates a function of constants, pretty much i use to do it creating config constants

enum OrderStatus2 {
    PENDING, SHIPPED
}

// got an error waht iw as trying to do was check if enums resolves it values to integers will it give same values in case i compare two different enums. that seems to be handled on the typescript compilation level. seems to sensible since would be hard to track once they are resolved to javascript
// console.log(OrderStatus.PENDING === OrderStatus2.PENDING);






