var nothing = null;
var foo = undefined;
// type Inference
var tvShow = "Breaking bad";
// tvShow = false; error
var isFunny = true;
// isFunny = "asd" error
// -------------- ANY --------------
var thing = "hello";
thing = "world";
thing = 23;
// -------------- NECCESSARY TO DECALRE TYPE --------------
var movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
var foundMovie; // here foundMovie will be declared with a type any so in this case we need to specify which type
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === 'Amadeus') {
        foundMovie = "Amadeus";
    }
}
