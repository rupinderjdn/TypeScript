function square(num){ // by default this apramtere is going to be "any"
    return num * num;
}

// it will not care for the type string or boolean
console.log(square(3));
console.log(square("asd")); // no error
console.log(square(true));
 // no error

// having defined type
function greet(person: string){
    console.log("Hello, " + person);
}
greet("John"); // no error
greet(123); // error

//  --------------- Default parameters ----------------
function greet2(person:string = "stranger"){
    console.log("Hello, " + person);
    return "Hello"
}
greet2();
greet2("David");

// ----------------- Return Types ---------------------
const addNums = (x: number,y: number): number =>{
    return x+y;
}
console.log(addNums(2,3));
console.log(addNums("test","string"));
console.log(addNums(2,3));

function rando(num: number){
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
}

// ---------------- Anonymous functions --------------
const colors = ["red","orange","yellow"];
colors.map((color)=>{
    return color.toUpperCase();
})

// ----------------------- VOID -----------------

function printTwice(msg: string): void{
    console.log(msg);
    console.log(msg);
    return msg; // error on returning string need to be void
}
printTwice("Hello");

// ----------------------- NEVER -----------------

const stopFunction = (): never =>{
    return "end"; // error for returning anything
}

const makeError = (msg: string): never=>{
    throw new Error(msg); // no error perfectly fine
}
