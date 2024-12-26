let age: number | string = 21;
age = 23;
age = "24";

//  ------------- Types --------------
type cood = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: cood | Loc = { x: 1, y: 34 };
coordinates = { lat: 1, long: 34 };

//  --------------- Type narrowing --------
function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    console.log(price.replace("&", "")); // NO error because type narrowing is done
  } else if (typeof price === "number") {
    console.log(price * tax); // NO error because type narrowing is done
  }
  // console.log(price * tax); // error because string is present as a union
  // console.log(price.replace("&", "")); // error because number is present as a union
}

//  --------------- Array Union -----------
// const stuff: (number | string)[] = ["as", 2, true]; // error on adding a boolean

//  --------------- Literal Types --------
let zero: 0 = 0;
// zero = 2; // error on assigning zero

// creating an enum dayofWeek

type dayofWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

  let today: dayofWeek = "Sunday";
