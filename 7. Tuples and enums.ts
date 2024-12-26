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
