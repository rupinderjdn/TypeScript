// Interfaces
interface Point{
    x:number;
    y:number;
}

const pt: Point = {x:123, y:234};

// we can create optional properties similar to types
interface Person{
    readonly id: number; // making readonly not updatable
    first: string;
    last: string;
    nickname?: string;
    sayHi: ()=> string; // sayHi must be a method and it should return a string, with zero arguments
    sayHi2(): string; // sayHi must be a method and it should return a string, with zero arguments
}

const thomas: Person = {id:2345,first:"Thomas", last:"hardy", sayHi: ()=>{return "hello"}};
thomas.id = "4566" // returns an error as id is readonly

//  Types vs Interfaces
// interface can be reopen and can have additional properties
interface Dog {
    readonly id: number;
    first: string;
    last: string;
    sayWoof(): string;
}

interface Dog{
    breed: string;
}

const elton: Dog = {
    id:1,
    first: "Elton",
    last: "Singh",
    sayWoof() {
        return "woof";
    },
    breed: "Dobberman",
}

// Extending another interface
interface ServiceDog extends Dog {
    duties: ("drug" | "bomb" | "guide")[], // array of a union better use types here or enum
}

const Chevy :ServiceDog = {
    id: 2,
    first:"Chevy",
    last: "sharma",
    breed: "lab",
    sayWoof(): string {
        return "bow bow";
    },
    duties: ["guide"],
}
// we can extend multiple interfaces as well

// Why use Interfaces ?
// for inheritance and methods and classes
// better use would be to use Classes which extends and interface or multiple





