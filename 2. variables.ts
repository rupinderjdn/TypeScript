let nothing = null;
let foo = undefined;

// type Inference
let tvShow = "Breaking bad";
// tvShow = false; error
let isFunny = true;
// isFunny = "asd" error


// -------------- ANY --------------
var thing: any = "hello";
thing = "world";
thing = 23;

// -------------- NECCESSARY TO DECALRE TYPE --------------
const movies = ["Arrival","The Thing","Aliens","Amadeus"];
let foundMovie: string; // here foundMovie will be declared with a type any so in this case we need to specify which type

for(let movie of movies){
    if(movie === 'Amadeus'){
        foundMovie = "Amadeus"
    }
}


