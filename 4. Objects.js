var dog = {
    name: "Elton",
    breed: "Shepherd",
    age: 0.5,
};
function printName(name) {
    console.log(name.first + " " + name.last);
}
printName({ first: "Theme", last: "jenkins" });
// --------------- for defining a variable ---------
var coordinate = { x: 34, y: 45 };
// telling the object co-ordinate to follow a specific pattern
// this is called type annotation
// this is used to tell the compiler that the variable is of a specific type
// this is used to prevent the variable from being assigned a value of a different type
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
printName({ first: "Theme", last: "jenkins", age: 56 });
var singer = { first: "Theme", last: "jenkins", age: 56 };
printName(singer);
function randomCoordinate2() {
    return { point: { x: Math.random(), y: Math.random() } };
}
function playAlbum(album) {
    console.log(album.title);
    console.log(album.artist);
    console.log(album.releaseDate);
    album.tracks.forEach(function (track) {
        console.log(track.title);
        console.log(track.trackNumber);
        console.log(track.duration);
    });
}
var album = {
    title: "The Album",
    artist: "Theme Jenkins",
    album: "The Album",
    releaseDate: new Date(),
    tracks: [
        {
            title: "Track 1",
            trackNumber: 1,
            duration: 3.5,
        },
    ],
};
playAlbum(album);
