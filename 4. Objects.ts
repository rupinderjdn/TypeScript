const dog = {
  name: "Elton",
  breed: "Shepherd",
  age: 0.5,
};

function printName(name: { first: string; last: string }) {
  console.log(name.first + " " + name.last);
}

printName({ first: "Theme", last: "jenkins" });

// --------------- for defining a variable ---------

var coordinate: { x: number; y: number } = { x: 34, y: 45 };
// telling the object co-ordinate to follow a specific pattern
// this is called type annotation
// this is used to tell the compiler that the variable is of a specific type
// this is used to prevent the variable from being assigned a value of a different type

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

printName({ first: "Theme", last: "jenkins", age: 56 });
const singer = { first: "Theme", last: "jenkins", age: 56 };
printName(singer);

// ---------------- TYPE -------------------------------

type Point = {
  x: number;
  y: number;
};

function randomCoordinate2(): { point: Point } {
  return { point: { x: Math.random(), y: Math.random() } };
}

// ---------------- Nested Objects ---------------------
type song = {
  title: string;
  trackNumber: number;
  duration: number;
};
type album = {
  title: string;
  artist: string;
  album: string;
  releaseDate: Date;
  tracks: [song];
};
function playAlbum(album): void {
  console.log(album.title);
  console.log(album.artist);
  console.log(album.releaseDate);
  album.tracks.forEach((track) => {
    console.log(track.title);
    console.log(track.trackNumber);
    console.log(track.duration);
  });
}

const album = {
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
}
playAlbum(album);
//  ------------------- Optional ------------------
type Point2 = {
  x: number,
  y: number,
  z?: number
}

//  --------------------- Readonly ----------------
type User = {
  readonly id:number;
  username: string;
}
const user: User = {
  id: 12873,
  username: "catgirl"
}

console.log(user.id);

user.id = 12345 // error because a readonly property is getting updated

//  ------------------- Intersection ----------------

type Circle = {
  radius: Number;
}

type Colorful = {
  color: string;
}

// now if we want to make a type colorfull circle or just combine them for a common property

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle={
  radius: 10,
  color: "blue"
}

type Cat = {
  numLives: number
}
type Dog = {
  breed: string
}
// intersecting cat dog and adding a new property
type CatDog = Cat & Dog & {
  age: number,
}


